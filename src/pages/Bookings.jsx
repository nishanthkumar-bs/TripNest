import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking, cancelBooking, setFilterStatus } from '../redux/bookingSlice';
import { useNotification } from '../context/NotificationContext';
import useDocumentTitle from '../hooks/useDocumentTitle';
import BookingCard from '../components/booking/BookingCard';
import Modal from '../components/common/Modal';
import { CalendarCheck, Plus, Search, Filter, Printer, CheckCircle2, AlertTriangle, Sparkles, Trash2 } from 'lucide-react';
import './Bookings.css';

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
            <h1 className="section-title bookings-page-title">
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
              className="form-input bookings-search-input"
            />
          </div>
        </div>

        {/* Bookings List or Empty State */}
        {filteredBookings.length === 0 ? (
          <div className="card bookings-empty-card">
            <div className="bookings-empty-icon">
              <CalendarCheck size={32} />
            </div>
            <h3 className="bookings-empty-title">
              No bookings found
            </h3>
            <p className="bookings-empty-desc">
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
          <div className="bookings-list-stack">
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
      {deleteConfirmId && (() => {
        const bookingToDelete = bookings.find((b) => b.id === deleteConfirmId);
        return (
          <Modal
            isOpen={!!deleteConfirmId}
            onClose={() => setDeleteConfirmId(null)}
            title="Delete Booking Record"
            subtitle="Are you sure you want to permanently delete this reservation?"
            maxWidth="480px"
          >
            <div className="delete-confirm-card">
              <div className="delete-warning-banner">
                <div className="delete-warning-icon">
                  <AlertTriangle size={22} />
                </div>
                <div className="delete-warning-text">
                  <div className="delete-warning-title">Permanent Record Deletion</div>
                  <div className="delete-warning-desc">
                    This will remove reservation <strong>#{deleteConfirmId}</strong> from your records. This action cannot be undone.
                  </div>
                </div>
              </div>

              {bookingToDelete && (
                <div className="delete-record-summary">
                  <div className="delete-summary-row">
                    <span className="summary-label">Destination</span>
                    <span className="summary-val">{bookingToDelete.destination}</span>
                  </div>
                  <div className="delete-summary-row">
                    <span className="summary-label">Travel Date</span>
                    <span className="summary-val">{bookingToDelete.travelDate}</span>
                  </div>
                  <div className="delete-summary-row">
                    <span className="summary-label">Travelers & Total</span>
                    <span className="summary-val">
                      {bookingToDelete.guests} Guests • ₹{Number(bookingToDelete.totalPrice || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              )}

              <div className="delete-confirm-actions">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(null)}
                  className="btn btn-secondary delete-btn-cancel"
                >
                  Keep Booking
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(deleteConfirmId)}
                  className="btn btn-danger delete-btn-confirm"
                >
                  <Trash2 size={16} /> Yes, Delete Record
                </button>
              </div>
            </div>
          </Modal>
        );
      })()}

      {/* E-Ticket / Voucher Print Modal */}
      {ticketToPrint && (
        <Modal
          isOpen={!!ticketToPrint}
          onClose={() => setTicketToPrint(null)}
          title={`Electronic Ticket — #${ticketToPrint.id}`}
          subtitle="Official TripNest Passenger Boarding Confirmation"
          maxWidth="640px"
        >
          <div className="ticket-print-sheet">
            <div className="ticket-header-row">
              <div>
                <span className="ticket-brand-name">TripNest</span>
                <span className="ticket-brand-sub">Verified Travel Document</span>
              </div>
              <div className="ticket-id-code">
                #{ticketToPrint.id}
              </div>
            </div>

            <div className="ticket-grid-details">
              <div className="ticket-detail-item">
                <span className="ticket-detail-label">Lead Traveler</span>
                <div className="ticket-detail-value">{ticketToPrint.travelerName}</div>
                <div className="ticket-detail-sub">{ticketToPrint.email}</div>
              </div>

              <div className="ticket-detail-item">
                <span className="ticket-detail-label">Destination</span>
                <div className="ticket-detail-value">{ticketToPrint.destination}</div>
                <div className="ticket-detail-sub">{ticketToPrint.packageTitle}</div>
              </div>

              <div className="ticket-detail-item">
                <span className="ticket-detail-label">Departure Date</span>
                <div className="ticket-detail-value">{ticketToPrint.departureDate}</div>
              </div>

              <div className="ticket-detail-item">
                <span className="ticket-detail-label">Party Size & Total</span>
                <div className="ticket-detail-value">{ticketToPrint.guests} Guests — ₹{Number(ticketToPrint.totalPrice || 0).toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div className="ticket-footer-notice">
              ✓ Confirmed Status • 24/7 India Helpline: +91 9876543210 • Present this confirmation upon arrival.
            </div>
          </div>

          <div className="bookings-modal-actions">
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
    </div>
  );
};

export default Bookings;
