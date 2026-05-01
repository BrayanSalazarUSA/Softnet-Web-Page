import React, { useEffect, useState } from 'react';
import { MOCK_DB } from './data';
import { MapPin, BedDouble, Bath, Maximize, Home, TrendingUp, Key, ChevronRight, Phone, Mail } from 'lucide-react';
import './index.css';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  const { agency, properties, services } = MOCK_DB;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Home': return <Home size={32} />;
      case 'TrendingUp': return <TrendingUp size={32} />;
      case 'Key': return <Key size={32} />;
      default: return <Home size={32} />;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar" style={{ padding: scrolled ? '1rem 0' : '1.5rem 0', backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', borderBottom: scrolled ? '1px solid #E5E5E5' : 'none' }}>
        <div className="container nav-content">
          <div className="nav-logo" style={{ color: scrolled ? 'var(--primary-color)' : '#FFF' }}>AURA</div>
          <div className="nav-links" style={{ color: scrolled ? 'var(--primary-color)' : '#FFF' }}>
            <a href="#properties" className="nav-link">Propiedades</a>
            <a href="#services" className="nav-link">Servicios</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="https://player.vimeo.com/external/494254095.sd.mp4?s=d63a4ba838bdc08b5e28ce15df2ceccb4f2c0fb2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content reveal">
            <h1 className="hero-title">Elevando el Estándar en <span>Medellín</span></h1>
            <p className="hero-subtitle">{agency.description}</p>
            <a href="#properties" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-color)', color: '#000' }}>Explorar Portafolio</a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-item reveal delay-100">
            <h3>{agency.stats.properties}</h3>
            <p>Propiedades Gestionadas</p>
          </div>
          <div className="stat-item reveal delay-200">
            <h3>{agency.stats.investors}</h3>
            <p>Inversores Activos</p>
          </div>
          <div className="stat-item reveal delay-300">
            <h3>{agency.stats.roi}</h3>
            <p>Retorno de Inversión</p>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="section container">
        <p className="section-subtitle reveal">Colección Exclusiva</p>
        <h2 className="section-title reveal">Propiedades Destacadas</h2>
        
        <div className="properties-grid" style={{ marginTop: '4rem' }}>
          {properties.map((prop, idx) => (
            <div key={prop.id} className={`property-card reveal delay-${(idx % 3 + 1)*100}`}>
              <div className="prop-img-container">
                <div className="prop-status">{prop.status}</div>
                <img src={prop.image} alt={prop.title} className="prop-img" />
              </div>
              <div className="prop-content">
                <div className="prop-price">{prop.price}</div>
                <h3 className="prop-title">{prop.title}</h3>
                <p className="prop-loc"><MapPin size={16} color="var(--accent-color)" /> {prop.location}</p>
                
                <div className="prop-features">
                  <div className="feat-item"><BedDouble size={18} /> {prop.features.beds}</div>
                  <div className="feat-item"><Bath size={18} /> {prop.features.baths}</div>
                  <div className="feat-item"><Maximize size={18} /> {prop.features.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal">
          <button className="btn btn-outline">Ver Todas las Propiedades</button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services-section">
        <div className="container">
          <p className="section-subtitle reveal" style={{ color: 'var(--accent-color)' }}>Property Management</p>
          <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Nuestros Servicios</h2>
          
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={service.id} className={`service-card reveal delay-${(idx % 3 + 1)*100}`}>
                <div className="service-icon">{getIcon(service.icon)}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper reveal">
            <div className="contact-info">
              <h2 style={{ color: '#FFF', fontSize: '2.5rem', marginBottom: '1rem' }}>Invierta con los Mejores</h2>
              <p style={{ color: '#AAA', marginBottom: '3rem' }}>Deje sus datos y uno de nuestros asesores de inversión se pondrá en contacto con usted en menos de 24 horas.</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Phone color="var(--accent-color)" />
                <span>{agency.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Mail color="var(--accent-color)" />
                <span>{agency.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <MapPin color="var(--accent-color)" />
                <span>{agency.address}</span>
              </div>
            </div>
            
            <div className="contact-form">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Solicitar Asesoría</h3>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nombre Completo" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Correo Electrónico" />
                </div>
                <div className="form-group">
                  <select className="form-control" style={{ color: 'var(--text-muted)' }}>
                    <option value="">¿Cuál es su objetivo principal?</option>
                    <option value="buy">Comprar Propiedad de Lujo</option>
                    <option value="rent">Buscar Renta Larga/Corta</option>
                    <option value="manage">Gestión de Propiedad (Property Management)</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={4} placeholder="Mensaje Adicional"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Solicitud</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="nav-logo" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>AURA</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{agency.slogan}</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Enlaces</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', lineHeight: '2' }}>
                <li><a href="#properties">Propiedades</a></li>
                <li><a href="#services">Servicios de Gestión</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Boletín de Inversión</h4>
              <div style={{ display: 'flex' }}>
                <input type="email" placeholder="Su email" className="form-control" style={{ borderRadius: '0' }} />
                <button className="btn btn-primary" style={{ padding: '0 1rem' }}><ChevronRight /></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AURA Luxury Real Estate. Medellín, Colombia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
