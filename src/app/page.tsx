"use client"

import ChamadaFinal from "@/components/chamadafinal-section"
import Colecoes from "@/components/colecoes-section"
import Diferenciais from "@/components/diferenciais-section"
import FAQ from "@/components/faq-section"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProvaSocial from "@/components/provasocial-section"
import ProvaSocialVisual from "@/components/provasocialvisu-section"
import Sobre from "@/components/sobre-section"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProvaSocial />
      <Sobre />
      <Colecoes />
      <Diferenciais />
      <ProvaSocialVisual />
      <ChamadaFinal />
      <FAQ />
    </>
  )
}
