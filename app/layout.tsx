import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AgeGate } from "@/components/shop-preview/age-gate";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prévia Loja | Empório Liasch",
  description: "Proposta visual navegável para a loja online do Empório Liasch.",
  icons: {
    icon: [{ url: "/images/logo-symbol.png", type: "image/png" }],
    shortcut: "/images/logo-symbol.png",
    apple: "/images/logo-symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${openSans.variable} font-sans antialiased`}>
        <AgeGate />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
