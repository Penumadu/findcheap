import React, { useState, useEffect, useMemo } from 'react';
import { CATEGORIES } from '../data/initialDeals';
import { 
  MapPin, Navigation, Compass, Layers, Maximize2, ExternalLink, 
  Map as MapIcon, Globe, Sparkles, Star, ChevronRight, X, ArrowUpRight
} from 'lucide-react';

export default function MapView({ 
  deals = [], 
  selectedDeal, 
  onSelectDeal, 
  center, 
  onMapClick, 
  isAddingPinMode,
  selectedCategory,
  mapTheme,
  userLocation,
  onToggleTheme
}) {
  // Provider mode: 'google-road', 'google-satellite', 'google-terrain', 'osm'
  const [provider, setProvider] = useState('google-road');
  const [zoomLevel, setZoomLevel] = useState(14);
  const [activePinDeal, setActivePinDeal] = useState(null);

  // Sync active deal when selectedDeal prop changes
  useEffect(() => {
    if (selectedDeal) {
      setActivePinDeal(selectedDeal);
    }
  }, [selectedDeal]);

  // Determine current map center coordinates
  const currentCoords = useMemo(() => {
    if (activePinDeal) {
      return { lat: activePinDeal.lat, lng: activePinDeal.lng, label: activePinDeal.title };
    }
    if (center && center.lat && center.lng) {
      return { lat: center.lat, lng: center.lng, label: center.name || 'Selected City' };
    }
    return { lat: 43.6532, lng: -79.3832, label: 'Toronto, ON' };
  }, [activePinDeal, center]);

  // Construct map iframe URL based on provider
  const mapIframeUrl = useMemo(() => {
    const { lat, lng } = currentCoords;
    
    if (provider === 'osm') {
      const delta = 0.04;
      const bbox = `${lng - delta},${lat - delta / 1.5},${lng + delta},${lat + delta / 1.5}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
    }

    // Google Maps Embed (m = roadmap, k = satellite, p = terrain)
    let mapType = 'm';
    if (provider === 'google-satellite') mapType = 'k';
    if (provider === 'google-terrain') mapType = 'p';

    const query = `${lat},${lng}`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=${mapType}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;
  }, [currentCoords, provider, zoomLevel]);

  // Apple Maps Navigation URL
  const appleMapsUrl = useMemo(() => {
    const target = activePinDeal || currentCoords;
    const name = activePinDeal ? activePinDeal.storeName : (center?.name || 'FindCheap Spot');
    return `https://maps.apple.com/?q=${encodeURIComponent(name)}&ll=${target.lat},${target.lng}`;
  }, [activePinDeal, currentCoords, center]);

  // Google Maps Full Web URL
  const googleMapsUrl = useMemo(() => {
    const target = activePinDeal || currentCoords;
    const query = activePinDeal 
      ? `${activePinDeal.storeName}, ${activePinDeal.address}` 
      : `${target.lat},${target.lng}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }, [activePinDeal, currentCoords]);

  // Handle pin click in overlay carousel
  const handleSpotClick = (deal) => {
    setActivePinDeal(deal);
    onSelectDeal(deal);
  };

  return (
    <div className="modern-map-wrapper">
      {/* Top Floating Control Bar */}
      <div className="map-top-bar">
        <div className="map-provider-pills">
          <button 
            type="button"
            className={`map-pill-btn ${provider === 'google-road' ? 'active' : ''}`}
            onClick={() => setProvider('google-road')}
            title="Google Maps Streets View"
          >
            <MapIcon className="w-3.5 h-3.5 mr-1 inline" />
            <span>Google Roads</span>
          </button>

          <button 
            type="button"
            className={`map-pill-btn ${provider === 'google-satellite' ? 'active' : ''}`}
            onClick={() => setProvider('google-satellite')}
            title="Google Maps High-Res Satellite"
          >
            <Globe className="w-3.5 h-3.5 mr-1 inline" />
            <span>Satellite</span>
          </button>

          <button 
            type="button"
            className={`map-pill-btn ${provider === 'osm' ? 'active' : ''}`}
            onClick={() => setProvider('osm')}
            title="OpenStreetMap View"
          >
            <Compass className="w-3.5 h-3.5 mr-1 inline" />
            <span>OpenStreet</span>
          </button>
        </div>

        {/* Quick External Map Launcher (Apple Maps / Google Maps) */}
        <div className="map-external-links">
          <a 
            href={appleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="external-map-btn apple-maps"
            title="Open exact location in Apple Maps"
          >
            <span className="font-semibold text-xs">🍏 Apple Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>

          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="external-map-btn google-maps"
            title="Open exact location in Google Maps"
          >
            <span className="font-semibold text-xs">🗺️ Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Main Interactive Map Frame */}
      <div className="map-frame-container">
        <iframe 
          key={`${provider}-${currentCoords.lat}-${currentCoords.lng}-${zoomLevel}`}
          title="FindCheap Interactive Map"
          src={mapIframeUrl}
          className="map-iframe"
          loading="lazy"
          allowFullScreen
        />

        {/* Pin Location Target Overlay */}
        <div className="map-center-target-badge">
          <div className="target-dot" />
          <span className="target-text">
            📍 {activePinDeal ? activePinDeal.storeName : (center?.name || 'Map Center')}
          </span>
        </div>
      </div>

      {/* Interactive Floating Deal Pins Strip */}
      <div className="map-deals-floating-strip">
        <div className="floating-strip-header">
          <span className="strip-title">
            🎯 {deals.length} Cheap Spots in {center?.name || 'Area'}
          </span>
          <span className="strip-hint">Click any spot to fly map & view directions</span>
        </div>

        <div className="floating-pins-scroll">
          {deals.slice(0, 15).map((deal) => {
            const isSelected = (activePinDeal && activePinDeal.id === deal.id) || (selectedDeal && selectedDeal.id === deal.id);
            const catObj = CATEGORIES.find(c => c.id === deal.category) || CATEGORIES[0];
            const priceText = deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`;

            return (
              <button
                key={deal.id}
                type="button"
                className={`floating-deal-pin-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSpotClick(deal)}
              >
                <span className="pin-chip-icon">{catObj.icon}</span>
                <div className="pin-chip-content">
                  <div className="pin-chip-top">
                    <span className="pin-chip-price">{priceText}</span>
                    {deal.regularPrice > deal.price && (
                      <span className="pin-chip-savings">
                        Save {Math.round(((deal.regularPrice - deal.price) / deal.regularPrice) * 100)}%
                      </span>
                    )}
                  </div>
                  <span className="pin-chip-title">{deal.title}</span>
                  <span className="pin-chip-store">📍 {deal.storeName}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Selected Deal Detail Card Overlay */}
      {activePinDeal && (
        <div className="active-spot-flyout-card">
          <button 
            type="button" 
            className="flyout-close-btn"
            onClick={() => setActivePinDeal(null)}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flyout-content-flex">
            <img 
              src={activePinDeal.images[0] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'} 
              alt={activePinDeal.title}
              className="flyout-thumbnail" 
            />

            <div className="flyout-details-col">
              <div className="flex items-center justify-between mb-1">
                <span className="flyout-price font-extrabold text-rose-500 text-lg">
                  {activePinDeal.price === 0 ? 'FREE' : `$${activePinDeal.price.toFixed(2)}`}
                </span>
                <span className="flyout-category-badge">
                  {CATEGORIES.find(c => c.id === activePinDeal.category)?.icon} {activePinDeal.city}
                </span>
              </div>

              <h4 className="flyout-title">{activePinDeal.title}</h4>
              <p className="flyout-address">📍 {activePinDeal.storeName} • {activePinDeal.address}</p>

              <div className="flyout-actions-row mt-2.5">
                <button 
                  type="button"
                  className="flyout-details-btn"
                  onClick={() => onSelectDeal(activePinDeal)}
                >
                  Inspect Full Reviews
                  <ChevronRight className="w-4 h-4 ml-1 inline" />
                </button>

                <a 
                  href={appleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flyout-map-btn"
                  title="Apple Maps Directions"
                >
                  🍏 Apple
                </a>

                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flyout-map-btn"
                  title="Google Maps Directions"
                >
                  🗺️ Google
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Pin Notice */}
      {isAddingPinMode && (
        <div className="map-add-pin-guide">
          <Sparkles className="w-4 h-4 text-indigo-500 animate-spin mr-1.5" />
          <span>Showing location on map! Fill in the address in the form to confirm coordinates.</span>
        </div>
      )}
    </div>
  );
}
