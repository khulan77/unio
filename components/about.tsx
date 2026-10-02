"use client";
import { useLanguage } from "./language-provider";
import { ExternalLink, Logo } from "./ui";
import { portfolioUrl } from "@/lib/projects";
export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="container section about-section">
      <div className="about-grid">
        <div className="founder-art">
          <div className="founder-art-grid" />
          <span className="founder-art-label">UNIFY + ONE</span>
          <div className="unio-symbol">
            <i />
            <i />
          </div>
          <div className="founder-art-bottom">
            <Logo />
            <span>
              {t.purpose[0]}
              <br />
              {t.purpose[1]}
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
          <h3>{t.hello}</h3>
          <p>{t.aboutText}</p>
          <p className="founder-note">{t.founderNote}</p>
          <div className="stack-tags">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              ),
            )}
          </div>
          <div className="founder-signoff">
            <div>
              <b>Khulan</b>
              <small>{t.founder}</small>
            </div>
            <ExternalLink href={portfolioUrl} className="text-link">
              {t.portfolio}
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="process">
        <h3>{t.processTitle}</h3>
        <div className="process-grid">
          {t.processNames.map((name, i) => (
            <div className="process-step" key={name}>
              <div>
                <span>0{i + 1}</span>
                <i />
              </div>
              <h4>{name}</h4>
              <p>{t.processTexts[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
