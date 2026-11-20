import type { Content } from "@/content/types";
import { Section } from "@/components/Section";
import { FolderIcon, ProjectGlyph } from "@/components/icons";

export function Projects({ c }: { c: Content }) {
  return (
    <Section
      id="projects"
      title={c.projects.title}
      lead={c.projects.lead}
      icon={<FolderIcon className="size-5" />}
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {c.projects.items.map((project) => (
          <li key={project.title} className="card group">
            <span className="mb-4 grid size-9 place-items-center rounded-lg bg-accent-soft text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <ProjectGlyph name={project.icon} className="size-4" />
            </span>
            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
            <p className="mt-3 text-[15px] leading-7 text-body">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="chip transition-colors group-hover:border-accent/30"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
