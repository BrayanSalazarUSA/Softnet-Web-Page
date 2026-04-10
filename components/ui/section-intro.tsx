"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { SoftnetMotif } from "@/components/brand/softnet-brand"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/scroll-animations"

type SectionIntroProps = {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  panelKicker?: string
  panelTitle?: ReactNode
  panelDescription?: ReactNode
  panelPoints?: string[]
  icon?: LucideIcon
  dark?: boolean
  className?: string
  titleClassName?: string
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  panelKicker: _panelKicker,
  panelTitle: _panelTitle,
  panelDescription: _panelDescription,
  panelPoints: _panelPoints = [],
  icon: _Icon,
  dark = false,
  className,
  titleClassName,
}: SectionIntroProps) {
  return (
    <div className={cn("relative mb-14 overflow-hidden py-2", className)}>
      <SoftnetMotif
        className={cn(
          "pointer-events-none absolute right-0 top-0 hidden h-36 w-64 lg:block",
          dark ? "opacity-[0.7]" : "opacity-[0.9]"
        )}
        tone={dark ? "dark" : "light"}
      />

      <Reveal className="relative z-10 max-w-none">
        <span className="section-chip text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary">
          <span className="section-dot" />
          {eyebrow}
        </span>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-end xl:grid-cols-[minmax(0,1.24fr)_minmax(340px,0.76fr)]">
          <h2
            className={cn(
              "max-w-[16ch] text-4xl font-extrabold tracking-[-0.055em] md:text-5xl lg:max-w-[18ch] xl:max-w-[20ch]",
              dark ? "text-white" : "text-[#121317]",
              titleClassName
            )}
          >
            {title}
          </h2>

          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed lg:justify-self-end",
              dark ? "text-white/72" : "text-[#121317]/64"
            )}
          >
            {description}
          </p>
        </div>
      </Reveal>
    </div>
  )
}
