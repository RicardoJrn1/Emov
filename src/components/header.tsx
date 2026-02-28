"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, WHATSAPP_LINK } from "./constants"
import { SmoothLink } from "./smooth-link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const showGlass = scrolled || menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        showGlass
          ? "bg-[rgba(10,10,15,0.4)] backdrop-blur-[20px] backdrop-saturate-[1.8] shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-white/[0.08]"
          : "bg-transparent backdrop-blur-none backdrop-saturate-100 shadow-none border-transparent"
      }`}
    >
      <div className={`relative z-10 flex items-center justify-between px-6 md:px-8 transition-all duration-500 ${scrolled ? "py-2 md:py-3" : "py-4 md:py-5"}`}>
        <SmoothLink href="#" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logoemov.png"
            alt="EMOV"
            width={200}
            height={66}
            className="h-10 md:h-14 w-auto select-none"
            priority
          />
        </SmoothLink>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <SmoothLink
              key={href}
              href={href}
              className="relative text-sm text-white/70 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              {label}
            </SmoothLink>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm font-semibold border border-white/60 text-white bg-transparent rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Falar conosco
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`relative z-10 md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6">
          {NAV_LINKS.map(({ href, label }) => (
            <SmoothLink
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-white/80 hover:text-white transition-colors duration-300 border-b border-white/5"
            >
              {label}
            </SmoothLink>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 py-3 text-center font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300"
          >
            Falar conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
