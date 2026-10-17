import Link from "next/link";
import { ArrowLeft, LockKeyhole, Trash2 } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#2c211d]">
      <ShopHeader />

      <section className="mx-auto max-w-[1200px] px-5 py-12 lg:px-10 lg:py-20">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9b7b47]">Sua seleção</p>
          <h1 className="mt-3 font-serif text-5xl text-[#4d1230] sm:text-6xl">Carrinho</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
          <div className="bg-[#fbf8f1]">
            <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-[#2c211d]/10 p-5 sm:grid-cols-[140px_1fr_auto] sm:p-7">
              <div className="flex min-h-[160px] items-center justify-center bg-[#f0ebe2]">
                <div className="relative h-32 w-14">
                  <div className="absolute left-1/2 top-0 h-6 w-5 -translate-x-1/2 rounded-t bg-[#211918]" />
                  <div className="absolute bottom-0 left-1/2 h-28 w-12 -translate-x-1/2 rounded-[18px_18px_10px_10px] bg-gradient-to-br from-[#3f071b] to-[#7b173e]" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7b47]">Vinho</p>
                <h2 className="mt-2 font-serif text-2xl text-[#3b2c27]">Tinto selecionado</h2>
                <p className="mt-2 text-xs text-[#766963]">750 ml · quantidade 1</p>
                <button type="button" className="mt-5 inline-flex w-fit items-center gap-2 text-xs text-[#8a7b74]">
                  <Trash2 className="h-4 w-4" /> Remover
                </button>
              </div>
              <div className="col-span-2 flex items-center justify-between border-t border-[#2c211d]/10 pt-4 sm:col-span-1 sm:border-0 sm:pt-0">
                <span className="text-sm text-[#8a7b74] sm:hidden">Subtotal</span>
                <span className="text-lg font-semibold text-[#4d1230]">R$ 149,90</span>
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <Link href="/categoria/vinhos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#74113a]">
                <ArrowLeft className="h-4 w-4" /> Continuar comprando
              </Link>
            </div>
          </div>

          <aside className="h-fit bg-[#efe9de] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#3b2c27]">Resumo</h2>
            <div className="mt-6 space-y-4 border-b border-[#2c211d]/10 pb-6 text-sm">
              <div className="flex justify-between"><span className="text-[#766963]">Subtotal</span><span>R$ 149,90</span></div>
              <div className="flex justify-between"><span className="text-[#766963]">Entrega</span><span>Calcular</span></div>
            </div>
            <div className="flex justify-between py-6 text-lg font-semibold">
              <span>Total</span><span>R$ 149,90</span>
            </div>
            <button type="button" className="flex h-14 w-full items-center justify-center gap-3 bg-[#74113a] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white">
              <LockKeyhole className="h-4 w-4" /> Ir para pagamento
            </button>
            <p className="mt-4 text-center text-[11px] leading-5 text-[#887b74]">
              Checkout demonstrativo. Meios de pagamento e frete serão definidos na implementação.
            </p>
          </aside>
        </div>
      </section>

      <ShopFooter />
    </main>
  );
}
