import { useState, useEffect, useTransition } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useDebounce from '../hooks/useDebounce';
import { travelApi } from '../services/api';
import PackageCard from '../components/packages/PackageCard';
import PackageFilters from '../components/packages/PackageFilters';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Compass, Sparkles, AlertCircle } from 'lucide-react';
import './Packages.css';

export const Packages = ({ onOpenBookingModal }) => {
  useDocumentTitle('All Travel Packages & Destinations');

  // React Router DOM: useSearchParams!
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state extraction
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const initialSort = searchParams.get('sortBy') || 'recommended';
  const initialMaxPrice = Number(searchParams.get('maxPrice')) || 150000;

  // Local filter states
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  // Debounce the search text so we don't spam API or history
  const debouncedSearch = useDebounce(searchQuery, 350);

  // Packages list state
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Synchronize local states to URL search parameters
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearch.trim()) params.set('search', debouncedSearch.trim());
    if (activeCategory !== 'All') params.set('category', activeCategory);
    if (sortBy !== 'recommended') params.set('sortBy', sortBy);
    if (maxPrice < 150000) params.set('maxPrice', maxPrice.toString());

    setSearchParams(params, { replace: true });
  }, [debouncedSearch, activeCategory, sortBy, maxPrice, setSearchParams]);

  // Fetch packages from simulated API whenever filters change
  useEffect(() => {
    let isMounted = true;
    const fetchFilteredPackages = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await travelApi.getPackages({
          search: debouncedSearch,
          category: activeCategory,
          sortBy,
          maxPrice
        });
        if (isMounted) {
          setPackages(results);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load destinations.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchFilteredPackages();
    return () => { isMounted = false; };
  }, [debouncedSearch, activeCategory, sortBy, maxPrice]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setSortBy('recommended');
    setMaxPrice(150000);
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="section-py">
      <div className="container">
        {/* Page Header */}
        <div className="packages-page-header">
          <span className="section-pill">
            <Compass size={14} /> Explore The World
          </span>
          <h1 className="section-title">
            Curated Travel Packages & Destinations
          </h1>
          <p className="section-desc">
            Filter through our bespoke vacation packages by region, activity style, or budget to plan your ideal itinerary.
          </p>
        </div>

        {/* Filter Controls (Connected to useSearchParams) */}
        <PackageFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          onResetFilters={handleResetFilters}
          totalResults={packages.length}
        />

        {/* Main Content: Loading, Error, Empty State, or Packages Grid */}
        {loading ? (
          <LoadingSpinner text="Searching vacation packages..." />
        ) : error ? (
          <div className="card packages-error-card">
            <AlertCircle size={40} className="packages-error-icon" />
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button onClick={handleResetFilters} className="btn btn-secondary mt-3">Try Again</button>
          </div>
        ) : packages.length === 0 ? (
          <div className="card packages-empty-card">
            <div className="packages-empty-icon">
              <Compass size={32} />
            </div>
            <h3 className="packages-empty-title">
              No travel packages found
            </h3>
            <p className="packages-empty-desc">
              We could not find any vacation matching your specific search filters. Try adjusting your keyword or clearing filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid-3">
            {packages.map((pkg) => (
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

export default Packages;
