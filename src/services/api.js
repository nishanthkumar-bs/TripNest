// Simulated API Service for TripNest Travel Booking
import { PACKAGES_DATA } from '../data/packagesData';

// Simulated delay helper
const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms));

export const travelApi = {
  // Fetch all packages with optional search and category filters
  async getPackages({ search = '', category = 'All', sortBy = 'recommended', maxPrice = null } = {}) {
    await delay(350);
    let results = [...PACKAGES_DATA];

    // Filter by search keyword
    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      results = results.filter(pkg =>
        pkg.title.toLowerCase().includes(q) ||
        pkg.destination.toLowerCase().includes(q) ||
        pkg.country.toLowerCase().includes(q) ||
        pkg.category.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (category && category !== 'All') {
      results = results.filter(pkg => pkg.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by maximum price
    if (maxPrice && !isNaN(maxPrice)) {
      results = results.filter(pkg => pkg.price <= Number(maxPrice));
    }

    // Sort results
    if (sortBy === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'duration') {
      results.sort((a, b) => a.durationDays - b.durationDays);
    }

    return results;
  },

  // Fetch package by ID
  async getPackageById(id) {
    await delay(300);
    const item = PACKAGES_DATA.find(pkg => pkg.id === id);
    if (!item) {
      throw new Error(`Package with ID "${id}" was not found.`);
    }
    return item;
  },

  // Fetch featured packages
  async getFeaturedPackages() {
    await delay(250);
    return PACKAGES_DATA.filter(pkg => pkg.featured);
  }
};
