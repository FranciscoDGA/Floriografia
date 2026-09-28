import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Uso de IA",
  description:
    "Como a inteligência artificial entra na produção de conteúdo da Floriografia, o que ela faz e o que ela não faz.",
  path: "/uso-de-ia",
});

const USES = [
  {
    title: "Redação e revisão de textos",
    text: "Modelos de linguagem auxiliam na estruturação e na redação de descrições, cuidados e guias, acelerando a produção do acervo em português.",
  },
  {
    title: "Organização e checagem estrutural",
    text: "Ferramentas de IA ajudam a manter consistência entre slugs, relacionamentos e campos obrigatórios — a mesma validação que falha o build quando algo está quebrado.",
  },
  {
    title: "Rotina de desenvolvimento",
    text: "Ferramentas de programação assistida são usadas no código do site (páginas, componentes, SEO), como parte normal do desenvolvimento de software.",
  },
];

const DOES_NOT = [
  "Não há chatbot, assistente ou recomendação automática publicada — o projeto Qual Flor? está declarado como não implementado.",
  "Nenhum texto é publicado sem passar pelas checagens estruturais e editoriais descritas na metodologia.",
  "A IA não decide o que é verdade: onde há incerteza, o texto diz que há.",
  "Não usamos IA para gerar imagens de pessoas, depoimentos, números ou documentos institucionais inexistentes.",
];

const LIMITS = [
  "Modelos podem errar dados botânicos, datas e nomenclaturas — por isso a revisão e o canal de correções existem.",
  "Conhecimento de corte histórico-cultural (simbolismo) é apresentado como tradição, não como fato estabelecido.",
  "Recomendações de cultivo são gerais e não substituem observação do ambiente real da planta.",
];

export default function UsoDeIaPage() {
  return (
    <>
      <PageHeader
        title="Uso de inteligência artificial"
        eyebrow="Transparência"
        description="Ferramentas de IA participam da produção deste conteúdo. Este documento diz exatamente onde — e onde não."
        breadcrumbs={[{ name: "Uso de IA", path: "/uso-de-ia" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            Esconder o uso de IA é uma forma de enganar o leitor sobre o processo. Por isso esta página
            existe: descreve o papel das ferramentas de inteligência artificial na Floriografia, hoje.
          </p>

          <h2>Onde a IA é usada</h2>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {USES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="font-display text-lg font-semibold text-leaf">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>O que a IA não faz aqui</h2>
          <ul>
            {DOES_NOT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Limites conhecidos</h2>
          <ul>
            {LIMITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Responsabilidade</h2>
          <p>
            Quem publica responde pelo que é publicado — com ou sem assistência de máquina. Encontrou um erro
            provavelmente gerado por IA?{" "}
            <Link href="/correcoes">Envie a correção</Link>: é o mecanismo oficial para isso.
          </p>

          <p>
            Veja também a <Link href="/politica-editorial">política editorial</Link> e a página de{" "}
            <Link href="/metodologia">metodologia</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
