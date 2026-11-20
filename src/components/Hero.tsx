import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { FolderIcon, MailIcon } from "@/components/icons";

export function Hero({ c }: { c: Content }) {
  return (
    <section id="top" className="wrap pt-16 pb-16 text-center sm:pt-24 sm:pb-24">
      <p className="rise-in text-sm text-muted">
        {c.hero.role}
      </p>

      <h1 className="rise-in rise-in-1 mx-auto mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
        {c.hero.greeting} {site.name}
      </h1>

      <p className="rise-in rise-in-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
        {c.hero.bio}
      </p>

      <div className="rise-in rise-in-3 mt-8 flex flex-wrap justify-center gap-3">
        <a href="#projects" className="btn btn-solid">
          <FolderIcon className="size-4" />
          {c.hero.ctaProjects}
        </a>
        <a href="#contact" className="btn btn-outline">
          <MailIcon className="size-4" />
          {c.hero.ctaContact}
        </a>
      </div>
    </section>
  );
}
