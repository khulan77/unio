"use client";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { ExternalLink, Logo } from "./ui";
import { portfolioUrl } from "@/lib/projects";
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="container site-footer">
      <div className="footer-top">
        <Link href="/" aria-label="UNIO">
          <Logo />
        </Link>
        <p>{t.tagline}</p>
        <nav aria-label={t.nav.join(" / ")}>
          {t.nav.map((name, i) => (
            <Link
              key={name}
              href={
                ["/#work", "/pricing", "/#about", "#contact"][i]
              }
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 UNIO.</span>
        <div>
          <ExternalLink href={portfolioUrl}>{t.portfolio}</ExternalLink>
          <Link href="#" className="back-top" aria-label={t.studio}>
            <ArrowUp />
          </Link>
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
