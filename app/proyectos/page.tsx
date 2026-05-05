import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectsHero } from "@/components/sections/projects-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Proyectos | Softnet",
  description: "Portafolio de ingeniería de software y ecosistemas web. Casos de éxito en automatización, dashboards y plataformas de alto rendimiento.",
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
