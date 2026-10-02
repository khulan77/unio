# UNIO

A team-based software studio website built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Mongolian is the default; English is available throughout the interface and the visitor's choice persists locally.

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
- `lib/projects.ts`: seven supplied project URLs and factual descriptions.
- `lib/contact.ts`: contact destination and email-draft generation.
- `components/`: navigation, hero/interface illustration, editorial project cards, services, case study, team/process, contact dialog and footer.
- `public/projects/`: optimized WebP screenshots captured from the real sites on October 1–2, 2026.
- `public/fonts/`: self-hosted Manrope, including Cyrillic Ө/ө and Ү/ү.

The store is explicitly a demo. Dental, coffee and education are presented as demo work rather than claimed paying clients. Movie App is an experiment under More work. Organic Care's three-branch usage comes from the supplied brief; the founder's live portfolio confirms the private production system. Its accompanying admin screenshot and direct project URL were supplied by the owner.

## Contact

The form validates locally, then opens the visitor's email app with a prefilled inquiry to `devcode549@gmail.com`, verified on Khulan's public portfolio. The visitor must send that email themselves. A downloadable plain-text inquiry is also available. No delivery success is fabricated; no inquiry is stored by this website. Native dialog semantics provide Escape dismissal, focus containment and return focus.

The form's adapter is isolated in `lib/contact.ts` so a server-side email provider can be integrated later. Do not put provider credentials in `NEXT_PUBLIC_` variables.

## Deployment

Deploy as a standard Next.js application. The production script uses the supported webpack builder because Turbopack hit a worker-port error in this environment. Copy `.env.example` into your hosting environment as needed, then rebuild:

- `NEXT_PUBLIC_SITE_URL`: the actual production origin; enables canonical metadata and sitemap. No domain has been invented.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional studio inbox override.
- `NEXT_PUBLIC_INSTAGRAM_URL`: optional override for the studio Instagram profile.

Open Graph image, custom favicon, manifest and robots route are included. The default metadata is Mongolian, with English title/description updated when switched. This lightweight single-URL language approach does not produce separately indexed English pages.

## Remaining owner assets

Confirm the preferred studio inbox, supply the Instagram URL and final domain. Confirm installment terms and monthly-service fees when ready; these currently request a tailored quote.

## Project walkthrough videos

Project cards play silent looping videos directly as they enter the viewport. Offscreen videos and videos in background tabs pause automatically. A small keyboard-accessible control lets visitors pause or resume, and manually paused videos stay paused when scrolled back into view. Reduced-motion preferences disable automatic playback while leaving manual playback available.

The player assigns the video source only when it becomes visible or is manually played. `lib/projects.ts` stores each path and duration. The salon uses the owner-provided `public/projects/videos/usertal.mp4` (42 seconds). Other projects use the previously captured approximately 12-second public-site tours. Replace an MP4 at the same path, or update its `video.src` and `video.duration` to use a new file.

## Pricing and inquiries

`lib/pricing.ts` owns four starting prices (690,000₮ / 1,290,000₮ / 1,990,000₮ / 2,990,000₮), bilingual inclusions, scope notes, next steps and FAQs. Visitors choose project pricing, installments, or a monthly development/hosting/maintenance service. No unconfirmed monthly amount or term is published. Package buttons open the existing inquiry dialog, preselect the service, and include the package and payment preference in both email drafts and downloads. Navbar and footer link to `/pricing`. The homepage shows a compact four-price overview; package scope, customer/admin details, add-ons, payment options and FAQs live on `/pricing`.

Pricing checks: lint, TypeScript and production build passed. All 24 combinations of language, package and payment preference preserve their selection in encoded email drafts. Production HTML includes all four prices and pricing navigation. Browser visual/interaction verification remains pending because automatic approval review rejected browser launch due to the session usage limit.

## Customer/admin scope and additional development

`lib/service-scope.ts` holds bilingual customer/admin explanations, a four-package scope comparison and eight optional development items. All add-on prices are intentionally `null` (request a quote), as confirmed by the owner. Set `startingPrice` only when a rate is approved. Selecting an addition opens the contact form and includes its localized name in the inquiry email/download. The examples are clearly scoped: a content editing admin is optional for website packages, while booking/custom packages have their listed admin functionality. Already included work is not charged twice.

The About section presents UNIO as a team, as confirmed by the owner, without invented member identities or headcounts. It replaces the previous individual founder introduction and signature.

Contact phone: 85563793 (click to call). Instagram (`dev_code77`) and Facebook (`61575885910109`) appear in Contact and the footer. Optional `NEXT_PUBLIC_FACEBOOK_URL` and `NEXT_PUBLIC_INSTAGRAM_URL` variables override these defaults.
