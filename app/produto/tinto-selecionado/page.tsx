import Link from "next/link";
import { Heart, Minus, Plus, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

function Bottle() {
  return (
    <div className="relative mx-auto h-[460px] w-[190px]">
      <div className="absolute left-1/2 top-0 h-20 w-14 -translate-x-1/2 rounded-t-lg bg-[#211918]" />
      <div className="absolute left-1/2 top-16 h-10 w-20 -translate-x-1/2 rounded-t-[30px] bg-[#30211e]" />
      <div className="absolute bottom-0 left-1/2 h-[380px] w-[160px] -translate-x-1/2 rounded-[48px_48px_28px_28px] bg-gradient-to-br from-[#3f071b] to-[#7b173e] shadow-[0_30px_80px_rgba(30,15,10,.2)]">
        <div className="absolute left-1/2 top-[150px] w-[118px] -translate-x-1/2 border border-black/10 bg-[#f4efe3] px-4 py-7 text-center">
          <span className="block font-serif text-sm uppercase tracking-[0.18em] text-[#3b2c27]">Empório</span>
          <span className="mt-2 block font-serif text-2xl italic text-[#74113a]">Seleção</span>
          <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-[#7f746f]">Liasch</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#2c211d]">
      <ShopHeader />

      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-16">
        <p className="mb-8 text-xs uppercase tracking-[0.18em] text-[#8a7b74]">
          <Link href="/" className="hover:text-[#74113a]">Loja</Link> / <Link href="/categoria/vinhos" className="hover:text-[#74113a]">Vinhos</Link> / Tinto selecionado
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="flex min-h-[600px] items-center justify-center bg-[#efe9df] px-8 py-16">
            <Bottle />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">Curadoria Liasch</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#4d1230] sm:text-6xl">Tinto selecionado</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.12em] text-[#7d7069]">750 ml · vinho tinto · demonstração</p>
            <p className="mt-8 text-3xl font-semibold text-[#3b2c27]">R$ 149,90</p>
            <p className="mt-2 text-xs text-[#8a7b74]">Valor meramente ilustrativo para composição do layout.</p>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#665a55]">
              Um rótulo apresentado aqui apenas para demonstrar como será a experiência de produto: informações objetivas, destaque para a garrafa e espaço para a curadoria do Empório.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#2c211d]/10 p-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8a7b74]">Origem</span>
                <p className="mt-1 font-medium">Informação do catálogo</p>
              </div>
              <div className="border border-[#2c211d]/10 p-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8a7b74]">Uva</span>
                <p className="mt-1 font-medium">Informação do catálogo</p>
              </div>
              <div className="border border-[#2c211d]/10 p-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8a7b74]">Safra</span>
                <p className="mt-1 font-medium">Conforme disponibilidade</p>
              </div>
              <div className="border border-[#2c211d]/10 p-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8a7b74]">Perfil</span>
                <p className="mt-1 font-medium">Descrição do Empório</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex h-14 items-center justify-between border border-[#2c211d]/15 px-4 sm:w-36">
                <button type="button" aria-label="Diminuir quantidade"><Minus className="h-4 w-4" /></button>
                <span className="font-semibold">1</span>
                <button type="button" aria-label="Aumentar quantidade"><Plus className="h-4 w-4" /></button>
              </div>
              <Link href="/carrinho" className="inline-flex h-14 flex-1 items-center justify-center gap-3 bg-[#74113a] px-8 text-sm font-bold uppercase tracking-[0.12em] text-white">
                <ShoppingBag className="h-5 w-5" /> Adicionar ao carrinho
              </Link>
              <button type="button" className="flex h-14 w-14 items-center justify-center border border-[#2c211d]/15" aria-label="Favoritar">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 border-t border-[#2c211d]/10 pt-6 sm:grid-cols-2">
              <p className="flex gap-3 text-sm text-[#665a55]"><Truck className="h-5 w-5 text-[#74113a]" /> Frete calculado no checkout</p>
              <p className="flex gap-3 text-sm text-[#665a55]"><ShieldCheck className="h-5 w-5 text-[#74113a]" /> Compra em ambiente seguro</p>
            </div>
          </div>
        </div>
      </section>

      <ShopFooter />
    </main>
  );
}
