"use client"

import {
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Scale,
  ShoppingBag,
  Truck,
} from "lucide-react"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"

const credibilitySignals = [
  {
    name: "Salud",
    detail: "Reservas, gestión y experiencia digital sin fricción.",
    icon: HeartPulse,
  },
  {
    name: "Legal",
    detail: "Sitios institucionales y captación cualificada.",
    icon: Scale,
  },
  {
    name: "Inmobiliario",
    detail: "Portales, automatización y activos mejor presentados.",
    icon: Building2,
  },
  {
    name: "Logística",
    detail: "Dashboards y operación con lectura en tiempo real.",
    icon: Truck,
  },
  {
    name: "Servicios B2B",
    detail: "Presencia corporativa, procesos y crecimiento comercial.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Retail",
    detail: "E-commerce, backoffice y automatización de operación.",
    icon: ShoppingBag,
  },
]

export function TrustBadges() {
  return (
    <section id="sectores" className="section-wash relative overflow-hidden py-28 text-[#121317]">
      <div className="container relative mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Autoridad y contexto"
          title={
            <>
              Diseñamos para empresas donde la{" "}
              <span className="text-brand-gradient">percepción institucional cambia la venta</span>.
            </>
          }
          description="Cuando una empresa necesita vender confianza, la parte visual y la parte técnica tienen que hablar el mismo idioma. Ahí es donde más valor aportamos."
        />

        <Parallax offset={18}>
          <Reveal delay={0.08} className="paper-card relative overflow-hidden rounded-[1rem] p-6 sm:p-8 lg:p-10">
            <div className="fine-grid absolute inset-0 opacity-[0.15]" />
            <div className="pointer-events-none absolute right-[-4rem] top-[-3rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.10),transparent_70%)] blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 grid gap-6 border-b border-black/8 pb-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/76">
                    Sectores de alta sensibilidad
                  </p>
                  <h3 className="mt-3 max-w-[17ch] text-3xl font-extrabold tracking-[-0.045em] text-[#121317]">
                    Contextos donde la credibilidad se construye detalle por detalle.
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-[#121317]/62 lg:justify-self-end">
                  Salud, legal, inmobiliario, logística, servicios B2B y retail no responden bien a una
                  solución genérica. El tono, la jerarquía, la experiencia y la arquitectura tienen impacto
                  directo en percepción, cierre y operación.
                </p>
              </div>

              <StaggerGroup stagger={0.07} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {credibilitySignals.map((signal) => {
                  const Icon = signal.icon

                  return (
                    <StaggerItem key={signal.name}>
                      <div className="group relative h-full overflow-hidden rounded-[1rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,255,255,0.94))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/24 hover:bg-white">
                        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.34),transparent)]" />
                        <div className="absolute right-0 top-0 h-20 w-20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_68%)]" />

                        <div className="relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="neon-icon-box flex h-11 w-11 items-center justify-center rounded-[0.85rem]">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>

                            <div>
                              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-primary/72">
                                Contexto sensible
                              </p>
                              <h4 className="mt-1 text-2xl font-extrabold tracking-[-0.04em] text-[#121317]">
                                {signal.name}
                              </h4>
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-relaxed text-[#121317]/62">
                            {signal.detail}
                          </p>

                          <div className="mt-5 flex items-center gap-3 border-t border-black/8 pt-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/72" />
                            <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#121317]/42">
                              Señal institucional + ejecución real
                            </span>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  )
                })}
              </StaggerGroup>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  )
}
