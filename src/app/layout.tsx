import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { content, site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jakub Grygar — Web, VR a AI",
    template: `%s — ${site.name}`,
  },
  description:
    "Student informačních technologií v Ostravě. Web, VR a AI aplikace, CAD dokumentace a vítězný projekt AT&T Hackathonu Junior 2026.",
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
    languages: {
      cs: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: "Jakub Grygar — Web, VR a AI",
    description:
      "Student informačních technologií v Ostravě. Web, VR a AI aplikace, CAD dokumentace a vítězný projekt AT&T Hackathonu Junior 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakub Grygar — Web, VR a AI",
    description:
      "Student informačních technologií v Ostravě. Web, VR a AI aplikace, CAD dokumentace a vítězný projekt AT&T Hackathonu Junior 2026.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

/**
 * Nastaví režim ještě před prvním vykreslením, aby stránka neblikla bíle.
 */
const themeScript = `try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Student informačních technologií a vývojář",
  description: content.cs.hero.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ostrava",
    addressCountry: "CZ",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: content.cs.education.fullName,
  },
  award: [
    "AT&T Hackathon Junior 2026 — 1. místo, celkový vítěz",
    "AT&T Hackathon Junior 2026 — 1. místo, nejlepší nápad",
  ],
  sameAs: site.socials
    .filter((social) => social.icon !== "mail")
    .map((social) => social.href),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
