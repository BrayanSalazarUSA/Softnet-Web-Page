"use client"

import { motion } from "framer-motion"
import { Award, Heart, Lightbulb, Rocket, Target, Users2, CheckSquare } from "lucide-react"

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
    <section id="valores" className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-200">
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
        <div className="mb-16 border-l-2 border-red-600 pl-6">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
            // PRINCIPIOS DE INGENIERÍA
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-slate-900 max-w-3xl">
            Construimos software que{" "}
            <span className="text-slate-400">se sostiene en producción.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 font-medium">
            Nuestro estándar mezcla criterio visual, base técnica y ejecución responsable. La meta no es sorprender cinco minutos, sino construir una arquitectura que dure.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-slate-200 bg-slate-900 lg:col-span-4 p-8 text-white shadow-sm h-fit"
          >
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-500 mb-4">
              Nuestra postura
            </p>
            <h3 className="text-2xl font-bold tracking-[-0.02em] mb-6">
              El diseño importa. La arquitectura también. Uno sin el otro no basta.
            </h3>
            <div className="grid gap-px bg-slate-800 border border-slate-800">
              {[
                "Diseñamos para conversión y claridad.",
                "Desarrollamos pensando en escalabilidad.",
                "Comunicación directa, sin abstracciones.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-900 p-4"
                >
                  <CheckSquare className="mt-px h-4 w-4 flex-shrink-0 text-red-500" />
                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 lg:col-span-8 shadow-sm h-fit">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="bg-white p-8 group hover:bg-slate-50 transition-colors"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-400 group-hover:text-red-600 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
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
