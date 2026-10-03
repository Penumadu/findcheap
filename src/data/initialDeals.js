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
  { name: 'Oakville, ON', lat: 43.4675, lng: -79.6877 },
  { name: 'Burlington, ON', lat: 43.3255, lng: -79.7990 },
  { name: 'Milton, ON', lat: 43.5183, lng: -79.8774 },
  { name: 'Kitchener, ON', lat: 43.4516, lng: -80.4925 },
  { name: 'Hamilton, ON', lat: 43.2557, lng: -79.8711 },
  { name: 'Waterloo, ON', lat: 43.4643, lng: -80.5204 },
  { name: 'Mississauga, ON', lat: 43.5890, lng: -79.6441 },
  { name: 'Brampton, ON', lat: 43.7315, lng: -79.7624 },
  { name: 'Guelph, ON', lat: 43.5448, lng: -80.2482 },
  { name: 'Cambridge, ON', lat: 43.3616, lng: -80.3144 },
  { name: 'Markham, ON', lat: 43.8561, lng: -79.3370 },
  { name: 'Richmond Hill, ON', lat: 43.8828, lng: -79.4403 },
  { name: 'Vaughan, ON', lat: 43.8563, lng: -79.5085 },
  { name: 'Newmarket, ON', lat: 44.0592, lng: -79.4613 },
  { name: 'Aurora, ON', lat: 44.0065, lng: -79.4504 },
  { name: 'Scarborough, ON', lat: 43.7764, lng: -79.2318 },
  { name: 'North York, ON', lat: 43.7615, lng: -79.4111 },
  { name: 'Etobicoke, ON', lat: 43.6205, lng: -79.5132 },
  { name: 'Pickering, ON', lat: 43.8384, lng: -79.0868 },
  { name: 'Ajax, ON', lat: 43.8509, lng: -79.0204 },
  { name: 'Whitby, ON', lat: 43.8975, lng: -78.9429 },
  { name: 'Oshawa, ON', lat: 43.8971, lng: -78.8658 },
  { name: 'St. Catharines, ON', lat: 43.1594, lng: -79.2469 },
  { name: 'Niagara Falls, ON', lat: 43.0896, lng: -79.0849 },
  { name: 'Brantford, ON', lat: 43.1394, lng: -80.2644 },
  { name: 'Barrie, ON', lat: 44.3894, lng: -79.6903 },
  { name: 'London, ON', lat: 42.9849, lng: -81.2453 },
  { name: 'Windsor, ON', lat: 42.3149, lng: -83.0364 },
  { name: 'Kingston, ON', lat: 44.2312, lng: -76.4860 },
  { name: 'Ottawa, ON', lat: 45.4215, lng: -75.6972 },
  { name: 'Montreal, QC', lat: 45.5017, lng: -73.5673 },
  { name: 'Vancouver, BC', lat: 49.2827, lng: -123.1207 },
  { name: 'Calgary, AB', lat: 51.0447, lng: -114.0719 }
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
    id: "deal-oakville-2",
    title: "$3.50 Loaded Pulled Pork Slider & Seasoned Fries",
    storeName: "Oakville Smokehouse & Grill",
    category: "food",
    price: 3.50,
    regularPrice: 9.99,
    description: "Slow-smoked hickory pulled pork in tangy BBQ sauce served on a soft brioche bun with seasoned potato wedges.",
    address: "234 Lakeshore Rd W, Oakville, ON L6K 1E8",
    lat: 43.4380,
    lng: -79.6750,
    city: "Oakville, ON",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 185,
    downvotes: 1,
    createdAt: "2026-09-29T15:00:00Z",
    postedBy: {
      name: "Oakville_Gourmet",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Oakville Hunter 🍔"
    },
    tags: ["Oakville", "PulledPork", "BBQ", "Under$4"],
    reviews: []
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
    id: "deal-burlington-2",
    title: "$4.00 Craft Cider Pint & Warm Bavarian Pretzel",
    storeName: "Burlington Waterfront Pub",
    category: "happyhour",
    price: 4.00,
    regularPrice: 11.50,
    description: "Daily Happy Hour 3-6 PM! Crisp Ontario apple cider paired with a warm salted pretzel and spicy honey mustard.",
    address: "403 Elizabeth St, Burlington, ON L7R 0A4",
    lat: 43.3230,
    lng: -79.7970,
    city: "Burlington, ON",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 210,
    downvotes: 2,
    createdAt: "2026-09-30T16:00:00Z",
    postedBy: {
      name: "CiderLover_Burl",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      badge: "Waterfront Scout 🍺"
    },
    tags: ["Burlington", "HappyHour", "Cider", "Patio"],
    reviews: []
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
    id: "deal-milton-2",
    title: "$2.99 Personal Wood-Fired Margherita Pizza",
    storeName: "Milton Main Street Slice",
    category: "food",
    price: 2.99,
    regularPrice: 8.50,
    description: "Fresh mozzarella, san marzano tomato sauce and sweet basil baked in 90 seconds in a wood stone oven.",
    address: "210 Main St E, Milton, ON L9T 1N8",
    lat: 43.5170,
    lng: -79.8830,
    city: "Milton, ON",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 198,
    downvotes: 2,
    createdAt: "2026-09-29T17:45:00Z",
    postedBy: {
      name: "MiltonPizzaFan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Slice Master 🍕"
    },
    tags: ["Milton", "Pizza", "WoodFired", "Under$3"],
    reviews: []
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
    id: "deal-kitchener-2",
    title: "$3.99 Crispy Pork Schnitzel Sandwich & Sauerkraut",
    storeName: "Berlin Schnitzel Haus",
    category: "food",
    price: 3.99,
    regularPrice: 12.00,
    description: "Golden fried pork schnitzel on a pretzel bun topped with tangy sauerkraut and mustard. Authentic Kitchener Oktoberfest flavor all year!",
    address: "125 King St W, Kitchener, ON N2G 1A7",
    lat: 43.4500,
    lng: -80.4900,
    city: "Kitchener, ON",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 3,
    createdAt: "2026-09-29T12:00:00Z",
    postedBy: {
      name: "KitchenerEats",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120",
      badge: "Kitchener Scout 🥨"
    },
    tags: ["Kitchener", "Schnitzel", "German", "Under$4"],
    reviews: []
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
    id: "deal-hamilton-2",
    title: "$2.99 Montreal Smoked Meat Slider & Pickle",
    storeName: "Ottawa St Deli Hamilton",
    category: "food",
    price: 2.99,
    regularPrice: 7.99,
    description: "Piled high house-cured smoked brisket served warm on rye with yellow mustard and dill pickle slice.",
    address: "220 Ottawa St N, Hamilton, ON L8H 3Z5",
    lat: 43.2480,
    lng: -79.8180,
    city: "Hamilton, ON",
    images: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 245,
    downvotes: 2,
    createdAt: "2026-09-28T14:00:00Z",
    postedBy: {
      name: "HamiltonDeliKing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Steel City Deli 🥪"
    },
    tags: ["Hamilton", "SmokedMeat", "Deli", "Under$3"],
    reviews: []
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
    id: "deal-waterloo-2",
    title: "$3.50 Roasted Milk Tea & Fresh Egg Tart Deal",
    storeName: "University Plaza Tea Waterloo",
    category: "drinks",
    price: 3.50,
    regularPrice: 8.50,
    description: "Large brown sugar roasted milk tea with tapioca pearls plus warm Macao style egg tart. Student ID special.",
    address: "160 University Ave W, Waterloo, ON N2L 3E9",
    lat: 43.4720,
    lng: -80.5380,
    city: "Waterloo, ON",
    images: [
      "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 290,
    downvotes: 1,
    createdAt: "2026-09-29T16:20:00Z",
    postedBy: {
      name: "Laurier_Boba",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120",
      badge: "Boba Queen 🧋"
    },
    tags: ["Waterloo", "Boba", "StudentDeal", "UW"],
    reviews: []
  },
  {
    id: "deal-gta-3",
    title: "$3.99 Loaded Chicken Shawarma Wrap",
    storeName: "Pita Land Mississauga",
    category: "food",
    price: 3.99,
    regularPrice: 11.00,
    description: "Student special wrap loaded with rotisserie carved garlic chicken, pickled turnips, spicy garlic sauce and crispy fries inside.",
    address: "3050 Hurontario St, Mississauga, ON L5B 3C1",
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
    reviews: []
  },
  {
    id: "deal-guelph-1",
    title: "$3.25 Fair-Trade Organic Drip & Oat Scone",
    storeName: "Planet Bean Coffee Guelph",
    category: "drinks",
    price: 3.25,
    regularPrice: 7.50,
    description: "Freshly roasted single-origin drip coffee paired with a freshly baked blueberry oat scone.",
    address: "259 Grange Rd, Guelph, ON N1E 6R5",
    lat: 43.5480,
    lng: -80.2450,
    city: "Guelph, ON",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 178,
    downvotes: 1,
    createdAt: "2026-09-28T09:30:00Z",
    postedBy: {
      name: "GuelphGryphon",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Guelph Coffee ☕"
    },
    tags: ["Guelph", "Coffee", "Organic", "Scone"],
    reviews: []
  },
  {
    id: "deal-cambridge-1",
    title: "$2.75 Warm Hand-Rolled Bavarian Pretzel",
    storeName: "Galt Market Bakery Cambridge",
    category: "food",
    price: 2.75,
    regularPrice: 6.00,
    description: "Authentic buttery salt pretzel baked daily at historic Galt market.",
    address: "40 Dickson St, Cambridge, ON N1R 7A5",
    lat: 43.3590,
    lng: -80.3160,
    city: "Cambridge, ON",
    images: [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 142,
    downvotes: 0,
    createdAt: "2026-09-29T10:15:00Z",
    postedBy: {
      name: "CambridgeLocal",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Cambridge Scout 🥨"
    },
    tags: ["Cambridge", "Pretzel", "Bakery", "Galt"],
    reviews: []
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
    reviews: []
  },
  {
    id: "deal-richmondhill-1",
    title: "$3.99 Fresh Persian Sangak Flatbread & Eggplant Dip",
    storeName: "Shiraz Market Richmond Hill",
    category: "food",
    price: 3.99,
    regularPrice: 9.00,
    description: "Giant sesame-crusted whole wheat Sangak flatbread baked on hot river stones served with Kashk-e Bademjan.",
    address: "9555 Yonge St, Richmond Hill, ON L4C 9M7",
    lat: 43.8850,
    lng: -79.4420,
    city: "Richmond Hill, ON",
    images: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 215,
    downvotes: 2,
    createdAt: "2026-09-30T13:30:00Z",
    postedBy: {
      name: "YongeSt_Persian",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120",
      badge: "RH Foodie 🫓"
    },
    tags: ["RichmondHill", "Sangak", "Persian", "Under$4"],
    reviews: []
  },
  {
    id: "deal-vaughan-1",
    title: "$4.25 Wood-Fired Neapolitan Pepperoni Slice",
    storeName: "Woodbridge Pizzeria Vaughan",
    category: "food",
    price: 4.25,
    regularPrice: 8.50,
    description: "Crispy charred dough topped with cup-and-char pepperoni, fior di latte and hot honey drizzle.",
    address: "8000 Jane St, Vaughan, ON L4K 5B9",
    lat: 43.8540,
    lng: -79.5100,
    city: "Vaughan, ON",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 3,
    createdAt: "2026-09-30T15:10:00Z",
    postedBy: {
      name: "VaughanSlice",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Vaughan Pizza 🍕"
    },
    tags: ["Vaughan", "Woodbridge", "Pizza", "HotHoney"],
    reviews: []
  },
  {
    id: "deal-newmarket-1",
    title: "$2.50 Classic Vinyl Record & Paperback Clearance",
    storeName: "Main St Books & Vinyl Newmarket",
    category: "thrift",
    price: 2.50,
    regularPrice: 15.00,
    description: "Clearance bin vintage 70s/80s vinyl records and bestseller paperbacks.",
    address: "210 Main St S, Newmarket, ON L3Y 3Z3",
    lat: 44.0580,
    lng: -79.4600,
    city: "Newmarket, ON",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 130,
    downvotes: 1,
    createdAt: "2026-09-29T11:00:00Z",
    postedBy: {
      name: "NewmarketVinyl",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120",
      badge: "Vinyl Collector 🎵"
    },
    tags: ["Newmarket", "Vinyl", "Thrift", "Books"],
    reviews: []
  },
  {
    id: "deal-aurora-1",
    title: "$3.00 Butter Croissant & Earl Grey Tea Combo",
    storeName: "Aurora Town Bakery",
    category: "food",
    price: 3.00,
    regularPrice: 7.00,
    description: "Flaky golden butter croissant baked fresh daily with organic steep tea.",
    address: "15218 Yonge St, Aurora, ON L4G 1L9",
    lat: 44.0040,
    lng: -79.4490,
    city: "Aurora, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 115,
    downvotes: 0,
    createdAt: "2026-09-28T08:45:00Z",
    postedBy: {
      name: "AuroraBakes",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120",
      badge: "Aurora Scout 🥐"
    },
    tags: ["Aurora", "Croissant", "Bakery", "Tea"],
    reviews: []
  },
  {
    id: "deal-scarborough-1",
    title: "$2.99 Spicy Mutton Roll & Sri Lankan Kothu Roti",
    storeName: "Hopper Hut Scarborough",
    category: "food",
    price: 2.99,
    regularPrice: 7.50,
    description: "Crispy breaded mutton roll filled with spiced potatoes and minced lamb. Legendary Scarborough staple!",
    address: "2587 Birchmount Rd, Scarborough, ON M1T 2M7",
    lat: 43.7800,
    lng: -79.2900,
    city: "Scarborough, ON",
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 412,
    downvotes: 4,
    createdAt: "2026-09-30T12:00:00Z",
    postedBy: {
      name: "Scarborough_Kothu",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Scarborough Legend 🌶️"
    },
    tags: ["Scarborough", "SriLankan", "MuttonRoll", "Under$3"],
    reviews: []
  },
  {
    id: "deal-northyork-1",
    title: "$3.50 Korean Crispy Cheese Corn Dog",
    storeName: "Finch Station Snack Hub",
    category: "food",
    price: 3.50,
    regularPrice: 7.99,
    description: "Golden fried panko corn dog stuffed with mozzarella cheese, rolled in sugar and honey mustard.",
    address: "5500 Yonge St, North York, ON M2N 5S2",
    lat: 43.7780,
    lng: -79.4150,
    city: "North York, ON",
    images: [
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 389,
    downvotes: 3,
    createdAt: "2026-09-30T17:00:00Z",
    postedBy: {
      name: "NorthYork_Finch",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      badge: "K-Food Scout 🍢"
    },
    tags: ["NorthYork", "Finch", "KoreanFood", "CornDog"],
    reviews: []
  },
  {
    id: "deal-etobicoke-1",
    title: "$3.25 Beef Empanadas & Chimichurri Dip",
    storeName: "Lakeshore South American Bakery",
    category: "food",
    price: 3.25,
    regularPrice: 7.00,
    description: "Flaky baked pastry filled with spiced ground beef, green olives, boiled egg and tangy garlic chimichurri.",
    address: "2900 Lakeshore Blvd W, Etobicoke, ON M8V 1J4",
    lat: 43.6010,
    lng: -79.5050,
    city: "Etobicoke, ON",
    images: [
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 210,
    downvotes: 1,
    createdAt: "2026-09-29T14:20:00Z",
    postedBy: {
      name: "EtobicokeEats",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120",
      badge: "Etobicoke Finder 🥟"
    },
    tags: ["Etobicoke", "Empanada", "Lakeshore", "LatinFood"],
    reviews: []
  },
  {
    id: "deal-pickering-1",
    title: "$2.99 Spicy Jamaican Beef Patty & Coco Bread",
    storeName: "Pickering Town Jerk Spot",
    category: "food",
    price: 2.99,
    regularPrice: 6.50,
    description: "Flaky golden yellow patty stuffed inside warm sweet coco bread.",
    address: "1355 Kingston Rd, Pickering, ON L1V 1B8",
    lat: 43.8370,
    lng: -79.0880,
    city: "Pickering, ON",
    images: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 195,
    downvotes: 1,
    createdAt: "2026-09-28T13:00:00Z",
    postedBy: {
      name: "Pickering_Jerk",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Durham Scout 🥟"
    },
    tags: ["Pickering", "BeefPatty", "Jamaican", "CocoBread"],
    reviews: []
  },
  {
    id: "deal-ajax-1",
    title: "$3.50 Crispy Baja Fish Taco & Lime Crema",
    storeName: "Harwood Grill Ajax",
    category: "food",
    price: 3.50,
    regularPrice: 8.00,
    description: "Beer-battered cod topped with crunchy slaw, pico de gallo and zesty cilantro crema on corn tortilla.",
    address: "95 Harwood Ave S, Ajax, ON L1S 2B9",
    lat: 43.8490,
    lng: -79.0220,
    city: "Ajax, ON",
    images: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 180,
    downvotes: 2,
    createdAt: "2026-09-29T18:30:00Z",
    postedBy: {
      name: "AjaxTacoFan",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120",
      badge: "Ajax Scout 🌮"
    },
    tags: ["Ajax", "FishTaco", "Mexican", "Under$4"],
    reviews: []
  },
  {
    id: "deal-whitby-1",
    title: "$2.50 Homemade Salted Caramel Waffle Cone",
    storeName: "Whitby Pier Sweets",
    category: "food",
    price: 2.50,
    regularPrice: 6.50,
    description: "Freshly baked waffle cone loaded with artisan salted caramel gelato.",
    address: "105 Brock St S, Whitby, ON L1N 4K2",
    lat: 43.8760,
    lng: -78.9410,
    city: "Whitby, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 215,
    downvotes: 1,
    createdAt: "2026-09-30T14:15:00Z",
    postedBy: {
      name: "WhitbyPier",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120",
      badge: "Ice Cream Scout 🍦"
    },
    tags: ["Whitby", "IceCream", "Gelato", "DowntownWhitby"],
    reviews: []
  },
  {
    id: "deal-oshawa-1",
    title: "$3.99 Student Breakfast Burrito & Coffee",
    storeName: "Simcoe St Diner Oshawa",
    category: "food",
    price: 3.99,
    regularPrice: 9.50,
    description: "Scrambled eggs, crispy bacon, hashbrowns and cheddar wrapped tight with dark roast drip coffee.",
    address: "150 Simcoe St N, Oshawa, ON L1G 4S7",
    lat: 43.9010,
    lng: -78.8640,
    city: "Oshawa, ON",
    images: [
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 280,
    downvotes: 2,
    createdAt: "2026-09-30T07:45:00Z",
    postedBy: {
      name: "OT_Student_Oshawa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Oshawa Scout 🌯"
    },
    tags: ["Oshawa", "Breakfast", "Burrito", "OntarioTech"],
    reviews: []
  },
  {
    id: "deal-stcatharines-1",
    title: "$3.00 Warm Niagara Peach Pie Slice",
    storeName: "Brock Market Bakery St. Catharines",
    category: "food",
    price: 3.00,
    regularPrice: 7.50,
    description: "Made with local ripe Niagara peaches and buttery lattice crust.",
    address: "150 St Paul St, St. Catharines, ON L2R 3P9",
    lat: 43.1580,
    lng: -79.2450,
    city: "St. Catharines, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 190,
    downvotes: 1,
    createdAt: "2026-09-29T15:30:00Z",
    postedBy: {
      name: "Niagara_Peach",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120",
      badge: "St Catharines Scout 🥧"
    },
    tags: ["StCatharines", "Niagara", "PeachPie", "Dessert"],
    reviews: []
  },
  {
    id: "deal-niagarafalls-1",
    title: "$4.00 Hot Maple Cinnamon Funnel Cake",
    storeName: "Clifton Hill Sweets Niagara Falls",
    category: "food",
    price: 4.00,
    regularPrice: 11.00,
    description: "Crispy golden fried funnel cake dusted with powdered sugar, cinnamon and real Canadian maple syrup.",
    address: "4800 Clifton Hill, Niagara Falls, ON L2G 3N4",
    lat: 43.0900,
    lng: -79.0720,
    city: "Niagara Falls, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 350,
    downvotes: 5,
    createdAt: "2026-09-30T19:00:00Z",
    postedBy: {
      name: "FallsScout",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      badge: "Niagara Scout 🍁"
    },
    tags: ["NiagaraFalls", "FunnelCake", "CliftonHill", "Maple"],
    reviews: []
  },
  {
    id: "deal-london-1",
    title: "$3.00 Western Student Loaded Baked Potato",
    storeName: "Covent Garden Market London",
    category: "food",
    price: 3.00,
    regularPrice: 8.50,
    description: "Jumbo Idaho baked potato stuffed with sour cream, bacon bits, green onions and cheddar cheese.",
    address: "130 King St, London, ON N6A 1C5",
    lat: 42.9830,
    lng: -81.2500,
    city: "London, ON",
    images: [
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 270,
    downvotes: 2,
    createdAt: "2026-09-29T12:45:00Z",
    postedBy: {
      name: "UWO_Mustang",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "London ON Scout 🥔"
    },
    tags: ["LondonON", "WesternU", "LoadedPotato", "StudentDeal"],
    reviews: []
  },
  {
    id: "deal-windsor-1",
    title: "$2.50 Windsor Style Shredded Pepperoni Slice",
    storeName: "Riverside Pizza Windsor",
    category: "food",
    price: 2.50,
    regularPrice: 6.00,
    description: "World-famous Windsor pizza slice featuring fine shredded pepperoni and canned mushrooms on cornmeal crust.",
    address: "555 Riverside Dr E, Windsor, ON N9A 1A4",
    lat: 42.3190,
    lng: -83.0330,
    city: "Windsor, ON",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 3,
    createdAt: "2026-09-30T16:45:00Z",
    postedBy: {
      name: "WindsorPizzaKing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      badge: "Windsor Scout 🍕"
    },
    tags: ["Windsor", "WindsorPizza", "ShreddedPepperoni", "Under$3"],
    reviews: []
  },
  {
    id: "deal-barrie-1",
    title: "$3.50 Waterfront BeaverTails Pastry & Hot Cocoa",
    storeName: "Kempenfelt Bay Snacks Barrie",
    category: "food",
    price: 3.50,
    regularPrice: 8.50,
    description: "Whole wheat hand-stretched pastry topped with cinnamon, sugar and lemon juice.",
    address: "55 Lakeshore Dr, Barrie, ON L4N 2M6",
    lat: 44.3870,
    lng: -79.6880,
    city: "Barrie, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 220,
    downvotes: 1,
    createdAt: "2026-09-29T16:00:00Z",
    postedBy: {
      name: "BarrieWaterfront",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120",
      badge: "Barrie Scout 🦫"
    },
    tags: ["Barrie", "BeaverTails", "Waterfront", "Pastry"],
    reviews: []
  },
  {
    id: "deal-kingston-1",
    title: "$2.99 Queen's U Bagel & Flavored Cream Cheese",
    storeName: "Princess St Bakery Kingston",
    category: "food",
    price: 2.99,
    regularPrice: 6.50,
    description: "Boiled wood-fired bagel loaded with herb & garlic cream cheese.",
    address: "200 Princess St, Kingston, ON K7L 1B2",
    lat: 44.2320,
    lng: -76.4850,
    city: "Kingston, ON",
    images: [
      "https://images.unsplash.com/photo-1585478259715-876a6a81ae08?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 240,
    downvotes: 1,
    createdAt: "2026-09-28T10:00:00Z",
    postedBy: {
      name: "QueensGael",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      badge: "Kingston Scout 🥯"
    },
    tags: ["Kingston", "QueensU", "Bagel", "Under$3"],
    reviews: []
  },
  {
    id: "deal-ottawa-1",
    title: "$3.50 Cinnamon & Sugar BeaverTail",
    storeName: "ByWard Market Stand Ottawa",
    category: "food",
    price: 3.50,
    regularPrice: 8.50,
    description: "Iconic Ottawa fried pastry served piping hot with real lemon squeeze.",
    address: "69 George St, Ottawa, ON K1N 1K2",
    lat: 45.4270,
    lng: -75.6920,
    city: "Ottawa, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 410,
    downvotes: 3,
    createdAt: "2026-09-30T10:30:00Z",
    postedBy: {
      name: "CapitalFoodie",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Ottawa Scout 🇨🇦"
    },
    tags: ["Ottawa", "ByWardMarket", "BeaverTails", "Capital"],
    reviews: []
  },
  {
    id: "deal-montreal-1",
    title: "$1.99 Fairmount Sesame Wood-Fired Bagel",
    storeName: "Fairmount Bagel Montreal",
    category: "food",
    price: 1.99,
    regularPrice: 4.50,
    description: "Hand-rolled honey-boiled bagel baked in wood-fired oven right in Mile End.",
    address: "74 Ave Fairmount O, Montreal, QC H2T 2M2",
    lat: 45.5220,
    lng: -73.5960,
    city: "Montreal, QC",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 520,
    downvotes: 4,
    createdAt: "2026-09-30T09:00:00Z",
    postedBy: {
      name: "MileEnd_Bagel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120",
      badge: "Montreal Scout 🥯"
    },
    tags: ["Montreal", "Fairmount", "Bagel", "MileEnd"],
    reviews: []
  },
  {
    id: "deal-vancouver-1",
    title: "$3.99 Fresh Wild Salmon Roll & Miso Soup",
    storeName: "Commercial Drive Sushi Vancouver",
    category: "food",
    price: 3.99,
    regularPrice: 9.50,
    description: "Six pieces of wild BC salmon roll paired with warm piping hot miso soup.",
    address: "1412 Commercial Dr, Vancouver, BC V5L 3X9",
    lat: 49.2720,
    lng: -123.0690,
    city: "Vancouver, BC",
    images: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 480,
    downvotes: 5,
    createdAt: "2026-09-30T18:00:00Z",
    postedBy: {
      name: "VanCitySushi",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120",
      badge: "VanCity Scout 🍣"
    },
    tags: ["Vancouver", "SalmonRoll", "Sushi", "CommercialDrive"],
    reviews: []
  },
  {
    id: "deal-calgary-1",
    title: "$3.50 Alberta Beef Slider & Crispy Fries",
    storeName: "Stephen Ave Grill Calgary",
    category: "food",
    price: 3.50,
    regularPrice: 9.00,
    description: "Local grass-fed Alberta beef slider topped with smoked cheddar on brioche.",
    address: "120 8 Ave SW, Calgary, AB T2P 1B3",
    lat: 51.0450,
    lng: -114.0650,
    city: "Calgary, AB",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 2,
    createdAt: "2026-09-29T19:00:00Z",
    postedBy: {
      name: "CalgaryStampede",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      badge: "Calgary Scout 🤠"
    },
    tags: ["Calgary", "AlbertaBeef", "Slider", "StephenAve"],
    reviews: []
  }
];

