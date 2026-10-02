export const CATEGORIES = [
  { id: 'all', label: 'All Deals', icon: '✨', color: '#6366f1' },
  { id: 'food', label: 'Food & Meals', icon: '🌮', color: '#ef4444' },
  { id: 'groceries', label: 'Groceries', icon: '🛒', color: '#10b981' },
  { id: 'drinks', label: 'Coffee & Drinks', icon: '☕', color: '#f59e0b' },
  { id: 'happyhour', label: 'Happy Hour', icon: '🍺', color: '#8b5cf6' },
  { id: 'thrift', label: 'Thrift & Fashion', icon: '👗', color: '#ec4899' },
  { id: 'tech', label: 'Tech & Home', icon: '⚡', color: '#3b82f6' },
  { id: 'freebies', label: 'Freebies', icon: '🎁', color: '#14b8a6' }
];

export const CITIES = [
  { name: 'Toronto, ON', lat: 43.6532, lng: -79.3832 },
  { name: 'Mississauga, ON', lat: 43.5890, lng: -79.6441 },
  { name: 'Brampton, ON', lat: 43.7315, lng: -79.7624 },
  { name: 'Oakville, ON', lat: 43.4675, lng: -79.6877 },
  { name: 'Burlington, ON', lat: 43.3255, lng: -79.7990 },
  { name: 'Milton, ON', lat: 43.5183, lng: -79.8774 },
  { name: 'Hamilton, ON', lat: 43.2557, lng: -79.8711 },
  { name: 'Kitchener, ON', lat: 43.4516, lng: -80.4925 },
  { name: 'Waterloo, ON', lat: 43.4643, lng: -80.5204 },
  { name: 'Guelph, ON', lat: 43.5448, lng: -80.2482 },
  { name: 'Markham, ON', lat: 43.8561, lng: -79.3370 },
  { name: 'Richmond Hill, ON', lat: 43.8828, lng: -79.4403 },
  { name: 'Vaughan, ON', lat: 43.8563, lng: -79.5085 },
  { name: 'Oshawa, ON', lat: 43.8971, lng: -78.8658 },
  { name: 'Vancouver, BC', lat: 49.2827, lng: -123.1207 },
  { name: 'Montreal, QC', lat: 45.5017, lng: -73.5673 },
  { name: 'Calgary, AB', lat: 51.0447, lng: -114.0719 },
  { name: 'Ottawa, ON', lat: 45.4215, lng: -75.6972 }
];

