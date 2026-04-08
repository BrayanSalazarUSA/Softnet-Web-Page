"use client"

import { motion } from "framer-motion"
import { Braces, Cloud, CreditCard, Database, MonitorSmartphone, ServerCog } from "lucide-react"
import { techStack } from "@/lib/site-config"

const categoryMeta = {
  Frontend: {
    icon: MonitorSmartphone,
    description: "Interfaces rápidas, limpias y alineadas con marca y conversión.",
  },
  Backend: {
    icon: ServerCog,
    description: "Lógica sólida, APIs mantenibles e integraciones pensadas para durar.",
  },
  Database: {
    icon: Database,
    description: "Datos bien estructurados, consultas claras y una base más estable.",
  },
  Cloud: {
    icon: Cloud,
    description: "Despliegue confiable, control de infraestructura y capacidad para escalar.",
  },
  Payments: {
    icon: CreditCard,
    description: "Cobros e integraciones que no rompen la experiencia del usuario.",
  },
} as const

export function AboutTech() {
  const categories = [...new Set(techStack.map((item) => item.category))]

  return (
    <section id="stack" className="section-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Stack y capacidad técnica
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Tecnología moderna, pero elegida con{" "}
              <span className="text-brand-gradient">criterio práctico</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#111318]/64">
              Elegimos herramientas que nos permitan diseñar mejor, desarrollar con orden,
              desplegar con confianza e integrar la solución al contexto real del negocio.
            </p>

            <div className="surface-card mt-8 rounded-[2rem] p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/44">
                    Arquitectura aplicada
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">
                    Diseñamos interfaces premium, pero también resolvemos datos, backend, pagos y despliegue.
                  </h3>
                </div>
                <div className="logo-mark flex h-14 w-14 items-center justify-center rounded-[1.2rem]">
                  <Braces className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  "Una sola visión para marca, producto y sistema.",
                  "Integraciones con CRMs, automatizaciones, paneles y pagos.",
                  "Base preparada para crecer sin tener que rehacerlo todo.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-relaxed text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {categories.map((category) => {
              const Icon = categoryMeta[category as keyof typeof categoryMeta]?.icon ?? Braces
              const description = categoryMeta[category as keyof typeof categoryMeta]?.description

              return (
                <div
                  key={category}
                  className={`paper-card rounded-[1.75rem] p-6 ${
                    category === "Frontend" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/72">
                        {category}
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#111318]/62">
                        {description}
                      </p>
                    </div>
                    <div className="neon-icon-box flex h-12 w-12 items-center justify-center rounded-[1rem]">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techStack
                      .filter((item) => item.category === category)
                      .map((tech) => (
                        <span
                          key={tech.name}
                          className="paper-card-soft rounded-full px-3 py-2 text-sm font-medium text-[#111318]/76"
                        >
                          {tech.name}
                        </span>
                      ))}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
