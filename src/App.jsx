import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_DEALS, CITIES, CATEGORIES } from './data/initialDeals';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import MapView from './components/MapView';
import ItemCard from './components/ItemCard';
import ItemDetailModal from './components/ItemDetailModal';
import AddDealModal from './components/AddDealModal';
import SavedDrawer from './components/SavedDrawer';
import AuthModal from './components/AuthModal';
import { isFirebaseConfigured } from './firebase/config';
import { subscribeToAuth, logoutUser } from './firebase/authService';
import { 
  subscribeToFirestoreDeals, 
  addDealToFirestore, 
  voteDealInFirestore, 
  addReviewToFirestore 
} from './firebase/dealsService';
import { Plus } from 'lucide-react';
import './App.css';

export default function App() {
  // Load initial deals from localStorage or fallback to Canadian deals
  const [deals, setDeals] = useState(() => {
    try {
      const saved = localStorage.getItem('findcheap_canada_deals_v3');
      return saved ? JSON.parse(saved) : INITIAL_DEALS;
    } catch (e) {
      return INITIAL_DEALS;
    }
  });

  // User Auth & Firebase state
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Subscribe to Firebase Auth changes
  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Subscribe to Firestore database real-time sync if configured
  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    
    const unsubscribe = subscribeToFirestoreDeals((firestoreDeals) => {
      if (firestoreDeals && firestoreDeals.length > 0) {
        setDeals(firestoreDeals);
      }
    });
    return () => unsubscribe();
  }, []);

  // Saved Wishlist IDs
  const [savedDealIds, setSavedDealIds] = useState(() => {
    try {
      const saved = localStorage.getItem('findcheap_saved_ids');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // User Votes: { [dealId]: 'up' | 'down' }
  const [userVotes, setUserVotes] = useState(() => {
    try {
      const saved = localStorage.getItem('findcheap_user_votes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Map Theme & View Mode
  const [mapTheme, setMapTheme] = useState('light'); // light, dark, satellite
  const [viewMode, setViewMode] = useState('split'); // split, map, grid
  const [selectedCity, setSelectedCity] = useState(CITIES[0]); // Toronto, ON
  const [center, setCenter] = useState({ lat: CITIES[0].lat, lng: CITIES[0].lng });

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortBy, setSortBy] = useState('upvotes');

  // Modals & Drawers
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [pickedLocation, setPickedLocation] = useState(null);
  const [isAddingPinMode, setIsAddingPinMode] = useState(false);

  // Sync state to LocalStorage as fallback
  useEffect(() => {
    try {
      localStorage.setItem('findcheap_canada_deals_v3', JSON.stringify(deals));
    } catch (e) {}
  }, [deals]);

  useEffect(() => {
    try {
      localStorage.setItem('findcheap_saved_ids', JSON.stringify(savedDealIds));
    } catch (e) {}
  }, [savedDealIds]);

  useEffect(() => {
    try {
      localStorage.setItem('findcheap_user_votes', JSON.stringify(userVotes));
    } catch (e) {}
  }, [userVotes]);

  // Handle City Change
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setCenter({ lat: city.lat, lng: city.lng });
  };

  // User Geolocation
  const handleLocateUser = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setCenter(userCenter);
          setSelectedCity({ name: 'Current Location', ...userCenter });
        },
        () => {
          alert('Could not access device location. Showing city center.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  // Upvote Handler (syncs with Firestore if configured)
  const handleUpvote = async (dealId) => {
    let deltaUp = 0;
    let deltaDown = 0;

    setUserVotes(prev => {
      const currentVote = prev[dealId];
      let newVote = 'up';

      if (currentVote === 'up') {
        newVote = null;
        deltaUp = -1;
      } else if (currentVote === 'down') {
        deltaUp = 1;
        deltaDown = -1;
      } else {
        deltaUp = 1;
      }

      setDeals(dList => dList.map(d => {
        if (d.id === dealId) {
          return {
            ...d,
            upvotes: Math.max(0, d.upvotes + deltaUp),
            downvotes: Math.max(0, d.downvotes + deltaDown)
          };
        }
        return d;
      }));

      if (selectedDeal && selectedDeal.id === dealId) {
        setSelectedDeal(prev => ({
          ...prev,
          upvotes: Math.max(0, prev.upvotes + deltaUp),
          downvotes: Math.max(0, prev.downvotes + deltaDown)
        }));
      }

      const updated = { ...prev };
      if (newVote) updated[dealId] = newVote;
      else delete updated[dealId];
      return updated;
    });

    if (isFirebaseConfigured()) {
      try {
        await voteDealInFirestore(dealId, deltaUp, deltaDown);
      } catch (err) {
        console.warn('Firestore vote sync error:', err);
      }
    }
  };

  // Downvote Handler
  const handleDownvote = async (dealId) => {
    let deltaUp = 0;
    let deltaDown = 0;

    setUserVotes(prev => {
      const currentVote = prev[dealId];
      let newVote = 'down';

      if (currentVote === 'down') {
        newVote = null;
        deltaDown = -1;
      } else if (currentVote === 'up') {
        deltaDown = 1;
        deltaUp = -1;
      } else {
        deltaDown = 1;
      }

      setDeals(dList => dList.map(d => {
        if (d.id === dealId) {
          return {
            ...d,
            upvotes: Math.max(0, d.upvotes + deltaUp),
            downvotes: Math.max(0, d.downvotes + deltaDown)
          };
        }
        return d;
      }));

      if (selectedDeal && selectedDeal.id === dealId) {
        setSelectedDeal(prev => ({
          ...prev,
          upvotes: Math.max(0, prev.upvotes + deltaUp),
          downvotes: Math.max(0, prev.downvotes + deltaDown)
        }));
      }

      const updated = { ...prev };
      if (newVote) updated[dealId] = newVote;
      else delete updated[dealId];
      return updated;
    });

    if (isFirebaseConfigured()) {
      try {
        await voteDealInFirestore(dealId, deltaUp, deltaDown);
      } catch (err) {
        console.warn('Firestore vote sync error:', err);
      }
    }
  };

  // Toggle Save Deal
  const handleToggleSave = (dealId) => {
    setSavedDealIds(prev => 
      prev.includes(dealId) ? prev.filter(id => id !== dealId) : [...prev, dealId]
    );
  };

  // Add New Deal (Syncs to Firestore if configured)
  const handleAddDeal = async (newDeal) => {
    if (currentUser) {
      newDeal.postedBy = {
        name: currentUser.displayName || currentUser.email?.split('@')[0] || 'CheapSpot Spotter',
        avatar: currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`,
        badge: 'Verified Hunter 🌟'
      };
    }

    if (isFirebaseConfigured()) {
      try {
        const firestoreId = await addDealToFirestore(newDeal);
        if (firestoreId) {
          newDeal.id = firestoreId;
        }
      } catch (err) {
        console.warn('Firestore add deal error:', err);
      }
    }

    setDeals(prev => [newDeal, ...prev]);
    setCenter({ lat: newDeal.lat, lng: newDeal.lng });
    setPickedLocation(null);
    setIsAddingPinMode(false);
  };

  // Add Review to Deal (Syncs to Firestore if configured)
  const handleAddReview = async (dealId, newReview) => {
    if (currentUser) {
      newReview.userName = currentUser.displayName || currentUser.email?.split('@')[0] || newReview.userName;
      newReview.userAvatar = currentUser.photoURL || newReview.userAvatar;
    }

    setDeals(prev => prev.map(d => {
      if (d.id === dealId) {
        const updatedReviews = [newReview, ...(d.reviews || [])];
        return { ...d, reviews: updatedReviews };
      }
      return d;
    }));

    if (selectedDeal && selectedDeal.id === dealId) {
      setSelectedDeal(prev => ({
        ...prev,
        reviews: [newReview, ...(prev.reviews || [])]
      }));
    }

    if (isFirebaseConfigured()) {
      try {
        await addReviewToFirestore(dealId, newReview);
      } catch (err) {
        console.warn('Firestore add review error:', err);
      }
    }
  };

  // Vote Review as Helpful
  const handleVoteHelpful = (dealId, reviewId) => {
    setDeals(prev => prev.map(d => {
      if (d.id === dealId) {
        const updatedReviews = (d.reviews || []).map(r => {
          if (r.id === reviewId) {
            return { ...r, helpfulCount: (r.helpfulCount || 0) + 1 };
          }
          return r;
        });
        return { ...d, reviews: updatedReviews };
      }
      return d;
    }));

    if (selectedDeal && selectedDeal.id === dealId) {
      setSelectedDeal(prev => ({
        ...prev,
        reviews: (prev.reviews || []).map(r => {
          if (r.id === reviewId) {
            return { ...r, helpfulCount: (r.helpfulCount || 0) + 1 };
          }
          return r;
        })
      }));
    }
  };

  // Handle Map Click (Drop Pin)
  const handleMapClick = (coords) => {
    setPickedLocation(coords);
    if (isAddingPinMode) {
      setIsAddModalOpen(true);
      setIsAddingPinMode(false);
    }
  };

  // Filter & Sort Deals
  const filteredDeals = useMemo(() => {
    return deals.filter(deal => {
      if (selectedCategory !== 'all' && deal.category !== selectedCategory) {
        return false;
      }
      if (maxPrice !== 100 && deal.price > maxPrice) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = deal.title.toLowerCase().includes(q);
        const matchesStore = deal.storeName?.toLowerCase().includes(q);
        const matchesDesc = deal.description?.toLowerCase().includes(q);
        const matchesTags = deal.tags?.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesStore && !matchesDesc && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'upvotes') {
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
      }
      if (sortBy === 'cheapest') {
        return a.price - b.price;
      }
      if (sortBy === 'savings') {
        const savingsA = a.regularPrice > a.price ? (a.regularPrice - a.price) / a.regularPrice : 0;
        const savingsB = b.regularPrice > b.price ? (b.regularPrice - b.price) / b.regularPrice : 0;
        return savingsB - savingsA;
      }
      if (sortBy === 'rating') {
        const ratingA = a.reviews?.length > 0 ? a.reviews.reduce((acc, r) => acc + r.rating, 0) / a.reviews.length : 0;
        const ratingB = b.reviews?.length > 0 ? b.reviews.reduce((acc, r) => acc + r.rating, 0) / b.reviews.length : 0;
        return ratingB - ratingA;
      }
      if (sortBy === 'recent') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });
  }, [deals, selectedCategory, maxPrice, searchQuery, sortBy]);

  // Saved Deals Object List
  const savedDeals = useMemo(() => {
    return deals.filter(d => savedDealIds.includes(d.id));
  }, [deals, savedDealIds]);

  return (
    <div className={`app-shell ${mapTheme === 'dark' ? 'dark-mode' : ''}`}>
      {/* Top Navigation Header */}
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        savedCount={savedDealIds.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onLocateUser={handleLocateUser}
        mapTheme={mapTheme}
        onToggleTheme={() => {
          if (mapTheme === 'light') setMapTheme('dark');
          else if (mapTheme === 'dark') setMapTheme('satellite');
          else setMapTheme('light');
        }}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={logoutUser}
      />

      {/* Category & Filters Bar */}
      <CategoryBar 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        totalResultsCount={filteredDeals.length}
      />

      {/* Main View Layout Container */}
      <main className={`main-layout-content view-${viewMode}`}>
        {/* MAP PANEL */}
        {(viewMode === 'map' || viewMode === 'split') && (
          <div className="map-panel-wrapper">
            <MapView 
              deals={filteredDeals}
              selectedDeal={selectedDeal}
              onSelectDeal={setSelectedDeal}
              center={center}
              onMapClick={handleMapClick}
              isAddingPinMode={isAddingPinMode ? (pickedLocation || center) : null}
              selectedCategory={selectedCategory}
              mapTheme={mapTheme}
            />
          </div>
        )}

        {/* LIST / GRID PANEL */}
        {(viewMode === 'grid' || viewMode === 'split') && (
          <div className="deals-panel-wrapper">
            <div className="deals-panel-header">
              <h2 className="panel-title">
                {selectedCategory === 'all' ? 'All Cheap Spots & Deals' : `${CATEGORIES.find(c => c.id === selectedCategory)?.icon} ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
              </h2>
              <span className="panel-sub">Click any card to inspect full photos, reviews, & map directions</span>
            </div>

            {filteredDeals.length === 0 ? (
              <div className="empty-results-box">
                <div className="empty-emoji">🔍</div>
                <h3>No cheap spots found matching your filter</h3>
                <p>Try clearing your search keyword, adjusting max price, or post a new spot yourself!</p>
                <button 
                  className="post-new-spot-btn"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  <Plus className="w-4 h-4 mr-1 inline" />
                  Post a New Cheap Spot Here
                </button>
              </div>
            ) : (
              <div className="deals-cards-grid">
                {filteredDeals.map((deal) => (
                  <ItemCard 
                    key={deal.id}
                    deal={deal}
                    onSelectDeal={setSelectedDeal}
                    isSaved={savedDealIds.includes(deal.id)}
                    onToggleSave={handleToggleSave}
                    onUpvote={handleUpvote}
                    onDownvote={handleDownvote}
                    userVote={userVotes[deal.id]}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Action Button (FAB) on mobile */}
      <button 
        className="mobile-fab-post"
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Item Detail & Reviews Modal */}
      {selectedDeal && (
        <ItemDetailModal 
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
          isSaved={savedDealIds.includes(selectedDeal.id)}
          onToggleSave={handleToggleSave}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          userVote={userVotes[selectedDeal.id]}
          onAddReview={handleAddReview}
          onVoteHelpful={handleVoteHelpful}
        />
      )}

      {/* Add Spot Modal */}
      {isAddModalOpen && (
        <AddDealModal 
          onClose={() => setIsAddModalOpen(false)}
          onAddDeal={handleAddDeal}
          pickedLocation={pickedLocation}
          onStartPinPick={() => {
            setIsAddModalOpen(false);
            setIsAddingPinMode(true);
          }}
        />
      )}

      {/* Saved Deals Drawer */}
      <SavedDrawer 
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedDeals={savedDeals}
        onSelectDeal={setSelectedDeal}
        onRemoveSave={handleToggleSave}
      />

      {/* Firebase User Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
      />
    </div>
  );
}
