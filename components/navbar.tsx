"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import { Arrow, Logo } from "./ui";
const anchors = ["/#work", "/#services", "/pricing", "/#about", "#contact"];
export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <>
      <Link className="skip-link" href="#main">
        {t.skip}
      </Link>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link href="/" aria-label="UNIO" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav
            className="desktop-nav"
            aria-label={language === "mn" ? "Үндсэн цэс" : "Main navigation"}
          >
            {t.nav.map((label, i) => (
              <Link href={anchors[i]} key={label}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <div
              className="language-toggle"
              aria-label={language === "mn" ? "Хэл сонгох" : "Language"}
            >
              <button
                lang="mn"
                aria-pressed={language === "mn"}
                onClick={() => setLanguage("mn")}
              >
                MN
              </button>
              <span>/</span>
              <button
                lang="en"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
            <Link href="#contact" className="button button-small nav-cta">
              {t.start}
              <Arrow />
            </Link>
            <button
              className={`menu-toggle ${open ? "is-open" : ""}`}
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          hidden={!open}
          aria-label={
            language === "mn" ? "Гар утасны цэс" : "Mobile navigation"
          }
        >
          {t.nav.map((label, i) => (
            <Link href={anchors[i]} key={label} onClick={() => setOpen(false)}>
              {label}
              <Arrow diagonal />
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
