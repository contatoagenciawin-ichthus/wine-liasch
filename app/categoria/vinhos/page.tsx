import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

const products = [
  ["Tinto selecionado", "750 ml · seleção do Empório", "R$ 149,90", "from-[#3f071b] to-[#7b173e]"],
  ["Branco reserva", "750 ml · leve e gastronômico", "R$ 119,90", "from-[#a6933a] to-[#e7daa0]"],
  ["Rosé especial", "750 ml · fresco e versátil", "R$ 109,90", "from-[#c87883] to-[#edc2c8]"],
  ["Reserva da casa", "750 ml · estrutura e equilíbrio", "R$ 169,90", "from-[#4e101e] to-[#2a0b10]"],
  ["Seleção internacional", "750 ml · perfil clássico", "R$ 189,90", "from-[#2f3b24] to-[#66754a]"],
  ["Tinto jovem", "750 ml · frutado e direto", "R$ 89,90", "from-[#6c1127] to-[#a53a4e]"],
  ["Branco aromático", "750 ml · cítrico e delicado", "R$ 99,90", "from-[#c9b650] to-[#eadf99]"],
  ["Edição especial", "750 ml · pequena produção", "R$ 219,90", "from-[#251719] to-[#6a3b42]"],
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

export default function VinhosPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#2c211d]">
      <ShopHeader />

      <section className="border-b border-[#2c211d]/10 bg-[#efe8dc]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9b7b47]">Loja / Vinhos</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-5xl text-[#4d1230] sm:text-6xl">Vinhos</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#6e625c]">
                Uma seleção boutique organizada por estilo, origem, ocasião e também pelas vinícolas que fazem parte da curadoria.
              </p>
            </div>
            <div className="text-sm text-[#6e625c]">8 produtos nesta demonstração</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#2c211d]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {["Vinícolas", "Tintos", "Brancos", "Rosés", "Brasil", "Argentina", "Portugal"].map((filter) => (
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

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {products.map(([label, detail, price, tone], index) => (
            <Link
              key={label}
              href={index === 0 ? "/produto/tinto-selecionado" : "/produto/tinto-selecionado"}
              className="group bg-[#fbf8f1] p-4 sm:p-6"
            >
              <div className="mb-6 flex min-h-[280px] items-center justify-center bg-[#f2ede4] py-6">
                <Bottle tone={tone} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7b47]">Seleção</p>
              <h2 className="mt-2 font-serif text-lg text-[#382923] sm:text-2xl">{label}</h2>
              <p className="mt-2 text-xs leading-5 text-[#766963]">{detail}</p>
              <p className="mt-5 text-base font-semibold text-[#4d1230]">{price}</p>
            </Link>
          ))}
        </div>
      </section>

      <ShopFooter />
    </main>
  );
}
