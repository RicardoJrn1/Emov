"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, useInView, type Variants } from "framer-motion"
import Image from "next/image"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`
      }
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  {
    numericValue: 4,
    suffix: "",
    label: "lojas físicas",
    image: "/emov-loja.jpeg",
    alt: "Fachada da loja EMOV Matriz 2.0 em Chapecó",
  },
  {
    numericValue: 2,
    suffix: "",
    label: "marcas próprias",
    image: "/emov-servo.jpeg",
    alt: "Variedade de roupas da EMOV expostas na loja",
  },
  {
    numericValue: 10,
    suffix: "+",
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
    <section id="prova-social" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            A EMOV em números
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Uma marca construída para estar presente
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Mais de uma década levando estilo e atitude para Chapecó e região.
          </p>
        </div>

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
              className="group relative h-[380px] md:h-[450px] overflow-hidden rounded-2xl ring-1 ring-white/5"
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
                  <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                </span>
                <span className="block mt-1 text-base text-white/70">
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
