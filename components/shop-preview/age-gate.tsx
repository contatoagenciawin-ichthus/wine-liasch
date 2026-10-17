"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "emporio-liasch-age-confirmed-v1";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

type GateState = "loading" | "ask" | "denied" | "allowed";

export function AgeGate() {
  const [state, setState] = useState<GateState>("loading");
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { confirmedAt?: number };
        if (parsed.confirmedAt && Date.now() - parsed.confirmedAt < THIRTY_DAYS) {
          setState("allowed");
          return;
        }
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // If storage is unavailable, simply show the gate again.
    }
    setState("ask");
  }, []);

  useEffect(() => {
    if (state === "ask" || state === "denied") {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      if (state === "ask") {
        window.setTimeout(() => confirmRef.current?.focus(), 50);
      }
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [state]);

  const confirmAge = () => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ confirmedAt: Date.now() })
      );
    } catch {
      // Continue even if storage is unavailable.
    }
    setState("allowed");
  };

  if (state === "loading" || state === "allowed") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#160d0b]/88 px-5 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-description"
    >
      <div className="relative w-full max-w-[560px] overflow-hidden border border-white/15 bg-[#f7f1e6] shadow-[0_36px_100px_rgba(0,0,0,.45)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#74113a]" />

        <div className="px-7 pb-8 pt-9 text-center sm:px-12 sm:pb-11 sm:pt-11">
          <Image
            src="/images/logo-emporio-liasch.png"
            alt="Empório Liasch"
            width={190}
            height={70}
            className="mx-auto h-14 w-auto"
            priority
          />

          <div className="mx-auto mt-8 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#74113a]/25 bg-[#74113a] font-serif text-3xl font-semibold text-white shadow-[0_12px_35px_rgba(116,17,58,.18)]">
            18+
          </div>

          {state === "ask" ? (
            <>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7b47]">
                Acesso para maiores de idade
              </p>
              <h2 id="age-gate-title" className="mt-3 font-serif text-3xl leading-tight text-[#4d1230] sm:text-4xl">
                Você tem 18 anos ou mais?
              </h2>
              <p id="age-gate-description" className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#6e625c]">
                Esta loja apresenta e comercializa bebidas alcoólicas. Confirme sua idade para continuar.
              </p>

              <div className="mt-8 grid gap-3">
                <button
                  ref={confirmRef}
                  type="button"
                  onClick={confirmAge}
                  className="min-h-13 bg-[#74113a] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#5f0e31]"
                >
                  Sim, tenho 18 anos ou mais
                </button>
                <button
                  type="button"
                  onClick={() => setState("denied")}
                  className="min-h-13 border border-[#4d1230]/18 px-6 py-4 text-sm font-semibold text-[#4d1230] transition hover:bg-[#4d1230]/5"
                >
                  Não, sou menor de 18 anos
                </button>
              </div>

              <p className="mx-auto mt-6 max-w-md text-[11px] leading-5 text-[#8a7c75]">
                Venda de bebidas alcoólicas proibida para menores de 18 anos. Beba com moderação.
              </p>
            </>
          ) : (
            <>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7b47]">
                Acesso restrito
              </p>
              <h2 id="age-gate-title" className="mt-3 font-serif text-3xl leading-tight text-[#4d1230] sm:text-4xl">
                Esta loja é destinada a maiores de 18 anos.
              </h2>
              <p id="age-gate-description" className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#6e625c]">
                O acesso ao conteúdo comercial de bebidas alcoólicas não está disponível para menores.
              </p>
              <button
                type="button"
                onClick={() => setState("ask")}
                className="mt-8 min-h-13 w-full border border-[#4d1230]/18 px-6 py-4 text-sm font-semibold text-[#4d1230] transition hover:bg-[#4d1230]/5"
              >
                Voltar à confirmação
              </button>
            </>
          )}
        </div>

        <div className="border-t border-[#2c211d]/10 bg-[#efe8dc] px-6 py-4 text-center text-[10px] uppercase tracking-[0.16em] text-[#786a63]">
          Empório Liasch · Americana, SP
        </div>
      </div>
    </div>
  );
}
