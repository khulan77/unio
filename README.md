# UNIO

A founder-led software studio website built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Mongolian is the default; English is available throughout the interface and the visitor's choice persists locally.

## Run

```sh
bun install --frozen-lockfile
bun dev
```

```sh
bun run lint
bunx tsc --noEmit
bun run build
bun start
```

## Content and components

- `lib/i18n.ts`: Mongolian and English interface copy.
- `lib/projects.ts`: six supplied project URLs and factual descriptions.
- `lib/contact.ts`: contact destination and email-draft generation.
- `components/`: navigation, hero/interface illustration, editorial project cards, services, case study, founder/process, contact dialog and footer.
- `public/projects/`: optimized WebP screenshots captured from the real sites on October 1, 2026.
- `public/fonts/`: self-hosted Manrope, including Cyrillic Ө/ө and Ү/ү.

The store is explicitly a demo. Dental, coffee and education are presented as demo work rather than claimed paying clients. Movie App is an experiment under More work. Organic Care's three-branch usage comes from the supplied brief; the founder's live portfolio confirms the private production system. Its accompanying admin screenshot and direct project URL were supplied by the owner.

## Contact

The form validates locally, then opens the visitor's email app with a prefilled inquiry to `devcode549@gmail.com`, verified on Khulan's public portfolio. The visitor must send that email themselves. A downloadable plain-text inquiry is also available. No delivery success is fabricated; no inquiry is stored by this website. Native dialog semantics provide Escape dismissal, focus containment and return focus.

The form's adapter is isolated in `lib/contact.ts` so a server-side email provider can be integrated later. Do not put provider credentials in `NEXT_PUBLIC_` variables.

## Deployment

Deploy as a standard Next.js application. The production script uses the supported webpack builder because Turbopack hit a worker-port error in this environment. Copy `.env.example` into your hosting environment as needed, then rebuild:

- `NEXT_PUBLIC_SITE_URL`: the actual production origin; enables canonical metadata and sitemap. No domain has been invented.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional studio inbox override.
- `NEXT_PUBLIC_INSTAGRAM_URL`: optional verified studio profile; link is omitted until configured.

Open Graph image, custom favicon, manifest and robots route are included. The default metadata is Mongolian, with English title/description updated when switched. This lightweight single-URL language approach does not produce separately indexed English pages.

## Remaining owner assets

Confirm the preferred studio inbox, supply the Instagram URL and final domain. Pricing was intentionally omitted to keep the requested homepage focused.
