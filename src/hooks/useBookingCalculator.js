import { useReducer, useMemo } from 'react';

// Pricing config in Indian Rupees (₹)
export const ADDON_PRICES = {
  insurance: 799,       // per guest in ₹
  airportTransfer: 1499, // flat in ₹ (AC Cab)
  privateGuide: 2499     // flat in ₹ (Govt. certified local guide)
};

const VALID_PROMOS = {
  'NAMASTE10': 0.10,    // 10% off
  'EXPLORE15': 0.15,    // 15% off
  'TRIPNEST500': 500,   // ₹500 flat off
  'TRIP10': 0.10        // 10% off
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GUESTS': {
      const guests = Math.max(1, Math.min(10, Number(action.payload) || 1));
      return { ...state, guests };
    }
    case 'TOGGLE_ADDON': {
      const addon = action.payload;
      return {
        ...state,
        addons: {
          ...state.addons,
          [addon]: !state.addons[addon]
        }
      };
    }
    case 'SET_PROMO_CODE': {
      return {
        ...state,
        promoCodeInput: action.payload,
        promoError: ''
      };
    }
    case 'APPLY_PROMO': {
      const code = state.promoCodeInput.trim().toUpperCase();
      if (!code) {
        return { ...state, promoError: 'Please enter a coupon code.' };
      }
      if (VALID_PROMOS[code]) {
        return {
          ...state,
          appliedPromo: code,
          promoDiscount: VALID_PROMOS[code],
          promoError: '',
          promoSuccess: `Coupon ${code} applied successfully!`
        };
      }
      return {
        ...state,
        promoError: 'Invalid coupon. Try NAMASTE10, TRIPNEST500 or EXPLORE15'
      };
    }
    case 'REMOVE_PROMO': {
      return {
        ...state,
        appliedPromo: null,
        promoDiscount: 0,
        promoSuccess: '',
        promoError: '',
        promoCodeInput: ''
      };
    }
    case 'RESET': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const useBookingCalculator = (basePrice = 24999, initialGuests = 1) => {
  const initialCalculatorState = {
    guests: initialGuests,
    addons: {
      insurance: true,
      airportTransfer: false,
      privateGuide: false
    },
    promoCodeInput: '',
    appliedPromo: null,
    promoDiscount: 0,
    promoError: '',
    promoSuccess: ''
  };

  const [state, dispatch] = useReducer(calculatorReducer, initialCalculatorState);

  // Computed pricing breakdowns in Indian Rupees (₹)
  const pricing = useMemo(() => {
    const baseTotal = basePrice * state.guests;
    let addonsTotal = 0;

    if (state.addons.insurance) {
      addonsTotal += ADDON_PRICES.insurance * state.guests;
    }
    if (state.addons.airportTransfer) {
      addonsTotal += ADDON_PRICES.airportTransfer;
    }
    if (state.addons.privateGuide) {
      addonsTotal += ADDON_PRICES.privateGuide;
    }

    const subtotal = baseTotal + addonsTotal;
    let discountAmount = 0;

    if (state.appliedPromo) {
      if (typeof state.promoDiscount === 'number' && state.promoDiscount < 1) {
        discountAmount = Math.round(subtotal * state.promoDiscount);
      } else if (typeof state.promoDiscount === 'number') {
        discountAmount = state.promoDiscount;
      }
    }

    const taxableAmount = Math.max(0, subtotal - discountAmount);
    const taxesAndFees = Math.round(taxableAmount * 0.05); // 5% GST for Indian tour packages
    const grandTotal = taxableAmount + taxesAndFees;

    return {
      basePrice,
      baseTotal,
      addonsTotal,
      subtotal,
      discountAmount,
      taxesAndFees,
      grandTotal
    };
  }, [basePrice, state.guests, state.addons, state.appliedPromo, state.promoDiscount]);

  return {
    state,
    pricing,
    dispatch
  };
};

export default useBookingCalculator;
