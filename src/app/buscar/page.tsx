import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { SearchBox } from "@/components/search-box";
import { searchDocs, searchTypeLabel } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Buscar na Floriografia",
  description: "Busque flores, significados, cores, ocasiões e guias.",
  path: "/buscar",
  robots: false,
});

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function BuscarPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchDocs(query) : [];

  return (
    <>
      <PageHeader
        title="Buscar"
        eyebrow="Pesquisa"
        description="Busque pelo nome da flor, pelo significado, pela cor ou pela ocasião."
        breadcrumbs={[{ name: "Buscar", path: "/buscar" }]}
      />

      <div className="container-page max-w-3xl pb-16">
        <SearchBox id="busca-pagina" defaultValue={query} />

        {query && (
          <p className="mt-6 text-sm text-ink-2" role="status" aria-live="polite">
            {results.length > 0
              ? `${results.length} resultado${results.length > 1 ? "s" : ""} para “${query}”`
              : `Nenhum resultado para “${query}”`}
          </p>
        )}

        {!query && (
          <div className="mt-6 rounded-2xl border border-line bg-white p-6 text-sm leading-relaxed text-ink-2">
            <p>Dicas de busca:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nome da flor: “rosa”, “orquídea”, “girassol”</li>
              <li>Mensagem: “gratidão”, “amizade”, “luto”</li>
              <li>Ocasião: “Dia das Mães”, “casamento”, “condolências”</li>
              <li>Cor: “branca”, “vermelha”, “amarela”</li>
            </ul>
          </div>
        )}

        {query && results.length > 0 && (
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
            {results.map((hit) => (
              <li key={`${hit.type}-${hit.href}`}>
                <Link
                  href={hit.href}
                  className="flex flex-col gap-1 px-5 py-4 transition hover:bg-paper-2"
                >
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-leaf/10 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-leaf">
                      {searchTypeLabel(hit.type)}
                    </span>
                    <span className="font-display text-base font-semibold text-leaf">{hit.title}</span>
                  </span>
                  <span className="text-sm leading-relaxed text-ink-2">{hit.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-line bg-white p-6 text-center">
            <p className="font-display text-lg text-leaf">Nada encontrado.</p>
            <p className="mt-2 text-sm text-ink-2">
              Tente uma palavra mais curta, ou navegue pelas categorias:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                { href: "/flores", label: "Flores" },
                { href: "/significados", label: "Significados" },
                { href: "/ocasioes", label: "Ocasiões" },
                { href: "/guias", label: "Guias" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-leaf hover:border-leaf/40"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
