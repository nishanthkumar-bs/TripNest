import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearWishlist } from '../redux/wishlistSlice';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PACKAGES_DATA } from '../data/packagesData';
import PackageCard from '../components/packages/PackageCard';
import { Bookmark, Sparkles, Trash2 } from 'lucide-react';
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
        <div className="wishlist-header">
          <div>
            <span className="section-pill">
              <Bookmark size={14} /> Bucket List
            </span>
            <h1 className="section-title wishlist-title">
              Saved Vacation Packages
            </h1>
            <p className="section-desc">
              Your curated collection of dream destinations. Book them whenever you are ready!
            </p>
          </div>

          {savedPackages.length > 0 && (
            <button
              onClick={() => dispatch(clearWishlist())}
              className="btn btn-secondary btn-sm wishlist-clear-btn"
            >
              <Trash2 size={15} /> Clear Wishlist
            </button>
          )}
        </div>

        {/* Content */}
        {savedPackages.length === 0 ? (
          <div className="card wishlist-empty-card">
            <div className="wishlist-empty-icon">
              <Bookmark size={32} />
            </div>
            <h3 className="wishlist-empty-title">
              Your wishlist is empty
            </h3>
            <p className="wishlist-empty-desc">
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
