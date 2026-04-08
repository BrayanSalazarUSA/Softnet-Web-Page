import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesList } from "@/components/sections/services-list"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de desarrollo web, diseño, automatización y soluciones digitales para empresas. Páginas web corporativas, landing pages, aplicaciones web y más.",
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
