import { Calendar, Users, Mail, Phone, Edit3, Trash2, Ban, ShieldCheck, Printer } from 'lucide-react';
import Badge from '../common/Badge';
import './BookingCard.css';

export const BookingCard = ({ booking, onEdit, onCancel, onDelete, onPrint }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return <Badge variant="success">Confirmed</Badge>;
      case 'Pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'Cancelled':
        return <Badge variant="danger">Cancelled</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="card booking-item-card">
      {/* Card Header */}
      <div className="booking-item-header">
        <div className="booking-ref-block">
          <span className="booking-ref-label">Booking ID:</span>
          <span className="booking-ref-number">#{booking.id}</span>
          {booking.createdAt && (
            <span className="booking-date-stamp">({booking.createdAt})</span>
          )}
        </div>
        <div>
          {getStatusBadge(booking.status)}
        </div>
      </div>

      {/* Card Body */}
      <div className="booking-item-body">
        {/* Destination Image */}
        <div className="booking-item-img-wrapper">
          <img
            src={booking.packageImage}
            alt={booking.packageTitle}
            className="booking-item-img"
          />
        </div>

        {/* Core Details */}
        <div className="booking-item-details">
          <h4 className="booking-dest-title">{booking.destination}</h4>
          <p className="booking-pkg-subtitle">{booking.packageTitle}</p>

          <div className="booking-meta-grid">
            <span className="meta-item">
              <Calendar size={14} className="meta-icon text-primary" />
              <span>Travel Date: <strong>{booking.departureDate}</strong></span>
            </span>
            <span className="meta-item">
              <Users size={14} className="meta-icon text-secondary" />
              <span><strong>{booking.guests}</strong> {booking.guests === 1 ? 'Guest' : 'Guests'}</span>
            </span>
            <span className="meta-item">
              <Mail size={14} className="meta-icon" />
              <span>{booking.travelerName}</span>
            </span>
            {booking.phone && (
              <span className="meta-item">
                <Phone size={14} className="meta-icon" />
                <span>{booking.phone}</span>
              </span>
            )}
            {booking.insuranceIncluded && (
              <span className="meta-item text-success">
                <ShieldCheck size={14} />
                <span>Travel Insured</span>
              </span>
            )}
          </div>

          {booking.specialRequests && (
            <div className="booking-notes">
              "{booking.specialRequests}"
            </div>
          )}
        </div>

        {/* Price Column */}
        <div className="booking-item-price-block">
          <span className="price-tag-label">Total Amount</span>
          <span className="price-tag-val">
            ₹{Number(booking.totalPrice || 0).toLocaleString('en-IN')}
          </span>
          <span className="price-tag-sub">All taxes incl.</span>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="booking-item-actions">
        <div className="actions-left">
          <button
            onClick={() => onPrint(booking)}
            className="btn btn-secondary btn-sm action-btn"
          >
            <Printer size={14} />
            <span>E-Ticket</span>
          </button>
        </div>

        <div className="actions-right">
          {booking.status !== 'Cancelled' && (
            <>
              <button
                onClick={() => onEdit(booking)}
                className="btn btn-secondary btn-sm action-btn"
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </button>

              <button
                onClick={() => onCancel(booking.id)}
                className="btn btn-secondary btn-sm action-btn btn-cancel"
              >
                <Ban size={14} />
                <span>Cancel</span>
              </button>
            </>
          )}

          <button
            onClick={() => onDelete(booking.id)}
            className="btn btn-secondary btn-sm action-btn btn-delete"
            title="Delete record"
          >
            <Trash2 size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
