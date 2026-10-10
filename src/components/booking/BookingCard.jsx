import { Calendar, Users, Mail, Phone, Edit3, Trash2, Ban, ShieldCheck, Printer } from 'lucide-react';
import Badge from '../common/Badge';

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

      <style>{`
        .booking-item-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .booking-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .booking-ref-block {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .booking-ref-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .booking-ref-number {
          font-family: monospace;
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--color-primary);
          background-color: var(--color-primary-light);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .booking-date-stamp {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .booking-item-body {
          display: grid;
          grid-template-columns: 130px 1fr auto;
          gap: 20px;
          align-items: center;
        }

        .booking-item-img-wrapper {
          width: 130px;
          height: 95px;
          border-radius: var(--radius-md);
          overflow: hidden;
          flex-shrink: 0;
        }

        .booking-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .booking-item-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .booking-dest-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.3;
        }

        .booking-pkg-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .booking-meta-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 4px;
          font-size: 0.84rem;
          color: var(--text-main);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-success { color: var(--color-success); font-weight: 600; }

        .booking-notes {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          background: var(--bg-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          margin-top: 4px;
          display: inline-block;
        }

        .booking-item-price-block {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 110px;
        }

        .price-tag-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .price-tag-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-primary);
        }

        .price-tag-sub {
          font-size: 0.72rem;
          color: var(--text-light);
        }

        .booking-item-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .actions-right {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 6px 14px;
          font-size: 0.85rem;
        }

        .btn-cancel:hover {
          color: var(--color-warning);
          border-color: var(--color-warning);
        }

        .btn-delete:hover {
          color: var(--color-danger);
          border-color: var(--color-danger);
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .booking-item-card {
            padding: 16px;
            gap: 14px;
          }

          .booking-item-body {
            grid-template-columns: 85px 1fr;
            gap: 12px;
          }

          .booking-item-img-wrapper {
            width: 85px;
            height: 85px;
          }

          .booking-item-price-block {
            grid-column: 1 / -1;
            text-align: left;
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
            padding: 10px 14px;
            background: var(--bg-subtle);
            border-radius: var(--radius-md);
            margin-top: 4px;
          }

          .booking-dest-title {
            font-size: 1.05rem;
          }

          .booking-meta-grid {
            gap: 6px 10px;
            font-size: 0.8rem;
          }

          .booking-item-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }

          .actions-left, .actions-right {
            display: flex;
            width: 100%;
            gap: 8px;
          }

          .actions-left .action-btn,
          .actions-right .action-btn {
            flex: 1;
            justify-content: center;
            text-align: center;
            padding: 8px 10px;
            font-size: 0.82rem;
            min-height: 38px;
          }
        }

        @media (max-width: 440px) {
          .booking-item-body {
            grid-template-columns: 72px 1fr;
            gap: 10px;
          }

          .booking-item-img-wrapper {
            width: 72px;
            height: 72px;
          }

          .actions-right {
            flex-wrap: wrap;
          }

          .actions-right .action-btn {
            min-width: calc(50% - 6px);
          }
        }
      `}</style>
    </div>
  );
};

export default BookingCard;
