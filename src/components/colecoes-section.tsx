"use client"

import { motion, type Variants } from "framer-motion"
import { CollectionCard } from "./collection-card" // Importa o novo componente

const collectionsData = [
  {
    name: "Camisetas Premium",
    description:
      "Conforto e estilo em cada fio. Nossas camisetas são a base para qualquer look.",
    images: [
      "/camisa_1.webp",
      "/camisa_2.webp",
      "/camisa_3.webp",
    ],
  },
  {
    name: "Calças e Cargos",
    description:
      "Do clássico ao moderno, encontre o caimento perfeito para seu dia a dia.",
    images: [
      "/calca_1.webp",
      "/calca_2.webp",
      "/calca_3.webp",
    ],
  },
  {
    name: "Moletons e Sobreposições",
    description:
      "Crie camadas de estilo com nossos moletons e jaquetas. Perfeitos para qualquer clima.",
    images: [
      "/moletom_1.webp",
      "/moletom_2.webp",
      "/moletom_3.webp"],
  },
  {
    name: "Acessórios",
    description:
      "Os detalhes que fazem a diferença. Bonés, gorros e mais para completar seu estilo.",
    images: [
      "/acessorio_1.webp",
      "/acessorio_2.webp",
      "/acessorio_3.webp"
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} satisfies Variants

export default function Colecoes() {
  return (
    <section id="colecoes" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
          Streetwear ao casual do jeito certo.
        </h2>
        <p className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          Selecionamos o que realmente faz a diferença no seu guarda-roupa.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {collectionsData.map((collection) => (
            <CollectionCard key={collection.name} collection={collection} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}