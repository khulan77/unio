"use client";
import { useLanguage } from "./language-provider";
import { ExternalLink, Logo } from "./ui";
import { portfolioUrl } from "@/lib/projects";
import { instagramUrl } from "@/lib/contact";
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="container site-footer">
      <div className="footer-top">
        <a href="#" aria-label="UNIO">
          <Logo />
        </a>
        <p>{t.tagline}</p>
        <nav aria-label={t.nav.join(" / ")}>
          {t.nav.map((name, i) => (
            <a
              key={name}
              href={`#${["work", "services", "about", "contact"][i]}`}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 UNIO. {t.footer}</span>
        <div>
          {instagramUrl && (
            <ExternalLink href={instagramUrl}>Instagram</ExternalLink>
          )}
          <ExternalLink href={portfolioUrl}>{t.portfolio}</ExternalLink>
          <a href="#" className="back-top" aria-label={t.studio}>
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
function ArrowUp() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 20V4m-6 6 6-6 6 6" />
    </svg>
  );
}
