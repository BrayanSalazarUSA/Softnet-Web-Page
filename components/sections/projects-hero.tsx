"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/site-config"

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 bg-[#050505] border-b border-white/5">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(0, 200, 150, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 150, 0.1) 1px, transparent 1px)`,
               backgroundSize: '80px 80px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-8 shadow-inner">
              <div className="h-2 w-2 bg-primary animate-pulse shadow-[0_0_8px_#00C896]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                PROYECTOS & CASOS
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white font-heading">
              Arquitectura <br />
              validada en <span className="text-primary italic">producción.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-xl leading-relaxed text-slate-400 font-medium"
          >
            Casos donde una buena combinación de ingeniería de software y diseño de producto termina generando resultados medibles. Claridad visual, estructura sólida y rendimiento real.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-900/40 backdrop-blur-md p-10 group hover:bg-primary transition-all duration-500">
                <p className="font-heading text-4xl font-black tracking-tighter text-white group-hover:text-black transition-colors">{stat.value}</p>
                <p className="mt-3 font-mono text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 group-hover:text-black/60 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
