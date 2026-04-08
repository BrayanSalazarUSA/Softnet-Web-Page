"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ShieldCheck } from "lucide-react"

const credibilitySignals = [
  { name: "Salud", detail: "Reservas, gestión y experiencia digital sin fricción." },
  { name: "Legal", detail: "Sitios institucionales y captación cualificada." },
  { name: "Inmobiliario", detail: "Portales, seguimiento y activos mejor presentados." },
  { name: "Logística", detail: "Dashboards y operación con lectura en tiempo real." },
  { name: "Servicios B2B", detail: "Presencia corporativa, procesos y crecimiento comercial." },
  { name: "Retail", detail: "E-commerce, backoffice y automatización de operación." },
]

const proofPoints = [
  {
    value: "Brief claro",
    detail: "Objetivos comerciales y técnicos definidos antes de dibujar pantallas.",
  },
  {
    value: "Entregas defendibles",
    detail: "Cada decisión se puede explicar frente a dirección, ventas u operación.",
  },
  {
    value: "Relación seria",
    detail: "Comunicación ordenada, tiempos realistas y una propuesta mejor aterrizada.",
  },
]

export function TrustBadges() {
  return (
    <section id="sectores" className="section-wash relative py-28 text-[#111318]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Autoridad y contexto
            </span>

            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Diseñamos para empresas donde{" "}
              <span className="text-brand-gradient">verse sólidas importa tanto como funcionar bien</span>.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#111318]/66">
              No trabajamos como si todo proyecto fuera igual. Cambia la estética, la claridad del
              mensaje y también el nivel de robustez que necesita el sistema detrás.
            </p>

            <div className="mt-10 space-y-6 border-l border-black/10 pl-6">
              {proofPoints.map((point) => (
                <div key={point.value}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/78">
                    {point.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#111318]/60">{point.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="surface-card rounded-[2rem] p-8 text-white lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                    Donde no se puede improvisar
                  </p>
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>

                <h3 className="mt-6 max-w-[14ch] text-3xl font-extrabold tracking-[-0.05em]">
                  Cuando una empresa necesita vender confianza, forma y fondo tienen que ir juntas.
                </h3>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {[
                    ["Mensaje claro", "Más percepción institucional y mejor lectura comercial."],
                    ["Base robusta", "Backend, integraciones y arquitectura preparadas para crecer."],
                    ["UX útil", "Interfaces que ayudan al usuario y también al equipo interno."],
                  ].map(([title, copy]) => (
                    <div key={title} className="border-l border-white/10 pl-4">
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/62">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="paper-card rounded-[2rem] p-8 lg:p-10">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#111318]/42">
                  Lectura del proyecto
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    ["Visual", "Jerarquía, presencia y percepción premium."],
                    ["Técnico", "Arquitectura, datos, integraciones y orden."],
                    ["Operativo", "Procesos más fluidos y menos fricción para el equipo."],
                  ].map(([title, copy], index) => (
                    <div key={title} className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-lg font-extrabold tracking-[-0.04em] text-[#111318]">{title}</p>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#111318]/62">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="overflow-hidden border-y border-black/10"
            >
              {credibilitySignals.map((signal, index) => (
                <div
                  key={signal.name}
                  className="group grid gap-4 border-t border-black/10 py-6 first:border-t-0 md:grid-cols-[72px_1fr_1.3fr_auto] md:items-center"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#111318]/34">
                    0{index + 1}
                  </p>
                  <p className="text-2xl font-extrabold tracking-[-0.04em] text-[#111318]">{signal.name}</p>
                  <p className="max-w-xl text-sm leading-relaxed text-[#111318]/62">{signal.detail}</p>
                  <div className="flex h-11 w-11 items-center justify-center border border-black/10 bg-white/55 text-[#111318] shadow-[0_12px_28px_rgba(17,19,24,0.06)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
