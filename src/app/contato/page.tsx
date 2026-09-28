import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a Floriografia: elogios, dúvidas, parcerias, imprensa. Formulário com validação e aviso claro quando o canal não está publicado.",
  path: "/contato",
  robots: false,
});

const TOPICS = [
  {
    title: "Elogio e sugestão",
    text: "Conte o que funcionou e o que você achou que faltava no acervo.",
  },
  {
    title: "Dúvida de conteúdo",
    text: "Se uma página não respondeu sua dúvida, descreva — ela pode virar um guia novo.",
  },
  {
    title: "Parceria e imprensa",
    text: "Colaborações editoriais, materiais para reportagem e requisições de informação.",
  },
  {
    title: "Correção de conteúdo",
    text: "Erros factuais têm canal próprio: use a página de correções, com a URL da página.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        title="Contato"
        eyebrow="Institucional"
        description="Escreva para a Floriografia. Diga o que você precisa — se for correção de conteúdo, use o formulário específico de correções."
        breadcrumbs={[{ name: "Contato", path: "/contato" }]}
      />

      <div className="container-page grid gap-10 pb-16 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <ContactForm variant="contato" />

          <div className="mt-8 rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-ink-2">
            <p className="font-semibold text-ink">Sobre o seu dado pessoal</p>
            <p className="mt-2">
              Enquanto o canal de e-mail não estiver publicado neste ambiente, o formulário apenas valida os
              campos localmente no seu navegador — <strong className="text-ink">nada é enviado nem
              armazenado</strong>. Consulte a{" "}
              <Link href="/politica-de-privacidade" className="text-leaf-2 underline underline-offset-4">
                política de privacidade
              </Link>{" "}
              para detalhes.
            </p>
            {SITE.contactEmail && (
              <p className="mt-2">
                Com o canal publicado, a mensagem abre no seu aplicativo de e-mail para você confirmar o envio
                para <span className="font-medium text-ink">{SITE.contactEmail}</span>.
              </p>
            )}
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-line p-5 text-sm text-ink-2">
            <p>
              <strong className="text-ink">Canais oficiais:</strong>{" "}
              {SITE.contactEmail
                ? `e-mail publicado (${SITE.contactEmail}) via formulário acima.`
                : "ainda não publicados nesta versão. Este é um pendente declarado do site."}
            </p>
          </div>
        </div>

        <aside aria-labelledby="assuntos">
          <h2 id="assuntos" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
            Assuntos
          </h2>
          <ul className="mt-3 space-y-3">
            {TOPICS.map((topic) => (
              <li key={topic.title} className="rounded-2xl border border-line bg-white p-4">
                <p className="font-display text-base font-semibold text-leaf">{topic.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{topic.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl bg-paper-2 p-4 text-sm">
            <p className="text-ink-2">
              Erro factual? Vá direto para{" "}
              <Link href="/correcoes" className="text-leaf-2 underline underline-offset-4">
                /correcoes
              </Link>
              .
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
