"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  AppWindow,
  ArrowRight,
  Building2,
  CheckCircle,
  Cloud,
  Database,
  LayoutDashboard,
  Server,
  ShoppingCart,
  Target,
  Workflow,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/site-config"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Building2,
  Target,
  ShoppingCart,
  AppWindow,
  Workflow,
  LayoutDashboard,
  Server,
  Wrench,
  Database,
  Cloud,
}

export function ServicesList() {
  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2
            const isFeatured = index % 3 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="scroll-mt-32"
              >
                <div
                  className={`group h-full rounded-[2rem] p-6 lg:p-7 ${
                    isFeatured ? "surface-card text-white" : "paper-card text-[#111318]"
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${
                        isFeatured ? "border border-white/10 bg-white/[0.06]" : "neon-icon-box"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${isFeatured ? "text-primary" : "text-primary"}`} />
                    </div>
                    <span
                      className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
                        isFeatured ? "text-white/34" : "text-[#111318]/26"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="max-w-xl">
                    <p
                      className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
                        isFeatured ? "text-primary/90" : "text-primary/72"
                      }`}
                    >
                      Servicio
                    </p>
                    <h2
                      className={`mt-3 text-3xl font-extrabold tracking-[-0.04em] ${
                        isFeatured ? "text-white" : "text-[#111318]"
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`mt-4 text-base leading-relaxed ${
                        isFeatured ? "text-white/66" : "text-[#111318]/62"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className={`flex items-start gap-3 rounded-[1.15rem] px-4 py-4 ${
                          isFeatured
                            ? "border border-white/10 bg-white/[0.05]"
                            : "paper-card-soft"
                        }`}
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span
                          className={`text-sm leading-relaxed ${
                            isFeatured ? "text-white/80" : "text-[#111318]/66"
                          }`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      asChild
                      variant={isFeatured ? "outline" : "default"}
                      size="lg"
                      className={
                        isFeatured
                          ? "border-white/14 bg-white text-[#111318] hover:border-white/20 hover:bg-[#FFF4E9]"
                          : ""
                      }
                    >
                      <Link href="/contacto">
                        Solicitar propuesta
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <p className={`text-sm ${isFeatured ? "text-white/50" : "text-[#111318]/48"}`}>
                      Diseñado para verse bien, operar bien y escalar mejor.
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
