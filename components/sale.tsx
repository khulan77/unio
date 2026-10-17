"use client";
import { useSyncExternalStore } from "react";
import { SALE_ACTIVE, formatPrice, isSaleActive, saleCopy } from "@/lib/pricing";
import { useLanguage } from "./language-provider";

const subscribe = () => () => {};
// The server snapshot ignores the end date so static HTML and hydration agree;
// the client then checks the date and hides the sale once it has ended.
export function useSaleActive() {
  return useSyncExternalStore(subscribe, () => isSaleActive(), () => SALE_ACTIVE);
}

export function SaleBanner() {
  const { language } = useLanguage();
  const saleActive = useSaleActive();
  if (!saleActive) return null;
  return <p className="sale-banner">{saleCopy[language].banner}</p>;
}

export function SaleBadge() {
  const { language } = useLanguage();
  return <span className="sale-badge">{saleCopy[language].badge}</span>;
}

export function OriginalPrice({ value }: { value: number }) {
  const { language } = useLanguage();
  const price = formatPrice(value);
  return (
    <s className="price-was" aria-label={`${saleCopy[language].was} ${price}`}>
      {price}
    </s>
  );
}
