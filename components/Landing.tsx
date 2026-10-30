"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Box,
  Check,
  ChevronDown,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
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
  serviceLink,
  type PortfolioCategory,
} from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ICONS = { box: Box, layers: Layers, wallet: Wallet } as const;

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B49A6E]";
const h2 =
  "font-serif text-4xl font-medium leading-[1.05] text-[#1C1917] sm:text-5xl lg:text-6xl";
const card =
  "rounded-2xl border border-stone-200/60 bg-white shadow-[0_10px_40px_-18px_rgba(28,25,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#637057]/40";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#637057] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535F48]";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#637057]/40 px-5 py-2.5 text-sm font-semibold text-[#535F48] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637057] hover:bg-[#637057] hover:text-white";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
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
  const root = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"Todos" | PortfolioCategory>("Todos");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Animações globais: navbar, hero e reveals por seção (escopo no container)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          start: 60,
          onUpdate: (self) => setScrolled(self.scroll() > 60),
        });

        gsap.from("[data-hero] > *", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        });
        gsap.from("[data-hero-bar] > *", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.7,
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
      // Sem animação: garante scroll state mesmo com reduced motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      });
    },
    { scope: root },
  );

  // Re-anima a grade do portfólio ao trocar o filtro
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
    { scope: grid, dependencies: [filter], revertOnUpdate: true },
  );

  const items =
    filter === "Todos" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  const lightNav = !scrolled && !menuOpen;

  return (
    <div ref={root} className="overflow-x-clip">
      {/* ============ NAVBAR ============ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          lightNav
            ? "border-transparent bg-transparent backdrop-blur-[2px]"
            : "border-stone-200/50 bg-[#F7F6F2]/90 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#topo"
            className={`flex items-center gap-3 transition-colors duration-500 ${
              lightNav ? "text-white" : "text-[#1C1917]"
            }`}
            aria-label="Gabriel Neves Arquitetura e Interiores"
          >
            <HexMark
              className={`h-9 w-9 ${lightNav ? "text-white" : "text-[#637057]"}`}
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-semibold tracking-[0.25em]">
                GABRIEL NEVES
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] opacity-80">
                ARQUITETURA E INTERIORES
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] font-medium transition-colors duration-300 ${
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
              className={`${btnPrimary} hidden !py-2.5 sm:inline-flex`}
            >
              Iniciar Projeto
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className={`rounded-full p-2 lg:hidden ${
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
                    className="block border-b border-stone-200/60 py-3 text-base font-medium text-stone-800"
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
        {/* ============ HERO ============ */}
        <section
          data-hero-wrap
          className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#1C1917]"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-hero-img
              src="/images/hero-mobile.jpg"
              alt="Residência contemporânea com madeira ripada, concreto aparente e piscina ao entardecer"
              className="absolute inset-0 h-[112%] w-full object-cover"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/35 to-[#1C1917]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/65 via-transparent to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-36 lg:px-8">
            <div data-hero className="max-w-3xl">
              <p className="mb-6 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.25em] text-[#D8C8A4] sm:text-[11px]">
                {HERO.eyebrow}
              </p>
              <h1 className="font-serif text-5xl font-medium leading-[0.98] text-white sm:text-7xl lg:text-[5.5rem]">
                Ambientes pensados <em className="font-normal text-[#D8C8A4]">para a vida.</em>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
                {HERO.subtitle}
              </p>
              <div className="pt-9">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#F7F6F2] px-7 py-4 text-sm font-semibold text-[#1C1917] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#637057]" />
                  {HERO.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <ul
              data-hero-bar
              className="mt-14 grid gap-3 border-t border-white/20 pt-6 text-[13px] text-stone-100 sm:grid-cols-3 sm:gap-6"
            >
              {HERO.authority.map((a) => (
                <li key={a} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B49A6E]" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ SOBRE ============ */}
        <section id="sobre" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
            <div data-reveal className="lg:col-span-5">
              <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#637057] p-8 text-[#F7F6F2] sm:p-10">
                <HexMark className="absolute -right-16 -top-12 h-80 w-80 text-white/10" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E3D6B6]">
                  {ABOUT.eyebrow}
                </p>
                <div className="relative">
                  <h3 className="font-serif text-5xl font-medium leading-none sm:text-6xl">
                    {ABOUT.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#E8E6DC]">{ABOUT.role}</p>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                    {ABOUT.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="font-serif text-3xl font-medium">{s.value}</dt>
                        <dd className="mt-1 text-[11px] leading-snug text-[#E8E6DC]">
                          {s.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div data-reveal className="flex flex-col justify-center lg:col-span-7">
              <p className={eyebrow}>Autoridade</p>
              <h2 className={`${h2} mt-4`}>
                Técnica rigorosa, <span className="italic text-[#637057]">estética refinada.</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[#44403C]">
                {ABOUT.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-9">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" /> Conversar com o Gabriel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SERVIÇOS ============ */}
        <section id="servicos" className="bg-[#EFEDE6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div data-reveal className="max-w-2xl">
              <p className={eyebrow}>Atuação</p>
              <h2 className={`${h2} mt-4`}>Quatro pilares para o seu espaço.</h2>
            </div>

            <div data-stagger className="mt-14 grid gap-6 md:grid-cols-2">
              {SERVICES.map((s) => (
                <article
                  key={s.id}
                  data-item
                  className={`${card} flex flex-col p-7 sm:p-9`}
                >
                  <span className="font-serif text-5xl font-light text-[#B49A6E]">
                    {s.number}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#1C1917]">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
                    {s.summary}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#78716C]">
                    {s.listTitle}
                  </p>
                  {s.ordered ? (
                    <ol className="mt-3 space-y-3 text-sm text-[#44403C]">
                      {s.items.map((it, i) => (
                        <li key={it} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#637057]/10 text-xs font-semibold text-[#535F48]">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-3 space-y-2.5 text-sm text-[#44403C]">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#637057]" />
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-8">
                    <a
                      href={serviceLink(s.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnOutline}
                    >
                      <MessageCircle className="h-4 w-4" /> Orçar este serviço
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ENTREGÁVEIS ============ */}
        <section id="entregaveis" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="max-w-2xl">
            <p className={eyebrow}>{DELIVERABLES.eyebrow}</p>
            <h2 className={`${h2} mt-4`}>{DELIVERABLES.title}</h2>
          </div>
          <div data-stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {DELIVERABLES.blocks.map((b) => {
              const Icon = ICONS[b.icon as keyof typeof ICONS];
              return (
                <div key={b.title} data-item className={`${card} p-8`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#637057]/10 text-[#637057]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#1C1917]">
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

        {/* ============ PORTFÓLIO ============ */}
        <section id="portfolio" className="bg-[#1C1917] py-24 text-stone-200 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div data-reveal className="max-w-2xl">
                <p className={eyebrow}>Portfólio & linguagem visual</p>
                <h2 className={`${h2} mt-4 !text-[#F7F6F2]`}>
                  Lookbook de projetos.
                </h2>
              </div>
              <div role="tablist" aria-label="Filtrar portfólio" className="flex flex-wrap gap-2">
                {PORTFOLIO_FILTERS.map((f) => (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={filter === f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
                      filter === f
                        ? "border-[#B49A6E] bg-[#B49A6E] text-[#1C1917]"
                        : "border-white/20 text-stone-300 hover:border-[#B49A6E]/70"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={grid}
              className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
            >
              {items.map((p) => (
                <figure
                  key={p.title}
                  data-pf
                  className={`group relative overflow-hidden rounded-2xl bg-stone-800 ${
                    "aspect-[16/11]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={`${p.title} - ${p.category}`}
                    loading="lazy"
                    style={{
                      objectPosition: p.position,
                      transform: `scale(${p.scale})`,
                      transformOrigin: p.position,
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8C8A4]">
                      {p.category}
                    </span>
                    <p className="mt-1 font-serif text-lg font-semibold leading-tight text-white sm:text-2xl">
                      {p.title}
                    </p>
                    <p className="text-xs text-stone-300">{p.place}</p>
                  </figcaption>
                </figure>
              ))}
              <a
                data-pf
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-[16/11] flex-col items-start justify-end gap-3 rounded-2xl border border-white/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B49A6E]/60 sm:col-span-2 sm:aspect-auto sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block font-serif text-2xl font-semibold text-[#F7F6F2] sm:text-3xl">
                    Veja mais projetos no Instagram
                  </span>
                  <span className="mt-1 block text-sm text-stone-400">
                    Interiores, fachadas e obras em {SITE.instagramHandle}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8C8A4]">
                  <InstagramIcon className="h-5 w-5" /> Abrir perfil
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ PROCESSO ============ */}
        <section id="processo" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div data-reveal className="max-w-2xl">
            <p className={eyebrow}>Processo</p>
            <h2 className={`${h2} mt-4`}>Do primeiro contato à obra.</h2>
          </div>
          <div data-stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                data-item
                className="border-t border-[#637057]/40 pt-6"
              >
                <span className="font-serif text-4xl font-light text-[#B49A6E]">
                  {p.step}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1C1917]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#44403C]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="bg-[#EFEDE6] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
            <div data-reveal className="lg:col-span-4">
              <p className={eyebrow}>Dúvidas frequentes</p>
              <h2 className={`${h2} mt-4`}>Antes de começar.</h2>
            </div>
            <div data-reveal className="space-y-3 lg:col-span-8">
              {FAQ.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-stone-200/60 bg-white transition-colors duration-300 hover:border-[#637057]/40"
                  >
                    <h3 className="font-sans text-base">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-${i}`}
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-sans font-semibold text-[#1C1917]"
                      >
                        {f.q}
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

        {/* ============ CONTATO ============ */}
        <section id="contato" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div
            data-reveal
            className="grid overflow-hidden rounded-[2rem] border border-stone-200/60 bg-white shadow-[0_20px_60px_-25px_rgba(28,25,23,0.25)] lg:grid-cols-2"
          >
            <div className="p-8 sm:p-12">
              <p className={eyebrow}>Localização & contato</p>
              <h2 className={`${h2} mt-4`}>{LOCATION.title}</h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {LOCATION.regions.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-[#B49A6E]/50 bg-[#B49A6E]/10 px-4 py-1.5 text-xs font-semibold text-[#7A6640]"
                  >
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4 text-[15px] text-[#44403C]">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#637057]" />
                  <span>
                    {SITE.city}
                    <br />
                    <span className="text-sm text-[#78716C]">{SITE.coordinates}</span>
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#637057]" />
                  <a href={SITE.phoneHref} className="hover:text-[#637057]">
                    {SITE.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <InstagramIcon className="h-5 w-5 shrink-0 text-[#637057]" />
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#637057]"
                  >
                    {SITE.instagramHandle}
                  </a>
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp direto
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4" /> Google Maps
                </a>
                <a
                  href={SITE.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnOutline}
                >
                  <Navigation className="h-4 w-4" /> Waze
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] bg-stone-200">
              <iframe
                title="Mapa - Rio do Sul, SC"
                src="https://maps.google.com/maps?q=-27.215806,-49.643444&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[40%]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#535F48] text-[#F7F6F2]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <HexMark className="mx-auto h-14 w-14 text-white/70" />
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-medium leading-[1.05] sm:text-6xl">
            {FOOTER.title}
          </h2>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F7F6F2] px-8 py-4 text-sm font-semibold text-[#1C1917] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4 text-[#637057]" />
            {FOOTER.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-[#E1E5DA] sm:flex-row">
            <p>{FOOTER.credits}</p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante (mobile) */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#637057] text-white shadow-xl transition-all duration-300 hover:bg-[#535F48] sm:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
