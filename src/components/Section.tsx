import type { ReactNode } from "react";

/** Jednotný rámec sekce: ikona, nadpis, krátký popis a obsah pod tím. */
export function Section({
  id,
  title,
  lead,
  aside,
  icon,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="wrap border-t border-line py-14 sm:py-20">
      <div className="text-center">
        {icon ? (
          <span className="mx-auto mb-5 grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
            {icon}
          </span>
        ) : null}

        <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>

        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-1 w-10 rounded-full bg-accent"
        />

        {lead ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}

        {aside ? <div className="mt-4 text-sm">{aside}</div> : null}
      </div>

      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  );
}
