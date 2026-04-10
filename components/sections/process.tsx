"use client"

import { Workflow } from "lucide-react"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"
import { processSteps } from "@/lib/site-config"

const stepOutcomes = [
  "Prioridades claras y alcance defendible.",
  "Dirección visual alineada a negocio y percepción.",
  "Construcción con seguimiento real y validaciones.",
  "Salida a producción con orden y sin improvisación.",
  "Evolución continua, soporte y mejoras medibles.",
]

export function Process() {
  return (
    <section id="proceso" className="section-wash relative py-28 text-[#111318]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Cómo trabajamos"
          icon={Workflow}
          title={
            <>
              Un proceso pensado para que el proyecto se{" "}
              <span className="text-brand-gradient">sienta serio antes, durante y después</span>.
            </>
          }
          description="No seguimos un timeline genérico. Diseñamos una secuencia de trabajo donde negocio, dirección visual, ejecución técnica y salida a producción se sienten parte de la misma historia."
          panelKicker="Cadencia de trabajo"
          panelTitle="Una secuencia clara, con menos fricción y más lectura de avance."
          panelDescription="La idea no es solo entregar. Es que cada etapa tenga sentido para negocio, diseño y ejecución, y que el cliente sienta progreso real."
          panelPoints={stepOutcomes.slice(0, 4)}
        />

        <Reveal className="js-process-board paper-card relative overflow-hidden rounded-[1rem]">
          <div className="fine-grid absolute inset-0 opacity-[0.22]" />
          <StaggerGroup stagger={0.08} className="relative z-10 grid lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <StaggerItem
                key={step.step}
                className={`relative flex min-h-[18rem] flex-col border-t border-black/8 px-6 py-8 first:border-t-0 lg:border-t-0 lg:border-l ${
                  index === 0 ? "lg:border-l-0" : ""
                } ${index % 2 === 1 ? "lg:pt-16" : "lg:pt-8"}`}
              >
                <span className="absolute right-5 top-4 text-[4.2rem] font-extrabold tracking-[-0.08em] text-[#111318]/6">
                  0{step.step}
                </span>

                <div className="relative z-10">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/74">
                    Paso 0{step.step}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[#111318]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/62">{step.description}</p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <div className="h-px bg-black/8" />
                  <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#111318]/34">
                    Qué gana tu empresa
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#111318]/68">{stepOutcomes[index]}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  )
}
