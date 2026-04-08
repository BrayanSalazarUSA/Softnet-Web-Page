"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { faqs } from "@/lib/site-config"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq-home" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.06]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Preguntas frecuentes
            </span>
            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Respuestas claras para{" "}
              <span className="text-brand-gradient">tomar una decisión con confianza</span>.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/64">
              Si estás comparando agencias o intentando aterrizar un proyecto serio, aquí resolvemos
              tiempos, alcance, mantenimiento, integraciones y forma de trabajo.
            </p>

            <div className="mt-10 border-l border-white/10 pl-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/76">
                Si tu caso no encaja en un paquete
              </p>
              <p className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-white">
                Mejor. Los proyectos buenos suelen empezar con una conversación bien hecha.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/62">
                Podemos aterrizar una propuesta según negocio, complejidad técnica y el nivel real de la operación.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Propuesta adaptada
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <Accordion type="single" collapsible className="border-t border-white/10">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
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
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
