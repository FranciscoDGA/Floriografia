import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlowerCard } from "@/components/flower-card";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllCombinations, getCombination, getFlower } from "@/lib/content";
import { itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import type { Flower } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCombinations().map((combination) => ({ slug: combination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const combination = getCombination(slug);
  if (!combination) return { robots: { index: false } };
  return pageMetadata({
    title: combination.seo.title,
    description: combination.seo.description,
    path: `/combinacoes/${combination.slug}`,
    modifiedTime: combination.updatedAt,
  });
}

export default async function CombinationPage({ params }: Props) {
  const { slug } = await params;
  const combination = getCombination(slug);
  if (!combination) notFound();

  const members = combination.flowerSlugs
    .map((flowerSlug) => getFlower(flowerSlug))
    .filter((flower): flower is Flower => Boolean(flower));

  const others = getAllCombinations().filter((item) => item.slug !== combination.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        title={combination.name}
        eyebrow="Combinações"
        description={combination.description}
        breadcrumbs={[
          { name: "Combinações", path: "/combinacoes" },
          { name: combination.name, path: `/combinacoes/${combination.slug}` },
        ]}
      />

      <div className="container-page pb-16">
        {combination.tip && (
          <div className="mb-8 rounded-2xl border border-line bg-paper-2 p-5">
            <p className="text-sm leading-relaxed text-ink-2">
              <strong className="text-ink">Como montar:</strong> {combination.tip}
            </p>
          </div>
        )}

        <section aria-labelledby="flores-da-combinacao">
          <h2 id="flores-da-combinacao" className="font-display text-2xl font-semibold text-leaf">
            Flores da combinação
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((flower) => (
              <FlowerCard key={flower.slug} flower={flower} />
            ))}
          </div>
        </section>

        <section aria-labelledby="outras-combinacoes" className="mt-12">
          <h2 id="outras-combinacoes" className="font-display text-2xl font-semibold text-leaf">
            Outras combinações
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <a
                key={item.slug}
                href={`/combinacoes/${item.slug}`}
                className="rounded-2xl border border-line bg-white p-5 transition hover:border-leaf/40"
              >
                <p className="font-display text-lg font-semibold text-leaf">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: combination.seo.title,
            description: combination.seo.description,
            path: `/combinacoes/${combination.slug}`,
          }),
          itemListJsonLd({
            name: `Flores em ${combination.name}`,
            path: `/combinacoes/${combination.slug}`,
            items: members.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
        ]}
      />
    </>
  );
}
