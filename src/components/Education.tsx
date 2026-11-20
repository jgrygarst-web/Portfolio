import type { Content } from "@/content/types";
import { Section } from "@/components/Section";
import { CapIcon } from "@/components/icons";

export function Education({ c }: { c: Content }) {
  const { education } = c;

  return (
    <Section
      id="education"
      title={education.title}
      icon={<CapIcon className="size-5" />}
    >
      <div className="card">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-lg font-semibold text-fg">{education.school}</h3>
          <span className="chip">{education.status}</span>
        </div>
        <p className="mt-1 text-sm text-muted">{education.fullName}</p>

        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-muted">{education.fieldLabel}</dt>
            <dd className="mt-0.5 text-[15px] text-body">{education.field}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">{education.focusLabel}</dt>
            <dd className="mt-0.5 text-[15px] text-body">{education.focus}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
