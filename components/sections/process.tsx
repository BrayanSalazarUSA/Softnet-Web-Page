"use client"

import { motion } from "framer-motion"
import { processSteps } from "@/lib/site-config"

const stepOutcomes = [
  "Prioridades claras y alcance defendible.",
  "Dirección visual alineada a negocio y percepción.",
  "Construcción con seguimiento real y validaciones.",
  "Salida a producción con orden y sin improvisación.",
  "Evolución continua, soporte y mejoras medibles.",
]

export function Process() {
  return (
    <section id="proceso" className="section-wash relative py-28 text-[#111318]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Cómo trabajamos
            </span>
            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Un proceso pensado para que el proyecto se{" "}
              <span className="text-brand-gradient">sienta serio antes, durante y después</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-2xl text-lg leading-relaxed text-[#111318]/64"
          >
            No seguimos un timeline genérico. Diseñamos una secuencia de trabajo donde negocio,
            dirección visual, ejecución técnica y salida a producción se sienten parte de la misma historia.
          </motion.p>
        </div>

        <div className="paper-card relative overflow-hidden rounded-[2.5rem]">
          <div className="fine-grid absolute inset-0 opacity-[0.22]" />
          <div className="relative z-10 grid lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`relative flex min-h-[18rem] flex-col border-t border-black/8 px-6 py-8 first:border-t-0 lg:border-t-0 lg:border-l ${
                  index === 0 ? "lg:border-l-0" : ""
                } ${index % 2 === 1 ? "lg:pt-16" : "lg:pt-8"}`}
              >
                <span className="absolute right-5 top-4 text-[4.2rem] font-extrabold tracking-[-0.08em] text-[#111318]/6">
                  0{step.step}
                </span>

                <div className="relative z-10">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/74">
                    Paso 0{step.step}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/62">{step.description}</p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <div className="h-px bg-black/8" />
                  <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#111318]/34">
                    Qué gana tu empresa
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/68">{stepOutcomes[index]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
