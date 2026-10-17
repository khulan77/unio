"use client";
import { useSyncExternalStore } from "react";
import {
  SALE_ACTIVE,
  formatPrice,
  isSaleActive,
  saleCopy,
  saleEndsAt,
} from "@/lib/pricing";
import { useLanguage } from "./language-provider";

// One shared one-second clock; snapshots are whole seconds so they stay stable.
const subscribeClock = (onTick: () => void) => {
  const timer = window.setInterval(onTick, 1000);
  return () => window.clearInterval(timer);
};
const nowInSeconds = () => Math.floor(Date.now() / 1000);
const useNowSeconds = () =>
  useSyncExternalStore<number | null>(subscribeClock, nowInSeconds, () => null);

// The server snapshot ignores the end date so static HTML and hydration agree;
// the client then checks the live clock and hides the sale once it has ended.
export function useSaleActive() {
  const now = useNowSeconds();
  return now === null ? SALE_ACTIVE : isSaleActive(now * 1000);
}

const pad = (value: number) => String(value).padStart(2, "0");

export function SaleBanner() {
  const { language } = useLanguage();
  const now = useNowSeconds();
  const saleActive = useSaleActive();
  if (!saleActive) return null;
  const copy = saleCopy[language];
  const remaining =
    now === null ? null : Math.max(0, Math.floor(saleEndsAt / 1000) - now);
  return (
    <div className="sale-banner">
      <p>{copy.banner}</p>
      {remaining !== null && (
        <p className="sale-countdown" role="timer">
          {copy.endsIn}{" "}
          <strong>
            {Math.floor(remaining / 86400)} {copy.days}{" "}
            {pad(Math.floor((remaining % 86400) / 3600))}:
            {pad(Math.floor((remaining % 3600) / 60))}:{pad(remaining % 60)}
          </strong>
          {copy.left && ` ${copy.left}`}
        </p>
      )}
    </div>
  );
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
