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
  { name: 'Vancouver, BC', lat: 49.2827, lng: -123.1207 },
  { name: 'Montreal, QC', lat: 45.5017, lng: -73.5673 },
  { name: 'Calgary, AB', lat: 51.0447, lng: -114.0719 },
  { name: 'Ottawa, ON', lat: 45.4215, lng: -75.6972 },
  { name: 'Edmonton, AB', lat: 53.5461, lng: -113.4938 }
];

export const INITIAL_DEALS = [
  {
    id: "deal-ca-1",
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
    tags: ["BanhMi", "Chinatown", "Under$3", "Vietnamese"],
    reviews: [
      {
        id: "rev-ca-101",
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
    id: "deal-ca-2",
    title: "$4.50 Authentic Quebec Curd & Gravy Poutine",
    storeName: "Chez Claudette",
    category: "food",
    price: 4.50,
    regularPrice: 11.50,
    description: "Squeaky fresh St-Albert cheese curds melted over piping hot hand-cut Yukon gold fries and dark rich gravy.",
    address: "39 Rue Laurier E, Montréal, QC H2T 1E4",
    lat: 45.5262,
    lng: -73.5902,
    city: "Montreal, QC",
    images: [
      "https://images.unsplash.com/photo-1586805608485-aaa3365b315b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 490,
    downvotes: 8,
    createdAt: "2026-09-29T19:30:00Z",
    postedBy: {
      name: "MTL_PoutineHunter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      badge: "Poutine Master 🍟"
    },
    tags: ["Poutine", "Montreal", "LateNight", "Plateau"],
    reviews: [
      {
        id: "rev-ca-201",
        userName: "Marc-Antoine",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "2 days ago",
        title: "Vrai fromage en grain qui fait couik!",
        comment: "The cheese curds are huge and super squeaky. Huge portion for under $5!",
        helpfulCount: 62,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-3",
    title: "$3.50 Pork & Chive Pan-Fried Dumplings (6 Pcs)",
    storeName: "Dumpling King Richmond",
    category: "food",
    price: 3.50,
    regularPrice: 9.00,
    description: "Juicy pan-fried northern style dumplings with crispy golden lace bottom and chili oil dipping sauce.",
    address: "4940 No. 3 Rd, Richmond, BC V6X 3A6",
    lat: 49.1764,
    lng: -123.1362,
    city: "Vancouver, BC",
    images: [
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 275,
    downvotes: 3,
    createdAt: "2026-09-28T14:10:00Z",
    postedBy: {
      name: "VanFoodie_Lin",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      badge: "Richmond Scout 🥟"
    },
    tags: ["Dumplings", "Richmond", "PanFried", "Vancouver"],
    reviews: [
      {
        id: "rev-ca-301",
        userName: "Ethan Wong",
        userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "3 days ago",
        title: "So juicy be careful on first bite!",
        comment: "Great bottom crunch and amazing chili oil.",
        helpfulCount: 28,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-4",
    title: "$2.00 Warm Wood-Fired Montreal Bagels (Half Dozen)",
    storeName: "St-Viateur Bagel Shop",
    category: "groceries",
    price: 2.00,
    regularPrice: 7.20,
    description: "Boiled in honey water & wood-fired on maple planks! Sesame seed bagels warm straight out of the oven.",
    address: "263 Rue Saint-Viateur O, Montréal, QC H2V 1Y1",
    lat: 45.5228,
    lng: -73.6022,
    city: "Montreal, QC",
    images: [
      "https://images.unsplash.com/photo-1585478259715-876a6a81ae08?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 410,
    downvotes: 5,
    createdAt: "2026-09-27T08:30:00Z",
    postedBy: {
      name: "MileEnd_Local",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      badge: "Bagel Boss 🥯"
    },
    tags: ["Bagel", "Montreal", "MileEnd", "WoodFired"],
    reviews: [
      {
        id: "rev-ca-401",
        userName: "Sophie B.",
        userAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "4 days ago",
        title: "Smells like heaven!",
        comment: "Nothing compares to a hot St-Viateur bagel eaten right on the sidewalk.",
        helpfulCount: 39,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-5",
    title: "$3.00 Vintage 90s Flannels & Denim Rack",
    storeName: "Courage My Love Vintage",
    category: "thrift",
    price: 3.00,
    regularPrice: 35.00,
    description: "Clearance rack outside front door in Kensington Market! Heavy wool flannels, retro graphic tees and denim.",
    address: "14 Kensington Ave, Toronto, ON M5T 2K1",
    lat: 43.6548,
    lng: -79.4002,
    city: "Toronto, ON",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 380,
    downvotes: 7,
    createdAt: "2026-09-26T15:45:00Z",
    postedBy: {
      name: "KensingtonThrifter",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      badge: "Vintage Queen 🧥"
    },
    tags: ["Thrift", "Kensington", "Vintage", "Flannels"],
    reviews: [
      {
        id: "rev-ca-501",
        userName: "Maya S.",
        userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "1 week ago",
        title: "Scored an authentic oversized flannel",
        comment: "Super cool staff and amazing vintage jewelry too.",
        helpfulCount: 41,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-6",
    title: "$4.00 Local Alberta Craft Draft & Free Loaded Nachos",
    storeName: "Ship & Anchor Pub",
    category: "happyhour",
    price: 4.00,
    regularPrice: 13.00,
    description: "Daily Happy Hour 3 PM - 6 PM! All Calgary craft beers $4 a pint + complimentary plate of jalapeno cheese nachos.",
    address: "534 17 Ave SW, Calgary, AB T2S 0B1",
    lat: 51.0378,
    lng: -114.0742,
    city: "Calgary, AB",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 310,
    downvotes: 6,
    createdAt: "2026-09-25T17:00:00Z",
    postedBy: {
      name: "CalgaryBeerFan",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      badge: "17th Ave Legend 🍺"
    },
    tags: ["Beer", "Calgary", "17thAve", "Nachos"],
    reviews: [
      {
        id: "rev-ca-601",
        userName: "Tyler K.",
        userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "5 days ago",
        title: "Best patio in Calgary!",
        comment: "Great crowd, sun shines right on the patio during happy hour.",
        helpfulCount: 33,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-7",
    title: "$1.99 Fresh BeaverTails Cinnamon & Sugar Pastry",
    storeName: "BeaverTails ByWard Market",
    category: "food",
    price: 1.99,
    regularPrice: 7.50,
    description: "Student card discount deal! Hot fried whole-wheat dough stretched like a beaver tail, coated in cinnamon sugar and lemon juice.",
    address: "69 George St, Ottawa, ON K1N 1K2",
    lat: 45.4278,
    lng: -75.6924,
    city: "Ottawa, ON",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 290,
    downvotes: 2,
    createdAt: "2026-09-30T13:20:00Z",
    postedBy: {
      name: "CapitalEats",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      badge: "Ottawa Scout 🦫"
    },
    tags: ["BeaverTails", "Ottawa", "BywardMarket", "Dessert"],
    reviews: [
      {
        id: "rev-ca-701",
        userName: "Daniel Roy",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "2 days ago",
        title: "Crispy outer crust and soft inside",
        comment: "Classic Canadian treat. Show student ID for the $1.99 promo.",
        helpfulCount: 19,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-8",
    title: "$1.50 Pour-Over Coffee & Almond Muffin Special",
    storeName: "Revolver Coffee",
    category: "drinks",
    price: 1.50,
    regularPrice: 6.00,
    description: "Early bird coffee run (8 AM - 10 AM)! Single origin Ethiopian brew with house baked berry almond muffin.",
    address: "325 Cambie St, Vancouver, BC V6B 2N4",
    lat: 49.2831,
    lng: -123.1118,
    city: "Vancouver, BC",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 215,
    downvotes: 1,
    createdAt: "2026-09-29T08:00:00Z",
    postedBy: {
      name: "GastownBarista",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
      badge: "Gastown Coffee ☕"
    },
    tags: ["Coffee", "Gastown", "Vancouver", "Pastry"],
    reviews: [
      {
        id: "rev-ca-801",
        userName: "Hannah M.",
        userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "3 days ago",
        title: "Exceptional roast quality",
        comment: "Tastes like floral jasmine and stone fruit. Super cozy brick interior.",
        helpfulCount: 22,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-9",
    title: "$0.99 Organic BC Apples & Fresh Berries",
    storeName: "Old Strathcona Farmers' Market",
    category: "groceries",
    price: 0.99,
    regularPrice: 3.49,
    description: "Saturday morning local grower specials! Crisp Ambrosia apples and organic blueberries direct from Okanagan orchards.",
    address: "10310 83 Ave NW, Edmonton, AB T6E 2C6",
    lat: 53.5186,
    lng: -113.4965,
    city: "Edmonton, AB",
    images: [
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 160,
    downvotes: 1,
    createdAt: "2026-09-28T09:45:00Z",
    postedBy: {
      name: "YEG_Organic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      badge: "Edmonton Farmer 🍎"
    },
    tags: ["Apples", "Organic", "Edmonton", "Produce"],
    reviews: [
      {
        id: "rev-ca-901",
        userName: "Kevin P.",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "4 days ago",
        title: "Sweet and crunchy!",
        comment: "Supports local farmers and costs half of big chain supermarkets.",
        helpfulCount: 14,
        photos: [],
        verifiedVisit: true
      }
    ]
  },
  {
    id: "deal-ca-10",
    title: "FREE Community Zines & Book Swap",
    storeName: "Toronto Reference Library Box",
    category: "freebies",
    price: 0.00,
    regularPrice: 18.00,
    description: "Free indie comics, local music zines, paperbacks and graphic novels. Take one, leave one!",
    address: "789 Yonge St, Toronto, ON M4W 2G8",
    lat: 43.6718,
    lng: -79.3867,
    city: "Toronto, ON",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"
    ],
    upvotes: 230,
    downvotes: 0,
    createdAt: "2026-09-30T15:00:00Z",
    postedBy: {
      name: "Yonge_ArtLover",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      badge: "Library Hero 📚"
    },
    tags: ["Free", "Books", "Zines", "Yorkville"],
    reviews: [
      {
        id: "rev-ca-1001",
        userName: "Lucas G.",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        date: "Yesterday",
        title: "Found rare Toronto history zine!",
        comment: "Great spot near Bloor-Yonge station.",
        helpfulCount: 25,
        photos: [],
        verifiedVisit: true
      }
    ]
  }
];
