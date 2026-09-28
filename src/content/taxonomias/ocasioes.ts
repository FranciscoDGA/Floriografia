import type { Occasion } from "@/lib/types";

export const occasions: Occasion[] = [
  {
    slug: "aniversario",
    name: "Aniversário",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Aniversário pede flores que tenham a ver com a pessoa, não apenas com a data. A preferência conhecida por cor ou espécie vale mais que qualquer regra simbólica; na dúvida, tons alegres em composição média funcionam bem em quase todas as idades.",
    guidance: [
      "Se você já sabe a cor preferida, comece por ela e ignore regras simbólicas.",
      "Para crianças e ambientes informais, formas abertas e cores claras funcionam melhor que arranjos formais.",
      "Em ambiente de trabalho, prefira vaso ou arranjo compacto: buquês grandes atrapalham a mesa.",
      "Anote a data de nascimento da flor no bilhete se quiser transformar o gesto em referência futura.",
    ],
    seo: {
      title: "Flores para aniversário: como escolher",
      description:
        "Como escolher flores de aniversário, o que considerar sobre cor, tamanho e ambiente, e ideias por tipo de relação.",
    },
  },
  {
    slug: "dia-das-maes",
    name: "Dia das Mães",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O Dia das Mães é uma das maiores datas de movimento da floricultura no Brasil. Além do significado afetivo, a escolha pratica importa: muitas mães preferem vaso a buquê, para que o gesto dure mais tempo.",
    guidance: [
      "Pergunte (ou descubra) se ela prefere vaso ou flor cortada — essa decisão pesa mais que a espécie.",
      "Tons rosa, creme e branco são os mais usados; se ela tem cor favorita, use-a.",
      "Peônias, hortênsias e rosas são as mais procuradas na data e costumam ter preço e oferta variáveis.",
      "Envie com antecedência: a logística da data é o que mais falha, não a escolha da flor.",
    ],
    seo: {
      title: "Flores para o Dia das Mães: guia de escolha",
      description:
        "Quais flores dar no Dia das Mães, vaso ou buquê, cores mais procuradas e o que considerar antes de pedir.",
    },
  },
  {
    slug: "dia-dos-namorados",
    name: "Dia dos Namorados",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Em 12 de junho, o vermelho domina as vitrines no Brasil, mas não é obrigatório. O ponto central é a intensidade da mensagem: vermelho declara, rosa admira, branco respeita um momento mais delicado.",
    guidance: [
      "Rosa vermelha ou vermelha para declaração; rosa-claro para início de relacionamento.",
      "Se o relacionamento é recente, evite vermelho intenso em excesso — pode soar desproporcional.",
      "Acompanhamento de chocolate ou bilhete é bem-vindo, mas a flor deve ser o item principal.",
      "Confirme restrições de alergia e de espaço antes de escolher perfume forte.",
    ],
    seo: {
      title: "Flores para o Dia dos Namorados",
      description:
        "Quais flores escolher no Dia dos Namorados, diferença entre rosa vermelha e rosa cor-de-rosa, e como dosar a mensagem.",
    },
  },
  {
    slug: "casamento",
    name: "Casamento",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Em casamento, a escolha floral combina simbolismo, paleta do evento, orçamento e resistência prática — as flores precisam durar o dia todo, em pé ou em uso, sob ar-condicionado e transporte.",
    guidance: [
      "Feche a paleta primeiro e escolha as flores depois; espécie sem paleta costuma gerar retrabalho.",
      "Buquê da noiva e decoração podem usar espécies diferentes, desde que compartilhem cores.",
      "Flores de textura fechada (rosas, peônias, tulipas) resistem melhor ao manuseio que pétalas finas.",
      "Considere sazonalidade e preço: a mesma flor muda de valor conforme a época.",
    ],
    seo: {
      title: "Flores para casamento: como organizar",
      description:
        "Como escolher flores de casamento, paleta, resistência das espécies, buquê e decoração, e o que considerar no orçamento.",
    },
  },
  {
    slug: "pedido-de-namoro",
    name: "Pedido de namoro",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Um pedido de namoro raramente se resolve só na flor. A composição funciona melhor quando é coerente com o momento: algo que represente a história do casal vale mais que a espécie mais cara.",
    guidance: [
      "Escolha uma flor que tenha sentido na relação de vocês, não apenas a mais tradicional.",
      "Se for uma surpresa, prefira vaso ou arranjo compacto: é mais fácil de esconder e transportar.",
      "Evite fragrância forte se houver alergia ou pouco espaço.",
      "Não dependa da flor para carregar a mensagem — o bilhete e a fala são o conteúdo.",
    ],
    seo: {
      title: "Flores para pedido de namoro",
      description:
        "Como escolher a flor de um pedido de namoro, o que priorizar e por que o significado pessoal supera a regra simbólica.",
    },
  },
  {
    slug: "formatura",
    name: "Formatura",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Formatura é celebração de conquista: flores em tons vivos, muitas vezes em tons da instituição ou da turma. É comum o envio direto ao local da cerimônia, o que exige antecedência e planejamento logístico.",
    guidance: [
      "Confirme com quem organiza se aceitam entregas no local e até que hora.",
      "Tons vivos (amarelo, laranja, rosa) celebram melhor que tons neutros.",
      "Buquê médio é mais prático que grande em cerimônias com fotos e deslocamento.",
      "Se for enviar para casa, prefira vaso — a formatura costuma seguir com festa e a flor fica esperando.",
    ],
    seo: {
      title: "Flores para formatura",
      description:
        "Quais flores enviar na formatura, cores que celebram conquista, logística de entrega e tamanho adequado.",
    },
  },
  {
    slug: "nascimento",
    name: "Nascimento",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Para nascimento, o gesto é de boas-vindas à família. Prefere-se o que não ocupe espaço na maternidade e não represente risco para o recém-nascido: sem pólen solto, sem cheiro intenso e sem flores que se confundam com alimentos.",
    guidance: [
      "Confirme se a maternidade aceita flores e em que formato.",
      "Evite perfumes fortes e pétalas soltas em berçários e quartos de recém-nascido.",
      "Vaso costuma ser mais prático que buquê, que exige vaso, água e corte imediatos.",
      "Se houver irmãos mais velhos, confirme se alguma flor da escolha é tóxica.",
    ],
    seo: {
      title: "Flores para nascimento: boas-vindas seguras",
      description:
        "Ideias de flores para nascimento, o que evitar em maternidade e como escolher um gesto prático para os pais.",
    },
  },
  {
    slug: "condolencias",
    name: "Condolências",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Em momentos de perda, a flor é um gesto de presença. A sobriedade costuma ser mais adequada que o volume, e o branco predomina em boa parte das tradições ocidentais.",
    guidance: [
      "Prefira composições contidas e sem perfume intenso.",
      "Confirme a preferência da família quando houver proximidade — algumas preferem plantas a buquês.",
      "Envie com antecedência para o local da cerimônia, não para a casa, salvo indicação contrária.",
      "Inclua o nome de quem envia de forma legível: é o que permite identificar o gesto.",
    ],
    seo: {
      title: "Flores para condolências: o que enviar",
      description:
        "Como escolher flores para condolências, uso do branco, tamanho adequado e erros comuns a evitar.",
    },
  },
  {
    slug: "pedido-de-desculpas",
    name: "Pedido de desculpas",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Pedir desculpas com flor funciona quando o gesto é discreto e combinado com palavras. Flores brancas ou em tons claros, em tamanho moderado, comunicam respeito sem parecer tentativa de comprar a reconciliação.",
    guidance: [
      "Tamanho contido: um arranjo enorme pode parecer pressão, não arrependimento.",
      "Tons brancos, creme e azul suave são os mais adequados ao registro.",
      "A mensagem escrita importa mais que a espécie — escreva o que você quer dizer.",
      "Não combine a flor com outra coisa que sirva aos seus interesses; o gesto precisa ser só sobre a correção.",
    ],
    seo: {
      title: "Flores para pedir desculpas",
      description:
        "Quais flores usar em pedido de desculpas, tamanho e cor adequados, e como combinar gesto escrito e floral.",
    },
  },
  {
    slug: "dia-do-professor",
    name: "Dia do Professor",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Dia do Professor (15 de outubro no Brasil) costuma receber gestos coletivos: turmas e escolas enviam flores em nome do grupo. Composições simples e resistentes funcionam melhor que arranjos delicados.",
    guidance: [
      "Se for da turma, uma composição coletiva rende mais que várias pequenas.",
      "Evite perfume forte em salas de aula pequenas e ambientes compartilhados.",
      "Flores em vaso duram mais que cortadas e servem depois à sala.",
      "Confirme restrições da escola antes de enviar.",
    ],
    seo: {
      title: "Flores para o Dia do Professor",
      description:
        "Ideias de flores para o Dia do Professor, composições coletivas, o que evitar em ambiente de sala e logística de envio.",
    },
  },
  {
    slug: "dia-dos-pais",
    name: "Dia dos Pais",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "No Dia dos Pais (segundo domingo de agosto no Brasil), flores menos 'femininizadas' na leitura tradicional costumam ser a escolha preferida: tons terrosos, verdes, amarelos e arranjos mais estruturados.",
    guidance: [
      "Vaso ou planta costuma agradar mais que buquê cortado.",
      "Tons amarelo, verde e neutros são os mais usados nesta data.",
      "Se houver jardim ou varanda, uma planta de cultivo simples costuma durar mais que o gesto.",
      "Some a flor a algo que a pessoa realmente gosta — a combinação vale mais isolada.",
    ],
    seo: {
      title: "Flores para o Dia dos Pais",
      description:
        "Quais flores dar no Dia dos Pais, cores e formatos mais adequados, e a vantagem de escolher vaso em vez de buquê.",
    },
  },
];
