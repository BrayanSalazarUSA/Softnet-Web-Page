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
    <section className="relative overflow-hidden pt-32 pb-20 bg-white border-b border-slate-200">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 shadow-sm mb-6">
            <div className="h-1.5 w-1.5 bg-red-600 animate-pulse" />
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
              CONTACTO
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-6xl text-slate-900">
            Hablemos de un proyecto con <br />
            <span className="text-slate-400">rigor técnico</span> y <span className="text-red-600">claridad comercial</span>.
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
                  className={`block border border-slate-200 bg-slate-50 p-6 ${
                    info.href ? "transition-colors hover:border-red-300 hover:bg-white group" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-400 mb-4 transition-colors group-hover:text-red-600 group-hover:border-red-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 mb-2">{info.title}</p>
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
