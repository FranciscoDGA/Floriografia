import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Publicidade",
  description:
    "Regra da Floriografia sobre anúncios: nenhum ativo nesta versão, e as condições para que existam sem comprometer o conteúdo.",
  path: "/publicidade",
});

const CONDITIONS = [
  "Anúncios serão identificados como tal, em formato e posição que não confundam com o conteúdo do acervo.",
  "Não vendemos espaço dentro de páginas de conteúdo informativo de forma a alterar a leitura (sem anúncios entre seções de texto, por exemplo).",
  "Nenhum dado pessoal é compartilhado com redes publicitárias nesta versão — porque não há rede configurada.",
  "Bloqueadores de anúncio não degradam a experiência: o site funciona inteiro sem carregar rede publicitária.",
];

export default function PublicidadePage() {
  return (
    <>
      <PageHeader
        title="Publicidade"
        eyebrow="Transparência"
        description="Como a Floriografia trata anúncios — hoje e no futuro."
        breadcrumbs={[{ name: "Publicidade", path: "/publicidade" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <div className="not-prose mb-6 rounded-2xl border border-line bg-paper-2 p-5 text-sm leading-relaxed text-ink-2">
            <p className="font-semibold text-ink">Situação atual</p>
            <p className="mt-2">
              <strong className="text-ink">Nenhum anúncio está publicado nesta versão do site.</strong> Não há
              redes publicitárias, tags de terceiros ou espaços comerciais ativos — o site carrega apenas seus
              próprios arquivos.
            </p>
          </div>

          <p>
            Publicidade financia conteúdo em muitos sites. Quando (e se) existir aqui, será pelas condições
            abaixo.
          </p>

          <h2>Regras para o futuro</h2>
          <ul>
            {CONDITIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Separar o que é conteúdo do que é anúncio</h2>
          <p>
            A fronteira é simples: conteúdo é o que você abriu a página para ler; anúncio é o que financia a
            página. A política editorial proíbe que essa fronteira seja borrada — nenhuma marca ganha posição
            ou tom por pagar espaço.
          </p>

          <h2>Impacto em privacidade</h2>
          <p>
            Redes publicitárias costumam usar cookies e identificadores. Este site não carrega nenhuma delas
            hoje; se isso mudar, a{" "}
            <Link href="/politica-de-privacidade">política de privacidade</Link> e a página de{" "}
            <Link href="/cookies">cookies</Link> serão atualizadas <em>antes</em> da ativação — não depois.
          </p>

          <p>
            Relacionado: <Link href="/afiliados">links de afiliado</Link> e{" "}
            <Link href="/politica-editorial">política editorial</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
