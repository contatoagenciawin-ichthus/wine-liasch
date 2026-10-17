"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";

export function ShopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Vinhos", "/categoria/vinhos"],
    ["Espumantes", "/categoria/vinhos"],
    ["Destilados", "/categoria/vinhos"],
    ["Vem Viver", "https://vemviver.emporioliasch.com.br"],
    ["Kits & Presentes", "/categoria/vinhos"],
    ["O Empório", "https://www.emporioliasch.com.br"],
  ];

  return (
    <>
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

          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-emporio-liasch.png"
              alt="Empório Liasch"
              width={190}
              height={70}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
            {links.map(([label, href]) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-xs font-semibold uppercase tracking-[0.13em] text-[#4c403b] transition-colors hover:text-[#74113a]"
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button type="button" className="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 sm:flex" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="hidden h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 sm:flex" aria-label="Minha conta">
              <UserRound className="h-5 w-5" />
            </button>
            <Link href="/carrinho" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#74113a] text-white" aria-label="Carrinho">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c5a065] px-1 text-[10px] font-bold text-[#2c1810]">1</span>
            </Link>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#2c211d]/10 bg-[#f9f6ef] px-6 py-6 lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#2c211d]/10 py-4 text-sm font-semibold uppercase tracking-[0.14em]"
              >
                {label}
                <span>→</span>
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
