"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Award,
  Box,
  Check,
  ChevronDown,
  Compass,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Quote,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import {
  ABOUT,
  DELIVERABLES,
  FAQ,
  FOOTER,
  HERO,
  LOCATION,
  NAV_LINKS,
  PORTFOLIO,
  PORTFOLIO_FILTERS,
  PROCESS,
  SERVICES,
  SITE,
  TESTIMONIALS,
  serviceLink,
  waLink,
  type PortfolioCategory,
} from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const ICONS = { box: Box, layers: Layers, wallet: Wallet } as const;

const eyebrow =
  "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B49A6E]";
const h2 =
  "font-serif text-4xl font-medium leading-[1.04] tracking-[-0.01em] text-[#1C1917] sm:text-5xl lg:text-[3.5rem]";
const card =
  "rounded-2xl border border-stone-200/60 bg-white shadow-[0_12px_42px_-20px_rgba(28,25,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#637057]/40";
const btnPrimary =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#637057] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535F48]";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#637057]/40 bg-[#F7F6F2]/60 px-5 py-2.5 text-sm font-semibold text-[#535F48] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637057] hover:bg-[#637057] hover:text-white";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function HexMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M50 8 88 29v42L50 92 12 71V29z" strokeLinejoin="round" />
      <path d="M26 66c14-20 22-34 22-54M62 14c8 26 2 40-24 62M66 20c-2 28 2 44 18 58M34 80c10-14 22-22 36-12" />
    </svg>
  );
}

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"Todos" | PortfolioCategory>("Todos");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          start: 50,
          onUpdate: (self) => setScrolled(self.scroll() > 50),
        });

        gsap.from("[data-hero] > *", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.1,
        });

        gsap.from("[data-hero-bar] > *", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.55,
        });

        gsap.to("[data-hero-img]", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero-wrap]",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
          gsap.from(wrap.querySelectorAll("[data-item]"), {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: wrap, start: "top 85%", once: true },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.from("[data-pf]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "all",
      });
    },
    { scope: gridRef, dependencies: [filter], revertOnUpdate: true },
  );

  const items =
    filter === "Todos"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === filter);

  const lightNav = !scrolled && !menuOpen;

  return (
    <div ref={containerRef} className="overflow-x-clip selection:bg-[#637057] selection:text-white">
      {/* ============ A. NAVBAR EDITORIAL (STICKY) ============ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          lightNav
            ? "border-white/10 bg-transparent backdrop-blur-[3px]"
            : "border-stone-200/50 bg-[#F7F6F2]/90 shadow-[0_4px_30px_rgba(28,25,23,0.04)] backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#topo"
            className="group flex items-center gap-3.5"
            aria-label="Gabriel Neves • Arquitetura e Interiores"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-stone-300/60 bg-[#EFEDE6] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt="Logo Gabriel Neves"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`text-xs font-semibold tracking-[0.25em] transition-colors duration-300 ${
                  lightNav ? "text-white" : "text-stone-900"
                }`}
              >
                GABRIEL NEVES
              </span>
              <span
                className={`mt-1.5 text-[9.5px] font-semibold tracking-[0.25em] transition-colors duration-300 ${
                  lightNav ? "text-stone-200" : "text-[#637057]"
                }`}
              >
                ARQUITETURA E INTERIORES
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    lightNav
                      ? "text-white/85 hover:text-white"
                      : "text-stone-700 hover:text-[#637057]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#637057] px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535F48] sm:inline-flex"
            >
              Iniciar Projeto
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className={`rounded-full p-2.5 lg:hidden ${
                lightNav ? "text-white" : "text-[#1C1917]"
              }`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-stone-200/60 bg-[#F7F6F2] px-5 pb-6 pt-3 lg:hidden">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-stone-200/60 py-3.5 text-base font-medium text-stone-800"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-5 w-full`}
            >
              <MessageCircle className="h-4 w-4" /> Iniciar Projeto
            </a>
          </div>
        )}
      </header>

      <main id="topo">
        {/* ============ B. 1ª DOBRA: HERO SECTION ============ */}
        <section
          data-hero-wrap
          className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#1C1917]"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
            <img
              data-hero-img
              src="/images/hero-mobile.jpg"
              alt="Projeto residencial contemporâneo de alto padrão com madeira ripada, concreto aparente e iluminação quente"
              className="absolute inset-0 h-[112%] w-full object-cover"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/45 to-[#1C1917]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/75 via-[#1C1917]/25 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-36 lg:px-8 lg:pb-12">
            <div data-hero className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B49A6E]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E6D8B8] sm:text-[11px]">
                  {HERO.eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[0.96] tracking-[-0.015em] text-white sm:text-7xl lg:text-[5.5rem]">
                Ambientes pensados{" "}
                <em className="font-normal italic text-[#DFC99B]">para a vida.</em>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-200/95 sm:text-lg">
                {HERO.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#F7F6F2] px-7 py-4 text-sm font-semibold text-[#1C1917] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#637057]" />
                  {HERO.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur-xs transition-all duration-300 hover:border-white/50 hover:bg-white/15"
                >
                  Explorar Portfólio
                </a>
              </div>
            </div>

            {/* Barra Inferior de Autoridade */}
            <ul
              data-hero-bar
              className="mt-14 grid gap-4 border-t border-white/15 pt-6 text-[13px] font-medium text-stone-200 sm:grid-cols-3 sm:gap-6"
            >
              {HERO.authority.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B49A6E]/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B49A6E]" />
                  </span>
                  <span className="tracking-wide">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ C.1 OS 4 PILARES DE ATUAÇÃO ============ */}
        <section id="servicos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div data-reveal className="max-w-2xl">
              <p className={eyebrow}>
                <Compass className="h-3.5 w-3.5" /> Os 4 Pilares de Atuação
              </p>
              <h2 className={`${h2} mt-3`}>
                Escopo técnico completo,{" "}
                <span className="italic text-[#637057]">do estudo à obra.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-[15px] leading-relaxed text-[#78716C]"
            >
              Cada modalidade é estruturada com entregáveis claros para que você tenha
              previsibilidade de custos, prazos e resultado estético.
            </p>
          </div>

          <div data-stagger className="mt-14 grid gap-7 md:grid-cols-2">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                data-item
                className={`${card} flex flex-col justify-between p-7 sm:p-10`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-stone-200/70 pb-5">
                    <span className="font-serif text-5xl font-light leading-none text-[#B49A6E]">
                      {s.number}
                    </span>
                    <span className="rounded-full border border-[#B49A6E]/35 bg-[#F7F6F2] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#78716C] uppercase">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-[#1C1917] sm:text-[2rem]">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
                    {s.summary}
                  </p>

                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#78716C]">
                    {s.listTitle}
                  </p>

                  {s.ordered ? (
                    <ol className="mt-4 space-y-3.5 text-sm text-[#44403C]">
                      {s.items.map((it, i) => (
                        <li key={it} className="flex gap-3.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#637057] text-xs font-semibold text-white">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-4 grid gap-2.5 text-sm text-[#44403C] sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#637057]" />
                          <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-9 border-t border-stone-100 pt-6">
                  <a
                    href={serviceLink(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnOutline} w-full sm:w-auto`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Orçar {s.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ C.2 AUTORIDADE & PERFIL DO ARQUITETO ============ */}
        <section id="sobre" className="bg-[#EFEDE6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Coluna Foto / Composição Editorial */}
              <div data-reveal className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-300/60 bg-[#637057] shadow-[0_24px_60px_-20px_rgba(28,25,23,0.28)]">
                    <img
                      src="/images/architect-portrait.jpg"
                      alt="Gabriel Neves — Arquiteto e Urbanista"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-[#F7F6F2]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B49A6E]/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F3E5C8] backdrop-blur-xs">
                        <Award className="h-3 w-3" /> {ABOUT.role}
                      </span>
                      <p className="mt-2 font-serif text-3xl font-medium">
                        {ABOUT.title}
                      </p>
                      <p className="text-xs tracking-wide text-stone-300">
                        Rio do Sul & Ibirama • Santa Catarina
                      </p>
                    </div>
                  </div>

                  {/* Selo flutuante com logo oficial */}
                  <div className="mt-4 flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
                    <img
                      src="/images/logo.jpg"
                      alt="Símbolo Gabriel Neves Arquitetura"
                      className="h-12 w-12 rounded-xl border border-stone-200 object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1917]">
                        Escritório Autoral
                      </p>
                      <p className="mt-0.5 text-xs text-[#78716C]">
                        Fundado em Ibirama (2015) • Sede em Rio do Sul desde 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Biografia & Números */}
              <div data-reveal className="lg:col-span-7">
                <p className={eyebrow}>{ABOUT.eyebrow}</p>
                <h2 className={`${h2} mt-3`}>
                  Arquitetura pensada para{" "}
                  <span className="italic text-[#637057]">quem vive o espaço.</span>
                </h2>

                <blockquote className="mt-6 border-l-2 border-[#B49A6E] pl-5 font-serif text-xl italic leading-relaxed text-[#1C1917] sm:text-2xl">
                  “{ABOUT.quote}”
                </blockquote>

                <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-[#44403C]">
                  {ABOUT.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-stone-300/70 py-6">
                  {ABOUT.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="font-serif text-3xl font-semibold text-[#1C1917] sm:text-4xl">
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-[#78716C]">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnPrimary}
                  >
                    <MessageCircle className="h-4 w-4" /> Agendar conversa com Gabriel
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnOutline}
                  >
                    <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ C.3 DIFERENCIAL DE EXECUÇÃO ============ */}
        <section id="entregaveis" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div data-reveal className="max-w-2xl">
              <p className={eyebrow}>
                <Sparkles className="h-3.5 w-3.5" /> {DELIVERABLES.eyebrow}
              </p>
              <h2 className={`${h2} mt-3`}>{DELIVERABLES.title}</h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-[15px] leading-relaxed text-[#78716C]"
            >
              {DELIVERABLES.subtitle}
            </p>
          </div>

          <div data-stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {DELIVERABLES.blocks.map((b) => {
              const Icon = ICONS[b.icon as keyof typeof ICONS];
              return (
                <div
                  key={b.title}
                  data-item
                  className={`${card} relative overflow-hidden p-8 sm:p-9`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#637057]/12 text-[#637057]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-3xl font-light text-[#B49A6E]/80">
                      {b.number}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl font-semibold text-[#1C1917] sm:text-[1.65rem]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ C.4 PORTFÓLIO & LINGUAGEM VISUAL (LOOKBOOK) ============ */}
        <section id="portfolio" className="bg-[#1C1917] py-24 text-stone-200 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div data-reveal className="max-w-2xl">
                <p className={eyebrow}>Portfólio & Linguagem Visual</p>
                <h2 className={`${h2} mt-3 !text-[#F7F6F2]`}>
                  Lookbook de projetos{" "}
                  <span className="italic text-[#D8C8A4]">autorais.</span>
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-stone-400">
                  Cozinhas integradas em madeira natural, salas de estar com marcenaria
                  sob medida, fachadas contemporâneas em pedra e iluminação cênica.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filtrar portfólio por categoria"
                className="flex flex-wrap gap-2"
              >
                {PORTFOLIO_FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={filter === f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                      filter === f
                        ? "border-[#B49A6E] bg-[#B49A6E] text-[#1C1917]"
                        : "border-white/15 bg-white/5 text-stone-300 hover:border-[#B49A6E]/60 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={gridRef}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((p) => (
                <article
                  key={p.id}
                  data-pf
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-stone-900 ${
                    p.featured && filter === "Todos"
                      ? "sm:col-span-2 aspect-[16/10]"
                      : "aspect-[16/11]"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/30 to-transparent" />

                  <div className="relative z-10 p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8C8A4]">
                      <span className="rounded-full border border-[#B49A6E]/50 bg-[#1C1917]/70 px-3 py-1 backdrop-blur-xs">
                        {p.category}
                      </span>
                      <span>•</span>
                      <span>{p.location}</span>
                      <span>•</span>
                      <span>{p.area}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-stone-300 sm:text-sm">
                      {p.subtitle}
                    </p>

                    <div className="mt-4">
                      <a
                        href={waLink(
                          `Olá, vi o projeto "${p.title}" no site e gostaria de conversar sobre um projeto semelhante.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2D1AC] transition-colors hover:text-white"
                      >
                        Quero um projeto com esta linguagem
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Banner Instagram do escritório */}
            <div
              data-reveal
              className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:p-9"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#637057] text-white">
                  <InstagramIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-serif text-2xl font-medium text-[#F7F6F2] sm:text-3xl">
                    Acompanhe mais de 700 publicações no Instagram
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Bastidores de obra, detalhamentos e novos projetos em{" "}
                    <span className="text-stone-200">{SITE.instagramHandle}</span>
                  </p>
                </div>
              </div>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F7F6F2] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Ver feed no Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ PROCESSO & DEPOIMENTOS ============ */}
        <section id="processo" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="max-w-2xl">
            <p className={eyebrow}>Metodologia</p>
            <h2 className={`${h2} mt-3`}>
              Do primeiro traço à entrega{" "}
              <span className="italic text-[#637057]">sem imprevistos.</span>
            </h2>
          </div>

          <div data-stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                data-item
                className={`${card} flex flex-col justify-between p-7`}
              >
                <div>
                  <span className="font-serif text-4xl font-light text-[#B49A6E]">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#1C1917]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#44403C]">
                    {p.text}
                  </p>
                </div>
                <div className="mt-6 h-0.5 w-10 bg-[#637057]/40" />
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                data-item
                className="rounded-2xl border border-stone-200/70 bg-[#EFEDE6]/70 p-7 sm:p-9"
              >
                <Quote className="h-6 w-6 text-[#B49A6E]" />
                <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-[#1C1917] sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#637057]">
                  {t.author} <span className="text-[#78716C]">• {t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ C.5 FAQ ESTRUTURADO ============ */}
        <section id="faq" className="bg-[#EFEDE6] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
            <div data-reveal className="lg:col-span-5">
              <p className={eyebrow}>Perguntas Frequentes</p>
              <h2 className={`${h2} mt-3`}>
                Clareza antes de{" "}
                <span className="italic text-[#637057]">iniciar seu projeto.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#44403C]">
                Reunimos as principais dúvidas sobre prazos, etapa de terreno,
                atendimento remoto e modalidades de contratação.
              </p>
              <div className="mt-8">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" /> Tirar outra dúvida no WhatsApp
                </a>
              </div>
            </div>

            <div data-reveal className="space-y-3.5 lg:col-span-7">
              {FAQ.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-stone-200/70 bg-white transition-colors duration-300 hover:border-[#637057]/40"
                  >
                    <h3 className="font-sans text-base">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-${i}`}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-sans text-[15.5px] font-semibold text-[#1C1917]"
                      >
                        <span>{f.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#637057] transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      id={`faq-${i}`}
                      className={`grid transition-all duration-300 ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#44403C]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ C.6 LOCALIZAÇÃO, PRESENÇA REGIONAL & CONTATO ============ */}
        <section id="contato" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div
            data-reveal
            className="grid overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white shadow-[0_24px_64px_-28px_rgba(28,25,23,0.22)] lg:grid-cols-12"
          >
            <div className="p-8 sm:p-12 lg:col-span-7">
              <p className={eyebrow}>Localização & Presença Regional</p>
              <h2 className={`${h2} mt-3`}>{LOCATION.title}</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#44403C]">
                {LOCATION.subtitle}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {LOCATION.regions.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-[#B49A6E]/50 bg-[#B49A6E]/10 px-4 py-1.5 text-xs font-semibold text-[#7A6640]"
                  >
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 border-y border-stone-200/80 py-6 text-[15px] text-[#44403C] sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#637057]" />
                  <div>
                    <p className="font-semibold text-[#1C1917]">{SITE.city}</p>
                    <p className="mt-0.5 font-mono text-xs text-[#78716C]">
                      {SITE.coordinates}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#637057]" />
                    <a
                      href={SITE.phoneHref}
                      className="font-medium text-[#1C1917] hover:text-[#637057]"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 shrink-0 text-[#637057]" />
                    <a
                      href={SITE.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1C1917] hover:text-[#637057]"
                    >
                      {SITE.instagramHandle}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4" /> Traçar Rota no Google Maps
                </a>
                <a
                  href={SITE.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4" /> Abrir no Waze
                </a>
              </div>
            </div>

            <div className="relative min-h-[340px] bg-stone-200 lg:col-span-5">
              <iframe
                title="Mapa de localização — Gabriel Neves Arquitetura em Rio do Sul, SC"
                src="https://maps.google.com/maps?q=-27.215806,-49.643444&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 contrast-[1.02] grayscale-[35%]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ============ C.7 FOOTER DE FECHAMENTO ============ */}
      <footer className="bg-[#535F48] text-[#F7F6F2]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <HexMark className="mx-auto h-14 w-14 text-white/75" />
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DFC99B]">
            Gabriel Neves • Arquitetura e Interiores
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.05] sm:text-6xl">
            {FOOTER.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#E1E5DA] sm:text-base">
            {FOOTER.subtitle}
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F7F6F2] px-8 py-4 text-sm font-semibold text-[#1C1917] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4 text-[#637057]" />
            {FOOTER.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-[#E1E5DA] sm:flex-row">
            <p>{FOOTER.credits}</p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[11px] opacity-80">{SITE.coordinates}</span>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão flutuante de WhatsApp no Mobile */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o arquiteto no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#637057] text-white shadow-xl transition-all duration-300 hover:bg-[#535F48] sm:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
