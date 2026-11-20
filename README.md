# Portfolio — Jakub Grygar

Osobní portfolio pro [grygar.me](https://grygar.me). Postavené v Next.js (App Router),
TypeScriptu a Tailwind CSS. Jednoduchá jednostránka s česko-anglickou mutací,
světlým a tmavým režimem a obsahem v jediném souboru.

## Spuštění

```bash
npm install
npm run dev
```

Web běží na [http://localhost:3000](http://localhost:3000), anglická verze na
[http://localhost:3000/en](http://localhost:3000/en).

Produkční build:

```bash
npm run build
npm start
```

## Co web umí

- **Přepínač jazyka** v hlavičce (CS / EN). Čeština je na `/`, angličtina na `/en`,
  obě verze se generují jako samostatné statické stránky.
- **Přepínač světlého a tmavého režimu.** Volba se ukládá do `localStorage`, při
  prvním načtení se řídí systémovým nastavením a díky skriptu v `<head>` stránka
  nebliká.
- Žádné API, databáze ani cookies — vše je statické.

## Nasazení na grygar.me

Web je připravený na dvě varianty. Aktuální doména `grygar.me` běží na GitHub Pages,
takže nejjednodušší je zůstat tam.

### GitHub Pages (doporučeno pro tuto doménu)

1. Nahraj repozitář na GitHub.
2. V **Settings → Pages → Build and deployment** nastav zdroj na **GitHub Actions**.
3. Pushni do větve `main`. Workflow `.github/workflows/deploy-pages.yml` postaví
   statický export (`npm run build:static`) a nasadí složku `out/`.
4. V **Custom domain** nech `grygar.me` — soubor `public/CNAME` se do exportu
   zkopíruje automaticky. Zapni **Enforce HTTPS**.

Ruční statický build:

```bash
npm run build:static   # vytvoří out/
npm run preview:static # lokální náhled exportu
```

### Vercel

Projekt funguje i bez statického exportu, včetně optimalizace obrázků:

1. Importuj repozitář na Vercelu.
2. Přidej doménu `grygar.me`.
3. V DNS nastav záznamy podle Vercelu (A `76.76.21.21` nebo CNAME na
   `cname.vercel-dns.com`). Tím se doména odpojí od GitHub Pages.

## Kde upravovat obsah

- `src/content/cs.ts` — veškerý český text.
- `src/content/en.ts` — anglická verze stejné struktury.
- `src/content/site.ts` — co je v obou jazycích stejné: jméno, e-mail, odkazy
  a sociální sítě.
- `src/content/types.ts` — typy obsahu. Když přidáš novou položku, TypeScript
  připomene, co doplnit v obou jazycích.
- `src/app/layout.tsx` — metadata, Open Graph, JSON-LD a nastavení režimu.
- `src/app/globals.css` — barvy světlého a tmavého režimu a základní styl.
- `src/data/credly.json` — certifikace. Generuje se automaticky, needituj ručně.
- `public/badges/` — obrázky odznaků stažené z Credly.

### Certifikace z Credly

Data se nestahují za běhu webu (žádné CORS problémy ani závislost na Credly).
Aktuální odznaky se stáhnou do repozitáře příkazem:

```bash
npm run sync:credly
```

Skript přečte veřejné `badges.json` profilu
[`jakub-grygar`](https://www.credly.com/users/jakub-grygar/badges), stáhne obrázky
do `public/badges/` a přepíše `src/data/credly.json`. Po přidání nového odznaku
na Credly tedy stačí spustit tento příkaz a commitnout změny.

### Přidání GitHubu

GitHub profil není v podkladech uvedený, proto na webu není. Stačí do
`site.socials` v `src/content/site.ts` přidat:

```ts
{
  label: "GitHub",
  handle: "uzivatelske-jmeno",
  href: "https://github.com/uzivatelske-jmeno",
  icon: "github",
},
```

a do `SocialIcon` / `SocialGlyph` doplnit ikonu. Ostatní se vykreslí samo.

## Struktura

```
src/
  app/            layout, česká a anglická stránka, globální styly, ikony, OG obrázek
  components/     Portfolio, Header, Hero, Highlight, Competitions, Projects,
                  Experience, Skills, Certifications, Education, Contact, Footer
  content/        cs.ts, en.ts, site.ts, types.ts — veškerý text
  data/           credly.json — certifikace
public/
  badges/         obrázky certifikací
  CNAME           grygar.me pro GitHub Pages
scripts/
  sync-credly.mjs
  generate-brand-images.py
```

## Poznámky

- Web je jednostránkový, bez databáze a bez API. Vše je statické.
- Telefon není na webu záměrně — patří jen do PDF životopisu.
- `npm run build:static` vypíná PPR (partial prefetching), protože není
  kompatibilní s `output: "export"`; klasický `npm run build` ho používá.
