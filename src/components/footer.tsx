"use client"

import Image from "next/image"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { SmoothLink } from "./smooth-link"
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "./constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 pt-12 pb-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/logoemov.png"
              alt="EMOV Logo"
              width={160}
              height={53}
              className="h-14 w-auto mx-auto sm:mx-0 select-none"
              loading="lazy"
            />
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter((link) => link.href !== "#contato").map(({ href, label }) => (
                <li key={href}>
                  <SmoothLink href={href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    {label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div id="contato">
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Contato</h3>
            <address className="space-y-2 not-italic text-sm text-white/70">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt size={12} className="text-white/40 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhoneAlt size={12} className="text-white/40 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors duration-200">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Siga-nos</h3>
            <ul className="flex items-center justify-center sm:justify-start gap-3" aria-label="Redes sociais">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-white/40">
          <p>&copy; {currentYear} EMOV. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
