import type { Content } from "@/content/types";
import { Section } from "@/components/Section";
import { TrophyIcon } from "@/components/icons";

export function Competitions({ c }: { c: Content }) {
  return (
    <Section
      id="competitions"
      title={c.competitions.title}
      lead={c.competitions.lead}
      icon={<TrophyIcon className="size-5" />}
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {c.competitions.items.map((item) => (
          <li key={item.name} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-fg">{item.name}</h3>
              {item.year ? (
                <span className="text-xs text-muted">{item.year}</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-muted">{item.place}</p>

            {item.project ? (
              <p className="mt-3 text-sm text-fg">
                <span className="text-muted">
                  {c.competitions.projectLabel}:{" "}
                </span>
                {item.project}
              </p>
            ) : null}

            {item.description ? (
              <p className="mt-2 text-[15px] leading-7 text-body">
                {item.description}
              </p>
            ) : null}

            {item.result ? (
              <p className="mt-3 text-sm font-medium text-fg">{item.result}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
