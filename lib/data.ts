// =====================================================================
// CONSTANTES DE CONTEÚDO — edite aqui para manter a landing page
// =====================================================================

const WA_NUMBER = "554791498110";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const SITE = {
  name: "Gabriel Neves",
  tagline: "Arquitetura e Interiores",
  slogan: "Ambientes para a vida.",
  phone: "(47) 9149-8110",
  phoneHref: "tel:+554791498110",
  instagramHandle: "@gabrielnevesarquitetura",
  instagramUrl: "https://www.instagram.com/gabrielnevesarquitetura/",
  coordinates: `27°12'56.9"S 49°38'36.4"W`,
  city: "Rio do Sul - SC",
  // Link oficial fornecido no briefing
  whatsapp:
    "https://wa.me/554791498110?text=Ol%C3%A1%2C+visitei+o+site+do+Gabriel+Neves+Arquitetura+e+gostaria+de+conversar+sobre+um+novo+projeto.",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-27.215806,-49.643444",
  wazeUrl: "https://waze.com/ul?ll=-27.215806,-49.643444&navigate=yes",
  siteUrl: "https://gabriel-neves.vercel.app",
};

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#entregaveis", label: "Entregáveis" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export const HERO = {
  eyebrow: "ARQUITETURA & DESIGN DE INTERIORES • RIO DO SUL / IBIRAMA - SC",
  title: "Ambientes pensados para a vida.",
  subtitle:
    "Da concepção arquitetônica ao detalhamento milimétrico de interiores. Projetos residenciais e comerciais que unem estética autoral, bem-estar e precisão técnica desde 2015.",
  cta: "Solicitar Estudo de Viabilidade",
  authority: [
    "Formado pela UDESC desde 2015",
    "Rio do Sul & Ibirama",
    "Projetos Completos em 3D",
  ],
};

export type Service = {
  id: string;
  number: string;
  name: string;
  summary: string;
  listTitle: string;
  items: string[];
  ordered?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "arquitetonico",
    number: "01",
    name: "Projetos Arquitetônicos",
    summary:
      "Residenciais e comerciais. Criação da obra completa conforme as preferências e o orçamento do cliente.",
    listTitle: "Documentos entregues",
    items: [
      "Plantas Baixas",
      "Planta de Cobertura",
      "Cortes Longitudinal e Transversal",
      "Fachadas",
      "Plantas de Situação e Localização",
      "Volumetria 3D com imagens renderizadas fotorrealistas",
    ],
  },
  {
    id: "interiores",
    number: "02",
    name: "Projeto de Interiores Completo",
    summary:
      "Foco em conforto, funcionalidade e harmonia de todos os elementos internos.",
    listTitle: "O que abrange",
    items: [
      "Layout executivo",
      "Planta de Forro (Gesso)",
      "Projeto Luminotécnico",
      "Paginação de Revestimentos e Pintura",
      "Móveis sob Medida: marcenaria, mármores e granitos",
      "Cortes e Vistas com especificações para instaladores",
      "Memorial Descritivo de móveis soltos",
      "Renders 3D",
    ],
  },
  {
    id: "reformas",
    number: "03",
    name: "Reformas Residenciais e Comerciais",
    summary:
      "Modificação técnica de edificações existentes com acréscimo, manutenção ou adequação de área.",
    listTitle: "Objetivos",
    items: [
      "Renovar o espaço valorizando os potenciais existentes",
      "Alterar modulações e dimensionamento de cômodos",
      "Modernizar revestimentos e acabamentos alinhados à nova rotina",
    ],
  },
  {
    id: "consultoria",
    number: "04",
    name: "Consultoria de Interiores",
    summary:
      "O olhar técnico do arquiteto, ágil e assertivo, resolvido em duas etapas práticas.",
    listTitle: "Como funciona",
    ordered: true,
    items: [
      "Apresentação do ambiente e alinhamento de expectativas e orçamento.",
      "Dossiê técnico com especificações, fotos e soluções práticas para transformar o espaço sem a complexidade de uma obra completa.",
    ],
  },
];

export const serviceLink = (name: string) =>
  waLink(`Olá, gostaria de orçar um ${name}.`);

export const ABOUT = {
  eyebrow: "O Arquiteto",
  title: "Gabriel Neves",
  role: "Arquiteto e Urbanista • UDESC 2015",
  paragraphs: [
    "Graduado em Arquitetura e Urbanismo pela Universidade do Estado de Santa Catarina (UDESC) em 2015, Gabriel iniciou a carreira em Ibirama/SC e, em 2022, transferiu a sede do escritório para Rio do Sul/SC.",
    "São mais de 10 anos desenvolvendo projetos de alto padrão, residenciais e comerciais, sempre com foco em arquitetura atemporal e em ambientes pensados para o bem-estar real de quem vive neles.",
    "Cada projeto nasce executável: técnica construtiva rigorosa, controle de custos e acompanhamento minucioso, para que o investimento do cliente seja valorizado do papel à obra.",
  ],
  stats: [
    { value: "2015", label: "Formação UDESC" },
    { value: "10+", label: "Anos de atuação" },
    { value: "2022", label: "Sede em Rio do Sul" },
  ],
};

