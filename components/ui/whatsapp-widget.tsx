"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[350px] bg-white border border-slate-200 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Innova AI Assistant</h4>
                    <span className="text-[10px] text-primary/80 uppercase tracking-widest font-bold">En línea</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-400">¿Cómo podemos ayudarle hoy con su infraestructura digital?</p>
            </div>

            {/* Messages Area */}
            <div className="h-80 bg-slate-50 p-6 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 text-sm text-slate-700 shadow-sm max-w-[80%] font-medium">
                  ¡Hola! Soy el asistente virtual de {siteConfig.name}. ¿Le gustaría saber más sobre nuestras automatizaciones con IA?
                </div>
              </div>
              
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-black" />
                </div>
                <div className="bg-primary/10 p-4 rounded-2xl rounded-tr-none border border-primary/20 text-sm text-slate-900 shadow-sm max-w-[80%] font-bold">
                  Me gustaría información sobre desarrollo web.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 text-sm text-slate-700 shadow-sm max-w-[80%] font-medium">
                  Excelente elección. Nuestras arquitecturas están optimizadas para conversión. ¿Desea agendar una llamada rápida?
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Escriba su mensaje..."
                className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="p-2 bg-primary text-black rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-lg hover:shadow-primary/20">
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            {/* Footer */}
            <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
               <a 
                href={`https://wa.me/${siteConfig.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black text-slate-400 hover:text-primary uppercase tracking-[0.2em] transition-colors"
               >
                 O chatear directo por WhatsApp
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUBBLE */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,65,0.3)] hover:bg-slate-900 hover:text-white transition-all group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  )
}
