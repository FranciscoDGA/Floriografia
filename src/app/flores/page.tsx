import type { Metadata } from "next";

import { FlowerDirectory } from "@/components/flower-directory";
import { PageHeader } from "@/components/page-header";
import { getAllColors, getAllFlowers } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Flores: história, significado e o gesto certo",
  description:
    "40 flores com nome científico, significado, perfume, época e cuidados — para escolher pensando em quem vai receber.",
  path: "/flores",
});

export default function FloresPage() {
  const flowers = getAllFlowers();
  const colors = getAllColors();

  return (
    <>
      <PageHeader
        title="Flores"
        eyebrow="O acervo"
        description={`Cada flor aqui tem uma história e um jeito de dizer. Encontre pela beleza, pelo perfume ou pela mensagem — e leve junto o que ela significa, como dura e com que gesto combina.`}
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
