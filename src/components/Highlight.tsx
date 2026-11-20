import type { Content } from "@/content/types";
import { TrophyIcon } from "@/components/icons";

export function Highlight({ c }: { c: Content }) {
  const { kicker, title, text, tags } = c.highlight;

  return (
    <section id="highlight" className="wrap border-t border-line py-16 sm:py-24">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-muted">
          <TrophyIcon className="size-4 text-accent" />
          <p>{kicker}</p>
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>

        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-1 w-10 rounded-full bg-accent"
        />

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body">
          {text}
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
