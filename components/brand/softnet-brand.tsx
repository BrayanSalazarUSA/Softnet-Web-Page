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

// Nuevo Isotipo: Rayo / Energía / Innovación (Rojo Ingeniería)
function SoftnetGlyph({ className }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 48 48" className={cn("h-[64%] w-[64%]", className)} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>

      {/* Rayo principal */}
      <path
        d="M26 8L12 26H24L20 40L36 20H24L26 8Z"
        fill={`url(#${gradientId})`}
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinejoin="miter"
      />
      {/* Detalle interno (brillo) */}
      <path
        d="M25 10L14.5 24H23.5L20.5 35L33 22H23.5L25 10Z"
        fill="#FFFFFF"
        opacity="0.5"
      />
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
        "relative isolate inline-flex items-center justify-center overflow-hidden rounded-none border border-red-200",
        variant === "solid"
          ? "bg-white shadow-[4px_4px_0_0_rgba(220,38,38,0.1)]"
          : "bg-white/80 backdrop-blur-md shadow-sm",
        className
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.05),transparent_40%)]" />
      <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.1),transparent)]" />
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
        className={cn(compact ? "h-11 w-11 rounded-none" : "h-12 w-12 rounded-none")}
        variant={markVariant ?? "solid"}
      />

      <div>
        <span
          className={cn(
            "block text-[1.02rem] font-extrabold tracking-[-0.02em]",
            isDark ? "text-white" : "text-slate-900"
          )}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Softnet <span className="text-red-600">Digital</span>
        </span>

        <div
          className={cn(
            "mt-px flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.25em] font-mono",
            isDark ? "text-white/40" : "text-slate-500"
          )}
        >
          <span>Agencia</span>
          <span className="h-1 w-1 rounded-none bg-red-600" />
          <span>Tech</span>
        </div>
      </div>
    </div>
  )
}

// Nuevo Motif decorativo: Nodos conectados / Energía
export function SoftnetMotif({ className, tone = "light" }: SoftnetMotifProps) {
  const stroke = tone === "dark" ? "rgba(220, 38, 38, 0.4)" : "rgba(220, 38, 38, 0.2)"
  const strokeStrong = tone === "dark" ? "rgba(220, 38, 38, 0.8)" : "rgba(220, 38, 38, 0.5)"
  const dot1 = "#DC2626"
  const dot2 = "#991B1B"
  const dot3 = "#EF4444"

  return (
    <svg viewBox="0 0 260 140" className={className} fill="none" aria-hidden="true">
      {/* Líneas de conexión tipo circuito/energía */}
      <path
        d="M20 110 L 80 110 L 120 50 L 180 50 L 220 90"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeDasharray="4 6"
      />
      <path
        d="M40 120 L 90 70 L 140 70 L 190 20 L 240 20"
        stroke={strokeStrong}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Nodos */}
      <rect x="18" y="108" width="4" height="4" fill={dot1} />
      <rect x="118" y="48" width="4" height="4" fill={dot2} />
      <rect x="218" y="88" width="4" height="4" fill={dot3} />
      
      <rect x="38" y="118" width="4" height="4" fill={dot3} />
      <rect x="138" y="68" width="4" height="4" fill={dot1} />
      <rect x="238" y="18" width="4" height="4" fill={dot2} />
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
    <div className={cn("code-caption font-mono text-[0.66rem] font-semibold text-red-600/80 uppercase tracking-widest", className)}>
      {children ?? `${siteConfig.name} // tech division`}
    </div>
  )
}
