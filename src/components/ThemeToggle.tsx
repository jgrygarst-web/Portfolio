"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

/**
 * Přepínač světlého a tmavého režimu.
 * Aktuální stav čte až při kliknutí z <html class="dark">, takže se server
 * a klient nikdy nerozejdou a ikona se mění čistě přes CSS (`dark:`).
 */
export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", next === "dark");

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Privátní režim bez úložiště – režim prostě vydrží jen do obnovení.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="group grid size-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg"
    >
      <SunIcon className="size-4 transition-transform duration-300 group-hover:rotate-45 dark:hidden" />
      <MoonIcon className="hidden size-4 transition-transform duration-300 group-hover:-rotate-12 dark:block" />
    </button>
  );
}
