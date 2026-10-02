"use client";
import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "./language-provider";
import { Arrow, ExternalLink, SectionHeading } from "./ui";
export function ProjectPreview({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { t } = useLanguage();
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
          <Image
            src={`/projects/${project.id}.webp`}
            alt={`${project.name} — ${t.preview}`}
            width={1440}
            height={1000}
            sizes={
              large
                ? "(max-width: 767px) 90vw, 60vw"
                : "(max-width: 767px) 90vw, 42vw"
            }
          />
        </div>
      </div>
    </div>
  );
}
export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const { t, language } = useLanguage();
  return (
    <article className={`project-card ${featured ? "featured-project" : ""}`}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual-link"
        aria-label={`${project.name} — ${t.live}`}
      >
        <ProjectPreview project={project} large={featured} />
        <span className="project-hover-arrow">
          <Arrow diagonal />
        </span>
      </a>
      <div className="project-info">
        <div className="project-meta">
          <span>
            {String(index + 1).padStart(2, "0")} / {project.category[language]}
          </span>
          {project.status !== "project" && (
            <span className="status-tag">
              {project.status === "demo" ? t.demo : t.experiment}
            </span>
          )}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description[language]}</p>
        <ExternalLink href={project.url} className="text-link">
          {t.live}
        </ExternalLink>
      </div>
    </article>
  );
}
export function Projects() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="work" className="section container work-section">
      <SectionHeading
        label={t.workLabel}
        title={t.workTitle}
        description={t.workIntro}
      />
      <div className="featured-projects">
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} featured />
        ))}
      </div>
      <div className="project-grid">
        {projects.slice(2, 4).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 2} />
        ))}
      </div>
      <div className="more-projects" id="more-projects" hidden={!expanded}>
        <div className="project-grid">
          {projects.slice(4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 4} />
          ))}
        </div>
      </div>
      <div className="more-work-row">
        <span>
          {t.trust[0]} {t.trust[2]}
        </span>
        <button
          className="text-link"
          aria-expanded={expanded}
          aria-controls="more-projects"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? t.less : t.more}
          <span className="more-count">{expanded ? "−" : "+2"}</span>
        </button>
      </div>
    </section>
  );
}
