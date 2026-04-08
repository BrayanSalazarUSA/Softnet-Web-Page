"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/site-config"

export function ProjectsHero() {
  return (
    <section className="section-dark relative overflow-hidden pt-32 pb-20 text-white">
      <div className="soft-grid absolute inset-0 opacity-10" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Proyectos
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-6xl">
              Casos donde una buena combinación de{" "}
              <span className="text-brand-gradient">diseño, software y negocio</span> termina generando resultados reales.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-relaxed text-white/66"
          >
            Cada proyecto responde a una necesidad distinta, pero todos comparten el mismo criterio:
            claridad visual, estructura sólida y utilidad real para la empresa.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="paper-card rounded-[1.6rem] p-5 text-[#111318]">
              <p className="text-3xl font-extrabold tracking-[-0.04em] text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-[#111318]/58">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
