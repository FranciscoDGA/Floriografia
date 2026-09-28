import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryCard } from "@/components/category-card";
import { FlowerCard } from "@/components/flower-card";
import { FlowerMedia } from "@/components/flower-media";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { TagLink } from "@/components/tag-link";
import {
  getAllFlowers,
  getCharacteristicsOf,
  getColorsOf,
  getCombinationsByFlower,
  getFlower,
  getMeaningsOf,
  getOccasionsOf,
  getRelatedFlowers,
  getSeasonsOf,
} from "@/lib/content";
import { articleJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import type { CareTopic } from "@/lib/types";

const CARE_LABELS: Record<CareTopic, string> = {
  rega: "Rega",
  luz: "Luz",
  substrato: "Substrato e solo",
  poda: "Poda",
  temperatura: "Temperatura e ambiente",
  fertilizacao: "Adubação",
  pragas: "Pragas e doenças",
  vaso: "Vaso e plantio",
  manejo: "Manejo geral",
};

const DURABILITY_LABEL = {
  curta: "Durabilidade curta (mais sensível a calor e transporte)",
  media: "Durabilidade média",
  longa: "Durabilidade longa",
} as const;

const AROMA_LABEL = {
  "sem-perfume": "Sem perfume marcante",
  leve: "Perfume leve",
  moderado: "Perfume moderado",
  intenso: "Perfume intenso",
} as const;

interface Props {
  params: Promise<{ slug: string }>;
}

/** Slugs fora do acervo respondem 404 de verdade (sem render on-demand). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFlowers().map((flower) => ({ slug: flower.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const flower = getFlower(slug);
  if (!flower) return { robots: { index: false } };
  return pageMetadata({
    title: flower.seo.title,
    description: flower.seo.description,
    path: `/flores/${flower.slug}`,
    type: "article",
    modifiedTime: flower.updatedAt,
  });
}

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 font-display text-2xl font-semibold text-leaf md:text-[1.7rem]">
      {children}
    </h2>
  );
}

export default async function FlowerPage({ params }: Props) {
  const { slug } = await params;
  const flower = getFlower(slug);
  if (!flower) notFound();

  const colors = getColorsOf(flower);
  const meanings = getMeaningsOf(flower);
  const occasions = getOccasionsOf(flower);
  const characteristics = getCharacteristicsOf(flower);
  const seasons = getSeasonsOf(flower);
  const combinations = getCombinationsByFlower(flower.slug);
  const related = getRelatedFlowers(flower);

  const sections = [
    { id: "sobre", label: "Sobre a flor" },
    { id: "identificacao", label: "Identificação" },
    { id: "cores", label: "Cores" },
    { id: "significado", label: "Significado" },
    { id: "aroma", label: "Aroma e durabilidade" },
    { id: "epoca", label: "Época" },
    { id: "cuidados", label: "Cuidados" },
    { id: "ocasioes", label: "Ocasiões" },
    ...(combinations.length ? [{ id: "combinacoes", label: "Combinações" }] : []),
    { id: "curiosidades", label: "Curiosidades" },
    { id: "faq", label: "Perguntas frequentes" },
  ];

  return (
    <>
      <PageHeader
        title={flower.name}
        eyebrow="Flores"
        description={flower.summary}
        breadcrumbs={[{ name: "Flores", path: "/flores" }, { name: flower.name, path: `/flores/${flower.slug}` }]}
      />

      <div className="container-page grid gap-10 pb-16 lg:grid-cols-[1fr_16rem] lg:items-start">
        <div className="min-w-0">
          {/* Identificação visual */}
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
            <FlowerMedia
              slug={flower.slug}
              name={flower.name}
              hexes={colors.map((c) => c.hex)}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-square w-full rounded-3xl border border-line"
            />
            <div>
              <p className="font-serif text-lg italic text-ink-2">{flower.scientificName}</p>
              <p className="mt-1 text-sm uppercase tracking-wide text-ink-2/80">Família {flower.family}</p>
              <p className="mt-4 leading-relaxed text-ink-2">{flower.intro}</p>

              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="font-medium text-ink">Origem</dt>
                  <dd className="mt-0.5 text-ink-2">{flower.origin}</dd>
                </div>
                {flower.height && (
                  <div>
                    <dt className="font-medium text-ink">Porte</dt>
                    <dd className="mt-0.5 text-ink-2">{flower.height}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-ink">Aroma</dt>
                  <dd className="mt-0.5 text-ink-2">{AROMA_LABEL[flower.aroma.intensity]}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Conservação</dt>
                  <dd className="mt-0.5 text-ink-2">{DURABILITY_LABEL[flower.durability]}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Sobre */}
          <section className="mt-12">
            <Heading id="sobre">Sobre a {flower.name.toLowerCase()}</Heading>
            <div className="mt-3 space-y-4">
              {flower.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-ink-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Cores */}
          <section className="mt-12">
            <Heading id="cores">Cores</Heading>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {colors.map((color) => (
                <CategoryCard
                  key={color.slug}
                  href={`/cores/${color.slug}`}
                  title={color.name}
                  hex={color.hex}
                  description={color.description.slice(0, 90).trimEnd() + "…"}
                />
              ))}
            </div>
          </section>

          {/* Significado */}
          <section className="mt-12">
            <Heading id="significado">Significado e simbolismo</Heading>
            <p className="mt-3 leading-relaxed text-ink-2">{flower.symbolism}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {meanings.map((meaning) => (
                <TagLink key={meaning.slug} href={`/significados/${meaning.slug}`} tone="accent">
                  {meaning.name}
                </TagLink>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-line bg-paper-2 p-5">
              <p className="text-sm leading-relaxed text-ink-2">
                <strong className="text-ink">Atenção ao contexto:</strong> o simbolismo de flores é tradição
                cultural, não constante científica. A leitura muda conforme a cultura, a época e a relação
                entre quem dá e quem recebe.
              </p>
            </div>
          </section>

          {/* Aroma e durabilidade */}
          <section className="mt-12">
            <Heading id="aroma">Aroma e durabilidade</Heading>
            <p className="mt-3 leading-relaxed text-ink-2">
              {AROMA_LABEL[flower.aroma.intensity]}
              {flower.aroma.notes.length > 0 && (
                <>
                  , com notas de {flower.aroma.notes.join(" e ")}
                </>
              )}
              . {DURABILITY_LABEL[flower.durability]}.
            </p>
            {flower.durationNote && <p className="mt-3 leading-relaxed text-ink-2">{flower.durationNote}</p>}
          </section>

          {/* Época */}
          <section className="mt-12">
            <Heading id="epoca">Época</Heading>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {seasons.map((season) => (
                <div key={season.slug} className="rounded-2xl border border-line bg-white p-5">
                  <p className="font-display text-lg font-semibold text-leaf">{season.name}</p>
                  <p className="mt-1 text-sm text-ink-2">{season.period}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{season.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cuidados */}
          <section className="mt-12">
            <Heading id="cuidados">Cuidados</Heading>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {flower.care.map((item, index) => (
                <div key={index} className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-bloom">
                    {CARE_LABELS[item.topic]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ocasiões */}
          <section className="mt-12">
            <Heading id="ocasioes">Ocasiões</Heading>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {occasions.map((occasion) => (
                <CategoryCard
                  key={occasion.slug}
                  href={`/ocasioes/${occasion.slug}`}
                  title={occasion.name}
                  description={occasion.description.slice(0, 90).trimEnd() + "…"}
                />
              ))}
            </div>
          </section>

          {/* Características */}
          <section className="mt-12">
            <Heading id="caracteristicas">Características</Heading>
            <div className="mt-4 flex flex-wrap gap-2">
              {characteristics.map((characteristic) => (
                <TagLink key={characteristic.slug} href={`/caracteristicas/${characteristic.slug}`}>
                  {characteristic.name}
                </TagLink>
              ))}
            </div>
          </section>

          {/* Combinações */}
          {combinations.length > 0 && (
            <section className="mt-12">
              <Heading id="combinacoes">Combinações</Heading>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {combinations.map((combination) => (
                  <div key={combination.slug} className="rounded-2xl border border-line bg-white p-5">
                    <p className="font-display text-lg font-semibold text-leaf">{combination.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">{combination.description}</p>
                    {combination.tip && (
                      <p className="mt-3 text-sm leading-relaxed text-ink-2">
                        <strong className="text-ink">Dica:</strong> {combination.tip}
                      </p>
                    )}
                    <p className="mt-3 text-sm">
                      <a
                        href={`/combinacoes/${combination.slug}`}
                        className="text-leaf-2 underline underline-offset-4 hover:text-bloom"
                      >
                        Ver detalhe da combinação
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Curiosidades */}
          <section className="mt-12">
            <Heading id="curiosidades">Curiosidades</Heading>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-2">
              {flower.curiosities.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <Heading id="faq">Perguntas frequentes</Heading>
            <div className="mt-4 space-y-4">
              {flower.faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="font-display text-base font-semibold text-leaf">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Relacionadas */}
          <section className="mt-12">
            <Heading id="relacionadas">Flores relacionadas</Heading>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <FlowerCard key={item.slug} flower={item} />
              ))}
            </div>
          </section>
        </div>

        {/* Índice */}
        <aside aria-labelledby="indice-titulo" className="lg:sticky lg:top-24">
          <nav className="rounded-2xl border border-line bg-white p-5">
            <h2 id="indice-titulo" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
              Nesta página
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-ink-2 underline-offset-4 hover:text-bloom hover:underline"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: flower.name,
            description: flower.summary,
            path: `/flores/${flower.slug}`,
          }),
          faqJsonLd(flower.faqs),
          articleJsonLd({
            title: flower.seo.title,
            description: flower.seo.description,
            path: `/flores/${flower.slug}`,
            modifiedTime: flower.updatedAt,
          }),
        ]}
      />
    </>
  );
}
