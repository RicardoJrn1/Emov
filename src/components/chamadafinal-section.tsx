"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "./constants"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
} satisfies Variants

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} satisfies Variants

export default function ChamadaFinal() {
  return (
    <section id="chamada-final" className="relative overflow-hidden py-24 md:py-32 px-8 md:px-12 lg:px-16">
      {/* 1. Logo em marca d'água no fundo */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image src="/logoemov.png" alt="" width={800} height={266} className="select-none" />
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Quer ver os lançamentos primeiro?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Seja o primeiro a saber das novidades e receba um atendimento exclusivo. A coleção certa para elevar seu estilo começa com um clique.
          </motion.p>
          {/* Container do botão */}
          <motion.div variants={itemVariants} className="flex justify-center">
            {/* 2. Botão com animação de pulso */}
            <motion.div
              whileInView={{
                scale: [1, 1.05, 1],
                boxShadow: ["0 0 0 0px rgba(255, 255, 255, 0.3)", "0 0 0 15px rgba(255, 255, 255, 0)", "0 0 0 0px rgba(255, 255, 255, 0)"],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="rounded-full" // Garante que a sombra do pulso seja redonda
            >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-2">Falar agora com o vendedor <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" /></span>
            </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}