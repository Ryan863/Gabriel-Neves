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
  siteUrl: "https://gabriel-neves-tau.vercel.app",
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
  tag: string;
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
    tag: "Residenciais e Comerciais",
    summary:
      "CriaÃ§Ã£o da obra completa conforme as preferÃªncias, necessidades de rotina e o orÃ§amento planejado pelo cliente.",
    listTitle: "Documentos entregues",
    items: [
      "Plantas Baixas",
      "Planta de Cobertura",
      "Cortes Longitudinal e Transversal",
      "Fachadas",
      "Plantas de SituaÃ§Ã£o e LocalizaÃ§Ã£o",
      "Volumetria 3D com Imagens Renderizadas fotorrealistas",
    ],
  },
  {
    id: "interiores",
    number: "02",
    name: "Projeto de Interiores Completo",
    tag: "Detalhamento Executivo",
    summary:
      "Foco absoluto em conforto, funcionalidade e harmonia estÃ©tica de todos os elementos internos do ambiente.",
    listTitle: "O que abrange",
    items: [
      "Layout executivo",
      "Planta de Forro (Gesso)",
      "Projeto LuminotÃ©cnico",
      "PaginaÃ§Ã£o de Revestimentos e Pintura",
      "Detalhamento de MÃ³veis sob Medida (marcenaria, mÃ¡rmores e granitos)",
      "Cortes e Vistas com especificaÃ§Ãµes para instaladores",
      "Memorial Descritivo de mÃ³veis soltos",
      "Renders 3D fotorrealistas",
    ],
  },
  {
    id: "reformas",
    number: "03",
    name: "Reformas Residenciais e Comerciais",
    tag: "RenovaÃ§Ã£o & AmpliaÃ§Ã£o",
    summary:
      "ModificaÃ§Ã£o tÃ©cnica de edificaÃ§Ãµes existentes com acrÃ©scimo, manutenÃ§Ã£o ou adequaÃ§Ã£o inteligente de Ã¡rea.",
    listTitle: "Objetivos",
    items: [
      "Renovar o espaÃ§o valorizando potenciais existentes",
      "Alterar modulaÃ§Ãµes e dimensionamento de cÃ´modos",
      "Modernizar revestimentos e acabamentos alinhados Ã  nova rotina",
    ],
  },
  {
    id: "consultoria",
    number: "04",
    name: "Consultoria de Interiores",
    tag: "Ãgil e Assertiva",
    summary:
      "O olhar tÃ©cnico do arquiteto resolvido em duas etapas prÃ¡ticas para transformar espaÃ§os com rapidez.",
    listTitle: "Etapas prÃ¡ticas",
    ordered: true,
    items: [
      "ApresentaÃ§Ã£o do ambiente e alinhamento de expectativas e orÃ§amento.",
      "DossiÃª e material tÃ©cnico com especificaÃ§Ãµes, fotos e soluÃ§Ãµes prÃ¡ticas para transformar o espaÃ§o sem a complexidade de uma obra completa.",
    ],
  },
];

export const serviceLink = (name: string) =>
  waLink(`Gostaria de orÃ§ar um ${name}`);

export const ABOUT = {
  eyebrow: "Fundador & Autoridade",
  title: "Gabriel Neves",
  role: "Arquiteto e Urbanista â€¢ UDESC (2015)",
  quote:
    "Arquitetura atemporal e interiores pensados para o bem-estar real â€” unindo tÃ©cnica construtiva rigorosa, estÃ©tica refinada e respeito ao investimento.",
  paragraphs: [
    "Graduado em Arquitetura e Urbanismo pela Universidade do Estado de Santa Catarina (UDESC) em 2015, Gabriel Neves soma mais de 10 anos desenvolvendo projetos residenciais e comerciais de alto padrÃ£o.",
    "O escritÃ³rio nasceu inicialmente em Ibirama/SC e, desde 2022, estÃ¡ sediado em Rio do Sul/SC, atendendo todo o Alto Vale do ItajaÃ­ e projetos remotos em diversas regiÃµes do Brasil.",
    "Cada projeto Ã© concebido para ser fielmente executÃ¡vel: compatibilizaÃ§Ã£o tÃ©cnica rigorosa, especificaÃ§Ãµes precisas, controle de custos e acompanhamento prÃ³ximo para valorizar o patrimÃ´nio do cliente.",
  ],
  stats: [
    { value: "2015", label: "GraduaÃ§Ã£o UDESC" },
    { value: "10+ anos", label: "ExperiÃªncia autoral" },
    { value: "2022", label: "Sede em Rio do Sul" },
  ],
};

