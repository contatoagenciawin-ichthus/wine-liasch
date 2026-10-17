"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, ShoppingBag } from "lucide-react";

const showcaseProducts = [
  { label: "Tinto selecionado", detail: "750 ml · seleção do Empório", tone: "from-[#3f071b] to-[#7b173e]" },
  { label: "Espumante brut", detail: "750 ml · frescor e elegância", tone: "from-[#d0b37a] to-[#efe0b8]" },
  { label: "Branco reserva", detail: "750 ml · leve e gastronômico", tone: "from-[#a6933a] to-[#e7daa0]" },
  { label: "Destilado premium", detail: "750 ml · edição de destaque", tone: "from-[#6e3c1b] to-[#b77c42]" },
  { label: "Rosé especial", detail: "750 ml · fresco e versátil", tone: "from-[#c87883] to-[#edc2c8]" },
  { label: "Reserva da casa", detail: "750 ml · estrutura e equilíbrio", tone: "from-[#4e101e] to-[#2a0b10]" },
  { label: "Seleção internacional", detail: "750 ml · perfil clássico", tone: "from-[#2f3b24] to-[#66754a]" },
  { label: "Edição especial", detail: "750 ml · pequena produção", tone: "from-[#251719] to-[#6a3b42]" },
];

function Bottle({ tone }: { tone: string }) {
  return (
    <div className="relative mx-auto h-52 w-20">
      <div className="absolute left-1/2 top-0 h-9 w-6 -translate-x-1/2 rounded-t-md bg-[#27201d]" />
      <div className="absolute left-1/2 top-7 h-5 w-9 -translate-x-1/2 rounded-t-2xl bg-[#332622]" />
      <div className={`absolute bottom-0 left-1/2 h-44 w-[72px] -translate-x-1/2 rounded-[26px_26px_16px_16px] bg-gradient-to-br ${tone} shadow-[0_22px_44px_rgba(30,15,10,.16)]`}>
        <div className="absolute left-1/2 top-[72px] h-14 w-12 -translate-x-1/2 rounded-sm border border-black/10 bg-[#f4efe3] px-1 py-2 text-center">
          <span className="block font-serif text-[8px] uppercase tracking-[0.16em] text-[#3b2c27]">Empório</span>
          <span className="mt-1 block font-serif text-[10px] italic text-[#74113a]">Seleção</span>
          <span className="mt-1 block text-[5px] uppercase tracking-[0.12em] text-[#7f746f]">Liasch</span>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcaseCarousel() {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setItemsPerPage(media.matches ? 4 : 2);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const pages = Math.ceil(showcaseProducts.length / itemsPerPage);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pages);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [pages, paused]);

  const visible = useMemo(() => {
    const start = page * itemsPerPage;
    return showcaseProducts.slice(start, start + itemsPerPage);
  }, [page, itemsPerPage]);

  const go = (next: number) => setPage((next + pages) % pages);

  return (
    <section className="bg-[#f6f1e8] py-16 lg:py-20" aria-label="Vitrine de produtos em destaque">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">Vitrine do Empório</p>
            <h2 className="mt-3 font-serif text-4xl text-[#4d1230] sm:text-5xl">Mais para descobrir</h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4d1230]/20 text-[#4d1230] transition hover:bg-[#4d1230] hover:text-white"
              aria-label={paused ? "Continuar rotação da vitrine" : "Pausar rotação da vitrine"}
              aria-pressed={paused}
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => go(page - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4d1230]/20 text-[#4d1230] transition hover:bg-[#4d1230] hover:text-white"
              aria-label="Itens anteriores"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(page + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4d1230]/20 text-[#4d1230] transition hover:bg-[#4d1230] hover:text-white"
              aria-label="Próximos itens"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {visible.map((product) => (
            <article key={product.label} className="group bg-[#fffdf8] p-4 sm:p-5">
              <a href="/produto/tinto-selecionado" className="block">
                <div className="mb-5 flex min-h-[240px] items-center justify-center bg-[#efe9df] py-6">
                  <Bottle tone={product.tone} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7b47]">Destaque</p>
                <h3 className="mt-2 font-serif text-lg text-[#382923] sm:text-2xl">{product.label}</h3>
                <p className="mt-2 text-xs leading-5 text-[#766963]">{product.detail}</p>
              </a>

              <div className="mt-5 flex items-center justify-between border-t border-[#2c211d]/10 pt-4">
                <span className="text-sm font-semibold text-[#4d1230]">Preço no catálogo</span>
                <a
                  href="/carrinho"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74113a] text-white transition-transform group-hover:scale-105"
                  aria-label={`Adicionar ${product.label}`}
                >
                  <ShoppingBag className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between sm:justify-center">
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                className={`h-1 transition-all duration-300 ${index === page ? "w-10 bg-[#74113a]" : "w-6 bg-[#74113a]/20 hover:bg-[#74113a]/40"}`}
                aria-label={`Ir para grupo ${index + 1}`}
                aria-current={index === page ? "true" : undefined}
              />
            ))}
          </div>

          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => go(page - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4d1230]/20 text-[#4d1230]"
              aria-label="Itens anteriores"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(page + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4d1230]/20 text-[#4d1230]"
              aria-label="Próximos itens"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
