"use client"

import Link from "next/link"
import { ArrowRight, Mail, Phone, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { siteConfig } from "@/lib/site-config"

export function CTA() {
  return (
    <section id="cta-home" className="bg-slate-50 relative overflow-hidden py-24 border-t border-slate-200">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <Parallax offset={15}>
          <div className="border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1.5 shadow-sm mb-6">
                <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
                  Siguiente Fase
                </span>
              </div>

              <Reveal
                delay={0.02}
                className="text-4xl font-bold tracking-[-0.02em] md:text-5xl text-slate-900"
              >
                ¿Listo para que tu negocio crezca?
              </Reveal>

              <Reveal delay={0.08} className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                Hablemos de tus objetivos y diseñemos la solución que llevará tu empresa al siguiente nivel. Sin palabras técnicas innecesarias, solo resultados reales.
              </Reveal>

              <Reveal delay={0.16} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-none bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-wider shadow-sm sm:w-auto h-12 px-8">
                  <Link href="/contacto">
                    Agendar Llamada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="rounded-none border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-mono text-xs uppercase tracking-wider shadow-sm sm:w-auto h-12 px-8">
                  <Link href="https://wa.me/yournumber" target="_blank">
                    <Code2 className="mr-2 h-4 w-4 text-slate-400" />
                    Escribir por WhatsApp
                  </Link>
                </Button>
              </Reveal>

              <StaggerGroup delayChildren={0.12} stagger={0.07} className="mt-10 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                {[
                  "Cercanía Real",
                  "Enfoque en ROI",
                  "Sin Complicaciones",
                ].map((item) => (
                  <StaggerItem key={item} className="border-l-2 border-red-600 pl-4">
                    <p className="font-mono text-xs font-bold text-slate-700 uppercase tracking-widest">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <Reveal delay={0.08} className="relative bg-slate-50 p-10 lg:p-14 flex flex-col justify-center">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 mb-4">
                // Comunicación Directa
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Tu Aliado Estratégico.
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-8 max-w-sm">
                Hablarás directamente con quienes construyen tu solución. Sin intermediarios, sin pérdidas de tiempo.
              </p>

              <StaggerGroup delayChildren={0.1} stagger={0.07} className="space-y-4">
                <StaggerItem>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-between gap-4 border border-slate-200 bg-white p-4 transition-colors hover:border-red-300 group"
                  >
                    <span className="flex items-center gap-3 font-mono text-sm font-bold text-slate-700">
                      <Mail className="h-5 w-5 text-red-600" />
                      {siteConfig.email}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-between gap-4 border border-slate-200 bg-white p-4 transition-colors hover:border-red-300 group"
                  >
                    <span className="flex items-center gap-3 font-mono text-sm font-bold text-slate-700">
                      <Phone className="h-5 w-5 text-red-600" />
                      {siteConfig.phone}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                  </a>
                </StaggerItem>
              </StaggerGroup>

              <StaggerGroup delayChildren={0.16} stagger={0.07} className="mt-8 grid gap-4 border-t border-slate-200 pt-6">
                {[
                  "Propuesta personalizada en 24h.",
                  "Acompañamiento en todo el proceso.",
                  "Garantía de satisfacción y soporte.",
                ].map((item, index) => (
                  <StaggerItem key={item} className="flex items-start gap-4">
                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-red-600 mt-1">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
