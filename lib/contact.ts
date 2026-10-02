// Verified on Khulan's public portfolio. Override when UNIO has its own inbox.
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "devcode549@gmail.com";
export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
export function inquiryText(data: FormData) {
  return [
    "UNIO — Project inquiry",
    "",
    ...["name", "company", "contact", "service", "message"].map(
      (key) =>
        `${key[0].toUpperCase() + key.slice(1)}: ${String(data.get(key) || "").trim()}`,
    ),
  ].join("\n");
}
export function inquiryMailto(data: FormData) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(`UNIO — ${String(data.get("service"))}`)}&body=${encodeURIComponent(inquiryText(data))}`;
}
