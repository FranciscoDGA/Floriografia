import type { Combination } from "@/lib/types";

/**
 * Combinações: pares (ou trios) de flores que funcionam bem juntas.
 * A página de cada flor lista automaticamente as combinações em que ela aparece.
 */
export const combinations: Combination[] = [
  {
    slug: "rosa-e-peonia",
    name: "Rosa e peônia",
    flowerSlugs: ["rosa", "peonia"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Duas flores de textura cheia e pétalas sobrepostas: a rosa dá estrutura e a peônia dá volume. É uma combinação clássica em noivos e buquês de cerimônia, porque as duas têm presença isolada e não se anulam quando estão juntas.",
    tip: "Funciona melhor quando as cores são próximas; dois tons muito distantes disputam a atenção do arranjo.",
    seo: {
      title: "Rosa e peônia juntas: combinação clássica",
      description:
        "Por que rosa e peônia combinam, em que ocasiões essa dupla rende bem e como equilibrar cores e quantidade.",
    },
  },
  {
    slug: "lirio-e-rosa",
    name: "Lírio e rosa",
    flowerSlugs: ["lirio", "rosa"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "O lírio dá altura e um eixo vertical que a rosa, mais redonda, não oferece. Composta assim, a peça ganha camadas: o lírio conduz o olhar e a rosa sustenta a base.",
    tip: "Em arranjos pequenos, um único lírio já resolve a altura; dois ou mais costumam pesar demais.",
    seo: {
      title: "Lírio e rosa: como combinar",
      description:
        "Como montar um arranjo com lírio e rosa, proporções que funcionam e cuidados com o pólen do lírio.",
    },
  },
  {
    slug: "margarida-e-cravo",
    name: "Margarida e cravo",
    flowerSlugs: ["margarida", "cravo"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Forma simples, custo acessível e boa durabilidade: a margarida abre o arranjo e o cravo, de textura fechada, segura o conjunto. É a dupla mais comum em gestos informais e cotidianos.",
    tip: "Excelente quando o orçamento é curto: as duas espécies são de giro rápido e quase sempre disponíveis.",
    seo: {
      title: "Margarida e cravo: combinação simples",
      description:
        "Por que margarida e cravo combinam, para que ocasiões essa dupla funciona e como manter o arranjo leve.",
    },
  },
  {
    slug: "lavanda-e-jasmim",
    name: "Lavanda e jasmim",
    flowerSlugs: ["lavanda", "jasmim"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "A dupla mais perfumada da lista: o jasmim traz perfume doce e intenso, a lavanda acrescenta nota herbácea e frescor. Juntas, criam composições aromáticas que ocupam o ambiente inteiro.",
    tip: "Em quartos e ambientes pequenos, reduza a quantidade de jasmim: o perfume pode dominar demais.",
    seo: {
      title: "Lavanda e jasmim: combinação perfumada",
      description:
        "Como combinar lavanda e jasmim, equilíbrio de perfume em ambientes pequenos e cuidados de conservação.",
    },
  },
  {
    slug: "hortensia-e-rosa",
    name: "Hortênsia e rosa",
    flowerSlugs: ["hortensia", "rosa"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "A hortênsia ocupa volume com poucas hastes e cria um fundo macio sobre o qual a rosa se destaca. É uma das combinações mais usadas em cerimônias porque cobre área com rapidest e sem excesso de talos à vista.",
    tip: "A hortênsia bebe muita água: mantenha a base sempre cheia para não desidratar o resto do arranjo.",
    seo: {
      title: "Hortênsia e rosa: combinação para cerimônias",
      description:
        "Por que hortênsia e rosa combinam, como usar a hortênsia como base e o que observar na conservação.",
    },
  },
  {
    slug: "tulipa-e-ranunculo",
    name: "Tulipa e ranúnculo",
    flowerSlugs: ["tulipa", "ranunculo"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Duas flores de pétalas finas e movimento natural: a tulipa continua se abrindo depois do arranjo, e o ranúnculo mantém a forma compacta. O resultado é leve e contemporâneo, muito usado em composições de início de namoro.",
    tip: "As duas seguem crescendo em vaso: deixe folga no transporte e corte os talos na hora de usar.",
    seo: {
      title: "Tulipa e ranúnculo: combinação leve",
      description:
        "Como montar uma composição com tulipa e ranúnculo, por que essa dupla parece fresca e o que fazer após o corte.",
    },
  },
  {
    slug: "girassol-e-margarida",
    name: "Girassol e margarida",
    flowerSlugs: ["girassol", "margarida"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Amarelo e branco em formas abertas: é a combinação de alegria mais direta que existe. O girassol domina por tamanho e a margarida ocupa os vazios e suaviza o contraste.",
    tip: "Girassóis são pesados e cheios de água na haste; transporte em recipiente firme e com suporte.",
    seo: {
      title: "Girassol e margarida: combinação alegre",
      description:
        "Por que girassol e margarida combinam, quando usar essa dupla e como sustentar os girassóis no arranjo.",
    },
  },
  {
    slug: "buganvilha-e-hibisco",
    name: "Buganvilha e hibisco",
    flowerSlugs: ["buganvilha", "hibisco"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Duas espécies tropicais de cor saturada, típicas de jardins do Brasil. Emprestam à composição um registro solar e informal, adequado a ambientes externos, festas ao ar livre e decoração de clima quente.",
    tip: "As duas duram pouco após o corte; quando possível, use em vaso ou decoração montada no local.",
    seo: {
      title: "Buganvilha e hibisco: combinação tropical",
      description:
        "Como combinar buganvilha e hibisco, por que são flores de externo e o que fazer para prolongar a durabilidade.",
    },
  },
  {
    slug: "peonia-e-lirio-da-paz",
    name: "Peônia e lírio-da-paz",
    flowerSlugs: ["peonia", "lirio-da-paz"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Volume da peônia mais elegância estreita do lírio-da-paz: um contraste de formas que funciona bem em tons claros. É uma escolha recorrente para ambientes internos e composições de mesa.",
    tip: "Tons branco, creme e rosa-claro valorizam o par; vermelho intenso desequilibra as duas.",
    seo: {
      title: "Peônia e lírio-da-paz: combinação elegante",
      description:
        "Por que peônia e lírio-da-paz combinam, paleta que valoriza o par e cuidados com o ar vascular do lírio-da-paz.",
    },
  },
  {
    slug: "iris-e-lavanda",
    name: "Íris e lavanda",
    flowerSlugs: ["iris", "lavanda"],
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Família de tons frios em alturas diferentes: a íris se ergue e a lavanda preenche a base com textura fina. É uma combinação de leitura mais contida, boa para gestos de respeito e reconhecimento.",
    tip: "A íris é sensível ao calor; mantenha a composição longe de sol direto e de fontes de calor.",
    seo: {
      title: "Íris e lavanda: combinação de tons frios",
      description:
        "Como combinar íris e lavanda, quando escolher tons frios e o que observar na conservação da íris.",
    },
  },
];
