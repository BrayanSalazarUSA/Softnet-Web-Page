import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutValues } from "@/components/sections/about-values"
import { AboutTech } from "@/components/sections/about-tech"
import { TestimonialsSoftnet } from "@/components/sections/testimonials-softnet"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Nosotros | Softnet",
  description: "Conoce a Softnet. Ingeniería de software, ecosistemas web y automatización de alto nivel.",
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutValues />
        <AboutTech />
        <TestimonialsSoftnet />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
