"use client"

import { CircleHelp } from "lucide-react"
import { faqs } from "@/lib/site-config"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"

export function FAQ() {
  return (
    <section id="faq-home" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.06]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Preguntas frecuentes"
          icon={CircleHelp}
          dark
          title={
            <>
              Respuestas claras para{" "}
              <span className="text-brand-gradient">tomar una decisión con confianza</span>.
            </>
          }
          description="Si estás comparando agencias o intentando aterrizar un proyecto serio, aquí resolvemos tiempos, alcance, mantenimiento, integraciones y forma de trabajo."
          panelKicker="Si tu caso no encaja en un paquete"
          panelTitle="Mejor. Los proyectos buenos suelen empezar con una conversación bien hecha."
          panelDescription="Podemos aterrizar una propuesta según negocio, complejidad técnica y el nivel real de la operación."
          panelPoints={[
            "Alcance y tiempos sin humo.",
            "Integraciones y mantenimiento claros.",
            "Propuesta adaptada al contexto real.",
          ]}
        />

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="border-t border-white/10">
            <StaggerGroup stagger={0.06}>
              {faqs.map((faq, index) => (
                <StaggerItem key={faq.question}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-white/10 px-0"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-semibold tracking-[-0.03em] text-white hover:no-underline">
                      <span className="flex items-start gap-4">
                        <span className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary/72">
                          0{index + 1}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-12 text-base leading-relaxed text-white/62">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
