"use client";
import { PricingDeliverables } from "./pricing-deliverables";
import { planOutcomes } from "@/lib/pricing";
import Link from "next/link";
import { formatPrice, plans, pricingCopy, planGuide } from "@/lib/pricing";
import { useLanguage } from "./language-provider";
import { PlanHelper } from "./plan-helper";
import { OriginalPrice, SaleBanner, useSaleActive } from "./sale";
import { Arrow } from "./ui";
export function PricingSummary() {
  const { language } = useLanguage();
  const saleActive = useSaleActive();
  const p = pricingCopy[language];
  const guide = planGuide[language];
  return (
    <section id="pricing" className="container section pricing-summary">
      <div className="pricing-summary-heading">
        <div>
          <p className="eyebrow">{p.label}</p>
          <h2>
            {language === "mn"
              ? "Танд яг юу хэрэгтэй вэ?"
              : "What does your business need?"}
          </h2>
        </div>
        <Link href="/pricing" className="text-link">
          {language === "mn"
            ? "Багц, төлбөрийн дэлгэрэнгүй"
            : "Packages & payment options"}
          <Arrow />
        </Link>
      </div>
      <SaleBanner />
      <div className="pricing-summary-grid">
        {plans.map((plan, i) => (
          <article
            id={`summary-plan-${plan.id}`}
            key={plan.id}
            className={`summary-plan summary-plan-${i}${"featured" in plan ? " is-featured" : ""}`}
          >
            <div className="plan-pills">
              <span className="summary-plan-number">{guide.labels[i]}</span>
              {p.highlights[i] && (
                <span className="plan-highlight">{p.highlights[i]}</span>
              )}
            </div>
            <h3>{p.names[i]}</h3>
            <div className="plan-fit">
              <div className="plan-outcome"><span>{planOutcomes[language].label}</span><strong>{planOutcomes[language].items[i]}</strong></div>
              <p className="plan-fit-example">{p.examples[i]}</p>
            </div>
            <div className="summary-price-block">
              <span>{p.from}</span>
              {saleActive && <OriginalPrice value={plan.originalPrice} />}
              <strong>
                {formatPrice(saleActive ? plan.salePrice : plan.originalPrice)}
              </strong>
            </div>
            <p className="plan-ladder">{p.ladder[i]}</p>
            <ul className="summary-features">
              {p.features[i].slice(0, 4).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className="plan-example"
              href={plan.example.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.seeExample}: ${plan.example.name}`}
            >
              {p.seeExample} <span aria-hidden="true">→</span>
            </a>
            <Link href={`/pricing#plan-${plan.id}`} className="summary-details">
              {guide.details}
              <Arrow diagonal />
            </Link>
          </article>
        ))}
      </div>
      <PricingDeliverables />
      <PlanHelper idPrefix="summary-plan-" />
      <p className="pricing-summary-note">
        {language === "mn"
          ? "Хэсэгчлэн төлөх болон сарын үйлчилгээний сонголттой. Админ, хэрэглэгчийн боломжууд, нэмэлт хөгжүүлэлтийн үнийг дэлгэрэнгүй хуудаснаас үзээрэй."
          : "Installments and monthly service are available. Explore customer and admin features, scope, and additional development on the pricing page."}
      </p>
    </section>
  );
}
