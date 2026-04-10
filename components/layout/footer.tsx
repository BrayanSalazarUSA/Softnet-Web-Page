import Link from "next/link"
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { navLinks, services, siteConfig } from "@/lib/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickServices = services.slice(0, 4)

  return (
    <footer className="section-dark relative overflow-hidden text-white">
      <div className="soft-grid absolute inset-0 opacity-[0.05]" />
      <div className="container relative z-10 mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="logo-mark flex h-11 w-11 items-center justify-center rounded-[0.95rem]">
                <span className="text-base font-extrabold text-primary-foreground">
                  {siteConfig.name.charAt(0)}
                </span>
              </div>

              <div>
                <span className="block text-lg font-extrabold tracking-[-0.05em] text-white">
                  {siteConfig.name}
                </span>
                <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em] text-white/38">
                  Desarrollo web y sistemas
                </span>
              </div>
            </Link>

            <h3 className="mt-8 max-w-[12ch] text-4xl font-extrabold tracking-[-0.055em] text-white">
              Presencia clara. Sistema sólido. Una web que se siente seria desde el primer vistazo.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/64">
              Diseñamos software, sitios y automatizaciones para empresas que necesitan una presencia
              mejor presentada y una operación más ordenada.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                Navegación
              </p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/64 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                Servicios clave
              </p>
              <ul className="mt-5 space-y-3">
                {quickServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/servicios#${service.id}`}
                      className="group inline-flex items-center gap-2 text-sm text-white/64 transition-colors hover:text-white"
                    >
                      {service.title}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                Contacto
              </p>

              <div className="mt-5 space-y-4 text-sm text-white/66">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  {siteConfig.address}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/28 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 lg:flex-row lg:items-center">
          <p>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacidad" className="transition-colors hover:text-white">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
