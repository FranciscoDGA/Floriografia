import type { Meaning } from "@/lib/types";

/**
 * Taxonomia de significados.
 *
 * IMPORTANT: significados são tradições culturais, não constantes universais.
 * O campo `caveat` de cada item é obrigatório para manter isso explícito no site.
 */
export const meanings: Meaning[] = [
  {
    slug: "amor",
    name: "Amor",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Amor é o significado mais procurado da floriografia. Abrange desde a paixão intensa, ligada sobretudo às flores vermelhas, até o afeto doméstico e o carinho cotidiano, que aparece em tons rosa, creme e branco. A intensidade da cor costuma funcionar como um termômetro da mensagem: quanto mais saturada, mais declaratória a flor.",
    caveat:
      "O que significa 'amor' em uma flor varia conforme a tradição. A floriografia ocidental moderna consolidou-se no século XIX na Europa; outras culturas atribuem leituras próprias às mesmas flores.",
    seo: {
      title: "Flores que representam amor: guia de escolha",
      description:
        "Quais flores representam amor, diferença entre paixão, carinho e admiração, e como escolher a flor certa para cada nível de afeto.",
    },
  },
  {
    slug: "amizade",
    name: "Amizade",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Flores de amizade costumam ser as de tons alegres e forma aberta: margaridas, girassóis, narcisos e flores em amarelo ou laranja. São gestos leves, sem a carga declaratória do vermelho, ideais para aniversários, agradecimentos e despedidas.",
    caveat:
      "O amarelo já teve leituras negativas em algumas tradições europeias (ciúmes, despedida), mas no Brasil predomina a leitura de alegria e amizade.",
    seo: {
      title: "Flores que representam amizade",
      description:
        "Flores que representam amizade, por que o amarelo domina essa escolha e ideias de gestos para amigos.",
    },
  },
  {
    slug: "gratidao",
    name: "Gratidão",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Flores de gratidão aparecem em agradecimentos pessoais e profissionais: ao professor, à mãe, a quem prestou ajuda. Tons rosa, creme e lavanda, em composições discretas, costumam transmitir reconhecimento sem formalidade excessiva.",
    caveat: "É um significado construído mais pelo contexto do gesto do que por uma flor única e universalmente aceita.",
    seo: {
      title: "Flores de gratidão: para agradecer com flor",
      description:
        "Quais flores usar para agradecer, como escolher entre discreto e elaborado, e ideias por tipo de relação.",
    },
  },
  {
    slug: "saudade",
    name: "Saudade",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "A saudade é um afeto tipicamente brasileiro e português, difícil de traduzir: ausência combinada com afeto. Flores para saudade tendem a ser de tom suave — violetas, lavandas, flores secas e buquês desbotados — que acompanham lembranças e distâncias.",
    caveat:
      "Não existe um equivalente exato em outras línguas; a escolha floral para 'saudade' é mais uma adaptação cultural do que uma regra de floriografia clássica.",
    seo: {
      title: "Flores que representam saudade",
      description:
        "Flores para saudade e distância: gestos que comunicam lembrança, e por que flores secas e tons suaves funcionam.",
    },
  },
  {
    slug: "admiracao",
    name: "Admiração",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Admiração é o meio-termo entre o afeto e o interesse: reconhecimento por qualidades, sem necessariamente declarar amor. Tulipas, peônias e tons rosa-claro costumam cobrir bem esse registro.",
    caveat: "Depende do grau de intimidade: em contextos profissionais, admiração pede composições mais contidas.",
    seo: {
      title: "Flores de admiração: reconhecer sem declarar",
      description:
        "Quais flores transmitem admiração, por que são uma escolha segura em relações recentes e como dosar a intensidade.",
    },
  },
  {
    slug: "carinho",
    name: "Carinho",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Carinho é afeto cotidiano: a flor que se dá sem motivo especial. Flores rosa, creme e branco suave, em quantidades simples, comunicam presença e cuidado sem a solenidade de um arranjo formal.",
    caveat: "É o significado mais dependente de contexto — a mesma flor pode ser carinho ou declaração conforme o relacionamento.",
    seo: {
      title: "Flores de carinho para o dia a dia",
      description:
        "Flores que transmitem carinho, combinações simples para presente espontâneo e por que menos costuma ser mais.",
    },
  },
  {
    slug: "perdao",
    name: "Perdão",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Flores de perdão aparecem em pedidos de desculpas: tons brancos, creme e azul suave, em composições discretas e sem excesso. A sobriedade ajuda — um arranjo grandioso pode soar como tentativa de compensar com volume.",
    caveat: "Não há uma flor universal de perdão; a escolha mais segura combina discrição com a preferência conhecida da pessoa.",
    seo: {
      title: "Flores para pedir desculpas",
      description:
        "Quais flores usar em um pedido de desculpas, o que evitar em tamanho e cor, e como combinar flor e mensagem.",
    },
  },
  {
    slug: "esperanca",
    name: "Esperança",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Esperança combina com tons claros e frescos: branco, azul claro, lilás e verdes. É o registro adequado para recuperações, começos, mudanças de fase e gestos de apoio em momentos difíceis.",
    caveat: "Aznul claro é frequentemente lido como serenidade; a esperança costuma vir mais do conjunto do arranjo do que de uma espécie isolada.",
    seo: {
      title: "Flores de esperança: gestos de apoio e recomeço",
      description:
        "Flores que comunicam esperança, combinações para momentos delicados e o que observar antes de enviar.",
    },
  },
  {
    slug: "alegria",
    name: "Alegria",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Alegria é o significado das flores luminosas: amarelo, laranja e formas abertas como girassol, dália e margarida. É a escolha natural para aniversários, conquistas e para levantar o humor de alguém.",
    caveat: "A cor amarela ainda carrega leituras antigas de ciúmes em parte da Europa, mas no Brasil predomina a leitura de alegria.",
    seo: {
      title: "Flores que trazem alegria",
      description:
        "Flores alegres para presentear: por que o amarelo domina, quais espécies usar e em que ocasiões.",
    },
  },
  {
    slug: "luto",
    name: "Luto e pesar",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Em despedidas e condolências, as flores funcionam como gesto de respeito e presença. Branco é a escolha mais comum no Brasil e em boa parte da Europa; composições contidas e sem perfume intenso costumam ser mais adequadas.",
    caveat:
      "O branco é a cor do luto em muitas culturas ocidentais e asiáticas, mas é a cor da celebração em outras — inclusive em partes da Índia. O contexto cultural do destinatário importa.",
    seo: {
      title: "Flores para condolências: o que enviar",
      description:
        "Flores para velório e condolências, por que o branco predomina, o que evitar e alternativas ao buquê tradicional.",
    },
  },
];
