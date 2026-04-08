import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { TrustBadges } from "@/components/sections/trust-badges"
import { ServicesPreview } from "@/components/sections/services-preview"
import { Benefits } from "@/components/sections/benefits"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <ServicesPreview />
        <Benefits />
        <ProjectsPreview />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
