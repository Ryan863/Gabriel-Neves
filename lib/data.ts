// =====================================================================
// CONSTANTES DE CONTEÃšDO â€” edite aqui para manter a landing page
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
  coordinates: `27Â°12'56.9"S 49Â°38'36.4"W`,
  city: "Rio do Sul - SC",
  // Link oficial fornecido no briefing
  whatsapp:
    "https://wa.me/554791498110?text=Ol%C3%A1%2C+visitei+o+site+do+Gabriel+Neves+Arquitetura+e+gostaria+de+conversar+sobre+um+novo+projeto.",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-27.215806,-49.643444",
  wazeUrl: "https://waze.com/ul?ll=-27.215806,-49.643444&navigate=yes",
  siteUrl: "https://gabriel-neves-nine.vercel.app",
};

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "ServiÃ§os" },
  { href: "#entregaveis", label: "EntregÃ¡veis" },
  { href: "#portfolio", label: "PortfÃ³lio" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export const HERO = {
  eyebrow: "ARQUITETURA & DESIGN DE INTERIORES â€¢ RIO DO SUL / IBIRAMA - SC",
  title: "Ambientes pensados para a vida.",
  subtitle:
    "Da concepÃ§Ã£o arquitetÃ´nica ao detalhamento milimÃ©trico de interiores. Projetos residenciais e comerciais que unem estÃ©tica autoral, bem-estar e precisÃ£o tÃ©cnica desde 2015.",
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
    name: "Projetos ArquitetÃ´nicos",
    summary:
      "Residenciais e comerciais. CriaÃ§Ã£o da obra completa conforme as preferÃªncias e o orÃ§amento do cliente.",
    listTitle: "Documentos entregues",
    items: [
      "Plantas Baixas",
      "Planta de Cobertura",
      "Cortes Longitudinal e Transversal",
      "Fachadas",
      "Plantas de SituaÃ§Ã£o e LocalizaÃ§Ã£o",
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
      "Projeto LuminotÃ©cnico",
      "PaginaÃ§Ã£o de Revestimentos e Pintura",
      "MÃ³veis sob Medida: marcenaria, mÃ¡rmores e granitos",
      "Cortes e Vistas com especificaÃ§Ãµes para instaladores",
      "Memorial Descritivo de mÃ³veis soltos",
      "Renders 3D",
    ],
  },
  {
    id: "reformas",
    number: "03",
    name: "Reformas Residenciais e Comerciais",
    summary:
      "ModificaÃ§Ã£o tÃ©cnica de edificaÃ§Ãµes existentes com acrÃ©scimo, manutenÃ§Ã£o ou adequaÃ§Ã£o de Ã¡rea.",
    listTitle: "Objetivos",
    items: [
      "Renovar o espaÃ§o valorizando os potenciais existentes",
      "Alterar modulaÃ§Ãµes e dimensionamento de cÃ´modos",
      "Modernizar revestimentos e acabamentos alinhados Ã  nova rotina",
    ],
  },
  {
    id: "consultoria",
    number: "04",
    name: "Consultoria de Interiores",
    summary:
      "O olhar tÃ©cnico do arquiteto, Ã¡gil e assertivo, resolvido em duas etapas prÃ¡ticas.",
    listTitle: "Como funciona",
    ordered: true,
    items: [
      "ApresentaÃ§Ã£o do ambiente e alinhamento de expectativas e orÃ§amento.",
      "DossiÃª tÃ©cnico com especificaÃ§Ãµes, fotos e soluÃ§Ãµes prÃ¡ticas para transformar o espaÃ§o sem a complexidade de uma obra completa.",
    ],
  },
];

export const serviceLink = (name: string) =>
  waLink(`OlÃ¡, gostaria de orÃ§ar um ${name}.`);

export const ABOUT = {
  eyebrow: "O Arquiteto",
  title: "Gabriel Neves",
  role: "Arquiteto e Urbanista â€¢ UDESC 2015",
  paragraphs: [
    "Graduado em Arquitetura e Urbanismo pela Universidade do Estado de Santa Catarina (UDESC) em 2015, Gabriel iniciou a carreira em Ibirama/SC e, em 2022, transferiu a sede do escritÃ³rio para Rio do Sul/SC.",
    "SÃ£o mais de 10 anos desenvolvendo projetos de alto padrÃ£o, residenciais e comerciais, sempre com foco em arquitetura atemporal e em ambientes pensados para o bem-estar real de quem vive neles.",
    "Cada projeto nasce executÃ¡vel: tÃ©cnica construtiva rigorosa, controle de custos e acompanhamento minucioso, para que o investimento do cliente seja valorizado do papel Ã  obra.",
  ],
  stats: [
    { value: "2015", label: "FormaÃ§Ã£o UDESC" },
    { value: "10+", label: "Anos de atuaÃ§Ã£o" },
    { value: "2022", label: "Sede em Rio do Sul" },
  ],
};

