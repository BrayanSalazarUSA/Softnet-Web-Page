"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckSquare, Loader2, Terminal } from "lucide-react"
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
    "h-12 rounded-none border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-primary focus-visible:border-primary transition-all"
  const textareaClassName =
    "resize-none rounded-none border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-primary focus-visible:border-primary transition-all"
  const selectClassName =
    "h-12 w-full rounded-none border-slate-200 bg-white text-slate-900 shadow-sm data-[placeholder]:text-slate-400 focus-visible:ring-primary focus-visible:border-primary transition-all"

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] cyber-grid grayscale" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-slate-200 bg-white p-8 lg:p-12 shadow-2xl backdrop-blur-md"
          >
            <div className="mb-6 flex items-start gap-4 border-l-2 border-primary pl-4">
               <div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-primary mb-1">
                    // SOLICITUD TÉCNICA
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-slate-900">
                    Propuesta con enfoque visual, técnico y comercial.
                  </h2>
               </div>
            </div>
            
            <p className="mb-8 text-sm leading-relaxed text-slate-600">
              Cuéntanos qué necesitas y te responderemos con una propuesta más clara, más útil y
              mejor aterrizada que un simple presupuesto genérico.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 border border-primary/20 bg-primary/5 p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-slate-200 bg-white text-primary mb-6">
                  <CheckSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Solicitud Recibida
                </h3>
                <p className="text-sm text-slate-600">
                  Gracias por escribirnos. Analizaremos tus requerimientos técnicos y te responderemos en menos de 24 horas con el siguiente paso.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Nombre completo *</Label>
                    <Input id="name" name="name" required placeholder="Tu nombre" className={fieldClassName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="tu@email.com" className={fieldClassName} />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Empresa</Label>
                    <Input id="company" name="company" placeholder="Nombre de tu empresa" className={fieldClassName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Teléfono</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+34 600 000 000" className={fieldClassName} />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Tipo de proyecto *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger className={selectClassName}>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-slate-200 bg-white text-slate-900">
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type} className="rounded-none cursor-pointer hover:bg-slate-50 focus:bg-slate-50 focus:text-primary transition-colors">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Presupuesto estimado</Label>
                    <Select name="budget">
                      <SelectTrigger className={selectClassName}>
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-slate-200 bg-white text-slate-900">
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range} className="rounded-none cursor-pointer hover:bg-slate-50 focus:bg-slate-50 focus:text-primary transition-colors">
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Requerimientos Técnicos *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Describe brevemente qué necesitas, qué te preocupa y qué esperas conseguir."
                    className={textareaClassName}
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto rounded-none bg-primary hover:bg-slate-900 text-black hover:text-white font-extrabold font-mono text-xs uppercase tracking-wider h-12 px-8 shadow-[0_10px_20px_rgba(0,255,65,0.15)]">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Terminal className="ml-2 h-4 w-4" />
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
            className="grid gap-6 h-fit"
          >
            <div className="border border-slate-200 bg-slate-50 p-8 text-slate-900 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-[0.02] grayscale" />
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-primary mb-4 relative z-10">
                // QUÉ PUEDES ESPERAR
              </p>
              <h3 className="text-2xl font-bold tracking-[-0.02em] mb-6 relative z-10">
                Una conversación útil, no un formulario perdido.
              </h3>
              <div className="grid gap-px bg-slate-200 border border-slate-200 relative z-10">
                {[
                  "Respuesta rápida con lenguaje claro",
                  "Enfoque comercial y técnico desde el inicio",
                  "Siguiente paso concreto para avanzar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white p-4 hover:bg-slate-50 transition-colors"
                  >
                    <CheckSquare className="mt-px h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-8 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900 mb-6">
                Por qué trabajar con nosotros
              </h3>
              <div className="grid gap-3">
                {[
                  "Cotización técnica sin compromiso",
                  "Visión de diseño + software + operación",
                  "Acompañamiento continuo durante el proyecto",
                  "Ejecución limpia, profesional y bien presentada",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0 group"
                  >
                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-slate-400 mt-1 group-hover:text-primary transition-colors">
                      0{i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">{item}</p>
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
