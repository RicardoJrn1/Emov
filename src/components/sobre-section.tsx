"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Coluna da Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-80 md:h-[500px] rounded-2xl shadow-2xl overflow-hidden"
        >
          <Image
            src="/emov-ambiente.jpeg"
            alt="Interior da loja EMOV com sofá, iluminação premium e decoração."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Sobre a EMOV
          </span>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Moda que representa atitude.
          </h2>

          <div className="w-12 h-px bg-gradient-to-r from-white/60 to-transparent mx-auto md:mx-0 mb-6" />

          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-4">
            Crescemos com um único propósito: entregar peças modernas, de alta qualidade e com personalidade.
          </p>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
            A EMOV nasceu para quem valoriza presença, estilo e autenticidade. Mais que roupa — é estilo em movimento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
