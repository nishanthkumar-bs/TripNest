import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage if present, default to empty array [] (0 wishlist initial)
const loadWishlistFromStorage = () => {
  try {
    const saved = localStorage.getItem('tripnest_wishlist');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Clean legacy dummy test items if any
      if (Array.isArray(parsed) && parsed.includes('santorini-luxury-cyclades')) {
        localStorage.removeItem('tripnest_wishlist');
        return [];
      }
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
};

const saveWishlistToStorage = (list) => {
  try {
    localStorage.setItem('tripnest_wishlist', JSON.stringify(list));
  } catch (err) {
    console.error('Error saving wishlist:', err);
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: loadWishlistFromStorage()
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter(item => item !== id);
      } else {
        state.items.push(id);
      }
      saveWishlistToStorage(state.items);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
      saveWishlistToStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToStorage([]);
    }
  }
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
