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
  siteUrl: "https://gabriel-neves-nine.vercel.app",
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
    name: "Projetos Arquitetônicos",
    tag: "Residenciais e Comerciais",
    summary:
      "Criação da obra completa conforme as preferências, necessidades de rotina e o orçamento planejado pelo cliente.",
    listTitle: "Documentos entregues",
    items: [
      "Plantas Baixas",
      "Planta de Cobertura",
      "Cortes Longitudinal e Transversal",
      "Fachadas",
      "Plantas de Situação e Localização",
      "Volumetria 3D com Imagens Renderizadas fotorrealistas",
    ],
  },
  {
    id: "interiores",
    number: "02",
    name: "Projeto de Interiores Completo",
    tag: "Detalhamento Executivo",
    summary:
      "Foco absoluto em conforto, funcionalidade e harmonia estética de todos os elementos internos do ambiente.",
    listTitle: "O que abrange",
    items: [
      "Layout executivo",
      "Planta de Forro (Gesso)",
      "Projeto Luminotécnico",
      "Paginação de Revestimentos e Pintura",
      "Detalhamento de Móveis sob Medida (marcenaria, mármores e granitos)",
      "Cortes e Vistas com especificações para instaladores",
      "Memorial Descritivo de móveis soltos",
      "Renders 3D fotorrealistas",
    ],
  },
  {
    id: "reformas",
    number: "03",
    name: "Reformas Residenciais e Comerciais",
    tag: "Renovação & Ampliação",
    summary:
      "Modificação técnica de edificações existentes com acréscimo, manutenção ou adequação inteligente de área.",
    listTitle: "Objetivos",
    items: [
      "Renovar o espaço valorizando potenciais existentes",
      "Alterar modulações e dimensionamento de cômodos",
      "Modernizar revestimentos e acabamentos alinhados à nova rotina",
    ],
  },
  {
    id: "consultoria",
    number: "04",
    name: "Consultoria de Interiores",
    tag: "Ágil e Assertiva",
    summary:
      "O olhar técnico do arquiteto resolvido em duas etapas práticas para transformar espaços com rapidez.",
    listTitle: "Etapas práticas",
    ordered: true,
    items: [
      "Apresentação do ambiente e alinhamento de expectativas e orçamento.",
      "Dossiê e material técnico com especificações, fotos e soluções práticas para transformar o espaço sem a complexidade de uma obra completa.",
    ],
  },
];

export const serviceLink = (name: string) =>
  waLink(`Gostaria de orçar um ${name}`);

export const ABOUT = {
  eyebrow: "Fundador & Autoridade",
  title: "Gabriel Neves",
  role: "Arquiteto e Urbanista • UDESC (2015)",
  quote:
    "Arquitetura atemporal e interiores pensados para o bem-estar real — unindo técnica construtiva rigorosa, estética refinada e respeito ao investimento.",
  paragraphs: [
    "Graduado em Arquitetura e Urbanismo pela Universidade do Estado de Santa Catarina (UDESC) em 2015, Gabriel Neves soma mais de 10 anos desenvolvendo projetos residenciais e comerciais de alto padrão.",
    "O escritório nasceu inicialmente em Ibirama/SC e, desde 2022, está sediado em Rio do Sul/SC, atendendo todo o Alto Vale do Itajaí e projetos remotos em diversas regiões do Brasil.",
    "Cada projeto é concebido para ser fielmente executável: compatibilização técnica rigorosa, especificações precisas, controle de custos e acompanhamento próximo para valorizar o patrimônio do cliente.",
  ],
  stats: [
    { value: "2015", label: "Graduação UDESC" },
    { value: "10+ anos", label: "Experiência autoral" },
    { value: "2022", label: "Sede em Rio do Sul" },
  ],
};

