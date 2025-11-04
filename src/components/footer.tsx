"use client"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-10 py-8 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/60 text-sm">© 2025 EMOV. Todos os direitos reservados.</div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
          <span className="text-white/20">|</span>
          <div className="text-white/60 text-sm"> Rua Principal, 123 - Cidade</div>
        </div>
      </div>
    </footer>
  )
}
