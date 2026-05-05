"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Smartphone, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnifiedOps() {
  return (
    <section className="py-32 overflow-hidden relative bg-[#050505]">
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
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[160px] opacity-20" />

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Lado Izquierdo: Copy de Venta */}
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase"
            >
              <Zap className="w-4 h-4" />
              Efficiency Engineering
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black text-white leading-[1] tracking-tighter font-heading"
            >
              ¿Muchas herramientas? <br />
              <span className="text-primary italic font-black">Control Total.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed max-w-xl font-medium"
            >
              Elimine la fragmentación de su negocio. Fusionamos Excels, PDFs y procesos aislados en un <strong className="text-white">Centro de Mando Unificado</strong> de alto rendimiento.
            </motion.p>

            {/* Lista de Capacidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: "Dashboards Unificados", desc: "Visualice el pulso de su negocio en tiempo real. Un solo centro de mando." },
                { title: "Omnichannel Alerts", desc: "Notificaciones automáticas vía WhatsApp integradas en el flujo." },
                { title: "AI Data Processing", desc: "Procesamiento inteligente de documentos y generación de bases de datos." },
                { title: "Zero Paperwork", desc: "Digitalización total de procesos críticos. Deje de buscar, empiece a ver datos." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="space-y-3 border-l-2 border-white/10 hover:border-primary pl-6 transition-colors duration-500"
                >
                  <h4 className="font-black text-white text-[10px] tracking-[0.2em] uppercase">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-white text-black font-black text-[10px] uppercase tracking-widest h-14 px-12 shadow-[0_0_30px_rgba(0,200,150,0.2)] transition-all border border-primary group">
                <Link href="/contacto" className="flex items-center gap-3">
                  Centralizar Operación
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Lado Derecho: Visualización Técnica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -top-10 -right-10 w-82 h-72 bg-primary/10 rounded-full blur-[100px] opacity-60"></div>

            <div className="relative border border-white/10 bg-slate-900/40 backdrop-blur-xl p-4 rounded-[3.5rem] shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-primary/20 overflow-hidden">
              <Image
                src="https://images.ui8.net/uploads/shot6_1711380692787.png"
                alt="Unified Dashboard Ecosystem by Softnet"
                width={1200}
                height={1200}
                className="w-full h-auto opacity-70 group-hover:opacity-100 transition-all duration-700 rounded-[2.5rem]"
              />

              <div className="absolute top-10 right-10 flex flex-col gap-3">
                <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-[9px] font-black tracking-widest uppercase border border-white/10 shadow-2xl">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    System: Online
                  </span>
                </div>
              </div>

              {/* Esquinas tipo Blueprint Animadas */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-[3rem]"
              />
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-[3rem]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
