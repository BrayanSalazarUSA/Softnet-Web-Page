"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function CTA() {
  return (
    <section id="cta-home" className="section-dark relative overflow-hidden pt-10 text-white">
      <div className="absolute left-[-10rem] top-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_70%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,20,24,0.96),rgba(8,9,11,0.98))]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative overflow-hidden px-7 py-12 sm:px-10 lg:px-12 lg:py-14">
              <div className="absolute inset-y-0 right-0 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)]" />
              <div className="absolute inset-y-0 left-0 w-[44%] bg-[radial-gradient(circle_at_left,rgba(255,122,26,0.18),transparent_72%)]" />

              <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
                <span className="section-dot" />
                Próximo paso
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              >
                Si tu empresa necesita verse mejor y operar con más orden, ya tenemos un buen punto de partida.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="relative mt-6 max-w-2xl text-lg leading-relaxed text-white/66"
              >
                Podemos ayudarte con una web corporativa premium, un sistema interno o una automatización pensada para negocio real, no para una demo bonita.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="relative mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="sm:w-auto">
                  <Link href="/contacto">
                    Solicitar propuesta
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-white/12 bg-white text-[#111318] hover:bg-[#FFF3E6] sm:w-auto">
                  <Link href="/proyectos">Ver casos de trabajo</Link>
                </Button>
              </motion.div>

              <div className="relative mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                {[
                  "Más claridad comercial",
                  "Más confianza visual",
                  "Más orden operativo",
                ].map((item) => (
                  <div key={item} className="border-l border-white/10 pl-4">
                    <p className="text-sm font-medium text-white/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative border-t border-white/10 px-7 py-10 sm:px-8 lg:border-t-0 lg:px-10 lg:py-12">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                Contacto directo
              </p>
              <h3 className="mt-4 max-w-[11ch] text-3xl font-extrabold tracking-[-0.05em] text-white">
                Conversemos con un enfoque comercial y técnico.
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/64">
                Cuéntanos qué quieres construir y te devolvemos una propuesta seria, clara y aterrizada a negocio.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white/82 transition-colors hover:text-white"
                >
                  <span className="inline-flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    {siteConfig.email}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white/82 transition-colors hover:text-white"
                >
                  <span className="inline-flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    {siteConfig.phone}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </a>
              </div>

              <div className="mt-8 grid gap-5 border-t border-white/10 pt-6">
                {[
                  "Respuesta rápida y lenguaje claro.",
                  "Alcance mejor definido desde el principio.",
                  "Acompañamiento real durante la implementación.",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-white/66">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
