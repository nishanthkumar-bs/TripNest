// TripNest Services Data for Nested Routing

export const SERVICES_DATA = {
  flights: {
    id: 'flights',
    title: 'Flight Bookings & Private Jet Charters',
    headline: 'Seamless global aviation connections with 500+ trusted airlines',
    badge: 'Fast & Flexible',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    description: 'Whether you need flexible business class seats across transatlantic routes or a private charter to an exclusive island airstrip, TripNest negotiates preferential rates, guarantees free cancellation windows, and provides 24/7 flight monitoring.',
    features: [
      {
        title: 'Price Lock Guarantee',
        desc: 'Hold your preferred flight fare for up to 72 hours while you finalize travel dates.'
      },
      {
        title: 'Complimentary Baggage & Seat Selection',
        desc: 'Pre-assigned extra legroom seats and verified luggage allowances on all partner airlines.'
      },
      {
        title: '24/7 Flight Disruption Protection',
        desc: 'Automated rebooking, lounge passes, and immediate support if your flight is delayed or cancelled.'
      },
      {
        title: 'Private Jet Concierge',
        desc: 'Direct access to light, mid-size, and long-range private aircraft charters worldwide.'
      }
    ],
    faqs: [
      { q: 'Can I change my flight dates after booking?', a: 'Yes! TripNest packages include one complimentary date change up to 14 days before departure.' },
      { q: 'Do you offer airline loyalty miles?', a: 'Yes, provide your frequent flyer numbers at checkout to accumulate airline rewards normally.' }
    ]
  },
  hotels: {
    id: 'hotels',
    title: 'Boutique Hotels & Luxury Island Stays',
    headline: 'Handpicked stays offering unmatched character, comfort, and service',
    badge: 'Curated Collection',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'We do not list tens of thousands of random hotels. Our hospitality curators physically inspect every hotel, villa, and eco-lodge in our portfolio to guarantee high hygiene, exquisite design, and authentic hospitality.',
    features: [
      {
        title: 'VIP Room Upgrades',
        desc: 'Automatic priority complimentary room upgrades upon availability at check-in.'
      },
      {
        title: 'Daily Gourmet Breakfasts',
        desc: 'All TripNest hotel bookings include daily artisanal breakfast for all guests.'
      },
      {
        title: 'Hotel Credit Vouchers',
        desc: 'Up to ₹8,500 resort dining & spa credit per stay to spend on wellness treatments or activities.'
      },
      {
        title: 'Early Check-in & Late Check-out',
        desc: 'Guaranteed flexible check-in and late checkout privileges so you travel stress-free.'
      }
    ],
    faqs: [
      { q: 'Are resort fees included in the shown prices?', a: 'TripNest displays all-inclusive transparent prices with zero hidden check-in fees or surprise local taxes.' },
      { q: 'Can I request connected family suites?', a: 'Yes, our concierge ensures confirmed adjoining suites for families travelling with children.' }
    ]
  },
  'custom-tours': {
    id: 'custom-tours',
    title: 'Tailor-Made Itineraries & Private Guides',
    headline: 'Personalized travel crafted strictly around your passions, pace, and style',
    badge: 'Bespoke Experience',
    heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    description: 'Do not settle for rigid bus tours. Our destination architects craft 100% custom day-by-day itineraries with private chauffeurs, historian guides, and exclusive behind-the-scenes access to world landmarks.',
    features: [
      {
        title: 'Private Historian & Wildlife Guides',
        desc: 'Explore ancient ruins or national parks with licensed, engaging local professionals.'
      },
      {
        title: 'Flexible Daily Pacing',
        desc: 'Wake up when you want, stay longer at places you love, and adjust the schedule spontaneously.'
      },
      {
        title: 'Exclusive Access Experiences',
        desc: 'Private after-hours museum entries, private yacht charters, and dinners with local chefs.'
      },
      {
        title: 'Dedicated Trip Designer',
        desc: 'One-on-one consultation with a regional destination specialist who designs your itinerary.'
      }
    ],
    faqs: [
      { q: 'How far in advance should I plan a custom itinerary?', a: 'We recommend 4 to 8 weeks, but our concierge team can put together luxury itineraries in as little as 5 days.' },
      { q: 'Can custom tours accommodate dietary restrictions?', a: 'Absolutely. We notify all restaurants and private chefs in advance of your specific dietary needs.' }
    ]
  },
  'visa-insurance': {
    id: 'visa-insurance',
    title: 'Visa Assistance & Global Travel Insurance',
    headline: 'Comprehensive travel security and hassle-free visa processing support',
    badge: 'Total Peace of Mind',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    description: 'Travel with absolute confidence. Our legal travel team handles paperwork, appointments, and consular filing for visas, while our comprehensive insurance protects against emergency medical fees, lost luggage, and trip cancellations.',
    features: [
      {
        title: 'End-to-End Visa Filing',
        desc: 'Document verification, form preparation, embassy appointment booking, and visa tracking.'
      },
      {
        title: '₹50 Lakh Emergency Medical Cover',
        desc: 'Worldwide cashless hospital coverage with international air ambulance evacuation support.'
      },
      {
        title: 'Cancel For Any Reason (CFAR)',
        desc: 'Optional insurance rider reimbursing up to 85% of non-refundable booking expenses.'
      },
      {
        title: 'Baggage & Tech Equipment Protection',
        desc: 'Full coverage for delayed baggage, lost passports, laptops, and camera gear.'
      }
    ],
    faqs: [
      { q: 'Which countries do you process tourist visas for?', a: 'Schengen Area, UK, USA, Japan, Australia, New Zealand, UAE, Singapore, Indonesia, and over 60 other nations.' },
      { q: 'When is travel insurance activated?', a: 'Your insurance starts the moment your booking is confirmed, covering pre-departure cancellations immediately.' }
    ]
  }
};
