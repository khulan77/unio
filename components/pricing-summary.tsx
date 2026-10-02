"use client";
import Link from "next/link";
import { plans, pricingCopy } from "@/lib/pricing";
import { useLanguage } from "./language-provider";
import { Arrow } from "./ui";
export function PricingSummary() {
  const { language } = useLanguage();
  const p = pricingCopy[language];
  return (
    <section id="pricing" className="container section pricing-summary">
      <div className="pricing-summary-heading">
        <div>
          <p className="eyebrow">{p.label}</p>
          <h2>
            {language === "mn"
              ? "Танд тохирох эхлэл."
              : "A starting point for you."}
          </h2>
        </div>
        <Link href="/pricing" className="text-link">
          {language === "mn"
            ? "Багц, төлбөрийн дэлгэрэнгүй"
            : "Packages & payment options"}
          <Arrow />
        </Link>
      </div>
      <div className="pricing-summary-grid">
        {plans.map((plan, i) => (
          <Link href="/pricing" key={plan.id}>
            <h3>{p.names[i]}</h3>
            <span>{p.from}</span>
            <strong>{plan.price.toLocaleString("en-US")}₮</strong>
            <Arrow diagonal />
          </Link>
        ))}
      </div>
      <p className="pricing-summary-note">
        {language === "mn"
          ? "Хэсэгчлэн төлөх болон сарын үйлчилгээний сонголттой. Админ, хэрэглэгчийн боломжууд, нэмэлт хөгжүүлэлтийн үнийг дэлгэрэнгүй хуудаснаас үзээрэй."
          : "Installments and monthly service are available. Explore customer and admin features, scope, and additional development on the pricing page."}
      </p>
    </section>
  );
}
