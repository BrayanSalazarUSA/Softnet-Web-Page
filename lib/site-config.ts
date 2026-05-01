// Site Configuration - Easy to change brand name and details
export const siteConfig = {
  name: "Softnet",
  tagline: "Deja de perseguir la tecnología. Empieza a usarla para vender más.",
  description: "Creamos la infraestructura digital que las PyMEs necesitan para escalar: desde webs que convierten hasta procesos que funcionan solos. Tu aliado estratégico en crecimiento digital.",
  url: "https://softnet.digital",
  email: "contacto@softnet.digital",
  phone: "+34 900 000 000",
  address: "Madrid, España",
  social: {
    linkedin: "https://linkedin.com/company/softnet",
    twitter: "https://twitter.com/softnet",
    instagram: "https://instagram.com/softnet",
  },
  keywords: [
    "desarrollo web",
    "automatización de procesos",
    "aplicaciones a medida",
    "crecimiento digital",
    "ventas online",
    "eficiencia empresarial",
  ],
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const services = [
  {
    id: "paginas-web",
    title: "Páginas Web Profesionales",
    shortDescription: "Una vitrina digital de alto nivel que genera confianza y captación automática de prospectos.",
    description: "No se trata de tener una \"página bonita\", se trata de tener una herramienta que trabaje para ti 24/7. Creamos sitios diseñados para convertir visitantes en clientes reales.",
    icon: "AppWindow",
    benefits: [
      "Diseño orientado a ventas",
      "Confianza inmediata del cliente",
      "Optimización para móviles",
      "Velocidad de carga extrema",
    ],
  },
  {
    id: "automatizaciones",
    title: "Automatización de Procesos",
    shortDescription: "Sistemas que responden, venden y organizan por ti mientras te enfocas en lo que importa.",
    description: "Identificamos las tareas repetitivas que te quitan tiempo y las ponemos en piloto automático. Ventas, atención al cliente y seguimiento sin errores humanos.",
    icon: "Workflow",
    benefits: [
      "Ahorro masivo de tiempo",
      "Atención 24/7 sin equipo extra",
      "Eliminación de errores manuales",
      "Escalabilidad sin estrés",
    ],
  },
  {
    id: "aplicaciones-medida",
    title: "Aplicaciones a Medida",
    shortDescription: "Software diseñado exclusivamente para tu flujo de trabajo y control total.",
    description: "¿El Excel ya no es suficiente? Desarrollamos herramientas que se adaptan a tu forma única de trabajar, centralizando tu operación y dándote datos en tiempo real.",
    icon: "LayoutDashboard",
    benefits: [
      "Control total de tu operación",
      "Datos en tiempo real para decidir",
      "Centralización de procesos",
      "Propiedad de tu tecnología",
    ],
  },
];

export const projects = [
  {
    id: "clinica-salud",
    title: "Clínica Aura",
    category: "Web Corporativa",
    description: "Sitio para clínica con agenda, especialidades y una lectura visual más premium para captar pacientes con confianza.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    results: "150% más reservas online",
    image: "/projects/clinica.png",
  },
  {
    id: "inmobiliaria-moderna",
    title: "Inmobiliaria Moderna",
    category: "Aplicación Web",
    description: "Plataforma inmobiliaria con búsqueda, activos destacados y una experiencia pensada para vender mejor cada propiedad.",
    technologies: ["React", "Node.js", "MongoDB", "Three.js"],
    results: "200+ propiedades gestionadas",
    image: "/projects/inmobiliaria.png",
  },
  {
    id: "bufete-legal",
    title: "Estudio Atlas",
    category: "Web Corporativa",
    description: "Web corporativa para servicios B2B con una presencia más sólida, mejor estructura comercial y mensaje más claro.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    results: "80% más consultas cualificadas",
    image: "/projects/agencia.png",
  },
];

export const testimonials = [
  {
    name: "María García",
    role: "CEO",
    company: "Clínica Dental Premium",
    content: "Softnet transformó completamente nuestra presencia online. Las reservas aumentaron un 150% en los primeros tres meses. Entienden perfectamente el negocio.",
    rating: 5,
    image: "/testimonials/testimonial-1.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director General",
    company: "Inmobiliaria Horizonte",
    content: "La aplicación web que desarrollaron revolucionó nuestra forma de trabajar. La inversión se recuperó en menos de 6 meses gracias al aumento en eficiencia.",
    rating: 5,
    image: "/testimonials/testimonial-2.jpg",
  },
];

export const stats = [
  { value: "100%", label: "Enfoque en Resultados" },
  { value: "24/7", label: "Sistemas Activos" },
  { value: "0", label: "Palabras Técnicas" },
  { value: "ROI", label: "Nuestra Prioridad" },
];

export const processSteps = [
  {
    step: 1,
    title: "Diagnóstico",
    description: "Entendemos tus cuellos de botella y tus metas de venta.",
  },
  {
    step: 2,
    title: "Estrategia",
    description: "Diseñamos el plano digital de lo que vamos a construir para ganar.",
  },
  {
    step: 3,
    title: "Construcción",
    description: "Ejecutamos con precisión técnica y diseño de alto impacto.",
  },
  {
    step: 4,
    title: "Lanzamiento",
    description: "Ponemos el motor en marcha y nos aseguramos de que vuele.",
  },
];

export const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web?",
    answer: "El tiempo varía según la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio corporativo completo toma entre 4-8 semanas. Las aplicaciones web personalizadas pueden requerir 2-4 meses dependiendo de las funcionalidades.",
  },
  {
    question: "¿Qué incluye el servicio de diseño web?",
    answer: "Nuestro servicio incluye diseño UI/UX personalizado, desarrollo frontend y backend, optimización SEO, configuración de hosting, certificado SSL, capacitación y 30 días de soporte post-lanzamiento.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Sí, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones de seguridad, backups, monitoreo de rendimiento, correcciones de bugs y horas de soporte técnico.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer: "Trabajamos principalmente con pequeñas y medianas empresas que buscan profesionalizar su presencia digital. Adaptamos nuestras soluciones y presupuestos a las necesidades específicas de cada cliente.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer: "Generalmente dividimos el proyecto en hitos con pagos asociados: un anticipo inicial para comenzar, un pago intermedio al aprobar el diseño, y el pago final antes del lanzamiento.",
  },
  {
    question: "¿Pueden integrar mi web con otras herramientas?",
    answer: "Sí, integramos con CRMs (HubSpot, Salesforce), plataformas de email marketing (Mailchimp, ActiveCampaign), pasarelas de pago (Stripe, PayPal), y prácticamente cualquier servicio con API disponible.",
  },
];

export const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Stripe", category: "Payments" },
];
