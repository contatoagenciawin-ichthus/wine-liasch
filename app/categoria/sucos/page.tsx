import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

const mockupVertical = "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vemviver/d7d758d1c5b425c7702f08b98468fcc374896fac/public/brand/mockups-atualizados/linha-vertical-1.png";
const mockupHorizontal = "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vemviver/d7d758d1c5b425c7702f08b98468fcc374896fac/public/brand/mockups-atualizados/linha-horizontal-1.png";

const juices = [
  ["Suco de Uva Integral", "1 L · Vem Viver", "Catálogo em definição", "10%"],
  ["Suco de Uva Integral", "1,5 L · Vem Viver", "Catálogo em definição", "26%"],
  ["Suco de Uva Branco", "1 L · Vem Viver", "Catálogo em definição", "42%"],
  ["Suco de Uva Branco", "1,5 L · Vem Viver", "Catálogo em definição", "58%"],
  ["Suco de Laranja", "1 L · Vem Viver", "Catálogo em definição", "74%"],
  ["Suco de Laranja", "1,5 L · Vem Viver", "Catálogo em definição", "90%"],
];

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
              Uma marca exclusiva com raízes em Americana desde 1992, agora de volta à mesa em uma linha de sucos integrais.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-[#efe8dc] lg:min-h-[430px]">
            <img
              src={mockupHorizontal}
              alt="Linha de sucos Vem Viver em mockups aprovados"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#2c211d]/10 bg-[#efe8dc]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[.55fr_1.45fr] lg:px-10 lg:py-16">
          <div>
            <span className="font-serif text-6xl text-[#4d1230]/20 sm:text-7xl">1992</span>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7b47]">Americana · origem da marca</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-tight text-[#4d1230] sm:text-4xl">
              O nome volta aos sucos carregando mais de três décadas de história.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#6e625c]">
              A Vem Viver começou como uma pequena casa de sucos naturais. Depois de novos ciclos e de uma trajetória que também passou pelo universo dos vinhos, a marca retorna às origens com um olhar ainda mais apurado para qualidade, procedência e seleção.
            </p>
            <p className="mt-4 font-serif text-xl italic text-[#a37d3e]">O nome permanece. O cuidado também.</p>
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
          {juices.map(([name, detail, price, position]) => (
            <article key={`${name}-${detail}`} className="group bg-[#fcfaf5] p-4 sm:p-6">
              <div className="relative mb-6 min-h-[340px] overflow-hidden bg-[#f0ebe2]">
                <img
                  src={mockupVertical}
                  alt={`${name} Vem Viver`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: `${position} center` }}
                />
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
