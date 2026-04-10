"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, Braces, Layers3, Play, ShieldCheck, Sparkles } from "lucide-react"
import { SoftnetMotif } from "@/components/brand/softnet-brand"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { stats } from "@/lib/site-config"

const heroSignals = [
  {
    icon: Sparkles,
    title: "Dirección visual",
    description: "Más nivel percibido desde el primer vistazo.",
  },
  {
    icon: Braces,
    title: "Arquitectura real",
    description: "Frontend, backend e integraciones con criterio.",
  },
  {
    icon: Layers3,
    title: "Operación conectada",
    description: "Automatización y orden para crecer sin fricción.",
  },
]

const heroStats = [...stats.slice(0, 3), { value: "24h", label: "Respuesta comercial + técnica" }]

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" })
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    if (!isInView) return

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const target = Number(match[1])
    const suffix = match[2] ?? ""
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)

      setDisplayValue(`${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  return (
    <p ref={ref} className="text-3xl font-extrabold tracking-[-0.06em] text-[#121317]">
      {displayValue}
    </p>
  )
}

export function Hero() {
  return (
    <section id="hero-home" className="section-light relative overflow-hidden pt-30 pb-16 lg:pt-34 lg:pb-18">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[-3rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.08),transparent_74%)] blur-3xl" />
        <div className="hero-topology absolute inset-0 opacity-55" />
        <div className="hero-noise absolute inset-0" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src="/hero-blue.png"
            alt="Softnet Digital showcase"
            fill
            priority
            className="object-cover object-[72%_center] opacity-[0.34] lg:opacity-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(238,242,246,0.98)_0%,rgba(238,242,246,0.9)_20%,rgba(238,242,246,0.54)_48%,rgba(238,242,246,0.18)_68%,rgba(238,242,246,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_16%,rgba(59,130,246,0.06),transparent_24%),radial-gradient(circle_at_26%_76%,rgba(100,116,139,0.08),transparent_22%)]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="js-hero-copy relative max-w-[49rem]">
            <SoftnetMotif className="pointer-events-none absolute left-[22rem] top-14 hidden h-24 w-44 opacity-[0.5] xl:block" />
            <Reveal delay={0.04} className="section-chip code-caption text-[0.72rem] font-semibold text-primary">
              <span className="section-dot" />
              Estudio digital para empresas que quieren verse más serias y vender con más claridad
            </Reveal>

            <Reveal
              delay={0.1}
              className="hero-title-shell mt-8 max-w-[13ch] text-[clamp(3.15rem,7vw,6rem)] font-extrabold leading-[0.94] text-[#121317]"
            >
              <span className="block">Presencia que vende.</span>
              <span className="mt-1 block text-[#24181B]">
                <span className="hero-keyword">
                  Software
                  <span aria-hidden="true" className="hero-keyword-overlay">
                    Software
                  </span>
                </span>{" "}
                que ordena.
              </span>
            </Reveal>

            <Reveal delay={0.16} className="mt-7 max-w-2xl text-lg leading-relaxed text-[#121317]/68 sm:text-xl">
              Diseñamos webs, sistemas internos y automatizaciones con dirección visual, base técnica
              sólida y una experiencia de marca que hace que tu empresa se sienta más seria, más
              ordenada y más valiosa.
            </Reveal>

            <Reveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group sm:w-auto">
                <Link href="/contacto">
                  Solicitar propuesta
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="sm:w-auto">
                <Link href="/proyectos">
                  <Play className="h-4 w-4" />
                  Ver proyectos
                </Link>
              </Button>
            </Reveal>

            <StaggerGroup delayChildren={0.22} stagger={0.09} className="mt-8 flex flex-wrap gap-5">
              <div className="w-full code-caption text-[0.66rem] font-semibold text-[#121317]/34">
                {"<stack />"} ui / backend / automation / integrations
              </div>
              {heroSignals.map((item) => {
                const Icon = item.icon

                return (
                  <StaggerItem key={item.title} className="min-w-[13rem] flex-1 border-l border-black/10 pl-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[0.95rem] border border-black/10 bg-white/74 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="code-caption text-[0.72rem] font-bold text-[#121317]/48">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#121317]/62">{item.description}</p>
                  </StaggerItem>
                )
              })}
            </StaggerGroup>
          </div>

          <Parallax offset={34} scaleFrom={0.985} scaleTo={1.01} className="relative lg:pl-6">
            <div className="absolute inset-0 rounded-[1.2rem] bg-[radial-gradient(circle_at_72%_18%,rgba(59,130,246,0.06),transparent_28%),radial-gradient(circle_at_24%_84%,rgba(100,116,139,0.08),transparent_24%)] blur-3xl" />

            <Reveal
              delay={0.18}
              className="js-hero-visual-shell relative overflow-hidden rounded-[1.2rem] border border-white/52 bg-[rgba(255,255,255,0.46)] p-3 shadow-[0_30px_80px_rgba(17,26,40,0.1)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 fine-grid opacity-[0.08]" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                className="paper-card-soft absolute left-5 top-5 z-20 hidden w-56 rounded-[0.9rem] p-4 lg:block"
              >
                <p className="code-caption text-[0.62rem] font-semibold text-primary/84">
                  Señal de marca
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-[#121317]">
                  Una empresa mejor percibida vende mejor incluso antes de la primera llamada.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
                className="surface-card absolute bottom-5 right-5 z-20 hidden w-[18rem] rounded-[1rem] p-5 text-white lg:block"
              >
                <p className="code-caption text-[0.62rem] font-semibold text-white/42">
                  Resultado esperado
                </p>
                <p className="mt-3 text-base font-semibold leading-snug text-white/92">
                  Más confianza comercial, mejor lectura técnica y una operación con menos fricción.
                </p>
                <Link href="/proyectos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ver casos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                animate={{ x: [0, 7, 0], y: [0, -9, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[16%] top-[14%] hidden h-20 w-20 rounded-full border border-white/42 bg-[radial-gradient(circle_at_32%_30%,rgba(255,255,255,0.92),rgba(191,219,254,0.38)_36%,rgba(59,130,246,0.24)_70%,rgba(16,21,30,0.16)_100%)] shadow-[0_24px_60px_rgba(59,130,246,0.08)] lg:block"
              />

              <div className="absolute right-[10%] top-[19%] hidden h-[14rem] w-[14rem] rounded-full border border-dashed border-primary/14 lg:block animate-orbit-slow" />

              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 0.35, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="js-hero-media relative aspect-[4/4.35] overflow-hidden rounded-[1rem] border border-black/6 bg-[#FCF7F8]"
              >
                <Image
                  src="/hero-blue.png"
                  alt="Softnet Digital showcase"
                  fill
                  priority
                  className="object-cover object-[79%_center]"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(59,130,246,0.06),transparent_26%),radial-gradient(circle_at_22%_78%,rgba(100,116,139,0.08),transparent_24%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,247,248,0.26),rgba(252,247,248,0.06)_58%,transparent)]" />
              </motion.div>
            </Reveal>
          </Parallax>
        </div>

        <Reveal delay={0.32} className="js-hero-metrics mt-8">
          <div className="paper-card-soft overflow-hidden rounded-[1rem] border border-black/8 px-5 py-5 sm:px-6 sm:py-6">
            <StaggerGroup
              delayChildren={0.08}
              stagger={0.06}
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.65, delay: 0.08 + index * 0.08, ease: "easeOut" }}
                >
                  <StaggerItem
                    className={index === 0 ? "border-l border-primary/24 pl-4" : "border-l border-black/8 pl-4"}
                  >
                    <AnimatedStatValue value={stat.value} />
                    <p className="mt-2 text-sm leading-relaxed text-[#121317]/58">{stat.label}</p>
                  </StaggerItem>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
