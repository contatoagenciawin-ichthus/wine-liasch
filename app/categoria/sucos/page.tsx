import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

const juices = [
  ["Suco de Uva Integral", "1 L · Vem Viver", "Catálogo em definição", "from-[#3b1327] to-[#6f2149]", "#f3e8cf"],
  ["Suco de Uva Integral", "1,5 L · Vem Viver", "Catálogo em definição", "from-[#2b0f20] to-[#5b173c]", "#f3e8cf"],
  ["Suco de Uva Branco", "1 L · Vem Viver", "Catálogo em definição", "from-[#7e6a2f] to-[#c1a457]", "#f3e8cf"],
  ["Suco de Uva Branco", "1,5 L · Vem Viver", "Catálogo em definição", "from-[#695927] to-[#ad9349]", "#f3e8cf"],
  ["Suco de Laranja", "1 L · Vem Viver", "Catálogo em definição", "from-[#d87316] to-[#f2a82e]", "#fff3db"],
  ["Suco de Laranja", "1,5 L · Vem Viver", "Catálogo em definição", "from-[#c66112] to-[#e99421]", "#fff3db"],
];

function JuiceBottle({ tone, labelBg, large }: { tone: string; labelBg: string; large?: boolean }) {
  return (
    <div className={`relative mx-auto ${large ? "h-[300px] w-[118px]" : "h-[260px] w-[102px]"}`}>
      <div className="absolute left-1/2 top-0 h-9 w-10 -translate-x-1/2 rounded-t-lg bg-[#ede7da]" />
      <div className="absolute left-1/2 top-7 h-8 w-14 -translate-x-1/2 rounded-t-[22px] bg-[#efe8d9]" />
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[38px_38px_22px_22px] bg-gradient-to-br ${tone} shadow-[0_24px_55px_rgba(38,18,18,.16)] ${large ? "h-[260px] w-[108px]" : "h-[225px] w-[92px]"}`}>
        <div
          className="absolute left-1/2 top-[42%] w-[82%] -translate-x-1/2 px-2 py-5 text-center shadow-sm"
          style={{ backgroundColor: labelBg }}
        >
          <span className="block font-serif text-lg italic text-[#74113a]">Vem Viver</span>
          <span className="mt-1 block text-[7px] uppercase tracking-[0.16em] text-[#67584f]">suco integral</span>
        </div>
      </div>
    </div>
  );
}

export default function JuicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#2c211d]">
      <ShopHeader />

      <section className="overflow-hidden bg-[#4d1230] text-[#fff8ec]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-10 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#d6bc89]">Loja / Sucos</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Sucos Vem Viver</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
              Uma vitrine dedicada à linha de sucos, integrada à experiência comercial do Empório.
            </p>
          </div>
          <div className="flex items-end justify-center gap-3">
            <JuiceBottle tone="from-[#3b1327] to-[#6f2149]" labelBg="#f3e8cf" large />
            <JuiceBottle tone="from-[#d87316] to-[#f2a82e]" labelBg="#fff3db" />
            <JuiceBottle tone="from-[#7e6a2f] to-[#c1a457]" labelBg="#f3e8cf" large />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#2c211d]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {["Todos", "Uva", "Uva branca", "Laranja", "1 L", "1,5 L"].map((filter) => (
              <button key={filter} type="button" className="rounded-full border border-[#4d1230]/15 px-4 py-2 text-xs font-semibold text-[#4d1230] hover:bg-[#4d1230] hover:text-white">
                {filter}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" className="inline-flex items-center gap-2 rounded-full border border-[#2c211d]/15 px-4 py-2 text-xs">
              <SlidersHorizontal className="h-4 w-4" /> Filtros
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-full border border-[#2c211d]/15 px-4 py-2 text-xs">
              Mais relevantes <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 md:gap-5">
          {juices.map(([name, detail, price, tone, labelBg], index) => (
            <article key={`${name}-${detail}`} className="group bg-[#fcfaf5] p-4 sm:p-6">
              <div className="mb-6 flex min-h-[340px] items-center justify-center bg-[#f0ebe2] py-7">
                <JuiceBottle tone={tone} labelBg={labelBg} large={index % 2 === 1} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7b47]">Vem Viver</p>
              <h2 className="mt-2 font-serif text-lg text-[#382923] sm:text-2xl">{name}</h2>
              <p className="mt-2 text-xs leading-5 text-[#766963]">{detail}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#2c211d]/10 pt-4">
                <span className="text-sm font-semibold text-[#4d1230]">{price}</span>
                <Link href="/carrinho" className="text-xs font-bold uppercase tracking-[0.12em] text-[#74113a]">
                  Ver produto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ShopFooter />
    </main>
  );
}
