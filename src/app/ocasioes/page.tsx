import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllOccasions } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ocasiões: flores para cada momento",
  description:
    "Aniversário, Dia das Mães, Dia dos Namorados, casamento, pedido de namoro, formatura, nascimento, condolências, pedido de desculpas, Dia do Professor e Dia dos Pais.",
  path: "/ocasioes",
});

export default function OcasioesPage() {
  const occasions = getAllOccasions();

  return (
    <>
      <PageHeader
        title="Ocasiões"
        eyebrow="Momentos"
        description="Datas grandes e pequenas, com o que levar, quando entregar e como não errar o tom — do pedido de desculpas ao pedido de casamento."
        breadcrumbs={[{ name: "Ocasiões", path: "/ocasioes" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/ocasioes/${occasion.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <h2 className="font-display text-xl font-semibold text-leaf">{occasion.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{occasion.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-ink-2">
                {occasion.guidance.slice(0, 2).map((rule) => (
                  <li key={rule} className="rounded-full border border-line bg-paper px-3 py-1">
                    {rule.length > 48 ? rule.slice(0, 46).trimEnd() + "…" : rule}
                  </li>
                ))}
              </ul>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                Ver flores →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Ocasiões",
          path: "/ocasioes",
          items: occasions.map((occasion) => ({ name: occasion.name, path: `/ocasioes/${occasion.slug}` })),
        })}
      />
    </>
  );
}
