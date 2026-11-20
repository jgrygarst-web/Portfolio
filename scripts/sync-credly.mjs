/**
 * Syncs the public Credly badges into the local site data.
 *
 * Usage: npm run sync:credly
 *
 * The site itself never calls Credly at runtime — it reads the generated
 * src/data/credly.json and the badge images in public/badges/.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const PROFILE = "jakub-grygar";
const API_URL = `https://www.credly.com/users/${PROFILE}/badges.json`;
const ROOT = fileURLToPath(new URL("..", import.meta.url));

function slugify(value) {
  const map = { á: "a", č: "c", ď: "d", é: "e", ě: "e", í: "i", ň: "n", ó: "o", ř: "r", š: "s", ť: "t", ú: "u", ů: "u", ý: "y", ž: "z" };
  return value
    .toLowerCase()
    .replace(/[áčďéěíňóřšťúůýž]/g, (char) => map[char] ?? char)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function firstSentence(text) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

async function main() {
  console.log(`Fetching ${API_URL}`);

  const response = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
      "User-Agent": "grygar.me portfolio badge sync",
    },
  });

  if (!response.ok) {
    throw new Error(`Credly responded with ${response.status}`);
  }

  const payload = await response.json();
  const rawBadges = payload.data ?? [];

  await mkdir(join(ROOT, "public", "badges"), { recursive: true });

  const badges = [];

  for (const raw of rawBadges) {
    const template = raw.badge_template ?? {};
    const name = template.name;
    if (!name) continue;

    const slug = slugify(name);
    const image = `/badges/${slug}.png`;
    const imageUrl = template.image_url;

    if (imageUrl) {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Could not download badge image for ${name}`);
      }
      const buffer = Buffer.from(await imageResponse.arrayBuffer());
      await writeFile(join(ROOT, "public", "badges", `${slug}.png`), buffer);
    }

    const issuerName =
      template.issuer?.entities?.[0]?.entity?.name ??
      raw.issuer?.entities?.[0]?.entity?.name ??
      "Credly";

    badges.push({
      id: raw.id,
      name,
      issuer: issuerName,
      issuedAt: raw.issued_at_date,
      image,
      verifyUrl: `https://www.credly.com/badges/${raw.id}`,
      description: firstSentence(template.description ?? ""),
    });

    console.log(`  ✓ ${name}`);
  }

  const output = { source: API_URL, badges };
  await writeFile(
    join(ROOT, "src", "data", "credly.json"),
    `${JSON.stringify(output, null, 2)}\n`,
  );

  console.log(`Updated src/data/credly.json with ${badges.length} badge(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
