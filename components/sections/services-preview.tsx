"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import {
  AppWindow,
  ArrowRight,
  Server,
  LayoutDashboard,
  Cpu,
  Code2,
  Workflow,
  TerminalSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { services } from "@/lib/site-config"

// We map icons to technical equivalents
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2: Server,
  Target: Cpu,
  ShoppingCart: Code2,
  AppWindow: AppWindow,
  Workflow: Workflow,
  LayoutDashboard: LayoutDashboard,
}

export function ServicesPreview() {
  const featuredServices = services.slice(0, 4)

  return (
    <section id="servicios-home" className="relative overflow-hidden bg-slate-50 py-28 border-b border-slate-200">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Strict Header */}
        <div className="mb-16 border-l-2 border-red-600 pl-6">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
            // CAPACIDADES CORE
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-slate-900">
            Ingeniería & <span className="text-slate-400">Desarrollo</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 font-medium">
            Desplegamos equipos técnicos para resolver problemas de infraestructura, escalar productos y automatizar operaciones. Sin abstracciones innecesarias.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Main Info Box */}
          <Parallax offset={15}>
            <Reveal className="h-full border border-slate-200 bg-white p-8 lg:p-10 flex flex-col justify-between shadow-sm">
              <div>
                <TerminalSquare className="w-8 h-8 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Metodología de Grado Empresarial.
                </h3>
                <p className="text-slate-600 mb-8">
                  Nuestra arquitectura se basa en principios de alta disponibilidad, seguridad y código limpio. Construimos sobre stacks probados en producción.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-200">
                  {[
                    ["Performance", "Sistemas optimizados para baja latencia."],
                    ["Escalabilidad", "Arquitectura cloud-native y microservicios."],
                    ["Seguridad", "Prácticas DevSecOps desde el día 1."],
                    ["Mantenibilidad", "Clean code y documentación técnica estricta."],
                  ].map(([label, copy]) => (
                    <div key={label} className="bg-white p-4">
                      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-600 mb-2">
                        {label}
                      </p>
                      <p className="text-xs text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <Button asChild variant="outline" className="rounded-none border-slate-300 bg-transparent text-slate-900 font-mono uppercase tracking-wider text-xs h-12 w-full hover:bg-slate-50">
                  <Link href="/servicios">
                    Ver Stack Tecnológico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </Parallax>

          {/* Service Cards Matrix */}
          <StaggerGroup stagger={0.1} className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 shadow-sm">
            {featuredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Cpu

              return (
                <StaggerItem key={service.id} className="bg-white group relative overflow-hidden">
                  <Link
                    href={`/servicios#${service.id}`}
                    className="block h-full p-8 transition-all duration-500 hover:bg-slate-50 relative z-10"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/[0.02] transition-colors duration-500 pointer-events-none" />
                    
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center justify-center border border-slate-200 bg-white p-3 text-slate-400 group-hover:text-red-600 group-hover:border-red-600/30 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.2)] transition-all duration-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-slate-400 font-bold group-hover:text-red-600 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:translate-x-1 transition-transform duration-500 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 group-hover:text-slate-900 transition-colors">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <span
                          key={benefit}
                          className="border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-slate-500 group-hover:border-red-200 group-hover:text-red-600 transition-all"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Technical Reveal Line on Hover */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
