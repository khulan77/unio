"use client";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "./language-provider";
import { ExternalLink, Arrow } from "./ui";
import { InlineProjectVideo } from "./project-video";
export function ProjectPreview({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
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
          <InlineProjectVideo project={project} />
        </div>
      </div>
    </div>
  );
}
export function Projects() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = projects[activeIndex];
  const selectRelative = (step: number) =>
    setActiveIndex(
      (index) => (index + step + projects.length) % projects.length,
    );
  const handleKeys = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % projects.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    tabs.current[next]?.focus();
  };
  return (
    <section id="work" className="work-section work-showcase">
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
              <span className="blue-dot" />
              {t.videoHint}
            </p>
          </div>
        </div>
        <div className="project-explorer">
          <div className="explorer-index">
            <div className="explorer-index-heading">
              <span>{t.exploreProjects}</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>
            <div
              role="tablist"
              aria-label={t.exploreProjects}
              aria-orientation="vertical"
              className="explorer-tabs"
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  ref={(element) => {
                    tabs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`project-tab-${project.id}`}
                  aria-selected={activeIndex === index}
                  aria-controls="project-preview-panel"
                  tabIndex={activeIndex === index ? 0 : -1}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setActiveIndex(index);
                  }}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeys(event, index)}
                  className="explorer-tab"
                >
                  <span className="explorer-tab-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={`/projects/${project.id}.webp`}
                    alt=""
                    width={52}
                    height={38}
                    sizes="52px"
                  />
                  <span className="explorer-tab-name">{project.name}</span>
                  <Arrow />
                </button>
              ))}
            </div>
            <p className="explorer-index-note">{t.explorerHint}</p>
          </div>
          <div
            className="explorer-stage"
            id="project-preview-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${active.id}`}
            tabIndex={0}
          >
            <div className="explorer-stage-top">
              <span>
                <span className="blue-dot" />
                {t.watchVideo}
              </span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="explorer-media" key={active.id}>
              <ProjectPreview project={active} large />
            </div>
            <div className="explorer-details">
              <div>
                <p className="project-meta">
                  {active.category[language]}
                  {active.status !== "project" && (
                    <span className="status-tag">
                      {active.status === "demo" ? t.demo : t.experiment}
                    </span>
                  )}
                </p>
                <h3>{active.name}</h3>
                <p className="explorer-description">
                  {active.description[language]}
                </p>
                <ExternalLink href={active.url} className="text-link">
                  {t.live}
                </ExternalLink>
              </div>
            </div>
            <div className="explorer-navigation">
              <span>{t.exploreEveryProject}</span>
              <div>
                <button
                  type="button"
                  aria-label={t.previousProject}
                  onClick={() => selectRelative(-1)}
                  className="explorer-prev"
                >
                  <Arrow />
                </button>
                <button
                  type="button"
                  aria-label={t.nextProject}
                  onClick={() => selectRelative(1)}
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
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
