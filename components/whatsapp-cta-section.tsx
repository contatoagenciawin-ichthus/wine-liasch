"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppCtaSection() {
  const whatsappNumber = "5519997088241"
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site do Empório Liasch e gostaria de saber mais sobre o Empório e fazer uma reserva."
  )

  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative w-full overflow-hidden bg-wine px-4 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold bg-wine/60 px-6 py-2 backdrop-blur-sm"
        >
          <span className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">
            Empório Liasch • Americana
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl"
        >
          Quer conhecer o Empório ou reservar seu horário?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 font-sans text-lg leading-relaxed text-cream/90 md:text-xl"
        >
          Fale diretamente com o Liasch pelo WhatsApp para informações sobre rótulos,
          bistrô, reservas e experiências do Empório.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group h-auto bg-gold px-12 py-6 font-sans text-xl font-bold text-wine transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-[0_0_40px_rgba(197,160,101,0.6)]"
            onClick={() => window.open(waUrl, "_blank", "noopener,noreferrer")}
          >
            <MessageCircle className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
            Falar com o Liasch no WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
