"use client";
import { useLanguage } from "./language-provider";
import { Arrow, Icon, SectionHeading } from "./ui";
export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="services-section">
      <div className="container section">
        <SectionHeading
          label={t.servicesLabel}
          title={t.servicesTitle}
          description={t.servicesIntro}
        />
        <div className="services-grid">
          {t.serviceNames.map((name, i) => (
            <a href="#contact" className="service-card" key={name}>
              <div className="service-top">
                <Icon name={["web", "calendar", "grid", "bolt"][i]} />
                <span>0{i + 1}</span>
              </div>
              <h3>{name}</h3>
              <p>{t.serviceDescriptions[i]}</p>
              <div className="service-bottom">
                <span>{t.serviceTags[i]}</span>
                <Arrow diagonal />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
