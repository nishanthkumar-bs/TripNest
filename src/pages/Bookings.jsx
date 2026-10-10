import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking, cancelBooking, setFilterStatus } from '../redux/bookingSlice';
import { useNotification } from '../context/NotificationContext';
import useDocumentTitle from '../hooks/useDocumentTitle';
import BookingCard from '../components/booking/BookingCard';
import Modal from '../components/common/Modal';
import { CalendarCheck, Plus, Search, Filter, Printer, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const Bookings = ({ onOpenBookingModal, onEditBooking }) => {
  useDocumentTitle('Manage My Bookings');
  const dispatch = useDispatch();
  const { showNotification } = useNotification();

  // Redux state
  const { items: bookings, filterStatus } = useSelector((state) => state.bookings);

  // Local state for search & ticket modal
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketToPrint, setTicketToPrint] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Filter bookings by status tab and search keyword
  const filteredBookings = bookings.filter((b) => {
    // Status filter
    const matchesStatus = filterStatus === 'All' || b.status === filterStatus;
    // Search filter
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      b.id.toLowerCase().includes(q) ||
      b.destination.toLowerCase().includes(q) ||
      b.travelerName.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  // Cancel booking handler
  const handleCancel = (id) => {
    if (window.confirm(`Are you sure you want to cancel booking #${id}? Cancellation fee may apply per policy.`)) {
      dispatch(cancelBooking(id));
      showNotification(`Booking #${id} has been cancelled.`, 'info');
    }
  };

  // Delete booking handler
  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
    setDeleteConfirmId(null);
    showNotification(`Booking #${id} removed from your account.`, 'info');
  };

  // Print voucher handler
  const handlePrint = (booking) => {
    setTicketToPrint(booking);
  };

  const statusTabs = ['All', 'Confirmed', 'Pending', 'Cancelled'];

  return (
    <div className="section-py">
      <div className="container">
        {/* Header */}
        <div className="bookings-page-header">
          <div>
            <span className="section-pill">
              <CalendarCheck size={14} /> Reservation Hub
            </span>
            <h1 className="section-title" style={{ marginBottom: '6px' }}>
              My Booked Vacations
            </h1>
            <p className="section-desc">
              View, reschedule, download e-tickets, or manage your TripNest vacation reservations.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal && onOpenBookingModal()}
            className="btn btn-primary btn-lg bookings-new-btn"
          >
            <Plus size={18} /> Book a New Trip
          </button>
        </div>

        {/* Filter and Search Controls */}
        <div className="card bookings-filter-box">
          {/* Status Tabs */}
          <div className="bookings-status-tabs">
            {statusTabs.map((status) => {
              const isActive = filterStatus === status;
              const count = status === 'All' ? bookings.length : bookings.filter(b => b.status === status).length;

              return (
                <button
                  key={status}
                  onClick={() => dispatch(setFilterStatus(status))}
                  className={`status-tab-btn ${isActive ? 'active' : ''}`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="bookings-search-wrap">
            <Search size={16} color="var(--text-muted)" className="bookings-search-icon" />
            <input
              type="text"
              placeholder="Search reference # or traveler name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '36px', paddingRight: '12px', fontSize: '0.88rem' }}
            />
          </div>
        </div>

        {/* Bookings List or Empty State */}
        {filteredBookings.length === 0 ? (
          <div className="card" style={{ padding: '60px 24px', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CalendarCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
              No bookings found
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 24px auto' }}>
              {searchQuery || filterStatus !== 'All'
                ? 'No reservations matched your current filter criteria.'
                : 'You have not booked any vacations with TripNest yet. Explore our curated packages to get started!'}
            </p>
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="btn btn-primary"
            >
              <Sparkles size={16} /> Explore & Book a Trip
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onEdit={(b) => onEditBooking && onEditBooking(b)}
                onCancel={handleCancel}
                onDelete={(id) => setDeleteConfirmId(id)}
                onPrint={handlePrint}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <Modal
          isOpen={!!deleteConfirmId}
          onClose={() => setDeleteConfirmId(null)}
          title="Delete Booking Record"
          subtitle="Are you sure you want to permanently delete this reservation?"
          maxWidth="480px"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{ color: 'var(--color-danger)' }}>
              <AlertTriangle size={36} />
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              This will remove booking <strong>#{deleteConfirmId}</strong> from your records. This action cannot be undone.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button onClick={() => setDeleteConfirmId(null)} className="btn btn-secondary">
              Keep Booking
            </button>
            <button onClick={() => handleDelete(deleteConfirmId)} className="btn btn-danger">
              Yes, Delete Record
            </button>
          </div>
        </Modal>
      )}

      {/* E-Ticket / Voucher Print Modal */}
      {ticketToPrint && (
        <Modal
          isOpen={!!ticketToPrint}
          onClose={() => setTicketToPrint(null)}
          title={`Electronic Ticket — #${ticketToPrint.id}`}
          subtitle="Official TripNest Passenger Boarding Confirmation"
          maxWidth="640px"
        >
          <div style={{
            border: '2px dashed var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            backgroundColor: 'var(--bg-subtle)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>TripNest</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Verified Travel Document</span>
              </div>
              <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                #{ticketToPrint.id}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Lead Traveler</span>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{ticketToPrint.travelerName}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{ticketToPrint.email}</div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Destination</span>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{ticketToPrint.destination}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{ticketToPrint.packageTitle}</div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Departure Date</span>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{ticketToPrint.departureDate}</div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Party Size & Total</span>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{ticketToPrint.guests} Guests — ₹{Number(ticketToPrint.totalPrice || 0).toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}>
              ✓ Confirmed Status • 24/7 India Helpline: +91 9876543210 • Present this confirmation upon arrival.
            </div>
          </div>

          <div className="bookings-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
            <button onClick={() => setTicketToPrint(null)} className="btn btn-secondary">
              Close
            </button>
            <button
              onClick={() => {
                window.print();
                showNotification('Printing voucher...', 'info');
              }}
              className="btn btn-primary"
            >
              <Printer size={16} /> Print E-Ticket
            </button>
          </div>
        </Modal>
      )}

      <style>{`
        .bookings-page-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }

        .bookings-filter-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .bookings-status-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 2px;
          -webkit-overflow-scrolling: touch;
        }

        .status-tab-btn {
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
          white-space: nowrap;
          cursor: pointer;
        }

        .status-tab-btn:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        .status-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 2px 8px var(--color-primary-glow);
        }

        .bookings-search-wrap {
          position: relative;
          min-width: 260px;
          flex: 1;
          max-width: 360px;
        }

        .bookings-search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .bookings-page-header {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            margin-bottom: 24px;
          }

          .bookings-new-btn {
            width: 100%;
            justify-content: center;
          }

          .bookings-filter-box {
            flex-direction: column;
            align-items: stretch;
            padding: 14px;
            gap: 12px;
          }

          .bookings-status-tabs {
            width: 100%;
            display: flex;
            gap: 6px;
            overflow-x: auto;
          }

          .status-tab-btn {
            flex: 1;
            text-align: center;
            padding: 8px 10px;
            font-size: 0.8rem;
          }

          .bookings-search-wrap {
            width: 100%;
            max-width: 100%;
            min-width: unset;
          }

          .bookings-modal-actions {
            flex-direction: column-reverse;
          }

          .bookings-modal-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Bookings;
