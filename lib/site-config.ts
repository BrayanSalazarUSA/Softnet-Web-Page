// Site Configuration - Easy to change brand name and details
export const siteConfig = {
  name: "Softnet Digital",
  tagline: "Desarrollo web, sistemas y automatización para empresas",
  description: "Diseñamos y desarrollamos presencia digital, software interno y automatización para empresas que necesitan verse serias, vender mejor y operar con una base técnica sólida.",
  url: "https://softnetdigital.com",
  email: "contacto@softnetdigital.com",
  phone: "+34 900 000 000",
  address: "Madrid, España",
  social: {
    linkedin: "https://linkedin.com/company/softnetdigital",
    twitter: "https://twitter.com/softnetdigital",
    instagram: "https://instagram.com/softnetdigital",
  },
  keywords: [
    "desarrollo web",
    "diseño web",
    "páginas web empresariales",
    "software a medida",
    "automatización de procesos",
    "soluciones digitales",
    "aplicaciones web",
    "landing pages",
    "tiendas online",
    "sistemas internos",
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
    id: "web-corporativa",
    title: "Páginas Web Corporativas",
    shortDescription: "Sitios web profesionales que transmiten confianza y generan resultados.",
    description: "Desarrollamos sitios web corporativos de alto nivel que reflejan la identidad de tu empresa. Diseño moderno, rendimiento optimizado y experiencia de usuario excepcional.",
    icon: "Building2",
    benefits: [
      "Diseño personalizado a tu marca",
      "Optimización SEO incluida",
      "Responsive en todos los dispositivos",
      "Velocidad de carga optimizada",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    shortDescription: "Páginas de conversión diseñadas para captar leads y vender.",
    description: "Landing pages estratégicas enfocadas en conversión. Cada elemento diseñado para guiar al usuario hacia la acción que necesitas.",
    icon: "Target",
    benefits: [
      "Enfoque en conversión",
      "A/B testing ready",
      "Integración con CRM",
      "Análisis de métricas",
    ],
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online",
    shortDescription: "E-commerce completo para vender tus productos 24/7.",
    description: "Tiendas online robustas y escalables. Gestión de inventario, pagos seguros y experiencia de compra optimizada para maximizar ventas.",
    icon: "ShoppingCart",
    benefits: [
      "Pasarelas de pago seguras",
      "Gestión de inventario",
      "Diseño orientado a ventas",
      "Integración logística",
    ],
  },
  {
    id: "aplicaciones-web",
    title: "Aplicaciones Web",
    shortDescription: "Soluciones web personalizadas para tu negocio.",
    description: "Desarrollamos aplicaciones web a medida que automatizan procesos, mejoran la productividad y escalan con tu negocio.",
    icon: "AppWindow",
    benefits: [
      "Arquitectura escalable",
      "Interfaz intuitiva",
      "Integración con APIs",
      "Soporte continuo",
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización de Procesos",
    shortDescription: "Optimiza operaciones y reduce costos con automatización inteligente.",
    description: "Identificamos tareas repetitivas en tu empresa y las automatizamos. Ahorra tiempo, reduce errores y enfócate en lo que importa.",
    icon: "Workflow",
    benefits: [
      "Análisis de procesos",
      "Integración de sistemas",
      "Reducción de errores",
      "ROI medible",
    ],
  },
  {
    id: "dashboards",
    title: "Dashboards y Paneles",
    shortDescription: "Visualiza datos clave para tomar mejores decisiones.",
    description: "Paneles administrativos y dashboards que centralizan la información de tu negocio. Datos en tiempo real para decisiones informadas.",
    icon: "LayoutDashboard",
    benefits: [
      "Datos en tiempo real",
      "Visualización intuitiva",
      "Reportes automatizados",
      "Acceso seguro",
    ],
  },
  {
    id: "sistemas-internos",
    title: "Sistemas Internos",
    shortDescription: "Software empresarial a medida para tu operación.",
    description: "Sistemas internos que se adaptan a tu forma de trabajar. CRM, ERP, gestión de proyectos y más, diseñados para tu equipo.",
    icon: "Server",
    benefits: [
      "100% personalizado",
      "Escalable según demanda",
      "Capacitación incluida",
      "Mantenimiento continuo",
    ],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Web",
    shortDescription: "Tu sitio siempre actualizado, seguro y funcionando.",
    description: "Servicio de mantenimiento continuo para que tu web esté siempre al día. Actualizaciones, seguridad, backups y soporte técnico.",
    icon: "Wrench",
    benefits: [
      "Actualizaciones regulares",
      "Monitoreo 24/7",
      "Backups automáticos",
      "Soporte prioritario",
    ],
  },
  {
    id: "backend-databases",
    title: "Backend y Bases de Datos",
    shortDescription: "Infraestructura robusta para aplicaciones exigentes.",
    description: "Arquitectura backend sólida y bases de datos optimizadas. APIs REST, microservicios y soluciones cloud que escalan.",
    icon: "Database",
    benefits: [
      "APIs RESTful",
      "Bases de datos optimizadas",
      "Arquitectura escalable",
      "Seguridad avanzada",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Soluciones Cloud",
    shortDescription: "Despliegue y gestión en la nube con AWS y más.",
    description: "Migramos y desplegamos tu infraestructura en la nube. AWS, configuración de servidores, CI/CD y DevOps profesional.",
    icon: "Cloud",
    benefits: [
      "AWS certified",
      "Alta disponibilidad",
      "Escalado automático",
      "Costos optimizados",
    ],
  },
];

export const projects = [
  {
    id: "clinica-salud",
    title: "Clínica Salud Premium",
    category: "Web Corporativa",
    description: "Portal médico completo con sistema de citas online y gestión de pacientes.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    results: "150% aumento en reservas online",
    image: "/projects/project-1.jpg",
  },
  {
    id: "inmobiliaria-moderna",
    title: "Inmobiliaria Moderna",
    category: "Aplicación Web",
    description: "Plataforma inmobiliaria con búsqueda avanzada y tours virtuales 360°.",
    technologies: ["React", "Node.js", "MongoDB", "Three.js"],
    results: "200+ propiedades gestionadas",
    image: "/projects/project-2.jpg",
  },
  {
    id: "bufete-legal",
    title: "Bufete Vázquez & Asociados",
    category: "Web Corporativa",
    description: "Sitio institucional para firma de abogados con blog y área de clientes.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    results: "80% más consultas cualificadas",
    image: "/projects/project-3.jpg",
  },
  {
    id: "constructora-elite",
    title: "Constructora Elite",
    category: "Landing Page",
    description: "Landing de alto impacto para captación de inversores inmobiliarios.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    results: "45% tasa de conversión",
    image: "/projects/project-4.jpg",
  },
  {
    id: "dashboard-logistica",
    title: "LogiTrack Dashboard",
    category: "Dashboard",
    description: "Panel de control para gestión de flotas y seguimiento de envíos en tiempo real.",
    technologies: ["React", "D3.js", "Node.js", "WebSockets"],
    results: "30% reducción en tiempos de entrega",
    image: "/projects/project-5.jpg",
  },
  {
    id: "ecommerce-moda",
    title: "ModaStyle E-commerce",
    category: "Tienda Online",
    description: "Tienda de moda online con experiencia de compra premium y pagos internacionales.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Cloudinary"],
    results: "€500K+ en ventas anuales",
    image: "/projects/project-6.jpg",
  },
];

export const testimonials = [
  {
    name: "María García",
    role: "CEO",
    company: "Clínica Dental Premium",
    content: "Softnet Digital transformó completamente nuestra presencia online. Las reservas aumentaron un 150% en los primeros tres meses. Profesionales excepcionales.",
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
  {
    name: "Ana Martínez",
    role: "Socia Fundadora",
    company: "Bufete AM Abogados",
    content: "Un equipo que entiende las necesidades del negocio. No solo crearon un sitio web bonito, sino una herramienta que realmente genera clientes.",
    rating: 5,
    image: "/testimonials/testimonial-3.jpg",
  },
  {
    name: "Roberto Sánchez",
    role: "CTO",
    company: "LogiTrack Solutions",
    content: "El dashboard que desarrollaron nos permite tomar decisiones en tiempo real. La calidad del código y la documentación son impecables.",
    rating: 5,
    image: "/testimonials/testimonial-4.jpg",
  },
];

export const stats = [
  { value: "150+", label: "Proyectos Entregados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "8+", label: "Años de Experiencia" },
  { value: "50+", label: "Clientes Activos" },
];

export const processSteps = [
  {
    step: 1,
    title: "Descubrimiento",
    description: "Analizamos tu negocio, objetivos y competencia para definir la estrategia perfecta.",
  },
  {
    step: 2,
    title: "Diseño",
    description: "Creamos prototipos y diseños que reflejan tu marca y optimizan la experiencia de usuario.",
  },
  {
    step: 3,
    title: "Desarrollo",
    description: "Construimos tu solución con las mejores tecnologías y prácticas del sector.",
  },
  {
    step: 4,
    title: "Lanzamiento",
    description: "Desplegamos tu proyecto con pruebas exhaustivas y te acompañamos en el lanzamiento.",
  },
  {
    step: 5,
    title: "Crecimiento",
    description: "Mantenemos y evolucionamos tu solución según las necesidades de tu negocio.",
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
