"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/site-config"

export function ProjectsHero() {
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
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 shadow-sm mb-6">
              <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
                PROYECTOS & CASOS
              </span>
            </div>
            
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl text-slate-900">
              Arquitectura validada <br />
              <span className="text-slate-400">en producción.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-relaxed text-slate-600 font-medium"
          >
            Casos donde una buena combinación de ingeniería de software y diseño de producto termina generando resultados medibles. Claridad visual, estructura sólida y rendimiento real.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 xl:grid-cols-4 shadow-sm"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 transition-colors hover:bg-slate-50">
              <p className="font-mono text-3xl font-bold tracking-[-0.04em] text-red-600">{stat.value}</p>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
