import { NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Plane, Building, Map, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

export const Services = ({ onOpenBookingModal }) => {
  useDocumentTitle('Premium Travel Services & Concierge');
  const location = useLocation();

  // If path is exactly '/services', redirect to '/services/flights'
  if (location.pathname === '/services' || location.pathname === '/services/') {
    return <Navigate to="/services/flights" replace />;
  }

  const serviceTabs = [
    {
      to: '/services/flights',
      icon: <Plane size={18} />,
      label: 'Flights & Jets',
      desc: 'Commercial & charter flights'
    },
    {
      to: '/services/hotels',
      icon: <Building size={18} />,
      label: 'Luxury Stays',
      desc: 'Boutique hotels & villas'
    },
    {
      to: '/services/custom-tours',
      icon: <Map size={18} />,
      label: 'Custom Tours',
      desc: 'Private guides & itineraries'
    },
    {
      to: '/services/visa-insurance',
      icon: <ShieldCheck size={18} />,
      label: 'Visa & Protection',
      desc: 'Travel permits & global cover'
    }
  ];

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, var(--color-primary-light) 0%, transparent 100%)',
        padding: '60px 0 40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-pill">
            <Sparkles size={14} /> End-to-End Travel Services
          </span>
          <h1 className="section-title">
            Tailored Services For The Modern Explorer
          </h1>
          <p className="section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
            From priority charter flights to bespoke itineraries and expedited consular visas, TripNest handles every detail with precision.
          </p>

          {/* Nested Navigation Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '36px'
          }}>
            {serviceTabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) => `service-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span className="service-tab-icon">{tab.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{tab.label}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85 }} className="service-tab-desc">{tab.desc}</div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Nested Route Outlet */}
      <main className="container" style={{ marginTop: '40px' }}>
        <Outlet />
      </main>

      {/* Bottom CTA Banner */}
      <section className="container" style={{ marginTop: '60px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0369a1 0%, #0f172a 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '48px 36px',
          color: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
              Need a completely custom arrangement?
            </h3>
            <p style={{ opacity: 0.85, fontSize: '1rem', maxWidth: '540px' }}>
              Speak with a dedicated TripNest destination architect today. We can customize flights, luxury accommodations, and private tours according to your exact preferences.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="btn btn-accent btn-lg"
            >
              <Sparkles size={18} /> Request Custom Quote
            </button>
            <a
              href="tel:+919876543210"
              className="btn btn-secondary btn-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <PhoneCall size={18} /> Call Concierge (+91 9876543210)
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .service-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background-color: var(--bg-card);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          cursor: pointer;
          text-decoration: none;
        }
        .service-tab-btn:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        .service-tab-btn.active {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
          box-shadow: var(--shadow-primary);
        }
        .service-tab-btn.active .service-tab-desc {
          color: #e0f2fe;
        }
        .service-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .service-tab-desc {
            display: none;
          }
          .service-tab-btn {
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
