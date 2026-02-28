import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Footer from "../components/footer"
import Header from "../components/header"
import ScrollGradient from "../components/scroll-gradient"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://emov.com.br"),
  title: "EMOV - Moda Masculina Streetwear em Chapecó",
  description:
    "Peças streetwear e casuais com curadoria premium. 4 lojas físicas, 2 marcas próprias e mais de 10 anos de história em Chapecó.",
  openGraph: {
    title: "EMOV - Moda Masculina Streetwear em Chapecó",
    description:
      "Peças streetwear e casuais com curadoria premium. 4 lojas físicas, 2 marcas próprias e mais de 10 anos de história em Chapecó.",
    url: "https://emov.com.br",
    siteName: "EMOV",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "EMOV - Moda Masculina Streetwear",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} flex flex-col`}
      >
        <ScrollGradient />
        <Header />

        <main className="relative z-[2] flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
