// Verified on Khulan's public portfolio. Override when UNIO has its own inbox.
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "devcode549@gmail.com";
export const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://www.instagram.com/dev_code77/";
export const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  "https://www.facebook.com/profile.php?id=61575885910109";
export const contactPhone = "85563793";
export const contactPhoneHref = "tel:+97685563793";
export function inquiryText(data: FormData) {
  return [
    "UNIO — Project inquiry",
    "",
    ...[
      "name",
      "company",
      "contact",
      "service",
      "package",
      "payment",
      "addon",
      "message",
    ].map(
      (key) =>
        `${key[0].toUpperCase() + key.slice(1)}: ${String(data.get(key) || "").trim()}`,
    ),
  ].join("\n");
}
export function inquiryMailto(data: FormData) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(`UNIO — ${String(data.get("service"))}`)}&body=${encodeURIComponent(inquiryText(data))}`;
}
