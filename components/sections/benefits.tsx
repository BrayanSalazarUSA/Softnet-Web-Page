"use client"

import { Braces } from "lucide-react"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"
import { techStack } from "@/lib/site-config"

const principles = [
  "Una presencia que se sienta más costosa sin caer en artificio.",
  "Código, copy e interacción funcionando como parte del mismo sistema.",
  "Tecnología elegida para durar y para integrarse con negocio real.",
]

const stackGroups = techStack.reduce<Record<string, string[]>>((acc, item) => {
  acc[item.category] = [...(acc[item.category] ?? []), item.name]
  return acc
}, {})

export function Benefits() {
  return (
    <section id="capacidades" className="section-light relative py-28 text-[#121317]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Capacidad real"
          icon={Braces}
          title={
            <>
              Diseño premium con{" "}
              <span className="text-brand-gradient">arquitectura, criterio y ejecución completa</span>.
            </>
          }
          description="No resolvemos solo la interfaz. Diseñamos experiencias convincentes y las respaldamos con decisiones técnicas que aguantan crecimiento, integración y operación real."
        />

        <Parallax offset={24}>
          <Reveal className="paper-card relative overflow-hidden rounded-[1rem] p-6 sm:p-8 lg:p-10">
            <div className="fine-grid absolute inset-0 opacity-[0.18]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                  Base de ejecución
              </p>
              <h3 className="mt-4 max-w-[11ch] text-4xl font-extrabold tracking-[-0.05em] text-[#121317]">
                  Que todo se sienta parte del mismo sistema.
              </h3>

                <StaggerGroup delayChildren={0.06} stagger={0.08} className="mt-8 space-y-5 border-l border-black/10 pl-6">
                  {principles.map((item, index) => (
                    <StaggerItem key={item}>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#121317]/62">{item}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.56fr_0.44fr]">
                <Reveal delay={0.08} className="surface-card rounded-[1rem] p-7 text-white">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                    Core system
                  </p>
                  <h3 className="mt-5 max-w-[10ch] text-4xl font-extrabold tracking-[-0.05em] text-white">
                    Diseño, lógica y despliegue dentro del mismo criterio.
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/62">
                    Frontend, backend, base de datos, pagos, automatización y operación entendidos como una sola pieza.
                  </p>
                </Reveal>

                <StaggerGroup stagger={0.08} className="grid gap-4">
                  {Object.entries(stackGroups).map(([category, items], index) => (
                    <StaggerItem
                      key={category}
                      className={`border border-black/10 bg-white/62 p-4 backdrop-blur-sm ${
                        index % 2 === 1 ? "lg:ml-8" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/78">
                          {category}
                        </p>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#121317]/28">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="border border-black/8 bg-white/72 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#121317]/68"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  )
}
