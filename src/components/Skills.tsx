import type { Content } from "@/content/types";
import { Section } from "@/components/Section";
import { ToolIcon } from "@/components/icons";

export function Skills({ c }: { c: Content }) {
  return (
    <Section
      id="skills"
      title={c.skills.title}
      lead={c.skills.lead}
      icon={<ToolIcon className="size-5" />}
    >
      <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {c.skills.items.map((group) => (
          <div key={group.title} className="card">
            <dt className="text-sm font-semibold text-fg">{group.title}</dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
