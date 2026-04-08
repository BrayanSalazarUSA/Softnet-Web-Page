"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { AppWindow, ArrowRight, Braces, Clock3, LayoutDashboard, Play, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stats } from "@/lib/site-config"

const heroCapabilities = [
  { icon: AppWindow, label: "Web corporativa premium" },
  { icon: LayoutDashboard, label: "Dashboards y paneles" },
  { icon: Braces, label: "Backend e integraciones" },
  { icon: Workflow, label: "Automatización de procesos" },
]

const heroStats = [...stats.slice(0, 3), { value: "24h", label: "Primera respuesta" }]

export function Hero() {
  return (
    <section className="section-light relative overflow-hidden pt-32 pb-24 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-0rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-12rem] top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,232,210,0.92),transparent_70%)] blur-3xl" />
        <div className="absolute left-[24%] top-24 h-[28rem] w-px bg-[linear-gradient(180deg,rgba(17,19,24,0.08),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64vw] max-w-[980px] lg:block"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7F4EE_0%,rgba(247,244,238,0.9)_16%,rgba(247,244,238,0.18)_38%,rgba(247,244,238,0)_56%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_26%,rgba(255,145,52,0.14),transparent_22%),radial-gradient(circle_at_88%_64%,rgba(255,255,255,0.48),transparent_24%)] z-10" />
        <Image
          src="/hero-backgorund.png"
          alt="Visual de proyectos digitales y software premium"
          fill
          priority
          className="object-cover object-[76%_center] "
          sizes="(min-width: 1024px) 64vw, 100vw"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-3 lg:px-4">
        <div className="max-w-2xl lg:max-w-[62rem]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary"
          >
            <span className="section-dot" />
            Agencia digital para empresas que no quieren verse estándar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-8 max-w-[17ch] text-5xl font-extrabold leading-[0.92] text-[#111318] md:text-6xl lg:text-[5.85rem]"
          >
            Diseño web y software con{" "}
            <span className="text-brand-gradient">presencia, sistema y criterio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#111318]/66 sm:text-xl"
          >
            Construimos experiencias web premium, sistemas internos y automatizaciones para
            empresas que necesitan vender confianza, ordenar su operación y sostener crecimiento
            con una base técnica seria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group sm:w-auto">
              <Link href="/contacto">
                Solicitar propuesta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="sm:w-auto">
              <Link href="/proyectos">
                <Play className="h-4 w-4" />
                Ver proyectos
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-14 max-w-[60rem]"
          >
            <div className="paper-card-soft relative overflow-hidden rounded-[1.9rem] border border-black/10 backdrop-blur-xl">
              <div className="absolute inset-y-0 right-[36%] hidden w-px bg-black/8 lg:block" />
              <div className="absolute left-10 top-4 h-20 w-20 rounded-full bg-primary/10 blur-3xl" />

              <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
                <div className="relative px-6 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                    Capacidad integral
                  </p>
                  <h3 className="mt-3 max-w-[22ch] text-2xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    Presencia visual, software interno y automatización dentro del mismo estándar.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#111318]/62">
                    Una sola dirección para que la empresa se vea mejor, opere mejor y crezca sobre una base técnica más seria.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {heroCapabilities.map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 border border-black/8 bg-white/58 px-4 py-3 shadow-[0_12px_28px_rgba(17,19,24,0.05)]"
                        >
                          <div className="flex h-9 w-9 items-center justify-center border border-black/8 bg-[#FFF5EB] text-primary">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-[#111318]/82">{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="border-t border-black/8 p-4 lg:border-t-0 lg:p-3">
                  <div className="surface-card-dark h-full rounded-[1.45rem] px-5 py-5 text-white sm:px-6 sm:py-6">
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div>
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                          Señales de confianza
                        </p>
                        <p className="mt-2 text-sm text-white/62">Experiencia, resultados y respuesta clara.</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.05] text-primary">
                        <Clock3 className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                      {heroStats.map((stat) => (
                        <div key={stat.label} className="border-l border-white/10 pl-4">
                          <p className="text-3xl font-extrabold tracking-[-0.05em] text-white">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/58">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
