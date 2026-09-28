import type { Article } from "@/lib/types";

/**
 * Artigos editoriais da Floriografia (parte 2 de 4).
 *
 * Significados citados aqui são tradições culturais, não fatos universais.
 * Slugs de `related` devem existir em `src/content/taxonomias`.
 */
export const articles: Article[] = [
{
    slug: "guia-das-flores-perfumadas",
    name: "Guia das flores perfumadas",
    title: "Guia das flores perfumadas",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Guia das flores perfumadas",
      description:
        "Perfume é escolha, não enfeite: veja quais flores enchem a casa de cheiro, qual aroma combina em cada ambiente e o que preserva o perfume do buquê.",
    },
    excerpt:
      "O aroma decide a visita antes da cor. Quais flores perfumam mais, qual cheiro combina em cada ambiente, como presentear quem tem o nariz sensível e o que segura o perfume no vaso.",
    sections: [
      {
        heading: "O perfume chega antes da cor",
        paragraphs: [
          "Quando você atravessa a porta com o maço na mão, o primeiro sinal que chega ao outro cômodo não é a cor: é o cheiro. Antes de alguém alcançar a mesa para ver o tom das pétalas, o perfume já subiu pelo hall, já encostou na parede, já contou que ali veio flor de verdade. É por isso que o aroma merece a mesma atenção que a cor: ele continua presente na sala muito depois que os olhos se desinteressaram do arranjo.",
          "Perfume é também o atributo mais pessoal de uma flor, e a escolha dele depende de quem vai receber. A mesma haste que enche um corredor passa despercebida em sala grande; o jasmim que anima uma visita pode pesar para quem tem o nariz sensível. Antes de decidir, imagine o espaço onde o buquê vai ficar e as pessoas que passam por ali: em quarto pequeno, duas hastes já bastam; em sala ampla, o cheiro tem ar para se espalhar sem roubar a conversa.",
        ],
      },
      {
        heading: "Flores que enchem a casa de cheiro",
        paragraphs: [
          "Há flores que entram na casa antes de você. O jasmim é o caso mais citado: em poucas hastes ele ocupa o ambiente inteiro e fica marcado na memória de quem chega. A gardenia e a plumeria fazem o mesmo serviço, com perfume doce e pesado que pede espaço e ar em volta. A lavanda trabalha em outro registro, menos adocicada e mais limpa, e acompanha o dia sem se impor a quem está lendo ou conversando.",
          "A intensidade muda com o calor e com o ponto da flor. Haste já aberta perfuma mais que botão fechado, e ambiente fechado concentra o aroma: por isso um buquê discreto pode parecer forte dentro de um escritório. Na dúvida, comece com poucas hastes e sinta o ar antes de acrescentar mais. É muito mais simples somar depois do que conviver com um perfume que já não dá para tirar do cômodo.",
        ],
        list: [
          "Jasmim: perfume forte, ocupa a sala inteira",
          "Gardenia: doce e marcante, pede ambiente ventilado",
          "Plumeria: aroma intenso, comum em arranjos tropicais",
          "Lavanda: cheiro limpo, bem recebido no quarto",
          "Freesia: perfume médio, boa na mesa de trabalho",
          "Violeta: aroma suave, bonita em vaso pequeno",
          "Magnólia: perfume moderado, elegante em poucas hastes",
        ],
      },
      {
        heading: "Aromas leves que acompanham sem interromper",
        paragraphs: [
          "Existe outro grupo de flores que trabalha em voz baixa. A violeta, a freesia e muitas rosas de perfume suave decoram sem invadir a conversa, e é por isso que aparecem com tanta frequência em mesas longas, onde muita gente se senta junto. Elas deixam o cheiro no ar aos poucos, como quem chega sem cumprimentar todo mundo de uma vez, e quem se aproxima percebe quando se inclina para pegar o sal.",
          "Essa é a escolha certa quando o perfume não pode ser o protagonista: almoço de família, mesa de trabalho, sala compartilhada com pessoas sensíveis a cheiro. Também funciona quando a composição é grande e tem várias espécies juntas, porque hastes perfumadas demais no mesmo vaso se somam e o resultado sai mais forte do que a soma das partes. Pouco, bem escolhido, costuma perfumar mais que cheio, e é o arranjo que aguenta a refeição inteira sem pedir desculpas pelo cheiro.",
        ],
      },
      {
        heading: "Quando vale uma flor silenciosa",
        paragraphs: [
          "Há ocasiões em que a flor deve ficar quieta. Em casa com incenso aceso, velas aromáticas ou café passando na mesma mesa, qualquer aroma compete e o conjunto vira barulho. Quando alguém não lida bem com cheiro forte, ou quando você não sabe como é a casa de quem vai receber, uma flor de perfume discreto faz o serviço sem arriscar o gesto. Escolher silêncio também é escolher, e não é uma escolha inferior.",
          "Vale dizer isso com todas as letras: buquê sem perfume nenhum é presente completo. Existem flores quase sem cheiro que compensam na cor, no formato e na duração, e quem prefere essa companhia não está sendo exigente. O erro não é dar flor calada; o erro é dar aroma pesado para quem vai passar a tarde inteira ao lado do vaso sem conseguir abrir a janela. Melhor uma flor bonita e calada do que uma flor admirada de longe, com o nariz torcido.",
        ],
      },
      {
        heading: "Cada ambiente pede o seu volume",
        paragraphs: [
          "O espaço define boa parte da escolha. Em sala ampla e bem ventilada, flores intensas se espalham sem incomodar ninguém. Em quarto, o perfume forte pode atrapalhar o descanso de quem é sensível, e o cheiro de madrugada pesa mais que no meio da tarde. Na mesa de jantar, aromas carregados disputam atenção com a comida e cansam ao longo da refeição, mesmo quando foram bem-vindos nos primeiros minutos. A janela aberta ajuda, mas não resolve um buquê grande em ambiente fechado.",
          "Para presente, o ambiente de quem recebe é a referência, e não o seu gosto. Se você não conhece a casa, o quarto ou o escritório dela, o perfume moderado costuma ser a escolha mais segura: ainda agrada quem gosta de flor perfumada e não pesa em quem tem restrição. Quando conhecer o espaço, aí sim você pode arriscar um jasmim inteiro na porta da sala. Escolher pelo meio não é falta de coragem: é cuidado com quem vai dormir naquela casa.",
        ],
        list: [
          "Sala grande: flores de aroma intenso funcionam bem",
          "Quarto: prefira perfume leve ou nenhuma fragrância",
          "Mesa de jantar: evite cheiro que disputa com a comida",
          "Escritório: opte por composições discretas",
          "Casa que não conhece: escolha perfume moderado",
          "Ambiente pequeno e fechado: reduza o número de hastes",
        ],
      },
      {
        heading: "O cheiro muda conforme o dia passa",
        paragraphs: [
          "O perfume de um buquê não é fixo. Botões fechados liberam aroma conforme abrem, de forma gradual, e por isso um arranjo pode parecer discreto na hora da entrega e perfumar a casa toda no dia seguinte. O calor também pesa: em dia quente e em cômodo fechado, o mesmo aroma se apresenta com mais força. Quem escolhe pela manhã precisa lembrar que a noite vai trazer outro volume, e vale checar o buquê de novo quando a casa esfria e o ar fica parado.",
          "Na prática, isso muda pequenas decisões. Coloque o vaso onde a gente realmente passa, perto da mesa ou da porta, e não no canto bonito que ninguém visita. Abra a casa antes de receber as pessoas, para o perfume chegar ao ar sem pressa. Se o cheiro começar a incomodar no fim do dia, afaste o vaso da cama ou separe uma ou duas hastes para outro cômodo. Mover o vaso de lugar já muda o ar da sala.",
        ],
      },
      {
        heading: "O que segura o perfume no vaso",
        paragraphs: [
          "O aroma de uma flor cortada é frágil e depende de cuidados simples. Água limpa, ambiente arejado e calor excessivo fazem diferença no que a flor consegue sustentar de cheiro ao longo dos dias. Flores colhidas no auge da abertura costumam perfumar mais, e o perfume aparece primeiro nas pétalas que já se abriram por completo. O que tira o aroma do ar é a flor cansada, não a hora passando.",
          "Também ajuda manter o buquê longe de fontes de calor e de ar seco, trocar a água sempre que ela perder a transparência e remover hastes que amoleceram. Folha submersa encurta a vida das vizinhas e muda o cheiro de todo o arranjo, porque a água fica turva e passa a cheiro de vaso velho. Não é preciso esperar muito para perceber o estrago, nem para consertar: quem troca a água de manhã costuma encontrar o líquido já esbranquiçado.",
        ],
        list: [
          "Troque a água sempre que ela ficar turva",
          "Lave o vaso a cada troca, com atenção ao fundo",
          "Retire folhas que ficarem abaixo da linha da água",
          "Tire hastes macias antes que afetem o resto",
          "Mantenha o vaso longe de sol e de calor",
          "Areje o ambiente sem corrente de ar direta",
          "Separe as hastes perfumadas se o aroma cansar",
        ],
      },
      {
        heading: "A hora de entregar",
        paragraphs: [
          "O perfume também depende do trajeto. Em papel apertado, dentro do carro ou no elevador, a flor respira pouco e chega fechada; ao desembrulhar, o aroma se solta de uma vez e quase sempre surpreende quem estava esperando. Se você puder, leve o maço sem apertar as hastes contra o corpo e evite deixá-lo ao sol no banco do carro antes de tocar a campainha. O papel guarda o cheiro, e o gesto o devolve de uma vez só.",
          "Chegando ao destino, deixe o buquê respirar antes de pôr na mesa: um minuto com o papel aberto em um cômodo ventilado já prepara o ar. Se for presente, escreva duas linhas no bilhete e entregue com a flor na mão, não na porta. O cheiro faz a primeira parte do trabalho, mas quem está ali naquele momento é quem completa o gesto. A flor fica mais bonita quando o ar já chegou ao lugar dela antes das palavras.",
        ],
      },
      {
        heading: "Escolher pelo cheiro é guardar um dia",
        paragraphs: [
          "Na tradição de presentear com flores, diz-se que o cheiro gruda no dia: quem recebe lembra da tarde, do portão, da conversa enquanto o perfume continua ali, no ambiente, sem ninguém precisar citar o assunto. Para muitas culturas, aromas de flores acompanharam cantos, embalagens e leitos justamente por essa capacidade de ficar. Não é uma promessa nem uma regra: é um costume antigo que as pessoas ainda contam umas para as outras.",
          "O conselho prático é pequeno. Escolha um perfume forte e um discreto para compor, perceba o tamanho do lugar onde o buquê vai ficar e pergunte, sem cerimônia, se a pessoa lida bem com aroma. Guarde para o jasmim os momentos em que você quer ser lembrado, e para as hastes caladas os dias em que a companhia basta. Flores perfumadas não são melhor nem pior que as outras: são as que continuam na sala depois que a visita vai embora.",
        ],
      },
    ],
    related: {
      flowers: ["jasmim", "lavanda", "freesia", "gardenia", "plumeria"],
      characteristics: ["perfumada", "delicada", "para-internos"],
      occasions: ["aniversario", "dia-das-maes"],
    },
    faqs: [
      {
        question: "Quais flores perfumadas duram mais?",
        answer:
          "A permanência depende da espécie, do ponto em que a flor foi cortada e dos cuidados depois da compra, e não do tamanho do perfume. Flores de aroma intenso costumam ser procuradas justamente quando se quer marcar a lembrança; para conservar, o que mais pesa é água limpa, vaso lavado e lugar sem calor.",
      },
      {
        question: "Flores perfumadas podem ficar no quarto?",
        answer:
          "Podem, se o aroma não incomodar quem dorme ali. Escolha uma ou duas hastes, mantenha o ambiente arejado e evite buquês fechados perto da cama. Quem tem sensibilidade a cheiros costuma preferir flores de aroma leve ou sem fragrância nenhuma, e a decisão vale conversar antes de surpreender.",
      },
      {
        question: "O perfume das flores seca com o tempo?",
        answer:
          "Sim, o aroma diminui conforme a flor envelhece, e isso varia de espécie para espécie e conforme a conservação. Flores que abrem depois da compra costumam perfumar mais no segundo dia do que na hora da entrega. Guardadas longe do calor e com água limpa, mantêm parte do cheiro por mais tempo.",
      },
      {
        question: "Como presentear quem não gosta de cheiro forte?",
        answer:
          "Prefira hastes de aroma discreto ou flores praticamente silenciosas, e mantenha a composição pequena. Vale perguntar em que ambiente o buquê vai ficar: uma mesa de trabalho pede muito menos perfume que uma sala grande. A intenção nunca está no volume do cheiro, e sim na escolha atenta de quem entrega.",
      },
      {
        question: "Vale misturar flores perfumadas e sem perfume?",
        answer:
          "Vale, e costuma ser o melhor arranjo. Uma flor intensa acompanhada de hastes caladas ganha ar para se espalhar sem saturar o cômodo. O cuidado é não somar várias espécies fortes no mesmo vaso, porque o perfume se multiplica e o resultado sai mais pesado do que parecia na floricultura.",
      },
    ],
  },
{
    slug: "como-cuidar-de-flores-cortadas",
    name: "Como cuidar de flores cortadas",
    title: "Como cuidar de flores cortadas",
    status: "published",
    updatedAt: "2026-09-28",
    seo: {
      title: "Como cuidar de flores cortadas",
      description:
        "Cuidado de flores cortadas passo a passo: preparo das hastes, água limpa, luz e calor, rotina da manhã, fruta ao lado e erros que encurtam o buquê.",
    },
    excerpt:
      "Cuidar de flores cortadas é rotina curta: preparar as hastes, manter água limpa, proteger do calor, afastar a fruta e retirar o que já cedeu. Um gesto diário, sem segredo.",
    sections: [
      {
        heading: "Antes do vaso: o maço na bancada",
        paragraphs: [
          "O buquê não começa no vaso, começa na bancada. Abra o papel sobre a mesa, retire fitas, plásticos e espumas do transporte e olhe cada haste antes de arrumar o conjunto. Folhas que ficariam submersas devem sair na hora, porque é a sujeira na água que mais estraga qualquer arranjo. Poucos minutos de preparo mudam o resultado dos dias seguintes de forma visível, e é o momento de conferir se alguma haste chegou quebrada no caminho.",
          "Tenha a ferramenta à mão e mantenha-a limpa: uma tesoura ou um canivete que corta de forma firme deixa a haste inteira, enquanto lâmina suja e corte esmagado atrapalham a absorção. Se alguma flor já chegou murcha ou com a ponta mole, descarte sem dó antes de colocar no vaso junto com as outras. Uma flor que já desistiu encurta a vida das que ainda estão firmes. Arrumar com calma na bancada é mais rápido do que consertar o estrago depois.",
        ],
        list: [
          "Retire folhas abaixo da linha da água",
          "Recorte as hastes com ferramenta limpa",
          "Descarte fitas, plásticos e espumas do transporte",
          "Lave o vaso antes de reaproveitá-lo",
          "Separe flores já murchas para não contaminar o resto",
          "Confira se alguma ponta chegou dilatada ou seca",
        ],
      },
      {
        heading: "O corte que devolve a sede",
        paragraphs: [
          "Se as flores chegaram com a ponta seca ou dilatada, um corte novo devolve a capacidade de absorver água. Faça isso sem pressa e com a lâmina limpa, num gesto firme e único; cortes irregulares, rasgados ou feitos com a unha danificam a haste e atrapalham mais do que ajudam. O corte limpo deixa a ponta exposta e viva, pronta para beber. Essa é a parte do cuidado que ninguém vê depois do arranjo pronto, mas que sustenta todo o resto.",
          "O corte volta a acontecer toda vez que a água for trocada. A ponta que passou horas em água velha envelhece junto com o líquido, e refazer o corte abre o caminho de novo. Não é preciso apressar nem cortar comprimento demais: o que importa é a frescura do ponto. Quem troca a água e refaz o corte no mesmo gesto não precisa lembrar de voltar depois, e a haste segue bebendo assim que encosta no líquido novo.",
        ],
      },
      {
        heading: "Água limpa e vaso estável",
        paragraphs: [
          "Água limpa é o cuidado que mais rende resultado. Escolha um vaso estável, que sustente o peso do buquê sem tombar, e cubra boa parte das hastes com líquido. Se a água escurecer, ficar viscosa ou cheirar mal, troque na hora e lave o recipiente: o cheiro ruim quase sempre vem da sujeira acumada, e não da flor que está ali dentro. Água limpa também mantém o perfume da flor sem interferência.",
          "Arranjos densos pedem mais atenção, porque empilham hastes e folhas e aquecem a água mais rápido. Se o buquê é grande, divida-o em dois vasos em vez de forçar tudo em um só. Algumas pessoas usam produtos de conservação e outras não; o essencial é a frequência da troca e a higiene do recipiente, porque nenhum produto resolve o que a rotina não resolve. Vaso de boca estreita pede uma escova pequena: o resto fica escondido na parede.",
        ],
      },
      {
        heading: "Luz, calor e o ar que sopra",
        paragraphs: [
          "Luz direta e calor aceleram a abertura e o murchamento de qualquer flor cortada. Guarde o arranjo em lugar fresco durante o dia, longe de janela que pega sol, de aparelhos que esquentam e de velas ou luminárias próximas. À noite, o ambiente comum da casa costuma ser o lugar certo, e é ali que o buquê deve passar a maior parte do tempo. Um pano ou um papel dobrado embaixo do vaso já protege a mesa.",
          "Corrente de ar seco, de ar-condicionado ou de vento em janela aberta desidrata as pétalas por fora. O ideal é um ambiente ventilado sem jato constante na direção do vaso. Flores com pétalas finas reagem primeiro e mostram o cansaço antes das mais firmes, então observe o arranjo inteiro, e não só o ponto que murchou: o resto pode estar apenas esperando a sua atenção. Meia hora longe do jato costuma devolver boa parte do brilho.",
        ],
      },
      {
        heading: "A rotina da manhã",
        paragraphs: [
          "O cuidado diário é curto e resolve quase tudo. Olhe o vaso pela manhã, confira o nível e a cor da água, retire a primeira flor que ceder e ajuste o arranjo para que as hastes continuem apoiadas. Um buquê deitado de um lado perde o formato e força as pontas a trabalhar demais. O conjunto se mantém melhor quando nada é deixado para depois: são instantes de olho no vaso, e é o que separa um arranjo inteiro de um arranjo torto.",
          "Quando uma flor do meio vencer, tire-a sem drama. O resto do buquê agradece e a composição continua servindo à mesa por mais tempo. Se quiser estender o gesto, separe as flores ainda firmes em vasos menores: cada uma segue no seu ritmo, sem competir com a que já desistiu, e a casa ganha flor em mais de um lugar com o mesmo maço. Vale a pena: um maço pode servir a sala, a entrada e a cabeceira.",
        ],
        list: [
          "Confira a água todas as manhãs",
          "Troque o líquido assim que perder a transparência",
          "Retire flores que já cederem",
          "Mantenha o vaso fora do sol e do calor",
          "Ajuste as hastes para não pesarem de um lado",
          "Lave o vaso a cada troca de água",
          "Refaz o corte das pontas quando trocar o líquido",
        ],
      },
      {
        heading: "A fruta ao lado do vaso",
        paragraphs: [
          "Um erro silencioso acontece na cozinha: o buquê parado ao lado da tigela de frutas. Fruta madura apressa a queda das flores ao redor, e o efeito aparece primeiro nas pétalas mais delicadas. Vale manter vaso e fruteira em bancadas separadas, principalmente em apartamento pequeno, onde tudo acaba encostado no mesmo canto. Se não houver espaço, prefira a prateleira mais afastada: alguns centímetros já mudam o que acontece na noite seguinte.",
          "O mesmo vale para o cheiro da casa. Café passado, incenso, temperos fortes e velas perfumadas disputam o ar com a flor e cansam o arranjo, além de mascarar o perfume que você escolheu. Se a intenção era encher a sala de cheiro de jasmim, deixe a flor trabalhar sozinha por um tempo, sem competição na mesma mesa. A flor ficou ali para ser cheirada, não para disputar espaço com a cozinha.",
        ],
      },
      {
        heading: "Quando uma flor cede",
        paragraphs: [
          "Toda composição tem uma flor que desiste antes das outras, e isso não é sinal de fracasso do cuidado. Tire a haste no momento em que ela ceder, sem esperar a água ficar turva, porque a decomposição ali dentro muda o cheiro e o estado do líquido para todas as vizinhas. Puxe de leve, sem deixar o talo quebrado dentro do vaso. Quem remove cedo costuma ganhar vários dias com o resto do buquê.",
          "Depois, observe o que sobrou. As flores que continuam firmes podem ser divididas em vasos menores e distribuídas pela casa, e o gesto rende mais do que esperar o maço inteiro ruir de uma vez. Não faça contas de calendário nem cobre do buquê um número fixo de dias: o tempo varia com a espécie, o ponto da colheita, o calor do dia e a sua rotina de trocas. O que dá para controlar é o cuidado, e ele serve para qualquer espécie.",
        ],
      },
      {
        heading: "Os erros que aparecem por rotina",
        paragraphs: [
          "Deixar folhas dentro da água, esquecer o vaso ao sol e esperar a água esvaziar são os três erros que mais aparecem. Nenhum exige conhecimento especial: acontecem por distração. Reparar neles muda o resultado de forma visível e dispensa produtos, técnicas elaboradas ou promessas milagrosas de conservação. O arranjo responde ao básico com uma rapidez que quase surpreende. Confira o vaso no mesmo horário todos os dias e o cuidado vira automático, sem esforço de memória.",
          "Outro deslize é julgar a durabilidade pela promessa de alguém. O tempo que um buquê aguenta varia com a espécie, o ponto da colheita, o calor do dia e os cuidados depois da entrega. Em vez de cobrar um número fixo de quem entregou, acompanhe a água e o ambiente: é o que você controla, e é o que decide se a flor vai passar da primeira semana na sua mesa. O olhar vale mais que o calendário.",
        ],
      },
      {
        heading: "O que você controla",
        paragraphs: [
          "O cuidado inteiro cabe em três gestos curtos: olhar a água, mover o vaso do calor e tirar a folha que ficou submersa. Nenhum deles demora, nenhum precisa de ferramenta especial, e todos dependem de você lembrar por alguns segundos ao passar pela mesa. Um bilhete colado no armário ou um alarme discreto no celular ajuda mais que qualquer técnica complicada. Repetido por alguns dias, o gesto vira hábito e a flor responde.",
          "Vale tratar o buquê como parte do presente, e não como enfeite parado. Quem entrega a flor entrega também os dias seguintes dela, e cuidar é a forma concreta de manter aquele gesto na mesa, na porta da sala, no lugar onde a gente come. Flores cortadas morrem cedo, é verdade, e é justamente por isso que a atenção de poucos minutos faz tanta diferença. Quando a última flor cair, o vaso lavado já estará pronto para o próximo maço.",
        ],
      },
    ],
    related: {
      flowers: ["rosa", "tulipa", "girassol", "hortensia"],
      characteristics: ["resistente", "delicada", "perfumada"],
      occasions: ["aniversario", "dia-das-maes"],
    },
    faqs: [
      {
        question: "Devo colocar algo na água das flores?",
        answer:
          "Água limpa já resolve na maior parte dos casos. Produtos de conservação podem ajudar, mas não substituem troca frequente, higiene do vaso e remoção de folhas submersas. Se for usar, siga a orientação do rótulo e observe se a água permanece clara por mais tempo; o que resolve mesmo é a rotina, não o pacote.",
      },
      {
        question: "É possível reviver uma flor murcha?",
        answer:
          "Vale tentar: corte as hastes novamente, coloque em água fresca e afaste do calor e da luz direta. Algumas espécies recuperam boa parte do aspecto; outras não voltam. O que não funciona é deixar a flor murcha na água velha esperando melhora sozinha, nem colocar de volta no vaso junto com as firmes antes de olhar o estado da água.",
      },
      {
        question: "Por que a água fica pegajosa?",
        answer:
          "Resíduos se acumulam no recipiente e nas hastes, e a viscosidade é sinal de que a troca demorou. Lave o vaso com atenção ao fundo, recorte as pontas e retire folhas macias. Água limpa e estável é a base para qualquer flor cortada durar melhor, e o problema costuma sumir logo na primeira troca bem feita.",
      },
      {
        question: "Com que frequência preciso trocar a água?",
        answer:
          "Troque assim que ela perder a transparência, sem esperar prazo fixo: o ritmo muda conforme o calor da casa, o tamanho do buquê e o número de hastes no vaso. A cada troca, lave o recipiente e refaça o corte das pontas. Reparar na cor do líquido é mais confiável que olhar o calendário.",
      },
      {
        question: "As flores podem ficar perto de frutas?",
        answer:
          "Melhor não. Fruta madura apressa a queda das flores ao redor e o efeito aparece primeiro nas pétalas delicadas. Mantenha vaso e fruteira em bancadas separadas, principalmente em cozinha pequena. O mesmo cuidado vale para velas acesas, incenso e café passado na mesma mesa: tudo isso disputa o ar com o buquê.",
      },
    ],
  }
];
