import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutValues } from "@/components/sections/about-values"
import { AboutTech } from "@/components/sections/about-tech"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Softnet Digital. Agencia de desarrollo web y soluciones digitales con años de experiencia creando proyectos de alto impacto para empresas.",
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutValues />
        <AboutTech />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
