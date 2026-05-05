"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PenTool, Hammer, Rocket, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { CyberOrb } from "@/components/ui/cyber-orb"

const projectCards = [
  {
    title: "AI Nexus Dashboard",
    category: "Inteligencia Artificial",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    stats: "99.9% Accuracy",
    color: "#D9FF66"
  },
  {
    title: "Quantum Cloud",
    category: "Infraestructura",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    stats: "Edge Optimized",
    color: "#66E0FF"
  },
  {
    title: "Elite Real Estate",
    category: "Web Premium",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    stats: "+45% Conversion",
    color: "#FFD966"
  },
  {
    title: "Softnet CRM",
    category: "Software B2B",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    stats: "Internal Ops",
    color: "#D9FF66"
  },
  {
    title: "Fintech Core UI",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    stats: "Secure Ledger",
    color: "#66E0FF"
  }
]

export function HeroSoftnetV2() {
  const { x, y } = useMousePosition()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* ── BACKGROUND ECOSYSTEM ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.1] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '80px 80px'
             }} 
        />
        
        {/* Glows with Mouse Interaction */}
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full blur-[180px] opacity-10"
          animate={{
            x: x * 0.02,
            y: y * 0.02,
          }}
        />
        <motion.div 
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-secondary rounded-full blur-[180px] opacity-10"
          animate={{
            x: x * -0.02,
            y: y * -0.02,
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        
        {/* ── 3D ELEMENT CONTAINER ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full max-w-[1000px] aspect-square pointer-events-none opacity-40 lg:opacity-60">
          <CyberOrb />
        </div>

        {/* ── FLOATING ICONS CAPSULE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-8"
        >
          <div className="flex -space-x-2">
            {[PenTool, Hammer, Rocket].map((Icon, i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center shadow-lg"
                style={{ 
                  color: i === 0 ? 'var(--primary)' : i === 1 ? 'var(--secondary)' : 'var(--accent)',
                  zIndex: 3 - i 
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── MAIN HEADING ── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tight text-white mb-8 max-w-6xl font-heading leading-[0.9]"
        >
          Design, Build & <br className="hidden md:block" />
          <span className="text-white/10">Deploy</span>
        </motion.h1>

        {/* ── DESCRIPTION ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium"
        >
          From crafting stunning designs to building robust software and deploying it 
          seamlessly, we're here to help your business shine.
        </motion.p>

        {/* ── ACTION BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-white text-black h-16 px-12 text-xs uppercase tracking-widest font-black transition-all shadow-[0_0_30px_rgba(0,209,255,0.2)]"
          >
            <Link href="/contacto">
              Contact Us
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full bg-transparent border-white/10 hover:bg-white/5 text-white h-16 px-12 text-xs uppercase tracking-widest font-black transition-all"
          >
            <Link href="/servicios">
              Explore Our Services
            </Link>
          </Button>
        </motion.div>

        {/* ── PROJECT SHOWCASE CAROUSEL ── */}
        <div className="w-full relative overflow-hidden group">
          <div className="flex gap-8 animate-marquee pause-on-hover">
            {[...projectCards, ...projectCards].map((project, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden group/card transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale group-hover/card:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: project.color === '#D9FF66' ? 'var(--primary)' : project.color === '#66E0FF' ? 'var(--secondary)' : 'var(--accent)' }}>
                      {project.category}
                    </span>
                    <h4 className="text-xl font-black text-white font-heading">{project.title}</h4>
                  </div>
                </div>
                
                <div className="p-6 flex items-center justify-between border-t border-white/5 bg-black/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.stats}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:bg-primary group-hover/card:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>

    <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
