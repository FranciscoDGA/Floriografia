import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { FlowerCard } from "@/components/flower-card";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { SearchBox } from "@/components/search-box";
import { TagLink } from "@/components/tag-link";
import {
  getAllArticles,
  getAllColors,
  getAllFlowers,
  getAllMeanings,
  getAllOccasions,
} from "@/lib/content";
import { websiteJsonLd } from "@/lib/jsonld";
import { absoluteUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/") },
};

const SEARCH_EXAMPLES = [
  { emoji: "🌹", label: "Qual o significado da rosa vermelha?", query: "significado rosa vermelha" },
  { emoji: "💐", label: "Que flor dar para minha mãe?", query: "dia das mães" },
  { emoji: "❤️", label: "Qual flor representa amor?", query: "amor" },
];

export default function HomePage() {
  const flowers = getAllFlowers();
  const featured = flowers.slice(0, 8);
  const meanings = getAllMeanings();
  const occasions = getAllOccasions();
  const colors = getAllColors();
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-paper-2 to-paper">
        <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bloom">Floriografia</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-leaf md:text-6xl">
              A linguagem das flores.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Descubra o significado, a beleza e a história de cada flor — e encontre a flor certa para cada
              momento.
            </p>

            <div className="mt-8">
              <SearchBox id="busca-hero" />
              <ul className="mt-4 flex flex-wrap gap-2">
                {SEARCH_EXAMPLES.map((example) => (
                  <li key={example.query}>
                    <TagLink href={`/buscar?q=${encodeURIComponent(example.query)}`}>
                      <span aria-hidden="true" className="mr-1.5">
                        {example.emoji}
                      </span>
                      {example.label}
                    </TagLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside aria-label="Números do acervo" className="grid grid-cols-2 gap-4">
            {[
              { value: flowers.length, label: "flores catalogadas" },
              { value: meanings.length, label: "significados" },
              { value: colors.length, label: "cores mapeadas" },
              { value: occasions.length, label: "ocasiões" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-3xl font-semibold text-leaf">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-2">{stat.label}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Flores */}
      <Section
        id="flores"
        title="Explore as flores"
        description="Cada página reúne identificação, cores, significado, aroma, época e cuidados."
        href="/flores"
        linkLabel={`Ver as ${flowers.length} flores`}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((flower) => (
            <FlowerCard key={flower.slug} flower={flower} />
          ))}
        </div>
      </Section>

      {/* Significados */}
      <div className="bg-paper-2/70">
        <Section
          id="significados"
          title="Descubra pelo significado"
          description="O que você quer transmitir? Comece pela mensagem, não pela flor."
          href="/significados"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {meanings.map((meaning) => (
              <CategoryCard
                key={meaning.slug}
                href={`/significados/${meaning.slug}`}
                title={meaning.name}
                count={undefined}
              />
            ))}
          </div>
        </Section>
      </div>

      {/* Ocasiões */}
      <Section
        id="ocasioes"
        title="Escolha pela ocasião"
        description="Datas e momentos com critérios práticos de escolha."
        href="/ocasioes"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion) => (
            <CategoryCard
              key={occasion.slug}
              href={`/ocasioes/${occasion.slug}`}
              title={occasion.name}
              description={occasion.description.slice(0, 96).trimEnd() + "…"}
            />
          ))}
        </div>
      </Section>

      {/* Cores */}
      <div className="bg-paper-2/70">
        <Section
          id="cores"
          title="Descubra pelas cores"
          description="A cor costuma dizer mais rápido que a espécie."
          href="/cores"
        >
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {colors.map((color) => (
              <CategoryCard
                key={color.slug}
                href={`/cores/${color.slug}`}
                title={color.name}
                hex={color.hex}
              />
            ))}
          </div>
        </Section>
      </div>

      {/* Guias */}
      <Section
        id="guias"
        title="Guias de escolha"
        description="Leituras curtas para decidir com segurança — sem regras universais."
        href="/guias"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/guias/${article.slug}`}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-leaf/40"
            >
              <h3 className="font-display text-lg font-semibold text-leaf">{article.title}</h3>
              <p className="text-sm leading-relaxed text-ink-2">{article.excerpt}</p>
              <span className="mt-auto text-sm font-medium text-bloom">Ler guia</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Qual Flor? */}
      <section className="border-t border-line bg-leaf text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Em breve</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Ainda não sabe qual escolher?</h2>
            <p className="mt-3 text-white/75">
              O <strong className="font-semibold text-white">Qual Flor?</strong> será um roteiro de perguntas —
              para quem é, o que você quer transmitir, orçamento e estação — que leva à flor indicada e às
              alternativas. Enquanto isso, use os significados, as ocasiões e a busca.
            </p>
          </div>
          <Link
            href="/qual-flor"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-base font-medium text-leaf transition hover:bg-paper"
          >
            Conhecer o projeto
          </Link>
        </div>
      </section>

      <p className="sr-only">{SITE.name}: {SITE.description}</p>
    </>
  );
}
