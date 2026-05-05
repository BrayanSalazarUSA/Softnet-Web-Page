"use client"

import { motion } from "framer-motion"
import { Award, Heart, Lightbulb, Rocket, Target, Users2, CheckSquare } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Cada proyecto debe ayudar a vender mejor, ordenar mejor o sostener mejor el crecimiento.",
  },
  {
    icon: Lightbulb,
    title: "Innovación útil",
    description: "Nos gusta lo nuevo cuando suma. No usamos tecnología de moda si no mejora el resultado.",
  },
  {
    icon: Users2,
    title: "Colaboración clara",
    description: "Trabajamos contigo con criterio, dirección y comunicación directa durante todo el proceso.",
  },
  {
    icon: Award,
    title: "Excelencia técnica",
    description: "Código limpio, arquitectura pensada y decisiones que no explotan cuando el proyecto crece.",
  },
  {
    icon: Rocket,
    title: "Agilidad con orden",
    description: "Avanzamos rápido, pero sin improvisar ni perder claridad en el alcance.",
  },
  {
    icon: Heart,
    title: "Cuidado por el detalle",
    description: "La diferencia entre verse serio o verse genérico suele estar en los detalles bien resueltos.",
  },
]

export function AboutValues() {
  return (
    <section id="valores" className="bg-[#F8FAFC] py-32 relative overflow-hidden border-b border-slate-200/50">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#050505 1px, transparent 1px), linear-gradient(90deg, #050505 1px, transparent 1px)`,
               backgroundSize: '120px 120px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-20 border-l-4 border-primary pl-10">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">
            // PRINCIPIOS DE INGENIERÍA
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-950 font-heading leading-tight max-w-4xl">
            Construimos software que{" "}
            <span className="text-primary italic">se sostiene en producción.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-slate-500 font-medium text-lg leading-relaxed">
            Nuestro estándar mezcla criterio visual, base técnica y ejecución responsable. La meta no es sorprender cinco minutos, sino construir una arquitectura que dure.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 bg-white lg:col-span-4 p-10 rounded-[3rem] shadow-2xl h-fit relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 relative z-10">
              // NUESTRA POSTURA
            </p>
            <h3 className="text-2xl font-black tracking-tight text-slate-950 mb-8 relative z-10 font-heading">
              El diseño importa. La arquitectura también. Uno sin el otro no basta.
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                "Diseñamos para conversión y claridad.",
                "Desarrollamos pensando en escalabilidad.",
                "Comunicación directa, sin abstracciones.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:bg-primary/5 transition-colors group"
                >
                  <CheckSquare className="mt-1 h-4 w-4 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-slate-600 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 h-fit">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 p-8 rounded-[2.5rem] group hover:border-primary/40 hover:shadow-xl transition-all"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 border border-transparent transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] font-black text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-primary transition-colors font-heading tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
