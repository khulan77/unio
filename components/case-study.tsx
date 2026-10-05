"use client";
import { useLanguage } from "./language-provider";
import { ExternalLink, Icon } from "./ui";
import { organicCareUrl } from "@/lib/projects";
import Image from "next/image";
export function CaseStudy({ compact = false }: { compact?: boolean }) {
  const { t, language } = useLanguage();
  if (compact)
    return (
      <aside className="business-proof" aria-labelledby="organic-proof-title">
        <div className="business-proof-heading">
          <div>
            <p className="eyebrow">REAL BUSINESS SYSTEM</p>
            <span className="business-proof-brand">ORGANIC CARE</span>
            <h3 id="organic-proof-title">{t.caseTitle.join(" ")}</h3>
            <p>{t.caseDescription}</p>
          </div>
          <div className="business-proof-facts">
            <div>
              <strong>03</strong>
              <span>
                {language === "mn"
                  ? "САЛБАР / НЭГ СИСТЕМ"
                  : "BRANCHES / ONE SYSTEM"}
              </span>
            </div>
            <div>
              <strong>{language === "mn" ? "Өдөр бүр" : "Daily use"}</strong>
              <span>
                {language === "mn"
                  ? "ЗАХИАЛГА · ХУВААРЬ · УДИРДЛАГА"
                  : "BOOKINGS · SCHEDULES · ADMIN"}
              </span>
            </div>
          </div>
        </div>
        <figure>
          <Image
            src="/projects/organic-care.png"
            alt={t.caseImageAlt}
            width={2720}
            height={1562}
            sizes="(max-width: 767px) 90vw, 1100px"
          />
          <figcaption>{t.caseCaption}</figcaption>
        </figure>
        <div className="business-proof-footer">
          <div className="case-tags">
            {t.caseTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <ExternalLink href={organicCareUrl} className="text-link">
            {t.caseLink}
          </ExternalLink>
        </div>
      </aside>
    );
  return (
    <section className="container section case-section">
      <p className="eyebrow">{t.caseLabel}</p>
      <div className="case-card">
        <div className="case-content">
          <span className="organic-wordmark">
            <Icon name="globe" />
            ORGANIC CARE
          </span>
          <h2>
            {t.caseTitle[0]}
            <br />
            <span>{t.caseTitle[1]}</span>
          </h2>
          <p>{t.caseDescription}</p>
          <div className="case-tags">
            {t.caseTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <ExternalLink href={organicCareUrl} className="text-link">
            {t.caseLink}
          </ExternalLink>
        </div>
        <figure className="case-visual">
          <div className="case-topology">
            <span>01</span>
            <i />
            <span>02</span>
            <i />
            <span>03</span>
          </div>
          <a
            className="organic-preview"
            href={organicCareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.caseLink}
          >
            <div className="project-browser-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>organic-caresalon.vercel.app</span>
              <span>↗</span>
            </div>
            <Image
              src="/projects/organic-care.png"
              alt={t.caseImageAlt}
              width={2720}
              height={1562}
              sizes="(max-width: 767px) 90vw, 50vw"
            />
          </a>
          <figcaption>{t.caseCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
