"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  AppWindow,
  ArrowRight,
  Building2,
  LayoutDashboard,
  MoveRight,
  ShoppingCart,
  Target,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/site-config"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2,
  Target,
  ShoppingCart,
  AppWindow,
  Workflow,
  LayoutDashboard,
}

export function ServicesPreview() {
  const featuredServices = services.slice(0, 6)

  return (
    <section id="servicios-home" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute left-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.16),transparent_70%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Servicios
            </span>
            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              No vendemos piezas sueltas. Diseñamos{" "}
              <span className="text-brand-gradient">capítulos completos de tu ecosistema digital</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-white/66">
              El resultado no es una web bonita aislada. Es una presencia mejor presentada, un
              sistema mejor conectado y una operación más limpia detrás de escena.
            </p>

            <div className="border-l border-white/10 pl-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                Lo que se nota
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/62">
                Mejor percepción, mejor claridad comercial y herramientas que el equipo sí quiere usar.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,24,0.72),rgba(8,9,11,0.92))]">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Link
                  href={`/servicios#${service.id}`}
                  className="group relative grid gap-6 border-t border-white/10 px-6 py-8 first:border-t-0 sm:px-8 lg:grid-cols-[92px_minmax(0,1fr)_260px] lg:px-10 lg:py-10"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,26,0.06),transparent_22%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start justify-between gap-4 lg:block">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/34">
                      0{index + 1}
                    </p>
                    <div className="mt-3 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04] text-primary lg:mt-6">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-primary/84">
                      <span>Servicio premium</span>
                      <span className="h-px w-8 bg-primary/32" />
                    </div>
                    <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-white transition-transform duration-300 group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/64">
                      {service.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <span
                          key={benefit}
                          className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/44"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                        Resultado esperado
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/62">
                        Una solución que combina presencia, criterio técnico y una lectura más seria del negocio.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-primary">
                      Explorar servicio
                      <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-white/56">
            Diseño visual, frontend, backend, paneles, automatización e integraciones trabajando dentro del mismo estándar.
          </p>

          <Button asChild variant="outline" size="lg" className="border-white/12 bg-white text-[#111318] hover:bg-[#FFF3E6]">
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
