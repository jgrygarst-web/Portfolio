import type { Content } from "@/content/types";
import { site } from "@/content/site";

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-2 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.name} · {c.footer.built}
        </p>
        <a
          href="#top"
          className="group inline-flex w-fit items-center gap-1.5 transition-colors hover:text-fg"
        >
          {c.footer.backToTop}
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
