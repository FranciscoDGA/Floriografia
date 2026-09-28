import Link from "next/link";

import { SearchBox } from "@/components/search-box";
import { getAllFlowers, getAllMeanings, getAllOccasions } from "@/lib/content";

export default function NotFound() {
  const flowers = getAllFlowers().slice(0, 8);
  const meanings = getAllMeanings().slice(0, 6);
  const occasions = getAllOccasions().slice(0, 6);

  return (
    <div className="container-page max-w-3xl py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bloom">Erro 404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-leaf md:text-4xl">
        Esta flor ainda não foi encontrada.
      </h1>
      <p className="mt-4 leading-relaxed text-ink-2">
        O endereço que você abriu não existe (ou a página não faz parte desta versão do acervo). Tente buscar
        pelo nome ou siga pelas categorias abaixo.
      </p>

      <div className="mt-8">
        <SearchBox id="busca-404" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-leaf px-5 py-2.5 text-sm font-medium text-white hover:bg-leaf-2">
          Ir para o início
        </Link>
        <Link href="/flores" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm text-leaf hover:border-leaf/40">
          Flores
        </Link>
        <Link href="/significados" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm text-leaf hover:border-leaf/40">
          Significados
        </Link>
        <Link href="/ocasioes" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm text-leaf hover:border-leaf/40">
          Ocasiões
        </Link>
      </div>

      <section aria-labelledby="sugestoes-flores" className="mt-12">
        <h2 id="sugestoes-flores" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
          Flores em destaque
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {flowers.map((flower) => (
            <li key={flower.slug}>
              <Link
                href={`/flores/${flower.slug}`}
                className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-leaf hover:border-leaf/40"
              >
                {flower.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sugestoes-significados" className="mt-8">
        <h2 id="sugestoes-significados" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
          Significados
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {meanings.map((meaning) => (
            <li key={meaning.slug}>
              <Link
                href={`/significados/${meaning.slug}`}
                className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-leaf hover:border-leaf/40"
              >
                {meaning.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sugestoes-ocasioes" className="mt-8">
        <h2 id="sugestoes-ocasioes" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
          Ocasiões
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {occasions.map((occasion) => (
            <li key={occasion.slug}>
              <Link
                href={`/ocasioes/${occasion.slug}`}
                className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-leaf hover:border-leaf/40"
              >
                {occasion.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
