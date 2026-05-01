"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Zap, Activity, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/)
    if (!match) { setDisplay(value); return }
    const target = Number(match[1])
    const suffix = match[2] ?? ""
    const duration = 2000
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(`${Math.round(target * eased)}${suffix}`)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [value])

  return <span ref={ref}>{display}</span>
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white flex items-center border-b border-slate-100">
      
      {/* ── BACKGROUND VISUAL ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-[75%] h-full">
          <Image 
            src="/hero_ecosystem.png" 
            alt="SOFTNET Digital Ecosystem"
            fill
            className="object-cover lg:object-contain object-right opacity-80 lg:opacity-100 transition-opacity duration-1000"
            priority
          />
          {/* Gradient Mask - Smoother transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-white lg:via-white/50 lg:to-transparent z-10" />
        </div>

        {/* Engineering Grid Layer */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center min-h-[100svh]">

          {/* LEFT: Copy content - Centered balance */}
          <div className="w-full lg:w-3/5 py-32 lg:py-0 space-y-12">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 shadow-2xl"
            >
              <Cpu className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em]">
                System Architecture 2.0
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(3rem,5.5vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-slate-900"
              >
                Diseñamos el <br />
                <span className="relative inline-block">
                  <span className="text-red-600 relative z-10">Futuro Digital</span>
                  {/* Animated Shimmer Line */}
                  <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 skew-x-12"
                  />
                  {/* Subtle Glow beneath */}
                  <div className="absolute inset-0 bg-red-500/10 blur-xl -z-10" />
                </span> <br />
                de su Empresa.
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 font-mono text-[10px] text-slate-400 uppercase tracking-widest"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600" />
                  <span>Web Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-200" />
                  <span>AI Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-200" />
                  <span>BI Dashboards</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl text-lg leading-relaxed text-slate-600 font-medium border-l-4 border-slate-100 pl-6"
            >
              Fusionamos ingeniería de software de alto rendimiento con inteligencia artificial 
              para crear infraestructuras que automatizan su éxito operativo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-none bg-red-600 hover:bg-slate-900 text-white border-none font-bold text-xs uppercase tracking-[0.2em] h-16 px-12 shadow-[0_20px_40px_-10px_rgba(225,29,72,0.3)] transition-all group"
              >
                <Link href="/contacto" className="flex items-center">
                  INICIAR PROYECTO
                  <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-2 border-slate-900 bg-transparent hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs uppercase tracking-[0.2em] h-16 px-12 transition-all"
              >
                <Link href="/proyectos">
                  ARQUITECTURAS
                </Link>
              </Button>
            </motion.div>

            {/* Technical HUD Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-12 pt-12 border-t border-slate-100"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-red-600 font-mono">
                  <Activity className="w-3 h-3" />
                  <span className="text-xl font-bold text-slate-900"><AnimatedCounter value="99.9%" /></span>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Reliability</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-red-600 font-mono">
                  <Zap className="w-3 h-3" />
                  <span className="text-xl font-bold text-slate-900"><AnimatedCounter value="12ms" /></span>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Latency</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-red-600 font-mono">
                  <Bot className="w-3 h-3" />
                  <span className="text-xl font-bold text-slate-900"><AnimatedCounter value="100%" /></span>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">AI Logic</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual Space Balance */}
          <div className="hidden lg:block lg:w-2/5 h-full relative" />

        </div>
      </div>
    </section>
  )
}
