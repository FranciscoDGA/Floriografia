import type { Color } from "@/lib/types";

/**
 * Taxonomia de cores.
 * A primeira cor de cada flor em `flores` aponta para a cor principal dela.
 */
export const colors: Color[] = [
  {
    slug: "vermelho",
    name: "Vermelho",
    hex: "#C41E3A",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "No repertório ocidental, o vermelho costuma associar-se a paixão, intensidade e desejo. É a cor mais associada ao Dia dos Namorados no Brasil e um dos motivos pelas quais a rosa vermelha se tornou o símbolo mais reconhecido de declaração de amor.",
    caveat:
      "A leitura não é universal: em parte da cultura chinesa o vermelho é a cor da sorte e da celebração, usada em casamentos e ano-novo, sem relação com paixão romântica.",
    seo: {
      title: "Cor vermelha nas flores: significado e flores vermelhas",
      description:
        "O que a cor vermelha comunica nas flores, quais flores vermelhas existem e quando escolher uma flor vermelha para presentear.",
    },
  },
  {
    slug: "branco",
    name: "Branco",
    hex: "#F7F5EF",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O branco é associado a pureza, inocência, paz e respeito. Em casamentos, batizados e cerimônias de despedida, é a cor mais usada, tanto por tradição quanto por praticidade: flores brancas combinam com qualquer paleta e destacam-se em ambientes claros.",
    caveat:
      "Em partes da Ásia o branco é tradicionalmente a cor do luto e do luto apenas — a mesma flor branca pode, portanto, significar pureza em um casamento e pesar em um velório, conforme o contexto cultural.",
    seo: {
      title: "Flores brancas: significado, tradição e ocasiões de uso",
      description:
        "Significado das flores brancas, por que são usadas em casamentos e condolências, e quais flores brancas escolher em cada ocasião.",
    },
  },
  {
    slug: "rosa",
    name: "Rosa",
    hex: "#E8879E",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O rosa é lido como carinho, admiração, afeto e gratidão. É a cor que costuma expressar interesse sem a intensidade declaratória do vermelho, o que explica seu uso frequente em relacionamentos recentes, em homenagens à mãe e em gestos de agradecimento.",
    caveat:
      "Em algumas tradições o rosa-claro é a cor do primeiro amor e o rosa-escuro aproxima-se do agradecimento reconhecido; a faixa exata de tons muda a leitura.",
    seo: {
      title: "Flores cor-de-rosa: significado do rosa nas flores",
      description:
        "O que o rosa comunica nas flores, diferença entre rosa-claro e rosa-escuro, e quais flores cor-de-rosa escolher para presentear.",
    },
  },
  {
    slug: "amarelo",
    name: "Amarelo",
    hex: "#E9B44C",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Amarelo remete a alegria, energia, sol e amizade. É uma cor de boa disposição e de reconhecimento informal, muito usada para aniversários, agradecimentos e ambientes de trabalho.",
    caveat:
      "Existe uma leitura antiga, ainda citada, em que flores amarelas poderiam indicar ciúmes ou despedida — costume que hoje tem uso limitado e varia bastante de país para país.",
    seo: {
      title: "Flores amarelas: significado e ideias para presentear",
      description:
        "Significado das flores amarelas, quando escolher uma flor amarela e quais espécies funcionam bem para presentear com alegria.",
    },
  },
  {
    slug: "laranja",
    name: "Laranja",
    hex: "#E2762B",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O laranja combina o calor do vermelho com a luminosidade do amarelo: entusiasmo, vitalidade, determinação e brilho. Funciona bem em homenagens de celebração — formaturas, conquistas e aniversários — e em arranjos que precisam de presença.",
    caveat: "Não tem uma leitura tradicional muito fixa; costuma ser interpretado pelo contexto do arranjo.",
    seo: {
      title: "Flores laranjas: significado e quando usar",
      description:
        "O que flores laranjas comunicam, quais espécies são laranjas e em que ocasiões esse tom funciona melhor.",
    },
  },
  {
    slug: "lilas",
    name: "Lilás",
    hex: "#A98CCB",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Lilás e lavanda são lidos como admiração delicada, nostalgia e primeiros amores. É uma cor de afeto moderado, elegante, que rende arranjos suaves e não interfere em paletas neutras.",
    caveat: "Convivem com o roxo, mas a leitura costuma ser mais leve e afetiva do que a do roxo profundo.",
    seo: {
      title: "Flores lilás: significado do tom lilás nas flores",
      description:
        "Significado das flores lilás, diferença entre lilás e roxo, e quais flores apresentam esse tom.",
    },
  },
  {
    slug: "roxo",
    name: "Roxo",
    hex: "#6B4E9B",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O roxo associa-se a admiração, elegância, espiritualidade e, historicamente, a raridade — pigmentos roxos eram caros e ligados a realeza. Em flores, transmite distinção e respeito.",
    caveat: "A intensidade muda a leitura: roxo profundo soa mais formal; lilás e violeta soam mais afetivos.",
    seo: {
      title: "Flores roxas: significado e ideias de arranjos",
      description:
        "Significado das flores roxas, por que o roxo remete a raridade e quais flores roxas usar em arranjos elegantes.",
    },
  },
  {
    slug: "azul",
    name: "Azul",
    hex: "#3E7CB1",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O azul comunica serenidade, mistério e confiança. Há um fator prático: flores verdadeiramente azuis são relativamente raras na natureza, e essa raridade explica parte do valor simbólico que carregam.",
    caveat:
      "Grande parte das chamadas flores azuis na floricultura são tingidas artificialmente — o azul do arranjo pode, portanto, não ser o azul da espécie.",
    seo: {
      title: "Flores azuis: significado e raridade do azul na natureza",
      description:
        "Significado das flores azuis, por que são raras e quais espécies realmente têm pétalas azuis.",
    },
  },
  {
    slug: "verde",
    name: "Verde",
    hex: "#4E8B5B",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O verde em arranjos remete a renovação, esperança, equilíbrio e frescor. Muito usado como folhagem de apoio, também aparece em flores propriamente ditas e em composições minimalistas.",
    caveat: "É mais frequentemente uma cor de composição (folhagens) do que a cor principal da flor presenteada.",
    seo: {
      title: "Flores e folhagens verdes: significado e uso em arranjos",
      description:
        "O que o verde comunica nas composições florais, folhagens mais usadas e quando destacar o verde em um arranjo.",
    },
  },
];
