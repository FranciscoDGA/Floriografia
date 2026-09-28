import type { Metadata } from "next";

import { absoluteUrl, SITE } from "@/lib/site";

interface PageSeoInput {
  title: string;
  description: string;
  /** Caminho a partir da raiz, ex.: "/flores/rosa". */
  path: string;
  /** Sobe no <title> do template do root layout. */
  type?: "website" | "article";
  noindex?: boolean;
  /** `false` = noindex (mesmo efeito de `noindex: true`). */
  robots?: boolean;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Metadata padrão: title, description, canonical, Open Graph e Twitter.
 * Todas as rotas públicas usam esta função para não repetir boilerplate.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  robots = true,
  image,
  publishedTime,
  modifiedTime,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex || robots === false ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      ...(type === "article"
        ? { publishedTime, modifiedTime }
        : {}),
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/** Metadata para páginas de listagem de taxonomia. */
export function listingMetadata(input: Omit<PageSeoInput, "type">): Metadata {
  return pageMetadata(input);
}
