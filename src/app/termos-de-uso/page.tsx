import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Termos de uso",
  description:
    "Condições de uso do site Floriografia: finalidade informativa, propriedade intelectual, condutas proibidas e limites de responsabilidade.",
  path: "/termos-de-uso",
});

const TERMS = [
  {
    n: "1",
    title: "Finalidade",
    text: "O site oferece conteúdo informativo e educativo sobre flores — significados, cultivo, ocasiões e guias de escolha. Ele não vende produtos nem presta serviços profissionais.",
  },
  {
    n: "2",
    title: "Não é aconselhamento profissional",
    text: "Nada no site substitui diagnóstico ou orientação de botânico, agrônomo, floricultor, médico ou veterinário. Decisões sobre saúde, segurança de crianças/animais e cultivo profissional exigem profissional qualificado.",
  },
  {
    n: "3",
    title: "Precisão do conteúdo",
    text: "O conteúdo é revisado com o melhor esforço, mas erros podem existir e informações podem mudar (nomenclatura, disponibilidade, práticas de cultivo). O site não garante completude ou atualização permanente. Encontrou um erro? Use /correcoes.",
  },
  {
    n: "4",
    title: "Propriedade intelectual",
    text: "Textos, estrutura, marca e elementos visuais do site são protegidos. Você pode citar trechos curtos com atribuição e link para a página original. Reprodução integral, revenda ou uso comercial requer autorização prévia.",
  },
  {
    n: "5",
    title: "Uso permitido",
    text: "É permitido navegar, ler, compartilhar links e citar o conteúdo com crédito. É proibido: extrair o acervo inteiro para republicar, usar o conteúdo em produto pago, alterar textos sem indicação de edição, tentar burlar segurança ou sobrecarregar a infraestrutura.",
  },
  {
    n: "6",
    title: "Links externos",
    text: "O site pode apontar para páginas de terceiros. Não controlamos o conteúdo, a disponibilidade nem as práticas de privacidade desses sites; o link não significa endosso.",
  },
  {
    n: "7",
    title: "Responsabilidade",
    text: "O uso do site é por sua conta e risco. Na máxima medida permitida pela lei, o responsável não responde por danos decorrentes da informação apresentada, indisponibilidade ou decisões tomadas com base no conteúdo.",
  },
  {
    n: "8",
    title: "Alterações",
    text: "Estes termos podem ser atualizados, com a data revisada nesta página. O uso continuado após a mudança implica aceitação da nova versão.",
  },
];

export default function TermosPage() {
  return (
    <>
      <PageHeader
        title="Termos de uso"
        eyebrow="Legal"
        description="As condições que regem o uso deste site — escritas para serem lidas, não apenas existirem."
        breadcrumbs={[{ name: "Termos de uso", path: "/termos-de-uso" }]}
      />

      <div className="container-page pb-16">
        <div className="prose-page">
          <p>
            <strong>Última atualização:</strong> 27 de setembro de 2026.
          </p>
          <p>
            Ao acessar o site Floriografia, você aceita estes termos. Se não concordar, não utilize o site.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TERMS.map((term) => (
            <div key={term.n} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="font-display text-lg font-semibold text-leaf">
                {term.n}. {term.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{term.text}</p>
            </div>
          ))}
        </div>

        <div className="prose-page mt-8">
          <h2>10. Foro e legislação</h2>
          <p>
            Aplica-se a legislação brasileira. Enquanto o responsável não tiver endereço formal publicado, a
            identificação do foro competente será informada nesta seção — mesma razão de não inventar dados
            que ainda não existem.
          </p>

          <h2>11. Contato</h2>
          <p>
            Dúvidas sobre estes termos: página de <Link href="/contato">contato</Link>. Veja também a{" "}
            <Link href="/politica-de-privacidade">política de privacidade</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
