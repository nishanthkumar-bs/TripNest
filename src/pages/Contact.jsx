import { useState, useRef } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useNotification } from '../context/NotificationContext';
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Headphones
} from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  useDocumentTitle('Contact Us — 24/7 Global Travel Concierge');
  const { showNotification } = useNotification();

  // Controlled form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  // Validation error state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // useRef hooks to directly focus inputs on validation errors
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please let us know how we can help you';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Inquiry details should be at least 15 characters';
    }

    setErrors(newErrors);

    // Focus first invalid input using useRef
    if (newErrors.name && nameRef.current) {
      nameRef.current.focus();
    } else if (newErrors.email && emailRef.current) {
      emailRef.current.focus();
    } else if (newErrors.message && messageRef.current) {
      messageRef.current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      showNotification('Your travel inquiry has been transmitted to our destination concierge!', 'success');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="section-py">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
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
        <div className="contact-grid">
          {/* Left Column: Direct info & Worldwide Hubs */}
          <div className="contact-info-col">
            {/* Quick Contact Info Card */}
            <div className="card contact-info-card">
              <h3 className="contact-info-title">
                Direct Assistance Channels
              </h3>

              <div className="contact-channels-list">
                <div className="contact-channel-item">
                  <div className="contact-channel-icon-wrap contact-channel-icon-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Phone & WhatsApp Support (India)</div>
                    <div className="contact-channel-val-primary">+91 9876543210</div>
                    <div className="contact-channel-sub">Toll-free across India • +91 80 4567 8900</div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon-wrap contact-channel-icon-secondary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Email Concierge</div>
                    <div className="contact-channel-val-main">concierge@tripnest.in</div>
                    <div className="contact-channel-sub">Average reply within 45 minutes</div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon-wrap contact-channel-icon-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Operating Hours</div>
                    <div className="contact-channel-val-main">24 Hours / 7 Days a Week</div>
                    <div className="contact-channel-sub">Emergency travel assistance active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian City Hubs */}
            <div className="card contact-info-card">
              <h3 className="contact-info-title">
                TripNest Indian Hubs
              </h3>

              <div className="contact-hubs-grid">
                <div className="contact-hub-card">
                  <div className="contact-hub-name">🇮🇳 Bengaluru (HQ)</div>
                  <div className="contact-hub-address">Indiranagar 100ft Road</div>
                </div>

                <div className="contact-hub-card">
                  <div className="contact-hub-name">🇮🇳 New Delhi</div>
                  <div className="contact-hub-address">Connaught Place, Inner Circle</div>
                </div>

                <div className="contact-hub-card">
                  <div className="contact-hub-name">🇮🇳 Mumbai</div>
                  <div className="contact-hub-address">Bandra Kurla Complex (BKC)</div>
                </div>

                <div className="contact-hub-card">
                  <div className="contact-hub-name">🇮🇳 Kochi Hub</div>
                  <div className="contact-hub-address">Marine Drive, Ernakulam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="card contact-card-form">
            {submitted ? (
              <div className="contact-success-wrap">
                <div className="contact-success-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="contact-success-title">
                  Message Sent Successfully!
                </h3>
                <p className="contact-success-text">
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry. A certified destination specialist will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button onClick={resetForm} className="btn btn-secondary">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="contact-form-title">
                  Send An Inquiry
                </h3>
                <p className="contact-form-sub">
                  Fill in your travel preferences and our destination concierge will prepare a personalized itinerary.
                </p>

                <div className="contact-form-row">
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

                <div className="contact-form-row">
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
                  className="btn btn-primary btn-lg contact-submit-btn"
                >
                  <Send size={18} /> Submit Travel Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
