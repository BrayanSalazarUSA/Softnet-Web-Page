"use client"

import { ShieldCheck, Lightbulb, Users2, Target } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Users2,
    title: "Cercanía Real",
    description: "No somos un número de soporte. Hablas directamente con quienes construyen tu solución, en tu idioma y sin tecnicismos.",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada línea de código y cada automatización tiene un objetivo claro: generar un retorno de inversión (ROI) para tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones a Medida",
    description: "No usamos plantillas genéricas. Analizamos tu flujo de trabajo único y construimos herramientas que se adaptan a ti, no al revés.",
  },
  {
    icon: ShieldCheck,
    title: "Acompañamiento",
    description: "Estamos contigo desde el diagnóstico inicial hasta el crecimiento a largo plazo. Tu éxito técnico es nuestra responsabilidad.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-32 bg-[#F8FAFC] border-b border-slate-200/50 overflow-hidden relative">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(#050505 1px, transparent 1px), linear-gradient(90deg, #050505 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-slate-950/5 border border-slate-950/10 px-5 py-2 rounded-full mb-10"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Diferenciación & ROI
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-950 md:text-5xl font-heading leading-tight mb-10 max-w-4xl"
          >
            Más que una agencia, <br />
            <span className="text-primary italic">somos tu aliado estratégico.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed text-slate-500 max-w-2xl font-medium"
          >
            Entendemos que no buscas "tecnología por tecnología". Buscas vender más, ahorrar tiempo y tener el control total de tu operación.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-10 bg-white border border-slate-200 rounded-[3rem] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="mb-8 flex h-16 w-16 items-center justify-center bg-slate-50 text-slate-400 group-hover:text-black group-hover:bg-primary transition-all duration-500 shadow-sm border border-slate-100 rounded-[1.5rem] relative z-10">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4 font-heading tracking-tight relative z-10">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium group-hover:text-slate-700 transition-colors relative z-10">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
