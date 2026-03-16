"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const LOGOS = [
    { src: "/adidas.png", alt: "Adidas" },
    { src: "/nike.png", alt: "Nike" },
    { src: "/casio.png", alt: "Casio" },
    { src: "/hocks.png", alt: "Hocks" },
    { src: "/banly.jpeg", alt: "Banly" },
    { src: "/finale.jpeg", alt: "Finale" },
    { src: "/qix.webp", alt: "Qix" },
]

export default function Marcas() {
    const [paused, setPaused] = useState(false)

    return (
        <section id="marcas" className="py-24 md:py-32 relative overflow-hidden">
            {/* Linha decorativa superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 mb-4">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="eyebrow block text-xs uppercase tracking-[0.2em] text-white/40 text-center mb-4"
                >
                    Marcas
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-3"
                >
                    Nossas Marcas Parceiras
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/50 text-center text-sm md:text-base max-w-md mx-auto mb-12"
                >
                    Trabalhamos com as melhores marcas do cenário streetwear e casual.
                </motion.p>

                {/* Linha decorativa */}
                <div className="w-12 h-px bg-gradient-to-r from-white/60 to-transparent mx-auto mb-12" />
            </div>

            {/* Fade nas bordas */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden">
                    <div
                        className="brands-track"
                        style={{ animationPlayState: paused ? "paused" : "running" }}
                    >
                        {[...Array(2)].map((_, setIndex) =>
                            LOGOS.map((logo, i) => (
                                <div
                                    key={`${setIndex}-${i}`}
                                    className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center bg-white rounded-xl w-40 h-20 md:w-48 md:h-24 p-4 transition-transform duration-300 hover:scale-110"
                                    onMouseEnter={() => setPaused(true)}
                                    onMouseLeave={() => setPaused(false)}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={80}
                                        className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
