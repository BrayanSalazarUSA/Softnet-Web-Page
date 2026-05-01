import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Phone, Menu as MenuIcon, Share2, Star, ChevronRight, CheckCircle2, ShoppingBag, Map, GlassWater, PartyPopper } from 'lucide-react';
import { MOCK_DB } from '../data';
import '../index.css';

// Hook for scroll animations
function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Landing() {
  useScrollReveal();
  const { restaurant, spaces, delivery, menu, events, testimonials } = MOCK_DB;
  
  const [reservation, setReservation] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    space: 's1',
    specialRequest: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReservation({ name: '', date: '', time: '', guests: '2', space: 's1', specialRequest: '' });
    }, 6000);
  };

  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menu>);

  return (
    <div className="app">
      {/* Delivery Banner */}
      {delivery.available && (
        <div className="delivery-banner">
          <ShoppingBag size={18} />
          <span>Experiencia El Dorado en Casa - Pide ahora a través de nuestras plataformas exclusivas</span>
          <a href={delivery.link} style={{ textDecoration: 'underline', marginLeft: '1rem' }}>Ver Opciones</a>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar" style={{ 
        padding: scrolled ? '1rem 0' : '1.5rem 0', 
        backgroundColor: scrolled ? 'rgba(7,7,7,0.95)' : 'rgba(7,7,7,0)',
        top: delivery.available && !scrolled ? '50px' : '0' 
      }}>
        <div className="container nav-content">
          <div className="nav-logo">EL DORADO</div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Inicio</a>
            <a href="#story" className="nav-link">Esencia</a>
            <a href="#menu" className="nav-link">Menú</a>
            <a href="#events" className="nav-link">Eventos</a>
            <a href="#reservations" className="nav-link">Reservas</a>
          </div>
          <button className="btn btn-outline" style={{ display: 'none' }}><MenuIcon size={20}/></button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">El Arte de la <span>Alta Cocina</span></h1>
          <p className="hero-subtitle">{restaurant.description}</p>
          <div className="flex gap-6 justify-center">
            <a href="#reservations" className="btn btn-primary">Reservar Mesa</a>
            <a href="#menu" className="btn btn-outline">Explorar Menú</a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Descubrir</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Press Section */}
      <section className="press-section reveal">
        <div className="container press-grid">
          <div className="press-item">Guía Michelin</div>
          <div className="press-item">The 50 Best</div>
          <div className="press-item">Forbes Travel Guide</div>
          <div className="press-item">Wine Spectator</div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story-section section container">
        <div className="story-grid">
          <div className="story-image reveal-left">
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80" alt="Chef preparing fine dining dish" />
          </div>
          <div className="reveal-right">
            <p className="section-subtitle" style={{ textAlign: 'left' }}>Nuestra Esencia</p>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Una Tradición de Excelencia</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>{restaurant.history}</p>
            <p className="mb-8 text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>Cada ingrediente es seleccionado cuidadosamente de proveedores locales para garantizar la máxima frescura y calidad en su mesa.</p>
            <a href="#menu" className="btn btn-outline">Descubrir Platillos <ChevronRight size={18} style={{ marginLeft: '8px' }}/></a>
          </div>
        </div>
      </section>

      {/* Chef Quote Section */}
      <section className="quote-section">
        <div className="container reveal-scale">
          <p className="chef-quote">"La cocina es el lenguaje más universal. Un plato no solo debe alimentar el cuerpo, sino también contar una historia y tocar el alma."</p>
          <p className="chef-signature">Alejandro Mercader</p>
          <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Chef Ejecutivo</p>
        </div>
      </section>

      {/* Spaces Gallery */}
      <section id="spaces" className="spaces-section section">
        <div className="container">
          <p className="section-subtitle reveal">Nuestros Ambientes</p>
          <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Espacios Diseñados para Usted</h2>
          
          <div className="spaces-grid">
            {spaces.map((space, idx) => (
              <div key={space.id} className={`space-card reveal delay-${(idx+1)*100}`}>
                <img src={space.image} alt={space.name} className="space-img" />
                <div className="space-overlay">
                  <h3 className="space-title">{space.name}</h3>
                  <p className="space-desc">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section container">
        <p className="section-subtitle reveal">Experiencia Culinaria</p>
        <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>El Menú</h2>
        
        {Object.entries(groupedMenu).map(([category, items], catIdx) => (
          <div key={category} className="menu-category">
            <h3 className={`menu-category-title reveal delay-100`}>{category}</h3>
            <div className="menu-grid">
              {items.map((item, idx) => (
                <div key={item.id} className={`menu-card reveal delay-${(idx % 3 + 1)*100}`}>
                  {item.badge && <div className="menu-badge">{item.badge}</div>}
                  <div className="menu-img-wrapper">
                    <img src={item.image} alt={item.name} className="menu-img" />
                  </div>
                  <div className="menu-info">
                    <div className="menu-header">
                      <h4 className="menu-name">{item.name}</h4>
                      <span className="menu-price">${item.price}</span>
                    </div>
                    <p className="menu-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12 reveal">
          <a href="#" className="btn btn-outline">Descargar Menú Completo (PDF)</a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section section">
        <div className="container">
          <p className="section-subtitle reveal">Agenda Exclusiva</p>
          <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Próximos Eventos</h2>
          
          <div className="events-grid">
            {events.map((event, idx) => (
              <div key={event.id} className={`event-card reveal delay-${(idx % 2 + 1)*100}`}>
                <img src={event.image} alt={event.title} className="event-img" />
                <div className="event-overlay">
                  <span className="event-date">{event.date}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <p className="section-subtitle reveal">Lo que dicen de nosotros</p>
          <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Reseñas Destacadas</h2>
          
          <div className="testimonial-grid">
            {testimonials.map((test, idx) => (
              <div key={test.id} className={`testimonial-card reveal delay-${(idx+1)*100}`}>
                <div className="quote-icon">"</div>
                <div className="flex gap-1 mb-4 text-primary">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="testimonial-content">{test.content}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="section container">
        <div className="reservation-wrapper reveal">
          <div className="reservation-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Reserve su Mesa</h2>
            <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.15rem' }}>
              Asegure una experiencia inolvidable. Elija su zona preferida y si celebra una ocasión especial, déjenos saber.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div style={{ backgroundColor: 'var(--primary-color)', color: '#000', padding: '1rem', borderRadius: '50%' }}>
                  <PartyPopper size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFF' }}>¿Ocasión Especial?</h4>
                  <p className="text-muted">Cumpleaños, aniversarios o cenas románticas: personalizamos la velada.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ backgroundColor: 'var(--primary-color)', color: '#000', padding: '1rem', borderRadius: '50%' }}>
                  <GlassWater size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFF' }}>Eventos Corporativos</h4>
                  <p className="text-muted">Contáctenos directamente para reservar la Cava Privada o Salón Completo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reservation-form-container">
            {submitted ? (
              <div className="text-center flex flex-col items-center justify-center h-full reveal-scale">
                <CheckCircle2 size={64} className="text-primary mb-6" />
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Playfair Display' }}>¡Reserva Solicitada!</h3>
                <p className="text-muted" style={{ fontSize: '1.15rem' }}>
                  Su solicitud en <strong>{spaces.find(s => s.id === reservation.space)?.name}</strong> ha sido recibida. 
                  Nuestro equipo de hospitalidad revisará sus detalles y le enviará la confirmación oficial al correo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReservation}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'Playfair Display' }}>Detalles de la Reserva</h3>
                
                <div className="form-group">
                  <label className="form-label">Nombre Completo</label>
                  <input type="text" className="form-control" required value={reservation.name} onChange={e => setReservation({...reservation, name: e.target.value})} placeholder="Ej. Juan Pérez" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Fecha</label>
                    <input type="date" className="form-control" required value={reservation.date} onChange={e => setReservation({...reservation, date: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hora</label>
                    <input type="time" className="form-control" required value={reservation.time} onChange={e => setReservation({...reservation, time: e.target.value})} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Número de Personas</label>
                    <select className="form-control" value={reservation.guests} onChange={e => setReservation({...reservation, guests: e.target.value})}>
                      <option value="1">1 Persona</option>
                      <option value="2">2 Personas</option>
                      <option value="3">3 Personas</option>
                      <option value="4">4 Personas</option>
                      <option value="5">5 Personas</option>
                      <option value="6">6 Personas</option>
                      <option value="7">Grupos (+6)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Espacio Preferido</label>
                    <select className="form-control" value={reservation.space} onChange={e => setReservation({...reservation, space: e.target.value})}>
                      {spaces.map(space => (
                        <option key={space.id} value={space.id}>{space.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Ocasión o Solicitudes Especiales (Opcional)</label>
                  <textarea 
                    className="form-control" 
                    rows={3} 
                    value={reservation.specialRequest} 
                    onChange={e => setReservation({...reservation, specialRequest: e.target.value})} 
                    placeholder="¿Es un cumpleaños, aniversario, alergias, o necesita decoración especial?" 
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}>Solicitar Reserva</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="reveal">
              <h3 className="nav-logo mb-6">EL DORADO</h3>
              <p className="text-muted mb-6" style={{ maxWidth: '300px' }}>Un destino culinario donde cada plato es una obra maestra de sabor y presentación.</p>
              <div className="flex gap-4 mb-6">
                <a href="#" className="text-muted hover:text-primary" aria-label="Social Media"><Share2 size={20} /></a>
              </div>
              
              <h4 className="footer-title" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Contacto Directo</h4>
              <p className="footer-text"><Phone size={16} className="text-primary" /> {restaurant.phone}</p>
              <p className="footer-text"><MapPin size={16} className="text-primary" /> {restaurant.email}</p>
            </div>
            
            <div className="reveal delay-100">
              <h4 className="footer-title flex items-center gap-2"><Map size={20} className="text-primary"/> Nuestra Ubicación</h4>
              <p className="text-muted mb-2">{restaurant.address}</p>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d125323.36441703669!2d-74.1504953930499!3d4.648283717228833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1!5e0!3m2!1sen!2sco!4v1714421111111!5m2!1sen!2sco" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            
            <div className="reveal delay-200">
              <h4 className="footer-title">Horarios</h4>
              <div className="mb-6">
                <p className="text-muted flex justify-between border-b border-gray-800 pb-2 mb-2">
                  <span>Lunes a Jueves:</span> <span>13:00 - 23:00</span>
                </p>
                <p className="text-muted flex justify-between border-b border-gray-800 pb-2 mb-2">
                  <span>Viernes y Sábados:</span> <span className="text-primary">13:00 - 01:00</span>
                </p>
                <p className="text-muted flex justify-between pb-2">
                  <span>Domingos:</span> <span>12:00 - 20:00</span>
                </p>
              </div>

              <h4 className="footer-title mt-8">Newsletter</h4>
              <p className="text-muted mb-4" style={{ fontSize: '0.85rem' }}>Únase para recibir invitaciones a eventos privados y nuevos menús.</p>
              <div className="flex">
                <input type="email" placeholder="Su correo" className="form-control" style={{ borderRadius: '2px 0 0 2px', borderRight: 'none', padding: '0.75rem' }} />
                <button className="btn btn-primary" style={{ borderRadius: '0 2px 2px 0', padding: '0 1rem' }}>Unirse</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom reveal delay-300">
            <p>&copy; {new Date().getFullYear()} El Dorado Fine Dining. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Delivery</a>
              <a href="#" className="hover:text-primary">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
