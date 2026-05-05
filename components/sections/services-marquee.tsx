"use client"

import { motion } from "framer-motion"
import { Globe, Cpu, Database, Cloud, ShoppingBag, ShieldCheck, Zap } from "lucide-react"

const servicesList = [
  { name: "Desarrollo Web", icon: Globe },
  { name: "Automatización IA", icon: Cpu },
  { name: "Software a Medida", icon: Database },
  { name: "Sistemas Cloud", icon: Cloud },
  { name: "E-commerce Pro", icon: ShoppingBag },
  { name: "Ciberseguridad", icon: ShieldCheck },
  { name: "Arquitectura Tech", icon: Zap },
]

import { cn } from "@/lib/utils"

export function ServicesMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 border-b border-border bg-background">
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
      
      <div className="flex select-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex flex-none items-center gap-12 pr-12"
        >
          {/* First set */}
          {servicesList.map((service, index) => (
            <div key={`s1-${index}`} className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-slate-50 group-hover:border-primary group-hover:bg-primary/5 transition-colors rounded-xl">
                <service.icon className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight uppercase text-slate-900 group-hover:text-primary transition-colors">
                {service.name}
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-primary/20 mx-4" />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {servicesList.map((service, index) => (
            <div key={`s2-${index}`} className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-slate-50 group-hover:border-primary group-hover:bg-primary/5 transition-colors rounded-xl">
                <service.icon className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight uppercase text-slate-900 group-hover:text-primary transition-colors">
                {service.name}
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-primary/20 mx-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
