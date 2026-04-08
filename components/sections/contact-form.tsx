"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const projectTypes = [
  "Página Web Corporativa",
  "Landing Page",
  "Tienda Online / E-commerce",
  "Aplicación Web",
  "Dashboard / Panel Admin",
  "Sistema Interno",
  "Automatización",
  "Otro",
]

const budgetRanges = [
  "Menos de €3.000",
  "€3.000 - €5.000",
  "€5.000 - €10.000",
  "€10.000 - €20.000",
  "Más de €20.000",
  "Por definir",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fieldClassName =
    "h-12 rounded-[1rem] border-black/8 bg-white text-[#111318] shadow-[0_16px_34px_rgba(17,19,24,0.05)] placeholder:text-[#111318]/36 hover:border-primary/35"
  const textareaClassName =
    "resize-none rounded-[1rem] border-black/8 bg-white text-[#111318] shadow-[0_16px_34px_rgba(17,19,24,0.05)] placeholder:text-[#111318]/36 hover:border-primary/35"
  const selectClassName =
    "h-12 w-full rounded-[1rem] border-black/8 bg-white text-[#111318] shadow-[0_16px_34px_rgba(17,19,24,0.05)] data-[placeholder]:text-[#111318]/36 hover:border-primary/35"

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="paper-card rounded-[2.2rem] p-7 lg:p-8"
          >
            <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
              <span className="section-dot" />
              Solicitud
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-[#111318]">
              Solicita una propuesta con enfoque visual, técnico y comercial
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#111318]/62">
              Cuéntanos qué necesitas y te responderemos con una propuesta más clara, más útil y
              mejor aterrizada que un simple presupuesto genérico.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="paper-card-soft mt-8 rounded-[1.8rem] p-8 text-center"
              >
                <div className="neon-icon-box mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-[#111318]">
                  Mensaje enviado
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#111318]/58">
                  Gracias por escribirnos. Te responderemos en menos de 24 horas con el siguiente paso.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input id="name" name="name" required placeholder="Tu nombre" className={fieldClassName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="tu@email.com" className={fieldClassName} />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" name="company" placeholder="Nombre de tu empresa" className={fieldClassName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+34 600 000 000" className={fieldClassName} />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de proyecto *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger className={selectClassName}>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Presupuesto estimado</Label>
                    <Select name="budget">
                      <SelectTrigger className={selectClassName}>
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu proyecto *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Describe brevemente qué necesitas, qué te preocupa y qué esperas conseguir."
                    className={textareaClassName}
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="grid gap-6"
          >
            <div className="accent-panel rounded-[2rem] p-8 text-white">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78">
                Qué puedes esperar
              </p>
              <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.04em]">
                Una conversación útil, no un formulario perdido en internet.
              </h3>
              <div className="mt-7 grid gap-3">
                {[
                  "Respuesta rápida con lenguaje claro",
                  "Enfoque comercial y técnico desde el inicio",
                  "Siguiente paso concreto para avanzar",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/16 bg-white/10 px-4 py-4 text-sm text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-8 text-white">
              <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                Por qué trabajar con nosotros
              </h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Cotización sin compromiso",
                  "Visión de diseño + software + operación",
                  "Acompañamiento continuo durante el proyecto",
                  "Ejecución limpia, profesional y bien presentada",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-relaxed text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
