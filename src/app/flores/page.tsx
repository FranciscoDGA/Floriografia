import type { Metadata } from "next";

import { FlowerDirectory } from "@/components/flower-directory";
import { PageHeader } from "@/components/page-header";
import { getAllColors, getAllFlowers } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Flores: espécies, significados e cuidados",
  description:
    "Catálogo de flores com nome científico, família, origem, cores, significados, ocasiões, aroma, cuidados e FAQ.",
  path: "/flores",
});

export default function FloresPage() {
  const flowers = getAllFlowers();
  const colors = getAllColors();

  return (
    <>
      <PageHeader
        title="Flores"
        eyebrow="Enciclopédia"
        description={`Acervo de ${flowers.length} flores organizado por entidades relacionadas: cada espécie liga-se a cores, significados, ocasiões, características e combinações — não a artigos soltos.`}
        breadcrumbs={[{ name: "Flores", path: "/flores" }]}
      />

      <div className="container-page pb-16">
        <FlowerDirectory
          flowers={flowers}
          colors={colors.map((c) => ({ slug: c.slug, name: c.name, hex: c.hex }))}
        />
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Flores",
          path: "/flores",
          items: flowers.map((f) => ({ name: f.name, path: `/flores/${f.slug}` })),
        })}
      />
    </>
  );
}
