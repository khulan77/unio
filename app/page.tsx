import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { PricingSummary } from "@/components/pricing-summary";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <About />
        <PricingSummary />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
