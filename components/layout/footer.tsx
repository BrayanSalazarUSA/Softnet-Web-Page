import Link from "next/link"
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, TerminalSquare } from "lucide-react"
import { SoftnetLockup } from "@/components/brand/softnet-brand"
import { navLinks, services, siteConfig } from "@/lib/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickServices = services.slice(0, 4)

  return (
    <footer className="bg-[#050505] relative overflow-hidden border-t border-white/5 text-slate-400">
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '80px 80px',
               maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }} 
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="inline-block">
              <SoftnetLockup theme="dark" markVariant="solid" compact />
            </Link>

            <h3 className="mt-12 max-w-[15ch] text-5xl md:text-6xl font-black tracking-tighter text-white font-heading leading-tight">
              Arquitectura Digital <span className="text-primary italic">Escalable.</span>
            </h3>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-500 font-medium">
              Diseñamos software, sitios y automatizaciones para empresas que necesitan una presencia mejor presentada y una operación más ordenada.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">
                // NAVEGACIÓN
              </p>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-all hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-12 mb-6">
                // SERVICIOS CLAVE
              </p>
              <ul className="space-y-4">
                {quickServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/servicios#${service.id}`}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-all hover:text-white"
                    >
                      {service.title}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">
                // CONTACTO TÉCNICO
              </p>

              <div className="space-y-6 text-sm text-slate-400">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 transition-all hover:text-white group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 transition-all hover:text-white group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="leading-tight">{siteConfig.address}</span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3">
                {[
                  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
                  { href: siteConfig.social.twitter, label: "Twitter", icon: Twitter },
                  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(0,200,150,0.1)] group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 text-[10px] text-slate-600 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3 font-mono uppercase tracking-[0.3em]">
            <TerminalSquare className="h-4 w-4 text-primary animate-pulse" />
            <p>© {currentYear} {siteConfig.name}. SYSTEM.READY</p>
          </div>
          <div className="flex items-center gap-8 font-mono uppercase tracking-[0.3em]">
            <Link href="/privacidad" className="transition-all hover:text-primary hover:underline decoration-primary underline-offset-4">
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-all hover:text-primary hover:underline decoration-primary underline-offset-4">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
