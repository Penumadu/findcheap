import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { CATEGORIES } from '../data/initialDeals';
import { MapPin, Navigation, Compass, Layers, Maximize2 } from 'lucide-react';

export default function MapView({ 
  deals, 
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
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const addPinMarkerRef = useRef(null);
  const userMarkerRef = useRef(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [center.lat, center.lng],
        zoom: 13,
        zoomControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      mapInstanceRef.current = map;

      // Handle map click when in add pin mode
      map.on('click', (e) => {
        onMapClick({ lat: e.latlng.lat, lng: e.latlng.lng });
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Tile layer update based on theme
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    let tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

    if (mapTheme === 'dark') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    } else if (mapTheme === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    }

    L.tileLayer(tileUrl, { attribution, maxZoom: 19 }).addTo(map);
  }, [mapTheme]);

  // Update center when city/center changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (map && center) {
      map.flyTo([center.lat, center.lng], 13, {
        animate: true,
        duration: 1.2
      });
    }
  }, [center]);

  // Handle fly to selected deal
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedDeal) return;

    map.flyTo([selectedDeal.lat, selectedDeal.lng], 15, {
      animate: true,
      duration: 1
    });

    // Open marker popup if exists
    const marker = markersRef.current[selectedDeal.id];
    if (marker) {
      setTimeout(() => {
        marker.openPopup();
      }, 400);
    }
  }, [selectedDeal]);

  // User Geolocation Radar Marker
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userLocation && userLocation.lat && userLocation.lng) {
      if (userMarkerRef.current) {
        map.removeLayer(userMarkerRef.current);
      }

      const userHtml = `
        <div class="user-radar-marker">
          <div class="user-radar-ring"></div>
          <div class="user-radar-dot"></div>
        </div>
      `;

      const userIcon = L.divIcon({
        html: userHtml,
        className: 'user-marker-wrapper',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon }).addTo(map);
    }
  }, [userLocation]);

  // Render Deal Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing deal markers
    Object.values(markersRef.current).forEach(marker => map.removeLayer(marker));
    markersRef.current = {};

    deals.forEach((deal) => {
      const categoryObj = CATEGORIES.find(c => c.id === deal.category) || CATEGORIES[0];
      const isSelected = selectedDeal && selectedDeal.id === deal.id;
      const priceText = deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`;
      
      const iconHtml = `
        <div class="custom-map-marker ${isSelected ? 'selected' : ''}" style="--category-color: ${categoryObj.color}">
          <div class="marker-pulse"></div>
          <div class="marker-card">
            <span class="marker-icon">${categoryObj.icon}</span>
            <span class="marker-price">${priceText}</span>
          </div>
          <div class="marker-pin-tip"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-leaflet-marker-wrapper',
        iconSize: [60, 40],
        iconAnchor: [30, 42],
        popupAnchor: [0, -45]
      });

      const marker = L.marker([deal.lat, deal.lng], { icon: customIcon }).addTo(map);

      const avgRating = deal.reviews && deal.reviews.length > 0 
        ? (deal.reviews.reduce((acc, r) => acc + r.rating, 0) / deal.reviews.length).toFixed(1)
        : null;

      const popupHtml = `
        <div class="map-popup-content">
          <div class="popup-img-wrapper">
            <img src="${deal.images[0] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'}" alt="${deal.title}" />
            <span class="popup-badge" style="background:${categoryObj.color}">${categoryObj.icon} ${categoryObj.label}</span>
          </div>
          <div class="popup-body">
            <div class="popup-price-row">
              <span class="popup-price">${deal.price === 0 ? 'FREE' : '$' + deal.price.toFixed(2)}</span>
              ${deal.regularPrice > deal.price ? `<span class="popup-savings">Save ${Math.round(((deal.regularPrice - deal.price) / deal.regularPrice) * 100)}%</span>` : ''}
            </div>
            <h4 class="popup-title">${deal.title}</h4>
            <p class="popup-store">📍 ${deal.storeName || deal.address}</p>
            ${avgRating ? `<div class="popup-rating">⭐ ${avgRating} (${deal.reviews.length} reviews)</div>` : ''}
            <button class="popup-btn" id="btn-view-${deal.id}">View Details & Reviews</button>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280, className: 'custom-leaflet-popup' });

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-view-${deal.id}`);
        if (btn) {
          btn.addEventListener('click', () => {
            onSelectDeal(deal);
          });
        }
      });

      marker.on('click', () => {
        onSelectDeal(deal);
      });

      markersRef.current[deal.id] = marker;
    });
  }, [deals, selectedDeal]);

  // Handle temporary add pin marker
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (isAddingPinMode && isAddingPinMode.lat && isAddingPinMode.lng) {
      if (addPinMarkerRef.current) {
        map.removeLayer(addPinMarkerRef.current);
      }

      const addPinHtml = `
        <div class="add-pin-marker pulsing">
          <div class="add-pin-inner">
            📍 Drop Spot Here
          </div>
        </div>
      `;

      const addIcon = L.divIcon({
        html: addPinHtml,
        className: 'add-pin-wrapper',
        iconSize: [110, 40],
        iconAnchor: [55, 40]
      });

      addPinMarkerRef.current = L.marker([isAddingPinMode.lat, isAddingPinMode.lng], { icon: addIcon }).addTo(map);
      map.flyTo([isAddingPinMode.lat, isAddingPinMode.lng], 15);
    } else if (addPinMarkerRef.current) {
      map.removeLayer(addPinMarkerRef.current);
      addPinMarkerRef.current = null;
    }
  }, [isAddingPinMode]);

  // Function to fit map bounds to all active deal markers
  const handleFitBounds = () => {
    const map = mapInstanceRef.current;
    if (!map || deals.length === 0) return;

    const bounds = L.latLngBounds(deals.map(d => [d.lat, d.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
  };

  return (
    <div className="map-view-container">
      <div ref={mapContainerRef} className="leaflet-map-element" />

      {/* Floating Map Controls Overlay */}
      <div className="map-floating-controls">
        <button 
          className="map-floating-btn" 
          onClick={handleFitBounds}
          title="Fit all deal spots on map"
        >
          <Maximize2 className="w-4 h-4 mr-1 inline" />
          <span className="hidden sm:inline">Fit All</span>
        </button>

        <button 
          className="map-floating-btn" 
          onClick={onToggleTheme}
          title="Toggle Map Style"
        >
          <Layers className="w-4 h-4 mr-1 inline" />
          <span className="hidden sm:inline">{mapTheme}</span>
        </button>
      </div>

      {isAddingPinMode && (
        <div className="map-instruction-banner">
          <MapPin className="icon animate-bounce" />
          <span>Click anywhere on the map to set the location for your cheap spot!</span>
        </div>
      )}
    </div>
  );
}
