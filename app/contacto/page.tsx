import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Softnet Digital. Solicita una cotización gratuita para tu proyecto de desarrollo web, aplicación o sistema empresarial.",
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
