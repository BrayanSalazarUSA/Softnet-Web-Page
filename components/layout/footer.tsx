import Link from "next/link"
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, TerminalSquare } from "lucide-react"
import { SoftnetLockup } from "@/components/brand/softnet-brand"
import { navLinks, services, siteConfig } from "@/lib/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickServices = services.slice(0, 4)

  return (
    <footer className="bg-slate-900 relative overflow-hidden border-t-4 border-red-600 text-slate-300">
      {/* Precision Grid Background - Dark Mode */}
      <div className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4 bg-slate-800 border border-slate-700 p-4">
              <SoftnetLockup theme="dark" markVariant="solid" />
            </Link>

            <h3 className="mt-8 max-w-[15ch] text-3xl font-bold tracking-[-0.02em] text-white">
              Arquitectura Digital <span className="text-red-500">Escalable.</span>
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 font-medium">
              Diseñamos software, sitios y automatizaciones para empresas que necesitan una presencia mejor presentada y una operación más ordenada. Sin abstracciones innecesarias.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-500 mb-4">
                // NAVEGACIÓN
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-500 mt-8 mb-4">
                // SERVICIOS CLAVE
              </p>
              <ul className="space-y-3">
                {quickServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/servicios#${service.id}`}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {service.title}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-500 mb-4">
                // CONTACTO TÉCNICO
              </p>

              <div className="space-y-4 text-sm text-slate-400">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-red-500" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-red-500" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-red-500" />
                  {siteConfig.address}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
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
                    className="flex h-10 w-10 items-center justify-center border border-slate-700 bg-slate-800 text-slate-400 transition-colors hover:border-red-500 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest">
            <TerminalSquare className="h-4 w-4 text-red-500" />
            <p>© {currentYear} {siteConfig.name}. SYSTEM.READY</p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[0.65rem] uppercase tracking-widest">
            <Link href="/privacidad" className="transition-colors hover:text-white hover:underline decoration-red-500 underline-offset-4">
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white hover:underline decoration-red-500 underline-offset-4">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
