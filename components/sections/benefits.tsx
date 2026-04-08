"use client"

import { motion } from "framer-motion"
import { Braces, Gauge, Layers3, Shield, Workflow } from "lucide-react"
import { techStack } from "@/lib/site-config"

const pillars = [
  {
    icon: Shield,
    title: "Presencia creíble",
    description: "Diseñamos para que la empresa se sienta más seria antes de que el prospecto lea la segunda línea.",
  },
  {
    icon: Braces,
    title: "Capacidad full stack",
    description: "No nos quedamos en el frontend. Resolvemos backend, datos, despliegue e integración con visión de producto.",
  },
  {
    icon: Workflow,
    title: "Procesos más limpios",
    description: "Conectamos herramientas, automatizamos pasos manuales y simplificamos la operación digital.",
  },
  {
    icon: Gauge,
    title: "Performance sensata",
    description: "Velocidad, mantenibilidad y decisiones técnicas que aguantan el crecimiento sin rehacerlo todo.",
  },
  {
    icon: Layers3,
    title: "Sistema con criterio",
    description: "Diseño, copy, interacción y arquitectura trabajando dentro del mismo estándar de calidad.",
  },
]

const stackGroups = techStack.reduce<Record<string, string[]>>((acc, item) => {
  acc[item.category] = [...(acc[item.category] ?? []), item.name]
  return acc
}, {})

export function Benefits() {
  return (
    <section id="capacidades" className="section-light relative py-28 text-[#111318]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Capacidad real
            </span>

            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Diseño premium con{" "}
              <span className="text-brand-gradient">arquitectura, criterio y ejecución completa</span>.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#111318]/66">
              La propuesta de valor no termina en la interfaz. Construimos experiencias que se ven
              caras, se sienten ordenadas y están respaldadas por una base técnica preparada para crecer.
            </p>

            <div className="mt-10 space-y-6 border-l border-black/10 pl-6">
              {pillars.slice(0, 3).map((pillar, index) => (
                <div key={pillar.title}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/78">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#111318]/62">{pillar.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="paper-card relative overflow-hidden rounded-[2.4rem] p-6 sm:p-8 lg:p-10"
            >
              <div className="fine-grid absolute inset-0 opacity-[0.22]" />

              <div className="relative z-10 grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
                <div className="surface-card rounded-[2rem] p-7 text-white">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                    Base de ejecución
                  </p>
                  <h3 className="mt-5 max-w-[13ch] text-3xl font-extrabold tracking-[-0.05em]">
                    Frontend impecable. Backend robusto. Operación conectada.
                  </h3>
                  <div className="mt-8 space-y-4">
                    {pillars.slice(3).map((pillar) => {
                      const Icon = pillar.icon

                      return (
                        <div key={pillar.title} className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                          <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.05] text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{pillar.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/62">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="grid gap-4">
                  {Object.entries(stackGroups).map(([category, items], index) => (
                    <div
                      key={category}
                      className={`border border-black/10 bg-white/62 p-5 backdrop-blur-sm ${
                        index % 2 === 1 ? "lg:ml-10" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/78">
                          {category}
                        </p>
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#111318]/28">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="border border-black/8 bg-white/72 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#111318]/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-2"
            >
              {[
                "Tecnología elegida para durar, no para impresionar en una slide.",
                "Integraciones, pagos, dashboards y despliegue dentro de una sola visión de proyecto.",
              ].map((item, index) => (
                <div key={item} className="border-l border-black/10 pl-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                    0{index + 4}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[#111318]/68">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
