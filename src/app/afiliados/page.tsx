import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Links de afiliado",
  description:
    "Regra da Floriografia sobre links de afiliado: nenhum ativo nesta versão, e as condições para que existam no futuro.",
  path: "/afiliados",
});

const CONDITIONS = [
  "Todo link de afiliado será rotulado de forma visível no ponto em que aparecer (texto ou ícone de divulgação).",
  "A comissão não altera a ordem, a seleção nem o conteúdo do acervo — uma flor não entra ou sai por rendimento.",
  "A recomendação só existe se fizer sentido editorial para o leitor; links que não ajudam não entram.",
  "A página deste documento é atualizada no mesmo dia em que o primeiro link de afiliado for publicado.",
];

export default function AfiliadosPage() {
  return (
    <>
      <PageHeader
        title="Links de afiliado"
        eyebrow="Transparência"
        description="Como a Floriografia trata comissões de indicação — hoje e no futuro."
        breadcrumbs={[{ name: "Afiliados", path: "/afiliados" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <div className="not-prose mb-6 rounded-2xl border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink-2">
            <p className="font-semibold text-ink">Situação atual</p>
            <p className="mt-2">
              <strong className="text-ink">Nenhum link de afiliado está publicado nesta versão do site.</strong>{" "}
              Não há programas de afiliados, tags de rastreamento ou parcerias comerciais ativas — nenhum
              conteúdo deste site gera comissão hoje.
            </p>
          </div>

          <p>
            Links de afiliado são endereços que, quando comprados por ali, geram uma comissão para o site,
            <strong> sem custo adicional para você</strong>. Quando e se existirem, serão regidos pelas
            regras abaixo.
          </p>

          <h2>Regras para o futuro</h2>
          <ul>
            {CONDITIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>O que nunca faremos</h2>
          <ul>
            <li>Disfarçar um link pago de recomendação editorial.</li>
            <li>Publicar avaliação de produto que não testamos ou não podemos verificar.</li>
            <li>Esconder a existência de comissão em letra miúda.</li>
            <li>Condicionar conteúdo gratuito a clique em link comercial.</li>
          </ul>

          <h2>Se você encontrar um link</h2>
          <p>
            Qualquer link que pareça comercial e não esteja rotulado pode ser reportado no{" "}
            <Link href="/correcoes">formulário de correções</Link> — trataremos como falha de transparência.
          </p>

          <p>
            Relacionado: <Link href="/publicidade">política de publicidade</Link> e{" "}
            <Link href="/politica-editorial">política editorial</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
