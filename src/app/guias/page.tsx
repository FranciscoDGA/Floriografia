import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllArticles, getReadingMinutes } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guias de floriografia",
  description:
    "Guias curtos e práticos: o que é floriografia, como escolher flores para presentear, flores perfumadas, cuidado com flores cortadas, quantas rosas dar e muito mais.",
  path: "/guias",
});

export default function GuiasPage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHeader
        title="Guias"
        eyebrow="Leituras do coração"
        description="Textos para os momentos em que você sabe o que quer dizer, mas ainda não sabe como: o primeiro buquê, o cartão em branco, a flor que dura, o presente que não tem data."
        breadcrumbs={[{ name: "Guias", path: "/guias" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/guias/${article.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <h2 className="font-display text-xl font-semibold text-leaf">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{article.excerpt}</p>
              <p className="mt-4 flex items-center justify-between text-xs text-ink-2">
                <span>{getReadingMinutes(article)} min de leitura</span>
                <span className="font-semibold uppercase tracking-[0.16em] text-bloom">Ler guia →</span>
              </p>
            </Link>
          ))}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Guias de floriografia",
          path: "/guias",
          items: articles.map((article) => ({ name: article.title, path: `/guias/${article.slug}` })),
        })}
      />
    </>
  );
}
