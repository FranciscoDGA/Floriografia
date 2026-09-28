import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlowerGrid } from "@/components/flower-grid";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { TagLink } from "@/components/tag-link";
import {
  getAllCombinations,
  getAllMeanings,
  getFlowersByMeaning,
  getMeaning,
} from "@/lib/content";
import { itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Slugs fora do acervo respondem 404 de verdade (sem render on-demand). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllMeanings().map((meaning) => ({ slug: meaning.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meaning = getMeaning(slug);
  if (!meaning) return { robots: { index: false } };
  return pageMetadata({
    title: meaning.seo.title,
    description: meaning.seo.description,
    path: `/significados/${meaning.slug}`,
    modifiedTime: meaning.updatedAt,
  });
}

export default async function MeaningPage({ params }: Props) {
  const { slug } = await params;
  const meaning = getMeaning(slug);
  if (!meaning) notFound();

  const flowers = getFlowersByMeaning(meaning.slug);
  const flowerSlugs = new Set(flowers.map((flower) => flower.slug));
  const combinations = getAllCombinations().filter((combination) =>
    combination.flowerSlugs.some((flowerSlug) => flowerSlugs.has(flowerSlug)),
  );
  const otherMeanings = getAllMeanings().filter((item) => item.slug !== meaning.slug);

  return (
    <>
      <PageHeader
        title={meaning.name}
        eyebrow="Significados"
        description={meaning.description}
        breadcrumbs={[
          { name: "Significados", path: "/significados" },
          { name: meaning.name, path: `/significados/${meaning.slug}` },
        ]}
      />

      <div className="container-page pb-16">
        {meaning.caveat && (
          <div className="mb-8 rounded-2xl border border-line bg-paper-2 p-5">
            <p className="text-sm leading-relaxed text-ink-2">
              <strong className="text-ink">Atenção ao contexto:</strong> {meaning.caveat}
            </p>
          </div>
        )}

        <section aria-labelledby="flores-significado">
          <h2 id="flores-significado" className="font-display text-2xl font-semibold text-leaf">
            Flores que carregam este significado
          </h2>
          <p className="mt-2 text-sm text-ink-2">
            {flowers.length} flores relacionadas a “{meaning.name}” na tradição cultural.
          </p>
          <div className="mt-5">
            <FlowerGrid flowers={flowers} />
          </div>
        </section>

        {combinations.length > 0 && (
          <section aria-labelledby="combinacoes-significado" className="mt-12">
            <h2 id="combinacoes-significado" className="font-display text-2xl font-semibold text-leaf">
              Combinações com estas flores
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {combinations.slice(0, 4).map((combination) => (
                <div key={combination.slug} className="rounded-2xl border border-line bg-white p-5">
                  <p className="font-display text-lg font-semibold text-leaf">{combination.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{combination.description}</p>
                  <p className="mt-3 text-sm">
                    <a
                      href={`/combinacoes/${combination.slug}`}
                      className="text-leaf-2 underline underline-offset-4 hover:text-bloom"
                    >
                      Ver detalhe
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="outras-mensagens" className="mt-12">
          <h2 id="outras-mensagens" className="font-display text-2xl font-semibold text-leaf">
            Outras mensagens
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherMeanings.map((item) => (
              <TagLink key={item.slug} href={`/significados/${item.slug}`}>
                {item.name}
              </TagLink>
            ))}
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: meaning.seo.title,
            description: meaning.seo.description,
            path: `/significados/${meaning.slug}`,
          }),
          itemListJsonLd({
            name: `Flores com significado de ${meaning.name}`,
            path: `/significados/${meaning.slug}`,
            items: flowers.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
        ]}
      />
    </>
  );
}
