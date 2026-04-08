"use client"

import { motion } from "framer-motion"
import { Award, Heart, Lightbulb, Rocket, Target, Users2 } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Cada proyecto debe ayudar a vender mejor, ordenar mejor o sostener mejor el crecimiento.",
  },
  {
    icon: Lightbulb,
    title: "Innovación útil",
    description: "Nos gusta lo nuevo cuando suma. No usamos tecnología de moda si no mejora el resultado.",
  },
  {
    icon: Users2,
    title: "Colaboración clara",
    description: "Trabajamos contigo con criterio, dirección y comunicación directa durante todo el proceso.",
  },
  {
    icon: Award,
    title: "Excelencia técnica",
    description: "Código limpio, arquitectura pensada y decisiones que no explotan cuando el proyecto crece.",
  },
  {
    icon: Rocket,
    title: "Agilidad con orden",
    description: "Avanzamos rápido, pero sin improvisar ni perder claridad en el alcance.",
  },
  {
    icon: Heart,
    title: "Cuidado por el detalle",
    description: "La diferencia entre verse serio o verse genérico suele estar en los detalles bien resueltos.",
  },
]

export function AboutValues() {
  return (
    <section id="valores" className="section-wash py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Valores
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Nos interesa que el proyecto se vea bien, sí, pero sobre todo que{" "}
              <span className="text-brand-gradient">se sostenga bien en negocio</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-lg leading-relaxed text-[#111318]/64"
          >
            Nuestro estándar mezcla criterio visual, base técnica y ejecución responsable. La meta
            no es sorprender cinco minutos, sino construir algo serio que dure.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="surface-card lg:col-span-4 rounded-[2.2rem] p-8 text-white"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/44">
              Nuestra postura
            </p>
            <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">
              El diseño importa. La arquitectura también. Y uno sin el otro no basta.
            </h3>
            <div className="mt-8 grid gap-3">
              {[
                "Diseñamos para percepción, conversión y claridad.",
                "Desarrollamos pensando en mantenimiento, escalabilidad e integración.",
                "Acompañamos con una relación directa y sin discurso vacío.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-relaxed text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="paper-card rounded-[1.7rem] p-6"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="neon-icon-box flex h-14 w-14 items-center justify-center rounded-[1.15rem]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#111318]/26">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/62">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
