"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import {
  AppWindow,
  ArrowRight,
  Building2,
  LayoutDashboard,
  ShoppingCart,
  Target,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"
import { services } from "@/lib/site-config"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2,
  Target,
  ShoppingCart,
  AppWindow,
  Workflow,
  LayoutDashboard,
}

export function ServicesPreview() {
  const featuredServices = services.slice(0, 4)

  return (
    <section id="servicios-home" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.05]" />
      <div className="absolute left-[-8rem] top-24 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Servicios"
          icon={Workflow}
          dark
          title={
            <>
              Cuatro frentes donde{" "}
              <span className="text-brand-gradient">diseño, software y operación generan valor real</span>.
            </>
          }
          description="Agrupamos la oferta para que se entienda rápido qué resolvemos, qué cambia en el negocio y qué nivel técnico hay detrás de cada entrega."
        />

        <div className="js-services-stage grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <Parallax offset={22}>
            <Reveal className="js-services-panel-shell surface-card rounded-[1rem] p-8 lg:p-10">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/82">
                Cómo se traduce
              </p>
              <h3 className="mt-5 max-w-[11ch] text-4xl font-extrabold tracking-[-0.05em] text-white">
                Una oferta clara para vender mejor y operar con más orden.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/64">
                No organizamos servicios para llenar una cuadrícula. Los organizamos para que un
                prospecto entienda rápido dónde está el impacto comercial, técnico y operativo.
              </p>

              <StaggerGroup
                delayChildren={0.06}
                stagger={0.07}
                className="mt-9 grid gap-3 sm:grid-cols-2"
              >
                {[
                  ["Presencia", "Interfaces que elevan percepción y hacen ver a la empresa más sólida."],
                  ["Operación", "Sistemas internos que ordenan flujos, equipos y seguimiento."],
                  ["Datos", "Dashboards y paneles con lectura útil para tomar mejores decisiones."],
                  ["Automatización", "Integraciones y procesos conectados para reducir fricción manual."],
                ].map(([label, copy]) => (
                  <StaggerItem
                    key={label}
                    className="border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                      {label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/66">{copy}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-9 border-t border-white/10 pt-6">
                <Button asChild variant="outline" size="lg" className="border-white/12 bg-white text-[#121317] hover:bg-[#F8FAFC]">
                  <Link href="/servicios">
                    Ver todos los servicios
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </Parallax>

          <StaggerGroup stagger={0.08} className="grid gap-5 sm:grid-cols-2">
            {featuredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Building2

              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/servicios#${service.id}`}
                    className="js-services-card group block h-full rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/24 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
                  >
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[0.8rem] border border-white/10 bg-white/[0.05] text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/28">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                      Frente de servicio
                    </p>
                    <h3 className="mt-4 max-w-[11ch] text-3xl font-extrabold tracking-[-0.05em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/62">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <span
                          key={benefit}
                          className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/42"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
