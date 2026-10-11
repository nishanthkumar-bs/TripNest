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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shikara_Dal_Lake.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gulmarg%20Gondola%2C%20Cable%20Car.JPG?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Empty%20shikara%20on%20Dal%20Lake%2C%20Srinagar%2C%20India%202013-08-23%20%28flickr%209967093983%29.jpg?width=800',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kerala%20backwaters%2C%20Houseboats%2C%20India.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Munnar%20-%20Tea%20Plantations.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kerala%20backwaters%2C%20Houseboats%2C%20India.jpg?width=800',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/East%20facade%20Hawa%20Mahal%20Jaipur%20from%20ground%20level%20%28July%202022%29%20-%20img%2001.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur%2003-2016%2002%20Amber%20Fort.jpg?width=800',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
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
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_of_Bom_Jesus.jpg?width=800'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pangong%20Tso%202.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pangong%20Tso%202.jpg?width=800',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Havelock%20Island%2C%20Radhanagar%20Beach%20before%20sunset%2C%20Andaman%20Islands.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Havelock%20Island%2C%20Radhanagar%20Beach%20before%20sunset%2C%20Andaman%20Islands.jpg?width=800',
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
    image: 'https://cdn.prod.website-files.com/63949d509fe8af79dd5c0917/65c3692f1899cd3145c064c7_varanasi-voyage-a-spiritual-journey-with-the-getsetup-community.png',
    gallery: [
      'https://cdn.prod.website-files.com/63949d509fe8af79dd5c0917/65c3692f1899cd3145c064c7_varanasi-voyage-a-spiritual-journey-with-the-getsetup-community.png',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Solang%20Valley%2C%20Manali.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Solang%20Valley%2C%20Manali.jpg?width=800',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Powerful%20Yawn%20of%20a%20Bengal%20Tiger%20at%20Ranthambore%20national%20park.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Powerful%20Yawn%20of%20a%20Bengal%20Tiger%20at%20Ranthambore%20national%20park.jpg?width=800',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brantan%20Bali%20Pura-Ulun-Danu-Bratan-01.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Brantan%20Bali%20Pura-Ulun-Danu-Bratan-01.jpg?width=800',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/CH.VS.Zermatt%202021-10-17%20Matterhorn%208726.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/CH.VS.Zermatt%202021-10-17%20Matterhorn%208726.jpg?width=800',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80'
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
  },
  {
    id: 'ooty-coonoor-nilgiri-hills',
    title: 'Ooty & Coonoor: Nilgiri Tea Gardens & Heritage Toy Train',
    tagline: 'Ride the UNESCO Nilgiri Mountain Railway, smell fresh eucalyptus & stroll pine lakes',
    destination: 'Ooty & Coonoor, Tamil Nadu',
    country: 'India',
    region: 'South India',
    category: 'Mountain',
    price: 14999,
    originalPrice: 18000,
    durationDays: 4,
    durationNights: 3,
    rating: 4.91,
    reviewsCount: 138,
    featured: true,
    badge: 'Hill Station Gem',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nilgiri%20Mountain%20Railway.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Nilgiri%20Mountain%20Railway.jpg?width=800',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'Escape to the Queen of Hill Stations in the Blue Nilgiri Mountains. Breathe in cool eucalyptus-scented air, wind through lush emerald tea estates on the historic steam-operated UNESCO Toy Train, take a boat out on tranquil Pykara Lake, and sample artisanal homemade chocolates.',
    highlights: [
      'UNESCO World Heritage Nilgiri Mountain Railway Toy Train ride',
      'Speedboat cruise on scenic Pykara Lake & Pykara Waterfalls',
      'Guided walk through Highfield Tea Factory & chocolate tasting',
      'Spectacular views from Dolphin’s Nose & Lamb’s Rock in Coonoor'
    ],
    included: [
      '3 nights in a colonial heritage boutique hill resort in Ooty',
      'Daily South Indian & continental buffet breakfast and dinner',
      'Confirmed Nilgiri Toy Train tickets',
      'Private chauffeured car for all sightseeing and Coonoor transfers',
      'Botanical Gardens & Rose Gardens entrance tickets'
    ],
    excluded: [
      'Travel to Coimbatore Airport / Railway Station',
      'Personal boating rentals and shopping expenses',
      'Optional pony rides around Ooty Lake'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Scenic Nilgiri Ghat Ascent', desc: 'Pick up from Coimbatore, scenic 3-hour drive past 36 hairpin bends to Ooty. Evening stroll along Ooty Lake and colonial market.' },
      { day: 2, title: 'Botanical Gardens & Doddabetta Peak', desc: 'Visit the Government Botanical Garden, Rose Garden with 20,000 varieties, and take in panoramic views from Doddabetta Peak (8,650 ft).' },
      { day: 3, title: 'Toy Train Ride & Coonoor Tea Trails', desc: 'Board the historic steam toy train from Ooty to Coonoor. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose viewpoint, and tea tasting at a heritage estate.' },
      { day: 4, title: 'Pykara Lake & Return Transfer', desc: 'Morning visit to picturesque Pykara Lake and waterfalls, followed by scenic descent transfer back to Coimbatore.' }
    ]
  },
  {
    id: 'meghalaya-living-roots-cherrapunji',
    title: 'Meghalaya: Cherrapunji, Dawki River & Living Root Bridges',
    tagline: 'Trek double-decker living root bridges & boat on the transparent Umngot river',
    destination: 'Shillong, Cherrapunji & Dawki',
    country: 'India',
    region: 'Northeast India',
    category: 'Nature',
    price: 21999,
    originalPrice: 26000,
    durationDays: 5,
    durationNights: 4,
    rating: 4.97,
    reviewsCount: 154,
    featured: true,
    badge: 'Trending',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Double%20decker%20living%20root%20bridge%2002.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Double%20decker%20living%20root%20bridge%2002.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dawki%20Lake%2C%20Meghalaya%2C%20India.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/NohKaLikai%20Falls%20V2%20Wiki.jpg?width=800'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 10,
    overview: 'Enter the enchanting Abode of the Clouds. Witness bio-engineering marvels like the Double-Decker Living Root Bridges handcrafted by the Khasi tribe over centuries, boat across the mirror-like transparent waters of the Umngot River in Dawki, and stand before the roaring Nohkalikai Falls in Cherrapunji.',
    highlights: [
      'Guided trek to the iconic Double-Decker Living Root Bridge in Nongriat',
      'Country boat ride on the crystal-clear glass waters of Umngot River, Dawki',
      'Walk through limestone stalactites inside ancient Mawsmai Caves',
      'Visit Mawlynnong — celebrated as Asia’s cleanest village'
    ],
    included: [
      '2 nights in boutique pine-wood cottages in Shillong',
      '2 nights in cliffside eco-resorts in Cherrapunji',
      'Daily breakfast and organic Khasi/Indian dinner meals',
      'Private SUV transport from Guwahati Airport with experienced mountain driver',
      'Local Khasi trekking guide for Nongriat root bridges'
    ],
    excluded: [
      'Flights to/from Guwahati Airport (GAU)',
      'Camera fees and personal gear rentals',
      'Adventure zip-lining activities over Mawkdok Dympep Valley'
    ],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong Scotland of the East', desc: 'Pick up from Guwahati, stop at scenic Umiam Lake (Barapani), and check into Shillong. Evening walk at Police Bazar.' },
      { day: 2, title: 'Cherrapunji Waterfalls & Mawsmai Caves', desc: 'Drive to Sohra (Cherrapunji). Marvel at Nohkalikai Falls, Seven Sisters Falls, and explore lit passages of Mawsmai limestone caves.' },
      { day: 3, title: 'The Double-Decker Living Root Bridge Trek', desc: 'Descend the ancient stone steps from Tyrna to Nongriat. Cross hanging suspension bridges and marvel at the living Ficus root bridges and natural turquoise swimming pools.' },
      { day: 4, title: 'Dawki Transparent River & Mawlynnong', desc: 'Drive to the Indo-Bangladesh border at Dawki. Enjoy a serene boat ride where boats appear to float on air on the Umngot River, followed by a visit to Mawlynnong village.' },
      { day: 5, title: 'Laitlum Canyons & Guwahati Departure', desc: 'Sunrise view at dramatic Laitlum Grand Canyon before descending to Guwahati Airport for onward flight.' }
    ]
  },
  {
    id: 'dubai-abu-dhabi-luxury-oasis',
    title: 'Dubai & Abu Dhabi: Desert Dunes, Sky Towers & Grand Mosque',
    tagline: 'Ascend the Burj Khalifa, cruise Dubai Marina & explore the Sheikh Zayed Grand Mosque',
    destination: 'Dubai & Abu Dhabi',
    country: 'United Arab Emirates',
    region: 'Middle East',
    category: 'Cultural',
    price: 48999,
    originalPrice: 56000,
    durationDays: 5,
    durationNights: 4,
    rating: 4.95,
    reviewsCount: 210,
    featured: true,
    badge: 'Luxury Choice',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Burj%20Khalifa%20%2816260269606%29.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sheikh%20Zayed%20Grand%20Mosque%20in%20Abu%20Dhabi%20-%20panoramio.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Burj%20Khalifa%20%2816260269606%29.jpg?width=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 14,
    overview: 'Experience the glitz, glamour, and rich Arabian heritage of the United Arab Emirates. Gaze down from the 124th floor of the world’s tallest skyscraper, bash through red desert dunes in a 4x4 Land Cruiser before an authentic bedouin feast under the stars, and admire the majestic white marble domes of the Sheikh Zayed Grand Mosque.',
    highlights: [
      'Burj Khalifa At the Top (Levels 124 & 125) tickets & Dubai Mall fountain show',
      'Premium 4x4 Desert Safari with dune bashing, camel rides, Tanoura dance & BBQ dinner',
      'Full-day Abu Dhabi tour including Sheikh Zayed Grand Mosque & Corniche drive',
      'Moonlight luxury Dhow dinner cruise along the glittering Dubai Marina skyline'
    ],
    included: [
      '4 nights in 4-star city-center luxury hotel (Bur Dubai/Deira/Downtown)',
      'Daily lavish international buffet breakfast',
      'All attraction tickets, sightseeing entries, and desert safari transfers',
      'UAE tourist visa assistance & mandatory travel medical insurance coverage',
      'Round-trip Dubai International Airport (DXB) private transfers'
    ],
    excluded: [
      'International flights from India to Dubai (DXB)',
      'Tourism Dirham fee payable directly at hotel check-in (~AED 15/night)',
      'Personal shopping at Gold Souk and Dubai Mall'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Dubai & Marina Dhow Dinner Cruise', desc: 'Welcome at Dubai International Airport, transfer to hotel. In the evening, board a traditional Arabian wooden dhow for a 2-hour Marina cruise with international dinner buffet.' },
      { day: 2, title: 'Half-Day Dubai City Tour & Burj Khalifa At the Top', desc: 'Visit Dubai Frame, Jumeirah Mosque, Burj Al Arab photo stop, followed by afternoon entry to Burj Khalifa 124th floor observatory and Dubai Mall dancing fountains.' },
      { day: 3, title: 'Red Dunes 4x4 Desert Safari & Bedouin Camp', desc: 'Morning leisure or Gold Souk shopping. At 3 PM, depart in 4x4 Land Cruisers for thrilling desert dune bashing, sandboarding, camel rides, henna painting, and BBQ buffet under Arabian stars.' },
      { day: 4, title: 'Full-Day Abu Dhabi Capital Tour', desc: 'Scenic coastal highway drive to Abu Dhabi. Marvel at the architectural masterpiece Sheikh Zayed Grand Mosque with 82 domes, drive past Emirates Palace and Ferrari World.' },
      { day: 5, title: 'Souvenir Shopping & Airport Departure', desc: 'Last-minute luxury shopping at Mall of the Emirates or Meena Bazaar before private transfer to Dubai International Airport.' }
    ]
  },
  {
    id: 'sikkim-darjeeling-himalayan-peaks',
    title: 'Sikkim & Darjeeling: Kanchenjunga Sunrises & Tsomgo Lake',
    tagline: 'Witness golden dawn over Mt. Kanchenjunga, visit Buddhist monasteries & ride the toy train',
    destination: 'Gangtok & Darjeeling',
    country: 'India',
    region: 'Northeast India',
    category: 'Mountain',
    price: 19999,
    originalPrice: 24500,
    durationDays: 6,
    durationNights: 5,
    rating: 4.93,
    reviewsCount: 122,
    featured: false,
    badge: 'Scenic Escape',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchenjunga%20range%20from%20Tiger%20Hill%2C%20Darjeeling.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tsomgo%20Lake%2C%20Sikkim%2C%20India.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchenjunga%20range%20from%20Tiger%20Hill%2C%20Darjeeling.jpg?width=800',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 10,
    overview: 'Soak in the spiritual peace and colossal grandeur of the Eastern Himalayas. Watch the first rays of sunlight turn Mt. Kanchenjunga (the world’s 3rd highest mountain) golden-orange from Tiger Hill, explore Tibetan prayer flags and chanting monks at Rumtek Monastery, and breathe crisp mountain air at high-altitude Tsomgo Lake at 12,400 ft.',
    highlights: [
      'Early morning Tiger Hill sunrise view of Mt. Kanchenjunga & Mt. Everest',
      'High-altitude excursion to sacred glacial Tsomgo (Changu) Lake & Baba Mandir',
      'Joy ride on the historic Darjeeling Himalayan Toy Train',
      'Visit to Happy Valley Tea Estate & Tibetan Buddhist Rumtek Monastery'
    ],
    included: [
      '3 nights in Gangtok & 2 nights in Darjeeling in 3-star/4-star mountain view hotels',
      'Daily hearty mountain breakfast and dinner',
      'Private SUV for all interstate hill transfers and sightseeing',
      'Inner Line Permits (ILP) processing for Sikkim border zones',
      'Bagdogra Airport (IXB) / NJP Railway Station transfers'
    ],
    excluded: [
      'Flights to Bagdogra Airport (IXB)',
      'Nathula Pass Indo-China border permit fee (subject to army permits on site)',
      'Personal yak ride rentals at Tsomgo Lake'
    ],
    itinerary: [
      { day: 1, title: 'Bagdogra Arrival & Drive to Gangtok', desc: 'Pick up from Bagdogra, scenic 4.5-hour drive along the roaring Teesta River to Gangtok. Evening leisure walk on vibrant MG Marg.' },
      { day: 2, title: 'Excursion to Tsomgo Lake & Baba Mandir', desc: 'Full-day mountain drive to the sacred glacial Tsomgo Lake (12,400 ft) surrounded by snow-covered peaks, and historic Baba Harbhajan Singh Mandir.' },
      { day: 3, title: 'Gangtok Monasteries & Scenic Transfer to Darjeeling', desc: 'Morning visit to Rumtek Monastery, Do Drul Chorten, and Ropeway cable car before a 4-hour scenic drive across tea gardens to Darjeeling.' },
      { day: 4, title: 'Tiger Hill Dawn & Darjeeling Highlights', desc: '4 AM excursion to Tiger Hill for the world-famous Kanchenjunga sunrise. Return for breakfast, then visit Ghoom Monastery, Batasia Loop, and Himalayan Mountaineering Institute.' },
      { day: 5, title: 'Heritage Tea Estate Walk & Mall Road', desc: 'Tour Happy Valley Tea Estate to see plucking and tea tasting. Afternoon free for relaxing at Chowrasta Mall Road and riding the Toy Train.' },
      { day: 6, title: 'Mirik Lake Stop & Bagdogra Departure', desc: 'Morning drive back to Bagdogra Airport via scenic Mirik Lake and pine-covered border hills for your return flight.' }
    ]
  },
  {
    id: 'rishikesh-spiritual-river-rafting',
    title: 'Rishikesh & Haridwar: Ganga Aarti & White Water Rafting',
    tagline: 'Experience evening Ganga Aarti, thrilling Class-3 rapids rafting & serene ashram yoga',
    destination: 'Rishikesh & Haridwar, Uttarakhand',
    country: 'India',
    region: 'North India',
    category: 'Adventure',
    price: 11999,
    originalPrice: 14500,
    durationDays: 3,
    durationNights: 2,
    rating: 4.90,
    reviewsCount: 176,
    featured: false,
    badge: 'Adventure & Spiritual',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/River%20Rafting%20in%20Ganga%20Near%20Ram%20Jhula%20Rishikesh%2003.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/River%20Rafting%20in%20Ganga%20Near%20Ram%20Jhula%20Rishikesh%2003.jpg?width=800',
      'https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=800&q=80',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Aarti%2C%20Ganga%20Aarti%20at%20Dashashwamedh%20Ghat%2C%20Varanasi.jpg?width=800'
    ],
    difficulty: 'Moderate',
    maxGroupSize: 16,
    overview: 'Feel the pulse of the Himalayas in the Yoga Capital of the World. Navigate roaring Grade III white-water rapids through emerald canyons, leap off cliffs into the holy Ganges, meditate alongside saffron-clad sadhus, and witness the mesmerizing spectacle of floating brass lamps during the evening Ganga Aarti at Har Ki Pauri and Parmarth Niketan.',
    highlights: [
      '16 km white-water river rafting from Shivpuri with body surfing & cliff jump',
      'Hypnotic evening Ganga Aarti ceremony at Parmarth Niketan & Har Ki Pauri',
      'Suspension bridge stroll across iconic Ram Jhula & Lakshman Jhula',
      'Sunrise Himalayan yoga and breathwork session along the sandy riverbanks'
    ],
    included: [
      '2 nights in riverside luxury camping tents or riverside 4-star boutique hotel',
      'All meals (breakfast, lunch, dinner, and campfire snacks)',
      'Complete river rafting equipment, certified river guides & safety kayaks',
      'Private air-conditioned car from Dehradun Airport or Haridwar Railway Station',
      'Guided Beatles Ashram (Chaurasi Kutia) walking tour'
    ],
    excluded: [
      'Travel to Dehradun Airport (DED) or Haridwar Junction',
      'Personal bungee jumping or giant swing tickets at Jumpin Heights',
      'Alcoholic drinks (strictly dry sacred region)'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Haridwar, Aarti & River Camp Check-in', desc: 'Pick up from Haridwar/Dehradun. Witness the electrifying Har Ki Pauri Ganga Aarti with ringing bells, then transfer to riverside camp in Rishikesh for bonfire dinner.' },
      { day: 2, title: '16km White Water Rafting & Beatles Ashram', desc: 'Morning safety briefing and 16 km white water rafting run tackling famous rapids like Roller Coaster and Golf Course. Afternoon visit to the historic Beatles Ashram.' },
      { day: 3, title: 'Sunrise Yoga by Ganges & Departure', desc: 'Sunrise yoga and guided pranayama on the Ganges sandbanks, breakfast, visit Ram Jhula and Gita Bhawan before transfer to airport or railway station.' }
    ]
  },
  {
    id: 'maldives-overwater-villa-escape',
    title: 'Maldives Paradise: Luxury Overwater Villa & Coral Reefs',
    tagline: 'Step straight into turquoise lagoons, snorkel with sea turtles & enjoy sunset cruises',
    destination: 'Male & South Atoll',
    country: 'Maldives',
    region: 'Indian Ocean',
    category: 'Beach',
    price: 79999,
    originalPrice: 94000,
    durationDays: 4,
    durationNights: 3,
    rating: 4.98,
    reviewsCount: 145,
    featured: true,
    badge: 'Honeymoon Special',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 8,
    overview: 'Indulge in pure barefoot luxury in the crystalline Indian Ocean. Wake up in a private overwater bungalow on stilts above a neon-blue lagoon, jump right from your private sun deck into warm tropical waters, snorkel alongside graceful sea turtles and manta rays, and sip champagne during golden sunset dolphin cruises.',
    highlights: [
      'Private luxury Overwater Villa with direct ocean staircase and private sun deck',
      'Round-trip speedboat / seaplane transfer across turquoise coral atolls',
      'Guided house reef snorkeling equipment with tropical fish and marine life',
      'Sunset dolphin-watching traditional Maldivian Dhoni cruise'
    ],
    included: [
      '3 nights in an ultra-luxurious Overwater Villa at a 5-star private island resort',
      'Full-board dining plan (daily gourmet breakfast, lunch, and theme-night dinners)',
      'Complimentary non-motorized water sports (kayaks, stand-up paddleboards)',
      'Round-trip airport speedboat transfers from Velana International Airport (MLE)',
      'Green Tax and Maldivian government tourism fees included'
    ],
    excluded: [
      'International flights from India to Male (MLE)',
      'Motorized water sports (jet ski, scuba diving certification)',
      'Spa treatments at the overwater spa pavilion'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Male & Speedboat to Private Island', desc: 'Warm Maldivian greeting at Male Airport, speedboat transfer through azure waters to your private coral island resort. Check into overwater villa and relax.' },
      { day: 2, title: 'Lagoon Swimming, Snorkeling & Spa', desc: 'Breakfast over the water, morning snorkeling on vibrant coral reefs, afternoon cocktail by the infinity pool, and optional Balinese overwater massage.' },
      { day: 3, title: 'Water Sports & Sunset Dolphin Cruise', desc: 'Kayaking and paddleboarding across the sheltered lagoon, followed by a romantic sunset Dhoni boat cruise watching pods of spinner dolphins.' },
      { day: 4, title: 'Floating Breakfast & Farewell Speedboat', desc: 'Enjoy a lavish floating breakfast in your private pool/deck, free leisure time, and speedboat transfer back to Male Airport for departure.' }
    ]
  },
  {
    id: 'hampi-badami-heritage-boulders',
    title: 'Hampi & Badami: Vijayanagara Empire & Rock-Cut Cave Temples',
    tagline: 'Walk among ancient stone monoliths, coracle boat rides & 7th-century Chalukyan caves',
    destination: 'Hampi, Badami & Pattadakal, Karnataka',
    country: 'India',
    region: 'South India',
    category: 'Cultural',
    price: 13499,
    originalPrice: 16500,
    durationDays: 4,
    durationNights: 3,
    rating: 4.92,
    reviewsCount: 108,
    featured: false,
    badge: 'UNESCO World Heritage',
    image: 'https://thefederal.com/file/2022/09/Hampi.jpg',
    gallery: [
      'https://thefederal.com/file/2022/09/Hampi.jpg',
      'https://s7ap1.scene7.com/is/image/incredibleindia/1-pattadakal-badami-karnataka-city-hero?qlt=82&ts=1726717591963',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cave%20Temple%203%2C%20Badami.JPG?width=800'
    ],
    difficulty: 'Easy',
    maxGroupSize: 12,
    overview: 'Step into an open-air museum of colossal red-ochre boulders, ruined palaces, and sacred Dravidian temples from the golden era of the 14th-century Vijayanagara Empire. Marvel at the stone chariot at Vittala Temple, cross the Tungabhadra river on traditional round coracle boats, and discover the 6th-century rock-cut Hindu and Jain cave temples in Badami.',
    highlights: [
      'UNESCO World Heritage monuments of Hampi including Stone Chariot & Lotus Mahal',
      'Sunset panoramic view over boulder valleys from Matanga Hill or Hemakuta Hill',
      'Traditional woven round coracle boat ride across the rushing Tungabhadra River',
      'Full-day excursion to 6th-century Badami Cave Temples & Pattadakal complexes'
    ],
    included: [
      '3 nights in 3-star/4-star heritage resorts near Hampi ruins',
      'Daily South Indian & continental buffet breakfast and dinners',
      'Private air-conditioned vehicle for all intercity travel and monument tours',
      'Certified historian guide for Hampi and Badami sites',
      'All monument entry passes and battery car tickets inside Vittala complex'
    ],
    excluded: [
      'Travel to Hospet Junction / Hubballi Airport (HBX)',
      'Personal bicycle or moped rentals in Hampi',
      'Camera and video equipment fees at historical monuments'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Hospet & Sacred Center of Hampi', desc: 'Pick up from Hospet/Hubballi. Visit Virupaksha Temple dating back to 7th century, Hemakuta Hill sunset with view of monolithic shrines.' },
      { day: 2, title: 'Royal Enclosure, Vittala Temple & Coracle Ride', desc: 'Explore the iconic Stone Chariot and musical pillars of Vijaya Vittala Temple, Lotus Mahal, Elephant Stables, and afternoon coracle boat ride.' },
      { day: 3, title: 'Badami Cave Temples, Aihole & Pattadakal', desc: 'Day trip to Badami red sandstone cave temples overlooking Agastya Lake, followed by UNESCO temple clusters of Pattadakal and the cradle of temple architecture in Aihole.' },
      { day: 4, title: 'Anegundi Village & Departure', desc: 'Cross to the mythical monkey kingdom of Kishkindha in Anegundi, visit Anjaneya Hill before transfer back to Hospet Railway Station.' }
    ]
  },
  {
    id: 'thailand-phuket-krabi-islands',
    title: 'Thailand Island Odyssey: Phuket, Krabi & Phi Phi Islands',
    tagline: 'Speedboat through emerald limestone karsts, snorkel Maya Bay & taste night street food',
    destination: 'Phuket & Krabi',
    country: 'Thailand',
    region: 'Southeast Asia',
    category: 'Beach',
    price: 32999,
    originalPrice: 39500,
    durationDays: 6,
    durationNights: 5,
    rating: 4.93,
    reviewsCount: 198,
    featured: true,
    badge: 'Island Adventure',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20Maya%2C%20Ko%20Phi%20Phi%2C%20Tailandia%2C%202013-08-19%2C%20DD%2013.JPG?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20Maya%2C%20Ko%20Phi%20Phi%2C%20Tailandia%2C%202013-08-19%2C%20DD%2013.JPG?width=800',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 14,
    overview: 'Sun, sand, and emerald seas await in tropical Southern Thailand. Zip through dramatic sheer limestone cliffs of the Andaman Sea on high-speed boats, swim in the pristine turquoise waters of world-renowned Maya Bay, relax on white-sand shores in Krabi, and savor world-famous Pad Thai and fresh tropical fruits at lively night markets.',
    highlights: [
      'Full-day luxury speedboat tour to Phi Phi Islands, Maya Bay & Monkey Beach',
      'Krabi 4-Island cruise including Railay Beach, Chicken Island & Phra Nang Cave',
      'Phuket island tour with Big Buddha viewpoint & Wat Chalong Temple',
      'Evening Thai street food safari and vibrant night market exploration'
    ],
    included: [
      '3 nights in Phuket & 2 nights in Krabi in 4-star beachside resorts',
      'Daily international and Asian buffet breakfast',
      'Speedboat tour transfers, national park entry fees & snorkeling equipment',
      'Ferry / luxury van transfer between Phuket and Krabi',
      'Round-trip airport transfers at Phuket International Airport (HKT)'
    ],
    excluded: [
      'International flights from India to Phuket (HKT)',
      'Thailand Visa on Arrival fees (or e-Visa if applicable)',
      'Personal water sports activities like scuba diving and parasailing'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Phuket & Beachfront Relaxation', desc: 'Welcome at Phuket Airport, transfer to resort near Patong/Karon beach. Evening leisure to explore the sandy coastline and beachfront dining.' },
      { day: 2, title: 'Full-Day Phi Phi Islands & Maya Bay Speedboat Tour', desc: 'High-speed boat across the Andaman Sea. Snorkel crystal lagoons at Pileh Lagoon, visit the film-famous Maya Bay, Viking Cave, and beach lunch at Phi Phi Don.' },
      { day: 3, title: 'Phuket City Tour & Transfer to Krabi', desc: 'Visit the towering Big Buddha overlooking Chalong Bay, historic Old Phuket Town, and drive across the scenic bridge to Ao Nang, Krabi.' },
      { day: 4, title: 'Krabi 4-Island Tour & Railay Beach', desc: 'Traditional longtail/speedboat island hopping to Tup Island sandbar, Chicken Island snorkeling, and the limestone rock-climbing cliffs of Railay Beach.' },
      { day: 5, title: 'Emerald Pool & Night Market Crawl', desc: 'Optional visit to natural hot springs and the Emerald Pool in the rainforest, followed by an evening at Krabi Night Market tasting street delicacies.' },
      { day: 6, title: 'Souvenir Shopping & Airport Departure', desc: 'Morning leisure by the pool, souvenir shopping, and transfer to Phuket or Krabi Airport for onward flight back to India.' }
    ]
  },
  {
    id: 'jim-corbett-nainital-lake-wilderness',
    title: 'Jim Corbett & Nainital: Tiger Safari & Himalayan Lake Retreat',
    tagline: 'Open-top 4x4 jungle safari in India’s oldest national park & paddle-boating on Naini Lake',
    destination: 'Jim Corbett & Nainital, Uttarakhand',
    country: 'India',
    region: 'North India',
    category: 'Wildlife',
    price: 16499,
    originalPrice: 19800,
    durationDays: 4,
    durationNights: 3,
    rating: 4.91,
    reviewsCount: 132,
    featured: false,
    badge: 'Wildlife & Hills',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naini%20Lake%2C%20Nainital%2C%20Uttarakhand%2C%20India.jpg?width=1200',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Naini%20Lake%2C%20Nainital%2C%20Uttarakhand%2C%20India.jpg?width=800',
      'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Powerful%20Yawn%20of%20a%20Bengal%20Tiger%20at%20Ranthambore%20national%20park.jpg?width=800',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 'Easy',
    maxGroupSize: 10,
    overview: 'Combine thrilling royal Bengal tiger tracking in the sal forests of Corbett with refreshing lake breezes in the Kumaon Himalayas. Embark on an early morning 4x4 open Gypsy safari into the dense core zones of Jim Corbett National Park, then ascend into the pine hills to cruise along picturesque Naini Lake and ride aerial ropeways.',
    highlights: [
      'Exclusive 4x4 open-top Gypsy jungle safari in Corbett National Park zones',
      'Paddle or yacht boating on the pear-shaped emerald waters of Naini Lake',
      'Aerial ropeway cable car ascent to Snow View Point with Himalayan panorama',
      'Riverside luxury jungle resort stay with evening nature walk by Kosi River'
    ],
    included: [
      '2 nights in a riverfront wildlife resort in Corbett & 1 night in Nainital hill hotel',
      'Daily buffet breakfast and wholesome buffet dinner',
      'Private 4x4 Gypsy jungle safari permit with registered forest naturalist guide',
      'Private air-conditioned car for all transfers from Delhi NCR or Kathgodam',
      'Boating passes on Naini Lake & Cave Garden entrance'
    ],
    excluded: [
      'Travel to Delhi or Kathgodam Railway Station',
      'Elephant safari fees (optional inside buffer zone)',
      'Personal safari tips to driver and tracker guide'
    ],
    itinerary: [
      { day: 1, title: 'Delhi to Jim Corbett & Kosi Riverside Walk', desc: 'Pick up from Delhi NCR or Kathgodam, drive through rural Uttarakhand to Corbett. Check into riverside wilderness resort, enjoy evening bonfire and river walk.' },
      { day: 2, title: 'Dawn Jeep Safari & Drive to Nainital', desc: '5:30 AM open Gypsy safari into Bijrani/Jhirna/Dhela zone tracking tigers, wild elephants, and spotted deer. Return for breakfast, then drive 2 hours up to Nainital.' },
      { day: 3, title: 'Nainital Lakes & Snow View Ropeway', desc: 'Boat ride on Naini Lake, visit Naina Devi Temple, ride the aerial ropeway to Snow View Point for views of Nanda Devi, and stroll Mall Road.' },
      { day: 4, title: 'Bhimtal Lake Stop & Return Transfer', desc: 'Visit nearby Bhimtal with its island aquarium, then scenic descent transfer back to Delhi or Kathgodam.' }
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
