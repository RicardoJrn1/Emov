"use client"

import { motion, type Variants } from "framer-motion"
import { Gem, Shirt, Repeat, Headset } from "lucide-react"

const featuresData = [
  {
    icon: Gem,
    title: "Qualidade real, nada de tecido frágil",
    description:
      "Investimos em materiais de primeira para garantir que cada peça tenha conforto, caimento e durabilidade.",
  },
  {
    icon: Shirt,
    title: "Curadoria moderna e peças de presença",
    description:
      "Nossa seleção é pensada para quem busca um visual autêntico, com peças que se destacam pela atitude e design.",
  },
  {
    icon: Repeat,
    title: "Looks versáteis para o dia a dia",
    description:
      "Criamos roupas que se adaptam à sua rotina, combinando estilo e funcionalidade para qualquer ocasião.",
  },
  {
    icon: Headset,
    title: "Atendimento próximo e consultivo",
    description:
      "Oferecemos uma consultoria de estilo para ajudar você a encontrar as peças que mais combinam com você.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} satisfies Variants

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} satisfies Variants

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Diferenciais
          </span>
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_auto] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["100% 50%", "-100% 50%"] }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          >
            A diferença está nos detalhes
          </motion.h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Estilo, qualidade e curadoria moderna. Peças que elevam o visual sem complicação.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl p-6 md:p-8 bg-neutral-900 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white/10">
                <feature.icon className="w-6 h-6 text-white/70 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
