import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { getAllCharacteristics, getAllColors, getAllFlowers, getAllMeanings, getAllOccasions, getAllCombinations, getAllArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre",
  description:
    "O que é a Floriografia, como o acervo é organizado e o que esta versão do site oferece — e o que ainda não oferece.",
  path: "/sobre",
});

const WHAT_IT_IS = [
  "Um acervo organizado por entidades: flores, significados, cores, ocasiões, características, combinações e guias.",
  "Um conteúdo em português do Brasil, escrito para quem quer escolher uma flor com intenção — presente, arranjo, decoração ou simbolismo.",
  "Um site estático e enxuto: sem login, sem cadastro, sem rastreamento de terceiros.",
];

const WHAT_IT_IS_NOT = [
  "Não é uma loja: não vendemos nem intermediamos flores.",
  "Não é conselho botânico, médico, veterinário ou de segurança de plantas tóxicas — em caso de dúvida, procure um profissional.",
  "Não é um dicionário de regras: simbolismo de flor é tradição cultural, e muda conforme o contexto.",
];

export default function SobrePage() {
  const counts = [
    { label: "flores", value: getAllFlowers().length, href: "/flores" },
    { label: "significados", value: getAllMeanings().length, href: "/significados" },
    { label: "cores", value: getAllColors().length, href: "/cores" },
    { label: "ocasiões", value: getAllOccasions().length, href: "/ocasioes" },
    { label: "características", value: getAllCharacteristics().length, href: "/caracteristicas" },
    { label: "combinações", value: getAllCombinations().length, href: "/combinacoes" },
    { label: "guias", value: getAllArticles().length, href: "/guias" },
  ];

  return (
    <>
      <PageHeader
        title="Sobre a Floriografia"
        eyebrow="Institucional"
        description="Uma enciclopédia brasileira de flores, montada como base de conhecimento: cada flor se conecta a cores, significados, ocasiões e cuidados."
        breadcrumbs={[{ name: "Sobre", path: "/sobre" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            <strong>Floriografia</strong> é o estudo da linguagem das flores: o conjunto de significados que
            culturas diferentes, em diferentes épocas, atribuíram às flores. Este site organiza esse
            conhecimento em um acervo navegável, em português, para quem precisa escolher uma flor — e quer
            saber o que ela comunica, como é cuidada e com o que combina.
          </p>

          <h2>O que este site é</h2>
          <ul>
            {WHAT_IT_IS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>O que este site não é</h2>
          <ul>
            {WHAT_IT_IS_NOT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Como o acervo está organizado</h2>
          <p>
            O conteúdo não é uma lista de artigos soltos. Ele é modelado em entidades que se referenciam
            entre si — um princípio que também orienta a estrutura futura do banco de dados:
          </p>
          <ul>
            <li>
              <strong>Flores</strong> — a unidade central: identificação, cores, significado, aroma, época,
              cuidados, ocasiões, combinações e FAQ.
            </li>
            <li>
              <strong>Significados, cores, ocasiões e características</strong> — dimensões pelas quais se
              navega até as flores.
            </li>
            <li>
              <strong>Combinações</strong> — pares e grupos de flores que funcionam juntos, com a lógica de
              cada montagem.
            </li>
            <li>
              <strong>Guias</strong> — textos editoriais para decisões comuns (presentear, perfumes, cuidado
              com flores cortadas).
            </li>
          </ul>

          <h2>Números do acervo</h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-line bg-white p-5 transition hover:border-leaf/40"
            >
              <p className="font-display text-3xl font-semibold text-leaf">{item.value}</p>
              <p className="mt-1 text-sm capitalize text-ink-2">{item.label}</p>
            </Link>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>Princípios editoriais</h2>
          <ul>
            <li>
              <strong>Sem dados inventados.</strong> Nada de CNPJ, equipe, prêmios, endereços ou números que
              não existam.
            </li>
            <li>
              <strong>Sem promessas universais.</strong> Simbolismo é apresentado como tradição cultural, com
              ressalva de contexto.
            </li>
            <li>
              <strong>Transparência sobre o que funciona.</strong> Formulários, busca e projetos em
              construção são declarados como estão — nunca simulados.
            </li>
            <li>
              <strong>Correções abertas.</strong> Qualquer imprecisão pode ser reportada pela página de{" "}
              <Link href="/correcoes">correções</Link>.
            </li>
          </ul>

          <h2>Como este site é feito</h2>
          <p>
            A versão atual é um aplicativo Next.js estático, com conteúdo versionado em código e gerado em
            tempo de build. Isso significa: sem banco de dados em produção hoje, sem login e sem coleta de
            dados. A migração para um CMS e banco de dados está descrita na{" "}
            <Link href="/metodologia">metodologia</Link>, junto do processo editorial.
          </p>

          <h2>Saiba mais</h2>
          <ul>
            <li>
              <Link href="/metodologia">Metodologia</Link> — como o conteúdo é produzido e revisado.
            </li>
            <li>
              <Link href="/fontes">Fontes</Link> — onde conferir e aprofundar.
            </li>
            <li>
              <Link href="/politica-editorial">Política editorial</Link> — independência e correções.
            </li>
            <li>
              <Link href="/uso-de-ia">Uso de IA</Link> — como as ferramentas de inteligência artificial
              entram no processo.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