export const DELIVERABLES = {
  eyebrow: "Diferencial de execução",
  title: "O que torna nossos projetos seguros.",
  subtitle:
    "Da primeira volumetria ao caderno executivo de obra, cada decisão é validada com clareza visual e precisão técnica.",
  blocks: [
    {
      icon: "box",
      number: "01",
      title: "Volumetria 3D & Imersão",
      text: "O cliente visualiza cada detalhe, textura e iluminação antes de assentar o primeiro tijolo.",
    },
    {
      icon: "layers",
      number: "02",
      title: "Compatibilização Técnica Completa",
      text: "Pranchas executivas claras que evitam retrabalho, desperdício de material e surpresas na obra.",
    },
    {
      icon: "wallet",
      number: "03",
      title: "Respeito Rigoroso ao Orçamento",
      text: "Escolha de materiais compatível com o teto de investimento planejado pelo cliente.",
    },
  ],
};

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico & Alinhamento",
    text: "Compreendemos sua rotina, terreno ou imóvel, referências estéticas e expectativa real de investimento.",
  },
  {
    step: "02",
    title: "Estudo Preliminar & 3D",
    text: "Desenvolvemos o partido arquitetônico, plantas humanizadas e renders fotorrealistas para validação.",
  },
  {
    step: "03",
    title: "Projeto Executivo",
    text: "Detalhamento milimétrico de marcenaria, iluminação, paginações e pranchas técnicas para a obra.",
  },
  {
    step: "04",
    title: "Suporte Técnico",
    text: "Orientação aos fornecedores e acompanhamento para garantir fidelidade estética e orçamentária.",
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
    title: "Residência Horizonte",
    subtitle: "Concreto aparente, brises em madeira ripada e integração plena com a área de lazer",
    location: "Rio do Sul • SC",
    area: "420 m²",
    year: "2025",
    category: "Residencial",
    src: "/images/hero-desktop.jpg",
    featured: true,
  },
  {
    id: "cozinha-freijo",
    title: "Cozinha Gourmet em Freijó & Quartzito",
    subtitle: "Marcenaria sob medida, iluminação linear quente e bancada monolítica em pedra natural",
    location: "Rio do Sul • SC",
    area: "38 m²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-cozinha.jpg",
  },
  {
    id: "living-mineral",
    title: "Living Estante Mineral",
    subtitle: "Estante piso-teto em laca fosca profunda, texturas naturais e iluminação cênica",
    location: "Ibirama • SC",
    area: "54 m²",
    year: "2024",
    category: "Interiores",
    src: "/images/portfolio-living.jpg",
  },
  {
    id: "residencia-pedra-luz",
    title: "Residência Pedra & Luz",
    subtitle: "Fachada imponente em pedra natural, balanços estruturais e brises de madeira",
    location: "Alto Vale • SC",
    area: "365 m²",
    year: "2024",
    category: "Residencial",
    src: "/images/portfolio-fachada-pedra.jpg",
    featured: true,
  },
  {
    id: "suite-refugio",
    title: "Suíte Master Refúgio Terroso",
    subtitle: "Painel ripado, cabeceira em linho cru e penteadeira suspensa com luz indireta",
    location: "Rio do Sul • SC",
    area: "32 m²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-suite.jpg",
  },
  {
    id: "clinica-atelier",
    title: "Espaço Comercial & Clínica Boutique",
    subtitle: "Recepção escultural em madeira curvada, microcimento mineral e acústica refinada",
    location: "Rio do Sul • SC",
    area: "185 m²",
    year: "2024",
    category: "Comercial",
    src: "/images/portfolio-comercial.jpg",
  },
  {
    id: "sala-de-banho-travertino",
    title: "Sala de Banho Travertino",
    subtitle: "Banheira de imersão esculpida, iluminação zenital e metais em latão escovado",
    location: "Ibirama • SC",
    area: "19 m²",
    year: "2025",
    category: "Interiores",
    src: "/images/portfolio-banho.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "O projeto 3D e o detalhamento executivo nos deram segurança total. A obra seguiu exatamente o que foi planejado, sem retrabalho e dentro do orçamento.",
    author: "Casal M. & R.",
    context: "Projeto Arquitetônico e Interiores • Rio do Sul/SC",
  },
  {
    quote:
      "Cada centímetro da marcenaria e da iluminação foi pensado para a nossa rotina. O escritório transformou nosso espaço em um ambiente acolhedor e atemporal.",
    author: "Família K.",
    context: "Interiores Completo • Ibirama/SC",
  },
];

export const FAQ = [
  {
    q: "Como funciona a primeira reunião para entender meu projeto?",
    a: "É uma conversa inicial estratégica, presencial no escritório em Rio do Sul ou por videochamada. Analisamos suas referências, rotina da família ou empresa, características do terreno/imóvel e expectativa de investimento para apresentar uma proposta detalhada.",
  },
  {
    q: "Eu já tenho um terreno, em que momento devo contratar o arquiteto?",
    a: "O ideal é envolver o arquiteto antes mesmo de fechar a compra ou logo após adquirir o lote. Avaliamos insolação, topografia, ventilação e recuos legais para aproveitar todo o potencial construtivo e evitar custos extras com movimentação de terra.",
  },
  {
    q: "Vocês atendem apenas Rio do Sul e Ibirama ou desenvolvem projetos remotos?",
    a: "Atendemos presencialmente Rio do Sul, Ibirama e toda a região do Alto Vale do Itajaí. Também desenvolvemos projetos completos à distância para todo o Brasil, com reuniões online, imersão em 3D e entrega de cadernos executivos rigorosos para a equipe local.",
  },
  {
    q: "Qual é a diferença de escopo e investimento entre Consultoria e Projeto de Interiores Completo?",
    a: "A Consultoria é enxuta e rápida: em duas etapas entregamos um dossiê com layout, cores, mobiliário solto e soluções pontuais sem quebra-quebra. Já o Projeto de Interiores Completo contempla gesso, luminotécnico, paginação de pedras e pisos, detalhamento de marcenaria sob medida e renders 3D fotorrealistas.",
  },
];

export const LOCATION = {
  title: "Rio do Sul, Ibirama & Alto Vale",
  subtitle:
    "Escritório sediado em Rio do Sul/SC, com atuação presencial em todo o Alto Vale do Itajaí e atendimento remoto em todo o Brasil.",
  regions: [
    "Rio do Sul • SC (Sede)",
    "Ibirama • SC",
    "Alto Vale do Itajaí",
    "Projetos Remotos • Brasil",
  ],
};

export const FOOTER = {
  title: "Vamos dar vida ao seu próximo espaço?",
  subtitle:
    "Agende uma conversa diretamente pelo WhatsApp para avaliarmos a viabilidade do seu projeto residencial, comercial ou de interiores.",
  cta: "Iniciar conversa no WhatsApp",
  credits: `© ${new Date().getFullYear()} Gabriel Neves • Arquitetura e Interiores. Todos os direitos reservados.`,
};
