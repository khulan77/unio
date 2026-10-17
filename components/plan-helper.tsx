"use client";
import { plans, pricingCopy } from "@/lib/pricing";
import { useLanguage } from "./language-provider";

// Plain questions that jump to (and, via :target, highlight) the matching card.
export function PlanHelper({ idPrefix }: { idPrefix: string }) {
  const { language } = useLanguage();
  const p = pricingCopy[language];
  return (
    <div className="plan-helper">
      <h3>{p.helperTitle}</h3>
      <ul>
        {plans.map((plan, i) => (
          <li key={plan.id}>
            <a href={`#${idPrefix}${plan.id}`}>
              <span>{p.helper[i]}</span>
              <strong>
                {p.names[i]} <span aria-hidden="true">→</span>
              </strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
