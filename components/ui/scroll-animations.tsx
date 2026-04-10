"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  blur?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  blur = 10,
  once = true,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y, filter: `blur(${blur}px)` }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("transform-gpu will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  delayChildren?: number
  stagger?: number
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0,
  stagger = 0.08,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  y?: number
  blur?: number
}

export function StaggerItem({
  children,
  className,
  y = 20,
  blur = 8,
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y, filter: `blur(${blur}px)` },
        show: prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
            },
      }}
      className={cn("transform-gpu will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type ParallaxProps = HTMLMotionProps<"div"> & {
  offset?: number
  scaleFrom?: number
  scaleTo?: number
}

export function Parallax({
  children,
  className,
  offset = 40,
  scaleFrom = 0.985,
  scaleTo = 1.015,
  style,
  ...props
}: ParallaxProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, 1, scaleTo])
  const y = useSpring(rawY, { stiffness: 110, damping: 22, mass: 0.18 })
  const scale = useSpring(rawScale, { stiffness: 90, damping: 18, mass: 0.2 })

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? style : { ...style, y, scale }}
      className={cn("transform-gpu will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
