"use client"

import { motion } from "framer-motion"
import { Layers3, ServerCog, Workflow } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="section-light relative overflow-hidden pt-32 pb-20 text-[#111318]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_68%)] blur-3xl" />
        <div className="absolute right-0 top-12 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.9),transparent_68%)] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Servicios
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-6xl">
              Diseñamos y desarrollamos{" "}
              <span className="text-brand-gradient">soluciones digitales serias</span> para empresas que necesitan vender y operar mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#111318]/66 md:text-xl">
              Desde una web corporativa premium hasta sistemas internos, automatizaciones y
              dashboards. Cada servicio está pensado para verse bien, funcionar bien y sostener crecimiento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="surface-card rounded-[1rem] p-5 lg:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Layers3,
                  title: "Presencia",
                  copy: "Sitios y experiencias que elevan percepción, claridad y conversión.",
                },
                {
                  icon: ServerCog,
                  title: "Sistema",
                  copy: "Backend, paneles, flujos y lógica conectada al negocio real.",
                },
                {
                  icon: Workflow,
                  title: "Operación",
                  copy: "Procesos más fluidos, automatización y menos dependencia de tareas manuales.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="paper-card rounded-[1rem] p-5 text-[#111318]"
                >
                  <div className="neon-icon-box flex h-12 w-12 items-center justify-center rounded-[0.75rem]">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold tracking-[-0.03em]">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/62">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
