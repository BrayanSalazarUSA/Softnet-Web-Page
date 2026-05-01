"use client"

import Image from "next/image"
import { MonitorPlay, Sparkles } from "lucide-react"
import { SectionIntro } from "@/components/ui/section-intro"
import { Reveal } from "@/components/ui/scroll-animations"
import { projects } from "@/lib/site-config"

const showcaseExtras = [
  {
    title: "FastBite Ordering",
    category: "Fast Food",
    note: "Pedidos y lectura comercial",
    image: "/projects/fastfood.png",
  },
  {
    title: "Core District Gym",
    category: "Fitness",
    note: "Membresías y captación",
    image: "/projects/gym.png",
  },
]

const showcaseProjects = [
  ...projects.map((project) => ({
    title: project.title,
    category: project.category,
    note: project.results,
    image: project.image,
  })),
  ...showcaseExtras,
]

const firstRow = showcaseProjects.slice(0, 4)
const secondRow = showcaseProjects.slice(4)

export function ProjectsMotionShowcase() {
  return (
    <section id="showcase-home" className="section-dark relative overflow-hidden py-28 text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.05]" />
      <div className="absolute left-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_72%)] blur-3xl" />
      <div className="absolute right-[-12rem] bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.16),transparent_72%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <SectionIntro
          eyebrow="Showcase visual"
          icon={MonitorPlay}
          dark
          title={
            <>
              Algunos trabajos se entienden mejor{" "}
              <span className="text-brand-gradient">cuando empiezan a moverse frente a ti</span>.
            </>
          }
          description="Esta vitrina mezcla sectores, estilos y tipos de producto para mostrar que Softnet puede diseñar presencia, software y experiencia visual con más intención y más nivel percibido."
        />

        <Reveal className="js-project-motion-stage project-marquee-shell relative overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_28px_70px_rgba(2,6,23,0.22)] sm:p-5">
          <div className="project-marquee-mask absolute inset-0 z-20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />

          <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-1 pb-5">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/78">
                Casos y direcciones
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/62">
                Web corporativa, SaaS, inmobiliaria, clínica, e-commerce y productos digitales mejor presentados.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/46">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Motion showcase
            </div>
          </div>

          <div className="space-y-4">
            <div className="project-marquee-track flex gap-4">
              {[...firstRow, ...firstRow].map((project, index) => (
                <div
                  key={`${project.title}-row1-${index}`}
                  className="group relative h-[17rem] w-[22rem] shrink-0 overflow-hidden rounded-[1rem] border border-white/10 bg-[#0E1219]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="352px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.04),rgba(5,8,12,0.62))]" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/78">
                    {project.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-lg font-extrabold tracking-[-0.04em] text-white">{project.title}</p>
                    <p className="mt-2 text-sm text-white/62">{project.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="project-marquee-track project-marquee-track--reverse flex gap-4">
              {[...secondRow, ...secondRow].map((project, index) => (
                <div
                  key={`${project.title}-row2-${index}`}
                  className="group relative h-[15.5rem] w-[20rem] shrink-0 overflow-hidden rounded-[1rem] border border-white/10 bg-[#0E1219]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.06),rgba(5,8,12,0.64))]" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/72">
                    {project.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-base font-extrabold tracking-[-0.04em] text-white">{project.title}</p>
                    <p className="mt-2 text-sm text-white/58">{project.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