export const DELIVERABLES = {
  eyebrow: "Diferencial de execuÃ§Ã£o",
  title: "O que torna nossos projetos seguros.",
  subtitle:
    "Da primeira volumetria ao caderno executivo de obra, cada decisÃ£o Ã© validada com clareza visual e precisÃ£o tÃ©cnica.",
  blocks: [
    {
      icon: "box",
      number: "01",
      title: "Volumetria 3D & ImersÃ£o",
      text: "O cliente visualiza cada detalhe, textura e iluminaÃ§Ã£o antes de assentar o primeiro tijolo.",
    },
    {
      icon: "layers",
      number: "02",
      title: "CompatibilizaÃ§Ã£o TÃ©cnica Completa",
      text: "Pranchas executivas claras que evitam retrabalho, desperdÃ­cio de material e surpresas na obra.",
    },
    {
      icon: "wallet",
      number: "03",
      title: "Respeito Rigoroso ao OrÃ§amento",
      text: "Escolha de materiais compatÃ­vel com o teto de investimento planejado pelo cliente.",
    },
  ],
};

export const PROCESS = [
  {
    step: "01",
    title: "DiagnÃ³stico & Alinhamento",
    text: "Compreendemos sua rotina, terreno ou imÃ³vel, referÃªncias estÃ©ticas e expectativa real de investimento.",
  },
  {
    step: "02",
    title: "Estudo Preliminar & 3D",
    text: "Desenvolvemos o partido arquitetÃ´nico, plantas humanizadas e renders fotorrealistas para validaÃ§Ã£o.",
  },
  {
    step: "03",
    title: "Projeto Executivo",
    text: "Detalhamento milimÃ©trico de marcenaria, iluminaÃ§Ã£o, paginaÃ§Ãµes e pranchas tÃ©cnicas para a obra.",
  },
  {
    step: "04",
    title: "Suporte TÃ©cnico",
    text: "OrientaÃ§Ã£o aos fornecedores e acompanhamento para garantir fidelidade estÃ©tica e orÃ§amentÃ¡ria.",
  },
];

export type PortfolioCategory = "Residencial" | "Comercial" | "Interiores";

export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  area: string;
  year: string;
  category: PortfolioCategory;
  src: string;
  featured?: boolean;
};

export const PORTFOLIO_FILTERS: ("Todos" | PortfolioCategory)[] = [
  "Todos",
  "Residencial",
  "Interiores",
  "Comercial",
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "residencia-horizonte",
    title: "ResidÃªncia Horizonte",
    subtitle: "Concreto aparente, brises em madeira ripada e integraÃ§Ã£o plena com a Ã¡rea de lazer",
    location: "Rio do Sul â€¢ SC",
    area: "420 mÂ²",
    year: "2025",
    category: "Residencial",
    src: "/images/hero-desktop.jpg",
    featured: true,
  },
  {
    id: "cozinha-freijo",
    title: "Cozinha Gourmet em FreijÃ³ & Quartzito",
    subtitle: "Marcenaria sob medida, iluminaÃ§Ã£o linear quente e bancada monolÃ­tica em pedra natural",
    location: "Rio do Sul â€¢ SC",
    area: "38 mÂ²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-cozinha.jpg",
  },
  {
    id: "living-mineral",
    title: "Living Estante Mineral",
    subtitle: "Estante piso-teto em laca fosca profunda, texturas naturais e iluminaÃ§Ã£o cÃªnica",
    location: "Ibirama â€¢ SC",
    area: "54 mÂ²",
    year: "2024",
    category: "Interiores",
    src: "/images/portfolio-living.jpg",
  },
  {
    id: "residencia-pedra-luz",
    title: "ResidÃªncia Pedra & Luz",
    subtitle: "Fachada imponente em pedra natural, balanÃ§os estruturais e brises de madeira",
    location: "Alto Vale â€¢ SC",
    area: "365 mÂ²",
    year: "2024",
    category: "Residencial",
    src: "/images/portfolio-fachada-pedra.jpg",
    featured: true,
  },
  {
    id: "suite-refugio",
    title: "SuÃ­te Master RefÃºgio Terroso",
    subtitle: "Painel ripado, cabeceira em linho cru e penteadeira suspensa com luz indireta",
    location: "Rio do Sul â€¢ SC",
    area: "32 mÂ²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-suite.jpg",
  },
  {
    id: "clinica-atelier",
    title: "EspaÃ§o Comercial & ClÃ­nica Boutique",
    subtitle: "RecepÃ§Ã£o escultural em madeira curvada, microcimento mineral e acÃºstica refinada",
    location: "Rio do Sul â€¢ SC",
    area: "185 mÂ²",
    year: "2024",
    category: "Comercial",
    src: "/images/portfolio-comercial.jpg",
  },
  {
    id: "sala-de-banho-travertino",
    title: "Sala de Banho Travertino",
    subtitle: "Banheira de imersÃ£o esculpida, iluminaÃ§Ã£o zenital e metais em latÃ£o escovado",
    location: "Ibirama â€¢ SC",
    area: "19 mÂ²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-banho.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "O projeto 3D e o detalhamento executivo nos deram seguranÃ§a total. A obra seguiu exatamente o que foi planejado, sem retrabalho e dentro do orÃ§amento.",
    author: "Casal M. & R.",
    context: "Projeto ArquitetÃ´nico e Interiores â€¢ Rio do Sul/SC",
  },
  {
    quote:
      "Cada centÃ­metro da marcenaria e da iluminaÃ§Ã£o foi pensado para a nossa rotina. O escritÃ³rio transformou nosso espaÃ§o em um ambiente acolhedor e atemporal.",
    author: "FamÃ­lia K.",
    context: "Interiores Completo â€¢ Ibirama/SC",
  },
];

