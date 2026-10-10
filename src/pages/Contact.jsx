import { useState, useRef } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useNotification } from '../context/NotificationContext';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, Headphones } from 'lucide-react';

export const Contact = () => {
  useDocumentTitle('Contact Us & Concierge Support');
  const { showNotification } = useNotification();

  // useRef references for auto-focusing on invalid fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
      if (nameRef.current) nameRef.current.focus();
    } else if (formData.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters.';
      if (nameRef.current) nameRef.current.focus();
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
      if (!errs.name && emailRef.current) emailRef.current.focus();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
      if (!errs.name && emailRef.current) emailRef.current.focus();
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details in your message.';
      if (!errs.name && !errs.email && messageRef.current) messageRef.current.focus();
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
      if (!errs.name && !errs.email && messageRef.current) messageRef.current.focus();
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showNotification('Please fill in the required fields correctly.', 'error');
      return;
    }

    setSubmitted(true);
    showNotification('Your message has been sent! A travel concierge will respond within 2 hours.', 'success');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="section-py">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <span className="section-pill">
            <Headphones size={14} /> 24/7 Global Support
          </span>
          <h1 className="section-title">
            Connect With Our Travel Concierge
          </h1>
          <p className="section-desc">
            Have questions about custom itineraries, group bookings, or travel visa assistance? Our worldwide team is ready to assist you around the clock.
          </p>
        </div>

        {/* 2-Column: Left Contact Cards, Right Validated Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '40px',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Left Column: Direct info & Worldwide Hubs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Quick Contact Info Card */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px' }}>
                Direct Assistance Channels
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Phone & WhatsApp Support (India)</div>
                    <div style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '1.1rem' }}>+91 9876543210</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Toll-free across India • +91 80 4567 8900</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-secondary-light)',
                    color: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Email Concierge</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>concierge@tripnest.in</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Average reply within 45 minutes</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Operating Hours</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>24 Hours / 7 Days a Week</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Emergency travel assistance active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian City Hubs */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px' }}>
                TripNest Indian Hubs
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>🇮🇳 Bengaluru (HQ)</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Indiranagar 100ft Road</div>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>🇮🇳 New Delhi</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Connaught Place, Inner Circle</div>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>🇮🇳 Mumbai</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Bandra Kurla Complex (BKC)</div>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>🇮🇳 Kochi Hub</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Marine Drive, Ernakulam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="card contact-card-form" style={{ padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-success-light)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry. A certified destination specialist will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button onClick={resetForm} className="btn btn-secondary">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                  Send An Inquiry
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Fill in your travel preferences and our destination concierge will prepare a personalized itinerary.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="contact-form-row">
                  {/* Name Input with useRef focus */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">
                      Your Full Name *
                    </label>
                    <input
                      id="contactName"
                      ref={nameRef}
                      type="text"
                      name="name"
                      placeholder="e.g. Liam Gallagher"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  {/* Email Input with useRef focus */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactEmail">
                      Email Address *
                    </label>
                    <input
                      id="contactEmail"
                      ref={emailRef}
                      type="email"
                      name="email"
                      placeholder="e.g. liam@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="contact-form-row">
                  {/* Phone Input */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactPhone">
                      Mobile Number (+91 India)
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactSubject">
                      Inquiry Subject
                    </label>
                    <select
                      id="contactSubject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Custom Itinerary Quote">Custom Itinerary Quote</option>
                      <option value="Group & Corporate Travel">Group & Corporate Travel</option>
                      <option value="Visa & Passport Assistance">Visa & Passport Assistance</option>
                      <option value="Existing Reservation Question">Existing Reservation Question</option>
                    </select>
                  </div>
                </div>

                {/* Message TextArea with useRef focus */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contactMessage">
                    How Can We Help You? *
                  </label>
                  <textarea
                    id="contactMessage"
                    ref={messageRef}
                    name="message"
                    rows="4"
                    placeholder="Tell us about your target destinations, travel dates, guest count, and any special experiences you would love..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  <Send size={18} /> Submit Travel Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .contact-card-form {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
