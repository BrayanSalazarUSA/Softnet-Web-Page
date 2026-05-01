"use client"

import { motion } from "framer-motion"
import { Layers3, ServerCog, Workflow } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-white border-b border-slate-200">
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 shadow-sm mb-6">
              <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
                CAPACIDADES TÉCNICAS
              </span>
            </div>
            
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl text-slate-900">
              Construimos herramientas que <br />
              <span className="text-slate-400">generan resultados</span> <br />
              para tu negocio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
              Soluciones digitales diseñadas para PyMEs que quieren vender más, ahorrar tiempo y modernizar su operación sin complicaciones técnicas innecesarias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="grid gap-px sm:grid-cols-3 bg-slate-200 border border-slate-200">
              {[
                {
                  icon: Layers3,
                  title: "Webs",
                  copy: "Vende más y mejor con una presencia digital de alto nivel.",
                },
                {
                  icon: Workflow,
                  title: "Procesos",
                  copy: "Ahorra horas de trabajo manual cada día con automatizaciones.",
                },
                {
                  icon: ServerCog,
                  title: "Software",
                  copy: "Toma el control total de tu negocio con aplicaciones propias.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="bg-white p-6 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-400 mb-4 transition-colors group-hover:text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
