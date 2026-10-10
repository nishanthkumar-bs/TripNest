# ✈️ TripNest — Final Frontend Application Project

> **Task 15 – Final Frontend Application Project**  
> **Topic:** TripNest Travel Booking Application (Incredible India & Global Escapes)  
> **Framework:** React 19 + Vite + React Router DOM v7 + Redux Toolkit  
> **Currency:** Indian Rupees (₹ - INR)  

---

## 🌟 Overview
**TripNest** is a modern, responsive, and feature-rich travel booking frontend application built with React. It allows travelers to discover authentic Indian destinations (Kashmir, Kerala, Rajasthan, Goa, Ladakh, Andaman, Varanasi, Himachal, Ranthambore) alongside international destinations, inspect detailed day-by-day itineraries, customize trip add-ons with a live price calculator in **Indian Rupees (₹)**, manage reservations with complete CRUD functionality, explore specialized travel services via nested routing, and curate a personal bucket list.

---

## 🇮🇳 Indian Destinations & Content

- **Kashmir Paradise (Srinagar, Gulmarg & Pahalgam)**: Houseboat stays on Dal Lake, Phase 2 Gondola rides, saffron valley walks, and authentic Wazwan cuisine — `₹24,999`.
- **Kerala Gods Own Country (Munnar & Alleppey)**: Backwater luxury houseboats, misty tea plantation treks, and Ayurvedic healing retreats — `₹18,499`.
- **Royal Rajasthan (Jaipur & Udaipur)**: Amber Fort, Lake Pichola sunset boat cruise, and royal heritage haveli stays — `₹27,500`.
- **Goa Coastal Haven (North & South Goa)**: Golden sand beaches, Fontainhas Latin Quarter heritage stroll, and Mandovi sunset cruises — `₹14,999`.
- **Ladakh High Mountain Passes (Leh, Nubra & Pangong Tso)**: Crossing Khardung La at 17,582 ft, Hunder double-humped camel safari, and Pangong lake camping — `₹32,999`.
- **Andaman Tropical Sanctuary (Havelock & Port Blair)**: Asia's top Radhanagar Beach, living coral reefs, and historic Cellular Jail — `₹28,999`.
- **Spiritual Varanasi & Golden Triangle**: Sacred evening Ganga Aarti at Dashashwamedh Ghat, dawn boat rides, and Taj Mahal sunrise — `₹21,500`.
- **Himachal Snow Trails (Manali, Solang & Kasol)**: Atal Tunnel crossing, Solang paragliding, and Parvati river camps — `₹19,999`.
- **Ranthambore & Corbett Bengal Tiger Safari**: 4x4 open-top Gypsy core-zone safaris and naturalist tracking — `₹26,000`.
- Plus international favorites: Bali, Swiss Alps, and Maldives in Indian Rupees.

---

## 🚀 Key Features

### 1. Navigation & Routing (React Router DOM)
- **Minimum 5 Menus/Pages Implemented:**
  1. **Home (`/`)**: Hero section with interactive Indian search bar, value proposition pillars, featured packages, category exploration, live traveler statistics, and customer testimonials (Bengaluru, Chennai, Mumbai).
  2. **Destinations & Packages (`/packages`)**: Comprehensive package catalog with **`useSearchParams`**, real-time keyword search, experience style filters, budget range slider in **Rupees (`₹10,000` to `₹1,50,000`)**, and sorting dropdown.
  3. **Package Details (`/packages/:id`)**: Dynamic route demonstrating **`useParams`**, full photo showcase, journey highlights, interactive day-by-day itinerary accordion, what's included/excluded, and a sticky booking widget in **₹**.
  4. **My Bookings (`/bookings`)**: Centralized reservation hub with full **CRUD operations** (Create, Read, Update, Delete), status filters (Confirmed, Pending, Cancelled), e-ticket modal preview, and print vouchers. Initial state is **0 bookings**.
  5. **Services & Concierge (`/services`)**: Parent layout demonstrating **Nested Routing** with `<Outlet />` and `<NavLink>` active tabs:
     - `/services/flights`: Commercial flights & private aircraft charters
     - `/services/hotels`: Boutique luxury hotels, palaces & island villas
     - `/services/custom-tours`: Tailor-made itineraries with private certified local guides
     - `/services/visa-insurance`: Global travel protection and consular visa assistance
  6. **Saved Trips (`/wishlist`)**: Personal bucket list connected to Redux. Initial state is **0 saved trips**.
  7. **About Us (`/about`)**: Company story, core philosophy, Indian expedition architects, milestone statistics, and interactive FAQ accordion.
  8. **Contact & Concierge (`/contact`)**: Form with field validation, **Indian mobile number format (`+91 98765 43210`)**, `useRef` error focusing, 24/7 hotline details (`+91 9876543210`), and Indian hubs (Bengaluru HQ, New Delhi, Mumbai, Kochi).
  9. **404 Not Found (`*`)**: Custom error page with fallback navigation.

