"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_LINK } from "./constants"

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center md:justify-start min-h-screen overflow-hidden px-8 md:px-12 lg:px-16 mt-20 md:mt-14">
      {/* Imagem de fundo otimizada com Next/Image */}
      <Image
        src="/hero.png"
        alt="Modelo vestindo roupas da EMOV em um ambiente urbano estiloso"
        fill
        priority
        className="absolute inset-0 object-cover opacity-70 hidden md:block"
        sizes="100vw"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Glow sutil no mobile */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full z-10 pt-28 pb-20 md:py-0"
      >
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          {/* Eyebrow text */}
          <span className="eyebrow inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Streetwear masculino
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
            A essência da moda masculina em Chapecó.
          </h1>

          {/* Linha decorativa */}
          <div className="w-12 h-px bg-gradient-to-r from-white/60 to-transparent mx-auto md:mx-0 mb-6" />

          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
            Peças streetwear e casuais com curadoria premium - feitas para quem leva estilo a sério.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-start"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:tracking-wider inline-flex items-center gap-3 text-base"
            >
              Conhecer a EMOV agora
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