export const DELIVERABLES = {
  eyebrow: "Diferencial de execuÃ§Ã£o",
  title: "O que torna nossos projetos seguros.",
  blocks: [
    {
      icon: "box",
      title: "Volumetria 3D & ImersÃ£o",
      text: "O cliente visualiza cada detalhe, textura e iluminaÃ§Ã£o antes de assentar o primeiro tijolo.",
    },
    {
      icon: "layers",
      title: "CompatibilizaÃ§Ã£o TÃ©cnica Completa",
      text: "Pranchas executivas claras que evitam retrabalho, desperdÃ­cio de material e surpresas na obra.",
    },
    {
      icon: "wallet",
      title: "Respeito Rigoroso ao OrÃ§amento",
      text: "Escolha de materiais compatÃ­vel com o teto de investimento planejado pelo cliente.",
    },
  ],
};

export const PROCESS = [
  {
    step: "01",
    title: "Conversa inicial",
    text: "Entendemos seu terreno, rotina, desejos e orÃ§amento em uma primeira reuniÃ£o.",
  },
  {
    step: "02",
    title: "Estudo & conceito",
    text: "Estudo de viabilidade e partido arquitetÃ´nico, com volumetria 3D para validaÃ§Ã£o.",
  },
  {
    step: "03",
    title: "Projeto executivo",
    text: "Pranchas tÃ©cnicas detalhadas e compatibilizadas, prontas para a obra.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    text: "Suporte durante a execuÃ§Ã£o para manter fidelidade ao projeto e ao orÃ§amento.",
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
    title: "ResidÃªncia contemporÃ¢nea",
    place: "Madeira ripada, concreto e iluminaÃ§Ã£o indireta",
    category: "Residencial",
    src: "/images/hero-desktop.jpg",
    position: "50% 50%",
    scale: 1,
  },
  {
    title: "Ãrea de lazer e piscina",
    place: "IntegraÃ§Ã£o interior e exterior",
    category: "Residencial",
    src: "/images/hero-mobile.jpg",
    position: "50% 60%",
    scale: 1,
  },
];

export const FAQ = [
  {
    q: "Como funciona a primeira reuniÃ£o para entender meu projeto?",
    a: "Ã‰ uma conversa objetiva, presencial ou por vÃ­deo, em que entendemos sua rotina, o terreno ou ambiente, o estilo desejado e o investimento previsto. A partir disso, apresentamos o escopo ideal e a proposta de trabalho.",
  },
  {
    q: "Eu jÃ¡ tenho um terreno, em que momento devo contratar o arquiteto?",
    a: "O quanto antes. Com o arquiteto desde a escolha ou anÃ¡lise do terreno, avaliamos topografia, insolaÃ§Ã£o, legislaÃ§Ã£o e viabilidade, evitando surpresas e custos desnecessÃ¡rios na obra.",
  },
  {
    q: "VocÃªs atendem apenas Rio do Sul e Ibirama ou desenvolvem projetos remotos?",
    a: "Atendemos presencialmente Rio do Sul, Ibirama e todo o Alto Vale do ItajaÃ­. TambÃ©m desenvolvemos projetos de forma 100% remota para todo o Brasil, com reuniÃµes por vÃ­deo e entrega digital das pranchas.",
  },
  {
    q: "Qual Ã© a diferenÃ§a de escopo e investimento entre Consultoria e Projeto de Interiores Completo?",
    a: "A Consultoria Ã© Ã¡gil: alinhamos expectativas e entregamos um dossiÃª com especificaÃ§Ãµes e soluÃ§Ãµes prÃ¡ticas, sem obra completa, com investimento menor. O Projeto de Interiores Completo inclui layout executivo, forro, luminotÃ©cnico, marcenaria detalhada, revestimentos e renders 3D, com maior escopo e investimento.",
  },
];

export const LOCATION = {
  title: "PresenÃ§a regional",
  regions: ["Rio do Sul", "Ibirama", "Alto Vale do ItajaÃ­", "Remoto: todo o Brasil"],
};

export const FOOTER = {
  title: "Vamos dar vida ao seu prÃ³ximo espaÃ§o?",
  cta: "Falar com o arquiteto no WhatsApp",
  credits: `Â© ${new Date().getFullYear()} Gabriel Neves â€¢ Arquitetura e Interiores. Todos os direitos reservados.`,
};

