"use client"

import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: siteConfig.address,
    href: null,
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: null,
  },
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-white border-b border-slate-100">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] cyber-grid grayscale" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1.5 shadow-sm mb-6">
            <div className="h-1.5 w-1.5 bg-primary animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
              CONTACTO
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl text-slate-900">
            Hablemos de un proyecto con <br />
            <span className="text-primary">rigor técnico</span> y <span className="text-slate-400">claridad comercial</span>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 font-medium">
            Si necesitas una web corporativa, un sistema interno, un dashboard o una automatización,
            podemos ayudarte a aterrizarlo con arquitectura validada y sin abstracciones.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const Wrapper = info.href ? "a" : "div"

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Wrapper
                  {...(info.href ? { href: info.href } : {})}
                  className={`block border border-slate-200 bg-white p-6 shadow-sm transition-all ${
                    info.href ? "hover:border-primary/40 hover:bg-slate-50 group" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-50 text-slate-400 mb-4 transition-all group-hover:text-primary group-hover:border-primary/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-2 transition-colors group-hover:text-primary">{info.title}</p>
                  <p className="text-sm font-bold text-slate-900">{info.value}</p>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
