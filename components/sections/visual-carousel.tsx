"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Monitor, Smartphone, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Unified Operations Hub",
    description: "Plataforma centralizada para gestión de procesos industriales con IA.",
    image: "/unified_dashboard_ecosystem.png",
    icon: Monitor,
    category: "Software Enterprise",
    color: "from-blue-500/20 to-primary/20"
  },
  {
    title: "Ecosistema de Automatización",
    description: "Flujos de trabajo autónomos que integran WhatsApp, CRM y Nube.",
    image: "/automations-flow.png",
    icon: Layers,
    category: "AI Automation",
    color: "from-primary/20 to-emerald-500/20"
  },
  {
    title: "Infraestructura Cloud",
    description: "Arquitecturas escalables para alta disponibilidad y rendimiento.",
    image: "/architecture-diagram.png",
    icon: Globe,
    category: "Engineering",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Interfaces Next-Gen",
    description: "Experiencias de usuario fluidas construidas con las últimas tecnologías.",
    image: "/hero-cyber-light.png",
    icon: Smartphone,
    category: "Frontend Dev",
    color: "from-slate-500/20 to-slate-900/20"
  }
]

export function VisualCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4 block"
            >
              Showcase Visual
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-950"
            >
              Ingeniería que puedes <br className="hidden md:block" /> 
              <span className="text-slate-400">tocar y sentir.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-slate-500 max-w-md font-medium"
          >
            Nuestras soluciones combinan potencia técnica con interfaces diseñadas para la máxima eficiencia operativa.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-20 px-[5vw] no-scrollbar snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] group snap-center"
            >
              {/* Card Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl bg-white group-hover:border-primary/30 transition-all duration-500">
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Image */}
                <div className="absolute inset-4 rounded-[1.8rem] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm max-w-sm font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Live System</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Last Slide: CTA */}
          <div className="flex-none w-[40vw] flex items-center justify-center snap-center">
            <div className="text-center space-y-6 p-12 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-300">
              <h3 className="text-2xl font-bold text-slate-950">¿Listo para construir el tuyo?</h3>
              <p className="text-slate-500 font-medium">Transformemos su infraestructura hoy.</p>
              <Button asChild size="lg" className="rounded-full h-14 px-8 bg-primary text-black hover:bg-slate-900 hover:text-white transition-all font-bold">
                <a href="/contacto">
                  Cotizar Ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="flex justify-center gap-2 mt-4 text-slate-300 font-mono text-[10px] uppercase tracking-widest">
           <span>Scroll para explorar</span>
           <span>→</span>
        </div>
      </div>
    </section>
  )
}
