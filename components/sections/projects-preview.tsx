"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const showcaseThemes = [
  {
    background:
      "bg-[linear-gradient(135deg,rgba(255,122,26,0.18),rgba(255,255,255,0.03)_42%,rgba(255,255,255,0.02))]",
    panel:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]",
    glow: "bg-[radial-gradient(circle,rgba(255,122,26,0.22),transparent_70%)]",
  },
  {
    background:
      "bg-[linear-gradient(135deg,rgba(255,166,107,0.16),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.04))]",
    panel:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]",
    glow: "bg-[radial-gradient(circle,rgba(255,215,181,0.18),transparent_72%)]",
  },
  {
    background:
      "bg-[linear-gradient(135deg,rgba(255,122,26,0.12),rgba(255,255,255,0.03)_40%,rgba(255,255,255,0.08))]",
    panel:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]",
    glow: "bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_70%)]",
  },
]

function ProjectCanvas({
  result,
  title,
  technologies,
  themeIndex,
}: {
  result: string
  title: string
  technologies: string[]
  themeIndex: number
}) {
  const theme = showcaseThemes[themeIndex % showcaseThemes.length]

  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1013] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.26)]">
      <div className={cn("absolute inset-0", theme.background)} />
      <div className={cn("absolute left-10 top-10 h-40 w-40 rounded-full blur-3xl", theme.glow)} />
      <div className="soft-grid absolute inset-0 opacity-[0.1]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/54">
            Caso destacado
          </p>
          <div className="flex items-center gap-2">
            {["bg-white/30", "bg-primary", "bg-white/18"].map((style) => (
              <span key={style} className={cn("h-2 w-2 rounded-full", style)} />
            ))}
          </div>
        </div>

        <div className="mt-5 grid flex-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={cn("overflow-hidden rounded-[1.45rem] border border-white/10 p-4", theme.panel)}>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/48">
              Resultado
            </p>
            <p className="mt-3 max-w-[10ch] text-4xl font-extrabold tracking-[-0.05em] text-white">
              {result}
            </p>

            <div className="mt-5 space-y-3">
              {[0, 1, 2].map((line) => (
                <div key={line} className="h-3 rounded-full bg-white/[0.08]" style={{ width: `${92 - line * 18}%` }} />
              ))}
            </div>

            <div className="relative mt-6 h-28 overflow-hidden rounded-[1.2rem] border border-primary/14 bg-black/18">
              <div className="absolute inset-x-7 bottom-9 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)]" />
              <div className="absolute inset-x-7 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,173,115,0.16),rgba(255,122,26,0.8))] [clip-path:polygon(0_80%,14%_58%,28%_68%,45%_34%,60%_54%,76%_18%,90%_28%,100%_12%,100%_100%,0_100%)]" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/46">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-white/74"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/46">
                Entrega
              </p>
              <p className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-white">{title}</p>
              <div className="mt-5 space-y-3">
                {[48, 74, 62].map((width) => (
                  <div key={width} className="h-3 rounded-full bg-white/[0.08]" style={{ width: `${width}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsPreview() {
  const showcaseProjects = projects.slice(0, 3)

  return (
    <section id="casos" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="absolute right-[-8rem] top-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.14),transparent_70%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <span className="section-chip text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-primary">
              <span className="section-dot" />
              Casos de trabajo
            </span>
            <h2 className="mt-7 max-w-[14ch] text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Un portafolio que se siente{" "}
              <span className="text-brand-gradient">más estudio premium que catálogo de servicios</span>.
            </h2>
          </motion.div>

          <Button asChild variant="outline" size="lg" className="border-white/12 bg-white text-[#111318] hover:bg-[#FFF3E6]">
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-12">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border-t border-white/10 pt-12 first:border-t-0 first:pt-0"
            >
              <Link href={`/proyectos/${project.id}`} className="group block">
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]",
                    index % 2 === 1 && "lg:grid-cols-[1.08fr_0.92fr]"
                  )}
                >
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/34">
                      0{index + 1} / {project.category}
                    </p>

                    <h3 className="mt-5 max-w-[12ch] text-4xl font-extrabold tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-primary lg:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/64">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/42"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {project.results}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition-colors duration-300 group-hover:text-white">
                        Ver caso completo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <ProjectCanvas
                      title={project.title}
                      result={project.results}
                      technologies={project.technologies}
                      themeIndex={index}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
