import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { getAllCombinations, getAllMeanings } from "@/lib/content";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Significados das flores",
  description:
    "Cada mensagem que as flores carregam na tradição: amor, amizade, gratidão, saudade, admiração, carinho, perdão, esperança, alegria e luto.",
  path: "/significados",
});

export default function SignificadosPage() {
  const meanings = getAllMeanings();
  const combinations = getAllCombinations().slice(0, 4);

  return (
    <>
      <PageHeader
        title="Significados"
        eyebrow="A linguagem antiga"
        description="Toda flor diz alguma coisa — e há séculos as pessoas se entendem por isso. Escolha primeiro a mensagem (amor, saudade, perdão, gratidão): a flor certa vem em seguida."
        breadcrumbs={[{ name: "Significados", path: "/significados" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {meanings.map((meaning) => (
            <Link
              key={meaning.slug}
              href={`/significados/${meaning.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <h2 className="font-display text-xl font-semibold text-leaf">{meaning.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{meaning.description}</p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-bloom">
                Ver flores →
              </span>
            </Link>
          ))}
        </div>

        <Section
          title="Combinações que reforçam a mensagem"
          description="Duas flores juntas podem reforçar ou suavizar o que você quer dizer."
          href="/combinacoes"
          linkLabel="Ver todas as combinações"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {combinations.map((combination) => (
              <Link
                key={combination.slug}
                href={`/combinacoes/${combination.slug}`}
                className="rounded-2xl border border-line bg-white p-5 transition hover:border-leaf/40"
              >
                <h3 className="font-display text-lg font-semibold text-leaf">{combination.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{combination.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <JsonLd
        data={itemListJsonLd({
          name: "Significados das flores",
          path: "/significados",
          items: meanings.map((m) => ({ name: m.name, path: `/significados/${m.slug}` })),
        })}
      />
    </>
  );
}
