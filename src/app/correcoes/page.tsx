import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Correções",
  description:
    "Encontrou um erro factual, uma fonte ausente ou um texto enganoso? Envie a correção com a URL da página e o que deve ser ajustado.",
  path: "/correcoes",
  robots: false,
});

const ACCEPTS = [
  "Erro factual (espécie, família, origem, época de floração, descrição botânica).",
  "Significado atribuído a uma tradição que não existe ou está fora de contexto.",
  "Cuidado de cultivo perigoso ou errado (rega, substrato, toxicidade).",
  "Link quebrado, página inacabada ou informação que o site promete e não entrega.",
  "Sugestão de fonte para uma afirmação que hoje está sem referência.",
];

const NEEDS = [
  "URL da página exata (campo disponível no formulário ao lado).",
  "Descrição clara do que está errado e, se possível, o que está correto.",
  "Referência, foto ou link que sustente a correção (quando houver).",
];

export default function CorrecoesPage() {
  return (
    <>
      <PageHeader
        title="Correções"
        eyebrow="Participe"
        description="Um erro corrigido vale mais que dez acertos. Envie a correção com a URL da página — é assim que o acervo melhora."
        breadcrumbs={[{ name: "Correções", path: "/correcoes" }]}
      />

      <div className="container-page grid gap-10 pb-16 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <ContactForm variant="correcoes" />

          <div className="mt-8 rounded-2xl border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink-2">
            <p className="font-semibold text-ink">O que acontece depois do envio</p>
            <p className="mt-2">
              Nesta versão do site não existe fila pública de correções: o texto é validado localmente e, com
              o canal de contato publicado, encaminhado por e-mail. Correções aceitas entram na próxima
              atualização da página, que passa a exibir a nova data.
            </p>
            <p className="mt-2">
              Não publicamos correções anônimas sem qualquer base — mas também não descartamos uma sugestão
              só por ela vir de um leitor.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-line p-5 text-sm text-ink-2">
            <p>
              Prefere discutir antes? Use o{" "}
              <Link href="/contato" className="text-leaf-2 underline underline-offset-4">
                formulário de contato
              </Link>
              .
            </p>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
              Aceitamos correções de
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-2">
              {ACCEPTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
              Para agilizar, inclua
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-2">
              {NEEDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
