import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Qual flor? Roteiro de escolha",
  description:
    "O projeto Qual Flor? ainda não está no ar: um roteiro de perguntas que leva da intenção à flor indicada. Enquanto isso, navegue por significados, ocasiões e busca.",
  path: "/qual-flor",
  robots: false,
});

const STEPS = [
  {
    title: "Para quem é",
    text: "A relação com a pessoa muda o tom: mãe, parceiro(a), colega, professor(a), alguém em luto.",
  },
  {
    title: "O que você quer transmitir",
    text: "Amor, amizade, gratidão, desculpas, celebração — a mensagem vem antes da espécie.",
  },
  {
    title: "Contexto prático",
    text: "Orçamento, distância até a pessoa, tempo de vida em vaso ou em buque e restrições de espaço.",
  },
  {
    title: "Estação e disponibilidade",
    text: "Algumas flores são sazonais; outras existem o ano inteiro, com variação de preço.",
  },
];

export default function QualFlorPage() {
  return (
    <>
      <PageHeader
        title="Qual flor eu devo escolher?"
        eyebrow="Em construção"
        description="Este será um roteiro de perguntas curto, que leva da sua intenção à flor indicada — com alternativas e o motivo de cada escolha."
        breadcrumbs={[{ name: "Qual Flor?", path: "/qual-flor" }]}
      />

      <div className="container-page max-w-3xl pb-16">
        <div className="rounded-2xl border border-line bg-paper-2 p-6">
          <p className="text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Estado atual:</strong> o assistente ainda não está implementado —
            não existe recomendação automática nesta versão do site. Aqui está o que ele fará quando for
            publicado, para que nada pareça funcionar quando não funciona.
          </p>
        </div>

        <section aria-labelledby="como-funcionara" className="mt-10">
          <h2 id="como-funcionara" className="font-display text-2xl font-semibold text-leaf">
            Como funcionará
          </h2>
          <ol className="mt-4 space-y-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-lg font-semibold text-leaf">
                  <span className="mr-2 text-bloom">{index + 1}.</span>
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            A resposta indicará de 1 a 3 flores, explicações do porquê, alternativas mais baratas ou mais
            fáceis de encontrar, e o cuidado básico de cada opção. Nenhuma recomendação será apresentada como
            regra universal: o roteiro sugere, você decide.
          </p>
        </section>

        <section aria-labelledby="enquanto-isso" className="mt-10">
          <h2 id="enquanto-isso" className="font-display text-2xl font-semibold text-leaf">
            Enquanto isso
          </h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            Você já pode chegar a uma boa escolha navegando por intenção e contexto:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/significados", label: "Significados", text: "Comece pela mensagem que quer passar." },
              { href: "/ocasioes", label: "Ocasiões", text: "Critérios práticos para cada data." },
              { href: "/cores", label: "Cores", text: "Se a cor já diz por você." },
              { href: "/buscar", label: "Buscar", text: "Nome, mensagem ou dúvida em palavras." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-line bg-white p-5 transition hover:border-leaf/40"
              >
                <span className="font-display text-base font-semibold text-leaf">{link.label}</span>
                <span className="mt-1 block text-sm text-ink-2">{link.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-ink-2">
          Quer ser avisado quando o Qual Flor? entrar no ar?{" "}
          <Link href="/contato" className="text-leaf-2 underline underline-offset-4 hover:text-bloom">
            Fale conosco
          </Link>
          .
        </p>
      </div>
    </>
  );
}
