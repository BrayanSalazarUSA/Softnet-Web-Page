export const MOCK_DB = {
  agency: {
    name: 'AURA Luxury Real Estate',
    slogan: 'Curated Living in Medellín',
    description: 'Especialistas en propiedades de alto estándar, penthouses y villas en El Poblado y Llanogrande. Conectamos a inversores internacionales con el mercado inmobiliario más dinámico de Colombia.',
    phone: '+57 300 123 4567',
    email: 'invest@auramedellin.com',
    address: 'Edificio Milla de Oro, Piso 12, El Poblado, Medellín',
    stats: {
      properties: '150+',
      investors: '500+',
      roi: '12% Promedio'
    }
  },
  properties: [
    {
      id: 'p1',
      title: 'Penthouse Panorámico Energy',
      location: 'El Poblado, Medellín',
      type: 'Penthouse',
      status: 'En Venta',
      price: '$1,250,000 USD',
      features: {
        beds: 4,
        baths: 4.5,
        area: '320 m²'
      },
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'Espectacular penthouse dúplex con vistas 360° a la ciudad. Cuenta con piscina privada en el rooftop, automatización domótica completa y acabados importados.'
    },
    {
      id: 'p2',
      title: 'Villa Forestal Santa Elena',
      location: 'Santa Elena, Antioquia',
      type: 'Casa de Campo',
      status: 'Renta Corta',
      price: '$450 USD / Noche',
      features: {
        beds: 5,
        baths: 4,
        area: '450 m²'
      },
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'Retiro de lujo a solo 30 minutos de la ciudad. Diseño escandinavo rodeado de bosque nativo, ideal para escapadas premium o retiros corporativos.'
    },
    {
      id: 'p3',
      title: 'Loft Industrial Provenza',
      location: 'Provenza, Medellín',
      type: 'Loft',
      status: 'En Venta',
      price: '$420,000 USD',
      features: {
        beds: 1,
        baths: 2,
        area: '110 m²'
      },
      image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?auto=format&fit=crop&w=1200&q=80',
      description: 'Ubicación privilegiada en la zona más exclusiva. Diseño tipo loft industrial de Nueva York, techos de doble altura y balcón hacia la zona rosa.'
    },
    {
      id: 'p4',
      title: 'Mansión Moderna Llanogrande',
      location: 'Llanogrande, Antioquia',
      type: 'Villa',
      status: 'En Venta',
      price: '$2,800,000 USD',
      features: {
        beds: 6,
        baths: 7,
        area: '850 m²'
      },
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Obra maestra arquitectónica. Incluye cine privado, cancha de tenis, establos y lago privado. La cúspide del lujo campestre antioqueño.'
    }
  ],
  services: [
    {
      id: 's1',
      title: 'Gestión de Rentas Cortas (Airbnb)',
      description: 'Maximizamos el ROI de su propiedad. Nos encargamos del diseño de interiores, fotografía, manejo de plataformas, limpieza y atención VIP a huéspedes 24/7.',
      icon: 'Home'
    },
    {
      id: 's2',
      title: 'Asesoría de Inversión Extranjera',
      description: 'Asesoría legal, tributaria y cambiaria para inversores internacionales que buscan capitalizar el boom inmobiliario de Medellín.',
      icon: 'TrendingUp'
    },
    {
      id: 's3',
      title: 'Ventas Off-Market',
      description: 'Acceso a un portafolio privado de propiedades exclusivas que no están listadas al público. Discreción y eficiencia para clientes High-Net-Worth.',
      icon: 'Key'
    }
  ]
};
