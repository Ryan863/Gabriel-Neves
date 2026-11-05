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
  "inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B49A6E]";
const h2 =
  "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] sm:leading-[1.04] tracking-[-0.01em] text-[#1C1917] break-words";
const card =
  "rounded-2xl border border-stone-200/60 bg-white shadow-[0_12px_42px_-20px_rgba(28,25,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#637057]/40";
const btnPrimary =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#637057] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535F48]";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#637057]/40 bg-[#F7F6F2]/60 px-4 py-2.5 sm:px-5 text-xs sm:text-sm font-semibold text-[#535F48] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637057] hover:bg-[#637057] hover:text-white";

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
          start: 40,
          onUpdate: (self) => setScrolled(self.scroll() > 40),
        });

        gsap.from("[data-hero] > *", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.1,
        });

        gsap.from("[data-hero-bar] > *", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.45,
        });

        gsap.to("[data-hero-img]", {
          yPercent: 6,
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
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((wrap) => {
          gsap.from(wrap.querySelectorAll("[data-item]"), {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.from("[data-pf]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
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
    <div ref={containerRef} className="w-full max-w-[100vw] overflow-x-hidden selection:bg-[#637057] selection:text-white">
      {/* ============ A. NAVBAR EDITORIAL (STICKY) ============ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          lightNav
            ? "border-white/10 bg-transparent backdrop-blur-[3px]"
            : "border-stone-200/50 bg-[#F7F6F2]/95 shadow-[0_4px_25px_rgba(28,25,23,0.05)] backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 sm:h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#topo"
            className="group flex items-center gap-2.5 sm:gap-3.5 min-w-0"
            aria-label="Gabriel Neves • Arquitetura e Interiores"
          >
            <span className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:rounded-xl border border-stone-300/60 bg-[#EFEDE6] shadow-xs">
              <img
                src="/images/logo.jpg"
                alt="Logo Gabriel Neves"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="flex flex-col leading-none truncate">
              <span
                className={`text-[11px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.25em] transition-colors duration-300 truncate ${
                  lightNav ? "text-white" : "text-stone-900"
                }`}
              >
                GABRIEL NEVES
              </span>
              <span
                className={`mt-1 text-[8px] sm:text-[9.5px] font-semibold tracking-[0.18em] sm:tracking-[0.25em] transition-colors duration-300 truncate ${
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

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#637057] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#535F48] sm:inline-flex"
            >
              Iniciar Projeto
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className={`rounded-full p-2 lg:hidden transition-colors ${
                lightNav ? "text-white hover:bg-white/10" : "text-[#1C1917] hover:bg-stone-200/50"
              }`}
            >
              {menuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-stone-200/60 bg-[#F7F6F2] px-4 sm:px-6 pb-6 pt-2 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-stone-200/60 py-3 text-sm sm:text-base font-medium text-stone-800"
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
              className={`${btnPrimary} mt-4 w-full justify-center`}
            >
              <MessageCircle className="h-4 w-4" /> Iniciar Projeto no WhatsApp
            </a>
          </div>
        )}
      </header>

      <main id="topo" className="w-full overflow-x-hidden">
        {/* ============ B. 1ª DOBRA: HERO SECTION ============ */}
        <section
          data-hero-wrap
          className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[#1C1917]"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
            <img
              data-hero-img
              src="/images/hero-mobile.jpg"
              alt="Projeto residencial contemporâneo de alto padrão com madeira ripada, concreto aparente e iluminação quente"
              className="absolute inset-0 h-[110%] w-full object-cover"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/55 to-[#1C1917]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/80 via-[#1C1917]/35 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 pt-28 sm:pt-36">
            <div data-hero className="max-w-3xl">
              <div className="mb-4 sm:mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B49A6E]" />
                <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#E6D8B8] truncate">
                  {HERO.eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white break-words">
                Ambientes pensados{" "}
                <em className="font-normal italic text-[#DFC99B]">para a vida.</em>
              </h1>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-stone-200/95">
                {HERO.subtitle}
              </p>

              <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F6F2] px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-semibold text-[#1C1917] shadow-lg transition-all duration-300 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#637057] shrink-0" />
                  <span>{HERO.cta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium text-white backdrop-blur-xs transition-all duration-300 hover:border-white/50 hover:bg-white/15"
                >
                  Explorar Portfólio
                </a>
              </div>
            </div>

            {/* Barra Inferior de Autoridade */}
            <ul
              data-hero-bar
              className="mt-10 sm:mt-14 grid gap-2.5 sm:gap-6 border-t border-white/15 pt-5 sm:pt-6 text-xs sm:text-[13px] font-medium text-stone-200 sm:grid-cols-3"
            >
              {HERO.authority.map((a) => (
                <li key={a} className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#B49A6E]/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B49A6E]" />
                  </span>
                  <span className="tracking-normal sm:tracking-wide leading-snug">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ C.1 OS 4 PILARES DE ATUAÇÃO ============ */}
        <section id="servicos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-4 sm:gap-6 lg:flex-row lg:items-end">
            <div data-reveal className="max-w-2xl">
              <p className={eyebrow}>
                <Compass className="h-3.5 w-3.5" /> Os 4 Pilares de Atuação
              </p>
              <h2 className={`${h2} mt-2 sm:mt-3`}>
                Escopo técnico completo,{" "}
                <span className="italic text-[#637057]">do estudo à obra.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-sm sm:text-[15px] leading-relaxed text-[#78716C]"
            >
              Cada modalidade é estruturada com entregáveis claros para que você tenha
              previsibilidade de custos, prazos e resultado estético.
            </p>
          </div>

          <div data-stagger className="mt-10 sm:mt-14 grid gap-5 sm:gap-7 md:grid-cols-2">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                data-item
                className={`${card} flex flex-col justify-between p-5 sm:p-8 lg:p-10`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-stone-200/70 pb-4 sm:pb-5">
                    <span className="font-serif text-4xl sm:text-5xl font-light leading-none text-[#B49A6E]">
                      {s.number}
                    </span>
                    <span className="rounded-full border border-[#B49A6E]/35 bg-[#F7F6F2] px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#78716C] uppercase">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 sm:mt-6 font-serif text-2xl sm:text-3xl font-semibold leading-tight text-[#1C1917]">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-[#44403C]">
                    {s.summary}
                  </p>

                  <p className="mt-5 sm:mt-7 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#78716C]">
                    {s.listTitle}
                  </p>

                  {s.ordered ? (
                    <ol className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-[#44403C]">
                      {s.items.map((it, i) => (
                        <li key={it} className="flex gap-2.5 sm:gap-3.5">
                          <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#637057] text-[10px] sm:text-xs font-semibold text-white">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-3 sm:mt-4 grid gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#44403C] sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#637057]" />
                          <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 sm:mt-9 border-t border-stone-100 pt-4 sm:pt-6">
                  <a
                    href={serviceLink(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnOutline} w-full sm:w-auto`}
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>Orçar {s.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ C.2 AUTORIDADE & PERFIL DO ARQUITETO ============ */}
        <section id="sobre" className="bg-[#EFEDE6] py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Coluna Foto / Composição Editorial */}
              <div data-reveal className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-[2rem] border border-stone-300/60 bg-[#637057] shadow-[0_20px_50px_-20px_rgba(28,25,23,0.25)]">
                    <img
                      src="/images/architect-portrait.jpg"
                      alt="Gabriel Neves — Arquiteto e Urbanista"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 text-[#F7F6F2]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B49A6E]/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#F3E5C8] backdrop-blur-xs">
                        <Award className="h-3 w-3 shrink-0" /> {ABOUT.role}
                      </span>
                      <p className="mt-2 font-serif text-2xl sm:text-3xl font-medium">
                        {ABOUT.title}
                      </p>
                      <p className="text-[11px] sm:text-xs tracking-wide text-stone-300">
                        Rio do Sul & Ibirama • Santa Catarina
                      </p>
                    </div>
                  </div>

                  {/* Selo com logo oficial */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-3.5 rounded-xl sm:rounded-2xl border border-stone-200/80 bg-white p-3.5 sm:p-4 shadow-sm">
                    <img
                      src="/images/logo.jpg"
                      alt="Símbolo Gabriel Neves Arquitetura"
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl border border-stone-200 object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1C1917] truncate">
                        Escritório Autoral
                      </p>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-[#78716C] leading-snug">
                        Fundado em Ibirama (2015) • Sede em Rio do Sul desde 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Biografia & Números */}
              <div data-reveal className="lg:col-span-7">
                <p className={eyebrow}>{ABOUT.eyebrow}</p>
                <h2 className={`${h2} mt-2 sm:mt-3`}>
                  Arquitetura pensada para{" "}
                  <span className="italic text-[#637057]">quem vive o espaço.</span>
                </h2>

                <blockquote className="mt-4 sm:mt-6 border-l-2 border-[#B49A6E] pl-4 sm:pl-5 font-serif text-base sm:text-xl lg:text-2xl italic leading-relaxed text-[#1C1917]">
                  “{ABOUT.quote}”
                </blockquote>

                <div className="mt-5 sm:mt-7 space-y-3 sm:space-y-4 text-sm sm:text-[15.5px] leading-relaxed text-[#44403C]">
                  {ABOUT.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <dl className="mt-7 sm:mt-9 grid grid-cols-3 gap-2 sm:gap-4 border-y border-stone-300/70 py-4 sm:py-6">
                  {ABOUT.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1C1917]">
                        {s.value}
                      </dt>
                      <dd className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-medium text-[#78716C] leading-tight">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnPrimary}
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>Agendar conversa com Gabriel</span>
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnOutline}
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0" />
                    <span>{SITE.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ C.3 DIFERENCIAL DE EXECUÇÃO ============ */}
        <section id="entregaveis" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-4 sm:gap-6 lg:flex-row lg:items-end">
            <div data-reveal className="max-w-2xl">
              <p className={eyebrow}>
                <Sparkles className="h-3.5 w-3.5" /> {DELIVERABLES.eyebrow}
              </p>
              <h2 className={`${h2} mt-2 sm:mt-3`}>{DELIVERABLES.title}</h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-sm sm:text-[15px] leading-relaxed text-[#78716C]"
            >
              {DELIVERABLES.subtitle}
            </p>
          </div>

          <div data-stagger className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
            {DELIVERABLES.blocks.map((b) => {
              const Icon = ICONS[b.icon as keyof typeof ICONS];
              return (
                <div
                  key={b.title}
                  data-item
                  className={`${card} relative overflow-hidden p-6 sm:p-8 lg:p-9`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#637057]/12 text-[#637057]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-light text-[#B49A6E]/80">
                      {b.number}
                    </span>
                  </div>
                  <h3 className="mt-5 sm:mt-7 font-serif text-xl sm:text-2xl font-semibold text-[#1C1917]">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-[#44403C]">
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ C.4 PORTFÓLIO & LINGUAGEM VISUAL (LOOKBOOK) ============ */}
        <section id="portfolio" className="bg-[#1C1917] py-16 sm:py-24 lg:py-32 text-stone-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
              <div data-reveal className="max-w-2xl">
                <p className={eyebrow}>Portfólio & Linguagem Visual</p>
                <h2 className={`${h2} mt-2 sm:mt-3 !text-[#F7F6F2]`}>
                  Lookbook de projetos{" "}
                  <span className="italic text-[#D8C8A4]">autorais.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-relaxed text-stone-400">
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
                    className={`rounded-full border px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
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
              className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((p) => (
                <article
                  key={p.id}
                  data-pf
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-stone-900 ${
                    p.featured && filter === "Todos"
                      ? "sm:col-span-2 aspect-[4/3] sm:aspect-[16/10]"
                      : "aspect-[4/3] sm:aspect-[16/11]"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/35 to-transparent" />

                  <div className="relative z-10 p-4 sm:p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#D8C8A4]">
                      <span className="rounded-full border border-[#B49A6E]/50 bg-[#1C1917]/70 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-xs">
                        {p.category}
                      </span>
                      <span>•</span>
                      <span>{p.location}</span>
                      <span>•</span>
                      <span>{p.area}</span>
                    </div>

                    <h3 className="mt-2 sm:mt-3 font-serif text-xl sm:text-2xl font-medium leading-snug text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-xs sm:text-sm leading-relaxed text-stone-300 line-clamp-2">
                      {p.subtitle}
                    </p>

                    <div className="mt-3 sm:mt-4">
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
              className="mt-8 sm:mt-10 flex flex-col items-start justify-between gap-5 sm:gap-6 rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:p-7 lg:p-9 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#637057] text-white">
                  <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-[#F7F6F2]">
                    Mais de 700 publicações no Instagram
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-stone-400">
                    Bastidores de obra, projetos e rotina em{" "}
                    <span className="text-stone-200">{SITE.instagramHandle}</span>
                  </p>
                </div>
              </div>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#F7F6F2] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] transition-all duration-300 hover:bg-white"
              >
                Ver feed no Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ PROCESSO & DEPOIMENTOS ============ */}
        <section id="processo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div data-reveal className="max-w-2xl">
            <p className={eyebrow}>Metodologia</p>
            <h2 className={`${h2} mt-2 sm:mt-3`}>
              Do primeiro traço à entrega{" "}
              <span className="italic text-[#637057]">sem imprevistos.</span>
            </h2>
          </div>

          <div data-stagger className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                data-item
                className={`${card} flex flex-col justify-between p-5 sm:p-7`}
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#B49A6E]">
                    {p.step}
                  </span>
                  <h3 className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl font-semibold text-[#1C1917]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44403C]">
                    {p.text}
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 h-0.5 w-8 sm:w-10 bg-[#637057]/40" />
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div data-stagger className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                data-item
                className="rounded-2xl border border-stone-200/70 bg-[#EFEDE6]/70 p-5 sm:p-8 lg:p-9"
              >
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-[#B49A6E]" />
                <blockquote className="mt-3 sm:mt-4 font-serif text-base sm:text-xl lg:text-2xl italic leading-relaxed text-[#1C1917]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 sm:mt-5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#637057]">
                  {t.author} <span className="text-[#78716C]">• {t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ C.5 FAQ ESTRUTURADO ============ */}
        <section id="faq" className="bg-[#EFEDE6] py-16 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div data-reveal className="lg:col-span-5">
              <p className={eyebrow}>Perguntas Frequentes</p>
              <h2 className={`${h2} mt-2 sm:mt-3`}>
                Clareza antes de{" "}
                <span className="italic text-[#637057]">iniciar seu projeto.</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-relaxed text-[#44403C]">
                Reunimos as principais dúvidas sobre prazos, etapa de terreno,
                atendimento remoto e modalidades de contratação.
              </p>
              <div className="mt-6 sm:mt-8">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>Tirar dúvida no WhatsApp</span>
                </a>
              </div>
            </div>

            <div data-reveal className="space-y-3 sm:space-y-3.5 lg:col-span-7">
              {FAQ.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-stone-200/70 bg-white transition-colors duration-300 hover:border-[#637057]/40"
                  >
                    <h3 className="font-sans text-sm sm:text-base">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-${i}`}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 sm:px-6 text-left font-sans text-sm sm:text-[15.5px] font-semibold text-[#1C1917]"
                      >
                        <span className="leading-snug">{f.q}</span>
                        <ChevronDown
                          className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#637057] transition-transform duration-300 ${
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
                        <p className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-[15px] leading-relaxed text-[#44403C]">
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
        <section id="contato" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div
            data-reveal
            className="grid overflow-hidden rounded-2xl sm:rounded-[2rem] border border-stone-200/70 bg-white shadow-[0_20px_50px_-25px_rgba(28,25,23,0.2)] lg:grid-cols-12"
          >
            <div className="p-5 sm:p-8 lg:p-12 lg:col-span-7">
              <p className={eyebrow}>Localização & Presença Regional</p>
              <h2 className={`${h2} mt-2 sm:mt-3`}>{LOCATION.title}</h2>
              <p className="mt-2.5 sm:mt-3 max-w-xl text-xs sm:text-[15px] leading-relaxed text-[#44403C]">
                {LOCATION.subtitle}
              </p>

              <ul className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {LOCATION.regions.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-[#B49A6E]/50 bg-[#B49A6E]/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#7A6640]"
                  >
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 grid gap-4 border-y border-stone-200/80 py-5 sm:py-6 text-xs sm:text-[15px] text-[#44403C] sm:grid-cols-2">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#637057]" />
                  <div>
                    <p className="font-semibold text-[#1C1917]">{SITE.city}</p>
                    <p className="mt-0.5 font-mono text-[11px] sm:text-xs text-[#78716C]">
                      {SITE.coordinates}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="flex items-center gap-2.5 sm:gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#637057]" />
                    <a
                      href={SITE.phoneHref}
                      className="font-medium text-[#1C1917] hover:text-[#637057]"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2.5 sm:gap-3">
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

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4 shrink-0" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={SITE.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4 shrink-0" />
                  <span>Waze</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[250px] sm:min-h-[320px] bg-stone-200 lg:col-span-5">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-center">
          <HexMark className="mx-auto h-10 w-10 sm:h-14 sm:w-14 text-white/75" />
          <p className="mt-4 sm:mt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#DFC99B]">
            Gabriel Neves • Arquitetura e Interiores
          </p>
          <h2 className="mx-auto mt-3 sm:mt-4 max-w-3xl font-serif text-3xl sm:text-4xl lg:text-6xl font-medium leading-[1.08]">
            {FOOTER.title}
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-[#E1E5DA]">
            {FOOTER.subtitle}
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 sm:mt-9 inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-[#F7F6F2] px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-[#1C1917] shadow-lg transition-all duration-300 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4 text-[#637057] shrink-0" />
            <span>{FOOTER.cta}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:pt-8 text-[11px] sm:text-xs text-[#E1E5DA] sm:flex-row">
            <p>{FOOTER.credits}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="font-mono text-[10px] sm:text-[11px] opacity-80">{SITE.coordinates}</span>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-white"
              >
                <InstagramIcon className="h-3.5 w-3.5" /> {SITE.instagramHandle}
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
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#637057] text-white shadow-xl transition-all duration-300 hover:bg-[#535F48] sm:hidden"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
