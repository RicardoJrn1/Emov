"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const collectionsData = [
  {
    name: "Camisetas Premium",
    description: "Conforto e estilo em cada fio. A base para qualquer look.",
    images: ["/camisa-1.jpg", "/camisa-2.jpg", "/camisa-3.jpg"],
  },
  {
    name: "Calças e Cargos",
    description: "Do clássico ao moderno, o caimento perfeito para o dia a dia.",
    images: ["/calca-1.jpg", "/calca-2.jpg", "/calca-3.jpg"],
  },
  {
    name: "Moletons",
    description: "Camadas de estilo com moletons e jaquetas para qualquer clima.",
    images: ["/moletom-1.jpg", "/moletom-2.jpg", "/moletom-3.webp"],
  },
  {
    name: "Acessórios",
    description: "Os detalhes que completam o look. Bonés, gorros e mais.",
    images: ["/acessorio-1.jpg", "/acessorio-2.jpg", "/acessorio-3.jpg"],
  },
]

export default function Colecoes() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = collectionsData[activeIndex]
  const others = collectionsData.filter((_, i) => i !== activeIndex)

  const handleSelect = (globalIndex: number) => {
    setActiveIndex(globalIndex)
  }

  return (
    <section id="colecoes" className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Coleções
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Streetwear ao casual do jeito certo.
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Selecionamos o que realmente faz a diferença no seu guarda-roupa.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-auto md:h-[512px]">
          {/* Card destaque (esquerda) */}
          <motion.div
            layout
            className="relative flex-1 md:flex-[2] min-h-[360px] md:min-h-0 overflow-hidden rounded-2xl group ring-1 ring-white/5"
          >
            {/* Background com glow sutil */}
            <div className="absolute inset-0 -z-10 bg-neutral-900" />
            <div
              className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)",
              }}
            />

            {/* Imagens dos produtos */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
                  },
                }}
                className="absolute inset-0 flex items-center justify-center gap-2 px-4 pb-28 pt-4"
              >
                {active.images.map((img, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                    }}
                    className="relative flex-1 h-full overflow-hidden rounded-xl cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={`${active.name} ${i + 1}`}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Barra de texto com glassmorphism */}
            <div className="absolute inset-x-0 bottom-0 p-6 backdrop-blur-md bg-white/[0.03] border-t border-white/5">
              <h3 className="text-xl md:text-2xl font-bold text-white">{active.name}</h3>
              <p className="text-sm md:text-base text-white/50 mt-1 leading-relaxed">
                {active.description}
              </p>
            </div>
          </motion.div>

          {/* 3 cards empilhados (direita) */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 md:w-[160px]">
            {others.map((collection) => {
              const globalIndex = collectionsData.indexOf(collection)

              return (
                <motion.div
                  key={collection.name}
                  layout
                  onClick={() => handleSelect(globalIndex)}
                  className="
                  relative aspect-square overflow-hidden rounded-2xl cursor-pointer group
                  bg-neutral-900 ring-1 ring-white/5
                  transition-[transform,box-shadow] duration-300
                  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30
                "
                >
                  {/* imagem preenchendo (sem “borda estranha”) */}
                  <Image
                    src={collection.images[0]}
                    alt={collection.name}
                    fill
                    priority={false}
                    className="
            object-cover object-center
            transition-transform duration-500 ease-out
            group-hover:scale-110
          "
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />

                  {/* overlays: contraste + “acabamento” */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/10" />

                  {/* conteúdo */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-bold text-white drop-shadow">
                      {collection.name}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
