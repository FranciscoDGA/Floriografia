import type { MetadataRoute } from "next";

import { getAllArticles, getAllColors, getAllFlowers, getAllGestos, getAllMeanings, getAllOccasions, getAllCharacteristics, getAllCombinations } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

/** Páginas institucionais, editoriais e de navegação. */
const STATIC_PATHS = [
  "/",
  "/gestos",
  "/flores",
  "/significados",
  "/cores",
  "/ocasioes",
  "/caracteristicas",
  "/combinacoes",
  "/guias",
  "/qual-flor",
  "/sobre",
  "/contato",
  "/fontes",
  "/metodologia",
  "/correcoes",
  "/politica-editorial",
  "/uso-de-ia",
  "/afiliados",
  "/publicidade",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const gestoEntries = getAllGestos().map((gesto) => ({
    url: absoluteUrl(`/gestos/${gesto.slug}`),
    lastModified: new Date(gesto.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const flowerEntries = getAllFlowers().map((flower) => ({
    url: absoluteUrl(`/flores/${flower.slug}`),
    lastModified: new Date(flower.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const meaningEntries = getAllMeanings().map((meaning) => ({
    url: absoluteUrl(`/significados/${meaning.slug}`),
    lastModified: new Date(meaning.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const colorEntries = getAllColors().map((color) => ({
    url: absoluteUrl(`/cores/${color.slug}`),
    lastModified: new Date(color.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const occasionEntries = getAllOccasions().map((occasion) => ({
    url: absoluteUrl(`/ocasioes/${occasion.slug}`),
    lastModified: new Date(occasion.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const characteristicEntries = getAllCharacteristics().map((item) => ({
    url: absoluteUrl(`/caracteristicas/${item.slug}`),
    lastModified: new Date(item.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const combinationEntries = getAllCombinations().map((item) => ({
    url: absoluteUrl(`/combinacoes/${item.slug}`),
    lastModified: new Date(item.updatedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const guideEntries = getAllArticles().map((article) => ({
    url: absoluteUrl(`/guias/${article.slug}`),
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...gestoEntries,
    ...flowerEntries,
    ...meaningEntries,
    ...colorEntries,
    ...occasionEntries,
    ...characteristicEntries,
    ...combinationEntries,
    ...guideEntries,
  ];
}
