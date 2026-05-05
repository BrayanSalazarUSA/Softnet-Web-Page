"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Code2, Cpu, Globe, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSoftnetV3() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deepest Layer: Animated Grid */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 200, 150, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 150, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
          }}
        />
        
        {/* Tech Dots Overlay */}
        <div className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 200, 150, 0.3) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Floating Glowing Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" 
        />

        {/* Scanline Effect */}
        <div className="absolute inset-0 scanline pointer-events-none opacity-20" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Elite Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Engineering-First Agency
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95] font-heading"
              >
                Precision <br />
                <span className="text-primary italic">Software</span> <br />
                Architecture.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
              >
                Transformamos ideas complejas en ecosistemas digitales de alto rendimiento. 
                Ingeniería de software, IA y automatización para empresas que no aceptan menos que la excelencia.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-black h-14 px-10 text-sm font-black transition-all shadow-[0_0_30px_rgba(0,200,150,0.3)] group">
                <Link href="/contacto" className="flex items-center gap-2">
                  Empezar Proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 text-white h-14 px-10 text-sm font-bold border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                <Link href="/servicios">
                  Ver Capacidades
                </Link>
              </Button>
            </motion.div>

            {/* Metrics Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-12 pt-8 border-t border-white/5"
            >
              <div className="space-y-1">
                <p className="text-2xl font-black text-white font-heading tracking-tight">50+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Proyectos Listos</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-white font-heading tracking-tight">99.9%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Uptime Asegurado</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-white font-heading tracking-tight">24/7</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Soporte Tech</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Bento/Dashboard Mockup (The "Engine") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[600px]"
          >
            {/* AI Investigator Card */}
            <div className="col-span-6 row-span-4 bg-slate-900/40 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base tracking-tight">AI Investigator v2.4</h4>
                      <p className="text-primary/60 text-[10px] uppercase font-black tracking-[0.2em]">Forensic Scan Active</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                    NVR Linked
                  </div>
                </div>

                {/* Simulated AI Search Flow */}
                <div className="space-y-4">
                   <div className="h-32 w-full bg-black/40 rounded-2xl border border-white/5 p-6 font-mono text-xs text-primary/70 overflow-hidden relative">
                      <div className="animate-pulse space-y-2">
                        <p>{">"} initializing_nvr_handshake...</p>
                        <p>{">"} extracting_evidence_metadata...</p>
                        <p>{">"} target_search: person_id_8829</p>
                        <p className="text-white">{">"} status: report_generated_and_sent</p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
                        <motion.div 
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="h-full bg-primary shadow-[0_0_10px_#00C896]"
                        />
                      </div>
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Search Time", val: "1.4s" },
                        { label: "Confidence", val: "99.8%" },
                        { label: "Data Source", val: "Python" }
                      ].map((m, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3">
                          <p className="text-[8px] text-slate-500 uppercase font-black mb-1">{m.label}</p>
                          <p className="text-sm font-bold text-white">{m.val}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Innova Access AI Card */}
            <div className="col-span-3 row-span-2 bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Innova Access AI</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">Gestión de accesos mediante biometría y reconocimiento facial.</p>
              </div>
            </div>

            {/* LeadGen AI Hub */}
            <div className="col-span-3 row-span-2 bg-primary/5 backdrop-blur-xl p-6 rounded-[2rem] border border-primary/10 flex flex-col justify-between group hover:bg-primary/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">LeadGen AI Hub</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">Automatización de ventas vía WhatsApp y AI conversacional.</p>
              </div>
            </div>

            {/* Floating Status Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-slate-900 border border-white/10 shadow-2xl p-4 rounded-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,200,150,0.4)]">
                <CheckCircle2 className="w-7 h-7 text-black" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enterprise Ready</p>
                <p className="text-sm font-black text-white">Security Verified</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

