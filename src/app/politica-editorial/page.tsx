import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política editorial",
  description:
    "Independência editorial, separação entre conteúdo e publicidade, padrão de fontes e processo de correção da Floriografia.",
  path: "/politica-editorial",
});

const RULES = [
  {
    title: "Independência",
    text: "A escolha do que publicar não depende de anunciantes, parceiros ou marcas de floricultura. Não existe conteúdo pago disfarçado de editorial nesta versão do site.",
  },
  {
    title: "Separação clara",
    text: "Se no futuro houver publicidade ou links de afiliado, eles serão rotulados no próprio local onde aparecem — nunca embutidos em uma recomendação sem aviso. Veja /publicidade e /afiliados.",
  },
  {
    title: "Sem hierarquia por pagamento",
    text: "Uma flor não aparece primeiro porque alguém pagou. A ordenação do acervo é alfabética ou por relevância editorial.",
  },
  {
    title: "Padrão de fontes",
    text: "Afirmamos apenas o que podemos sustentar. Onde falta referência, isso é declarado (ver /fontes) em vez de mascarado com linguagem de autoridade.",
  },
  {
    title: "Correção sem atrito",
    text: "Erro factual é corrigido, não defendido. A página de correções aceita relatos de qualquer leitor e a data de atualização fica visível.",
  },
  {
    title: "Sem conteúdo enganoso",
    text: "Nada de contagens falsas, depoimentos inventados, formulários simulados ou funções que parecem funcionar e não funcionam.",
  },
];

export default function PoliticaEditorialPage() {
  return (
    <>
      <PageHeader
        title="Política editorial"
        eyebrow="Transparência"
        description="As regras que governam o que entra, o que sai e o que nunca entra neste site."
        breadcrumbs={[{ name: "Política editorial", path: "/politica-editorial" }]}
      />

      <div className="container-page pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {RULES.map((rule) => (
            <div key={rule.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="font-display text-lg font-semibold text-leaf">{rule.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{rule.text}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>Quando o conteúdo muda</h2>
          <p>
            Toda página publicada exibe a data da última atualização. Mudanças de sentido — não apenas
            revisão de texto — atualizam essa data. Não apagamos páginas para esconder erros: corrigimos e,
            quando o assunto deixa de fazer sentido, o motivo é dito.
          </p>

          <h2>Conflitos de interesse</h2>
          <p>
            Parcerias editoriais, doações, brindes e relações com marcas serão declarados nesta página e, se
            afetarem um conteúdo específico, na própria página. Enquanto não existirem, esta seção permanece
            como compromisso de declaração.
          </p>

          <h2>Limites editoriais</h2>
          <p>
            Não publicamos conteúdo que possa levar a dano: instruções de consumo de plantas tóxicas, tratamento
            médico ou veterinário, ou promessas de resultado. Onde há risco, o texto avisa antes de sugerir.
          </p>

          <h2>Documentos relacionados</h2>
          <ul>
            <li>
              <Link href="/metodologia">Metodologia</Link> — processo e pendências.
            </li>
            <li>
              <Link href="/fontes">Fontes</Link> — sustentação das afirmações.
            </li>
            <li>
              <Link href="/uso-de-ia">Uso de IA</Link> — papel das ferramentas de inteligência artificial.
            </li>
            <li>
              <Link href="/publicidade">Publicidade</Link> e <Link href="/afiliados">afiliados</Link> —
              regras comerciais.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
