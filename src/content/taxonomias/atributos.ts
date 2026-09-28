import type { Aroma, Characteristic, Season } from "@/lib/types";

/** Estações consideram o hemisfério sul (Brasil). */
export const seasons: Season[] = [
  {
    slug: "verao",
    name: "Verão",
    period: "dezembro a março (hemisfério sul)",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Época de floração mais ampla no Brasil: hibisco, buganvilha, dália, girassol e muitas tropicais estão no auge. Em vaso, o desafio prático é a evaperação — a rega passa a ser o fator decisivo.",
    seo: {
      title: "Flores de verão: o que floresce e como cuidar",
      description:
        "Quais flores florescem no verão no Brasil, principais espécies e cuidados de rega e calor no período.",
    },
  },
  {
    slug: "outono",
    name: "Outono",
    period: "março a junho (hemisfério sul)",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Període de transição, com florações que se encerram e outras que começam. Hortênsia, camélia e parte das astromélias aparecem bem; é também a época de folhagens e estruturas em arranjos.",
    seo: {
      title: "Flores de outono no Brasil",
      description:
        "Quais flores aparecem no outono no Brasil, como a transição afeta a disponibilidade e o cuidado com plantas em vaso.",
    },
  },
  {
    slug: "inverno",
    name: "Inverno",
    period: "junho a setembro (hemisfério sul)",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Estação mais fria e, no Brasil, com floração mais restrita ao Sul e Sudeste em altitude. Camélia, algumas rosas e espécies de clima temperado rendem melhor; no Norte e Nordeste a disponibilidade muda pouco.",
    seo: {
      title: "Flores de inverno: o que floresce no frio",
      description:
        "Flores de inverno no Brasil, diferença entre regiões e o que observar na disponibilidade na floricultura.",
    },
  },
  {
    slug: "primavera",
    name: "Primavera",
    period: "setembro a dezembro (hemisfério sul)",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Retomada da floração: tulipa, narciso, jacinto, peônia e parte das espécies temperadas aparecem com mais força. É também a época de replantio e de poda de muitas arbustivas.",
    seo: {
      title: "Flores de primavera no Brasil",
      description:
        "Quais flores florescem na primavera no Brasil, espécies de clima temperado e cuidados de replantio na estação.",
    },
  },
];

export const aromas: Aroma[] = [
  {
    slug: "floral",
    name: "Floral",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Aroma característico de pétala: o cheiro que se associa instintivamente a 'flor'.",
    seo: {
      title: "Aroma floral: o que é",
      description: "Definição do aroma floral e exemplos de flores que o apresentam.",
    },
  },
  {
    slug: "doce",
    name: "Doce",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Perfume adocicado, próximo a mel, baunilha ou açúcar queimado, comum em flores noturnas.",
    seo: {
      title: "Aroma doce em flores",
      description: "Flores de perfume doce, por que algumas intensificam à noite e como escolher pela fragrância.",
    },
  },
  {
    slug: "citrico",
    name: "Cítrico",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Frescor próximo a limão ou laranja, mais leve e menos 'floral' que o perfume clássico.",
    seo: {
      title: "Aroma cítrico em flores",
      description: "Flores com perfume cítrico, características desse aroma e quando prefiri-lo.",
    },
  },
  {
    slug: "herbaceo",
    name: "Herbáceo",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Cheiro verde, de folha e haste, próximo a ervas — presente em lavandas e plantas aromáticas.",
    seo: {
      title: "Aroma herbáceo em flores",
      description: "Flores de aroma herbáceo, plantas aromáticas associadas e uso em arranjos perfumados.",
    },
  },
  {
    slug: "especiado",
    name: "Especiado",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Perfume quente e marcante, próximo a cravo, pimenta ou canela, com forte presença em ambiente.",
    seo: {
      title: "Aroma especiado em flores",
      description: "Flores de perfume especiado, intensidade do aroma e cuidados para ambientes pequenos.",
    },
  },
  {
    slug: "frutado",
    name: "Frutado",
    status: "published",
    updatedAt: "2026-09-27",
    description: "Matéria-fruta no perfume: pêssego, maçã ou uva, mais frequente em algumas orquídeas e peônias.",
    seo: {
      title: "Aroma frutado em flores",
      description: "Flores com toque frutado no perfume, exemplos e como descrever o aroma em um arranjo.",
    },
  },
];

