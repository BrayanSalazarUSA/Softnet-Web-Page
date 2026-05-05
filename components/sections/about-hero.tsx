"use client"

import { motion } from "framer-motion"
import { siteConfig, stats } from "@/lib/site-config"
import { Terminal, GitBranch } from "lucide-react"

export function AboutHero() {
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
        
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-8 shadow-inner">
              <div className="h-2 w-2 bg-primary animate-pulse shadow-[0_0_8px_#00C896]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                NOSOTROS
              </span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white font-heading mb-10">
              Ingeniería de <br />
              software con <span className="text-primary italic">criterio.</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-slate-400 font-medium mb-12">
              No solo escribimos líneas de código. Diseñamos arquitectura escalable, código limpio y sistemas robustos para empresas que dependen críticamente de la tecnología.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-900/40 backdrop-blur-md p-10 group hover:bg-primary transition-all duration-500">
                  <p className="text-4xl font-black tracking-tighter text-white group-hover:text-black transition-colors font-heading">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-black/60 mt-3 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Softnet Engineering Team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Floating Status Card */}
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl z-20 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-wider">Metodología Elite</h4>
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Active Stack</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Arquitectura Cloud-Native", "Ciberseguridad Avanzada", "CI/CD Automático"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <GitBranch className="h-3 w-3 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
