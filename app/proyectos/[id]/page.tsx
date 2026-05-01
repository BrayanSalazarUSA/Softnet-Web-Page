import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-config"
import { CTA } from "@/components/sections/cta"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        <section className="section-dark relative overflow-hidden pt-32 pb-20 text-white">
          <div className="soft-grid absolute inset-0 opacity-10" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <Link
              href="/proyectos"
              className="mb-8 inline-flex items-center gap-2 text-white/72 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <span className="section-chip mb-4 text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  <span className="section-dot" />
                  {project.category}
                </span>
                <h1 className="mb-6 text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-white/68">
                  {project.description}
                </p>

                <div className="glow-pill mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-primary">{project.results}</span>
                </div>

                <div>
                  <p className="mb-3 text-sm text-white/60">Tecnologías utilizadas</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/88"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="surface-card rounded-[1rem] p-5">
                <div className="paper-card rounded-[1rem] p-6 text-[#111318]">
                  <div className="ink-panel relative flex aspect-[4/3] items-end overflow-hidden rounded-[0.9rem] p-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.04),rgba(8,10,14,0.58))]" />
                    <div>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/82">
                        Caso de trabajo
                      </span>
                      <p className="mt-5 text-4xl font-extrabold tracking-[-0.05em] text-white">
                        {project.results}
                      </p>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/62">
                        Solución diseñada para mejorar percepción, claridad operativa y resultado.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <div key={tech} className="paper-card-soft rounded-[0.8rem] p-4">
                        <p className="text-sm font-medium text-[#111318]">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-3xl font-extrabold tracking-[-0.04em] text-foreground">
                  Sobre el proyecto
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  Este proyecto representa un ejemplo de nuestro compromiso con la excelencia 
                  en el desarrollo digital. Trabajamos estrechamente con el cliente para entender 
                  sus necesidades específicas y crear una solución que superara sus expectativas.
                </p>
                <p className="mb-10 leading-relaxed text-muted-foreground">
                  Desde el diseño inicial hasta el lanzamiento final, cada decisión estuvo 
                  orientada a maximizar el impacto del proyecto y generar resultados medibles 
                  para el negocio.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Diseño responsive para todos los dispositivos",
                    "Optimización SEO completa",
                    "Integración con sistemas existentes",
                    "Panel de administración personalizado",
                    "Análisis y métricas en tiempo real",
                    "Base técnica preparada para seguir creciendo",
                  ].map((feature) => (
                    <div key={feature} className="paper-card rounded-[0.9rem] p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-px h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="sticky top-32 space-y-5">
                  <div className="paper-card rounded-[1rem] p-6">
                    <h3 className="mb-5 text-xl font-extrabold tracking-[-0.03em] text-foreground">
                      Detalles del proyecto
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm text-muted-foreground">Categoría</dt>
                        <dd className="font-medium text-foreground">{project.category}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Resultado principal</dt>
                        <dd className="font-medium text-primary">{project.results}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Stack tecnológico</dt>
                        <dd className="font-medium text-foreground">{project.technologies.join(", ")}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="surface-card rounded-[1rem] p-6 text-white">
                    <h3 className="text-xl font-extrabold tracking-[-0.03em]">
                      ¿Buscas algo similar?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/64">
                      Podemos diseñar una solución con el mismo nivel visual y técnico, pero aterrizada a tu negocio.
                    </p>
                    <div className="mt-5">
                      <Button asChild variant="outline" className="border-white/12 bg-white text-[#111318] hover:bg-[#F8FAFC]">
                        <Link href="/contacto">
                          Iniciar un proyecto similar
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wash bg-transparent py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-12 text-3xl font-extrabold tracking-[-0.04em] text-foreground">
              Otros proyectos
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {otherProjects.map((p) => (
                <Link key={p.id} href={`/proyectos/${p.id}`} className="group block">
                  <div className="paper-card rounded-[1rem] p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/28">
                    <div className="ink-panel relative flex aspect-[4/3] items-end overflow-hidden rounded-[0.9rem] p-5">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(min-width: 768px) 30vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.06),rgba(8,10,14,0.52))]" />
                      <div className="relative z-10">
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/82">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold tracking-[-0.04em] text-foreground transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
