// Use the same public origin for canonical links, previews and search discovery.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://unio-nu.vercel.app")
).replace(/\/$/, "");
