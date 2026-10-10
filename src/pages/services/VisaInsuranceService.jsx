import { SERVICES_DATA } from '../../data/servicesData';
import Badge from '../../components/common/Badge';
import { ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';

export const VisaInsuranceService = ({ onOpenBookingModal }) => {
  const service = SERVICES_DATA['visa-insurance'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* Hero Service Card */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center'
        }}>
          <div style={{ padding: '40px' }}>
            <Badge variant="primary">{service.badge}</Badge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '12px', marginBottom: '14px', lineHeight: 1.25 }}>
              {service.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {service.description}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBookingModal && onOpenBookingModal()}
                className="btn btn-primary"
              >
                <ShieldCheck size={16} /> Apply for Visa & Insurance
              </button>
              <a href="#features" className="btn btn-secondary">
                View Coverage Details
              </a>
            </div>
          </div>

          <div style={{ height: '360px', overflow: 'hidden' }}>
            <img
              src={service.heroImage}
              alt={service.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Service Features Grid */}
      <div id="features">
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>
          Global Protection & Hassle-Free Visa Handling
        </h3>
        <div className="grid-2">
          {service.features.map((feat, idx) => (
            <div key={idx} className="card" style={{ padding: '28px', display: 'flex', gap: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                  {feat.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="card" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={22} color="var(--color-primary)" />
          Travel Documentation Questions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {service.faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: idx !== service.faqs.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                {faq.q}
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaInsuranceService;
