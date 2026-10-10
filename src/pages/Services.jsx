import { NavLink, Outlet } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  Plane,
  Building,
  Map,
  ShieldCheck,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import './Services.css';

export const Services = ({ onOpenBookingModal }) => {
  useDocumentTitle('Our Services — Flights, Hotels, Custom Tours, Visa & Insurance');

  const serviceTabs = [
    {
      to: '/services/flights',
      label: 'Flights & Charters',
      desc: 'Domestic & Global routes',
      icon: <Plane size={20} />
    },
    {
      to: '/services/hotels',
      label: 'Hotels & Resorts',
      desc: 'Handpicked verified sanctuaries',
      icon: <Building size={20} />
    },
    {
      to: '/services/custom-tours',
      label: 'Custom Itineraries',
      desc: 'Tailor-made private journeys',
      icon: <Map size={20} />
    },
    {
      to: '/services/visa-insurance',
      label: 'Visa & Insurance',
      desc: 'Fast-track protection',
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <div className="services-page-wrap">
      {/* Header Banner */}
      <section className="services-hero">
        <div className="container">
          <span className="section-pill">
            <Sparkles size={14} /> End-to-End Travel Services
          </span>
          <h1 className="section-title">
            Tailored Services For The Modern Explorer
          </h1>
          <p className="section-desc services-hero-desc">
            From priority charter flights to bespoke itineraries and expedited consular visas, TripNest handles every detail with precision.
          </p>

          {/* Nested Navigation Tabs */}
          <div className="services-tabs-row">
            {serviceTabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) => `service-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span className="service-tab-icon">{tab.icon}</span>
                <div className="services-tab-text">
                  <div className="services-tab-title">{tab.label}</div>
                  <div className="service-tab-desc">{tab.desc}</div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Nested Route Outlet */}
      <main className="container services-main-outlet">
        <Outlet />
      </main>

      {/* Bottom CTA Banner */}
      <section className="container services-cta-section">
        <div className="services-cta-banner">
          <div>
            <h3 className="services-cta-title">
              Need a completely custom arrangement?
            </h3>
            <p className="services-cta-desc">
              Speak with a dedicated TripNest destination architect today. We can customize flights, luxury accommodations, and private tours according to your exact preferences.
            </p>
          </div>

          <div className="services-cta-actions">
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="btn btn-accent btn-lg"
            >
              <Sparkles size={18} /> Request Custom Quote
            </button>
            <a
              href="tel:+919876543210"
              className="btn btn-secondary btn-lg services-cta-phone-btn"
            >
              <PhoneCall size={18} /> Call Concierge (+91 9876543210)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
