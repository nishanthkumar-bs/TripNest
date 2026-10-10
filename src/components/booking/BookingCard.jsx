import { Calendar, Users, DollarSign, Mail, Phone, Edit3, Trash2, Ban, ShieldCheck, Printer } from 'lucide-react';
import Badge from '../common/Badge';

export const BookingCard = ({ booking, onEdit, onCancel, onDelete, onPrint }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return <Badge variant="success">Confirmed</Badge>;
      case 'Pending':
        return <Badge variant="warning">Pending Confirmation</Badge>;
      case 'Cancelled':
        return <Badge variant="danger">Cancelled</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            Booking Ref:
          </span>
          <span style={{
            fontFamily: 'monospace',
            fontWeight: 800,
            fontSize: '1rem',
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            #{booking.id}
          </span>
          {booking.createdAt && (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
              (Booked on {booking.createdAt})
            </span>
          )}
        </div>

        <div>
          {getStatusBadge(booking.status)}
        </div>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '20px', alignItems: 'center' }} className="booking-card-main">
        {/* Destination Image */}
        <div style={{ width: '120px', height: '90px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img
            src={booking.packageImage}
            alt={booking.packageTitle}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3 }}>
            {booking.destination}
          </h4>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            {booking.packageTitle}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={15} color="var(--color-primary)" />
              Departure: <strong>{booking.departureDate}</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Users size={15} color="var(--color-secondary)" />
              Travelers: <strong>{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={15} color="var(--text-muted)" />
              {booking.travelerName} ({booking.email})
            </span>
            {booking.insuranceIncluded && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-success)', fontWeight: 600 }}>
                <ShieldCheck size={15} /> Travel Protection
              </span>
            )}
          </div>

          {booking.specialRequests && (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
              Note: "{booking.specialRequests}"
            </div>
          )}
        </div>

        {/* Price Column */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Total Paid
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
            ₹{Number(booking.totalPrice || 0).toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <button
          onClick={() => onPrint(booking)}
          className="btn btn-secondary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Printer size={15} />
          Print / E-Ticket
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          {booking.status !== 'Cancelled' && (
            <>
              <button
                onClick={() => onEdit(booking)}
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Edit3 size={15} />
                Edit / Reschedule
              </button>

              <button
                onClick={() => onCancel(booking.id)}
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-warning)' }}
              >
                <Ban size={15} />
                Cancel Reservation
              </button>
            </>
          )}

          <button
            onClick={() => onDelete(booking.id)}
            className="btn btn-secondary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-danger)' }}
            title="Delete this booking from records"
          >
            <Trash2 size={15} />
            Delete
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .booking-card-main {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingCard;
