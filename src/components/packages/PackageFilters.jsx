import { CATEGORIES } from '../../data/packagesData';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import './PackageFilters.css';

export const PackageFilters = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  maxPrice,
  onMaxPriceChange,
  onResetFilters,
  totalResults
}) => {
  return (
    <div className="package-filters-card">
      {/* Top row: Search input + Sort dropdown */}
      <div className="filter-top-row">
        {/* Search input */}
        <div className="filter-search-wrapper">
          <Search
            size={18}
            color="var(--text-muted)"
            className="filter-search-icon"
          />
          <input
            type="text"
            placeholder="Search by destination, state, or experience (e.g. Kashmir, Kerala, Goa, Rajasthan, Ladakh)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="form-input filter-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="filter-search-clear-btn"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort by */}
        <div className="filter-sort-wrapper">
          <label className="filter-sort-label">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="form-select filter-sort-select"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="duration">Duration (Short to Long)</option>
          </select>
        </div>
      </div>

      {/* Middle row: Category pill buttons */}
      <div className="filter-category-section">
        <div className="filter-category-heading">
          Experience Categories
        </div>
        <div className="filter-category-list">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`filter-category-btn ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom row: Price range slider + reset button + count */}
      <div className="filter-bottom-row">
        <div className="filter-budget-group">
          <div className="filter-budget-label">
            <SlidersHorizontal size={16} color="var(--color-primary)" />
            <span>Max Budget:</span>
            <span className="filter-budget-amount">₹{maxPrice.toLocaleString('en-IN')}</span>
          </div>

          <input
            type="range"
            min="10000"
            max="150000"
            step="5000"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="filter-budget-slider"
          />
        </div>

        <div className="filter-actions-group">
          <span className="filter-results-count">
            Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'package' : 'packages'}
          </span>

          <button
            onClick={onResetFilters}
            className="btn btn-secondary btn-sm filter-reset-btn"
          >
            <RotateCcw size={14} />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageFilters;
