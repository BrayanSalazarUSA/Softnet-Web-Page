"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/site-config"

const categories = ["Todos", "Web Corporativa", "Aplicación Web", "Landing Page", "Dashboard", "Tienda Online"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="section-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-[#111827] text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)]"
                  : "glow-pill text-[#111318]/74 hover:border-primary/30 hover:text-[#111318]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Link href={`/proyectos/${project.id}`} className="group block h-full">
                  <div className="paper-card flex h-full flex-col rounded-[1rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/28">
                    <div className="ink-panel relative flex aspect-[4/3] items-end overflow-hidden rounded-[0.9rem] p-5 text-white">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.06),rgba(8,10,14,0.5))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(100,116,139,0.08),transparent_26%)]" />
                      <div className="relative z-10">
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/82">
                          {project.category}
                        </span>
                        <p className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">
                          {project.results}
                        </p>
                      </div>

                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/72 transition-all duration-300 group-hover:border-primary/25 group-hover:bg-primary/18 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-[#111318] transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#111318]/62">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="paper-card-soft rounded-full px-3 py-1 text-xs text-[#111318]/66"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
