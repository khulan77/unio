"use client";
import { CaseStudy } from "./case-study";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "./language-provider";
import { ExternalLink, Arrow } from "./ui";
import { InlineProjectVideo } from "./project-video";
export function ProjectPreview({
  project,
  large = false,
  active = true,
}: {
  project: Project;
  large?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`project-preview preview-${project.id} ${large ? "large-preview" : ""}`}
    >
      <div className="project-browser">
        <div className="project-browser-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{new URL(project.url).hostname}</span>
          <span>↗</span>
        </div>
        <div className="project-image">
          <InlineProjectVideo project={project} active={active} />
        </div>
      </div>
    </div>
  );
}
export function Projects() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let next = 0;
      cards.current.forEach((card, index) => {
        if (
          card &&
          card.getBoundingClientRect().top < window.innerHeight * 0.55
        )
          next = index;
      });
      setActiveIndex(next);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section id="work" className="work-section work-showcase stacked-work">
      <div className="container">
        <div className="work-chapter-line">
          <p className="eyebrow">
            <span className="blue-dot" />
            {t.workLabel}
          </p>
          <span className="work-total">
            {String(projects.length).padStart(2, "0")} / {t.workCollection}
          </span>
        </div>
        <div className="work-editorial-heading">
          <h2>
            {t.workHeading[0]}
            <br />
            <span>{t.workHeading[1]}</span>
          </h2>
          <div>
            <p>{t.workIntro}</p>
            <p className="work-video-hint">
              {language === "mn"
                ? "Доош гүйлгээд манай төслүүдтэй танилцаарай."
                : "Scroll down to explore our projects."}
            </p>
          </div>
        </div>
        <div className="project-card-stack">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(element) => {
                cards.current[index] = element;
              }}
              className="stacked-project-card"
              style={{ zIndex: index + 1 }}
              aria-labelledby={"stack-title-" + project.id}
            >
              <div className="stacked-project-copy">
                <p className="stacked-project-number">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>
                <p className="project-meta">{project.category[language]}</p>
                <h3 id={"stack-title-" + project.id}>{project.name}</h3>
                <p className="stacked-project-description">
                  {project.description[language]}
                </p>
                <ExternalLink href={project.url} className="text-link">
                  {t.live}
                </ExternalLink>
              </div>
              <div className="stacked-project-media">
                <ProjectPreview
                  project={project}
                  large
                  active={index === activeIndex}
                />
              </div>
            </article>
          ))}
        </div>
        <CaseStudy compact />
        <div className="work-endnote">
          <p>
            {t.trust[0]} {t.trust[2]}
          </p>
          <a className="text-link" href="#contact">
            {t.start}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
