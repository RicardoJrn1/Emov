"use client"

import { AnimatePresence, motion, type Variants } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export type Collection = {
  name: string
  description: string
  images: string[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} satisfies Variants

export function CollectionCard({ collection }: { collection: Collection }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!isHovered || collection.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % collection.images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered, collection.images.length])

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentImageIndex(0)
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col overflow-hidden rounded-2xl cursor-pointer border border-white/5 bg-neutral-900 transition-colors duration-300 hover:border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Área da imagem */}
      <div className="relative h-[300px] md:h-[360px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={collection.images[currentImageIndex]}
              alt={`Peça da coleção de ${collection.name}`}
              fill
              className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Fundo sutil atrás do produto */}
        <div className="absolute inset-0 bg-neutral-800" />
      </div>

      {/* Texto */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{collection.name}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{collection.description}</p>
      </div>
    </motion.div>
  )
}
