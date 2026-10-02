import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: "UNIO — Website, Booking System & Business Software",
  description:
    "Бизнесийн вэбсайт, онлайн цаг захиалгын систем, удирдлагын платформ болон тусгай программ хангамжийн хөгжүүлэлт.",
  openGraph: {
    title: "UNIO — Websites & Business Software",
    description: "Таны бизнес. Нэг систем. Your business. One system.",
    type: "website",
    locale: "mn_MN",
    alternateLocale: "en_US",
    siteName: "UNIO",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
