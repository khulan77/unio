"use client";
import { ServiceScope } from "./service-scope";
import { useState } from "react";
import {
  plans,
  planGuide,
  pricingCopy,
  type PaymentPreference,
  type PricingInquiry,
} from "@/lib/pricing";
import { useLanguage } from "./language-provider";
import { Arrow, Icon, SectionHeading } from "./ui";
export function Pricing() {
  const { language } = useLanguage();
  const p = pricingCopy[language];
  const guide = planGuide[language];
  const [payment, setPayment] = useState<PaymentPreference>("project");
  const choose = (plan: PricingInquiry["plan"]) =>
    window.dispatchEvent(
      new CustomEvent<PricingInquiry>("unio-inquiry", {
        detail: { plan, payment },
      }),
    );
  return (
    <section id="pricing" className="container section pricing-section">
      <SectionHeading
        label={p.label}
        title={p.title}
        description={p.intro}
        as="h1"
      />
      <h2 className="payment-heading">{guide.paymentTitle}</h2>
      <div className="pricing-options" role="group" aria-label={p.paymentLabel}>
        <button
          type="button"
          aria-pressed={payment === "project"}
          onClick={() => setPayment("project")}
        >
          <strong>{p.project}</strong>
          <span>{guide.payments[0]}</span>
        </button>
        <button
          type="button"
          aria-pressed={payment === "monthly"}
          onClick={() => setPayment("monthly")}
        >
          <strong>{p.monthly}</strong>
          <span>{guide.payments[1]}</span>
        </button>
        <button
          type="button"
          aria-pressed={payment === "subscription"}
          onClick={() => setPayment("subscription")}
        >
          <strong>{p.subscription}</strong>
          <span>{guide.payments[2]}</span>
        </button>
      </div>
      <p className="pricing-payment-note" aria-live="polite">
        {payment === "subscription"
          ? p.subscriptionNote
          : payment === "monthly"
            ? p.monthlyNote
            : p.priceNote}
      </p>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <article
            className={`price-card plan-tone-${index}`}
            id={`plan-${plan.id}`}
            key={plan.id}
          >
            <span className="price-index">{guide.labels[index]}</span>
            <h3>{p.names[index]}</h3>
            <p className="price-description">{guide.audience[index]}</p>
            <div className="price-amount">
              <span>
                {payment === "subscription"
                  ? p.subscription
                  : payment === "monthly"
                    ? p.total
                    : p.from}
              </span>
              {payment === "subscription" ? (
                <strong className="price-by-quote">
                  {p.subscriptionPrice}
                </strong>
              ) : (
                <strong>
                  {new Intl.NumberFormat("en-US").format(plan.price)}₮
                  <small>{p.suffix}</small>
                </strong>
              )}
              {payment === "monthly" && <p>{p.monthlyQuote}</p>}
            </div>
            <p className="price-included">{p.included}</p>
            <ul>
              {p.features[index].map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
            {payment === "subscription" && (
              <ul className="subscription-features">
                {p.subscriptionFeatures.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <button
              type="button"
              className="button price-cta"
              onClick={() => choose(plan.id)}
            >
              {p.choose}
              <Arrow />
            </button>
          </article>
        ))}
      </div>
      <p className="pricing-footnote">
        {payment === "subscription" ? p.subscriptionNote : p.priceNote}
      </p>
      <div className="pricing-scope">
        <Icon name="grid" />
        <div>
          <h3>{p.scopeTitle}</h3>
          <p>
            {payment === "subscription" ? p.subscriptionScope : p.scopeText}
          </p>
        </div>
      </div>
      <ServiceScope payment={payment} />
      <div className="pricing-next">
        <h3>{p.nextTitle}</h3>
        <div>
          {p.steps.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="pricing-faq">
        <h3>{p.faqTitle}</h3>
        <div>
          {p.faq.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
