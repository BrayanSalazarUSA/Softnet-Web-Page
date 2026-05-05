"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Zap, Database, Shield, Cpu, Smartphone, Mail, Slack, 
  Calendar, Inbox, Table, Workflow, Terminal, Share2,
  ArrowRight, TrendingUp, Clock, Coins, CheckCircle2,
  Activity, Repeat, MessageCircle, Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"

const tools = [
  { icon: Smartphone, name: "WhatsApp", color: "#25D366" },
  { icon: Mail, name: "Gmail", color: "#EA4335" },
  { icon: Slack, name: "Slack", color: "#4A154B" },
  { icon: Database, name: "Salesforce", color: "#00A1E0" },
  { icon: Share2, name: "Zapier", color: "#FF4F00" },
  { icon: Table, name: "Excel", color: "#217346" },
  { icon: Workflow, name: "Make", color: "#EA1E63" },
  { icon: Terminal, name: "Webhooks", color: "#475569" },
  { icon: Calendar, name: "Google Cal", color: "#4285F4" },
  { icon: Inbox, name: "Outlook", color: "#0078D4" },
]

export function AutomationsFlow() {
  return (
    <section className="py-24 overflow-hidden relative bg-white border-t border-slate-100">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#050505 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* ── TOP CAROUSEL ── */}
      <div className="relative mb-20 overflow-hidden py-6 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
        <div className="flex w-[200%] animate-scroll-left items-center">
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 px-12 group">
              <div 
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                style={{ color: tool.color }}
              >
                <tool.icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* ── MIDDLE CONTENT ── */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full"
            >
              <Zap className="w-4 h-4 text-primary fill-primary/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Inteligencia Operativa</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter font-heading"
            >
              Automatice su negocio. <br />
              <span className="text-primary italic">Multiplique su tiempo.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 leading-relaxed font-medium"
            >
              No deje que las tareas repetitivas frenen su crecimiento. Conectamos sus herramientas para crear flujos de trabajo autónomos que trabajan mientras usted escala.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { 
                title: "Ventas 24/7", 
                desc: "Cierre leads y califique prospectos de forma automática vía WhatsApp y Email.",
                icon: TrendingUp 
              },
              { 
                title: "Sincronización Real", 
                desc: "Mantenga su CRM, hojas de cálculo y bases de datos unificadas sin intervención humana.",
                icon: Repeat 
              },
              { 
                title: "Reducción de Costos", 
                desc: "Elimine errores operativos y reduzca drásticamente los tiempos de respuesta al cliente.",
                icon: Coins 
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-950 mb-3">{benefit.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="rounded-full bg-slate-950 hover:bg-primary text-white hover:text-black font-black text-[12px] uppercase tracking-[0.2em] h-16 px-16 shadow-2xl transition-all group">
              <Link href="/contacto" className="flex items-center gap-3">
                Agendar Consultoría de Automatización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM CAROUSEL ── */}
      <div className="relative mt-20 overflow-hidden py-6 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
        <div className="flex w-[200%] animate-scroll-right items-center">
          {[...tools.reverse(), ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 px-12 group">
              <div 
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                style={{ color: tool.color }}
              >
                <tool.icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 45s linear infinite; }
        .animate-scroll-right { animation: scroll-right 45s linear infinite; }
      `}</style>
    </section>
  )
}
