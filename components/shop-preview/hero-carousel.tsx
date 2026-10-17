"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Pause, Play } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  imageAlt?: string;
  theme: "wine" | "cellar" | "juice";
};

const slides: Slide[] = [
  {
    eyebrow: "20 anos de curadoria em Americana",
    title: <>Para quem gosta de <span className="italic text-[#d6bc89]">escolher bem.</span></>,
    description: "Vinhos, espumantes e destilados reunidos com o olhar de quem vive esse universo há duas décadas.",
    primaryLabel: "Explorar seleção",
    primaryHref: "#selecoes",
    secondaryLabel: "Conhecer o Empório",
    secondaryHref: "https://www.emporioliasch.com.br",
    image: "/images/hero1.jpg",
    imageAlt: "Experiência com vinhos no Empório Liasch",
    theme: "wine",
  },
  {
    eyebrow: "Curadoria para diferentes ocasiões",
    title: <>Rótulos para diferentes <span className="italic text-[#d6bc89]">momentos.</span></>,
    description: "Para um jantar, um presente, uma descoberta ou uma boa conversa. A seleção começa pela ocasião.",
    primaryLabel: "Ver vinhos",
    primaryHref: "/categoria/vinhos",
    secondaryLabel: "Falar com o Empório",
    secondaryHref: "https://wa.me/5519997088241",
    image: "https://images.unsplash.com/photo-1781181727460-ccd6962647d4?auto=format&fit=crop&q=85&w=2200",
    imageAlt: "Exposição premium de vinhos em ambiente sofisticado",
    theme: "cellar",
  },
  {
    eyebrow: "Uma nova frente na vitrine do Empório",
    title: <>Vem Viver. <span className="italic text-[#e5c989]">Feito para a mesa.</span></>,
    description: "Sucos integrais em uma nova categoria da loja, com espaço próprio para a linha e seus diferentes sabores.",
    primaryLabel: "Ver sucos",
    primaryHref: "/categoria/sucos",
    theme: "juice",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section
      id="inicio"
      className="relative min-h-[680px] overflow-hidden lg:min-h-[760px]"
      aria-roledescription="carrossel"
      aria-label="Destaques da loja"
    >
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
          aria-hidden={index !== active}
        >
          {item.theme !== "juice" ? (
            <>
              <img src={item.image} alt={item.imageAlt || ""} className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 ${item.theme === "wine"
                ? "bg-[linear-gradient(90deg,rgba(25,12,12,.84)_0%,rgba(45,15,25,.57)_42%,rgba(45,15,25,.14)_72%,rgba(0,0,0,.08)_100%)]"
                : "bg-[linear-gradient(90deg,rgba(19,13,12,.86)_0%,rgba(45,26,20,.58)_46%,rgba(35,20,15,.16)_75%,rgba(0,0,0,.08)_100%)]"}`} />
            </>
          ) : (
            <div className="absolute inset-0 overflow-hidden bg-[#3f1328]">
              <img
                src="https://raw.githubusercontent.com/contatoagenciawin-ichthus/vemviver/d7d758d1c5b425c7702f08b98468fcc374896fac/public/brand/mockups-atualizados/linha-horizontal-1.png"
                alt="Linha de sucos Vem Viver"
                className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
              />
              <img
                src="https://raw.githubusercontent.com/contatoagenciawin-ichthus/vemviver/d7d758d1c5b425c7702f08b98468fcc374896fac/public/brand/mockups-atualizados/linha-vertical-1.png"
                alt="Linha de sucos Vem Viver"
                className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#240c18]/86 via-[#361126]/48 to-[#241318]/12" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-black/12" />
            </div>
          )}
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 py-20 lg:min-h-[760px] lg:px-12">
        <div className="max-w-3xl" aria-live="polite">
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d6bc89]">
            <span className="h-px w-10 bg-[#d6bc89]" />
            {slide.eyebrow}
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-[#fffaf2] sm:text-6xl lg:text-[82px]">
            {slide.title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#fffaf2]/78 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={slide.primaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#f6efe2] px-7 text-sm font-bold uppercase tracking-[0.12em] text-[#55102d] transition-transform hover:-translate-y-0.5"
            >
              {slide.primaryLabel} <ArrowRight className="h-4 w-4" />
            </a>
            {slide.secondaryLabel && slide.secondaryHref && (
              <a
                href={slide.secondaryHref}
                target={slide.secondaryHref.startsWith("http") ? "_blank" : undefined}
                rel={slide.secondaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-12 items-center justify-center border border-white/45 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
              >
                {slide.secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 right-6 z-30 mx-auto flex max-w-[1344px] items-center justify-between lg:left-12 lg:right-12">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1 transition-all duration-300 ${index === active ? "w-12 bg-[#d6bc89]" : "w-7 bg-white/35 hover:bg-white/60"}`}
              aria-label={`Ir para banner ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
          <span className="ml-3 text-[10px] tabular-nums tracking-[0.18em] text-white/65">
            0{active + 1} / 0{slides.length}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white hover:text-[#4d1230]"
            aria-label={paused ? "Continuar rotação dos banners" : "Pausar rotação dos banners"}
            aria-pressed={paused}
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white hover:text-[#4d1230]"
            aria-label="Banner anterior"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white hover:text-[#4d1230]"
            aria-label="Próximo banner"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <a href="#categorias" className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/65 xl:flex">
        Descubra <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
