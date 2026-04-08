import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectsHero } from "@/components/sections/projects-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portafolio de proyectos de desarrollo web y aplicaciones. Casos de éxito en diseño web corporativo, landing pages, e-commerce y sistemas empresariales.",
}

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
