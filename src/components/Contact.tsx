import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { ArrowUpRight, MailIcon, SocialGlyph } from "@/components/icons";
import { CopyEmail } from "@/components/CopyEmail";
import { Section } from "@/components/Section";

export function Contact({ c }: { c: Content }) {
  const socials = site.socials.filter((social) => social.icon !== "mail");

  return (
    <Section
      id="contact"
      title={c.contact.title}
      lead={c.contact.lead}
      icon={<MailIcon className="size-5" />}
    >
      <div className="card">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-12">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="link-underline inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
            >
              {site.email}
              <ArrowUpRight className="size-4 text-muted" />
            </a>
            <div className="mt-4">
              <CopyEmail
                email={site.email}
                label={c.contact.copy}
                copiedLabel={c.contact.copied}
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-muted">
              {c.contact.elsewhere}
            </p>
            <ul className="mt-3 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-fg"
                  >
                    <SocialGlyph className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" name={social.icon} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
