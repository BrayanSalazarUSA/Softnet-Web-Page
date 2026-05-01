"use client"

import { useEffect } from "react"
import { useReducedMotion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const sectionThemes = [
  {
    trigger: "#hero-home",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.04)",
      "--page-glow-b": "rgba(100, 116, 139, 0.06)",
      "--page-glow-c": "rgba(226, 232, 240, 0.42)",
      "--page-base-top": "#FFFFFF",
      "--page-base-mid": "#FBFBFC",
      "--page-base-bottom": "#F6F7FB",
      "--page-grid-opacity": "0.14",
    },
  },
  {
    trigger: "#sectores",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.03)",
      "--page-glow-b": "rgba(100, 116, 139, 0.05)",
      "--page-glow-c": "rgba(226, 232, 240, 0.46)",
      "--page-base-top": "#FFFFFF",
      "--page-base-mid": "#FAFBFD",
      "--page-base-bottom": "#F3F5F8",
      "--page-grid-opacity": "0.12",
    },
  },
  {
    trigger: "#servicios-home",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.04)",
      "--page-glow-b": "rgba(15, 23, 42, 0.05)",
      "--page-glow-c": "rgba(226, 232, 240, 0.24)",
      "--page-base-top": "#F9FAFB",
      "--page-base-mid": "#F3F4F6",
      "--page-base-bottom": "#EDEFF4",
      "--page-grid-opacity": "0.14",
    },
  },
  {
    trigger: "#automatizacion-home",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.04)",
      "--page-glow-b": "rgba(100, 116, 139, 0.06)",
      "--page-glow-c": "rgba(226, 232, 240, 0.38)",
      "--page-base-top": "#FFFFFF",
      "--page-base-mid": "#F8FAFC",
      "--page-base-bottom": "#EEF2F7",
      "--page-grid-opacity": "0.13",
    },
  },
  {
    trigger: "#casos",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.03)",
      "--page-glow-b": "rgba(51, 65, 85, 0.05)",
      "--page-glow-c": "rgba(241, 245, 249, 0.5)",
      "--page-base-top": "#FFFFFF",
      "--page-base-mid": "#FBFBFD",
      "--page-base-bottom": "#F5F7FA",
      "--page-grid-opacity": "0.15",
    },
  },
  {
    trigger: "#showcase-home",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.04)",
      "--page-glow-b": "rgba(15, 23, 42, 0.07)",
      "--page-glow-c": "rgba(148, 163, 184, 0.16)",
      "--page-base-top": "#0D1117",
      "--page-base-mid": "#090C11",
      "--page-base-bottom": "#06080C",
      "--page-grid-opacity": "0.08",
    },
  },
  {
    trigger: "#proceso",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.03)",
      "--page-glow-b": "rgba(30, 41, 59, 0.05)",
      "--page-glow-c": "rgba(226, 232, 240, 0.32)",
      "--page-base-top": "#F9FAFB",
      "--page-base-mid": "#F4F6F8",
      "--page-base-bottom": "#ECEFF4",
      "--page-grid-opacity": "0.13",
    },
  },
  {
    trigger: "#faq-home",
    vars: {
      "--page-glow-a": "rgba(59, 130, 246, 0.03)",
      "--page-glow-b": "rgba(30, 41, 59, 0.05)",
      "--page-glow-c": "rgba(226, 232, 240, 0.24)",
      "--page-base-top": "#F8FAFC",
      "--page-base-mid": "#F1F5F9",
      "--page-base-bottom": "#E8EDF4",
      "--page-grid-opacity": "0.1",
    },
  },
]

export function HomeScrollDirector() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const root = document.documentElement
    const animateTheme = (vars: Record<string, string>) => {
      gsap.to(root, {
        ...vars,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    animateTheme(sectionThemes[0].vars)

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      sectionThemes.forEach(({ trigger, vars }) => {
        ScrollTrigger.create({
          trigger,
          start: "top 68%",
          end: "bottom 32%",
          onEnter: () => animateTheme(vars),
          onEnterBack: () => animateTheme(vars),
        })
      })

      mm.add("(min-width: 1024px)", () => {
        gsap.to(".js-hero-copy", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-hero-visual-shell", {
          yPercent: 7,
          scale: 1.04,
          rotation: -0.8,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-hero-media", {
          scale: 1.03,
          yPercent: -3,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-hero-metrics", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.fromTo(
          ".js-services-panel-shell",
          {
            y: 32,
            opacity: 0.72,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#servicios-home",
              start: "top 72%",
              once: true,
            },
          }
        )

        gsap.fromTo(
          ".js-services-card",
          {
            y: 40,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#servicios-home",
              start: "top 68%",
              once: true,
            },
          }
        )

        gsap.to(".js-services-stage", {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: "#servicios-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-services-panel-shell", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: "#servicios-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-services-card", {
          yPercent: -2,
          ease: "none",
          scrollTrigger: {
            trigger: "#servicios-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.fromTo(
          ".js-automation-board",
          {
            y: 34,
            opacity: 0.74,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#automatizacion-home",
              start: "top 72%",
              once: true,
            },
          }
        )

        gsap.fromTo(
          ".js-automation-step",
          {
            x: 26,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#automatizacion-home",
              start: "top 68%",
              once: true,
            },
          }
        )

        gsap.fromTo(
          ".js-automation-copy",
          {
            y: 26,
            opacity: 0.76,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#automatizacion-home",
              start: "top 70%",
              once: true,
            },
          }
        )

        gsap.to(".js-automation-board", {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: "#automatizacion-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.to(".js-automation-copy", {
          yPercent: -2,
          ease: "none",
          scrollTrigger: {
            trigger: "#automatizacion-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.fromTo(
          ".js-projects-feature",
          {
            y: 30,
            opacity: 0.78,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#casos",
              start: "top 72%",
              once: true,
            },
          }
        )

        gsap.to(".js-projects-feature", {
          yPercent: -4,
          scale: 1.015,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: "#casos",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.fromTo(
          ".js-project-motion-stage",
          {
            y: 32,
            opacity: 0.78,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#showcase-home",
              start: "top 72%",
              once: true,
            },
          }
        )

        gsap.to(".js-project-motion-stage", {
          yPercent: -2,
          ease: "none",
          scrollTrigger: {
            trigger: "#showcase-home",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })

        gsap.fromTo(
          ".js-process-board",
          {
            y: 28,
            opacity: 0.74,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#proceso",
              start: "top 72%",
              once: true,
            },
          }
        )

        gsap.to(".js-process-board", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: "#proceso",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      gsap.from(".js-project-secondary", {
        y: 30,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#casos",
          start: "top 76%",
          once: true,
        },
      })
    }, document.body)

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [prefersReducedMotion])

  return null
}
