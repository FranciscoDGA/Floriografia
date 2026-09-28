import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookies",
  description:
    "Lista de cookies do site Floriografia: hoje nenhuma categoria de rastreamento está ativa — nem análise nem publicidade.",
  path: "/cookies",
});

const CATEGORIES = [
  {
    name: "Necessários",
    status: "Nenhum instalado pelo site",
    detail:
      "O site não exige sessão, login ou preferências persistidas. Não há cookie de sessão próprio.",
  },
  {
    name: "Preferências",
    status: "Nenhum instalado pelo site",
    detail: "Não guardamos idioma, tamanho de texto ou qualquer preferência em cookie.",
  },
  {
    name: "Análise (analytics)",
    status: "Nenhum — não há ferramenta de medição",
    detail:
      "Google Analytics, Matomo, Hotjar e similares não estão configurados. Não há contagem de visitantes por script de terceiros.",
  },
  {
    name: "Publicidade",
    status: "Nenhum — não há rede publicitária",
    detail:
      "Não há pixels de redes sociais nem tags de anúncio. Nenhum cookie é gravado para segmentação.",
  },
  {
    name: "Incrustações de terceiros",
    status: "Nenhuma",
    detail: "Não há vídeos, mapas, widgets ou fontes hospedadas por terceiros dentro das páginas.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        title="Cookies"
        eyebrow="Legal"
        description="Lista completa e atual do que este site grava no seu navegador. Hoje: nada de rastreamento."
        breadcrumbs={[{ name: "Cookies", path: "/cookies" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            <strong>Última atualização:</strong> 27 de setembro de 2026.
          </p>
          <p>
            Cookie é pequeno arquivo gravado no navegador para lembrar algo. Este site foi construído para não
            precisar deles.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg font-semibold text-leaf">{category.name}</h2>
                <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold text-leaf">
                  Inativo
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-ink">{category.status}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{category.detail}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>Por que não há banner de consentimento</h2>
          <p>
            Blocos de aviso de cookies existem para pedir consentimento antes de instalar tecnologias de
            rastreamento. Como não há nenhuma tecnologia dessas ativa, não há o que consentir — e um banner
            existiria apenas para simular conformidade.
          </p>
          <p>
            <strong>Se qualquer categoria mudar no futuro</strong>, esta página será atualizada{" "}
            <em>antes</em> da ativação e o mecanismo de consentimento correspondente passará a existir.
          </p>

          <h2>Registros técnicos da hospedagem</h2>
          <p>
            A infraestrutura que serve as páginas pode manter registros de acesso (IP, horário, rota) por
            segurança e diagnóstico. Isso não é cookie e não é usado para perfilamento — detalhes na{" "}
            <Link href="/politica-de-privacidade">política de privacidade</Link>.
          </p>

          <h2>Controle pelo seu navegador</h2>
          <p>
            Você pode bloquear ou apagar cookies pelas configurações do navegador. Como este site não usa
            cookie próprio, fazer isso aqui não altera sua experiência.
          </p>

          <p>
            Relacionados: <Link href="/politica-de-privacidade">privacidade</Link>,{" "}
            <Link href="/publicidade">publicidade</Link> e <Link href="/afiliados">afiliados</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