export const DELIVERABLES = {
  eyebrow: "Diferencial de execução",
  title: "O que torna nossos projetos seguros.",
  blocks: [
    {
      icon: "box",
      title: "Volumetria 3D & Imersão",
      text: "O cliente visualiza cada detalhe, textura e iluminação antes de assentar o primeiro tijolo.",
    },
    {
      icon: "layers",
      title: "Compatibilização Técnica Completa",
      text: "Pranchas executivas claras que evitam retrabalho, desperdício de material e surpresas na obra.",
    },
    {
      icon: "wallet",
      title: "Respeito Rigoroso ao Orçamento",
      text: "Escolha de materiais compatível com o teto de investimento planejado pelo cliente.",
    },
  ],
};

export const PROCESS = [
  {
    step: "01",
    title: "Conversa inicial",
    text: "Entendemos seu terreno, rotina, desejos e orçamento em uma primeira reunião.",
  },
  {
    step: "02",
    title: "Estudo & conceito",
    text: "Estudo de viabilidade e partido arquitetônico, com volumetria 3D para validação.",
  },
  {
    step: "03",
    title: "Projeto executivo",
    text: "Pranchas técnicas detalhadas e compatibilizadas, prontas para a obra.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    text: "Suporte durante a execução para manter fidelidade ao projeto e ao orçamento.",
  },
];

export type PortfolioCategory = "Residencial" | "Comercial" | "Interiores";

export type PortfolioItem = {
  title: string;
  place: string;
  category: PortfolioCategory;
  src: string;
  // recorte da imagem (object-position) e zoom para variar os enquadramentos
  position: string;
  scale: number;
  tall?: boolean;
};

export const PORTFOLIO_FILTERS: ("Todos" | PortfolioCategory)[] = [
  "Todos",
  "Residencial",
  "Comercial",
  "Interiores",
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Residência contemporânea",
    place: "Madeira ripada, concreto e iluminação indireta",
    category: "Residencial",
    src: "/images/hero-desktop.jpg",
    position: "50% 50%",
    scale: 1,
  },
  {
    title: "Área de lazer e piscina",
    place: "Integração interior e exterior",
    category: "Residencial",
    src: "/images/hero-mobile.jpg",
    position: "50% 60%",
    scale: 1,
  },
];

export const FAQ = [
  {
    q: "Como funciona a primeira reunião para entender meu projeto?",
    a: "É uma conversa objetiva, presencial ou por vídeo, em que entendemos sua rotina, o terreno ou ambiente, o estilo desejado e o investimento previsto. A partir disso, apresentamos o escopo ideal e a proposta de trabalho.",
  },
  {
    q: "Eu já tenho um terreno, em que momento devo contratar o arquiteto?",
    a: "O quanto antes. Com o arquiteto desde a escolha ou análise do terreno, avaliamos topografia, insolação, legislação e viabilidade, evitando surpresas e custos desnecessários na obra.",
  },
  {
    q: "Vocês atendem apenas Rio do Sul e Ibirama ou desenvolvem projetos remotos?",
    a: "Atendemos presencialmente Rio do Sul, Ibirama e todo o Alto Vale do Itajaí. Também desenvolvemos projetos de forma 100% remota para todo o Brasil, com reuniões por vídeo e entrega digital das pranchas.",
  },
  {
    q: "Qual é a diferença de escopo e investimento entre Consultoria e Projeto de Interiores Completo?",
    a: "A Consultoria é ágil: alinhamos expectativas e entregamos um dossiê com especificações e soluções práticas, sem obra completa, com investimento menor. O Projeto de Interiores Completo inclui layout executivo, forro, luminotécnico, marcenaria detalhada, revestimentos e renders 3D, com maior escopo e investimento.",
  },
];

export const LOCATION = {
  title: "Presença regional",
  regions: ["Rio do Sul", "Ibirama", "Alto Vale do Itajaí", "Remoto: todo o Brasil"],
};

export const FOOTER = {
  title: "Vamos dar vida ao seu próximo espaço?",
  cta: "Falar com o arquiteto no WhatsApp",
  credits: `© ${new Date().getFullYear()} Gabriel Neves • Arquitetura e Interiores. Todos os direitos reservados.`,
};