export const characteristics: Characteristic[] = [
  {
    slug: "perfumada",
    name: "Flores perfumadas",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Flores cujo perfume é uma das razões da escolha: jasmim, gardenia, rosas perfumadas, tuberosa, freesia e lavanda. Em ambientes pequenos ou compartilhados, vale checar antes — perfume forte pode ser incômodo ou alergênico.",
    seo: {
      title: "Flores perfumadas: lista e como escolher",
      description:
        "Quais flores têm perfume forte, por que o perfume varia com clima e horário, e como escolher sem incomodar.",
    },
  },
  {
    slug: "resistente",
    name: "Flores resistentes",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Espécies que suportam melhor transporte, calor, manuseio e falta de água por curtos períodos: cravo, girassol, buganvilha e gerânio estão entre as mais citadas. São a escolha prática quando a logística é incerta.",
    seo: {
      title: "Flores resistentes: para transporte e calor",
      description:
        "Quais flores são mais resistentes, o que exatamente elas suportam e por que importam na hora do envio.",
    },
  },
  {
    slug: "delicada",
    name: "Flores delicadas",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Pétalas finas e estruturas frágeis que exigem cuidado: peônia, ranúnculo, tulipa e amapola. Belíssimas em uso, mas sensíveis a calor, aperto e movimentação — exigem transporte cuidadoso e água imediata.",
    seo: {
      title: "Flores delicadas: cuidados na escolha",
      description:
        "Quais flores são delicadas, o que as torna frágeis e como transportar e conservá-las sem perder pétalas.",
    },
  },
  {
    slug: "para-internos",
    name: "Para ambiente interno",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Plantas e flores que se adaptam a estar dentro de casa: orquídeas, lírio-da-paz, violeta, antúrio e begônias, desde que recebam luz indireta suficiente e rega adequada ao ambiente fechado.",
    seo: {
      title: "Flores para ambiente interno",
      description:
        "Quais flores ficam bem dentro de casa, exigências de luz e rega em ambiente fechado e erros mais comuns.",
    },
  },
  {
    slug: "para-externos",
    name: "Para ambiente externo",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Espécies que precisam de sol e ar para se desenvolver bem: girassol, hibisco, buganvilha, gerânio e dália. Em vaso, exigem substrato drenante e monitoramento da rega.",
    seo: {
      title: "Flores para ambiente externo",
      description:
        "Quais flores plantar em externo, exigências de sol e drenagem e combinações para varanda e jardim.",
    },
  },
  {
    slug: "tropical",
    name: "Flores tropicais",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Nativas de regiões quentes e úmidas, com formas e cores marcantes: hibisco, strelitzia, antúrio, plumeria, buganvilha e vitória-régia. Gostam de calor e umidade e sofrem com geada.",
    seo: {
      title: "Flores tropicais brasileiras e de cultura",
      description:
        "Exemplos de flores tropicais, exigências de calor e umidade e por que dominam jardins do Brasil.",
    },
  },
  {
    slug: "para-calor",
    name: "Tolerantes ao calor",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Espécies que seguem bem em períodos quentes sem perder desempenho: buganvilha, hibisco, girassol, lavanda e gerânio. Importantes em verão e em cidades com alta insolação.",
    seo: {
      title: "Flores tolerantes ao calor",
      description:
        "Quais flores aguentam calor e sol intenso, o que observar na rega no verão e espécies para quintais quentes.",
    },
  },
  {
    slug: "para-sombra",
    name: "Tolerantes à sombra",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Plantas que florescem com luz indireta ou meia-sombra: hortênsia, lírio-da-paz, violeta, begônia e camélia. Sol direto costuma queimar a folha e ressecar o substrato dessas espécies.",
    seo: {
      title: "Flores para sombra e meia-sombra",
      description:
        "Quais flores crescem na sombra, o que a luz insuficiente causa e como posicionar em casa ou varanda.",
    },
  },
  {
    slug: "toxica",
    name: "Plantas tóxicas",
    status: "published",
    updatedAt: "2026-09-27",
    description:
      "Espécies cujas partes podem causar irritação ou intoxicação se ingeridas por crianças ou animais — alguns lírios, hortênsias, oleandro, amapola e oleaginosas comuns. Não é motivo para evitar, mas para posicionar com consciência.",
    caveat:
      "A toxicidade varia por espécie, parte da planta e quantidade. Em caso de ingestão, procure orientação profissional ou a central de intoxicações.",
    seo: {
      title: "Flores tóxicas para crianças e animais",
      description:
        "Quais flores e plantas de decoração são tóxicas, para quem, e como posicioná-las com segurança em casa.",
    },
  },
];
