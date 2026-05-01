"use client";

import Image from "next/image";
import { CheckCircle2, Zap, Smartphone, Database } from "lucide-react";

export default function UnifiedOps() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Izquierdo: Copy de Venta */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-red-50 border border-red-100 text-red-600 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
              <Zap className="w-3 h-3" />
              Efficiency Engineering
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
              ¿Muchas herramientas en su operación? <br />
              <span className="text-red-600">Recupere el control total.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Pierde tiempo, dinero y control saltando entre Excels infinitos, PDFs aislados, 
              carpetas de Drive y correos perdidos. <strong className="text-slate-900 italic font-semibold">La fragmentación es el enemigo invisible de su rentabilidad.</strong>
            </p>

            {/* Lista de Capacidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2 border-l-2 border-red-600 pl-4">
                <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase">Dashboards Unificados</h4>
                <p className="text-[13px] text-slate-500 leading-snug">Visualice el pulso de su negocio en tiempo real. Un solo centro de mando Web & Mobile.</p>
              </div>
              <div className="space-y-2 border-l-2 border-slate-200 pl-4">
                <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">Omnichannel Alerts</h4>
                <p className="text-[13px] text-slate-500 leading-snug">Notificaciones automáticas vía WhatsApp, SMS y Email integradas en el flujo.</p>
              </div>
              <div className="space-y-2 border-l-2 border-slate-200 pl-4">
                <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">AI Data Processing</h4>
                <p className="text-[13px] text-slate-500 leading-snug">Procesamiento inteligente de documentos físicos y generación de bases de datos.</p>
              </div>
              <div className="space-y-2 border-l-2 border-slate-200 pl-4">
                <h4 className="font-bold text-slate-900 text-sm tracking-tight uppercase font-mono">Zero Paperwork</h4>
                <p className="text-[13px] text-slate-500 leading-snug">Digitalización total de procesos críticos. Deje de buscar archivos, empiece a ver datos.</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="group relative bg-slate-900 text-white px-8 py-5 rounded-none font-bold text-sm tracking-[0.1em] uppercase hover:bg-red-600 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Centralizar Mi Operación Now</span>
                <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Lado Derecho: Visualización Técnica */}
          <div className="lg:w-1/2 relative group">
            {/* Elementos Decorativos de Ingeniería */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-full blur-[100px] opacity-60"></div>
            
            <div className="relative border border-slate-200 bg-white p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
               <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.05] pointer-events-none"></div>
               <Image 
                src="/unified_dashboard_ecosystem.png" 
                alt="Unified Dashboard Ecosystem by SOFTNET"
                width={1200}
                height={1200}
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlays de Datos Simulados */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <div className="bg-slate-900 text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                  System: Online
                </div>
                <div className="bg-red-600 text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase animate-pulse">
                  Data Syncing...
                </div>
              </div>
              
              {/* Esquinas tipo Blueprint */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
