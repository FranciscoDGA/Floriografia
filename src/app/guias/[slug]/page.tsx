import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { TagLink } from "@/components/tag-link";
import {
  getAllArticles,
  getArticle,
  getColorsBySlugs,
  getFlowersBySlugs,
  getMeaningsBySlugs,
  getOccasionsBySlugs,
} from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Slugs fora do acervo respondem 404 de verdade (sem render on-demand). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { robots: { index: false } };
  return pageMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: `/guias/${article.slug}`,
    type: "article",
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedFlowers = getFlowersBySlugs(article.related.flowers);
  const relatedColors = getColorsBySlugs(article.related.colors);
  const relatedMeanings = getMeaningsBySlugs(article.related.meanings);
  const relatedOccasions = getOccasionsBySlugs(article.related.occasions);

  const hasRelated =
    relatedFlowers.length + relatedColors.length + relatedMeanings.length + relatedOccasions.length > 0;

  return (
    <>
      <PageHeader
        title={article.title}
        eyebrow="Guias"
        description={article.excerpt}
        breadcrumbs={[{ name: "Guias", path: "/guias" }, { name: article.title, path: `/guias/${article.slug}` }]}
      />

      <article className="container-page max-w-3xl pb-16">
        <p className="text-sm text-ink-2">
          Atualizado em{" "}
          <time dateTime={article.updatedAt}>
            {new Date(article.updatedAt + "T12:00:00").toLocaleDateString("pt-BR")}
          </time>
        </p>

        <div className="mt-8 space-y-10">
          {article.sections.map((section, index) => (
            <section key={index}>
              <h2
                id={`secao-${index + 1}`}
                className="scroll-mt-24 font-display text-2xl font-semibold text-leaf"
              >
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="leading-relaxed text-ink-2">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-5 text-ink-2">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {hasRelated && (
          <section aria-labelledby="relacionados" className="mt-12 border-t border-line pt-8">
            <h2 id="relacionados" className="font-display text-2xl font-semibold text-leaf">
              Relacionados
            </h2>

            {relatedFlowers.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">Flores</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedFlowers.map((flower) => (
                    <TagLink key={flower.slug} href={`/flores/${flower.slug}`}>
                      {flower.name}
                    </TagLink>
                  ))}
                </div>
              </div>
            )}

            {relatedMeanings.length > 0 && (
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">Significados</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedMeanings.map((meaning) => (
                    <TagLink key={meaning.slug} href={`/significados/${meaning.slug}`} tone="accent">
                      {meaning.name}
                    </TagLink>
                  ))}
                </div>
              </div>
            )}

            {relatedColors.length > 0 && (
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">Cores</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedColors.map((color) => (
                    <TagLink key={color.slug} href={`/cores/${color.slug}`}>
                      {color.name}
                    </TagLink>
                  ))}
                </div>
              </div>
            )}

            {relatedOccasions.length > 0 && (
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">Ocasiões</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedOccasions.map((occasion) => (
                    <TagLink key={occasion.slug} href={`/ocasioes/${occasion.slug}`}>
                      {occasion.name}
                    </TagLink>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {article.faqs && article.faqs.length > 0 && (
          <section aria-labelledby="faq-guia" className="mt-12 border-t border-line pt-8">
            <h2 id="faq-guia" className="font-display text-2xl font-semibold text-leaf">
              Perguntas frequentes
            </h2>
            <div className="mt-4 space-y-4">
              {article.faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="font-display text-base font-semibold text-leaf">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl bg-paper-2 p-6">
          <p className="text-sm leading-relaxed text-ink-2">
            Achou algo impreciso?{" "}
            <Link href="/correcoes" className="text-leaf-2 underline underline-offset-4 hover:text-bloom">
              Envie uma correção
            </Link>{" "}
            ou consulte a{" "}
            <Link href="/metodologia" className="text-leaf-2 underline underline-offset-4 hover:text-bloom">
              metodologia
            </Link>
            .
          </p>
        </div>
      </article>

      <JsonLd
        data={[
          articleJsonLd({
            title: article.seo.title,
            description: article.seo.description,
            path: `/guias/${article.slug}`,
            modifiedTime: article.updatedAt,
          }),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Guias", path: "/guias" },
            { name: article.title, path: `/guias/${article.slug}` },
          ]),
          ...(article.faqs && article.faqs.length > 0 ? [faqJsonLd(article.faqs)] : []),
        ]}
      />
    </>
  );
}
