"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logoemov.png"
          alt="EMOV"
          width={200}
          height={66}
          className="h-12 md:h-16 lg:h-20 w-auto select-none"
          priority
        />
      </div>

    </header>
  )
}
