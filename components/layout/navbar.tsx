"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import { SoftnetLockup, SoftnetMark, SoftnetMotif } from "@/components/brand/softnet-brand"
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
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.nav
            animate={{
              y: isScrolled ? 0 : 2,
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "nav-sheen relative mt-4 flex items-center gap-3 overflow-hidden rounded-[1rem] border px-3 py-3 transition-all duration-300 lg:px-4",
              isScrolled
                ? "border-black/10 bg-[rgba(255,255,255,0.88)] shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                : "border-black/8 bg-[rgba(255,255,255,0.72)] shadow-[0_10px_26px_rgba(15,23,42,0.05)] backdrop-blur-lg"
            )}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.22),rgba(100,116,139,0.14),transparent)]" />
            <div className="absolute inset-x-5 bottom-0 h-px overflow-hidden rounded-full bg-black/[0.03]">
              <motion.div
                className="h-full origin-left bg-[linear-gradient(90deg,rgba(59,130,246,0.9),rgba(17,24,39,0.82),rgba(59,130,246,0.18))]"
                style={{ scaleX: progressScaleX }}
              />
            </div>
            <SoftnetMotif className="pointer-events-none absolute right-20 top-1 hidden h-16 w-28 opacity-[0.34] xl:block" />

            <Link
              href="/"
              className="group relative shrink-0 rounded-[0.85rem] border border-black/8 bg-[rgba(255,255,255,0.78)] px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.04)] backdrop-blur-xl"
            >
              <SoftnetLockup compact />
            </Link>

            <div className="hidden flex-1 justify-center lg:flex">
              <div className="relative flex items-center gap-1 rounded-[0.95rem] border border-black/8 bg-[rgba(255,255,255,0.82)] p-1.5 shadow-[0_8px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative rounded-[0.8rem] px-4 py-2.5 text-sm font-semibold tracking-[-0.02em]"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="navbar-active-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-[0.8rem] bg-[#111827] shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                        />
                      ) : null}

                      <span
                        className={cn(
                          "relative z-10 transition-colors",
                          isActive ? "text-white" : "text-[#121317]/54 hover:text-[#121317]"
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="hidden rounded-[0.95rem] border border-black/8 bg-[rgba(255,255,255,0.62)] px-4 py-2.5 text-right shadow-[0_8px_18px_rgba(15,23,42,0.04)] backdrop-blur-xl xl:block">
                <p className="code-caption text-[0.62rem] font-semibold text-primary/84">
                  Estudio digital
                </p>
                <p className="mt-1 text-sm text-[#121317]/54">Dirección visual + base técnica real</p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] blur-xl" />
                <Button asChild size="lg" className="group relative">
                  <Link href="/contacto">
                    Solicitar propuesta
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-[999px] border border-black/10 bg-white/84 text-[#121317] shadow-[0_8px_18px_rgba(15,23,42,0.06)] transition-colors lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.nav>
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
            <div className="absolute inset-0 bg-[#121317]/56 backdrop-blur-xl" />
            <div className="relative mx-4 mt-24">
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.22 }}
                className="surface-card mx-auto max-w-xl overflow-hidden rounded-[1rem] p-6 text-white"
              >
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                      Navegación
                    </p>
                    <p className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-white">
                      {siteConfig.name}
                    </p>
                  </div>
                  <SoftnetMark className="h-11 w-11 rounded-[0.9rem]" variant="glass" />
                </div>

                <div className="space-y-2">
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
                          "flex items-center justify-between rounded-[0.8rem] border px-4 py-4 text-lg font-semibold tracking-[-0.03em] transition-colors",
                          pathname === link.href
                            ? "border-white/12 bg-white/8 text-white"
                            : "border-white/8 text-white/70 hover:border-white/12 hover:bg-white/5 hover:text-white"
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
