import Image from "next/image";
import credly from "@/data/credly.json";
import type { Content, Locale } from "@/content/types";
import { Section } from "@/components/Section";
import { BadgeIcon } from "@/components/icons";

const badges = credly.badges;

const formatters: Record<Locale, Intl.DateTimeFormat> = {
  cs: new Intl.DateTimeFormat("cs-CZ", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }),
  en: new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }),
};

export function Certifications({
  c,
  locale,
}: {
  c: Content;
  locale: Locale;
}) {
  const formatIssued = (isoDate: string) =>
    formatters[locale].format(new Date(`${isoDate}T00:00:00Z`));

  return (
    <Section
      id="certifications"
      title={c.certifications.title}
      lead={c.certifications.lead}
      icon={<BadgeIcon className="size-5" />}
      aside={
        <a
          href="https://www.credly.com/users/jakub-grygar/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-medium text-fg"
        >
          {c.certifications.profile}
        </a>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {badges.map((badge) => (
          <li key={badge.id}>
            <a
              href={badge.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col transition-colors hover:border-fg/30"
            >
              <div className="flex items-center gap-3">
                {/* Odznaky mají průhledné pozadí, proto zůstávají na světlém podkladu i v tmavém režimu. */}
                <span className="grid size-12 shrink-0 place-items-center rounded border border-line bg-white p-1">
                  <Image
                    src={badge.image}
                    alt=""
                    width={48}
                    height={48}
                    className="size-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">{badge.name}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {badge.issuer} · {formatIssued(badge.issuedAt)}
                  </p>
                </div>
              </div>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted group-hover:text-accent">
                {c.certifications.verify}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
