"use client";
import { addons, scopeCopy } from "@/lib/service-scope";
import {
  pricingCopy,
  type PaymentPreference,
  type PricingInquiry,
} from "@/lib/pricing";
import { useLanguage } from "./language-provider";
import { Arrow, Icon } from "./ui";
export function ServiceScope({ payment }: { payment: PaymentPreference }) {
  const { language } = useLanguage();
  const s = scopeCopy[language];
  return (
    <div className="service-scope-details">
      <div className="scope-heading">
        <h3>{s.title}</h3>
        <p>{s.intro}</p>
      </div>
      <p className="eyebrow scope-example-label">{s.example}</p>
      <div className="role-cards">
        {[
          { title: s.customer, features: s.customerFeatures, icon: "people" },
          { title: s.admin, features: s.adminFeatures, icon: "grid" },
        ].map((role) => (
          <article key={role.title}>
            <Icon name={role.icon} />
            <h4>{role.title}</h4>
            <ul>
              {role.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="scope-note">{s.exampleNote}</p>
      <h4 className="scope-comparison-title">{s.comparisonTitle}</h4>
      <div className="scope-comparison">
        {s.rows.map(([customer, admin], i) => (
          <article key={i}>
            <h5>{pricingCopy[language].names[i]}</h5>
            <div>
              <span>{s.customer}</span>
              <p>{customer}</p>
            </div>
            <div>
              <span>{s.admin}</span>
              <p>{admin}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="scope-heading addons-heading">
        <h3>{s.addonTitle}</h3>
        <p>{s.addonIntro}</p>
      </div>
      <div className="addon-list">
        {addons.map((addon) => (
          <article className="addon-row" key={addon.id}>
            <div>
              <h4>{addon.name[language]}</h4>
              <p>{addon.scope[language]}</p>
            </div>
            <div className="addon-price">
              <span>{s.price}</span>
              <strong>
                {addon.startingPrice === null
                  ? s.quote
                  : `${new Intl.NumberFormat("en-US").format(addon.startingPrice)}₮${s.from}`}
              </strong>
              <button
                type="button"
                className="text-link"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent<PricingInquiry>("unio-inquiry", {
                      detail: { plan: "custom", payment, addon: addon.id },
                    }),
                  )
                }
                aria-label={`${addon.name[language]} — ${s.request}`}
              >
                {s.request}
                <Arrow />
              </button>
            </div>
          </article>
        ))}
      </div>
      <p className="scope-note">{s.addonNote}</p>
    </div>
  );
}
