# Verification

- Lint: `npm run lint`.
- TypeScript: `npm run typecheck`.
- Production: `npm run build` (Next.js supported webpack builder).
- Browser checks: Chromium against the production server.
- Viewports: 375, 390, 430, 768, 1024, 1440 pixels; document width matches viewport width.
- Mongolian default, English switch, localStorage persistence after reload, mobile switch.
- Expand/collapse additional education and movie projects.
- Mobile menu, section navigation, automatic menu close after navigation.
- Contact dialog, required fields, service selection, inquiry download, Escape close.
- External project and portfolio URLs verified; all seven returned HTTP 200 on October 1, 2026.
- External project links use `target="_blank"` and `rel="noopener noreferrer"`.
- No browser JavaScript page errors during the production interaction test.
- Manrope's font character map includes Mongolian Ө/ө and Ү/ү.

The mailto action opens a draft for the visitor; no real inquiry was sent during verification. Automated accessibility checks complement visual review and do not establish full accessibility certification.

Final axe-core WCAG 2 A/AA and WCAG 2.1 AA automated audit: zero violations in Mongolian, English, and the open contact dialog. All identified text contrast failures were corrected before the final production build.

Screenshots: [Desktop](desktop.png), [Mobile](mobile.png), [Projects](projects.png), [Mobile inquiry dialog](contact-mobile.png).

## Project video update — October 2, 2026

- Seven real screen-recorded MP4 walkthroughs (approximately 12 seconds each).
- Confirmed all seven decode and play at 1280×800.
- Zero MP4 requests before opening a preview.
- Escape closes the dialog, removes the video player, and returns focus to the launch button.
- Both Mongolian and English descriptions verified.
- Zero horizontal overflow at 375, 390, 430, 768, 1024, and 1440 pixels; mobile dialog also fits.
- No JavaScript page errors; video dialog has zero axe-core WCAG A/AA violations.
- Lint, TypeScript, and production build pass.
- [Video card](video-card.png), [Desktop player](video-desktop.png), [Mobile player](video-mobile.png).

## Inline autoplay and owner salon video

Supersedes the modal playback behavior above. Salon now uses `usertal.mp4` (42.10 seconds). Verified automatic muted looping playback on desktop and mobile; manual pause persists across scrolling; offscreen playback pauses; reduced-motion preference disables automatic playback. No mobile horizontal overflow. Lint, TypeScript and production build pass.

## All-projects editorial gallery

All seven project cards are now rendered visibly without an expand button. A full-width highlighted salon card leads a two-column desktop collection; mobile uses one column. Verified seven visible cards, both language headings, inline playback, and no horizontal overflow at 375/390/430/768/1024/1440px. Lint, TypeScript, and production build pass. This replaces the previous collapsed “More work” presentation.
