import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fontes",
  description:
    "Como o conteúdo da Floriografia é sustentado, quais categorias de referência são usadas e o que ainda está pendente de revisão bibliográfica.",
  path: "/fontes",
});

const RECOMMENDED = [
  {
    name: "Flora e Funga do Brasil",
    org: "Jardim Botânico do Rio de Janeiro",
    use: "Nomenclatura, distribuição e família das espécies citadas no acervo.",
  },
  {
    name: "Literatura botânica e herbários",
    org: "Instituições de pesquisa e coleções científicas",
    use: "Sinonímia, origem e características das espécies quando há dúvida na identificação.",
  },
  {
    name: "Manuais de jardinagem e horticultura",
    org: "Embrapa, secretarias de agricultura e sociedades de horticultura",
    use: "Cultivo, rega, substrato, pragas e manejo em condições brasileiras.",
  },
  {
    name: "Acervos de horticultura",
    org: "Royal Horticultural Society e equivalentes",
    use: "Práticas de cultivo, calendário de floração e arranjos.",
  },
  {
    name: "Especialistas locais",
    org: "Floriculturas, viveiros e jardins botânicos",
    use: "Disponibilidade real por região, sazonalidade e preço — dados que mudam e não são fixados aqui.",
  },
];

const STANDARD = [
  "Nomes populares e científicos são conferidos para que a espécie citada exista e corresponda ao nome usado.",
  "Simbolismo é sempre atribuído a tradição cultural, nunca apresentado como fato científico.",
  "Recomendações de cultivo são descritas como gerais e variáveis (clima, vaso, luz do ambiente).",
  "Nenhum dado institucional (endereço, CNPJ, equipe, certificação) é publicado sem verificação.",
  "Números concretos (dias de vida, temperaturas exatas, preços) só aparecem quando há base — caso contrário, o texto diz que varia.",
];

export default function FontesPage() {
  return (
    <>
      <PageHeader
        title="Fontes"
        eyebrow="Transparência"
        description="De onde vem o que a Floriografia afirma — e, com a mesma importância, o que ainda não tem fonte anexada."
        breadcrumbs={[{ name: "Fontes", path: "/fontes" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            Este site publica conteúdo informativo. Para que ele seja confiável, cada afirmação factual
            deveria ser rastreável até uma referência identificável — e o que não é rastreável deveria estar
            marcado como tal.
          </p>

          <div className="not-prose my-6 rounded-2xl border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink-2">
            <p className="font-semibold text-ink">Estado atual desta versão</p>
            <p className="mt-2">
              As entradas do acervo (flores, significados, guias) foram escritas com base em conhecimento
              consolidado sobre botânica, horticultura e tradição floral — <strong className="text-ink">sem
              bibliografia formal anexada por entrada</strong>. Essa é uma pendência declarada: a revisão
              bibliográfica item a item é a próxima etapa do trabalho editorial e será refletida nesta página
              e nas entradas.
            </p>
          </div>

          <h2>Categorias de referência recomendadas</h2>
          <p>
            Estas são as fontes que sustentam (e sustentarão) o acervo. Elas aparecem por categoria, sem
            citação formal ainda:
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {RECOMMENDED.map((item) => (
            <div key={item.name} className="rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-lg font-semibold text-leaf">{item.name}</p>
              <p className="mt-1 text-sm text-ink-2">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.use}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>Padrões de verificação aplicados hoje</h2>
          <ul>
            {STANDARD.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>O que é verificado automaticamente</h2>
          <p>
            O build do site falha se algum conteúdo referenciar um slug inexistente (uma flor citada que não
            existe, por exemplo), se faltar dado obrigatório de SEO ou se uma entidade estiver marcada como
            publicada sem conteúdo. É uma checagem estrutural, não de verdade científica — a parte científica
            depende de revisão humana.
          </p>

          <h2>Como citar o que está aqui</h2>
          <p>
            Enquanto não houver bibliografia por entrada, cite a página e a data de atualização exibida no
            rodapé do conteúdo. Se você é pesquisador, jornalista ou professor e precisa da referência por trás
            de uma afirmação, use o{" "}
            <Link href="/correcoes">formulário de correções</Link> pedindo a fonte: isso acelera a revisão
            bibliográfica.
          </p>
        </div>
      </div>
    </>
  );
}
