"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            className={cn(
              "mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-4 border px-4 py-3.5 transition-all duration-300 lg:px-6",
              isScrolled
                ? "border-black/10 bg-[rgba(250,246,239,0.84)] shadow-[0_24px_60px_rgba(17,19,24,0.12)] backdrop-blur-2xl"
                : "border-black/8 bg-[rgba(252,249,244,0.66)] shadow-[0_18px_40px_rgba(17,19,24,0.08)] backdrop-blur-xl"
            )}
          >
            <Link href="/" className="group flex items-center gap-4">
              <div className="logo-mark flex h-12 w-12 items-center justify-center rounded-[1rem]">
                <span className="text-lg font-extrabold text-primary-foreground">
                  {siteConfig.name.charAt(0)}
                </span>
              </div>

              <div className="hidden min-w-0 sm:block">
                <span className="block text-lg font-extrabold tracking-[-0.05em] text-[#111318]">
                  {siteConfig.name}
                </span>
                <div className="mt-1 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.28em] text-[#111318]/42">
                  <span>Desarrollo web</span>
                  <span className="h-1 w-1 rounded-full bg-primary/70" />
                  <span>Sistemas</span>
                </div>
              </div>
            </Link>

            <div className="hidden justify-center lg:flex">
              <div className="flex items-center gap-7 border-x border-black/8 px-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "group relative py-2 text-sm font-medium tracking-[-0.02em] transition-colors",
                        isActive ? "text-[#111318]" : "text-[#111318]/56 hover:text-[#111318]"
                      )}
                    >
                      <span>{link.label}</span>
                      <span
                        className={cn(
                          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[linear-gradient(90deg,#FF7A1A,transparent)] transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden items-center gap-5 lg:flex">
              <div className="hidden text-right xl:block">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#111318]/34">
                  Agencia boutique
                </p>
                <p className="mt-1 text-sm text-[#111318]/56">Propuesta técnica y comercial en 24h</p>
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/contacto">
                  Solicitar propuesta
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center border border-black/10 bg-white/70 text-[#111318] shadow-[0_10px_24px_rgba(17,19,24,0.08)] backdrop-blur-sm transition-colors lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0E0F12]/55 backdrop-blur-2xl" />

            <div className="relative mx-4 mt-24">
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.22 }}
                className="surface-card mx-auto max-w-xl overflow-hidden rounded-[1.8rem] p-6 text-white"
              >
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/44">
                      Navegación
                    </p>
                    <p className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-white">
                      {siteConfig.name}
                    </p>
                  </div>

                  <div className="logo-mark flex h-12 w-12 items-center justify-center rounded-[1rem]">
                    <span className="text-lg font-extrabold text-primary-foreground">
                      {siteConfig.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between border-b border-white/8 py-4 text-lg font-semibold tracking-[-0.03em] transition-colors",
                          pathname === link.href ? "text-white" : "text-white/68 hover:text-white"
                        )}
                      >
                        <span>{link.label}</span>
                        <span className="text-sm text-primary">{pathname === link.href ? "Actual" : "Abrir"}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-2">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contacto">
                      Solicitar propuesta
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
