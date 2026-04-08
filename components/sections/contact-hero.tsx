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
    <section className="section-dark relative overflow-hidden pt-32 pb-20 text-white">
      <div className="soft-grid absolute inset-0 opacity-10" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="section-chip text-sm font-medium uppercase tracking-[0.22em] text-primary">
            <span className="section-dot" />
            Contacto
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Hablemos de un proyecto que se vea mejor, funcione mejor y transmita{" "}
            <span className="text-brand-gradient">más confianza</span>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/66 md:text-xl">
            Si necesitas una web corporativa, un sistema interno, un dashboard o una automatización,
            podemos ayudarte a aterrizarlo con claridad comercial y técnica.
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
                  className={`paper-card block rounded-[1.6rem] p-5 text-[#111318] ${
                    info.href ? "transition-all duration-300 hover:-translate-y-1 hover:border-primary/28" : ""
                  }`}
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-sm text-[#111318]/52">{info.title}</p>
                  <p className="mt-1 text-lg font-semibold text-[#111318]">{info.value}</p>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
