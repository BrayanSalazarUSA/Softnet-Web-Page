// Site Configuration - Easy to change brand name and details
export const siteConfig = {
  name: "Softnet",
  tagline: "Ingeniería de software de alta fidelidad para empresas que no se detienen.",
  description: "Diseñamos la arquitectura digital que tu empresa necesita para escalar: desde ecosistemas web de alto impacto hasta automatizaciones inteligentes que eliminan la fricción operativa.",
  url: "https://softnet.digital",
  email: "hola@softnet.digital",
  phone: "+34 600 000 000",
  address: "Medellín, Colombia",
  social: {
    linkedin: "https://linkedin.com/company/softnet-engineering",
    twitter: "https://twitter.com/softnet_tech",
    instagram: "https://instagram.com/softnet.digital",
  },
  keywords: [
    "desarrollo web premium",
    "automatización AI",
    "ingeniería de software",
    "arquitectura digital",
    "optimización de procesos",
    "soluciones corporativas",
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
    title: "Ecosistemas Web Elite",
    shortDescription: "Plataformas de alta fidelidad diseñadas para convertir y proyectar autoridad.",
    description: "No construimos simples sitios web. Desarrollamos infraestructuras digitales de alto rendimiento que funcionan como el motor principal de tu presencia comercial.",
    icon: "AppWindow",
    benefits: [
      "Diseño arquitectónico premium",
      "Optimización de conversión B2B",
      "Rendimiento de grado empresarial",
      "Seguridad y escalabilidad total",
    ],
  },
  {
    id: "automatizaciones",
    title: "Ingeniería de Automatización",
    shortDescription: "Sistemas inteligentes que eliminan tareas repetitivas y optimizan el ROI.",
    description: "Transformamos flujos de trabajo manuales en procesos automáticos de alta precisión. Ahorramos cientos de horas mensuales eliminando el error humano.",
    icon: "Workflow",
    benefits: [
      "Reducción de costos operativos",
      "Atención al cliente via AI 24/7",
      "Integración de sistemas (Zapier/Make)",
      "Escalabilidad operativa inmediata",
    ],
  },
  {
    id: "aplicaciones-medida",
    title: "Software Core a Medida",
    shortDescription: "Aplicaciones robustas diseñadas para el núcleo de tu operación.",
    description: "Desarrollamos el software que tu empresa necesita para centralizar datos, gestionar activos y tomar decisiones basadas en información en tiempo real.",
    icon: "LayoutDashboard",
    benefits: [
      "Propiedad total del código",
      "Dashboards de control total",
      "Centralización de data operativa",
      "Adaptabilidad al crecimiento",
    ],
  },
];

export const projects = [
  {
    id: "innova-access-ai",
    title: "Innova Access AI",
    category: "Security Engineering",
    description: "Sistema de control de acceso inteligente que automatiza el registro de residentes y visitantes mediante reconocimiento facial y análisis de datos en tiempo real.",
    technologies: ["Next.js", "Python Fast API", "OpenCV", "PostgreSQL"],
    results: "Cero fricción en accesos",
    image: "/projects/innova-access.png",
  },
  {
    id: "ai-investigator-evidence",
    title: "AI Investigator",
    category: "Forensic Software",
    description: "Software forense que accede a NVRs para búsqueda inteligente de objetivos, extracción automática de evidencias y redacción de informes técnicos mediante AI.",
    technologies: ["Python", "PyTorch", "Node.js", "FFmpeg"],
    results: "-90% Tiempo de reporte",
    image: "/projects/ai-investigator.png",
  },
  {
    id: "whatsapp-lead-engine",
    title: "LeadGen AI Engine",
    category: "Automation Hub",
    description: "Ecosistema de ventas que integra WhatsApp con CRM y AI para prospección, calificación y agendamiento automático de reuniones de alto valor.",
    technologies: ["Make / Zapier", "GPT-4o API", "WhatsApp API", "HubSpot"],
    results: "24/7 Ventas activas",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "restaurant-elite-portfolio",
    title: "Restaurant Elite",
    category: "Digital Experience",
    description: "Plataforma gastronómica de alta gama con sistema de reservas integrado, menú interactivo y panel administrativo para gestión de pedidos y analíticas.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    results: "UX Inmersiva & Conversión",
    image: "/projects/pro-restaurant.png",
  },
  {
    id: "cyber-dealer-crm",
    title: "Cyber-Dealer CRM",
    category: "Industrial SaaS",
    description: "Ecosistema de gestión para concesionarios de lujo que centraliza inventario, leads y post-venta con analíticas predictivas de mercado.",
    technologies: ["React", "Go", "PostgreSQL", "AWS"],
    results: "+45% Eficiencia ventas",
    image: "/projects/Concesionario.png",
  },
  {
    id: "bio-health-core",
    title: "Bio-Health Core",
    category: "HealthTech",
    description: "Infraestructura digital para clínicas de especialidad que unifica historias clínicas, telemedicina y agendamiento inteligente con cifrado militar.",
    technologies: ["Next.js", "Express", "MongoDB", "WebRTC"],
    results: "Gestión unificada total",
    image: "/projects/clinica.png",
  },
];

export const testimonials = [
  {
    name: "María García",
    role: "CEO",
    company: "Clínica Dental Premium",
    content: "Innova Systems transformó completamente nuestra presencia online. Las reservas aumentaron un 150% en los primeros tres meses. Entienden perfectamente el negocio.",
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
  { value: "50+", label: "Sistemas Desplegados" },
  { value: "99.9%", label: "Uptime Operativo" },
  { value: "15+", label: "Modelos AI Propios" },
  { value: "10k+", label: "Horas Automatizadas" },
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
