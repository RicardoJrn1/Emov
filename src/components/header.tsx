"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6 md:p-8">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logoemov.png" alt="EMOV" className="h-12 md:h-16 lg:h-20 w-auto select-none" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white text-xs transition-all duration-200"
        >
          Instagram
        </a>
      </nav>
    </header>
  )
}
