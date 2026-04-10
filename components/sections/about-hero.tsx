"use client"

import { motion } from "framer-motion"
import { SoftnetLockup, SoftnetMark, SoftnetMotif } from "@/components/brand/softnet-brand"
import { siteConfig, stats } from "@/lib/site-config"

export function AboutHero() {
  return (
    <section className="section-light relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_68%)] blur-3xl" />
        <div className="absolute right-0 top-12 h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.88),transparent_68%)] blur-3xl" />
        <SoftnetMotif className="absolute right-10 top-10 hidden h-28 w-56 opacity-[0.5] lg:block" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Nosotros
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-6xl">
              Diseñamos tecnología y presencia digital para empresas que necesitan transmitir{" "}
              <span className="text-brand-gradient">seriedad, claridad y nivel</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#111318]/66 md:text-xl">
              {siteConfig.description} Nos importa el diseño, pero también la arquitectura, el
              backend, los procesos y la forma en que una solución se sostiene cuando el negocio crece.
            </p>

            <div className="mt-8 paper-card rounded-[1rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/72">
                Cómo pensamos
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#111318]/66">
                Una web bonita sirve poco si el fondo es débil. Nuestro trabajo es unir marca,
                software y operación para que el resultado se vea premium y aguante la realidad del negocio.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="surface-card rounded-[1rem] p-5 lg:p-6"
          >
            <div className="paper-card rounded-[1rem] p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/72">
                    Softnet Digital
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    Boutique digital con cabeza técnica
                  </h2>
                </div>
                <SoftnetMark className="h-14 w-14 rounded-[1.2rem]" />
              </div>

              <div className="mt-6 border-b border-black/8 pb-5">
                <SoftnetLockup compact className="[&_span.block]:text-[0.98rem]" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="paper-card-soft rounded-[0.9rem] p-5">
                    <p className="text-3xl font-extrabold tracking-[-0.04em] text-[#111318]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-[#111318]/58">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="ink-panel mt-6 rounded-[0.95rem] p-6 text-white">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/46">
                  Lo que nos define
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    "Criterio visual serio",
                    "Capacidad full stack real",
                    "Comunicación clara y aterrizada",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[0.8rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
