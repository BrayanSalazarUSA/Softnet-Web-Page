"use client"

import { motion } from "framer-motion"
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote: "La automatización que Softnet implementó en nuestro flujo de WhatsApp redujo los tiempos de respuesta en un 80%. Es ingeniería real aplicada al negocio.",
    author: "Carlos Rodriguez",
    role: "CEO de Innova Global",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    rating: 5,
    category: "AI Automation"
  },
  {
    quote: "Buscábamos una infraestructura Cloud que no nos diera problemas de escalabilidad. Softnet diseñó un ecosistema que hoy soporta a más de 50k usuarios activos.",
    author: "Elena Martínez",
    role: "CTO en Fintech Core",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5,
    category: "Cloud Engineering"
  },
  {
    quote: "El nivel de detalle en el desarrollo de nuestro CRM a medida fue excepcional. Entienden los procesos de negocio mejor que cualquier otra agencia que hayamos probado.",
    author: "Andrés Silva",
    role: "Director de Operaciones",
    avatar: "https://i.pravatar.cc/150?u=andres",
    rating: 5,
    category: "Custom Software"
  }
]

export function TestimonialsSoftnet() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '120px 120px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8"
          >
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Feedback & Resultados
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter text-white font-heading leading-tight mb-8"
          >
            Lo que dicen <span className="text-primary italic">nuestros aliados.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.6fr] gap-12 items-center">
            
            {/* Testimonial Card */}
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-12 lg:p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                <Quote className="w-40 h-40 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-12 tracking-tight italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                  <div className="relative w-16 h-16 rounded-[1.25rem] overflow-hidden border border-white/10 shadow-xl">
                    <Image 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white">{testimonials[activeIndex].author}</h4>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.25em] leading-none mt-1">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation & Stats */}
            <div className="space-y-12">
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all shadow-xl active:scale-95"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={next}
                  className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all shadow-xl active:scale-95"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/10 transition-colors">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[30px]" />
                   <h5 className="font-mono text-[9px] font-black text-primary/60 uppercase tracking-[0.3em] mb-4 relative z-10">// RENTABILIDAD</h5>
                   <p className="text-4xl font-black text-white font-heading tracking-tight relative z-10">+15h</p>
                   <p className="text-sm text-slate-500 font-medium relative z-10">Ahorradas semanalmente por cada departamento automatizado.</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/10 transition-colors">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[30px]" />
                   <h5 className="font-mono text-[9px] font-black text-primary/60 uppercase tracking-[0.3em] mb-4 relative z-10">// CONFIANZA</h5>
                   <p className="text-4xl font-black text-white font-heading tracking-tight relative z-10">100%</p>
                   <p className="text-sm text-slate-500 font-medium relative z-10">De nuestros clientes recomiendan nuestra ingeniería de alto nivel.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
