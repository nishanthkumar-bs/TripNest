import { SERVICES_DATA } from '../../data/servicesData';
import Badge from '../../components/common/Badge';
import { Building, CheckCircle2, HelpCircle } from 'lucide-react';
import './ServiceSubpage.css';

export const HotelsService = ({ onOpenBookingModal }) => {
  const service = SERVICES_DATA.hotels;

  return (
    <div className="service-subpage-layout">
      {/* Hero Service Card */}
      <div className="card service-hero-card">
        <div className="service-hero-grid">
          <div className="service-hero-content">
            <Badge variant="success" className="mb-2">{service.badge}</Badge>
            <h2 className="service-hero-title">
              {service.title}
            </h2>
            <p className="service-hero-desc">
              {service.description}
            </p>

            <div className="service-hero-actions">
              <button
                onClick={() => onOpenBookingModal && onOpenBookingModal()}
                className="btn btn-primary"
              >
                <Building size={16} /> Reserve Hotel Stays
              </button>
              <a href="#features" className="btn btn-secondary">
                View Inclusions
              </a>
            </div>
          </div>

          <div className="service-hero-img-wrap">
            <img
              src={service.heroImage}
              alt={service.title}
              className="service-hero-img"
            />
          </div>
        </div>
      </div>

      {/* Service Features Grid */}
      <div id="features">
        <h3 className="service-features-heading">
          The TripNest Hospitality Difference
        </h3>
        <div className="grid-2">
          {service.features.map((feat, idx) => (
            <div key={idx} className="card service-feature-card">
              <div className="service-feature-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="service-feature-title">
                  {feat.title}
                </h4>
                <p className="service-feature-desc">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotel FAQ Accordion */}
      <div className="card service-faq-card">
        <h3 className="service-faq-header">
          <HelpCircle size={22} color="var(--color-primary)" />
          Frequently Asked Questions
        </h3>
        <div className="service-faq-list">
          {service.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`service-faq-item ${idx !== service.faqs.length - 1 ? 'has-border' : ''}`}
            >
              <div className="service-faq-q">
                {faq.q}
              </div>
              <div className="service-faq-a">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsService;
