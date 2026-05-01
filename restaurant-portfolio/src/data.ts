export const MOCK_DB = {
  restaurant: {
    name: 'El Dorado Fine Dining',
    description: 'Donde la tradición culinaria se encuentra con la innovación vanguardista. Una experiencia multisensorial en cada bocado.',
    address: 'Av. Principal 123, Distrito Gastronómico, Ciudad Metrópolis',
    phone: '+1 (555) 123-4567',
    email: 'reservas@eldorado.com',
    openingHours: {
      weekdays: 'Lun - Jue: 13:00 - 23:00',
      weekends: 'Vie - Sáb: 13:00 - 01:00',
      sunday: 'Dom: 12:00 - 20:00'
    },
    history: 'Fundado en 2015 por el Chef Ejecutivo Alejandro Mercader, El Dorado nació con la visión de elevar los ingredientes locales a través de técnicas francesas y contemporáneas. Cada plato cuenta una historia de pasión, precisión y profundo respeto por la naturaleza.'
  },
  spaces: [
    {
      id: 's1',
      name: 'Salón Principal',
      description: 'Nuestro comedor principal ofrece un ambiente vibrante con vistas a nuestra cocina abierta, perfecto para dejarse envolver por la energía del servicio.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 's2',
      name: 'La Terraza Botánica',
      description: 'Un oasis urbano climatizado rodeado de vegetación exuberante. Ideal para cócteles al atardecer y cenas bajo las estrellas.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 's3',
      name: 'Cava Privada',
      description: 'Un espacio íntimo y exclusivo para hasta 12 invitados, rodeado de nuestra colección de más de 1000 etiquetas de vino. Incluye servicio de sommelier dedicado.',
      image: 'https://images.unsplash.com/photo-1505995433366-e12047f3f144?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  delivery: {
    available: true,
    description: 'Lleve la experiencia El Dorado a la comodidad de su hogar. Nuestro menú de delivery ha sido diseñado específicamente para mantener la calidad y presentación intactas durante el traslado.',
    platforms: ['UberEats', 'Rappi', 'Direct Delivery'],
    link: '#'
  },
  menu: [
    {
      id: 'm1',
      category: 'Entradas',
      name: 'Tartar de Atún Rojo',
      description: 'Atún aleta amarilla, aguacate hass, emulsión de cítricos yuzu y crujiente de ajonjolí negro.',
      price: 24,
      image: 'https://images.unsplash.com/photo-1541592102781-ef0e8d27bbfa?auto=format&fit=crop&w=800&q=80',
      badge: 'Favorito'
    },
    {
      id: 'm2',
      category: 'Entradas',
      name: 'Burrata Trufada',
      description: 'Burrata artesanal fresca, tomates heirloom, pesto de albahaca genovesa y perlas de balsámico.',
      price: 22,
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm9',
      category: 'Entradas',
      name: 'Ostiones Frescos (Media Docena)',
      description: 'Ostiones de Kumamoto sobre hielo granizado, mignonette de chalotas, caviar de limón y tabasco ahumado.',
      price: 28,
      image: 'https://images.unsplash.com/photo-1565599837634-134bc3aadce8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm3',
      category: 'Platos Principales',
      name: 'Risotto de Setas Silvestres',
      description: 'Arroz carnaroli, mezcla de setas de temporada, trufa negra fresca y espuma de parmesano reggiano.',
      price: 38,
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826a07f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4',
      category: 'Platos Principales',
      name: 'Salmón Glaseado Miso',
      description: 'Filete de salmón salvaje, glaseado de miso blanco, espárragos asados y puré de coliflor ahumada.',
      price: 42,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm6',
      category: 'Platos Principales',
      name: 'Ribeye Prime 45 Días',
      description: 'Corte madurado en seco por 45 días, mantequilla de ajo negro, papas fondant y reducción de vino tinto.',
      price: 65,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      badge: 'Firma del Chef'
    },
    {
      id: 'm10',
      category: 'Platos Principales',
      name: 'Pato a la L\'Orange',
      description: 'Pechuga de pato curada, confit de pierna, puré de zanahoria especiado, gastrique de naranja y grand marnier.',
      price: 48,
      image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm5',
      category: 'Postres',
      name: 'Texturas de Cacao',
      description: 'Esfera de chocolate amargo 70%, mousse de avellana, tierra de cacao y coulis de frutos del bosque.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm11',
      category: 'Postres',
      name: 'Milhojas de Vainilla Madagascar',
      description: 'Hojaldre caramelizado, crema diplomática de vainilla, frambuesas frescas y sorbete de lichi.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm7',
      category: 'Cócteles de Autor',
      name: 'Humo y Especias',
      description: 'Mezcal artesanal, licor de chile ancho, jugo de piña asada, limón y borde de sal de gusano.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm8',
      category: 'Cócteles de Autor',
      name: 'Jardín Botánico',
      description: 'Ginebra infusionada con pepino y rosas, tónica premium, flor de saúco y romero fresco.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  events: [
    {
      id: 'e1',
      title: 'Noches de Jazz en Vivo',
      date: 'Todos los Jueves, 20:00 - 23:00',
      description: 'Acompañe su velada con las suaves melodías de los mejores cuartetos de jazz de la ciudad. Una atmósfera inigualable para cenas románticas o reuniones especiales.',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'e2',
      title: 'Cata de Vinos de Reserva',
      date: 'Último Viernes del Mes',
      description: 'Un viaje enológico guiado por nuestro Sommelier Principal. Degustación de 5 vinos de bodegas exclusivas maridados con bocadillos de autor.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'e3',
      title: 'Sunset DJ Sessions',
      date: 'Sábados de 17:00 a 20:00',
      description: 'Relájate en La Terraza Botánica con DJ sets de música house y lounge, mientras disfrutas de nuestra coctelería a mitad de precio.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'e4',
      title: 'Chef\'s Table: 10 Tiempos',
      date: 'A pedido (Reservación de 1 semana)',
      description: 'Una experiencia íntima frente a nuestra cocina abierta. El Chef preparará un menú degustación sorpresa de 10 tiempos exclusivamente para tu mesa.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Elena Rodríguez',
      role: 'Crítica Gastronómica',
      content: 'El Dorado no es solo un restaurante, es un viaje sensorial. El balance de sabores en el Risotto de Setas es sencillamente magistral. Una joya en la ciudad.'
    },
    {
      id: 't2',
      name: 'Martín Vargas',
      role: 'Cliente Frecuente',
      content: 'El nivel de atención al detalle es asombroso. Desde la decoración hasta la presentación de cada cóctel. Celebré mi aniversario aquí y superó todas las expectativas.'
    }
  ],
  reservationsList: [
    { id: 'RES-001', name: 'Carlos Díaz', date: 'Hoy', time: '19:30', guests: 2, space: 'Salón Principal', status: 'confirmed', specialRequest: 'Aniversario' },
    { id: 'RES-002', name: 'Laura Gómez', date: 'Hoy', time: '20:00', guests: 4, space: 'La Terraza Botánica', status: 'pending', specialRequest: '' },
    { id: 'RES-003', name: 'Roberto Sánchez', date: 'Hoy', time: '21:15', guests: 2, space: 'Salón Principal', status: 'confirmed', specialRequest: 'Alergia a los mariscos' },
    { id: 'RES-004', name: 'Empresa TechCorp', date: 'Mañana', time: '14:00', guests: 12, space: 'Cava Privada', status: 'confirmed', specialRequest: 'Cena de negocios, requieren proyector' },
    { id: 'RES-005', name: 'Andrea Bello', date: 'Mañana', time: '20:30', guests: 6, space: 'La Terraza Botánica', status: 'cancelled', specialRequest: 'Cumpleaños de la abuela' }
  ]
};
