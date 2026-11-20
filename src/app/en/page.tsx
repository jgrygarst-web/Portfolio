import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { site } from "@/content/site";

const description =
  "IT student based in Ostrava, Czechia. Web, VR and AI applications, CAD documentation and the winning project of AT&T Hackathon Junior 2026.";

export const metadata: Metadata = {
  title: { absolute: "Jakub Grygar — Web, VR & AI" },
  description,
  alternates: {
    canonical: "/en",
    languages: {
      cs: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en`,
    siteName: `${site.name} — Portfolio`,
    title: "Jakub Grygar — Web, VR & AI",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakub Grygar — Web, VR & AI",
    description,
  },
};

export default function EnglishPage() {
  return (
    <>
      {/*
        Celý web sdílí jeden root layout s lang="cs". Tady jazyk dokumentu
        přepneme ještě před vykreslením, aby ho čtečky i prohlížeč viděly správně.
      */}
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      <Portfolio locale="en" />
    </>
  );
}
