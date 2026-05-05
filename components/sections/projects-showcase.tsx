"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2, Layers, Cpu } from "lucide-react";

import { projects } from "@/lib/site-config";

export function ProjectsShowcase() {
  return (
    <section className="py-32 bg-white border-b border-slate-200/50 overflow-hidden relative">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#00C896 1px, transparent 1px), linear-gradient(90deg, #00C896 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
             }} 
        />
        {/* Subtle Horizontal Lines */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px)`,
               backgroundSize: '100% 40px',
             }} 
        />
        
        {/* Floating Technical Blobs */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full"
            >
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] text-white">
                Engineering Showcase
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 font-heading leading-[0.85]"
            >
              Proyectos <br />
              <span className="text-primary italic">Destacados.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="max-w-sm text-slate-500 font-medium text-lg leading-relaxed border-l-2 border-slate-100 pl-8">
              Infraestructuras digitales de alto rendimiento diseñadas bajo estándares de ingeniería de software moderna.
            </p>
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/proyectos/${project.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[16/12] overflow-hidden bg-slate-100 rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,200,150,0.15)] group-hover:-translate-y-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  
                  {/* Category Label Overlay */}
                  <div className="absolute top-6 left-6 z-20">
                     <div className="bg-slate-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <Layers className="w-3 h-3 text-primary" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-white">{project.category}</span>
                     </div>
                  </div>

                  {/* Results Badge */}
                  <div className="absolute bottom-6 left-6 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                     <div className="bg-primary px-4 py-1.5 rounded-full shadow-2xl">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black">{project.results}</span>
                     </div>
                  </div>

                  {/* Float Action Icon */}
                  <div className="absolute bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl z-20">
                    <ArrowUpRight className="w-7 h-7 group-hover:rotate-45 transition-transform duration-500" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="mt-8 space-y-5 px-2">
                  <h3 className="text-3xl font-black text-slate-950 font-heading tracking-tighter group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[8px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-3 py-1 rounded-full group-hover:border-primary/20 group-hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 px-2 py-1 italic">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 flex flex-col items-center gap-10"
        >
          <div className="h-px w-32 bg-slate-200" />
          <Link 
            href="/proyectos"
            className="group relative inline-flex items-center gap-6 bg-slate-950 text-white px-14 py-7 rounded-full overflow-hidden transition-all hover:bg-primary hover:text-black shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]"
          >
            <span className="relative z-10 font-mono text-[11px] font-black uppercase tracking-[0.4em]">
              Explorar Portfolio Completo
            </span>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
