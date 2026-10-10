import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage if present, default to empty array [] (0 bookings initial)
const loadBookingsFromStorage = () => {
  try {
    const saved = localStorage.getItem('tripnest_bookings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Clean legacy dummy test items if any
      if (Array.isArray(parsed) && parsed.some(b => b.id === 'TN-84920' || b.id === 'TN-63104')) {
        localStorage.removeItem('tripnest_bookings');
        return [];
      }
      return parsed;
    }
  } catch (err) {
    console.error('Error loading bookings from localStorage:', err);
  }
  return [];
};

const saveBookingsToStorage = (bookings) => {
  try {
    localStorage.setItem('tripnest_bookings', JSON.stringify(bookings));
  } catch (err) {
    console.error('Error saving bookings to localStorage:', err);
  }
};

const initialState = {
  items: loadBookingsFromStorage(),
  filterStatus: 'All', // 'All', 'Confirmed', 'Pending', 'Cancelled'
  searchQuery: ''
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    // CREATE
    addBooking: (state, action) => {
      state.items.unshift(action.payload);
      saveBookingsToStorage(state.items);
    },
    // UPDATE
    updateBooking: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
        saveBookingsToStorage(state.items);
      }
    },
    // DELETE
    deleteBooking: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveBookingsToStorage(state.items);
    },
    // CANCEL STATUS
    cancelBooking: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.status = 'Cancelled';
        saveBookingsToStorage(state.items);
      }
    },
    // FILTER STATUS
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    // SEARCH
    setBookingSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    // CLEAR ALL
    clearBookings: (state) => {
      state.items = [];
      saveBookingsToStorage([]);
    }
  }
});

export const {
  addBooking,
  updateBooking,
  deleteBooking,
  cancelBooking,
  setFilterStatus,
  setBookingSearch,
  clearBookings
} = bookingSlice.actions;

export default bookingSlice.reducer;
