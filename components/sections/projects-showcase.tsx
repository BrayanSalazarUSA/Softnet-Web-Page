"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Quantum Logistics Engine",
    category: "AI AUTOMATION",
    image: "/futuristic_ai_core.png", // Reutilizando para el demo
    description: "Sistema de optimización de rutas y control de flotas en tiempo real mediante redes neuronales.",
  },
  {
    title: "InmoVerify Hub",
    category: "WEB ECOSYSTEM",
    image: "/hero_ecosystem.png", // Reutilizando para el demo
    description: "Plataforma centralizada de validación documental y agendamiento inteligente para el sector inmobiliario.",
  },
  {
    title: "Unified Ops Dashboard",
    category: "DASHBOARD / BI",
    image: "/unified_dashboard_ecosystem.png",
    description: "Centro de mando para la unificación de herramientas fragmentadas (Excel, Drive, CRM) en un solo ecosistema.",
  }
];

export function ProjectsShowcase() {
  return (
    <section className="py-32 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="border-l-2 border-red-600 pl-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-red-600 mb-2">
              // ENGINEERING SHOWCASE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900">
              Proyectos <span className="text-slate-400">Destacados</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium text-sm leading-relaxed">
            Soluciones de software personalizadas que resuelven cuellos de botella operativos mediante ingeniería de precisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-slate-100 bg-slate-50 group-hover:border-red-200 transition-colors duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
                />
                
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500" />
                
                {/* Float Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-slate-900 text-white flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-red-600 bg-red-50 px-2 py-1">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700">
                  {project.description}
                </p>
                
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors pt-2 group-hover:translate-x-2 transition-transform duration-500"
                >
                  View Case Study <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
