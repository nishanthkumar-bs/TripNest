import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import BookingModal from './components/booking/BookingModal';
import LoadingSpinner from './components/common/LoadingSpinner';

// Code Splitting via React.lazy for optimized bundle performance
const Home = lazy(() => import('./pages/Home'));
const Packages = lazy(() => import('./pages/Packages'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Nested Routing: Services
const Services = lazy(() => import('./pages/Services'));
const FlightsService = lazy(() => import('./pages/services/FlightsService'));
const HotelsService = lazy(() => import('./pages/services/HotelsService'));
const CustomToursService = lazy(() => import('./pages/services/CustomToursService'));
const VisaInsuranceService = lazy(() => import('./pages/services/VisaInsuranceService'));

import './App.css';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Global Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialPackage, setModalInitialPackage] = useState(null);
  const [bookingToEdit, setBookingToEdit] = useState(null);

  // Open modal for NEW booking
  const handleOpenBookingModal = (pkg = null) => {
    setBookingToEdit(null);
    setModalInitialPackage(pkg);
    setIsModalOpen(true);
  };

  // Open modal to EDIT existing booking
  const handleEditBooking = (booking) => {
    setModalInitialPackage(null);
    setBookingToEdit(booking);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalInitialPackage(null);
    setBookingToEdit(null);
  };

  return (
    <div className="app-wrapper">
      {/* Global Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal(null)} />

      {/* Main Content View with Page Fade-In and Suspense Fallback */}
      <main className="main-content page-fade-in" key={location.pathname}>
        <Suspense fallback={<LoadingSpinner text="Loading destination..." />}>
          <Routes>
            {/* Main Top-Level Routes */}
            <Route path="/" element={<Home onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/packages" element={<Packages onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/packages/:id" element={<PackageDetail onOpenBookingModal={handleOpenBookingModal} />} />
            <Route path="/bookings" element={<Bookings onOpenBookingModal={handleOpenBookingModal} onEditBooking={handleEditBooking} />} />
            <Route path="/wishlist" element={<Wishlist onOpenBookingModal={handleOpenBookingModal} />} />

            {/* Nested Routing: /services parent with Outlet */}
            <Route path="/services" element={<Services onOpenBookingModal={handleOpenBookingModal} />}>
              <Route path="flights" element={<FlightsService onOpenBookingModal={handleOpenBookingModal} />} />
              <Route path="hotels" element={<HotelsService onOpenBookingModal={handleOpenBookingModal} />} />
              <Route path="custom-tours" element={<CustomToursService onOpenBookingModal={handleOpenBookingModal} />} />
              <Route path="visa-insurance" element={<VisaInsuranceService onOpenBookingModal={handleOpenBookingModal} />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Toast Alert Notifications */}
      <Toast />

      {/* Central Booking Modal (Supports Create & Update) */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialPackage={modalInitialPackage}
        bookingToEdit={bookingToEdit}
      />
    </div>
  );
}

export default App;
