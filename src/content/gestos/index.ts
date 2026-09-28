import type { Gesto } from "@/lib/types";

/**
 * Camada de intenções — a porta de entrada do site.
 * O leitor não chega perguntando "que espécie é essa?", ele chega dizendo
 * o que quer dizer. Estes textos escrevem essa abertura.
 */
export const gestos: Gesto[] = [
  {
    slug: "conquistar",
    name: "Conquistar",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores para conquistar alguém — o gesto certo na primeira vez",
      description:
        "Como usar flores para conquistar sem assustar: escolha, quantidade, momento e o que falar. Flores para aquele 'olá' que pode virar história.",
    },
    hook: "Todo amor começou com um “olá” corajoso.",
    description: [
      "Existe um momento em que você já sabe. Ela passa, conversa, ri — e no fim do dia você ainda pensa nela. A flor, nesse instante, não é romantismo de filme: é um meio honesto de dizer que você reparou, que valeu a pena, que quer mais. Antes da palavra vem o gesto, e é o gesto que abre a conversa.",
      "A primeira flor precisa ser pequena o bastante para não pesar. Um buquê enorme com três semanas de história inventada assusta mais do que encanta — a pessoa ainda não sabe o que é você. Prefira algo singelo que caiba na mão, escolhido com gosto, com um cartão de uma ou duas frases. O que impressiona aqui não é tamanho: é ter notado qual é a flor dela.",
      "E depois? Depois você fala. A flor não pede nada em troca, não cobra resposta e não substitui a sua frase. Ela só deixa o silêncio um pouco menos desconfortável — e é nesse meio-termo que as histórias começam.",
    ],
    guidance: [
      "Comece discreto: uma flor ou um pequeno buquê, nunca uma arara de aparência noivado.",
      "Escolha pelo que ela já falou que gosta — ou, se não souber, uma flor com perfume e sem exagero de cor.",
      "Entregue com a mão, com um cartão curto assinado. Deixar na portaria funciona só nos filmes.",
      "Tenha uma frase pronta para não travar: diga o que sente em uma linha e deixe a flor falar o resto.",
      "Se a resposta não for recíproca, agradeça e recue com elegância — flores não são argumento, são abertura.",
    ],
    flowerSlugs: ["freesia", "margarida", "jasmim", "violeta", "tulipa"],
    meaningSlugs: ["admiracao", "carinho"],
    guideSlugs: ["como-escolher-flores-para-presentear", "o-que-e-floriografia"],
  },
  {
    slug: "declarar",
    name: "Declarar",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores para declarar amor — como dizer te amo pela primeira vez",
      description:
        "Flores para a primeira declaração: quantas rosas, que cor, quando entregar e o que dizer junto. O te amo mais bonito é o que vem com intenção.",
    },
    hook: "A primeira vez que “eu te amo” sai — ou é dito em silêncio.",
    description: [
      "Declarar é o gesto mais antigo e o mais temido. Você sabe exatamente o que quer dizer e nenhuma palavra parece grande o suficiente — por isso tantas pessoas escolhem uma flor para dizer o que a boca ainda não conseguiu. A rosa vermelha carrega séculos de gente que também travou na hora H, e isso é confortador: você não é o primeiro a precisar de intermediária.",
      "Escolha a flor de acordo com o que vocês são, não de acordo com um manual. Entre duas pessoas discretas, um buquê imponente no meio da rua vira teatro — e teatro no dia errado derruba a declaração. Onde um quer privacidade, o outro quer delicadeza; onde há brincadeira entre vocês, uma flor descontraída diz melhor eu te amo do que trinta rosas em caixa de vidro.",
      "A flor prepara o terreno, mas a frase precisa ser sua, com suas palavras, no seu tom. Não existe cor para ela não perceber o que está acontecendo — existe a hora certa, o olho no olho e a coragem de terminar a frase. A flor está lá para, quando você travar, ainda houver algo bonito na mesa.",
    ],
    guidance: [
      "Diga primeiro com palavras e entregue a flor em seguida — não o contrário, senão ela fica tentando adivinhar.",
      "Se vocês já têm história, uma flor compartilhada (a que ela citou uma vez) vale mais que a mais cara.",
      "Leve em mão e escolha um momento a sós; declaração em público só funciona quando já existe certeza mútua.",
      "Se houver dúvida sobre quantas rosas, comece com uma ou três — o número diz menos do que a frase que vem junto.",
      "Escreva no cartão o que você não vai ter coragem de falar: ela vai reler depois.",
    ],
    flowerSlugs: ["rosa", "peonia", "passiflora", "jasmim", "cerejeira"],
    meaningSlugs: ["amor", "admiracao"],
    guideSlugs: ["quantas-rosas-dar", "diferenca-entre-rosa-vermelha-e-rosa-cor-de-rosa"],
  },
  {
    slug: "pedir-desculpas",
    name: "Pedir desculpas",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores para pedir desculpas — o buquê que abre a conversa",
      description:
        "Quando pedir desculpas com flores funciona e quando não funciona: escolha da flor, momento, cartão e o que falar depois do me perdoa.",
    },
    hook: "Desculpas de verdade não entram em grito — entram em silêncio.",
    description: [
      "Feriu, falou demais, ficou calado quando deveria ter falado. A primeira regra do pedido de desculpas é a mais desconfortável: a flor não substitui a frase. Você precisa dizer, com clareza, o que fez e por que aquilo não se repete. Sem isso, o buquê vira atalho — e gente grande percebe atalho.",
      "A flor entra em seguida, como gesto de cuidado e não de compra. Ela diz que você teve tempo de pensar, que a relação valeu a caminhada até a floricultura, que a porta continua aberta. Nesse contexto, menos é mais: um buquê sereno, de cores suaves, sem ar de celebração. Grande demais parece tentativa de encobrir o erro com espetáculo.",
      "E respeite o tempo da outra pessoa. Nem sempre a flor será aceita no mesmo dia, e tudo bem — às vezes ela é guardada, secada e olhada depois, quando a raiva passar. Peça desculpas, entregue, não cobre reação. O que constrói confiança de novo não é o buquê: é a mudança de comportamento que vem na semana seguinte.",
    ],
    guidance: [
      "Diga as palavras antes de entregar a flor — nunca entregue um buquê no lugar do pedido.",
      "Escolha tons suaves e discretos; vermelho intenso demais aqui parece pressão, não arrependimento.",
      "Leve em mão, sem plateia e sem testemunhas: cena pública transforma pedido em cobrança.",
      "Escreva no cartão o compromisso concreto, não o adjetivo: vou chegar no horário vale mais que sou um bobo.",
      "Se a pessoa precisar de espaço, deixe a flor com um bilhete e volte depois. Respeito também é prova de mudança.",
    ],
    flowerSlugs: ["lirio-da-paz", "violeta", "freesia", "margarida"],
    meaningSlugs: ["perdao", "carinho"],
    occasionSlug: "pedido-de-desculpas",
    guideSlugs: ["como-escolher-flores-para-presentear"],
  },
  {
    slug: "reatar",
    name: "Reatar",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores para reatar um amor — o recomeço sem pressa",
      description:
        "Como usar flores para reatar depois do silêncio: o que mandar, o que não mandar e por que a flor certa mostra memória, não arrependimento de véspera.",
    },
    hook: "Voltar é mais difícil do que partir. Uma flor abre a porta — só isso.",
    description: [
      "Tempo passou, o orgulho ficou, e sobrou aquela vontade morna de recomeçar. Reatar é o gesto mais delicado da floricultura: traz memória de vocês dois e, ao mesmo tempo, não deve parecer que nada aconteceu. A flor certa não grita volta, ela sussurra ainda lembro — e essa diferença é o que faz o gesto não ser constrangedor.",
      "O que não fazer: a arara gigante depois de meses de silêncio, a mensagem cobrando resposta, a flor com intenção de perder a disputa. Reatar começa devagar. Uma flor que marque um momento de vocês vale mais que qualquer combo com pela metade — porque diz que você carregou aquilo por dentro todo esse tempo.",
      "Depois da flor vem a conversa honesta: o que mudou, o que você aprendeu, do que ela precisa para confiar de novo. A flor não resolve o passado — ela abre a janela para vocês olharem juntos. E se a resposta for não, também houve beleza em tentar com elegância.",
    ],
    guidance: [
      "Escolha uma flor com significado para a história de vocês, não a mais cara da vitrine.",
      "Mande uma só ou um arranjo pequeno; recomeço pede leveza, não espetáculo.",
      "Não acompanhe a flor com cobrança: sem viu minha mensagem? nem expectativa de resposta imediata.",
      "Assine o cartão com seu nome e sem drama — é um recomeço, não um desabafo.",
      "Tenha um plano para depois: proposta de conversa, café, um horário. Flor sozinha vira saudade, não reencontro.",
    ],
    flowerSlugs: ["rosa", "cerejeira", "hortensia", "jasmim"],
    meaningSlugs: ["saudade", "perdao", "esperanca"],
    guideSlugs: ["quantas-rosas-dar", "como-cuidar-de-flores-cortadas"],
  },
  {
    slug: "pedir-a-mao",
    name: "Pedir a mão",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores para pedir a mão — antes do anel, o gesto",
      description:
        "Que flores usar no pedido de casamento: rosas, peônias, orquídeas, como combinar com o anel, transporte e o momento certo.",
    },
    hook: "O “sim” começa bem antes do anel.",
    description: [
      "O pedido de casamento tem data, luz e testemunhas — mas começa com um gesto silencioso: alguém escolhe uma flor para dizer pensa comigo no resto da vida. É o momento em que o romântico deixa de ser metáfora e vira orçamento, transporte e plano B de chuva. E tudo bem: planejar também é desejo.",
      "A flor do pedido deve combinar com ela, não com um padrão de internet. Se ela nunca gostou de rosa, a rosa não fica bonita por ser tradicional. Peônias, orquídeas e magnólias têm aparecido cada vez mais nesse lugar porque dizem a mesma coisa com outro idioma — e idioma dela é o que importa. Considere também o anel: flor e joia na mesma mão podem competir; muita gente prefere a flor no lugar, o anel depois, ou o contrário.",
      "Transporte é meia metade do gesto. Flor cortada em dia quente, caixa apertada, caminhão com ar condicionado no alto — já viu como termina. Monte com folga: entregue com calma, sem pressa, de olho nela e não na cena. O que a pessoa lembra depois não é a marca da floricultura, é a cara de quem estava de joelhos.",
    ],
    guidance: [
      "Descubra o gosto dela antes: a flor precisa ser dela, não do catálogo de matrimônio.",
      "Pense no anel e na flor juntos: quem segura o que, em que ordem, e onde fica a caixinha.",
      "Calcule transporte, horário e temperatura — flores grandes viajam em pé, sempre.",
      "Tenha plano B para chuva e para o lugar lotado; imprevisto tira o foco de quem vai perguntar.",
      "Leve um cartão escrito antes: no susto, a letra sai torta, mas a frase fica para sempre.",
    ],
    flowerSlugs: ["rosa", "peonia", "orquidea", "magnolia"],
    meaningSlugs: ["amor", "esperanca"],
    occasionSlug: "casamento",
    guideSlugs: ["quantas-rosas-dar", "significado-da-rosa-branca"],
  },
  {
    slug: "sem-ocasiao",
    name: "Presentear sem ocasião",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Flores sem ocasião — o presente de terça-feira",
      description:
        "Ideias de flores para presentear sem motivo: o buquê de terça-feira, o que escolher, com que frequência mandar e como escrever o cartão.",
    },
    hook: "O presente mais romântico é o que não tem data.",
    description: [
      "Domingo das Mães, dia dos Namorados, aniversário: existem datas demais para quem quer dizer algo. O gesto mais antigo, porém, é o que não tem data nenhuma — a flor levada numa quarta-feira por nada, pelo simples fato de você ter passado pela esquina e lembrado dela. Não há algoritmo que supere isso.",
      "Flores sem ocasião quebram a lógica de que carinho é obrigação anual. Elas transformam uma semana comum em memória: o buquê que chegou quando o trabalho estava impossível, a flor que ficou no vaso até secar porque ninguém jogou fora. É aí que mora o tipo de amor que as pessoas acham que não existe mais.",
      "Escolha sem medo de ser simples. Um punhado de margaridas no mercado, um girassol comprado na volta do trabalho, uma tulipa em vez de trinta — a frequência vale mais que a grandiosidade. Escreva duas linhas no cartão: para quê, por que, quem. Esse pedacinho de papel é o que ela vai guardar na gaveta quando a flor já tiver ido embora.",
    ],
    guidance: [
      "Comece devagar: uma flor ou um buquê pequeno, repetido com constância, surte mais efeito que um espetáculo anual.",
      "Alterne tipos e cores ao longo do tempo para não virar rotina mecânica.",
      "Cartão curto e específico: pensei em você hoje vale mais que um soneto pronto da internet.",
      "Se ela gosta de flores em vaso, leve raiz e folha — dura mais e ocupa o lugar de uma almofada que ninguém usa.",
      "Nunca presenteie com flor para depois cobrar algo em troca: o mágico aqui é não ter motivo nenhum.",
    ],
    flowerSlugs: ["girassol", "tulipa", "margarida", "buganvilha"],
    meaningSlugs: ["alegria", "carinho", "gratidao"],
    guideSlugs: ["guia-das-flores-perfumadas", "como-escolher-flores-para-presentear"],
  },
];
