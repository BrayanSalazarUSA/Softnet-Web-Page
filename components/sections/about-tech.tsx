"use client"

import { motion } from "framer-motion"
import { Braces, Cloud, CreditCard, Database, MonitorSmartphone, ServerCog, CheckSquare, TerminalSquare } from "lucide-react"
import { techStack } from "@/lib/site-config"

const categoryMeta = {
  Frontend: {
    icon: MonitorSmartphone,
    description: "Interfaces rápidas, limpias y alineadas con marca y conversión.",
  },
  Backend: {
    icon: ServerCog,
    description: "Lógica sólida, APIs mantenibles e integraciones pensadas para durar.",
  },
  Database: {
    icon: Database,
    description: "Datos bien estructurados, consultas claras y una base más estable.",
  },
  Cloud: {
    icon: Cloud,
    description: "Despliegue confiable, control de infraestructura y capacidad para escalar.",
  },
  Payments: {
    icon: CreditCard,
    description: "Cobros e integraciones que no rompen la experiencia del usuario.",
  },
} as const

export function AboutTech() {
  const categories = [...new Set(techStack.map((item) => item.category))]

  return (
    <section id="stack" className="relative overflow-hidden bg-[#050505] py-32 border-b border-white/5">
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
        
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-20 border-l-4 border-primary pl-10">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">
            // STACK TECNOLÓGICO
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-white font-heading leading-tight max-w-4xl">
            Tecnología elegida con <br />
            <span className="text-primary italic">criterio práctico.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-slate-400 font-medium text-lg leading-relaxed">
            Elegimos herramientas que nos permitan diseñar mejor, desarrollar con orden, desplegar con confianza e integrar la solución al contexto real del negocio.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden h-fit">
              <div className="absolute top-0 right-0 p-10 opacity-[0.05]">
                <TerminalSquare className="h-40 w-40 text-primary" />
              </div>

              <div className="relative z-10">
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-6">
                  // ARQUITECTURA APLICADA
                </p>
                <h3 className="text-3xl font-black text-white mb-10 font-heading tracking-tight">
                  Sistemas End-to-End de Alto Nivel.
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Una sola visión técnica global.",
                    "Integraciones con sistemas legacy.",
                    "Base preparada para crecer.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                      <CheckSquare className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {categories.map((category) => {
              const Icon = categoryMeta[category as keyof typeof categoryMeta]?.icon ?? Braces
              const description = categoryMeta[category as keyof typeof categoryMeta]?.description

              return (
                <div
                  key={category}
                  className={`bg-white/5 border border-white/5 p-8 rounded-[2.5rem] group hover:bg-white/10 transition-all hover:border-primary/20 ${
                    category === "Frontend" ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-3 group-hover:translate-x-1 transition-transform">
                        {category}
                      </p>
                      <p className="max-w-sm text-xs leading-relaxed text-slate-400 font-medium">
                        {description}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-slate-500 group-hover:text-primary group-hover:border-primary/20 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {techStack
                      .filter((item) => item.category === category)
                      .map((tech) => (
                        <span
                          key={tech.name}
                          className="bg-white/5 border border-white/5 px-4 py-2 rounded-xl font-mono text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors"
                        >
                          {tech.name}
                        </span>
                      ))}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
