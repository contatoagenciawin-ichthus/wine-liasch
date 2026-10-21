import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Wine } from "lucide-react";
import { ShopHeader } from "@/components/shop-preview/shop-header";
import { ShopFooter } from "@/components/shop-preview/shop-footer";

const principles = [
  {
    number: "01",
    title: "Curadoria antes de quantidade",
    text: "A proposta não é reunir tudo. É escolher o que merece fazer parte da seleção do Empório.",
  },
  {
    number: "02",
    title: "Origem importa",
    text: "Produtor, região, estilo e história ajudam a transformar uma garrafa em uma escolha com contexto.",
  },
  {
    number: "03",
    title: "Atendimento continua humano",
    text: "A loja amplia o acesso ao Empório sem substituir a conversa de quem precisa de ajuda para escolher.",
  },
];

export default function EmporioPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#2c211d]">
      <ShopHeader />

      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src="/images/hero1.jpg"
          alt="Experiência com vinhos no Empório Liasch"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,14,13,.88)_0%,rgba(62,18,39,.66)_48%,rgba(35,20,15,.22)_100%)]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-20 lg:px-12">
          <div className="max-w-3xl text-[#fff8ec]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6bc89]">
              Americana · 20 anos de tradição
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              Uma loja boutique feita de <span className="italic text-[#d6bc89]">escolhas.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
              O Empório Liasch nasceu da paixão por bons vinhos e cresceu com uma ideia simples:
              oferecer menos ruído e mais critério. Cada seleção parte de origem, qualidade,
              ocasião e da experiência de quem está do outro lado.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-10 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">O Empório</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4d1230] sm:text-5xl">
            Não é sobre ter de tudo.<br />
            <span className="italic text-[#a37d3e]">É sobre saber escolher.</span>
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-[#675b55]">
          <p>
            Em Americana, o Empório construiu sua trajetória aproximando pessoas de bons rótulos,
            produtores e experiências. O vinho sempre esteve no centro, mas nunca sozinho:
            atendimento, repertório e confiança fazem parte da mesma escolha.
          </p>
          <p>
            A loja online nasce para ampliar esse acesso sem transformar o Empório em um catálogo
            impessoal. A intenção continua boutique: uma seleção menor, mais consciente e explicada
            com o cuidado de quem conhece o produto e a ocasião em que ele será servido.
          </p>
        </div>
      </section>

      <section className="bg-[#4d1230] px-5 py-20 text-[#fff8ec] lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6bc89]">O que orienta a seleção</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Curadoria é o que transforma produto em escolha.
              </h2>
            </div>
            <Wine className="h-10 w-10 text-[#d6bc89]" />
          </div>

          <div className="grid gap-px bg-white/12 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.number} className="bg-[#4d1230] p-7 sm:p-9">
                <span className="text-xs tracking-[0.2em] text-[#d6bc89]">{item.number}</span>
                <h3 className="mt-7 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="relative min-h-[460px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1684159890786-5406275a5ebf?auto=format&fit=crop&q=85&w=1800"
            alt="Seleção de vinhos em ambiente de loja"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/18" />
        </div>
        <div className="flex items-center bg-[#efe8dc] p-8 sm:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7b47]">Americana · SP</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4d1230] sm:text-5xl">
              A loja online amplia o Empório. Não substitui o encontro.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#675b55]">
              Quem já sabe o que procura pode navegar pela seleção. Quem quer conversar antes de
              escolher continua encontrando atendimento humano, como sempre fez parte da experiência.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5519997088241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#74113a] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white"
              >
                <MessageCircle className="h-4 w-4" /> Falar com o Empório
              </a>
              <Link
                href="/categoria/vinhos"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#4d1230]/20 px-7 text-xs font-bold uppercase tracking-[0.14em] text-[#4d1230]"
              >
                Ver seleção <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 flex gap-2 text-sm text-[#756861]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#74113a]" />
              Rua Cabo Oswaldo de Moraes, 42 · Americana, SP
            </p>
          </div>
        </div>
      </section>

      <ShopFooter />
    </main>
  );
}
