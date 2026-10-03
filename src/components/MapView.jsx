import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, Globe, Compass, ExternalLink, Map as MapIcon, 
  ArrowUpRight, X, ChevronRight, Navigation, Sparkles 
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
  // Map Type: 'roadmap' | 'satellite' | 'terrain' | 'osm'
  const [mapType, setMapType] = useState('roadmap');
  const [focusedDeal, setFocusedDeal] = useState(null);

  // Sync focused deal with external selectedDeal prop
  useEffect(() => {
    if (selectedDeal) {
      setFocusedDeal(selectedDeal);
    }
  }, [selectedDeal]);

  // Determine active coordinates and name query for map
  const activeLocation = useMemo(() => {
    if (focusedDeal) {
      return {
        lat: focusedDeal.lat,
        lng: focusedDeal.lng,
        name: `${focusedDeal.storeName}, ${focusedDeal.address || focusedDeal.city}`,
        title: focusedDeal.title,
        price: focusedDeal.price,
        storeName: focusedDeal.storeName
      };
    }
    if (center && center.lat && center.lng) {
      return {
        lat: center.lat,
        lng: center.lng,
        name: `${center.name || 'Toronto'}, Canada`,
        title: center.name || 'Selected City',
        price: null,
        storeName: center.name || 'City Center'
      };
    }
    return {
      lat: 43.6532,
      lng: -79.3832,
      name: 'Toronto, ON, Canada',
      title: 'Toronto, ON',
      price: null,
      storeName: 'Toronto Center'
    };
  }, [focusedDeal, center]);

  // Generate robust embed URL
  const embedUrl = useMemo(() => {
    const { lat, lng, name } = activeLocation;

    if (mapType === 'osm') {
      const delta = 0.05;
      const bbox = `${lng - delta},${lat - delta / 1.5},${lng + delta},${lat + delta / 1.5}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
    }

    // Google Maps Embed (m = roadmap, k = satellite, p = terrain)
    let gType = 'm';
    if (mapType === 'satellite') gType = 'k';
    if (mapType === 'terrain') gType = 'p';

    // Query by coordinates for pinpoint accuracy
    const query = `${lat},${lng}`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=${gType}&z=14&ie=UTF8&iwloc=&output=embed`;
  }, [activeLocation, mapType]);

  // Apple Maps Navigation URL
  const appleMapsUrl = useMemo(() => {
    const { lat, lng, storeName, name } = activeLocation;
    return `https://maps.apple.com/?q=${encodeURIComponent(storeName || name)}&ll=${lat},${lng}`;
  }, [activeLocation]);

  // Google Maps Full Web URL
  const googleMapsUrl = useMemo(() => {
    const { lat, lng, storeName, name } = activeLocation;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeName ? `${storeName}, ${name}` : `${lat},${lng}`)}`;
  }, [activeLocation]);

  return (
    <div className="clean-map-container">
      {/* 1. Sleek Floating Top Control Header */}
      <div className="map-floating-header">
        {/* Current City / Spot Indicator Badge */}
        <div className="map-badge-city">
          <MapPin className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0" />
          <span className="font-bold text-xs truncate max-w-[180px] sm:max-w-[260px]">
            {focusedDeal ? focusedDeal.storeName : (center?.name || 'Area Map')}
          </span>
          <span className="text-[11px] text-gray-500 dark:text-gray-400 ml-1">
            ({deals.length} spots)
          </span>
        </div>

        {/* Map Type Switcher Pills & External Links */}
        <div className="map-controls-group">
          <div className="map-type-pills">
            <button 
              type="button"
              className={`type-pill ${mapType === 'roadmap' ? 'active' : ''}`}
              onClick={() => setMapType('roadmap')}
              title="Google Roads"
            >
              <MapIcon className="w-3.5 h-3.5 mr-1 inline" />
              <span>Roads</span>
            </button>

            <button 
              type="button"
              className={`type-pill ${mapType === 'satellite' ? 'active' : ''}`}
              onClick={() => setMapType('satellite')}
              title="Satellite View"
            >
              <Globe className="w-3.5 h-3.5 mr-1 inline" />
              <span>Satellite</span>
            </button>

            <button 
              type="button"
              className={`type-pill ${mapType === 'osm' ? 'active' : ''}`}
              onClick={() => setMapType('osm')}
              title="OpenStreetMap"
            >
              <Compass className="w-3.5 h-3.5 mr-1 inline" />
              <span>OSM</span>
            </button>
          </div>

          {/* 1-Click Apple Maps & Google Maps Direct Directions */}
          <div className="map-directions-links">
            <a 
              href={appleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="direct-nav-btn apple"
              title="Open in Apple Maps"
            >
              <span>🍏 Apple Maps</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </a>

            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="direct-nav-btn google"
              title="Open in Google Maps"
            >
              <span>🗺️ Google Maps</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Full-Bleed 100% Unobstructed Map Frame */}
      <div className="clean-map-frame-wrapper">
        <iframe 
          key={`${mapType}-${activeLocation.lat}-${activeLocation.lng}`}
          title="Interactive Map"
          src={embedUrl}
          className="clean-map-iframe"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* 3. Subtle Focused Deal Floating Bottom Pill (Only shown when a deal is clicked) */}
      {focusedDeal && (
        <div className="focused-spot-mini-bar">
          <div className="mini-bar-info">
            <span className="mini-price">
              {focusedDeal.price === 0 ? 'FREE' : `$${focusedDeal.price.toFixed(2)}`}
            </span>
            <div className="mini-text-col">
              <span className="mini-title">{focusedDeal.title}</span>
              <span className="mini-store">📍 {focusedDeal.storeName}</span>
            </div>
          </div>

          <div className="mini-bar-actions">
            <button 
              type="button" 
              className="mini-btn-details"
              onClick={() => onSelectDeal(focusedDeal)}
            >
              Details
              <ChevronRight className="w-3.5 h-3.5 ml-0.5 inline" />
            </button>

            <a 
              href={appleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mini-btn-nav"
              title="Directions in Apple Maps"
            >
              🍏 Nav
            </a>

            <button 
              type="button" 
              className="mini-btn-close"
              onClick={() => setFocusedDeal(null)}
              title="Close focus pill"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Mode notice when posting a new spot */}
      {isAddingPinMode && (
        <div className="map-pin-mode-badge">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
          <span>Showing center for your new spot. Enter address in form to set coordinates!</span>
        </div>
      )}
    </div>
  );
}
