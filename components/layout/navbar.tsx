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
  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.22,
  })

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
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
          isScrolled ? "bg-white/90 border-slate-200 backdrop-blur-md shadow-sm" : "bg-transparent border-transparent"
        )}
      >
        {/* Scroll progress bar */}
        <div className="absolute inset-x-0 bottom-[-1px] h-[1px] overflow-hidden bg-transparent z-50">
          <motion.div
            className="h-full origin-left bg-red-600"
            style={{ scaleX: progressScaleX }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <SoftnetLockup compact theme="light" />
              </Link>
            </div>

            <div className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative py-2 font-mono text-[0.7rem] uppercase tracking-widest transition-colors duration-200",
                        isActive ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-line"
                          className="absolute inset-x-0 bottom-0 h-px bg-red-600"
                        />
                      )}
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              <div className="hidden xl:block">
                <SoftnetBrandNote className="text-[0.55rem] text-slate-500" />
              </div>

              <Button asChild size="sm" className="rounded-none border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-mono text-xs uppercase tracking-wider h-9 px-6 shadow-sm">
                <Link href="/contacto">
                  <Code2 className="mr-2 h-3.5 w-3.5 text-red-600" />
                  Request Demo
                </Link>
              </Button>
            </div>

            <button
              className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-900 transition-colors lg:hidden rounded-none shadow-sm"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <div className="relative h-full flex flex-col pt-24 px-6">
              <div className="flex-1 space-y-4">
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
                        "block border-b border-slate-100 pb-4 font-mono text-sm uppercase tracking-widest transition-colors",
                        pathname === link.href
                          ? "text-red-600 font-bold"
                          : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <Button asChild size="lg" className="w-full rounded-none bg-red-600 text-white font-mono uppercase tracking-widest hover:bg-red-700">
                  <Link href="/contacto">
                    Request Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
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
