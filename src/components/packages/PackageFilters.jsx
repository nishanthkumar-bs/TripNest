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
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        padding: '24px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Top row: Search input + Sort dropdown */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '16px',
          alignItems: 'center',
          marginBottom: '20px'
        }}
        className="filter-top-row"
      >
        {/* Search input */}
        <div style={{ position: 'relative' }}>
          <Search
            size={18}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search by destination, state, or experience (e.g. Kashmir, Kerala, Goa, Rajasthan, Ladakh)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '42px' }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                backgroundColor: 'var(--bg-subtle)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort by */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '200px' }}>
          <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="form-select"
            style={{ padding: '8px 12px', fontSize: '0.9rem' }}
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
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Experience Categories
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--bg-subtle)',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom row: Price range slider + reset button + count */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <SlidersHorizontal size={16} color="var(--color-primary)" />
            <span>Max Budget:</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>₹{maxPrice.toLocaleString('en-IN')}</span>
          </div>

          <input
            type="range"
            min="10000"
            max="150000"
            step="5000"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            style={{
              width: '180px',
              accentColor: 'var(--color-primary)',
              cursor: 'pointer'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'package' : 'packages'}
          </span>

          <button
            onClick={onResetFilters}
            className="btn btn-secondary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
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
