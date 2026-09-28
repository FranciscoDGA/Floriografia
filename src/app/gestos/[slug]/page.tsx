import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FlowerGrid } from "@/components/flower-grid";
import { GestoMedia } from "@/components/gesto-media";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { TagLink } from "@/components/tag-link";
import {
  getAllGestos,
  getArticle,
  getFlowersBySlugs,
  getGesto,
  getMeaningsBySlugs,
  getOccasion,
} from "@/lib/content";
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Slugs fora do acervo respondem 404 de verdade (sem render on-demand). */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGestos().map((gesto) => ({ slug: gesto.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gesto = getGesto(slug);
  if (!gesto) return { robots: { index: false } };
  return pageMetadata({
    title: gesto.seo.title,
    description: gesto.seo.description,
    path: `/gestos/${gesto.slug}`,
    modifiedTime: gesto.updatedAt,
  });
}

export default async function GestoPage({ params }: Props) {
  const { slug } = await params;
  const gesto = getGesto(slug);
  if (!gesto) notFound();

  const flowers = getFlowersBySlugs(gesto.flowerSlugs);
  const meanings = getMeaningsBySlugs(gesto.meaningSlugs);
  const occasion = gesto.occasionSlug ? getOccasion(gesto.occasionSlug) : undefined;
  const guides = (gesto.guideSlugs ?? [])
    .map((guideSlug) => getArticle(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
  const others = getAllGestos().filter((item) => item.slug !== gesto.slug);

  return (
    <>
      <PageHeader
        title={gesto.name}
        eyebrow="Gestos"
        description={gesto.hook}
        breadcrumbs={[{ name: "Gestos", path: "/gestos" }, { name: gesto.name, path: `/gestos/${gesto.slug}` }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div className="min-w-0">
            <GestoMedia
              slug={gesto.slug}
              alt={`Foto do gesto ${gesto.name}`}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="mb-8 aspect-[16/9] rounded-3xl border border-line"
              priority
            />
            <section aria-label="O gesto">
              <div className="space-y-5">
                {gesto.description.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-ink-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="como-fazer" className="mt-12">
              <h2 id="como-fazer" className="font-display text-2xl font-semibold text-leaf">
                Como fazer este gesto
              </h2>
              <ol className="mt-4 space-y-3">
                {gesto.guidance.map((rule, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-ink-2"
                  >
                    <span className="font-display text-lg font-semibold text-bloom">{index + 1}</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="flores-do-gesto" className="mt-12">
              <h2 id="flores-do-gesto" className="font-display text-2xl font-semibold text-leaf">
                Flores que dizem este gesto
              </h2>
              <p className="mt-2 text-sm text-ink-2">{flowers.length} escolhas que traduzem bem {gesto.name.toLowerCase()}.</p>
              <div className="mt-5">
                <FlowerGrid flowers={flowers} />
              </div>
            </section>

            <section aria-labelledby="significados-do-gesto" className="mt-12">
              <h2 id="significados-do-gesto" className="font-display text-2xl font-semibold text-leaf">
                Mensagens envolvidas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {meanings.map((meaning) => (
                  <TagLink key={meaning.slug} href={`/significados/${meaning.slug}`} tone="accent">
                    {meaning.name}
                  </TagLink>
                ))}
              </div>
            </section>

            {guides.length > 0 && (
              <section aria-labelledby="guias-do-gesto" className="mt-12">
                <h2 id="guias-do-gesto" className="font-display text-2xl font-semibold text-leaf">
                  Leituras para este momento
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guias/${guide.slug}`}
                      className="rounded-2xl border border-line bg-white p-5 transition hover:border-leaf/40"
                    >
                      <p className="font-display text-base font-semibold text-leaf">{guide.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-2">{guide.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            {occasion && (
              <div className="rounded-2xl border border-line bg-paper-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-2">Ocasião ligada</p>
                <p className="mt-2 font-display text-lg font-semibold text-leaf">{occasion.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{occasion.description.slice(0, 110)}…</p>
                <Link
                  href={`/ocasioes/${occasion.slug}`}
                  className="mt-3 inline-block text-sm text-leaf-2 underline underline-offset-4 hover:text-bloom"
                >
                  Ver flores desta ocasião
                </Link>
              </div>
            )}

            <nav aria-label="Outros gestos" className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-2">Outros gestos</p>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/gestos/${item.slug}`}
                      className="text-ink-2 underline-offset-4 hover:text-bloom hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>

      <JsonLd
        data={[
          webPageJsonLd({
            name: gesto.seo.title,
            description: gesto.seo.description,
            path: `/gestos/${gesto.slug}`,
          }),
          itemListJsonLd({
            name: `Flores para ${gesto.name.toLowerCase()}`,
            path: `/gestos/${gesto.slug}`,
            items: flowers.map((flower) => ({ name: flower.name, path: `/flores/${flower.slug}` })),
          }),
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Gestos", path: "/gestos" },
            { name: gesto.name, path: `/gestos/${gesto.slug}` },
          ]),
        ]}
      />
    </>
  );
}
