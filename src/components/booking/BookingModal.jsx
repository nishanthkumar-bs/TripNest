import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking, updateBooking } from '../../redux/bookingSlice';
import { useNotification } from '../../context/NotificationContext';
import { useBookingCalculator, ADDON_PRICES } from '../../hooks/useBookingCalculator';
import Modal from '../common/Modal';
import { PACKAGES_DATA } from '../../data/packagesData';
import { Calendar, User, Mail, Phone, Users, Shield, Plane, Sparkles, Check } from 'lucide-react';
import './BookingModal.css';

export const BookingModal = ({ isOpen, onClose, initialPackage = null, bookingToEdit = null }) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const nameInputRef = useRef(null);

  // Selected package
  const [selectedPkgId, setSelectedPkgId] = useState(
    bookingToEdit?.packageId || initialPackage?.id || PACKAGES_DATA[0].id
  );

  const currentPkg = PACKAGES_DATA.find(p => p.id === selectedPkgId) || PACKAGES_DATA[0];

  // Price calculator hook (demonstrating useReducer!)
  const { state: calcState, pricing, dispatch: calcDispatch } = useBookingCalculator(
    currentPkg.price,
    bookingToEdit ? bookingToEdit.guests : 2
  );

  // Form input fields
  const [formData, setFormData] = useState({
    travelerName: '',
    email: '',
    phone: '',
    departureDate: '',
    specialRequests: '',
    agreeTerms: false
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Populate data when modal opens or edit mode changes
  useEffect(() => {
    if (isOpen) {
      if (bookingToEdit) {
        setSelectedPkgId(bookingToEdit.packageId);
        setFormData({
          travelerName: bookingToEdit.travelerName || '',
          email: bookingToEdit.email || '',
          phone: bookingToEdit.phone || '',
          departureDate: bookingToEdit.departureDate || '',
          specialRequests: bookingToEdit.specialRequests || '',
          agreeTerms: true
        });
        calcDispatch({ type: 'SET_GUESTS', payload: bookingToEdit.guests || 2 });
      } else {
        setSelectedPkgId(initialPackage?.id || PACKAGES_DATA[0].id);
        // Default departure date: 14 days from today
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 14);
        const dateStr = defaultDate.toISOString().split('T')[0];

        setFormData({
          travelerName: '',
          email: '',
          phone: '',
          departureDate: dateStr,
          specialRequests: '',
          agreeTerms: true
        });
        calcDispatch({ type: 'SET_GUESTS', payload: 2 });
      }
      setErrors({});

      // useRef: Auto-focus the traveler name field after modal animation
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 150);
    }
  }, [isOpen, initialPackage, bookingToEdit]);

  // Form field change handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Indian Phone Number Validation regex (Accepts 10 digits starting with 6, 7, 8, 9, optional +91 or 0 prefix)
  const isValidIndianPhone = (phoneStr) => {
    const cleaned = phoneStr.replace(/[\s\-()]/g, '');
    return /^(?:(?:\+91|91|0)?[6-9]\d{9})$/.test(cleaned);
  };

  // Form Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.travelerName.trim()) {
      newErrors.travelerName = 'Full Name is required.';
    } else if (formData.travelerName.trim().length < 3) {
      newErrors.travelerName = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Indian mobile number is required.';
    } else if (!isValidIndianPhone(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. +91 98765 43210).';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Departure date is required.';
    } else {
      const selected = new Date(formData.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.departureDate = 'Departure date cannot be in the past.';
      }
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must accept the terms and booking conditions.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification('Please correct the highlighted errors before submitting.', 'error');
      return;
    }

    if (bookingToEdit) {
      // UPDATE existing booking
      const updatedItem = {
        ...bookingToEdit,
        packageId: currentPkg.id,
        packageTitle: currentPkg.title,
        destination: `${currentPkg.destination}, ${currentPkg.country}`,
        packageImage: currentPkg.image,
        travelerName: formData.travelerName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        departureDate: formData.departureDate,
        guests: calcState.guests,
        totalPrice: pricing.grandTotal,
        specialRequests: formData.specialRequests.trim(),
        insuranceIncluded: calcState.addons.insurance
      };

      dispatch(updateBooking(updatedItem));
      showNotification(`Booking #${bookingToEdit.id} updated successfully!`, 'success');
      onClose();
    } else {
      // CREATE new booking
      const newBooking = {
        id: `TN-${Math.floor(10000 + Math.random() * 90000)}`,
        packageId: currentPkg.id,
        packageTitle: currentPkg.title,
        destination: `${currentPkg.destination}, ${currentPkg.country}`,
        packageImage: currentPkg.image,
        travelerName: formData.travelerName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        departureDate: formData.departureDate,
        guests: calcState.guests,
        totalPrice: pricing.grandTotal,
        status: 'Confirmed',
        specialRequests: formData.specialRequests.trim(),
        insuranceIncluded: calcState.addons.insurance,
        createdAt: new Date().toISOString().split('T')[0]
      };

      dispatch(addBooking(newBooking));
      showNotification(`Booking confirmed for ${currentPkg.destination} (#${newBooking.id})! SMS sent to ${formData.phone}.`, 'success');
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={bookingToEdit ? `Edit Booking (${bookingToEdit.id})` : 'Book Your Vacation Package'}
      subtitle={bookingToEdit ? 'Modify your reservation dates, party size, or requests' : 'Instant booking with free 72-hour cancellation policy'}
      maxWidth="720px"
    >
      <form onSubmit={handleSubmit}>
        {/* Selected Package Selector */}
        <div className="form-group">
          <label className="form-label">
            <span>Select Travel Destination</span>
          </label>
          <select
            value={selectedPkgId}
            onChange={(e) => setSelectedPkgId(e.target.value)}
            className="form-select"
          >
            {PACKAGES_DATA.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} — ₹{p.price.toLocaleString('en-IN')}/person ({p.durationDays} Days)
              </option>
            ))}
          </select>
        </div>

        {/* Package mini preview banner */}
        <div style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          backgroundColor: 'var(--bg-subtle)',
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px'
        }}>
          <img
            src={currentPkg.image}
            alt={currentPkg.title}
            style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{currentPkg.destination}, {currentPkg.country}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{currentPkg.durationDays} Days / {currentPkg.durationNights} Nights • {currentPkg.category} Experience</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Base Package</div>
            <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.15rem' }}>₹{currentPkg.price.toLocaleString('en-IN')}</div>
          </div>
        </div>

        {/* 2-Column Traveler info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="modal-two-col">
          {/* Full Name with useRef */}
          <div className="form-group">
            <label className="form-label" htmlFor="travelerName">
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <User size={15} /> Lead Traveler Name *
              </span>
            </label>
            <input
              id="travelerName"
              ref={nameInputRef}
              type="text"
              name="travelerName"
              placeholder="e.g. Rahul Sharma"
              value={formData.travelerName}
              onChange={handleInputChange}
              className={`form-input ${errors.travelerName ? 'error' : ''}`}
            />
            {errors.travelerName && <span className="form-error">{errors.travelerName}</span>}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={15} /> Email Address *
              </span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. rahul.sharma@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="modal-two-col">
          {/* Indian Phone Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={15} /> Mobile Number (+91 India) *
              </span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleInputChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          {/* Departure Date */}
          <div className="form-group">
            <label className="form-label" htmlFor="departureDate">
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={15} /> Departure Date *
              </span>
            </label>
            <input
              id="departureDate"
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              className={`form-input ${errors.departureDate ? 'error' : ''}`}
            />
            {errors.departureDate && <span className="form-error">{errors.departureDate}</span>}
          </div>
        </div>

        {/* Guests count (controlled by useReducer dispatch) */}
        <div className="form-group">
          <label className="form-label">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Users size={15} /> Number of Travelers: <strong>{calcState.guests}</strong>
            </span>
          </label>
          <div className="modal-guest-counter" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => calcDispatch({ type: 'SET_GUESTS', payload: calcState.guests - 1 })}
              disabled={calcState.guests <= 1}
              style={{ width: '40px' }}
            >
              -
            </button>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, minWidth: '40px', textAlign: 'center' }}>
              {calcState.guests} {calcState.guests === 1 ? 'Guest' : 'Guests'}
            </span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => calcDispatch({ type: 'SET_GUESTS', payload: calcState.guests + 1 })}
              disabled={calcState.guests >= 10}
              style={{ width: '40px' }}
            >
              +
            </button>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>(Max 10 guests per booking)</span>
          </div>
        </div>

        {/* Add-ons Section in Rupees (controlled by useReducer) */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} color="var(--color-primary)" />
            Optional Add-ons (Pricing in ₹)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label className="modal-addon-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={calcState.addons.insurance}
                  onChange={() => calcDispatch({ type: 'TOGGLE_ADDON', payload: 'insurance' })}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <Shield size={16} color="var(--color-success)" />
                Comprehensive Travel & Medical Insurance
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>+₹{ADDON_PRICES.insurance} / guest</span>
            </label>

            <label className="modal-addon-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={calcState.addons.airportTransfer}
                  onChange={() => calcDispatch({ type: 'TOGGLE_ADDON', payload: 'airportTransfer' })}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <Plane size={16} color="var(--color-primary)" />
                Private Airport / Station AC Cab Pick & Drop
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>+₹{ADDON_PRICES.airportTransfer} flat</span>
            </label>

            <label className="modal-addon-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={calcState.addons.privateGuide}
                  onChange={() => calcDispatch({ type: 'TOGGLE_ADDON', payload: 'privateGuide' })}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <User size={16} color="var(--color-accent)" />
                Dedicated Certified Local Historian Guide
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>+₹{ADDON_PRICES.privateGuide} flat</span>
            </label>
          </div>
        </div>

        {/* Special Requests textarea */}
        <div className="form-group">
          <label className="form-label" htmlFor="specialRequests">
            Special Requests & Dietary Requirements (Optional)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows="2"
            placeholder="e.g. Pure Vegetarian/Jain meals, ground floor room, airport pickup timing..."
            value={formData.specialRequests}
            onChange={handleInputChange}
            className="form-textarea"
          ></textarea>
        </div>

        {/* Dynamic Price Summary Box in Rupees */}
        <div className="modal-price-summary-box" style={{
          backgroundColor: 'var(--bg-subtle)',
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
            <span>Base Package (₹{currentPkg.price.toLocaleString('en-IN')} × {calcState.guests} guests):</span>
            <span>₹{pricing.baseTotal.toLocaleString('en-IN')}</span>
          </div>

          {pricing.addonsTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
              <span>Selected Add-ons:</span>
              <span>+₹{pricing.addonsTotal.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
            <span>GST & Tourism Fees (5%):</span>
            <span>+₹{pricing.taxesAndFees.toLocaleString('en-IN')}</span>
          </div>

          <div className="modal-price-total-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '1.2rem',
            fontWeight: 800,
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)',
            color: 'var(--text-main)'
          }}>
            <span>Total Payable:</span>
            <span style={{ color: 'var(--color-primary)' }}>₹{pricing.grandTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Terms Agreement Checkbox */}
        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              style={{ accentColor: 'var(--color-primary)', marginTop: '3px' }}
            />
            <span>
              I agree to the TripNest booking terms, 72-hour cancellation policy, and passenger identity verification guidelines.
            </span>
          </label>
          {errors.agreeTerms && <span className="form-error">{errors.agreeTerms}</span>}
        </div>

        {/* Submit Actions */}
        <div className="modal-actions-wrap" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <button type="button" onClick={onClose} className="btn btn-secondary modal-btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-lg modal-btn-submit">
            <Check size={18} />
            {bookingToEdit ? 'Save Changes' : `Confirm Booking (₹${pricing.grandTotal.toLocaleString('en-IN')})`}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BookingModal;
