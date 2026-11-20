import type { Content, Locale } from "@/content/types";
import { site } from "@/content/site";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";

export function Header({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <header className="border-b border-line bg-page/85 backdrop-blur sm:sticky sm:top-0 sm:z-40">
      <ScrollProgress />

      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          {site.name}
        </a>

        <nav
          aria-label={c.ui.nav}
          className="hidden items-center gap-7 text-sm text-muted sm:flex"
        >
          {c.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle label={c.ui.theme} />
          <LocaleSwitch locale={locale} label={c.ui.language} />
        </div>
      </div>

      <nav
        aria-label={c.ui.nav}
        className="wrap flex flex-wrap gap-x-5 gap-y-1.5 pb-3 text-sm text-muted sm:hidden"
      >
        {c.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-fg"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
