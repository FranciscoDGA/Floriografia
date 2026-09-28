import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlowerGrid } from "@/components/flower-grid";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import {
  getAllCharacteristics,
  getCharacteristic,
  getFlowersByCharacteristic,
} from "@/lib/content";
import { itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Slugs fora do acervo respondem 404 de verdade (sem render on-demand). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCharacteristics().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const characteristic = getCharacteristic(slug);
  if (!characteristic) return { robots: { index: false } };
  return pageMetadata({
    title: characteristic.seo.title,
    description: characteristic.seo.description,
    path: `/caracteristicas/${characteristic.slug}`,
    modifiedTime: characteristic.updatedAt,
  });
}

export default async function CharacteristicPage({ params }: Props) {
  const { slug } = await params;
  const characteristic = getCharacteristic(slug);
  if (!characteristic) notFound();

  const flowers = getFlowersByCharacteristic(characteristic.slug);

  return (
    <>
      <PageHeader
        title={characteristic.name}
        eyebrow="Características"
        description={characteristic.description}
        breadcrumbs={[
          { name: "Características", path: "/caracteristicas" },
          { name: characteristic.name, path: `/caracteristicas/${characteristic.slug}` },
        ]}
      />

      <div className="container-page pb-16">
        {characteristic.caveat && (
          <div className="mb-8 rounded-2xl border border-line bg-paper-2 p-5">
            <p className="text-sm leading-relaxed text-ink-2">
              <strong className="text-ink">Ressalva:</strong> {characteristic.caveat}
            </p>
          </div>
        )}

        <section aria-labelledby="flores-caracteristica">
          <h2 id="flores-caracteristica" className="font-display text-2xl font-semibold text-leaf">
            Flores com esta característica
          </h2>
          <p className="mt-2 text-sm text-ink-2">{flowers.length} flores no acervo.</p>
          <div className="mt-5">
            <FlowerGrid flowers={flowers} />
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: characteristic.seo.title,
            description: characteristic.seo.description,
            path: `/caracteristicas/${characteristic.slug}`,
          }),
          itemListJsonLd({
            name: `Flores ${characteristic.name.toLowerCase()}`,
            path: `/caracteristicas/${characteristic.slug}`,
            items: flowers.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
        ]}
      />
    </>
  );
}
