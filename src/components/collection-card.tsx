"use client"

import { AnimatePresence, motion, type Variants } from "framer-motion"
import Image from "next/image" 
import { useEffect, useState } from "react"

// 1. Tipagem para os dados da coleção
type Collection = {
  name: string
  description: string
  images: string[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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
    let interval: NodeJS.Timeout

    if (isHovered && collection.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % collection.images.length)
      }, 2000) // Troca a imagem a cada 2 segundos
    }

    return () => {
      clearInterval(interval)
      setCurrentImageIndex(0) // Reseta para a primeira imagem ao sair do hover
    }
  }, [isHovered, collection.images.length])

  return (
    <motion.div variants={cardVariants} className="h-full">
      <div
        className="group relative flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 text-left shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-md">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={collection.images[currentImageIndex]} alt={`Peça da coleção de ${collection.name}`} fill style={{ objectFit: "cover", objectPosition: "center top" }} className="transition-transform duration-300 group-hover:scale-110" />
            </motion.div>
          </AnimatePresence>
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{collection.name}</h3>
        <p className="flex-grow text-white/70">{collection.description}</p>
      </div>
    </motion.div>
  )
}