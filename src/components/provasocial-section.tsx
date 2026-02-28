"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"

const stats = [
  {
    value: "4",
    label: "lojas físicas",
    image: "/emov-loja.jpeg",
    alt: "Fachada da loja EMOV Matriz 2.0 em Chapecó",
  },
  {
    value: "2",
    label: "marcas próprias",
    image: "/emov-servo.jpeg",
    alt: "Variedade de roupas da EMOV expostas na loja",
  },
  {
    value: "10+",
    label: "anos de história",
    image: "/emov-loja-3.jpeg",
    alt: "Interior sofisticado da loja EMOV com espelho e sofá",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ProvaSocial() {
  return (
    <section id="prova-social" className="py-24 md:py-32 px-8 md:px-12 lg:px-16 mt-20 md:mt-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-16 text-center">
          Uma marca construída para estar presente
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative h-[380px] md:h-[450px] overflow-hidden rounded-2xl"
            >
              <Image
                src={stat.image}
                alt={stat.alt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="block text-5xl md:text-6xl font-bold text-white leading-none">
                  {stat.value}
                </span>
                <span className="block mt-1 text-base text-white/80">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