---

## 📚 Session Topics & React Concepts Demonstrated

| Topic | Implementation in TripNest |
|---|---|
| **Components** | Modular, reusable UI components (`Navbar`, `Footer`, `PackageCard`, `BookingCard`, `BookingModal`, `Badge`, `RatingStars`, `Modal`, `LoadingSpinner`, `Toast`) |
| **Props** | Passed across parents and children for data binding, callbacks (`onQuickBook`, `onEdit`, `onCancel`, `onDelete`), and variant styles |
| **useState** | Filter queries, modal open/close states, active accordion items, form inputs, ticket printing preview |
| **useEffect** | Mock API data fetching, syncing bookings to `localStorage`, document title updates, scroll-to-top on route change |
| **useRef** | Auto-focusing traveler name and error fields in forms, closing mobile navigation dropdown on outside click |
| **useContext** | 1. `ThemeContext`: Dark/Light mode switch with root attribute & persistence<br>2. `NotificationContext`: Toast alerts system (`showNotification`) |
| **useReducer** | `useBookingCalculator` custom hook managing base prices in **₹**, guest count multipliers, add-ons (insurance, airport transfer, private guide), and coupon discounts (`NAMASTE10`, `TRIPNEST500`) |
| **Conditional Rendering** | Loading spinners vs. package grid, empty state fallbacks, status badge variants, modal visibility |
| **List Rendering** | `.map()` rendering destinations, itineraries, team members, testimonials, service features, and booking records |
| **API Integration** | `travelApi` service simulating realistic async Promise latency, search filtering, and error handling |
| **Custom Hooks** | `useDocumentTitle` (dynamic page titles), `useDebounce` (search input delay), `useBookingCalculator` (dynamic pricing in ₹ with `useReducer`) |
| **Redux Toolkit** | Centralized global store with `bookingSlice` (CRUD bookings, initialized to **0**) and `wishlistSlice` (bucket list items, initialized to **0**) synced to `localStorage` |
| **Nested Routing** | `/services` parent layout rendering child routes (`/services/flights`, `/services/hotels`, `/services/custom-tours`, `/services/visa-insurance`) using `<Outlet />` |
| **useParams** | `/packages/:id` dynamic lookup for package details and itineraries |
| **useSearchParams** | `/packages?search=kashmir&category=mountain&sortBy=rating` bookmarkable and reload-safe URL query parameters |
| **CRUD Operations** | **Create** new bookings via modal with Indian phone number, **Read** existing bookings with search & status filters, **Update** / reschedule dates & guests, **Delete** / cancel bookings |
| **Form Validation** | Name length, email regex, Indian 10-digit mobile number format (`+91 98765 43210`), future departure dates, and terms agreements with inline error messages |
| **Responsive UI** | Mobile navigation drawer, adaptive CSS grids, glassmorphism, tailored typography (`Plus Jakarta Sans` & `Outfit`), and dark/light themes |

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173/](http://localhost:5173/) to view the application.
