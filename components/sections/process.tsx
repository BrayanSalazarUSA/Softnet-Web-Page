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
    <section id="proceso" className="bg-slate-50 relative py-28 text-slate-900 border-b border-slate-100">
      <div className="absolute inset-0 opacity-[0.03] cyber-grid grayscale" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionIntro
          eyebrow="Cómo trabajamos"
          icon={Workflow}
          dark={false}
          title={
            <>
              Un proceso pensado para que el proyecto se{" "}
              <span className="text-primary">sienta serio antes, durante y después</span>.
            </>
          }
          description="No seguimos un timeline genérico. Diseñamos una secuencia de trabajo donde negocio, dirección visual, ejecución técnica y salida a producción se sienten parte de la misma historia."
        />

        <Reveal className="js-process-board bg-white border border-slate-200 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.02] cyber-grid grayscale" />
          <StaggerGroup stagger={0.08} className="relative z-10 grid lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <StaggerItem
                key={step.step}
                className={`relative flex min-h-[18rem] flex-col border-t border-slate-100 px-6 py-8 first:border-t-0 lg:border-t-0 lg:border-l ${
                  index === 0 ? "lg:border-l-0" : ""
                } ${index % 2 === 1 ? "lg:pt-16" : "lg:pt-8"}`}
              >
                <span className="absolute right-5 top-4 text-[4.2rem] font-extrabold tracking-[-0.08em] text-slate-100">
                  0{step.step}
                </span>

                <div className="relative z-10">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-primary">
                    Paso 0{step.step}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <div className="h-px bg-slate-100" />
                  <p className="mt-4 text-[0.66rem] font-bold uppercase tracking-[0.28em] text-slate-400">
                    Qué gana tu empresa
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium">{stepOutcomes[index]}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  )
}
