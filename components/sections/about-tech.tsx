"use client"

import { motion } from "framer-motion"
import { Braces, Cloud, CreditCard, Database, MonitorSmartphone, ServerCog, CheckSquare, TerminalSquare } from "lucide-react"
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
    <section id="stack" className="relative overflow-hidden bg-white py-28 border-b border-slate-200">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 border-l-2 border-red-600 pl-6">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
            // STACK TECNOLÓGICO
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-slate-900 max-w-3xl">
            Tecnología elegida con{" "}
            <span className="text-slate-400">criterio práctico.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 font-medium">
            Elegimos herramientas que nos permitan diseñar mejor, desarrollar con orden, desplegar con confianza e integrar la solución al contexto real del negocio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
                    Arquitectura Aplicada
                  </p>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-slate-900">
                    Sistemas End-to-End
                  </h3>
                </div>
                <TerminalSquare className="h-8 w-8 text-slate-300" />
              </div>

              <div className="grid gap-px bg-slate-200 border border-slate-200">
                {[
                  "Una sola visión técnica global.",
                  "Integraciones con sistemas legacy.",
                  "Base preparada para crecer.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white p-4"
                  >
                    <CheckSquare className="mt-px h-4 w-4 flex-shrink-0 text-red-600" />
                    <span className="text-sm text-slate-700 font-medium">
                      {item}
                    </span>
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
            className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 shadow-sm h-fit"
          >
            {categories.map((category) => {
              const Icon = categoryMeta[category as keyof typeof categoryMeta]?.icon ?? Braces
              const description = categoryMeta[category as keyof typeof categoryMeta]?.description

              return (
                <div
                  key={category}
                  className={`bg-white p-6 ${
                    category === "Frontend" ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 mb-2">
                        {category}
                      </p>
                      <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 text-slate-400">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techStack
                      .filter((item) => item.category === category)
                      .map((tech) => (
                        <span
                          key={tech.name}
                          className="border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-slate-700"
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
