import Link from "next/link";
import type { Locale } from "@/content/types";

const options: { locale: Locale; href: string; label: string }[] = [
  { locale: "cs", href: "/", label: "CS" },
  { locale: "en", href: "/en", label: "EN" },
];

export function LocaleSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-md border border-line p-0.5"
    >
      {options.map((option) => {
        const active = option.locale === locale;

        return (
          <Link
            key={option.locale}
            href={option.href}
            hrefLang={option.locale}
            aria-current={active ? "page" : undefined}
            className={`rounded px-1.5 py-1 text-[11px] font-medium tracking-wide transition-colors ${
              active ? "bg-fg text-page" : "text-muted hover:text-fg"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
