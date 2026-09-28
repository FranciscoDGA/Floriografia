import { cache } from "react";

import { articles } from "@/content/artigos";
import { flowers } from "@/content/flores";
import { gestos } from "@/content/gestos";
import {
  aromas,
  characteristics,
  colors,
  combinations,
  meanings,
  occasions,
  seasons,
} from "@/content/taxonomias";
import type {
  Article,
  Characteristic,
  Color,
  Combination,
  Flower,
  Gesto,
  Meaning,
  Occasion,
} from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Integridade do acervo                                               */
/* ------------------------------------------------------------------ */

const unique = (slugs: string[], field: string, owner: string) => {
  const seen = new Set<string>();
  for (const s of slugs) {
    if (seen.has(s)) throw new Error(`Conteúdo: slug duplicado "${s}" em ${owner}.${field}`);
    seen.add(s);
  }
};

const assertRefs = (refs: string[], valid: Set<string>, field: string, owner: string) => {
  for (const r of refs) {
    if (!valid.has(r)) throw new Error(`Conteúdo: "${owner}.${field}" referencia slug inexistente "${r}"`);
  }
};

/**
 * Valida integridade referencial na importação do módulo.
 * Se quebrar, o `next build` falha — é proposital: link interno quebrado é bug.
 */
function assertContentIntegrity() {
  const flowerSlugs = new Set(flowers.map((f) => f.slug));
  const colorSlugs = new Set(colors.map((c) => c.slug));
  const meaningSlugs = new Set(meanings.map((m) => m.slug));
  const occasionSlugs = new Set(occasions.map((o) => o.slug));
  const seasonSlugs = new Set(seasons.map((s) => s.slug));
  const characteristicSlugs = new Set(characteristics.map((c) => c.slug));
  const aromaSlugs = new Set(aromas.map((a) => a.slug));
  const articleSlugs = new Set(articles.map((a) => a.slug));

  for (const [list, field, owner] of [
    [flowers.map((f) => f.slug), "slug", "flowers"],
    [colors.map((c) => c.slug), "slug", "colors"],
    [meanings.map((m) => m.slug), "slug", "meanings"],
    [occasions.map((o) => o.slug), "slug", "occasions"],
    [combinations.map((c) => c.slug), "slug", "combinations"],
    [articles.map((a) => a.slug), "slug", "articles"],
    [gestos.map((g) => g.slug), "slug", "gestos"],
  ] as const) {
    unique(list, field, owner);
  }

  for (const f of flowers) {
    assertRefs(f.colors, colorSlugs, "colors", f.slug);
    assertRefs(f.meanings, meaningSlugs, "meanings", f.slug);
    assertRefs(f.occasions, occasionSlugs, "occasions", f.slug);
    assertRefs(f.seasons, seasonSlugs, "seasons", f.slug);
    assertRefs(f.characteristics, characteristicSlugs, "characteristics", f.slug);
    assertRefs(f.aroma.notes, aromaSlugs, "aroma.notes", f.slug);
    assertRefs(f.relatedFlowers, flowerSlugs, "relatedFlowers", f.slug);
    if (f.colors.length === 0) throw new Error(`Conteúdo: flor "${f.slug}" sem cor`);
    if (f.relatedFlowers.includes(f.slug)) throw new Error(`Conteúdo: flor "${f.slug}" ligada a si mesma`);
  }

  for (const c of combinations) assertRefs(c.flowerSlugs, flowerSlugs, "flowerSlugs", c.slug);

  for (const a of articles) {
    assertRefs(a.related.flowers ?? [], flowerSlugs, "related.flowers", a.slug);
    assertRefs(a.related.colors ?? [], colorSlugs, "related.colors", a.slug);
    assertRefs(a.related.meanings ?? [], meaningSlugs, "related.meanings", a.slug);
    assertRefs(a.related.occasions ?? [], occasionSlugs, "related.occasions", a.slug);
    assertRefs(a.related.characteristics ?? [], characteristicSlugs, "related.characteristics", a.slug);
  }

  for (const g of gestos) {
    assertRefs(g.flowerSlugs, flowerSlugs, "flowerSlugs", g.slug);
    assertRefs(g.meaningSlugs, meaningSlugs, "meaningSlugs", g.slug);
    assertRefs(g.guideSlugs ?? [], articleSlugs, "guideSlugs", g.slug);
    if (g.occasionSlug && !occasionSlugs.has(g.occasionSlug)) {
      throw new Error(`Conteúdo: "gestos.${g.slug}" referencia ocasião inexistente "${g.occasionSlug}"`);
    }
    if (g.flowerSlugs.length < 3) throw new Error(`Conteúdo: gesto "${g.slug}" com menos de 3 flores`);
    if (g.description.length < 2) throw new Error(`Conteúdo: gesto "${g.slug}" com descrição curta demais`);
  }

  void articleSlugs;
}

