import type { Locale } from "@/content/types";
import { content } from "@/content/site";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlight } from "@/components/Highlight";
import { Competitions } from "@/components/Competitions";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Portfolio({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-page"
      >
        {c.ui.skip}
      </a>

      <Header c={c} locale={locale} />

      <main id="obsah" lang={locale}>
        <Hero c={c} />
        <Highlight c={c} />
        <Competitions c={c} />
        <Projects c={c} />
        <Experience c={c} />
        <Skills c={c} />
        <Certifications c={c} locale={locale} />
        <Education c={c} />
        <Contact c={c} />
      </main>

      <Footer c={c} />
    </>
  );
}
