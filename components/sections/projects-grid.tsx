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
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#050505 1px, transparent 1px), linear-gradient(90deg, #050505 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                activeCategory === category
                  ? "bg-primary border-primary text-black shadow-[0_10px_30px_-5px_#00C89640]"
                  : "bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/proyectos/${project.id}`} className="group block">
                  <div className="relative aspect-[16/11] rounded-[3rem] overflow-hidden border border-slate-200 bg-white shadow-lg transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-primary/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Info */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-10">
                      <div>
                        <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 backdrop-blur-md border border-primary/20 px-3 py-1.5 rounded-full">
                          {project.category}
                        </span>
                        <p className="mt-3 text-3xl font-black text-white font-heading tracking-tighter">
                          {project.results}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 px-2">
                    <h3 className="text-3xl font-black text-slate-950 font-heading tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-[9px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
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
