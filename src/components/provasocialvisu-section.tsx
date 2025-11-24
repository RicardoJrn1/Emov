"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Users, Camera, Instagram } from "lucide-react"

const socialImages = [
  { src: "/camisa_1.webp", alt: "Homem vestindo look completo da EMOV em ambiente urbano." },
  { src: "/camisa_2.webp", alt: "Detalhe de uma camiseta premium da EMOV." },
  { src: "/camisa_3.webp", alt: "Pessoa com moletom da EMOV em um café." },
  { src: "/moletom_1.webp", alt: "Look casual da EMOV para o dia a dia." },
  { src: "/moletom_2.webp", alt: "Pessoa com acessório da EMOV, como um boné, em destaque." },
]

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
} satisfies Variants

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} satisfies Variants

export default function ProvaSocialVisual() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="prova-social-visual" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Coluna de Texto */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <motion.h2 variants={textItemVariants} className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Estilo real. Pessoas reais.
          </motion.h2>
          <motion.p variants={textItemVariants} className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
          A essência da EMOV está no dia a dia - looks que funcionam, combinam e representam.
          </motion.p>

          <motion.ul variants={textItemVariants} className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0" />
              <span className="text-white/90">Looks versáteis para qualquer rolê.</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-white/50 flex-shrink-0" />
              <span className="text-white/90">Feito para quem tem atitude e presença.</span>
            </li>
          </motion.ul>

          <motion.div variants={textItemVariants} className="flex justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/emovoficial" // TODO: Adicionar link real do Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105"
            >
              <span>Ver mais no Instagram</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Coluna da Galeria */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex h-[450px] w-full justify-center gap-2 md:gap-4"
          onMouseLeave={() => setExpandedIndex(null)}
        >
          {socialImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-full cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-2xl"
              initial={{ width: "20%" }}
              animate={{ width: expandedIndex === index ? "60%" : "10%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setExpandedIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}