export const INITIAL_DEALS = [
  {
    id: "deal-gta-1",
    title: "$2.99 Crispy BBQ Pork Bánh Mì Sandwich",
    storeName: "Bánh Mì Ba Lẹ",
    category: "food",
    price: 2.99,
    regularPrice: 7.50,
    description: "Authentic crunchy French baguette loaded with seasoned pork, pickled daikon, fresh cilantro and house mayo. Unbeatable lunch in Chinatown!",
    address: "354 Spadina Ave, Toronto, ON M5T 2G4",
    lat: 43.6542,
    lng: -79.3986,
    city: "Toronto, ON",
    images: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 340,
    downvotes: 4,
    createdAt: "2026-09-30T11:00:00Z",
    postedBy: {
      name: "TorontoFoodie_Sam",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      badge: "Spadina Scout 🥖"
    },
    tags: ["BanhMi", "Chinatown", "Toronto", "Under$3"],
    reviews: [
      {
        id: "rev-gta-101",
        userName: "Chloe Tremblay",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "Yesterday",
        title: "Best budget sandwich in Toronto!",
        comment: "Baguette is ultra fresh and crispy. The pork portion for $2.99 CAD is insane.",
        helpfulCount: 45,
        photos: ["https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&auto=format&fit=crop&q=80"],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-2",
    title: "$2.50 Fresh Hot Samosa Chaat Plate",
    storeName: "Desi Mandi & Sweets",
    category: "food",
    price: 2.50,
    regularPrice: 6.50,
    description: "Two crispy potato samosas crushed and smothered in hot chickpea curry, sweet tamarind, mint yogurt and chopped coriander.",
    address: "2410 Fairview St, Burlington, ON L7R 2E4",
    lat: 43.3340,
    lng: -79.8050,
    city: "Burlington, ON",
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 420,
    downvotes: 3,
    createdAt: "2026-09-30T14:30:00Z",
    postedBy: {
      name: "BurlingtonEats",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      badge: "Burlington Scout 🥟"
    },
    tags: ["Samosa", "Burlington", "DesiMandi", "Indian"],
    reviews: [
      {
        id: "rev-gta-201",
        userName: "Rajesh P.",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "2 days ago",
        title: "Tastes just like Delhi street food!",
        comment: "Tangy, spicy, warm. Unbeatable price for afternoon tea snack.",
        helpfulCount: 52,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-3",
    title: "$3.99 Loaded Chicken Shawarma Wrap",
    storeName: "Pita Land Mississauga",
    category: "food",
    price: 3.99,
    regularPrice: 11.00,
    description: "Student special wrap loaded with rotisserie carved garlic chicken, pickled turnips, spicy garlic sauce and crispy fries inside.",
    address: "3050 Hurontario St, Mississauga, ON L5B 361",
    lat: 43.5855,
    lng: -79.6402,
    city: "Mississauga, ON",
    images: [
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 380,
    downvotes: 5,
    createdAt: "2026-09-29T18:00:00Z",
    postedBy: {
      name: "Sauga_Foodie",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
      badge: "Shawarma King 🌯"
    },
    tags: ["Shawarma", "Mississauga", "Sauga", "Wrap"],
    reviews: [
      {
        id: "rev-gta-301",
        userName: "Aamir H.",
        userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "3 days ago",
        title: "Garlic sauce is top tier",
        comment: "Massive wrap for $3.99. Show student ID!",
        helpfulCount: 38,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-4",
    title: "$1.00 Hot Butter Tarts & Artisan Donuts",
    storeName: "Main Street Bakery Oakville",
    category: "food",
    price: 1.00,
    regularPrice: 4.50,
    description: "End of day clearance (after 5 PM)! Flaky butter tarts with pecan filling and maple glazed donuts.",
    address: "181 Lakeshore Rd E, Oakville, ON L6J 1H6",
    lat: 43.4452,
    lng: -79.6698,
    city: "Oakville, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 290,
    downvotes: 2,
    createdAt: "2026-09-28T16:30:00Z",
    postedBy: {
      name: "Oakville_Mom",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      badge: "Bakery Scout 🍩"
    },
    tags: ["ButterTart", "Bakery", "Oakville", "Dessert"],
    reviews: [
      {
        id: "rev-gta-401",
        userName: "Emily Vance",
        userAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "4 days ago",
        title: "Gooey center butter tart!",
        comment: "Best treat in downtown Oakville.",
        helpfulCount: 29,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-5",
    title: "$4.50 Local Hamilton Craft Pint & Garlic Pretzels",
    storeName: "Collective Arts Brewing Taproom",
    category: "happyhour",
    price: 4.50,
    regularPrice: 12.50,
    description: "Happy Hour Thursdays 4 PM - 7 PM! All flagship IPAs, sours and stouts $4.50 + hot beer-salted pretzel.",
    address: "207 Burlington St E, Hamilton, ON L8L 4H2",
    lat: 43.2705,
    lng: -79.8542,
    city: "Hamilton, ON",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 410,
    downvotes: 4,
    createdAt: "2026-09-27T17:15:00Z",
    postedBy: {
      name: "Hamilton_Craft",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      badge: "Steel City Pint 🍺"
    },
    tags: ["Beer", "Hamilton", "HappyHour", "CraftBeer"],
    reviews: [
      {
        id: "rev-gta-501",
        userName: "Dave Miller",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "5 days ago",
        title: "Awesome art and beer",
        comment: "Great patio in North End Hamilton.",
        helpfulCount: 44,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-6",
    title: "$1.50 Double Espresso & Fresh Croissant Combo",
    storeName: "Bauer Bakery & Cafe",
    category: "drinks",
    price: 1.50,
    regularPrice: 5.50,
    description: "UW & Laurier student early morning special (8 AM - 10 AM)! Rich espresso with butter croissant.",
    address: "187 King St S, Waterloo, ON N2J 1R1",
    lat: 43.4618,
    lng: -80.5218,
    city: "Waterloo, ON",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 2,
    createdAt: "2026-09-30T08:15:00Z",
    postedBy: {
      name: "UW_StudyGrind",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
      badge: "Waterloo Coffee ☕"
    },
    tags: ["Coffee", "Waterloo", "UW", "Croissant"],
    reviews: [
      {
        id: "rev-gta-601",
        userName: "Jessica Chen",
        userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "Yesterday",
        title: "Saved my midterms week!",
        comment: "Flaky croissant and strong roast.",
        helpfulCount: 31,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-7",
    title: "$3.50 Steam Pork Dumplings & Dim Sum Plate",
    storeName: "Ding Tai Fung Markham",
    category: "food",
    price: 3.50,
    regularPrice: 9.50,
    description: "Freshly steamed soup dumplings (Xiao Long Bao) loaded with flavorful pork broth and ginger soy vinegar.",
    address: "3235 Hwy 7, Markham, ON L3R 3P3",
    lat: 43.8522,
    lng: -79.3524,
    city: "Markham, ON",
    images: [
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 490,
    downvotes: 6,
    createdAt: "2026-09-29T13:00:00Z",
    postedBy: {
      name: "MarkhamEats",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      badge: "Dim Sum Guru 🥟"
    },
    tags: ["DimSum", "Markham", "Dumplings", "Hwy7"],
    reviews: [
      {
        id: "rev-gta-701",
        userName: "Kevin Zhang",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "2 days ago",
        title: "Juicy broth inside each dumpling!",
        comment: "Authentic taste, rapid service.",
        helpfulCount: 56,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-8",
    title: "$3.00 Vintage Denim Jackets & Leather Rack",
    storeName: "Value Village Milton Clearance",
    category: "thrift",
    price: 3.00,
    regularPrice: 40.00,
    description: "Discount tag color rollouts every Tuesday morning! Found Levi's denim jackets and retro graphic sweatshirts under $4.",
    address: "1030 Kennedy Rd, Milton, ON L9T 0X8",
    lat: 43.5240,
    lng: -79.8690,
    city: "Milton, ON",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 260,
    downvotes: 1,
    createdAt: "2026-09-28T11:20:00Z",
    postedBy: {
      name: "MiltonThrifter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      badge: "Milton Thrift 🧥"
    },
    tags: ["Thrift", "Milton", "Vintage", "Clearance"],
    reviews: [
      {
        id: "rev-gta-801",
        userName: "Sarah Jenkins",
        userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "3 days ago",
        title: "Found a 90s bomber jacket for $3!",
        comment: "Go early on Tuesday mornings.",
        helpfulCount: 22,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-9",
    title: "$2.00 Fresh Farmers Market Apples & Berries",
    storeName: "Kitchener Farmers' Market",
    category: "groceries",
    price: 2.00,
    regularPrice: 6.00,
    description: "Saturday morning discount produce baskets! Fresh Honeycrisp apples, strawberries and local Mennonite cheese curds.",
    address: "300 King St E, Kitchener, ON N2H 2L3",
    lat: 43.4485,
    lng: -80.4852,
    city: "Kitchener, ON",
    images: [
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 275,
    downvotes: 1,
    createdAt: "2026-09-27T10:00:00Z",
    postedBy: {
      name: "KW_Organic",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      badge: "KW Market 🍎"
    },
    tags: ["Apples", "Kitchener", "Groceries", "Market"],
    reviews: [
      {
        id: "rev-gta-901",
        userName: "Ben Stauffer",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "4 days ago",
        title: "Super fresh produce",
        comment: "Best place for weekend grocery shopping in KW.",
        helpfulCount: 18,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-gta-10",
    title: "FREE Community Art & Book Swap Box",
    storeName: "Brampton Downtown Little Library",
    category: "freebies",
    price: 0.00,
    regularPrice: 15.00,
    description: "Free novels, children books, zines, and handmade local art postcards. Take a book, leave a book!",
    address: "9 Wellington St E, Brampton, ON L6W 1Y1",
    lat: 43.6842,
    lng: -79.7582,
    city: "Brampton, ON",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 210,
    downvotes: 0,
    createdAt: "2026-09-29T12:00:00Z",
    postedBy: {
      name: "Brampton_Reader",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      badge: "Brampton Angel 📚"
    },
    tags: ["Free", "Books", "Brampton", "Community"],
    reviews: [
      {
        id: "rev-gta-1001",
        userName: "Gurpreet S.",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "3 days ago",
        title: "Great neighborhood spot",
        comment: "Found a graphic novel in awesome condition!",
        helpfulCount: 20,
        photos: [],
        verifiedVisit: true
      }
    ]
  }
];
