"use client"

import Link from "next/link"
import {
  ArrowRight,
  BellRing,
  Bot,
  CalendarDays,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"

const automationFlow = [
  {
    step: "01",
    title: "Responde con contexto",
    description: "Un asistente atiende preguntas sobre servicios, horarios y primeras dudas sin sonar perdido ni genérico.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Propone y agenda",
    description: "Detecta intención, sugiere horarios disponibles y deja la cita organizada en el calendario correcto.",
    icon: CalendarDays,
  },
  {
    step: "03",
    title: "Confirma y recuerda",
    description: "Envía confirmaciones, recordatorios y seguimiento para reducir olvidos y fricción comercial.",
    icon: BellRing,
  },
  {
    step: "04",
    title: "Ordena el flujo",
    description: "Toda la información queda mejor registrada para que ventas u operación trabajen con más claridad.",
    icon: Workflow,
  },
]

const automationSignals = [
  "Chat en web con contexto real de tu negocio",
  "Agenda conectada a disponibilidad y equipo",
  "Recordatorios automáticos antes de la cita",
  "Base lista para integrar CRM, email o WhatsApp",
]

export function AutomationPreview() {
  return (
    <section id="automatizacion-home" className="section-light relative overflow-hidden py-28 text-[#121317]">
      <div className="fine-grid absolute inset-0 opacity-[0.08]" />
      <div className="absolute right-[-8rem] top-24 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_72%)] blur-3xl" />
      <div className="absolute left-[-10rem] bottom-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.08),transparent_74%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Automatización + IA"
          icon={Bot}
          title={
            <>
              Un sistema que responde, agenda y hace seguimiento{" "}
              <span className="text-brand-gradient">puede empezar desde tu propia web</span>.
            </>
          }
          description="No hablo de un chatbot puesto por moda. Hablo de una automatización bien pensada: atiende primeras preguntas, propone horarios, organiza citas y mantiene el flujo comercial más ordenado sin perseguir cada paso a mano."
        />

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Parallax offset={20}>
            <Reveal className="js-automation-board surface-card relative overflow-hidden rounded-[1rem] p-7 text-white sm:p-8 lg:p-10">
              <div className="soft-grid absolute inset-0 opacity-[0.08]" />
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.4),transparent)]" />
              <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_70%)] blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  {["web chat", "agenda", "recordatorios", "seguimiento"].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/54"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                    Flujo propuesto
                  </p>
                  <h3 className="mt-4 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] text-white">
                    Atención inicial mejor pensada, sin perder tono ni orden.
                  </h3>
                </div>

                <div className="relative mt-9 space-y-5">
                  <div className="absolute left-[1.2rem] top-4 bottom-4 w-px bg-[linear-gradient(180deg,rgba(96,165,250,0.48),rgba(255,255,255,0.08))]" />

                  <StaggerGroup delayChildren={0.05} stagger={0.08} className="space-y-5">
                    {automationFlow.map((item) => {
                      const Icon = item.icon

                      return (
                        <StaggerItem key={item.step} className="js-automation-step relative pl-14">
                          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/28 bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(255,255,255,0.04))] text-primary shadow-[0_0_0_6px_rgba(59,130,246,0.06)]">
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="border border-white/10 bg-white/[0.04] p-4">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-sm font-semibold text-white">{item.title}</p>
                              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/34">
                                {item.step}
                              </span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/64">{item.description}</p>
                          </div>
                        </StaggerItem>
                      )
                    })}
                  </StaggerGroup>
                </div>
              </div>
            </Reveal>
          </Parallax>

          <Reveal delay={0.08} className="js-automation-copy paper-card relative overflow-hidden rounded-[1rem] p-7 sm:p-8 lg:p-10">
            <div className="fine-grid absolute inset-0 opacity-[0.14]" />
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_72%)]" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="neon-icon-box flex h-12 w-12 items-center justify-center rounded-[0.9rem]">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                    Qué vendería esta solución
                  </p>
                  <h3 className="mt-3 max-w-[15ch] text-3xl font-extrabold tracking-[-0.045em] text-[#121317]">
                    Menos fricción en el primer contacto y una agenda mucho mejor cuidada.
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#121317]/66">
                Para muchos negocios, el problema no es solo conseguir visitas. Es responder bien, filtrar
                intención, coordinar disponibilidad y no dejar escapar oportunidades por desorden. Ahí es
                donde una automatización bien hecha se vuelve valiosa de verdad.
              </p>

              <div className="mt-8 space-y-3 border-t border-black/8 pt-6">
                {automationSignals.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary/72">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[#121317]/68">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-black/8 pt-6">
                <p className="code-caption text-[0.66rem] font-semibold text-[#121317]/36">
                  No es humo de IA
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#121317]/62">
                  Primero se diseña el flujo, luego se conecta la lógica, la agenda y las notificaciones.
                  Lo valioso no es “tener bot”. Lo valioso es que el sistema sí ayude a vender y operar mejor.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contacto">
                    Explorar automatización
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
