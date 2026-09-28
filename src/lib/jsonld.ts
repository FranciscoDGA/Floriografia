import { absoluteUrl, SITE } from "@/lib/site";

export interface Crumb {
  name: string;
  path: string;
}

const WEB_PAGE_CONTEXT = "https://schema.org";

export function websiteJsonLd() {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "WebSite",
    name: SITE.name,
    alternateName: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    inLanguage: SITE.language,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/buscar?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/** `items` do início ao fim, incluindo a home. */
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
}) {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    url: absoluteUrl(input.path),
    inLanguage: SITE.locale,
    datePublished: input.publishedTime,
    dateModified: input.modifiedTime ?? input.publishedTime,
    author: { "@type": "Organization", name: input.authorName ?? SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function itemListJsonLd(input: { name: string; path: string; items: { name: string; path: string }[] }) {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "ItemList",
    name: input.name,
    url: absoluteUrl(input.path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": WEB_PAGE_CONTEXT,
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: SITE.language,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
  };
}
