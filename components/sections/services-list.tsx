"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  AppWindow,
  ArrowRight,
  CheckSquare,
  Cloud,
  Database,
  LayoutDashboard,
  Server,
  Code2,
  Cpu,
  Workflow,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/site-config"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2: Server,
  Target: Cpu,
  ShoppingCart: Code2,
  AppWindow: AppWindow,
  Workflow: Workflow,
  LayoutDashboard: LayoutDashboard,
  Server: Server,
  Wrench: Wrench,
  Database: Database,
  Cloud: Cloud,
}

export function ServicesList() {
  return (
    <section className="bg-background py-24 relative overflow-hidden border-t border-white/5">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.15] cyber-grid" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Server
            const isFeatured = index % 3 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="scroll-mt-32 h-full"
              >
                <div
                  className={`group h-full p-8 border transition-all duration-500 flex flex-col ${
                    isFeatured 
                      ? "bg-black border-primary/30 shadow-[0_0_30px_rgba(0,255,65,0.1)]" 
                      : "bg-slate-900/50 border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                  } backdrop-blur-sm`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border ${
                        isFeatured 
                          ? "border-primary/40 bg-primary/10 text-primary" 
                          : "border-white/10 bg-slate-800 text-slate-400 group-hover:text-primary"
                      } transition-colors`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isFeatured ? "text-primary/40" : "text-slate-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p
                      className={`font-mono text-[0.65rem] font-bold uppercase tracking-widest mb-2 ${
                        isFeatured ? "text-primary" : "text-primary/80"
                      }`}
                    >
                      Architecture & AI
                    </p>
                    <h2
                      className={`text-2xl font-bold tracking-[-0.02em] ${
                        isFeatured ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isFeatured ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-px bg-white/5 border border-white/10 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className={`flex items-start gap-3 p-4 bg-black/40 hover:bg-white/5 transition-colors`}
                      >
                        <CheckSquare className={`mt-px h-4 w-4 flex-shrink-0 text-primary`} />
                        <span
                          className={`text-xs leading-relaxed font-medium text-slate-400`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      asChild
                      variant={isFeatured ? "default" : "outline"}
                      className={
                        isFeatured
                          ? "rounded-none bg-primary hover:bg-white text-black font-mono uppercase tracking-wider text-xs font-bold"
                          : "rounded-none border-white/20 bg-transparent hover:bg-primary hover:text-black text-white font-mono uppercase tracking-wider text-xs"
                      }
                    >
                      <Link href="/contacto">
                        Solicitar propuesta
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <p className={`font-mono text-[0.6rem] uppercase tracking-widest text-slate-600`}>
                      Enterprise Ready
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
