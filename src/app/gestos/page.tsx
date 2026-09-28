import type { Metadata } from "next";
import Link from "next/link";

import { GestoMedia } from "@/components/gesto-media";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllGestos, getFlowersBySlugs } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gestos: a flor certa para cada intenção",
  description:
    "Conquistar, declarar, pedir desculpas, reatar, pedir a mão ou presenteá-la sem motivo: comece pela intenção, não pela espécie. A flor certa vem depois.",
  path: "/gestos",
});

export default function GestosPage() {
  const gestos = getAllGestos();

  return (
    <>
      <PageHeader
        title="O que você quer dizer?"
        eyebrow="Gestos"
        description="Ninguém acorda querendo saber o nome científico de uma flor. Você quer dizer alguma coisa — e este é o começo certo: escolha o gesto, a flor certa aparece."
        breadcrumbs={[{ name: "Gestos", path: "/gestos" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {gestos.map((gesto) => {
            const flowers = getFlowersBySlugs(gesto.flowerSlugs.slice(0, 3));
            return (
              <Link
                key={gesto.slug}
                href={`/gestos/${gesto.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-bloom/50"
              >
                <GestoMedia
                  slug={gesto.slug}
                  alt={`Foto do gesto ${gesto.name}`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="-mx-6 -mt-6 mb-5 aspect-[16/9]"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bloom">{gesto.name}</p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug text-leaf transition group-hover:text-bloom">
                  {gesto.hook}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{gesto.description[0].slice(0, 150)}…</p>
                <p className="mt-4 flex flex-wrap gap-1.5 text-xs">
                  {flowers.map((flower) => (
                    <span key={flower.slug} className="rounded-full border border-line bg-paper px-3 py-1 text-ink-2">
                      {flower.name}
                    </span>
                  ))}
                </p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                  Ver o gesto →
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Gestos",
          path: "/gestos",
          items: gestos.map((gesto) => ({ name: gesto.name, path: `/gestos/${gesto.slug}` })),
        })}
      />
    </>
  );
}
