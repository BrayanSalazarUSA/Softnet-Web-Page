"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Parallax, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/scroll-animations"
import { SectionIntro } from "@/components/ui/section-intro"
import { projects } from "@/lib/site-config"

export function ProjectsPreview() {
  const featuredProject = projects[0]
  const secondaryProjects = projects.slice(1, 4)

  return (
    <section id="casos" className="section-wash relative py-28 text-[#121317]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <SectionIntro
            eyebrow="Casos de trabajo"
            title={
              <>
                Proyectos donde{" "}
                <span className="text-brand-gradient">la experiencia se ve mejor y la operación funciona mejor</span>.
              </>
            }
            description="Mostramos trabajos donde el valor no está solo en el acabado visual. También está en la claridad comercial, la arquitectura y la utilidad real para el negocio."
          />

          <Reveal delay={0.08} className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/proyectos">
                Ver todos los proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="js-projects-feature">
          <Link href={`/proyectos/${featuredProject.id}`} className="group block">
            <div className="paper-card overflow-hidden rounded-[1rem] p-4 sm:p-6 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                    Caso destacado
                  </p>
                  <h3 className="mt-5 max-w-[10ch] text-4xl font-extrabold tracking-[-0.055em] text-[#121317] transition-colors duration-300 group-hover:text-primary">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-[#121317]/64">
                    {featuredProject.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-black/8 bg-white/72 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#121317]/68"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 border border-primary/18 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {featuredProject.results}
                  </div>
                </div>

                <Parallax offset={18} className="surface-card relative min-h-[20rem] overflow-hidden rounded-[1rem] p-5 text-white lg:min-h-[25rem]">
                  <div className="soft-grid absolute inset-0 opacity-[0.08]" />
                  <div className="absolute left-8 top-10 h-36 w-36 rounded-full bg-primary/18 blur-3xl" />
                  <div className="absolute right-8 top-8 border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-white/58">
                    {featuredProject.category}
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="overflow-hidden rounded-[0.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/44">
                        Resultado visible
                      </p>
                      <p className="mt-3 max-w-[10ch] text-4xl font-extrabold tracking-[-0.05em] text-white">
                        {featuredProject.results}
                      </p>
                      <div className="mt-6 h-28 overflow-hidden rounded-[0.8rem] border border-primary/18 bg-black/16">
                        <div className="h-full w-full bg-[linear-gradient(180deg,rgba(226,232,240,0.24),rgba(59,130,246,0.38),rgba(15,23,42,0.78))] [clip-path:polygon(0_82%,16%_58%,30%_68%,48%_30%,62%_52%,78%_18%,90%_32%,100%_14%,100%_100%,0_100%)]" />
                      </div>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </Link>
        </Reveal>

        <StaggerGroup stagger={0.08} className="mt-10 grid gap-5 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <StaggerItem key={project.id}>
              <Link href={`/proyectos/${project.id}`} className="js-project-secondary group block h-full">
                <div className="paper-card-soft h-full rounded-[1rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/24">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary/76">
                      {project.category}
                    </p>
                    <ArrowUpRight className="h-4 w-4 text-[#121317]/30 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 max-w-[11ch] text-2xl font-extrabold tracking-[-0.045em] text-[#121317]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#121317]/62">{project.description}</p>
                  <div className="mt-6 border-t border-black/8 pt-4">
                    <span className="text-sm font-semibold text-primary">{project.results}</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
