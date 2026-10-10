import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearWishlist } from '../redux/wishlistSlice';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PACKAGES_DATA } from '../data/packagesData';
import PackageCard from '../components/packages/PackageCard';
import { Bookmark, Sparkles, Trash2, ArrowRight } from 'lucide-react';
import './Wishlist.css';

export const Wishlist = ({ onOpenBookingModal }) => {
  useDocumentTitle('Saved Trips & Wishlist');
  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist?.items || []);

  const savedPackages = PACKAGES_DATA.filter((pkg) => wishlistIds.includes(pkg.id));

  return (
    <div className="section-py">
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div>
            <span className="section-pill">
              <Bookmark size={14} /> Bucket List
            </span>
            <h1 className="section-title" style={{ marginBottom: '6px' }}>
              Saved Vacation Packages
            </h1>
            <p className="section-desc">
              Your curated collection of dream destinations. Book them whenever you are ready!
            </p>
          </div>

          {savedPackages.length > 0 && (
            <button
              onClick={() => dispatch(clearWishlist())}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Trash2 size={15} /> Clear Wishlist
            </button>
          )}
        </div>

        {/* Content */}
        {savedPackages.length === 0 ? (
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
              <Bookmark size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
              Your wishlist is empty
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 24px auto' }}>
              Click the heart icon on any destination card to save your favorite itineraries here for later.
            </p>
            <Link to="/packages" className="btn btn-primary">
              <Sparkles size={16} /> Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="grid-3">
            {savedPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onQuickBook={(item) => onOpenBookingModal && onOpenBookingModal(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