export const FAQ = [
  {
    q: "Como funciona a primeira reuniÃ£o para entender meu projeto?",
    a: "Ã‰ uma conversa inicial estratÃ©gica, presencial no escritÃ³rio em Rio do Sul ou por videochamada. Analisamos suas referÃªncias, rotina da famÃ­lia ou empresa, caracterÃ­sticas do terreno/imÃ³vel e expectativa de investimento para apresentar uma proposta detalhada.",
  },
  {
    q: "Eu jÃ¡ tenho um terreno, em que momento devo contratar o arquiteto?",
    a: "O ideal Ã© envolver o arquiteto antes mesmo de fechar a compra ou logo apÃ³s adquirir o lote. Avaliamos insolaÃ§Ã£o, topografia, ventilaÃ§Ã£o e recuos legais para aproveitar todo o potencial construtivo e evitar custos extras com movimentaÃ§Ã£o de terra.",
  },
  {
    q: "VocÃªs atendem apenas Rio do Sul e Ibirama ou desenvolvem projetos remotos?",
    a: "Atendemos presencialmente Rio do Sul, Ibirama e toda a regiÃ£o do Alto Vale do ItajaÃ­. TambÃ©m desenvolvemos projetos completos Ã  distÃ¢ncia para todo o Brasil, com reuniÃµes online, imersÃ£o em 3D e entrega de cadernos executivos rigorosos para a equipe local.",
  },
  {
    q: "Qual Ã© a diferenÃ§a de escopo e investimento entre Consultoria e Projeto de Interiores Completo?",
    a: "A Consultoria Ã© enxuta e rÃ¡pida: em duas etapas entregamos um dossiÃª com layout, cores, mobiliÃ¡rio solto e soluÃ§Ãµes pontuais sem quebra-quebra. JÃ¡ o Projeto de Interiores Completo contempla gesso, luminotÃ©cnico, paginaÃ§Ã£o de pedras e pisos, detalhamento de marcenaria sob medida e renders 3D fotorrealistas.",
  },
];

export const LOCATION = {
  title: "Rio do Sul, Ibirama & Alto Vale",
  subtitle:
    "EscritÃ³rio sediado em Rio do Sul/SC, com atuaÃ§Ã£o presencial em todo o Alto Vale do ItajaÃ­ e atendimento remoto em todo o Brasil.",
  regions: [
    "Rio do Sul â€¢ SC (Sede)",
    "Ibirama â€¢ SC",
    "Alto Vale do ItajaÃ­",
    "Projetos Remotos â€¢ Brasil",
  ],
};

export const FOOTER = {
  title: "Vamos dar vida ao seu prÃ³ximo espaÃ§o?",
  subtitle:
    "Agende uma conversa diretamente pelo WhatsApp para avaliarmos a viabilidade do seu projeto residencial, comercial ou de interiores.",
  cta: "Iniciar conversa no WhatsApp",
  credits: `Â© ${new Date().getFullYear()} Gabriel Neves â€¢ Arquitetura e Interiores. Todos os direitos reservados.`,
};
