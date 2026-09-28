import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Metodologia",
  description:
    "Como o conteúdo da Floriografia é produzido, estruturado, validado e atualizado — e quais etapas ainda não existem nesta versão.",
  path: "/metodologia",
});

const PIPELINE = [
  {
    step: "1. Escopo",
    text: "Definir a entidade (uma flor, um significado, um guia) e o que ela precisa conter para ser útil: identificação, significado, cuidado, ocasiões, FAQ.",
  },
  {
    step: "2. Estrutura",
    text: "Preencher os campos obrigatórios do modelo: slug, nome, resumo, SEO, data de atualização, relacionamentos com outras entidades.",
  },
  {
    step: "3. Escrita",
    text: "Redigir em português claro, sem jargão desnecessário, com ressalvas explícitas onde o conhecimento é convencional (simbolismo) ou variável (cultivo).",
  },
  {
    step: "4. Conferência estrutural",
    text: "Validação automática no build: relacionamentos quebrados, campos obrigatórios ausentes e conteúdo publicado incompleto impedem a publicação.",
  },
  {
    step: "5. Publicação",
    text: "O build gera as páginas, o sitemap e os metadados. Nada é publicado sem passar pelas checagens do passo 4.",
  },
  {
    step: "6. Manutenção",
    text: "Correções chegam pelo formulário /correcoes e entram na fila de revisão, com registro de data na própria página.",
  },
];

const NOT_YET = [
  "Revisão bibliográfica por entrada (ver /fontes) — pendência declarada.",
  "Painel de conteúdo (CMS) e banco de dados: hoje o conteúdo é versionado em código.",
  "Fluxo de aprovação com mais de uma pessoa (rascunho → revisão → publicação).",
  "Testes automatizados de conteúdo além da validação estrutural do build.",
  "Registro público de histórico de correções por página.",
];

export default function MetodologiaPage() {
  return (
    <>
      <PageHeader
        title="Metodologia"
        eyebrow="Transparência"
        description="O processo editorial por trás do acervo — incluindo as etapas que esta versão ainda não tem."
        breadcrumbs={[{ name: "Metodologia", path: "/metodologia" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            A Floriografia trata conteúdo como produto estruturado, não como texto solto. Isso define tanto o
            que aparece nas páginas quanto o que o próprio sistema recusa publicar.
          </p>

          <h2>Como uma entrada nasce</h2>
        </div>

        <ol className="mt-4 grid gap-4 sm:grid-cols-2">
          {PIPELINE.map((item) => (
            <li key={item.step} className="rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-lg font-semibold text-leaf">{item.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="prose-page mt-8">
          <h2>Critérios editoriais</h2>
          <ul>
            <li>
              <strong>Precisão antes de volume.</strong> Preferimos dizer “varia conforme o clima” a publicar
              um número que não se sustenta.
            </li>
            <li>
              <strong>Simbolismo com enquadramento.</strong> Toda leitura de significado é apresentada como
              tradição cultural, com ressalva de que muda entre culturas e épocas.
            </li>
            <li>
              <strong>Nada de conteúdo inventado.</strong> Dados institucionais, contatos, equipe e
              certificações só existem se forem verificáveis.
            </li>
            <li>
              <strong>Reversibilidade.</strong> Toda correção tem canal aberto e a página exibe a data da
              última atualização.
            </li>
            <li>
              <strong>Menor dano possível.</strong> Onde há risco (plantas tóxicas, crianças, animais), o
              texto avisa antes de sugerir uso.
            </li>
          </ul>

          <h2>Limite do conteúdo</h2>
          <p>
            Nada aqui substitui diagnóstico de profissional — botânico, agrônomo, floricultor, veterinário ou
            médico. O site informa e orienta a escolha; não atende casos específicos.
          </p>

          <h2>O que ainda não existe</h2>
          <ul>
            {NOT_YET.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Ajude a melhorar</h2>
          <p>
            Encontrou uma imprecisão ou quer propor uma fonte? Use a página de{" "}
            <Link href="/correcoes">correções</Link>. Consulte também a{" "}
            <Link href="/politica-editorial">política editorial</Link> e a página de{" "}
            <Link href="/fontes">fontes</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
