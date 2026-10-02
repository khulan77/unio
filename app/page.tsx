import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { CaseStudy } from "@/components/case-study";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <CaseStudy />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
