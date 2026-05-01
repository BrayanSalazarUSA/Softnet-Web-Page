import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { AutomationsFlow } from "@/components/sections/automations-flow"
import { VisualCarousel } from "@/components/sections/visual-carousel"
import { ProjectsShowcase } from "@/components/sections/projects-showcase"
import { ValueProposition } from "@/components/sections/value-proposition"
import UnifiedOps from "@/components/sections/unified-ops"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Section Impactante */}
        <Hero />
        
        {/* 2. Sección de Servicios Premium */}
        <ServicesPreview />
        
        {/* 3. Sección Fuerte de Automatizaciones (flujo n8n) */}
        <AutomationsFlow />

        {/* 4. Dashboard Unificado y Control Operativo */}
        <UnifiedOps />
        
        {/* 4. Carrusel Visual de Proyectos/Previews */}
        <VisualCarousel />
        
        {/* 5. Showcases / Proyectos Destacados */}
        <ProjectsShowcase />
        
        {/* 6. Propuesta de Valor */}
        <ValueProposition />
        
        {/* 7. CTA Final Potente */}
        <CTA />
      </main>
      <Footer />
    </>
  )
}
