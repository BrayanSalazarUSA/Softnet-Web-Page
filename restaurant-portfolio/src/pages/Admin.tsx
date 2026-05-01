import React, { useState } from 'react';
import { MOCK_DB } from '../data';
import { Users, CalendarDays, UtensilsCrossed, Settings, LogOut, CheckCircle2, XCircle, Clock, Search, Bell, Star } from 'lucide-react';
import '../index.css'; // Just for global reset/fonts if needed, but we can do inline or a specific class

export default function Admin() {
  const { reservationsList, restaurant } = MOCK_DB;

  // States
  const [activeTab, setActiveTab] = useState('reservations');
  const [reservations, setReservations] = useState(reservationsList);

  const pendingCount = reservations.filter(r => r.status === 'pending').length;
  const confirmedCount = reservations.filter(r => r.status === 'confirmed').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed': return <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Confirmada</span>;
      case 'pending': return <span style={{ background: 'rgba(234, 179, 8, 0.2)', color: '#facc15', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Pendiente</span>;
      case 'cancelled': return <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Cancelada</span>;
      default: return null;
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f5f5f5', fontFamily: 'Inter, sans-serif' }}>

      {/* Sidebar */}
      <div style={{ width: '280px', backgroundColor: '#121212', borderRight: '1px solid #262626', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #262626' }}>
          <h2 style={{ fontFamily: 'Playfair Display', color: '#D4AF37', fontSize: '1.5rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>EL DORADO</h2>
          <p style={{ color: '#a3a3a3', fontSize: '0.8rem', marginTop: '0.5rem' }}>Management Dashboard</p>
        </div>

        <div style={{ padding: '1.5rem 1rem', flex: 1 }}>
          <p style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingLeft: '0.5rem' }}>Menu Principal</p>

          <button
            onClick={() => setActiveTab('reservations')}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: activeTab === 'reservations' ? 'rgba(212, 175, 55, 0.1)' : 'transparent', color: activeTab === 'reservations' ? '#D4AF37' : '#a3a3a3', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', marginBottom: '0.5rem' }}>
            <CalendarDays size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem', flex: 1 }}>Reservas</span>
            {pendingCount > 0 && <span style={{ background: '#D4AF37', color: '#000', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '20px', fontWeight: 'bold' }}>{pendingCount}</span>}
          </button>

          <button
            onClick={() => setActiveTab('menu')}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: activeTab === 'menu' ? 'rgba(212, 175, 55, 0.1)' : 'transparent', color: activeTab === 'menu' ? '#D4AF37' : '#a3a3a3', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', marginBottom: '0.5rem' }}>
            <UtensilsCrossed size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Gestión de Menú</span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: activeTab === 'customers' ? 'rgba(212, 175, 55, 0.1)' : 'transparent', color: activeTab === 'customers' ? '#D4AF37' : '#a3a3a3', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', marginBottom: '0.5rem' }}>
            <Users size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Clientes (CRM)</span>
          </button>
        </div>

        <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid #262626' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'transparent', color: '#a3a3a3', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <Settings size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Configuración</span>
          </button>
          <a href="/" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', textAlign: 'left', textDecoration: 'none', marginTop: '0.5rem' }}>
            <LogOut size={20} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Salir al Website</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Top Header */}
        <header style={{ height: '80px', borderBottom: '1px solid #262626', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', backgroundColor: '#121212' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
            <input type="text" placeholder="Buscar reserva, cliente..." style={{ width: '100%', backgroundColor: '#0a0a0a', border: '1px solid #262626', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button style={{ background: 'none', border: 'none', color: '#a3a3a3', cursor: 'pointer', position: 'relative' }}>
              <Bell size={22} />
              <span style={{ position: 'absolute', top: -2, right: -2, background: '#ef4444', width: '8px', height: '8px', borderRadius: '50%' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>Maitre D'</p>
                <p style={{ fontSize: '0.75rem', color: '#a3a3a3', margin: 0 }}>Admin</p>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>MD</div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          {activeTab === 'reservations' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', margin: 0 }}>Control de Reservas</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ backgroundColor: '#262626', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}>Hoy</button>
                  <button style={{ backgroundColor: '#121212', color: '#a3a3a3', border: '1px solid #262626', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}>Mañana</button>
                  <button style={{ backgroundColor: '#121212', color: '#a3a3a3', border: '1px solid #262626', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}>Calendario</button>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
                  <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Reservas de Hoy</p>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>24</h3>
                  <p style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>+12% vs ayer</p>
                </div>
                <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
                  <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Comensales (Cubiertos)</p>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>86</h3>
                  <p style={{ color: '#4ade80', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>Aforo al 75%</p>
                </div>
                <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #facc15' }}>
                  <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Por Confirmar</p>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>{pendingCount}</h3>
                  <p style={{ color: '#a3a3a3', fontSize: '0.8rem', marginTop: '0.5rem' }}>Requieren atención</p>
                </div>
                <div style={{ backgroundColor: '#121212', border: '1px solid #262626', padding: '1.5rem', borderRadius: '8px' }}>
                  <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Proyección Ingresos</p>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: '#D4AF37' }}>$4,250</h3>
                  <p style={{ color: '#a3a3a3', fontSize: '0.8rem', marginTop: '0.5rem' }}>Basado en ticket promedio</p>
                </div>
              </div>

              {/* Table */}
              <div style={{ backgroundColor: '#121212', borderRadius: '8px', border: '1px solid #262626', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #262626', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Lista de Reservas</h3>
                  <button style={{ backgroundColor: '#D4AF37', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>+ Nueva Reserva Manual</button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid #262626' }}>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>ID</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Cliente</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Fecha / Hora</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Pax</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Zona</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Estado</th>
                      <th style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 500 }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((res, idx) => (
                      <tr key={res.id} style={{ borderBottom: idx === reservations.length - 1 ? 'none' : '1px solid #262626', backgroundColor: res.status === 'pending' ? 'rgba(234, 179, 8, 0.05)' : 'transparent' }}>
                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: '#666' }}>{res.id}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          <p style={{ margin: 0, fontWeight: 600 }}>{res.name}</p>
                          {res.specialRequest && <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: '#D4AF37', display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={12} /> {res.specialRequest}</p>}
                        </td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          <p style={{ margin: 0 }}>{res.date}</p>
                          <p style={{ margin: 0, color: '#a3a3a3', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {res.time}</p>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{res.guests}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#a3a3a3', fontSize: '0.9rem' }}>{res.space}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>{getStatusBadge(res.status)}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          {res.status === 'pending' ? (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button onClick={() => handleStatusChange(res.id, 'confirmed')} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '0.4rem', borderRadius: '4px', cursor: 'pointer' }} title="Confirmar"><CheckCircle2 size={16} /></button>
                              <button onClick={() => handleStatusChange(res.id, 'cancelled')} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '0.4rem', borderRadius: '4px', cursor: 'pointer' }} title="Rechazar"><XCircle size={16} /></button>
                            </div>
                          ) : (
                            <button style={{ background: 'transparent', color: '#666', border: '1px solid #333', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Ver Detalle</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab !== 'reservations' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', flexDirection: 'column', color: '#666' }}>
              <Settings size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
              <h2 style={{ fontFamily: 'Playfair Display', margin: 0, color: '#a3a3a3' }}>Módulo en Construcción</h2>
              <p>El módulo de {activeTab} estará disponible pronto en la versión real.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
