import { type ReactNode, useId } from "react"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type SoftnetMarkProps = {
  className?: string
  glyphClassName?: string
  variant?: "solid" | "glass"
}

type SoftnetLockupProps = {
  className?: string
  theme?: "light" | "dark"
  markVariant?: "solid" | "glass"
  compact?: boolean
}

type SoftnetMotifProps = {
  className?: string
  tone?: "light" | "dark"
}

function SoftnetGlyph({ className }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 48 48" className={cn("h-[58%] w-[58%]", className)} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="10" y1="9" x2="34" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8FBFF" />
          <stop offset="48%" stopColor="#9CCBFF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      <path
        d="M33.5 13.5C30.2 9.5 21.8 8.8 16.9 11.8C12.1 14.7 12.2 20.6 20.8 23.2C28.8 25.6 30.5 29.2 27.9 33.1C24.5 38.1 16.7 38.8 12.6 34.7"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.5 13.5L38 13.5"
        stroke="#FFFFFF"
        strokeOpacity="0.62"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M10 34.7L14.6 34.7"
        stroke="#FFFFFF"
        strokeOpacity="0.48"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="33.5" cy="13.5" r="2.6" fill="#F8FBFF" />
      <circle cx="20.8" cy="23.2" r="2.35" fill="#93C5FD" />
      <circle cx="12.6" cy="34.7" r="2.6" fill="#3B82F6" />
    </svg>
  )
}

export function SoftnetMark({
  className,
  glyphClassName,
  variant = "solid",
}: SoftnetMarkProps) {
  return (
    <span
      className={cn(
        "relative isolate inline-flex items-center justify-center overflow-hidden rounded-[1rem] border",
        variant === "solid"
          ? "border-black/8 bg-[linear-gradient(180deg,#151922_0%,#0B0D12_100%)] shadow-[0_16px_34px_rgba(15,23,42,0.18)]"
          : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] shadow-[0_18px_40px_rgba(2,6,23,0.22)] backdrop-blur-xl",
        className
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(147,197,253,0.22),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(59,130,246,0.18),transparent_38%)]" />
      <span className="absolute inset-0 opacity-[0.36] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:14px_14px]" />
      <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)]" />
      <SoftnetGlyph className={cn("relative z-10", glyphClassName)} />
    </span>
  )
}

export function SoftnetLockup({
  className,
  theme = "light",
  markVariant,
  compact = false,
}: SoftnetLockupProps) {
  const isDark = theme === "dark"

  return (
    <div className={cn("inline-flex items-center gap-3.5", className)}>
      <SoftnetMark
        className={cn(compact ? "h-11 w-11 rounded-[0.95rem]" : "h-12 w-12 rounded-[1rem]")}
        variant={markVariant ?? (isDark ? "glass" : "solid")}
      />

      <div>
        <span
          className={cn(
            "block text-[1.02rem] font-extrabold tracking-[-0.05em]",
            isDark ? "text-white" : "text-[#121317]"
          )}
        >
          Softnet <span className="text-primary">Digital</span>
        </span>

        <div
          className={cn(
            "mt-0.5 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.28em]",
            isDark ? "text-white/38" : "text-[#121317]/34"
          )}
        >
          <span>Estudio web</span>
          <span className="h-1 w-1 rounded-full bg-primary/80" />
          <span>Sistemas</span>
        </div>
      </div>
    </div>
  )
}

export function SoftnetMotif({ className, tone = "light" }: SoftnetMotifProps) {
  const stroke = tone === "dark" ? "rgba(147, 197, 253, 0.34)" : "rgba(59, 130, 246, 0.22)"
  const strokeStrong = tone === "dark" ? "rgba(191, 219, 254, 0.44)" : "rgba(59, 130, 246, 0.34)"
  const dot = tone === "dark" ? "#93C5FD" : "#3B82F6"

  return (
    <svg viewBox="0 0 260 140" className={className} fill="none" aria-hidden="true">
      <path
        d="M18 110C56 76 84 38 132 26C176 15 208 26 242 72"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 8"
      />
      <path
        d="M42 118C82 96 98 58 138 50C174 42 204 54 236 96"
        stroke={strokeStrong}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path d="M112 16H246" stroke={stroke} strokeWidth="1" strokeOpacity="0.58" />
      <circle cx="18" cy="110" r="4" fill={dot} />
      <circle cx="132" cy="26" r="3.5" fill={dot} />
      <circle cx="242" cy="72" r="4.5" fill={dot} />
    </svg>
  )
}

export function SoftnetBrandNote({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn("code-caption text-[0.66rem] font-semibold text-primary/82", className)}>
      {children ?? `${siteConfig.name} // signal system`}
    </div>
  )
}
