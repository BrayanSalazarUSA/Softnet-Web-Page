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
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

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
                  className={`group h-full p-8 border shadow-sm flex flex-col ${
                    isFeatured 
                      ? "bg-slate-900 border-slate-800 text-white" 
                      : "bg-white border-slate-200 text-slate-900"
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border ${
                        isFeatured 
                          ? "border-slate-700 bg-slate-800 text-slate-300 group-hover:text-red-500" 
                          : "border-slate-200 bg-slate-50 text-slate-500 group-hover:text-red-600"
                      } transition-colors`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`font-mono text-xs font-bold ${
                        isFeatured ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p
                      className={`font-mono text-[0.65rem] font-bold uppercase tracking-widest mb-2 ${
                        isFeatured ? "text-red-500" : "text-red-600"
                      }`}
                    >
                      Servicio Técnico
                    </p>
                    <h2
                      className={`text-2xl font-bold tracking-[-0.02em] ${
                        isFeatured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isFeatured ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className={`flex items-start gap-3 p-4 ${
                          isFeatured
                            ? "bg-slate-800"
                            : "bg-white"
                        }`}
                      >
                        <CheckSquare className={`mt-px h-4 w-4 flex-shrink-0 ${isFeatured ? "text-red-500" : "text-red-600"}`} />
                        <span
                          className={`text-xs leading-relaxed font-medium ${
                            isFeatured ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      asChild
                      variant={isFeatured ? "default" : "outline"}
                      className={
                        isFeatured
                          ? "rounded-none bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-wider text-xs"
                          : "rounded-none border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-mono uppercase tracking-wider text-xs"
                      }
                    >
                      <Link href="/contacto">
                        Solicitar propuesta
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <p className={`font-mono text-[0.6rem] uppercase tracking-widest ${isFeatured ? "text-slate-500" : "text-slate-400"}`}>
                      Arquitectura validada
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
