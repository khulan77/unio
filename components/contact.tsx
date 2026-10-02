"use client";
import { useRef, useState } from "react";
import { useLanguage } from "./language-provider";
import { Arrow, ExternalLink } from "./ui";
import { contactEmail, inquiryMailto, inquiryText } from "@/lib/contact";
import { portfolioUrl } from "@/lib/projects";
export function Contact() {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState("");
  const download = (data: FormData) => {
    const blob = new Blob([inquiryText(data)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "UNIO-project-inquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
    setStatus(t.downloaded);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-decor" aria-hidden="true">
          <i />
          <i />
        </div>
        <p className="eyebrow">
          <span />
          {t.contactLabel}
        </p>
        <h2>
          {t.contactTitle[0]}
          <br />
          {t.contactTitle[1]}
        </h2>
        <p className="contact-description">{t.contactText}</p>
        <button
          className="button button-white"
          onClick={() => {
            setStatus("");
            dialog.current?.showModal();
          }}
        >
          {t.start}
          <Arrow />
        </button>
        <p className="contact-small">{t.contactSmall}</p>
        <a className="contact-email" href={`mailto:${contactEmail}`}>
          {contactEmail}
          <Arrow diagonal />
        </a>
      </div>
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            aria-label={t.close}
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
          <p className="eyebrow">UNIO / {t.contactLabel}</p>
          <h2 id="contact-dialog-title">{t.formTitle}</h2>
          <p>{t.formIntro}</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              if (contactEmail) {
                window.location.href = inquiryMailto(data);
                setStatus(t.emailOpened);
              } else download(data);
            }}
          >
            <div className="form-row">
              <label>
                {t.name}
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                {t.company}
                <span> ({t.optional})</span>
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength={150}
                />
              </label>
            </div>
            <label>
              {t.contact}
              <input
                name="contact"
                autoComplete="email"
                required
                maxLength={150}
              />
            </label>
            <label htmlFor="inquiry-service">{t.need}</label>
            <select
              id="inquiry-service"
              aria-label={t.need}
              name="service"
              required
              defaultValue=""
            >
              <option value="" disabled>
                {t.need}
              </option>
              {[...t.serviceNames, t.unsure].map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <label>
              {t.message}
              <textarea
                name="message"
                rows={4}
                placeholder={t.messageHint}
                required
                maxLength={3000}
              />
            </label>
            <p className="form-notice">
              {contactEmail ? t.sendingNote : t.fallback}
            </p>
            <button className="button form-submit" type="submit">
              {contactEmail ? t.send : t.download}
              <Arrow />
            </button>
            {contactEmail && (
              <button
                className="download-link"
                type="button"
                onClick={(event) => {
                  const form = event.currentTarget.form;
                  if (form?.reportValidity()) download(new FormData(form));
                }}
              >
                {t.download} ↓
              </button>
            )}
            <p role="status" className="form-status">
              {status}
            </p>
            <p className="form-privacy">{t.privacy}</p>
            {!contactEmail && (
              <ExternalLink href={portfolioUrl} className="text-link">
                {t.portfolio}
              </ExternalLink>
            )}
          </form>
        </div>
      </dialog>
    </section>
  );
}
