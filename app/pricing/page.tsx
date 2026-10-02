import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: "UNIO — Үнэ, багц ба нэмэлт хөгжүүлэлт",
  description:
    "Вэбсайт, системийн багц, төлбөрийн сонголт болон нэмэлт хөгжүүлэлт.",
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? "/pricing"
        : null,
  },
};
export default function PricingPage() {
  return (
    <LanguageProvider page="pricing">
      <Navbar />
      <main id="main" className="pricing-page">
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
