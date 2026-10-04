"use client";
import { CaseStudy } from "./case-study";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "./language-provider";
import { ExternalLink, Arrow } from "./ui";
import { InlineProjectVideo } from "./project-video";
export function ProjectPreview({
  project,
  large = false,
  onEnded,
}: {
  project: Project;
  large?: boolean;
  onEnded?: () => void;
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
          <InlineProjectVideo project={project} onEnded={onEnded} />
        </div>
      </div>
    </div>
  );
}
export function Projects() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    let total = 0;
    let lastEvent = 0;
    let locked = false;
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const now = performance.now();
      if (now - lastEvent > 180) {
        total = 0;
        locked = false;
      }
      lastEvent = now;
      const delta =
        (Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY) *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? element.clientHeight
            : 1);
      if (!delta) return;
      const direction = delta > 0 ? 1 : -1;
      if (
        (activeIndexRef.current === 0 && direction < 0) ||
        (activeIndexRef.current === projects.length - 1 && direction > 0)
      )
        return;
      event.preventDefault();
      if (locked) return;
      if (Math.sign(total) !== direction) total = 0;
      total += delta;
      if (Math.abs(total) >= 60) {
        locked = true;
        setActiveIndex((index) =>
          Math.max(0, Math.min(projects.length - 1, index + direction)),
        );
      }
    };
    element.addEventListener("wheel", wheel, { passive: false });
    return () => element.removeEventListener("wheel", wheel);
  }, []);
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
                  onFocus={() => {
                    setActiveIndex(index);
                  }}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeys(event, index)}
                  className="explorer-tab"
                >
                  <span className="explorer-tab-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={project.image ?? `/projects/${project.id}.webp`}
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
            ref={stage}
            onTouchStart={(event) => {
              const touch = event.touches[0];
              touchStart.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start) return;
              const touch = event.changedTouches[0];
              const dx = touch.clientX - start.x,
                dy = touch.clientY - start.y;
              if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
                setActiveIndex((index) =>
                  Math.max(
                    0,
                    Math.min(projects.length - 1, index + (dx < 0 ? 1 : -1)),
                  ),
                );
            }}
            onTouchCancel={() => {
              touchStart.current = null;
            }}
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
              <span>
                {language === "mn"
                  ? "Scroll хийж эсвэл хажуу тийш шударч үзээрэй"
                  : "Scroll or swipe to explore"}
              </span>
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
