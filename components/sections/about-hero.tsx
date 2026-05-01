"use client"

import { motion } from "framer-motion"
import { siteConfig, stats } from "@/lib/site-config"
import { Terminal, GitBranch } from "lucide-react"

export function AboutHero() {
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
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 shadow-sm mb-6">
              <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
                NOSOTROS
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl text-slate-900">
              Ingeniería de software con <br />
              <span className="text-slate-400">criterio corporativo.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
              {siteConfig.description} Construimos arquitectura escalable, código limpio y sistemas robustos para empresas que dependen de la tecnología.
            </p>

            <div className="mt-8 border border-slate-200 bg-slate-50 p-6 shadow-sm border-l-2 border-l-red-600">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 mb-2">
                NUESTRO ENFOQUE
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Una solución digital no es solo una interfaz. Es arquitectura, seguridad y rendimiento. Desarrollamos tecnología premium que escala con la realidad de tu negocio.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="border border-slate-200 bg-white p-6 lg:p-8 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
                  // SOFTNET DIGITAL
                </p>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-slate-900">
                  Partner Tecnológico
                </h2>
              </div>
              <Terminal className="h-8 w-8 text-slate-300" />
            </div>

            <div className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 p-6">
                  <p className="text-3xl font-bold tracking-[-0.02em] text-slate-900">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-slate-500 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-500 mb-4">
                Lo que nos define
              </p>
              <div className="grid gap-px bg-slate-800 border border-slate-800 sm:grid-cols-1">
                {[
                  "Código Limpio y Mantenible",
                  "Arquitectura Cloud-Native",
                  "Ejecución Técnica Rigurosa",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-slate-900 p-3 text-sm text-slate-300 flex items-center gap-3"
                  >
                    <GitBranch className="h-4 w-4 text-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
