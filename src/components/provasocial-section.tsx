"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"

const stats = [
  {
    value: "4",
    label: "lojas físicas",
    image: "/loja_1.webp",
    alt: "Foto de uma das lojas físicas da EMOV",
  },
  {
    value: "2",
    label: "marcas próprias",
    image: "/marcas-emov.png",
    alt: "Logos das marcas próprias da EMOV",
  },
  {
    value: "10+",
    label: "anos de história",
    image: "/historia-emov.png",
    alt: "Imagem representando os 10 anos de história da EMOV",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} satisfies Variants

export default function ProvaSocial() {
  return (
    <section id="prova-social" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-16">Uma marca construída para estar presente</h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group flex flex-col items-center text-center"
            >
              {stat.image && (
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 overflow-hidden rounded-full border-2 border-white/10 shadow-lg">
                  <Image
                    src={stat.image}
                    alt={stat.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
              )}
              <span className="text-5xl lg:text-6xl font-bold text-white">{stat.value}</span>
              <span className="mt-2 text-lg text-white/70">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
