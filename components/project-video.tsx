"use client";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import { useLanguage } from "./language-provider";

export function InlineProjectVideo({
  project,
  onEnded,
  active = true,
}: {
  project: Project;
  onEnded?: () => void;
  active?: boolean;
}) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (
        active &&
        inView.current &&
        !document.hidden &&
        !userPaused.current &&
        !motion.matches
      ) {
        if (!video.getAttribute("src")) video.src = project.video.src;
        video.muted = true;
        void video.play().catch(() => {
          /* Native autoplay restrictions leave the play control available. */
        });
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        update();
      },
      { threshold: [0, 0.2] },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
      video.pause();
    };
  }, [project.video.src, active]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      userPaused.current = true;
      video.pause();
    } else {
      userPaused.current = false;
      if (!video.getAttribute("src")) video.src = project.video.src;
      void video.play().catch(() => {});
    }
  };

  return (
    <div className="inline-project-video">
      <video
        ref={videoRef}
        muted
        loop={!onEnded}
        onEnded={() => {
          if (
            !document.hidden &&
            inView.current &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            onEnded?.();
        }}
        playsInline
        preload="none"
        poster={project.image ?? `/projects/${project.id}.webp`}
        aria-label={`${project.name} — ${t.watchVideo}`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {!failed && (
        <button
          type="button"
          className="inline-video-control"
          onClick={toggle}
          aria-label={`${project.name} — ${playing ? t.pauseVideo : t.playVideo}`}
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {playing ? (
              <>
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </>
            ) : (
              <path d="m7 4 13 8-13 8z" />
            )}
          </svg>
          <span>{project.video.duration}</span>
        </button>
      )}
      {failed && (
        <p className="inline-video-error" role="status">
          {t.videoError}
        </p>
      )}
    </div>
  );
}
