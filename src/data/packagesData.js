// TripNest Curated Travel Packages Database (India & Global)
// All pricing configured in Indian Rupees (INR - ₹)

export const PACKAGES_DATA = [
  {
    id: 'kashmir-paradise-gulmarg',
    title: 'Kashmir Paradise: Dal Lake, Gulmarg & Pahalgam',
    tagline: 'Stay in luxury houseboats, ride the Gulmarg Gondola & stroll through saffron valleys',
    destination: 'Srinagar, Gulmarg & Pahalgam',
    country: 'India',
    region: 'North India',
    category: 'Mountain',
    price: 24999,
    originalPrice: 29500,
    durationDays: 6,
    durationNights: 5,
    rating: 4.96,
    reviewsCount: 188,
    featured: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'Experience Jannat-e-Kashmir — true heaven on earth. Enjoy sunset Shikara rides on the tranquil waters of Dal Lake, marvel at snow-capped peaks from the world-famous Gulmarg Gondola at 14,000 ft, and explore the rushing Lidder river in picturesque Pahalgam.',
    highlights: [
      'Sunset Shikara ride on Dal Lake with floating flower markets',
      'Phase 1 & Phase 2 Gulmarg Gondola cable car tickets included',
      'Day trip to Betaab Valley, Aru Valley & Chandanwari in Pahalgam',
      'Authentic Kashmiri Wazwan multi-course dinner & Kahwa tea tasting'
    ],
    included: [
      '1 night in a heritage carved Cedar Houseboat on Dal Lake',
      '4 nights in 4-star mountain boutique hotels with central heating',
      'Daily breakfast and royal dinner buffet',
      'Private chauffeured heating-enabled Innova for all sightseeing',
      'Certified local Kashmiri tour guide & airport transfers'
    ],
    excluded: [
      'Domestic flights to Srinagar Airport (SXR)',
      'Pony rides and personal winter jacket / boots rental',
      'Personal shopping for Pashmina shawls and dry fruits'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar & Heritage Houseboat Check-in', desc: 'Warm reception at Srinagar Airport, transfer to Dal Lake houseboat, afternoon Shikara ride past Mughal gardens, and evening saffron tea.' },
      { day: 2, title: 'Mughal Gardens & Shankaracharya Temple', desc: 'Visit Nishat Bagh (Garden of Bliss), Shalimar Bagh, and the historic Shankaracharya Hilltop Temple overlooking the valley.' },
      { day: 3, title: 'Excursion to Gulmarg Meadow of Flowers', desc: 'Drive through pine forests to Gulmarg, board the cable car Gondola to Phase 2 snow line, and optional skiing or sledge rides.' },
      { day: 4, title: 'Scenic Transfer to Pahalgam Valley', desc: 'Drive via saffron fields of Pampore and Awantipora ruins to Pahalgam along the gushing Lidder River.' },
      { day: 5, title: 'Betaab Valley & Baisaran Mini Switzerland', desc: 'Explore Betaab Valley, Aru Valley, and scenic pine meadows on local cabs or gentle pony walks.' },
      { day: 6, title: 'Souvenir Shopping & Srinagar Departure', desc: 'Morning visit to Lal Chowk spice and handicraft markets, followed by airport drop-off.' }
    ]
  },
  {
    id: 'kerala-backwaters-munnar',
    title: 'Kerala Gods Own Country: Munnar Hills & Alleppey Houseboat',
    tagline: 'Misty tea plantations, tranquil palm-fringed backwaters & soothing Ayurvedic retreats',
    destination: 'Munnar & Alleppey',
    country: 'India',
    region: 'South India',
    category: 'Nature',
    price: 18499,
    originalPrice: 22000,
    durationDays: 5,
    durationNights: 4,
    rating: 4.94,
    reviewsCount: 165,
    featured: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 10,
    overview: 'Discover Kerala’s timeless serenity. Breathe in the crisp mountain air of Munnar’s emerald tea estates, visit cascading Cheeyappara waterfalls, enjoy an authentic Kathakali cultural show, and cruise overnight on a private traditional Kettuvallam houseboat through Alleppey’s backwaters.',
    highlights: [
      'Exclusive private bedroom Houseboat cruise in Alleppey backwaters',
      'Kolukkumalai sunrise jeep safari overlooking misty clouds',
      'Authentic Kerala Sadhya meal served on banana leaves',
      'Traditional Ayurvedic rejuvenation herbal massage session'
    ],
    included: [
      '1 night in an air-conditioned deluxe Houseboat with all meals',
      '3 nights in 4-star tea valley resorts with mountain views',
      'Daily authentic South Indian & continental buffet breakfast',
      'Private air-conditioned Sedan/SUV for all intercity transfers',
      'Tea museum entry passes and spice plantation guided tour'
    ],
    excluded: [
      'Airfare/Train to Cochin International Airport (COK)',
      'Personal water sports activities',
      'Tips to boatmen and drivers'
    ],
    itinerary: [
      { day: 1, title: 'Cochin Arrival & Scenic Munnar Drive', desc: 'Pick-up from Cochin Airport or Ernakulam station, scenic drive through Cheeyappara & Valara waterfalls, check into Munnar resort.' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam Park', desc: 'Visit Eravikulam National Park to spot endangered Nilgiri Tahr, Mattupetty Dam boat ride, and Echo Point.' },
      { day: 3, title: 'Spice Plantations & Periyar Thekkady', desc: 'Travel to Thekkady, guided stroll through cardamom and vanilla spice gardens, and evening Kalaripayattu martial arts show.' },
      { day: 4, title: 'Alleppey Backwaters Houseboat Cruise', desc: 'Board your private houseboat in Alleppey. Glide along Vembanad Lake watching village life while chef cooks fresh Karimeen fish.' },
      { day: 5, title: 'Cochin Heritage Walk & Farewell', desc: 'Morning cruise return, heritage stroll past Fort Kochi Chinese Fishing Nets, and airport drop-off.' }
    ]
  },
  {
    id: 'rajasthan-royal-heritage',
    title: 'Royal Rajasthan: Jaipur, Udaipur & Lake Palaces',
    tagline: 'Historic grand fortresses, lakefront royal havelis, camel safaris & royal dining',
    destination: 'Jaipur & Udaipur',
    country: 'India',
    region: 'North-West India',
    category: 'Cultural',
    price: 27500,
    originalPrice: 32000,
    durationDays: 6,
    durationNights: 5,
    rating: 4.97,
    reviewsCount: 142,
    featured: true,
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 14,
    overview: 'Step into the era of Maharajas and royal courts. Marvel at the pink sandstone grandeur of Jaipur’s Amber Fort and Hawa Mahal, then travel to Udaipur—the City of Lakes—for an unforgettable private boat cruise on Lake Pichola with views of the illuminated Taj Lake Palace.',
    highlights: [
      'Guided walk through Amber Fort, Nahargarh & City Palace in Jaipur',
      'Private sunset boat cruise on Lake Pichola in Udaipur',
      'Authentic Rajasthani royal dinner with live Ghoomar folk dance',
      'Heritage haveli stay with ornate jharokha balconies'
    ],
    included: [
      '5 nights in heritage palatial hotels with royal welcome garland',
      'Daily royal breakfast and 2 celebratory Rajasthani thali dinners',
      'Private air-conditioned chauffeur-driven cab throughout the tour',
      'Certified historian guides at all UNESCO monuments and forts',
      'Monument entry fast-track passes'
    ],
    excluded: [
      'Flights/train tickets to Jaipur / from Udaipur',
      'Camera permits and personal shopping for handicrafts'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Jaipur Pink City', desc: 'Pick up from Jaipur Airport, hotel check-in with traditional aarti, evening visit to Birla Mandir and Chokhi Dhani.' },
      { day: 2, title: 'Amber Fort & Hawa Mahal Discovery', desc: 'Morning visit to magnificent Amber Fort, photo stop at Jal Mahal, tour of City Palace museum and Jantar Mantar observatory.' },
      { day: 3, title: 'Scenic Highway to Romantic Udaipur', desc: 'Travel southwest across Aravalli hills to Udaipur, evening stroll along Fateh Sagar Lake and Bagore Ki Haveli puppet show.' },
      { day: 4, title: 'City Palace & Lake Pichola Boat Cruise', desc: 'Grand tour of Udaipur City Palace, Saheliyon Ki Bari royal gardens, and a magical sunset boat ride on Lake Pichola.' },
      { day: 5, title: 'Kumbhalgarh Fort Day Excursion', desc: 'Day trip to Kumbhalgarh Fort, home to the second-longest continuous wall in the world after the Great Wall of China.' },
      { day: 6, title: 'Artisanal Bazaars & Departure', desc: 'Shop for miniature paintings and silver jewelry, transfer to Maharana Pratap Airport Udaipur.' }
    ]
  },
  {
    id: 'goa-coastal-escape',
    title: 'Goa Coastal Haven: Sun, Sand & Latin Heritage',
    tagline: 'Golden beaches, Portuguese architecture in Fontainhas, sunset cruises & water sports',
    destination: 'North & South Goa',
    country: 'India',
    region: 'West Coast India',
    category: 'Beach',
    price: 14999,
    originalPrice: 18500,
    durationDays: 4,
    durationNights: 3,
    rating: 4.88,
    reviewsCount: 210,
    featured: false,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'Unwind in India’s favorite beach haven. Discover the contrast between vibrant North Goa beaches (Calangute, Anjuna, Baga) and the serene white sands of South Goa (Palolem, Colva). Stroll through colorful colonial Portuguese bungalows in Fontainhas, Panaji.',
    highlights: [
      'Sunset Mandovi river catamaran cruise with live Goan music',
      'Heritage walking tour of Fontainhas Latin Quarter in Panaji',
      'Scuba diving or parasailing at Calangute beach',
      'Beachside candlelit dinner with fresh Goan prawn curry & feni'
    ],
    included: [
      '3 nights in a 4-star beachfront resort with swimming pool',
      'Daily buffet breakfast with Goan and Indian specialties',
      'Round-trip airport/railway station private transfers (Dabolim/Mopa)',
      'Full-day North Goa sightseeing and South Goa heritage tour',
      'Complimentary welcome drink on arrival'
    ],
    excluded: [
      'Flights/train tickets to Goa',
      'Motorized water sports fees',
      'Personal bar expenses'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Goa & Beach Sunset', desc: 'Pick-up from Goa Airport/Railway Station, check into beachfront resort, unwind by the pool, and sunset stroll at Baga Beach.' },
      { day: 2, title: 'North Goa Forts & Watersports', desc: 'Visit historic Fort Aguada overlooking the Arabian Sea, followed by Anjuna cliff market and watersports at Calangute.' },
      { day: 3, title: 'Old Goa Churches & Latin Quarter', desc: 'Tour UNESCO-listed Basilica of Bom Jesus, Se Cathedral, colorful streets of Fontainhas, and evening Mandovi sunset cruise.' },
      { day: 4, title: 'Souvenirs & Departure', desc: 'Morning cashew and spice shopping in Mapusa/Panaji, transfer to airport for departure.' }
    ]
  },
  {
    id: 'ladakh-pangong-high-altitude',
    title: 'Ladakh High Passes: Leh, Nubra Valley & Pangong Tso',
    tagline: 'Cross Khardung La at 17,582 ft, ride Bactrian camels & camp by glowing blue waters',
    destination: 'Leh, Nubra & Pangong',
    country: 'India',
    region: 'Trans-Himalayas',
    category: 'Adventure',
    price: 32999,
    originalPrice: 38000,
    durationDays: 7,
    durationNights: 6,
    rating: 4.98,
    reviewsCount: 114,
    featured: true,
    badge: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 10,
    overview: 'The ultimate Himalayan road journey. Cross Khardung La—one of the world’s highest motorable mountain passes—into the surreal white sand dunes of Nubra Valley. Ride double-humped camels in Hunder and sleep under a billion stars by the colour-shifting waters of Pangong Tso.',
    highlights: [
      'Camping overnight beside Pangong Tso lake under crystal clear night skies',
      'Crossing Khardung La pass at 17,582 ft altitude',
      'Double-humped Bactrian camel safari on Hunder sand dunes',
      'Visit to ancient Thiksey Monastery and Magnetic Hill phenomenon'
    ],
    included: [
      '6 nights in premium hotels & deluxe lakefront tents with heating',
      'Daily hearty mountain breakfast and warm dinners',
      'Dedicated 4x4 Scorpio / Innova with expert mountain driver',
      'Inner Line Permits (ILP) and Ladakh Ecology fees included',
      'Oxygen cylinder on-board for acclimatization safety'
    ],
    excluded: [
      'Airfare to Kushok Bakula Rimpochee Airport Leh (IXL)',
      'Camel ride fees at Hunder (approx. ₹350)',
      'Personal thermal gear'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Complete Rest', desc: 'Arrive at Leh Airport, check into hotel, mandatory complete rest for high-altitude acclimatization, evening walk in Leh Main Bazaar.' },
      { day: 2, title: 'Monasteries & Hall of Fame', desc: 'Visit Shey Palace, Thiksey Monastery, Sindhu Ghat, and the Kargil War Memorial Hall of Fame.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', desc: 'Ascent over Khardung La pass (17,582 ft), arrive in Nubra Valley, check into deluxe camp, evening camel ride at Hunder sand dunes.' },
      { day: 4, title: 'Diskit Monastery to Pangong Tso', desc: 'Visit 106 ft Maitreya Buddha statue at Diskit, scenic drive via Shyok River route directly to the turquoise blue waters of Pangong Lake.' },
      { day: 5, title: 'Sunrise at Pangong & Return to Leh', desc: 'Watch golden sunrise reflections across Pangong Tso, drive back to Leh crossing Chang La pass (17,590 ft).' },
      { day: 6, title: 'Magnetic Hill & Sangam Confluence', desc: 'Visit Magnetic Hill where cars defy gravity, confluence of Indus and Zanskar rivers, and Pathar Sahib Gurudwara.' },
      { day: 7, title: 'Leh Departure', desc: 'Farewell transfer to Leh Airport with unforgettable memories of the Himalayas.' }
    ]
  },
  {
    id: 'andaman-coral-islands',
    title: 'Andaman Tropical Sanctuary: Havelock & Radhanagar Beach',
    tagline: 'Pristine turquoise lagoons, scuba diving in living coral reefs & historic Cellular Jail',
    destination: 'Port Blair & Havelock Island',
    country: 'India',
    region: 'Island Territories',
    category: 'Beach',
    price: 28999,
    originalPrice: 34500,
    durationDays: 5,
    durationNights: 4,
    rating: 4.95,
    reviewsCount: 135,
    featured: true,
    badge: 'Island Gem',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 10,
    overview: 'Escape to India’s pristine tropical frontier. Walk along powdery white sands of Radhanagar Beach—voted the best beach in Asia by TIME. Snorkel with sea turtles at Elephant Beach, sail on premium Makruzz catamarans, and experience the stirring light & sound show at Cellular Jail.',
    highlights: [
      'Sunset at Radhanagar Beach (Beach No. 7), Asia’s top-rated shoreline',
      'Speedboat transfer and guided coral reef snorkeling at Elephant Beach',
      'Luxury high-speed catamaran cruise (Makruzz/Green Ocean) between islands',
      'Cellular Jail historic freedom struggle light & sound presentation'
    ],
    included: [
      '4 nights in 4-star beachfront eco-villas with private gardens',
      'Daily breakfast buffet with coastal delicacies',
      'High-speed ferry tickets in Premium/Royal category',
      'Private air-conditioned transfers at all destinations',
      'All island forest permits and boat boarding fees'
    ],
    excluded: [
      'Flight tickets to Veer Savarkar Airport Port Blair (IXZ)',
      'Scuba diving certification or sea karting fees',
      'Personal dining outside breakfast'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Port Blair & Cellular Jail', desc: 'Meet & greet at Port Blair airport, check into oceanfront hotel, afternoon visit to Cellular Jail and evening light & sound show.' },
      { day: 2, title: 'Cruise to Havelock & Radhanagar Sunset', desc: 'Board high-speed catamaran to Havelock Island (Swaraj Dweep), afternoon at Radhanagar Beach watching sunset over emerald waters.' },
      { day: 3, title: 'Elephant Beach Snorkeling & Coral Reef', desc: 'Speedboat ride to Elephant Beach for water sports, glass-bottom boat view of coral gardens, and evening cafe hopping.' },
      { day: 4, title: 'Catamaran Return to Port Blair & Chidiya Tapu', desc: 'Cruise back to Port Blair, sunset excursion to Chidiya Tapu bird sanctuary and coastal mangrove walk.' },
      { day: 5, title: 'Souvenirs & Departure', desc: 'Visit Sagarika Govt Cottage Industries emporium for pearl and seashell handicrafts, transfer to airport.' }
    ]
  },
  {
    id: 'varanasi-golden-triangle',
    title: 'Spiritual Varanasi & Golden Triangle Heritage',
    tagline: 'Sacred Ganga Aarti at Dashashwamedh Ghat, Taj Mahal sunrise & Old Delhi lanes',
    destination: 'Varanasi, Agra & Delhi',
    country: 'India',
    region: 'North India',
    category: 'Cultural',
    price: 21500,
    originalPrice: 25500,
    durationDays: 6,
    durationNights: 5,
    rating: 4.91,
    reviewsCount: 96,
    featured: false,
    badge: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'An unforgettable pilgrimage through the spiritual and architectural cradle of India. Stand before the illuminated Taj Mahal at dawn, walk through the ancient labyrinthine lanes of Varanasi (the world’s oldest living city), and experience the hypnotic evening Ganga Aarti.',
    highlights: [
      'Dawn rowing boat ride on the sacred Ganges river with morning chanting',
      'VIP terrace viewing of the grand evening Ganga Aarti ceremony',
      'Sunrise private tour of the Taj Mahal in Agra with certified historian',
      'Rickshaw foodie tour through Chandni Chowk in Old Delhi'
    ],
    included: [
      '5 nights in boutique heritage hotels with breakfast',
      'Chauffeured intercity air-conditioned vehicle throughout',
      'Boat cruise on the River Ganges with marigold offerings',
      'All monument entry tickets (Taj Mahal, Agra Fort, Sarnath)',
      'Historian guides in Delhi, Agra, and Varanasi'
    ],
    excluded: [
      'Domestic flights (Delhi - Varanasi)',
      'Camera fee at select monuments',
      'Personal temple donations'
    ],
    itinerary: [
      { day: 1, title: 'Delhi Highlights & Heritage Stroll', desc: 'Tour of Qutub Minar, India Gate, Humayun’s Tomb, and rickshaw ride past Chandni Chowk spice markets.' },
      { day: 2, title: 'Express Highway to Agra & Sunset Taj', desc: 'Drive via Yamuna Expressway to Agra, afternoon visit to Agra Fort, and sunset view of Taj Mahal from Mehtab Bagh across the river.' },
      { day: 3, title: 'Sunrise Taj Mahal & Flight to Varanasi', desc: 'Dawn visit inside Taj Mahal, transfer to airport for short flight to Varanasi, check into riverside heritage haveli.' },
      { day: 4, title: 'Ganges Boat Sunrise & Sarnath Buddhist Stupa', desc: 'Early morning boat ride along Assi and Manikarnika Ghats, afternoon excursion to Sarnath where Buddha gave his first sermon.' },
      { day: 5, title: 'Kashi Vishwanath Temple & Grand Aarti', desc: 'Visit sacred Kashi Vishwanath corridor, silk weaving artisan workshops, and evening VIP Ganga Aarti.' },
      { day: 6, title: 'Farewell Varanasi & Departure', desc: 'Morning breakfast with local Kachori Sabzi & Jalebi, airport drop-off.' }
    ]
  },
  {
    id: 'himachal-manali-spiti',
    title: 'Himachal Snow Trails: Manali, Solang Valley & Kasol',
    tagline: 'Snow-capped peaks, paragliding in Solang, Atal Tunnel crossing & Parvati Valley rivers',
    destination: 'Manali & Kasol',
    country: 'India',
    region: 'Himachal Pradesh',
    category: 'Mountain',
    price: 19999,
    originalPrice: 24000,
    durationDays: 5,
    durationNights: 4,
    rating: 4.92,
    reviewsCount: 178,
    featured: false,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 12,
    overview: 'The quintessential mountain escape. Drive through pine forests along the rushing Beas River to Manali. Cross the engineering marvel Atal Tunnel to Sissu in Lahaul Valley, soar above Solang on a paraglider, and unwind by the crystal streams of Kasol and Manikaran hot springs.',
    highlights: [
      'Crossing the 9 km long Atal Tunnel into Lahaul Valley waterfall country',
      'Paragliding and ATV quad biking in Solang Valley',
      'Trek to Jogini Waterfalls with panoramic mountain views',
      'Riverside bonfire camp in Kasol along the Parvati River'
    ],
    included: [
      '4 nights in 4-star mountain view cottages & luxury river camp',
      'Daily breakfast and dinner buffets',
      'Private air-conditioned/heating cab for all local sightseeing',
      'Green Tax, toll fees, and Rohtang/Sissu transit permits',
      'Campfire evening with live acoustic music'
    ],
    excluded: [
      'Travel to Chandigarh/Delhi starting point',
      'Paragliding / snow activities adventure fees',
      'Personal thermal outerwear'
    ],
    itinerary: [
      { day: 1, title: 'Chandigarh to Manali Scenic Drive', desc: 'Pick up from Chandigarh Airport/Station, scenic drive past Pandoh Dam and Kullu Shawl factories, evening check-in at Manali.' },
      { day: 2, title: 'Atal Tunnel & Sissu Lahaul Valley', desc: 'Drive through Atal Tunnel into Lahaul Valley, marvel at frozen waterfalls, snow activities, and return to Old Manali cafes.' },
      { day: 3, title: 'Solang Valley Adventures & Hadimba Temple', desc: 'Morning visit to 500-year-old wooden Hadimba Temple, Vashisht sulfur baths, afternoon paragliding and zorbing in Solang.' },
      { day: 4, title: 'Manali to Kasol Parvati Valley', desc: 'Transfer to scenic Kasol, visit Manikaran hot springs Gurudwara, evening bonfire camp beside the roaring Parvati River.' },
      { day: 5, title: 'Kasol Stroll & Chandigarh Departure', desc: 'Morning stroll in Chalal village, scenic return drive to Chandigarh for evening flights.' }
    ]
  },
  {
    id: 'ranthambore-tiger-safari',
    title: 'Ranthambore & Corbett Royal Bengal Tiger Safari',
    tagline: 'Track wild tigers in ancient ruins, luxury jungle lodges & open-top 4x4 jeep safaris',
    destination: 'Ranthambore & Corbett',
    country: 'India',
    region: 'Wildlife Reserves',
    category: 'Wildlife',
    price: 26000,
    originalPrice: 31000,
    durationDays: 5,
    durationNights: 4,
    rating: 4.96,
    reviewsCount: 88,
    featured: false,
    badge: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 6,
    overview: 'Enter the wild domain of the Royal Bengal Tiger. Explore the dramatic dry deciduous forests of Ranthambore under the shadow of its 10th-century fortress, followed by tracking wild elephants, leopards, and over 300 exotic bird species with master naturalists.',
    highlights: [
      '3 exclusive open-top 4x4 Maruti Gypsy jungle safaris in core zones',
      'Guided tracking by certified government wildlife naturalists',
      'Visit to ancient 10th-century Ranthambore Fort inside the park',
      'Stay in eco-luxury heritage jungle lodge with evening naturalist talks'
    ],
    included: [
      '4 nights in luxury wildlife resort with swimming pool',
      'All meals included (Buffet breakfast, lunch, high tea, dinner)',
      'Confirmed forest department safari permits & Gypsy vehicle fees',
      'Private station/airport transfers from Sawai Madhopur/Jaipur',
      'Naturalist & driver tips assistance'
    ],
    excluded: [
      'Air/Train fare to Jaipur or Sawai Madhopur',
      'Professional heavy camera lens entry permits ($5-10)'
    ],
    itinerary: [
      { day: 1, title: 'Jaipur to Ranthambore & Lodge Welcome', desc: 'Pick up from Jaipur Airport, drive to Ranthambore, check into jungle lodge, evening wildlife documentary briefing.' },
      { day: 2, title: 'Morning & Afternoon Core Zone Safaris', desc: 'Pre-dawn core zone tiger tracking in open gypsy, afternoon second safari exploring ancient lakes where tigers hunt sambar deer.' },
      { day: 3, title: 'Ranthambore Fort & Village Art Stroll', desc: 'Hike to the historic hilltop fort with panoramic jungle views, afternoon Dastkar handicraft center visit supporting local women.' },
      { day: 4, title: 'Third Safari & Birdwatching Excursion', desc: 'Morning game drive tracking leopards and sloth bears, afternoon birdwatching walk along Surwal lake.' },
      { day: 5, title: 'Final Morning Breakfast & Jaipur Transfer', desc: 'Hearty jungle breakfast, check-out, and comfortable transfer back to Jaipur Airport.' }
    ]
  },
  {
    id: 'bali-tropical-escape',
    title: 'Bali Tropical Haven & Cultural Escape',
    tagline: 'Lush rice terraces, sacred water temples & serene private beachfronts',
    destination: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    category: 'Beach',
    price: 68500,
    originalPrice: 79000,
    durationDays: 7,
    durationNights: 6,
    rating: 4.95,
    reviewsCount: 142,
    featured: false,
    badge: 'International',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'Experience the magic of Bali, Indonesia’s island paradise. From spiritual mornings in Ubud amid emerald rice paddies to sunsets at Uluwatu Cliff Temple and snorkeling with mantas in Nusa Penida.',
    highlights: [
      'Sunrise breakfast overlooking Mount Batur caldera',
      'Private day catamaran trip to Nusa Penida and Kelingking beach',
      'Traditional Balinese spa ritual and herbal flower bath',
      'Guided cultural visit to Tirta Empul water temple'
    ],
    included: [
      '6 nights in boutique 4-star eco-villas with breakfast',
      'Private air-conditioned airport and excursion transfers',
      'English-speaking certified local tour guide',
      'All temple entry fees and speedboat permits',
      'Welcome dinner with traditional Kecak dance'
    ],
    excluded: [
      'International flights from India',
      'Personal expenses and shopping'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Denpasar & Ubud Check-in', desc: 'VIP welcome at Denpasar Airport, scenic transfer to Ubud forest resort, cocktail dinner.' },
      { day: 2, title: 'Tegalalang Rice Terraces & Swing', desc: 'Morning visit to rice terraces, giant swing experience, and monkey sanctuary.' },
      { day: 3, title: 'Tirta Empul & Luwak Coffee Plantation', desc: 'Purification blessing at Tirta Empul water temple followed by organic coffee tasting.' },
      { day: 4, title: 'Seminyak Coast & Beach Club', desc: 'Coastal drive to Seminyak, check into beachfront resort, sunset at Potato Head.' },
      { day: 5, title: 'Nusa Penida Island Speedboat Day Trip', desc: 'Fast boat crossing, Kelingking beach viewpoints, and snorkeling with manta rays.' },
      { day: 6, title: 'Uluwatu Clifftop Temple & Fire Dance', desc: 'Clifftop temple sunset with famous Kecak dance followed by seafood dinner on Jimbaran beach.' },
      { day: 7, title: 'Art Markets & Departure', desc: 'Artisanal craft shopping in Seminyak, airport drop-off.' }
    ]
  },
  {
    id: 'swiss-alps-panoramic',
    title: 'Swiss Alps & Scenic Glacier Express',
    tagline: 'Snow-capped peaks, alpine lakes & world-class mountain railways',
    destination: 'Interlaken & Zermatt',
    country: 'Switzerland',
    region: 'Europe',
    category: 'Mountain',
    price: 145000,
    originalPrice: 168000,
    durationDays: 8,
    durationNights: 7,
    rating: 4.98,
    reviewsCount: 98,
    featured: false,
    badge: 'International',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 10,
    overview: 'Witness the quintessential European dream across Zurich, Lucerne, Interlaken, and the iconic Matterhorn in Zermatt on the world-famous Glacier Express.',
    highlights: [
      'Scenic first-class Glacier Express journey across alpine passes',
      'Jungfraujoch cogwheel railway journey to 3,454m Top of Europe',
      'Boat cruise on Lake Lucerne with views of Mount Pilatus',
      'Swiss fondue dinner in a rustic alpine chalet'
    ],
    included: [
      '7 nights in Swiss heritage 4-star hotels with breakfast',
      'Swiss Travel Pass for unlimited train, boat, and bus travel',
      'All seat reservations on premium panoramic trains',
      'Luggage transfer between hotels'
    ],
    excluded: [
      'Flights from India to Zurich (ZRH)',
      'Personal dining outside planned dinners'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Zurich & Train to Lucerne', desc: 'Arrival at Zurich Airport, scenic rail journey along lake shores to Lucerne.' },
      { day: 2, title: 'Lake Lucerne Cruise & Mount Rigi', desc: 'Steamer cruise across fjord waters, cogwheel train ascent to Mount Rigi.' },
      { day: 3, title: 'GoldenPass Line to Interlaken', desc: 'Panoramic rail journey over Brunig Pass to Interlaken between two lakes.' },
      { day: 4, title: 'Jungfraujoch: Top of Europe', desc: 'Ascent to the highest railway station in Europe, Ice Palace tour.' },
      { day: 5, title: 'Lauterbrunnen Valley of Waterfalls', desc: 'Walk through the dramatic valley of 72 cascading glacial waterfalls.' },
      { day: 6, title: 'Glacier Express Train to Zermatt', desc: 'Arrival in car-free Zermatt with unobstructed views of the Matterhorn.' },
      { day: 7, title: 'Gornergrat Railway & Alpine Hike', desc: 'Open-air cog railway to 3,089m with reflections in Lake Riffelsee.' },
      { day: 8, title: 'Zurich Return & Departure', desc: 'Scenic express train return to Zurich for flight connection.' }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Mountain',
  'Beach',
  'Cultural',
  'Nature',
  'Adventure',
  'Wildlife'
];
