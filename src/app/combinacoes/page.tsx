import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { getAllCombinations, getFlower } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Combinações de flores",
  description:
    "Arranjos que funcionam juntos: quais flores combinar, por que a combinação funciona e como montá-la com intenção.",
  path: "/combinacoes",
});

export default function CombinacoesPage() {
  const combinations = getAllCombinations();

  return (
    <>
      <PageHeader
        title="Combinações"
        eyebrow="Arranjos com intenção"
        description="Combinar flores é somar mensagens e contrastar formas. Cada combinação lista as espécies envolvidas e uma dica prática de montagem."
        breadcrumbs={[{ name: "Combinações", path: "/combinacoes" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {combinations.map((combination) => {
            const members = combination.flowerSlugs.map((slug) => getFlower(slug)).filter(Boolean);
            return (
              <Link
                key={combination.slug}
                href={`/combinacoes/${combination.slug}`}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
              >
                <h2 className="font-display text-xl font-semibold text-leaf">{combination.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{combination.description}</p>
                <p className="mt-4 flex flex-wrap gap-1.5 text-xs">
                  {members.map(
                    (member) =>
                      member && (
                        <span
                          key={member.slug}
                          className="rounded-full border border-line bg-paper px-3 py-1 text-ink-2"
                        >
                          {member.name}
                        </span>
                      ),
                  )}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                  Ver combinação →
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Combinações de flores",
          path: "/combinacoes",
          items: combinations.map((item) => ({ name: item.name, path: `/combinacoes/${item.slug}` })),
        })}
      />
    </>
  );
}
