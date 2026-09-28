import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllColors, getAllFlowers } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cores das flores",
  description:
    "O que cada cor de flor costuma comunicar na tradição: vermelho, branco, rosa, amarelo, laranja, lilás, roxo, azul e verde.",
  path: "/cores",
});

export default function CoresPage() {
  const colors = getAllColors();

  return (
    <>
      <PageHeader
        title="Cores"
        eyebrow="Antes do nome, vem a cor"
        description="É o que o olho entende primeiro. Veja o que cada tom costuma dizer — e quais flores carregam essa mensagem sem precisar de apresentação."
        breadcrumbs={[{ name: "Cores", path: "/cores" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((color) => (
            <Link
              key={color.slug}
              href={`/cores/${color.slug}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <span
                aria-hidden="true"
                className="h-20 w-full border-b border-line"
                style={{ backgroundColor: color.hex }}
              />
              <span className="flex flex-1 flex-col p-6">
                <span className="font-display text-xl font-semibold text-leaf">{color.name}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{color.description}</span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                  Ver flores →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Cores das flores",
          path: "/cores",
          items: colors.map((c) => ({ name: c.name, path: `/cores/${c.slug}` })),
        })}
      />
      <span className="sr-only">{getAllFlowers().length} flores no acervo.</span>
    </>
  );
}
