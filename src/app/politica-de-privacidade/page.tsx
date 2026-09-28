import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidade",
  description:
    "O que a Floriografia coleta (e o que não coleta), como o formulário trata seus dados e quais direitos você tem.",
  path: "/politica-de-privacidade",
});

const COLLECTS = [
  {
    title: "Navegação",
    text: "O site não instala cookies de análise, pixels de redes sociais ou ferramentas de rastreamento. Não há Google Analytics, Meta Pixel, Hotjar ou equivalentes configurados.",
  },
  {
    title: "Cadastro",
    text: "Não existe conta, login ou cadastro. Nenhum dado de perfil é solicitado ou armazenado.",
  },
  {
    title: "Formulários",
    text: "Os campos de contato e de correção são validados no seu próprio navegador. Sem o canal de e-mail publicado, nada é transmitido nem armazenado. Com o canal publicado, a mensagem abre no seu aplicativo de e-mail — o envio é feito por você, pelo seu próprio cliente de e-mail.",
  },
  {
    title: "Servidor",
    text: "A hospedagem pode registrar dados técnicos de acesso (endereço IP, horário, página solicitada, tipo de navegador) por segurança e diagnóstico — como praticamente qualquer site. Esses registros são da infraestrutura, não são usados para perfilar você.",
  },
  {
    title: "Terceiros",
    text: "Não há formulários, vídeos, mapas, fontes ou scripts de terceiros carregados por páginas deste site.",
  },
];

const RIGHTS = [
  "Saber se há dados seus tratados — e, nesta versão, a resposta é: não armazenamos dados de navegação nem de formulário.",
  "Corrigir dados enviados em formulário, pelo próprio canal de envio.",
  "Solicitar exclusão de qualquer dado que venha a ser armazenado no futuro (quando formulários forem conectados a um servidor), pelos canais de contato.",
  "Revogar consentimento — aplicável quando houver tecnologias que exijam consentimento (hoje não há).",
];

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        title="Política de privacidade"
        eyebrow="Legal"
        description="A versão curta: este site não rastreia você. A versão completa explica o porquê e o que pode mudar."
        breadcrumbs={[{ name: "Política de privacidade", path: "/politica-de-privacidade" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            <strong>Última atualização:</strong> 27 de setembro de 2026.
          </p>

          <p>
            Esta política descreve o tratamento de dados pessoais no site Floriografia. Ela foi escrita para
            descrever o que o site <em>faz de fato</em> — não um texto genérico copiado de outro lugar.
          </p>

          <h2>1. O que é coletado</h2>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COLLECTS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="font-display text-lg font-semibold text-leaf">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>2. Cookies</h2>
          <p>
            Nenhum cookie de terceiro ou de medição é instalado. A página{" "}
            <Link href="/cookies">Cookies</Link> detalha as categorias e mantém a lista atualizada.
          </p>

          <h2>3. Base legal e finalidade</h2>
          <p>
            Não há tratamento de dados para finalidade comercial, publicitária ou de perfilamento. Quando você
            envia uma mensagem por e-mail, o dado é tratado para responder ao seu pedido (execução de
            solicitação pré-contratual/legítimo interesse, conforme o caso), pelo canal que você mesmo
            escolheu ao usar o seu cliente de e-mail.
          </p>

          <h2>4. Seus direitos (LGPD)</h2>
          <p>
            A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante, entre outros, acesso, correção,
            eliminação, informação sobre compartilhamento e revogação de consentimento. Neste site:
          </p>
          <ul>
            {RIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>5. Como exercer seus direitos</h2>
          <p>
            Use a página de <Link href="/contato">contato</Link> ou a de{" "}
            <Link href="/correcoes">correções</Link>. Enquanto o canal de e-mail não estiver publicado, o
            formulário informa que nada foi enviado — nesse caso, não há dado a tratar.
          </p>

          <h2>6. Compartilhamento e transferência</h2>
          <p>
            Nenhum dado é vendido, alugado ou compartilhado com parceiros comerciais. Não há serviços de
            terceiros (anúncios, análises, mapas, vídeos) integrados às páginas nesta versão.
          </p>

          <h2>7. Responsável pelo tratamento</h2>
          <p>
            Este é um projeto informativo independente. A identificação completa do responsável (nome,
            documento, endereço) será publicada nesta seção assim que houver um canal de contato oficial
            ativo — declarar dados que não existem seria mentira, e esta política não vai fazer isso.
          </p>

          <h2>8. Alterações</h2>
          <p>
            Mudanças relevantes serão refletidas nesta página com nova data de atualização. Funcionalidades
            futuras que exijam cookies ou análise (analytics, publicidade, mapas) serão ativadas apenas
            <strong> depois</strong> da atualização desta política e da página de cookies.
          </p>

          <h2>9. Contato</h2>
          <p>
            Dúvidas sobre privacidade: use a página de <Link href="/contato">contato</Link>. Relacionados:{" "}
            <Link href="/termos-de-uso">termos de uso</Link> e <Link href="/cookies">cookies</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
