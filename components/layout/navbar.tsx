"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { ArrowRight, Menu, X, Code2 } from "lucide-react"
import { SoftnetLockup, SoftnetBrandNote } from "@/components/brand/softnet-brand"
import { Button } from "@/components/ui/button"
import { navLinks, siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
        )}
      >
        {/* ── SCROLL PROGRESS BAR ── */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-primary z-50 shadow-[0_0_10px_#00C896]"
          style={{ width: `${(isScrolled ? 100 : 0)}%`, opacity: isScrolled ? 1 : 0 }} 
          transition={{ duration: 0.3 }}
        />

        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <SoftnetLockup compact theme="dark" />
              </Link>
            </div>

            <div className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-full px-4 py-1.5 shadow-inner">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all duration-200 rounded-full",
                        isActive ? "text-white bg-primary/20 shadow-[0_0_15px_rgba(0,200,150,0.1)]" : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden items-center gap-8 lg:flex">
              {/* Engineering Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Systems: Op</span>
              </div>

              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-black font-black text-[10px] uppercase tracking-widest px-6 h-10 transition-all duration-300 shadow-[0_0_20px_rgba(0,200,150,0.2)] hover:shadow-primary/40">
                <Link href="/contacto" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>

            <button
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center transition-colors lg:hidden rounded-full border border-border bg-background text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
            <div className="relative h-full flex flex-col pt-28 px-8">
              <div className="flex-1 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block pb-4 text-2xl font-bold tracking-tight border-b border-border transition-colors",
                        pathname === link.href
                          ? "text-primary"
                          : "text-slate-400 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pb-12">
                <Button asChild size="lg" className="w-full rounded-full bg-primary text-white font-bold h-14 text-lg">
                  <Link href="/contacto">
                    Cotizar Proyecto
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
