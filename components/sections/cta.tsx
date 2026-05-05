"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { siteConfig } from "@/lib/site-config"

export function CTA() {
  return (
    <section id="cta-home" className="bg-[#050505] relative overflow-hidden py-32 border-t border-white/5">
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
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <Parallax offset={15}>
          <div className="border border-white/5 bg-slate-900/40 backdrop-blur-xl rounded-[4rem] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="relative p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-8 shadow-inner"
              >
                <div className="h-1.5 w-1.5 bg-primary animate-pulse shadow-[0_0_8px_#00C896]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Siguiente Fase
                </span>
              </motion.div>

              <Reveal
                delay={0.02}
                className="text-4xl font-black tracking-tighter md:text-6xl text-white font-heading leading-tight"
              >
                ¿Listo para que tu <br />
                negocio <span className="text-primary italic">crezca?</span>
              </Reveal>

              <Reveal delay={0.08} className="mt-8 max-w-lg text-lg leading-relaxed text-slate-400 font-medium">
                Hablemos de tus objetivos y diseñemos la solución que llevará tu empresa al siguiente nivel. Sin palabras técnicas innecesarias, solo resultados reales.
              </Reveal>

              <Reveal delay={0.16} className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-white hover:bg-primary text-black font-black h-14 px-10 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] hover:shadow-primary/20 transition-all border-none group">
                  <Link href="/contacto" className="flex items-center gap-3">
                    Agendar Llamada
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-black h-14 px-10 backdrop-blur-md">
                  <Link href={`https://wa.me/${siteConfig.phone}`} target="_blank" className="flex items-center gap-3">
                    <Code2 className="h-5 w-5 text-primary" />
                    WhatsApp
                  </Link>
                </Button>
              </Reveal>

              <StaggerGroup delayChildren={0.12} stagger={0.07} className="mt-12 grid gap-6 border-t border-white/5 pt-10 sm:grid-cols-3">
                {[
                  "Cercanía Real",
                  "Enfoque en ROI",
                  "Sin Complicaciones",
                ].map((item) => (
                  <StaggerItem key={item} className="flex flex-col gap-3">
                    <div className="h-1 w-8 bg-primary rounded-full shadow-[0_0_8px_#00C896]" />
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <Reveal delay={0.08} className="relative bg-slate-900/60 p-10 lg:p-20 flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.05),transparent_70%)]" />
              
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-6 relative z-10">
                // Comunicación Directa
              </p>
              <h3 className="text-3xl font-black text-white mb-6 font-heading tracking-tight relative z-10">
                Tu Aliado Estratégico.
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-10 max-w-sm font-medium relative z-10">
                Hablarás directamente con quienes construyen tu solución. Sin intermediarios, sin pérdidas de tiempo.
              </p>

              <StaggerGroup delayChildren={0.1} stagger={0.07} className="space-y-4 relative z-10">
                <StaggerItem>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-between gap-4 border border-white/5 bg-white/5 p-8 rounded-3xl transition-all hover:border-primary/20 hover:bg-white/10 group"
                  >
                    <span className="flex items-center gap-4 text-sm font-black text-white tracking-tight">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      {siteConfig.email}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-primary transition-colors" />
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-between gap-4 border border-white/5 bg-white/5 p-8 rounded-3xl transition-all hover:border-primary/20 hover:bg-white/10 group"
                  >
                    <span className="flex items-center gap-4 text-sm font-black text-white tracking-tight">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      {siteConfig.phone}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-primary transition-colors" />
                  </a>
                </StaggerItem>
              </StaggerGroup>

              <StaggerGroup delayChildren={0.16} stagger={0.07} className="mt-10 grid gap-5 border-t border-white/5 pt-8 relative z-10">
                {[
                  "Propuesta personalizada en 24h.",
                  "Acompañamiento en todo el proceso.",
                  "Garantía de satisfacción y soporte.",
                ].map((item, index) => (
                  <StaggerItem key={item} className="flex items-start gap-4">
                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-primary/60 mt-1">
                      0{index + 1}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-400 font-medium">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
