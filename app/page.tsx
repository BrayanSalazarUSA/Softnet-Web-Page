import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSoftnetV3 as Hero } from "@/components/sections/hero-softnet-v3"
import { ServicesPreview } from "@/components/sections/services-preview"
import { AutomationsFlow } from "@/components/sections/automations-flow"
import { TestimonialsSoftnet as Testimonials } from "@/components/sections/testimonials-softnet"
import { ProjectsShowcase } from "@/components/sections/projects-showcase"
import { ValueProposition } from "@/components/sections/value-proposition"
import UnifiedOps from "@/components/sections/unified-ops"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero: Impacto Inicial (Light) */}
        <Hero />
        
        {/* 2. Servicios: Claridad y Alcance (Dark) */}
        <div className="section-dark">
          <ServicesPreview />
        </div>
        
        {/* 3. Propuesta de Valor: Diferenciación Crítica (Light) */}
        <div className="section-light">
          <ValueProposition />
        </div>
        
        {/* 4. Operaciones Unificadas: La Solución Maestra (Dark) */}
        <div className="section-dark">
          <UnifiedOps />
        </div>

        {/* 5. Automatizaciones: La Magia Técnica (Light) */}
        <div className="section-light">
          <AutomationsFlow />
        </div>

        {/* 6. Testimonios: Prueba Social y Confianza (Dark) */}
        <div className="section-dark">
          <Testimonials />
        </div>
        
        {/* 7. Showcases: Evidencia de Ingeniería (Light) */}
        <div className="section-light">
          <ProjectsShowcase />
        </div>
        
        {/* 8. CTA Final: Conversión (Dark) */}
        <div className="section-dark">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
