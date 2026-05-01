"use client"

import { Quote, Star } from "lucide-react"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { testimonials } from "@/lib/site-config"

export function Testimonials() {
  const featuredTestimonial = testimonials[0]
  const supportingTestimonials = testimonials.slice(1)

  return (
    <section id="testimonios-home" className="bg-slate-50 py-28 border-t border-slate-200 relative overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 border-l-2 border-red-600 pl-6">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
            // VALIDACIÓN
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-slate-900 max-w-3xl">
            Sistemas que se defienden{" "}
            <span className="text-slate-400">frente a negocio.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 font-medium">
            La mejor señal no es solo que el diseño guste, sino que el proyecto sea fácil de explicar internamente porque opera mejor y entrega resultados.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Parallax offset={16}>
            <Reveal className="border border-slate-200 bg-white p-8 sm:p-10 lg:p-12 shadow-sm relative">
              <div className="absolute right-8 top-8 text-slate-100">
                <Quote className="h-24 w-24" />
              </div>

              <div className="mb-8 flex items-center gap-1">
                {Array.from({ length: featuredTestimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="max-w-3xl text-2xl font-bold leading-[1.32] tracking-[-0.02em] text-slate-900 lg:text-[2rem] relative z-10">
                &ldquo;{featuredTestimonial.content}&rdquo;
              </p>

              <div className="mt-12 grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <div className="flex h-14 w-14 items-center justify-center border border-slate-200 bg-slate-50 text-xl font-bold text-slate-900">
                  {featuredTestimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-lg font-bold tracking-[-0.02em] text-slate-900">
                    {featuredTestimonial.name}
                  </p>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mt-1">
                    {featuredTestimonial.role}, {featuredTestimonial.company}
                  </p>
                </div>

                <div className="border-l border-slate-200 pl-5">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600">
                    Resultado
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    Ejecución técnica rigurosa.
                  </p>
                </div>
              </div>
            </Reveal>
          </Parallax>

          <StaggerGroup stagger={0.09} className="border border-slate-200 bg-white shadow-sm flex flex-col">
            {supportingTestimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.name} className="p-8 border-b border-slate-200 last:border-b-0 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3 w-3 fill-slate-300 text-slate-300" />
                    ))}
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 font-bold text-slate-900 text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
