"use client";

import Image from "next/image";
import { HeroCarousel } from "@/components/shop-preview/hero-carousel";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Gift,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound,
  Wine,
  X,
} from "lucide-react";

const categories = [
  { name: "Vinhos", kicker: "Curadoria para todos os estilos", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=85&w=1200&auto=format&fit=crop" },
  { name: "Espumantes", kicker: "Para brindar com intenção", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=85&w=1200&auto=format&fit=crop" },
  { name: "Destilados", kicker: "Seleção para descobrir aos poucos", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=85&w=1200&auto=format&fit=crop" },
];

const products = [
  { label: "Tinto selecionado", detail: "750 ml · seleção do Empório", tone: "from-[#3f071b] to-[#7b173e]" },
  { label: "Espumante brut", detail: "750 ml · frescor e elegância", tone: "from-[#d0b37a] to-[#efe0b8]" },
  { label: "Branco reserva", detail: "750 ml · leve e gastronômico", tone: "from-[#a6933a] to-[#e7daa0]" },
  { label: "Destilado premium", detail: "750 ml · edição de destaque", tone: "from-[#6e3c1b] to-[#b77c42]" },
];

function Bottle({ tone }: { tone: string }) {
  return (
    <div className="relative mx-auto h-56 w-24">
      <div className="absolute left-1/2 top-0 h-10 w-7 -translate-x-1/2 rounded-t-md bg-[#27201d]" />
      <div className="absolute left-1/2 top-8 h-5 w-10 -translate-x-1/2 rounded-t-2xl bg-[#332622]" />
      <div className={`absolute bottom-0 left-1/2 h-48 w-20 -translate-x-1/2 rounded-[28px_28px_18px_18px] bg-gradient-to-br ${tone} shadow-[0_24px_50px_rgba(30,15,10,.18)]`}>
        <div className="absolute left-1/2 top-20 h-16 w-14 -translate-x-1/2 rounded-sm border border-black/10 bg-[#f4efe3] px-1 py-2 text-center">
          <span className="block font-serif text-[9px] uppercase tracking-[0.18em] text-[#3b2c27]">Empório</span>
          <span className="mt-1 block font-serif text-[11px] italic text-[#74113a]">Seleção</span>
          <span className="mt-1 block text-[6px] uppercase tracking-[0.14em] text-[#7f746f]">Liasch</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopPreview() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#2c211d]">
      <div className="bg-[#271b17] px-4 py-2 text-center text-[11px] uppercase tracking-[0.2em] text-[#f4ebdb]/80">
        Demonstração visual · produtos, preços e condições ilustrativos
      </div>

      <header className="sticky top-0 z-50 border-b border-[#7c183b]/10 bg-[#f9f6ef]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-5 lg:h-24 lg:px-10">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2c211d]/10 lg:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a href="#inicio" className="shrink-0">
            <Image
              src="/images/logo-emporio-liasch.png"
              alt="Empório Liasch"
              width={190}
              height={70}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
            {["Vinhos", "Espumantes", "Destilados", "Vem Viver", "Kits & Presentes", "O Empório"].map((item) => (
              <a
                key={item}
                href={item === "O Empório" ? "https://www.emporioliasch.com.br" : item === "Vem Viver" ? "/categoria/sucos" : item === "Vinhos" ? "/categoria/vinhos" : "#categorias"}
                className="text-xs font-semibold uppercase tracking-[0.13em] text-[#4c403b] transition-colors hover:text-[#74113a]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button type="button" className="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 sm:flex" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 sm:flex" aria-label="Minha conta">
              <UserRound className="h-5 w-5" />
            </button>
            <a href="/carrinho" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#74113a] text-white" aria-label="Carrinho">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c5a065] px-1 text-[10px] font-bold text-[#2c1810]">1</span>
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#2c211d]/10 bg-[#f9f6ef] px-6 py-6 lg:hidden">
            {["Vinhos", "Espumantes", "Destilados", "Vem Viver", "Kits & Presentes", "O Empório"].map((item) => (
              <a
                key={item}
                href="#categorias"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#2c211d]/10 py-4 text-sm font-semibold uppercase tracking-[0.14em]"
              >
                {item}<ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <HeroCarousel />

      <section id="categorias" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">Comece por aqui</span>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-[#4d1230] sm:text-5xl">
              Encontre o seu próximo rótulo.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#6e625c]">
            Uma navegação pensada para quem já sabe o que procura e também para quem quer descobrir algo novo.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat, index) => (
            <a
              key={cat.name}
              href="/categoria/vinhos"
              className={`group relative min-h-[400px] overflow-hidden ${index === 0 ? "md:row-span-1" : ""}`}
            >
              <img src={cat.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/65">{cat.kicker}</p>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-serif text-4xl">{cat.name}</h3>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-[#74113a]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="selecoes" className="bg-[#efe9de] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">Curadoria Liasch</span>
              <h2 className="mt-3 font-serif text-4xl text-[#4d1230] sm:text-5xl">Escolhas do Empório</h2>
            </div>
            <a href="/categoria/vinhos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#74113a]">
              Ver todos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {products.map((product) => (
              <article key={product.label} className="group bg-[#fbf8f1] p-4 sm:p-6">
                <div className="mb-6 flex min-h-[280px] items-center justify-center bg-[#f2ede4] py-6">
                  <Bottle tone={product.tone} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7b47]">Destaque</p>
                <a href="/produto/tinto-selecionado"><h3 className="mt-2 font-serif text-xl text-[#382923] sm:text-2xl">{product.label}</h3></a>
                <p className="mt-2 text-xs leading-5 text-[#766963]">{product.detail}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#2c211d]/10 pt-4">
                  <span className="text-sm font-semibold text-[#4d1230]">Preço no catálogo</span>
                  <a href="/carrinho" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74113a] text-white transition-transform group-hover:scale-105" aria-label={`Adicionar ${product.label}`}>
                    <ShoppingBag className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden">
          <Image src="/images/hero1.jpg" alt="Seleção de vinhos no Empório Liasch" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="flex items-center bg-[#4d1230] px-7 py-16 text-[#fff8ec] lg:px-16">
          <div className="max-w-xl">
            <Wine className="mb-7 h-8 w-8 text-[#d6bc89]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6bc89]">Escolher também é uma experiência</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A garrafa certa começa pela conversa certa.</h2>
            <p className="mt-6 text-base leading-7 text-[#fff8ec]/72">
              Para um jantar, um presente ou simplesmente para conhecer algo novo. A curadoria do Empório aproxima cada ocasião do rótulo que combina com ela.
            </p>
            <a href="https://wa.me/5519997088241" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#d6bc89] pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d6bc89]">
              Falar com o Empório <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="vemviver" className="overflow-hidden bg-[#fcfaf5]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-28">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9b7b47]">Uma nova frente da casa</span>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-[#4d1230] sm:text-6xl">
              Vem Viver.
              <span className="mt-2 block italic text-[#a37d3e]">Do campo para a mesa.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#6d605a]">
              Um espaço dedicado à linha de sucos Vem Viver, integrado ao mesmo universo de curadoria do Empório e preparado para crescer com novas categorias.
            </p>
            <a href="/categoria/sucos" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#4d1230] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white">
              Ver sucos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="order-1 relative flex min-h-[480px] items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_45%_28%,#f0d39b_0%,#d9b26e_22%,#7b173e_60%,#3b0b20_100%)] lg:order-2">
            <div className="absolute left-7 top-7 rounded-full border border-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80">Vem Viver</div>
            <div className="relative mb-[-45px] flex items-end gap-3">
              {[
                ["h-[380px] w-[120px]","bg-gradient-to-br from-[#4f3a22] to-[#160d09]"],
                ["h-[330px] w-[105px]","bg-gradient-to-br from-[#e09426] to-[#9e3d17]"],
                ["h-[360px] w-[112px]","bg-gradient-to-br from-[#76521e] to-[#29140d]"],
              ].map(([size,tone],i)=>(
                <div key={i} className={`relative rounded-[45px_45px_24px_24px] ${size} ${tone} shadow-2xl`}>
                  <div className="absolute left-1/2 top-[-22px] h-12 w-10 -translate-x-1/2 rounded-t-lg bg-[#efe8d9]" />
                  <div className="absolute left-1/2 top-[125px] w-[82%] -translate-x-1/2 bg-[#f3ead8] px-2 py-6 text-center">
                    <span className="block font-serif text-2xl italic text-[#74113a]">Vem Viver</span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[0.18em] text-[#67584f]">suco integral</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="emporio" className="border-y border-[#2c211d]/10 bg-[#f1ece2]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-4">
          {[
            [Truck, "Entrega pensada", "Logística definida conforme a operação."],
            [CreditCard, "Pagamento seguro", "Meios de pagamento integrados à loja."],
            [ShieldCheck, "Compra protegida", "Checkout e dados com segurança."],
            [MessageCircle, "Atendimento humano", "O Empório continua perto de quem compra."],
          ].map(([Icon,title,text])=> {
            const C = Icon as typeof Truck;
            return (
              <div key={title as string} className="border-b border-[#2c211d]/10 p-8 lg:border-b-0 lg:border-r">
                <C className="mb-5 h-6 w-6 text-[#74113a]" />
                <h3 className="font-serif text-xl text-[#3b2d27]">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-[#746761]">{text as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#2b211d] px-5 py-20 text-[#f8f0e3] lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Image src="/images/logo-emporio-liasch-light.png" alt="Empório Liasch" width={210} height={80} className="h-16 w-auto" />
            <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
              Vinho, curadoria e experiências em Americana. Uma loja pensada para ampliar o Empório sem perder o cuidado de quem está do outro lado.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6bc89]">Loja</p>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <p>Vinhos</p><p>Espumantes</p><p>Destilados</p><a href="/categoria/sucos" className="block hover:text-white">Sucos Vem Viver</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6bc89]">Empório</p>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <p>Sobre</p><p>Contato</p><p>Atendimento</p><p>Políticas</p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6bc89]">Americana · SP</p>
              <div className="mt-4 space-y-4 text-sm text-white/65">
                <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Rua Cabo Oswaldo de Moraes, 42</p>
                <p className="flex gap-2"><Instagram className="mt-0.5 h-4 w-4 shrink-0" /> @emporio.liasch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-[1440px] border-t border-white/10 pt-6">
          <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-white/48">
            Venda de bebidas alcoólicas proibida para menores de 18 anos. Beba com moderação.
          </p>
          <div className="flex flex-col justify-between gap-3 text-xs text-white/35 sm:flex-row">
            <span>Prévia de layout · Empório Liasch</span>
            <span>Estrutura comercial demonstrativa</span>
          </div>
        </div>
      </section>
    </main>
  );
}
