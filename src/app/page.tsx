import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { FlowerCard } from "@/components/flower-card";
import { GestoMedia } from "@/components/gesto-media";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { SearchBox } from "@/components/search-box";
import { TagLink } from "@/components/tag-link";
import {
  getAllArticles,
  getAllColors,
  getAllFlowers,
  getAllGestos,
  getAllMeanings,
  getAllOccasions,
} from "@/lib/content";
import { websiteJsonLd } from "@/lib/jsonld";
import { heroPhoto } from "@/lib/imagens";
import { absoluteUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/") },
};

const SEARCH_EXAMPLES = [
  { emoji: "🌹", label: "flores para conquistar", query: "flores para conquistar" },
  { emoji: "💌", label: "pedir desculpas com flores", query: "pedir desculpas" },
  { emoji: "💍", label: "quantas rosas para declarar", query: "quantas rosas" },
];

export default function HomePage() {
  const flowers = getAllFlowers();
  const featured = flowers.slice(0, 8);
  const gestos = getAllGestos();
  const meanings = getAllMeanings();
  const occasions = getAllOccasions();
  const colors = getAllColors();
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      {/* Hero: a intenção vem primeiro */}
      <section className="border-b border-line bg-gradient-to-b from-paper-2 to-paper">
        <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bloom">{SITE.tagline}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-leaf md:text-6xl">
              Você veio dizer algo.
              <br />
              Temos a flor certa.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Conquistar, pedir desculpas, declarar pela primeira vez, reatar, pedir a mão — ou presenteá-la numa
              terça-feira, sem motivo nenhum. Aqui a escolha começa pelo <em className="font-medium text-ink">gesto</em>,
              não pelo nome da espécie.
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

          <aside aria-label="Sobre o acervo" className="overflow-hidden rounded-3xl border border-line bg-white p-7">
            {heroPhoto && (
              <div className="relative -mx-7 -mt-7 mb-6 aspect-[16/10]">
                <Image
                  src={heroPhoto}
                  alt="Carta manuscrita ao lado de flores e renda, sobre a mesa"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <p className="font-display text-2xl font-semibold leading-snug text-leaf">
              “A flor mais bonita é a que alguém escolhe pensando em você.”
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              Somos um acervo independente de flores, significados e gestos — sem loja, sem venda, sem
              afiliado. Só o que fazer, o que dizer e o que levar na mão.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-2">Gestos guiados</dt>
                <dd className="font-display text-2xl font-semibold text-leaf">{gestos.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-2">Flores catalogadas</dt>
                <dd className="font-display text-2xl font-semibold text-leaf">{flowers.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-2">Significados</dt>
                <dd className="font-display text-2xl font-semibold text-leaf">{meanings.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-2">Guias do coração</dt>
                <dd className="font-display text-2xl font-semibold text-leaf">{articles.length}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Gestos: a porta de entrada */}
      <Section
        id="gestos"
        title="O que você quer dizer?"
        description="Comece por aqui. Cada gesto reúne as flores certas, a hora certa e o que falar junto."
        href="/gestos"
        linkLabel="Ver todos os gestos"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gestos.map((gesto) => (
            <Link
              key={gesto.slug}
              href={`/gestos/${gesto.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-bloom/50"
            >
              <GestoMedia
                slug={gesto.slug}
                alt={`Foto do gesto ${gesto.name}`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="-mx-6 -mt-6 mb-5 aspect-[16/9]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bloom">{gesto.name}</p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug text-leaf transition group-hover:text-bloom">
                {gesto.hook}
              </p>
              <span className="mt-4 text-sm text-ink-2">Escolher as flores →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Significados */}
      <div className="bg-paper-2/70">
        <Section
          id="significados"
          title="Pelo que você sente"
          description="Antes da espécie, a mensagem: amor, saudade, perdão, gratidão, coragem."
          href="/significados"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {meanings.map((meaning) => (
              <CategoryCard key={meaning.slug} href={`/significados/${meaning.slug}`} title={meaning.name} />
            ))}
          </div>
        </Section>
      </div>

      {/* Ocasiões */}
      <Section
        id="ocasioes"
        title="Datas que pedem intenção"
        description="O calendário dá a data; você dá o significado."
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

      {/* Catálogo */}
      <div className="bg-paper-2/70">
        <Section
          id="flores"
          title="Se você já sabe qual é"
          description="40 flores com história, simbolismo, perfume e o cuidado que elas pedem."
          href="/flores"
          linkLabel={`Ver as ${flowers.length} flores`}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((flower) => (
              <FlowerCard key={flower.slug} flower={flower} />
            ))}
          </div>
        </Section>
      </div>

      {/* Cores */}
      <Section
        id="cores"
        title="Pelo que a cor já diz"
        description="Vermelho fala depressa; branco pede silêncio; amarelo acende o dia."
        href="/cores"
      >
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {colors.map((color) => (
            <CategoryCard key={color.slug} href={`/cores/${color.slug}`} title={color.name} hex={color.hex} />
          ))}
        </div>
      </Section>

      {/* Guias */}
      <div className="bg-paper-2/70">
        <Section
          id="guias"
          title="Leituras para quem vai dar"
          description="Histórias, dúvidas e passo a passo — do primeiro buquê ao cartão que não sabe o que escrever."
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
      </div>

      {/* Qual Flor? */}
      <section className="border-t border-line bg-leaf text-white">
        <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Em breve</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Ainda não sabe qual escolher?</h2>
            <p className="mt-3 text-white/75">
              O <strong className="font-semibold text-white">Qual Flor?</strong> será um roteiro de perguntas —
              para quem é, o que você quer transmitir, orçamento e estação — que leva à flor indicada. Enquanto
              isso, comece por um <Link href="/gestos" className="underline underline-offset-4">gesto</Link> ou
              use a busca.
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

      <p className="sr-only">
        {SITE.name}: {SITE.description}
      </p>
    </>
  );
}