assertContentIntegrity();

/* ------------------------------------------------------------------ */
/* Consultas                                                           */
/* ------------------------------------------------------------------ */

const published = <T extends { status: string }>(items: T[]) =>
  items.filter((i) => i.status === "published");

export const getAllFlowers = cache((): Flower[] => published(flowers));
export const getAllGestos = cache((): Gesto[] => published(gestos));
export const getAllColors = cache((): Color[] => published(colors));
export const getAllMeanings = cache((): Meaning[] => published(meanings));
export const getAllOccasions = cache((): Occasion[] => published(occasions));
export const getAllCharacteristics = cache((): Characteristic[] => published(characteristics));
export const getAllCombinations = cache((): Combination[] => published(combinations));
export const getAllArticles = cache((): Article[] => published(articles));

export const getFlower = cache((slug: string) => getAllFlowers().find((f) => f.slug === slug));
export const getGesto = cache((slug: string) => getAllGestos().find((g) => g.slug === slug));
/** Gestos que envolvem uma flor (ex.: rosa → declarar, reatar, pedir a mão). */
export const getGestosByFlower = cache((slug: string) =>
  getAllGestos().filter((g) => g.flowerSlugs.includes(slug)),
);
export const getGestosByMeaning = cache((slug: string) =>
  getAllGestos().filter((g) => g.meaningSlugs.includes(slug)),
);
export const getColor = cache((slug: string) => getAllColors().find((c) => c.slug === slug));
export const getMeaning = cache((slug: string) => getAllMeanings().find((m) => m.slug === slug));
export const getOccasion = cache((slug: string) => getAllOccasions().find((o) => o.slug === slug));
export const getCharacteristic = cache((slug: string) =>
  getAllCharacteristics().find((c) => c.slug === slug),
);
export const getCombination = cache((slug: string) =>
  getAllCombinations().find((c) => c.slug === slug),
);
export const getArticle = cache((slug: string) => getAllArticles().find((a) => a.slug === slug));

/** Minutos de leitura de um artigo (≈200 palavras por minuto, corpo + FAQ). */
export const getReadingMinutes = cache((article: Article): number => {
  const body = [
    ...article.sections.flatMap((s) => [...s.paragraphs, ...(s.list ?? [])]),
    ...(article.faqs ?? []).flatMap((f) => [f.question, f.answer]),
  ].join(" ");
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
});

/* Relacionamentos inversos (rede semântica) */

export const getFlowersByColor = cache((slug: string) =>
  getAllFlowers().filter((f) => f.colors.includes(slug)),
);
export const getFlowersByMeaning = cache((slug: string) =>
  getAllFlowers().filter((f) => f.meanings.includes(slug)),
);
export const getFlowersByOccasion = cache((slug: string) =>
  getAllFlowers().filter((f) => f.occasions.includes(slug)),
);
export const getFlowersByCharacteristic = cache((slug: string) =>
  getAllFlowers().filter((f) => f.characteristics.includes(slug)),
);
export const getFlowersBySeason = cache((slug: string) =>
  getAllFlowers().filter((f) => f.seasons.includes(slug)),
);
export const getCombinationsByFlower = cache((slug: string) =>
  getAllCombinations().filter((c) => c.flowerSlugs.includes(slug)),
);
export const getRelatedFlowers = cache((flower: Flower) =>
  flower.relatedFlowers
    .map((slug) => getFlower(slug))
    .filter((f): f is Flower => Boolean(f)),
);
export const getColorsOf = cache((flower: Flower) =>
  flower.colors.map((slug) => getColor(slug)).filter((c): c is Color => Boolean(c)),
);
export const getMeaningsOf = cache((flower: Flower) =>
  flower.meanings.map((slug) => getMeaning(slug)).filter((m): m is Meaning => Boolean(m)),
);
export const getOccasionsOf = cache((flower: Flower) =>
  flower.occasions.map((slug) => getOccasion(slug)).filter((o): o is Occasion => Boolean(o)),
);
export const getCharacteristicsOf = cache((flower: Flower) =>
  flower.characteristics
    .map((slug) => getCharacteristic(slug))
    .filter((c): c is Characteristic => Boolean(c)),
);
export const getSeasonsOf = cache((flower: Flower) =>
  flower.seasons
    .map((slug) => seasons.find((s) => s.slug === slug))
    .filter((s): s is (typeof seasons)[number] => Boolean(s)),
);

/** Artigos relacionados a uma entidade (flores, cores, significados, ocasiões). */
export const getArticlesRelatedTo = cache(
  (kind: "flowers" | "colors" | "meanings" | "occasions", slug: string) =>
    getAllArticles().filter((a) => a.related[kind]?.includes(slug)),
);

