"use client";
import { useLanguage } from "./language-provider";
import { Arrow } from "./ui";
export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="container section team-section">
      <div className="team-summary team-panel">
        <div>
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div>
          <h3>{t.teamIntro}</h3>
          <p>{t.aboutText}</p>
          <a href="#contact" className="text-link">
            {t.start}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
