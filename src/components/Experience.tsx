import type { Content } from "@/content/types";
import { Section } from "@/components/Section";
import { BriefcaseIcon } from "@/components/icons";

export function Experience({ c }: { c: Content }) {
  return (
    <Section
      id="experience"
      title={c.experience.title}
      lead={c.experience.lead}
      icon={<BriefcaseIcon className="size-5" />}
    >
      <ul className="grid gap-4 lg:grid-cols-2">
        {c.experience.items.map((job) => (
          <li key={job.organization} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold text-fg">
                {job.organization}
              </h3>
              <span className="text-xs text-muted">{job.meta}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{job.role}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[15px] leading-7 text-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-muted"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
