"use client"

import { ShieldCheck, Lightbulb, Users2, Target } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Users2,
    title: "Cercanía Real",
    description: "No somos un número de soporte. Hablas directamente con quienes construyen tu solución, en tu idioma y sin tecnicismos.",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada línea de código y cada automatización tiene un objetivo claro: generar un retorno de inversión (ROI) para tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones a Medida",
    description: "No usamos plantillas genéricas. Analizamos tu flujo de trabajo único y construimos herramientas que se adaptan a ti, no al revés.",
  },
  {
    icon: ShieldCheck,
    title: "Acompañamiento",
    description: "Estamos contigo desde el diagnóstico inicial hasta el crecimiento a largo plazo. Tu éxito técnico es nuestra responsabilidad.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1.5 shadow-sm mb-6">
            <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
              POR QUÉ ELEGIRNOS
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-slate-900 md:text-5xl">
            Más que una agencia, <br />
            <span className="text-slate-400">somos tu aliado estratégico.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
            Entendemos que no buscas "tecnología por tecnología". Buscas vender más, ahorrar tiempo y tener el control total de tu operación.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-400 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
