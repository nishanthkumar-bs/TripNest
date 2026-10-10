import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    wishlist: wishlistReducer
  }
});

export default store;