/** Resolve uma lista de slugs de flores, descartando entradas inexistentes. */
export const getFlowersBySlugs = cache((slugs: string[] = []): Flower[] =>
  slugs.map((slug) => getFlower(slug)).filter((f): f is Flower => Boolean(f)),
);
export const getColorsBySlugs = cache((slugs: string[] = []): Color[] =>
  slugs.map((slug) => getColor(slug)).filter((c): c is Color => Boolean(c)),
);
export const getMeaningsBySlugs = cache((slugs: string[] = []): Meaning[] =>
  slugs.map((slug) => getMeaning(slug)).filter((m): m is Meaning => Boolean(m)),
);
export const getOccasionsBySlugs = cache((slugs: string[] = []): Occasion[] =>
  slugs.map((slug) => getOccasion(slug)).filter((o): o is Occasion => Boolean(o)),
);
export const getCharacteristicsBySlugs = cache((slugs: string[] = []): Characteristic[] =>
  slugs.map((slug) => getCharacteristic(slug)).filter((c): c is Characteristic => Boolean(c)),
);

/* ------------------------------------------------------------------ */
/* Busca                                                               */
/* ------------------------------------------------------------------ */

export type SearchDocType =
  | "gesto"
  | "flor"
  | "significado"
  | "cor"
  | "ocasiao"
  | "guia"
  | "caracteristica";

export interface SearchDoc {
  type: SearchDocType;
  title: string;
  description: string;
  href: string;
  haystack: string;
}

export const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const typeLabel: Record<SearchDocType, string> = {
  gesto: "Gesto",
  flor: "Flor",
  significado: "Significado",
  cor: "Cor",
  ocasiao: "Ocasião",
  guia: "Guia",
  caracteristica: "Característica",
};

export const searchTypeLabel = (type: SearchDocType) => typeLabel[type];

export const buildSearchIndex = cache((): SearchDoc[] => {
  const docs: SearchDoc[] = [];

  for (const g of getAllGestos()) {
    docs.push({
      type: "gesto",
      title: `Gesto: ${g.name}`,
      description: g.hook,
      href: `/gestos/${g.slug}`,
      haystack: normalizeText(
        [g.name, g.hook, g.description.join(" "), g.guidance.join(" "), g.flowerSlugs.join(" ")].join(" "),
      ),
    });
  }

  for (const f of getAllFlowers()) {
    docs.push({
      type: "flor",
      title: f.name,
      description: f.summary,
      href: `/flores/${f.slug}`,
      haystack: normalizeText(
        [
          f.name,
          f.scientificName,
          f.family,
          f.summary,
          f.intro,
          f.colors.join(" "),
          f.meanings.join(" "),
          f.occasions.join(" "),
        ].join(" "),
      ),
    });
  }

  for (const m of getAllMeanings()) {
    docs.push({
      type: "significado",
      title: m.name,
      description: m.description.slice(0, 180),
      href: `/significados/${m.slug}`,
      haystack: normalizeText([m.name, m.description].join(" ")),
    });
  }

  for (const c of getAllColors()) {
    docs.push({
      type: "cor",
      title: c.name,
      description: c.description.slice(0, 180),
      href: `/cores/${c.slug}`,
      haystack: normalizeText([c.name, c.description].join(" ")),
    });
  }

  for (const o of getAllOccasions()) {
    docs.push({
      type: "ocasiao",
      title: o.name,
      description: o.description.slice(0, 180),
      href: `/ocasioes/${o.slug}`,
      haystack: normalizeText([o.name, o.description, o.guidance.join(" ")].join(" ")),
    });
  }

  for (const c of getAllCharacteristics()) {
    docs.push({
      type: "caracteristica",
      title: c.name,
      description: c.description.slice(0, 180),
      href: `/caracteristicas/${c.slug}`,
      haystack: normalizeText([c.name, c.description].join(" ")),
    });
  }

  for (const a of getAllArticles()) {
    docs.push({
      type: "guia",
      title: a.title,
      description: a.excerpt,
      href: `/guias/${a.slug}`,
      haystack: normalizeText(
        [a.title, a.excerpt, a.sections.map((s) => `${s.heading} ${s.paragraphs.join(" ")}`).join(" ")].join(
          " ",
        ),
      ),
    });
  }

  return docs;
});

export interface SearchHit extends SearchDoc {
  score: number;
}

/** Busca simples por pontuação: correspondência no título pesa mais que no corpo. */
export function searchDocs(query: string, limit = 40): SearchHit[] {
  const q = normalizeText(query);
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];

  for (const doc of buildSearchIndex()) {
    let score = 0;
    for (const term of terms) {
      const inTitle = normalizeText(doc.title).includes(term);
      const inHay = doc.haystack.includes(term);
      if (inTitle) score += 6;
      else if (inHay) score += 2;
    }
    if (score > 0) hits.push({ ...doc, score });
  }

  return hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}
