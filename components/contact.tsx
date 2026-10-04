"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./language-provider";
import { Arrow, ExternalLink } from "./ui";
import {
  contactEmail,
  contactPhone,
  contactPhoneHref,
  instagramUrl,
  facebookUrl,
  inquiryText,
} from "@/lib/contact";
import { plans, pricingCopy, type PricingInquiry } from "@/lib/pricing";
import { addons, scopeCopy } from "@/lib/service-scope";
import { portfolioUrl } from "@/lib/projects";
export function Contact() {
  const { t, language } = useLanguage();
  const p = pricingCopy[language];
  const [selection, setSelection] = useState<PricingInquiry | null>(null);
  const [serviceIndex, setServiceIndex] = useState("");
  const selectedAddon = addons.find((addon) => addon.id === selection?.addon);
  const selectedIndex = plans.findIndex((plan) => plan.id === selection?.plan);
  const dialog = useRef<HTMLDialogElement>(null);
  const sendingRef = useRef(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    const openInquiry = (event: Event) => {
      const detail = (event as CustomEvent<PricingInquiry>).detail;
      const plan = plans.find((plan) => plan.id === detail?.plan);
      if (
        !plan ||
        !["project", "monthly", "subscription"].includes(detail.payment)
      )
        return;
      setSelection({
        ...detail,
        addon: addons.some((addon) => addon.id === detail.addon)
          ? detail.addon
          : undefined,
      });
      setServiceIndex(String(plan.serviceIndex));
      setStatus("");
      setSent(false);
      dialog.current?.showModal();
    };
    window.addEventListener("unio-inquiry", openInquiry);
    return () => window.removeEventListener("unio-inquiry", openInquiry);
  }, []);
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
      <div className="container contact-studio">
        <div className="contact-studio-copy">
          <p className="eyebrow">{t.contactLabel}</p>
          <h2>
            {language === "mn" ? (
              <>
                Таны дараагийн санааг
                <br />
                <span>хамтдаа бүтээе.</span>
              </>
            ) : (
              <>
                Your next idea.
                <br />
                <span>Let’s build it together.</span>
              </>
            )}
          </h2>
          <p className="contact-studio-description">{t.contactText}</p>
          <button
            className="button contact-studio-button"
            onClick={() => {
              setStatus("");
              setSent(false);
              dialog.current?.showModal();
            }}
          >
            {t.start}
            <Arrow />
          </button>
          <p className="contact-studio-note">{t.contactSmall}</p>
        </div>
        <div className="contact-studio-links">
          <p className="contact-links-label">
            {language === "mn" ? "Шууд холбогдох" : "Get in touch"}
          </p>
          <a href={contactPhoneHref} className="contact-studio-phone">
            <span>
              <small>{language === "mn" ? "Утас" : "Phone"}</small>
              <strong>
                {contactPhone.slice(0, 4)} {contactPhone.slice(4)}
              </strong>
            </span>
            <Arrow diagonal />
          </a>
          <a href={`mailto:${contactEmail}`} className="contact-studio-email">
            <span>
              <small>{language === "mn" ? "И-мэйл" : "Email"}</small>
              <strong>{contactEmail}</strong>
            </span>
            <Arrow diagonal />
          </a>
          <div className="contact-studio-socials">
            {instagramUrl && (
              <ExternalLink href={instagramUrl}>Instagram</ExternalLink>
            )}
            {facebookUrl && (
              <ExternalLink href={facebookUrl}>Facebook</ExternalLink>
            )}
          </div>
        </div>
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
            onSubmit={async (event) => {
              event.preventDefault();
              if (sendingRef.current) return;
              const form = event.currentTarget;
              const data = new FormData(form);
              sendingRef.current = true;
              setSending(true);
              setStatus("");
              setSent(false);
              try {
                const response = await fetch("/api/inquiry", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(Object.fromEntries(data)),
                  signal: AbortSignal.timeout(20000),
                });
                if (!response.ok) throw new Error();
                const result = await response.json();
                if (!result.ok) throw new Error();
                setSent(true);
                setStatus(
                  language === "mn"
                    ? "Баярлалаа! Таны хүсэлтийг хүлээн авлаа. Өнөөдөртөө багтаан тантай эргэн холбогдоно."
                    : "Thank you! We have received your inquiry and will get back to you today.",
                );
                form.reset();
                setSelection(null);
                setServiceIndex("");
              } catch {
                setStatus(
                  language === "mn"
                    ? "Хүсэлт илгээгдсэн нь баталгаажаагүй. Дахин оролдох эсвэл 85563793 дугаараар холбогдоорой."
                    : "Sending could not be confirmed. Please try again or call 85563793.",
                );
              } finally {
                sendingRef.current = false;
                setSending(false);
              }
            }}
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />
            {selection && selectedIndex >= 0 && (
              <div className="inquiry-package">
                <strong>
                  {p.inquiryLabel}: {p.names[selectedIndex]}
                </strong>
                <span>
                  {p.paymentLabel}: {p[selection.payment]}
                </span>
                {selectedAddon && (
                  <>
                    <span>
                      {scopeCopy[language].selectedAddon}:{" "}
                      {selectedAddon.name[language]}
                    </span>
                    <input
                      type="hidden"
                      name="addon"
                      value={selectedAddon.name[language]}
                    />
                  </>
                )}
                <button type="button" onClick={() => setSelection(null)}>
                  {p.clear}
                </button>
                <input
                  type="hidden"
                  name="package"
                  value={p.names[selectedIndex]}
                />
                <input
                  type="hidden"
                  name="payment"
                  value={p[selection.payment]}
                />
              </div>
            )}
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
                  placeholder={
                    language === "mn"
                      ? "Жишээ: Салон, шүдний эмнэлэг"
                      : "e.g. Salon, dental clinic"
                  }
                  maxLength={150}
                />
              </label>
            </div>
            <label>
              {t.contact}
              <input
                name="contact"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]{8}"
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 8);
                }}
                placeholder="85563793"
                title={
                  language === "mn"
                    ? "8 оронтой утасны дугаар оруулна уу. Жишээ: 85563793"
                    : "Enter an 8-digit Mongolian phone number, e.g. 85563793"
                }
                required
                minLength={8}
                maxLength={8}
              />
            </label>
            <label htmlFor="inquiry-service">{t.need}</label>
            <select
              id="inquiry-service"
              aria-label={t.need}
              name="service"
              required
              value={
                serviceIndex === ""
                  ? ""
                  : [...t.serviceNames, t.unsure][Number(serviceIndex)]
              }
              onChange={(event) =>
                setServiceIndex(
                  String(
                    [...t.serviceNames, t.unsure].indexOf(event.target.value),
                  ),
                )
              }
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
            <button
              className="button form-submit"
              type="submit"
              disabled={sending}
              aria-busy={sending}
            >
              {sending
                ? language === "mn"
                  ? "Илгээж байна…"
                  : "Sending…"
                : t.send}
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
            <p
              role="status"
              className={`form-status${sent ? " form-status-success" : ""}`}
            >
              {sent && (
                <span aria-hidden="true" className="success-check">
                  ✓
                </span>
              )}
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
