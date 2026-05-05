"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  AppWindow,
  ArrowRight,
  Server,
  LayoutDashboard,
  Cpu,
  Code2,
  Workflow,
  TerminalSquare,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { services } from "@/lib/site-config"

// We map icons to technical equivalents
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2: Server,
  Target: Cpu,
  ShoppingCart: Code2,
  AppWindow: AppWindow,
  Workflow: Workflow,
  LayoutDashboard: LayoutDashboard,
}

export function ServicesPreview() {
  const featuredServices = services.slice(0, 4)

  return (
    <section id="servicios-home" className="relative overflow-hidden py-32 bg-[#050505] border-b border-white/5">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(0, 200, 150, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 150, 0.1) 1px, transparent 1px)`,
               backgroundSize: '60px 60px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Expertise Técnica & Resultados
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-tight max-w-4xl"
          >
            Ingeniería que <span className="text-primary italic">Impulsa</span> el Futuro Digital.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-400 font-medium leading-relaxed"
          >
            Fusionamos arquitectura de software de alto nivel con estrategias de crecimiento 
            para construir productos que dominan el mercado.
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          
          {/* Methodology Card */}
          <Parallax offset={15}>
            <Reveal className="h-full border border-white/10 bg-slate-900/40 backdrop-blur-xl p-10 lg:p-14 rounded-[3rem] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,200,150,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-12 shadow-inner">
                  <TerminalSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 leading-[1.1] font-heading tracking-tight">
                  Construimos <br /> con <span className="text-primary">Precisión</span>.
                </h3>
                <p className="text-slate-400 mb-12 font-medium leading-relaxed text-lg">
                  No solo escribimos código; diseñamos ecosistemas digitales escalables bajo principios de alta disponibilidad y seguridad bancaria.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    ["Scalability", "Cloud-native infrastructure."],
                    ["Performance", "Edge computing delivery."],
                    ["Security", "SOC2 compliance ready."],
                    ["Strategy", "Business-driven ROI."],
                  ].map(([label, copy]) => (
                    <div key={label} className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/60">
                        {label}
                      </p>
                      <p className="text-xs text-white/80 font-bold leading-tight">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 relative z-10">
                <Button asChild variant="ghost" className="rounded-full text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all px-8 h-12 group border border-white/10">
                  <Link href="/servicios" className="flex items-center gap-3">
                    Ver Stack Tecnológico
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </Parallax>

          {/* Service Grid */}
          <StaggerGroup stagger={0.1} className="grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Cpu

              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/servicios#${service.id}`}
                    className="block group h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-900/60 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,200,150,0.1)] hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="mb-10 flex items-center justify-between relative z-10">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-slate-400 group-hover:text-black group-hover:bg-primary transition-all duration-500 shadow-sm border border-white/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-700 tracking-tighter group-hover:text-primary transition-colors">
                        //0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-4 font-heading tracking-tight relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-10 font-medium leading-relaxed group-hover:text-slate-300 transition-colors relative z-10">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 relative z-10">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <span
                          key={benefit}
                          className="px-4 py-1.5 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-all"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
