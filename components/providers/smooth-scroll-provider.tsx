"use client"

import { useEffect } from "react"
import type { ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

type SmoothScrollProviderProps = {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.08,
      lerp: 0.085,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
    })

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    const handleRefresh = () => lenis.resize()

    lenis.on("scroll", ScrollTrigger.update)
    ScrollTrigger.addEventListener("refresh", handleRefresh)
    rafId = window.requestAnimationFrame(raf)
    ScrollTrigger.refresh()

    return () => {
      window.cancelAnimationFrame(rafId)
      ScrollTrigger.removeEventListener("refresh", handleRefresh)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
