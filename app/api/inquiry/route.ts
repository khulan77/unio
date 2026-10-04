import { inquiryText } from "@/lib/contact";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return Response.json({ error: "forbidden" }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json({ error: "invalid" }, { status: 400 });
  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 12000)
      return Response.json({ error: "invalid" }, { status: 413 });
    input = JSON.parse(raw);
    if (!input || typeof input !== "object" || Array.isArray(input))
      throw new Error();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  if (input.website)
    return Response.json({ error: "invalid" }, { status: 400 });
  const limits: Record<string, number> = {
    name: 100,
    company: 150,
    contact: 8,
    service: 200,
    package: 200,
    payment: 200,
    addon: 200,
    message: 3000,
  };
  const data = new FormData();
  for (const [key, limit] of Object.entries(limits)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > limit)
      return Response.json({ error: "invalid" }, { status: 400 });
    data.set(key, value.trim());
  }
  if (["name", "contact", "service", "message"].some((key) => !data.get(key)))
    return Response.json({ error: "invalid" }, { status: 400 });
  const phone = String(data.get("contact"));
  if (!/^[0-9]{8}$/.test(phone))
    return Response.json({ error: "invalid" }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !from)
    return Response.json({ error: "unavailable" }, { status: 503 });
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_TO_EMAIL || "devcode549@gmail.com"],
        subject: "UNIO — Project inquiry",
        text: inquiryText(data),
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok)
      return Response.json({ error: "send_failed" }, { status: 502 });
    const result = await response.json();
    if (!result.id)
      return Response.json({ error: "send_failed" }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
