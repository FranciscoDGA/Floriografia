import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlowerGrid } from "@/components/flower-grid";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import {
  getAllOccasions,
  getFlowersByOccasion,
  getOccasion,
} from "@/lib/content";
import { itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllOccasions().map((occasion) => ({ slug: occasion.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const occasion = getOccasion(slug);
  if (!occasion) return { robots: { index: false } };
  return pageMetadata({
    title: occasion.seo.title,
    description: occasion.seo.description,
    path: `/ocasioes/${occasion.slug}`,
    modifiedTime: occasion.updatedAt,
  });
}

export default async function OccasionPage({ params }: Props) {
  const { slug } = await params;
  const occasion = getOccasion(slug);
  if (!occasion) notFound();

  const flowers = getFlowersByOccasion(occasion.slug);

  return (
    <>
      <PageHeader
        title={occasion.name}
        eyebrow="Ocasiões"
        description={occasion.description}
        breadcrumbs={[
          { name: "Ocasiões", path: "/ocasioes" },
          { name: occasion.name, path: `/ocasioes/${occasion.slug}` },
        ]}
      />

      <div className="container-page pb-16">
        <section aria-labelledby="criterios">
          <h2 id="criterios" className="font-display text-2xl font-semibold text-leaf">
            Critérios práticos
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {occasion.guidance.map((rule, index) => (
              <li key={index} className="rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-ink-2">
                <span className="mr-2 font-display font-semibold text-bloom">{index + 1}.</span>
                {rule}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="flores-ocasiao" className="mt-12">
          <h2 id="flores-ocasiao" className="font-display text-2xl font-semibold text-leaf">
            Flores para esta ocasião
          </h2>
          <p className="mt-2 text-sm text-ink-2">{flowers.length} flores publicadas para {occasion.name.toLowerCase()}.</p>
          <div className="mt-5">
            <FlowerGrid flowers={flowers} />
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: occasion.seo.title,
            description: occasion.seo.description,
            path: `/ocasioes/${occasion.slug}`,
          }),
          itemListJsonLd({
            name: `Flores para ${occasion.name}`,
            path: `/ocasioes/${occasion.slug}`,
            items: flowers.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
        ]}
      />
    </>
  );
}
