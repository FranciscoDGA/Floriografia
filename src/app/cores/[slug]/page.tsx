import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { FlowerGrid } from "@/components/flower-grid";
import { TagLink } from "@/components/tag-link";
import {
  getAllColors,
  getAllMeanings,
  getColor,
  getFlowersByColor,
} from "@/lib/content";
import { itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllColors().map((color) => ({ slug: color.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const color = getColor(slug);
  if (!color) return { robots: { index: false } };
  return pageMetadata({
    title: color.seo.title,
    description: color.seo.description,
    path: `/cores/${color.slug}`,
    modifiedTime: color.updatedAt,
  });
}

export default async function ColorPage({ params }: Props) {
  const { slug } = await params;
  const color = getColor(slug);
  if (!color) notFound();

  const flowers = getFlowersByColor(color.slug);
  const meanings = getAllMeanings().filter((meaning) =>
    flowers.some((flower) => flower.meanings.includes(meaning.slug)),
  );

  return (
    <>
      <PageHeader
        title={color.name}
        eyebrow="Cores"
        description={color.description}
        breadcrumbs={[{ name: "Cores", path: "/cores" }, { name: color.name, path: `/cores/${color.slug}` }]}
      />

      <div className="container-page pb-16">
        <div className="mb-8 flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
          <span
            aria-hidden="true"
            className="size-14 shrink-0 rounded-full border border-line"
            style={{ backgroundColor: color.hex }}
          />
          <div>
            <p className="font-medium text-ink">{color.name}</p>
            <p className="text-sm text-ink-2">
              Hex {color.hex} — usada como marcação visual desta categoria, não como leitura cultural.
            </p>
          </div>
        </div>

        {color.caveat && (
          <div className="mb-8 rounded-2xl border border-line bg-paper-2 p-5">
            <p className="text-sm leading-relaxed text-ink-2">
              <strong className="text-ink">Contexto:</strong> {color.caveat}
            </p>
          </div>
        )}

        <section aria-labelledby="flores-da-cor">
          <h2 id="flores-da-cor" className="font-display text-2xl font-semibold text-leaf">
            Flores desta cor
          </h2>
          <p className="mt-2 text-sm text-ink-2">{flowers.length} flores publicadas com esta cor.</p>
          <div className="mt-5">
            <FlowerGrid flowers={flowers} />
          </div>
        </section>

        {meanings.length > 0 && (
          <section aria-labelledby="significados-relacionados" className="mt-12">
            <h2 id="significados-relacionados" className="font-display text-2xl font-semibold text-leaf">
              Significados que aparecem nestas flores
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {meanings.map((meaning) => (
                <TagLink key={meaning.slug} href={`/significados/${meaning.slug}`} tone="accent">
                  {meaning.name}
                </TagLink>
              ))}
            </div>
          </section>
        )}
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: color.seo.title,
            description: color.seo.description,
            path: `/cores/${color.slug}`,
          }),
          itemListJsonLd({
            name: `Flores na cor ${color.name}`,
            path: `/cores/${color.slug}`,
            items: flowers.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
        ]}
      />
    </>
  );
}
