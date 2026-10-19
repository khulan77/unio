import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SalonLanding } from "@/components/salon-landing";

export const metadata: Metadata = {
  title: "UNIO — Салоны цаг захиалгын систем",
  description: "Үйлчлүүлэгч үйлчилгээ, мастер, цагаа сонгоно. Салон захиалгаа нэг дор удирдана. Бичлэг, үнэ, 10 минутын демо.",
  alternates: { canonical: "/salon" },
  openGraph: {
    title: "Танай салоны цаг захиалга нэг дор. | UNIO",
    description: "Салоны онлайн цаг захиалга, ажилтны хуваарь, админ самбар. 10 минутын демо хүсээрэй.",
    url: "/salon",
  },
};

export default function SalonPage() {
  return (
    <LanguageProvider page="salon">
      <Navbar inquiryHref="#salon-demo" />
      <main id="main"><SalonLanding /></main>
      <Footer />
    </LanguageProvider>
  );
}
