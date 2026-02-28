import ChamadaFinal from "@/components/chamadafinal-section"
import Colecoes from "@/components/colecoes-section"
import Diferenciais from "@/components/diferenciais-section"
import FAQ from "@/components/faq-section"
import HeroSection from "@/components/hero-section"
import ProvaSocial from "@/components/provasocial-section"
import ProvaSocialVisual from "@/components/provasocialvisu-section"
import Sobre from "@/components/sobre-section"

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <ProvaSocial />
      <Divider />
      <Sobre />
      <Divider />
      <Colecoes />
      <Divider />
      <Diferenciais />
      <Divider />
      <ProvaSocialVisual />
      <Divider />
      <ChamadaFinal />
      <Divider />
      <FAQ />
    </>
  );
}
