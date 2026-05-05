"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Shield, BarChart3, Globe, Code2, Cpu, Rocket, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesMarquee } from "./services-marquee"

const floatingCards = [
  {
    icon: Code2,
    title: "Web Apps",
    value: "Next.js 14",
    color: "text-blue-500",
    bg: "bg-blue-50",
    position: "top-[20%] left-[5%]",
    delay: 0.8
  },
  {
    icon: Cpu,
    title: "AI Core",
    value: "GPT-4o Ready",
    color: "text-primary",
    bg: "bg-primary/10",
    position: "top-[40%] right-[8%]",
    delay: 1
  },
  {
    icon: Rocket,
    title: "Launch",
    value: "99.9% Uptime",
    color: "text-orange-500",
    bg: "bg-orange-50",
    position: "bottom-[35%] left-[10%]",
    delay: 1.2
  },
  {
    icon: Layout,
    title: "UX/UI",
    value: "Premium Design",
    color: "text-purple-500",
    bg: "bg-purple-50",
    position: "bottom-[20%] right-[15%]",
    delay: 1.4
  }
]

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-44 pb-16 overflow-hidden bg-[#FAFAFA]">
      
      {/* ── BACKGROUND ECOSYSTEM ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Texture Layer */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Grid and Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/10 rounded-full blur-[140px] opacity-20" />
      </div>

      {/* ── FLOATING TRUST ELEMENTS ── */}
      <div className="absolute inset-0 z-0 hidden xl:block pointer-events-none">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: card.delay, 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className={`absolute ${card.position} p-4 bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl flex items-center gap-4`}
          >
            <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center`}>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{card.title}</span>
              <span className="text-xs font-bold text-slate-900">{card.value}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* ── TOP BADGE ── */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">
              Digital Engineering & AI Agency
            </span>
          </motion.div>
        </div>

        {/* ── MAIN CONTENT (CENTERED) ── */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold tracking-tight text-slate-950 leading-[1.02]"
          >
            Construimos la Infraestructura <br />
            <motion.span 
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Tecnológica del Futuro.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-600 leading-relaxed font-medium"
          >
            Fusionamos ingeniería de software de alto rendimiento con inteligencia artificial 
            para crear soluciones digitales que escalan negocios modernos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-slate-950 hover:bg-primary text-white hover:text-black h-16 px-12 text-base font-bold transition-all shadow-2xl hover:shadow-primary/30 group relative overflow-hidden"
            >
              <Link href="/contacto" className="flex items-center relative z-10">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full h-16 px-10 text-base font-bold text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            >
              <Link href="/proyectos">
                Ver Portafolio
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* ── VISUAL PLATFORM (HIGH FIDELITY) ── */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative max-w-6xl mx-auto px-4 lg:px-0"
        >
          {/* Main Display Area */}
          <div className="relative bg-white border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] rounded-[2.5rem] overflow-hidden p-3 lg:p-6">
             <div className="aspect-[16/9] lg:aspect-[21/9] bg-slate-50 rounded-[1.8rem] overflow-hidden relative group">
                <Image 
                   src="/hero-cyber-light.png" 
                   alt="Innova Systems Platform"
                   fill
                   className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-2000"
                   priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                {/* Visual Glass Cards Integration */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                      {[
                        { label: "Frontend", icon: Layout, value: "Pixel Perfect", trend: "+100% UX" },
                        { label: "Backend", icon: Zap, value: "Ultra Fast", trend: "0.2s Latency" },
                        { label: "AI Models", icon: Cpu, value: "Custom GPT", trend: "Autonomous" },
                        { label: "Security", icon: Shield, value: "Enterprise", trend: "Verified" }
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + (i * 0.15) }}
                          className="bg-white/90 backdrop-blur-xl border border-white p-5 rounded-3xl shadow-xl flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between">
                            <card.icon className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{card.trend}</span>
                          </div>
                          <div className="mt-2">
                             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{card.label}</h4>
                             <p className="text-sm font-bold text-slate-900 leading-tight">{card.value}</p>
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Floating Decorative Orbs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
        </motion.div>

      </div>

      {/* ── INTEGRATED SERVICES MARQUEE ── */}
      <div className="mt-24 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
        <ServicesMarquee />
      </div>

    </section>
  )
}
