import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";

export function ShopFooter() {
  return (
    <footer className="bg-[#2b211d] px-5 py-20 text-[#f8f0e3] lg:px-10">
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
              <Link href="/categoria/vinhos" className="block hover:text-white">Vinhos</Link>
              <Link href="/categoria/vinhos" className="block hover:text-white">Espumantes</Link>
              <Link href="/categoria/vinhos" className="block hover:text-white">Destilados</Link>
              <Link href="/categoria/sucos" className="block hover:text-white">Sucos Vem Viver</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6bc89]">Empório</p>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              <a href="https://www.emporioliasch.com.br" target="_blank" rel="noopener noreferrer" className="block hover:text-white">Sobre</a>
              <a href="https://www.emporioliasch.com.br" target="_blank" rel="noopener noreferrer" className="block hover:text-white">Contato</a>
              <p>Atendimento</p>
              <p>Políticas</p>
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
    </footer>
  );
}
