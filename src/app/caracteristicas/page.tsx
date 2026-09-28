import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllCharacteristics } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Características das flores",
  description:
    "Perfumada, resistente, delicada, para interno, para externo, tropical, para calor, para sombra e tóxica — filtre o acervo pelo que a flor faz na prática.",
  path: "/caracteristicas",
});

export default function CaracteristicasPage() {
  const characteristics = getAllCharacteristics();

  return (
    <>
      <PageHeader
        title="Características"
        eyebrow="Filtros práticos"
        description="Não é o que a flor significa, é o que ela aguenta e entrega: perfume, resistência, porte, ambiente e cuidados de segurança."
        breadcrumbs={[{ name: "Características", path: "/caracteristicas" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {characteristics.map((characteristic) => (
            <Link
              key={characteristic.slug}
              href={`/caracteristicas/${characteristic.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <h2 className="font-display text-xl font-semibold text-leaf">{characteristic.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{characteristic.description}</p>
              {characteristic.caveat && (
                <p className="mt-3 text-xs leading-relaxed text-bloom">{characteristic.caveat}</p>
              )}
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                Ver flores →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Características das flores",
          path: "/caracteristicas",
          items: characteristics.map((item) => ({
            name: item.name,
            path: `/caracteristicas/${item.slug}`,
          })),
        })}
      />
    </>
  );
}
