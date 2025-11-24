"use client"

import { motion, type Variants } from "framer-motion"
import { Gem, Shirt, Repeat, Headset } from "lucide-react" // Ícones para ilustrar

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
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent bg-[200%_auto]"
          animate={{
            backgroundPosition: ["100% 50%", "-100% 50%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          A diferença está nos detalhes
        </motion.h2>
        <p className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          A EMOV se tornou referência por unir estilo, qualidade e uma curadoria moderna. Aqui, você encontra peças que elevam o visual sem complicação — roupas feitas para durar e marcar presença.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-left"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <feature.icon className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}