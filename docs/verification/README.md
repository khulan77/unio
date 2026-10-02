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
