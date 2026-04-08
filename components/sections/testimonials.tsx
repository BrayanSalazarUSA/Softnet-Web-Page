"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/lib/site-config"

export function Testimonials() {
  const featuredTestimonial = testimonials[0]
  const supportingTestimonials = testimonials.slice(1)

  return (
    <section id="testimonios-home" className="section-light py-28 text-[#111318]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Testimonios
            </span>
            <h2 className="mt-7 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Clientes que valoran{" "}
              <span className="text-brand-gradient">claridad, ejecución y solvencia técnica</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-2xl text-lg leading-relaxed text-[#111318]/64"
          >
            La mejor señal no es solo que el diseño guste, sino que el proyecto sea fácil de defender
            dentro de la empresa porque se ve mejor, opera mejor y entrega resultados.
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="paper-card relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-12"
          >
            <div className="absolute right-10 top-8 text-primary/10">
              <Quote className="h-24 w-24" />
            </div>

            <div className="mb-8 flex items-center gap-1">
              {Array.from({ length: featuredTestimonial.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="max-w-3xl text-3xl font-medium leading-[1.32] tracking-[-0.04em] text-[#111318] lg:text-[2.4rem]">
              &ldquo;{featuredTestimonial.content}&rdquo;
            </p>

            <div className="mt-12 grid gap-6 border-t border-black/8 pt-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center border border-black/10 bg-white/70 text-xl font-extrabold text-[#111318] shadow-[0_12px_28px_rgba(17,19,24,0.06)]">
                {featuredTestimonial.name.charAt(0)}
              </div>

              <div>
                <p className="text-lg font-extrabold tracking-[-0.03em] text-[#111318]">
                  {featuredTestimonial.name}
                </p>
                <p className="mt-1 text-sm text-[#111318]/56">
                  {featuredTestimonial.role}, {featuredTestimonial.company}
                </p>
              </div>

              <div className="border-l border-black/10 pl-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-primary/76">
                  Señal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#111318]/62">
                  Proyecto fácil de defender frente a negocio.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="border-y border-black/10">
            {supportingTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="border-t border-black/10 py-7 first:border-t-0"
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-xl leading-relaxed tracking-[-0.02em] text-[#111318]/82">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-black/10 bg-white/68 font-extrabold text-[#111318] shadow-[0_12px_24px_rgba(17,19,24,0.05)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#111318]">{testimonial.name}</p>
                    <p className="text-sm text-[#111318]/54">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
