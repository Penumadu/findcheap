import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CATEGORIES, CITIES } from '../data/initialDeals';
import { 
  X, MapPin, Upload, Camera, DollarSign, Tag, Image, 
  Sparkles, Check, AlertCircle, Plus, Compass, Search, Loader2 
} from 'lucide-react';

const SAMPLE_PRESET_IMAGES = [
  { label: 'Bánh Mì / Sandwich', url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800' },
  { label: 'Poutine / Fries', url: 'https://images.unsplash.com/photo-1586805608485-aaa3365b315b?w=800' },
  { label: 'Dumplings / Asian Eats', url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800' },
  { label: 'Wood-Fired Bagel', url: 'https://images.unsplash.com/photo-1585478259715-876a6a81ae08?w=800' },
  { label: 'Coffee & Pastry', url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800' },
  { label: 'Thrift Clothes / Flannel', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800' },
  { label: 'Craft Beer / Cocktails', url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800' }
];

export default function AddDealModal({ 
  onClose, 
  onAddDeal, 
  pickedLocation, 
  onStartPinPick,
  onShowToast
}) {
  const [title, setTitle] = useState('');
  const [storeName, setStoreName] = useState('');
  const [category, setCategory] = useState('food');
  const [price, setPrice] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState(CITIES[0].name);
  const [tagsInput, setTagsInput] = useState('');
  
  // Geocoding state
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [geocodeMsg, setGeocodeMsg] = useState('');

  // Lat / Lng
  const [lat, setLat] = useState(pickedLocation ? pickedLocation.lat : CITIES[0].lat);
  const [lng, setLng] = useState(pickedLocation ? pickedLocation.lng : CITIES[0].lng);

  // Photos State
  const [photos, setPhotos] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update coordinates if picked location changes
  React.useEffect(() => {
    if (pickedLocation) {
      setLat(pickedLocation.lat);
      setLng(pickedLocation.lng);
      if (!address) {
        setAddress(`Near ${pickedLocation.lat.toFixed(4)}, ${pickedLocation.lng.toFixed(4)}`);
      }
    }
  }, [pickedLocation]);

  // Handle City change
  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    const cityObj = CITIES.find(c => c.name === cityName);
    if (cityObj && !pickedLocation) {
      setLat(cityObj.lat + (Math.random() - 0.5) * 0.02);
      setLng(cityObj.lng + (Math.random() - 0.5) * 0.02);
    }
  };

  // Live Geocode Address using OpenStreetMap Nominatim API
  const handleGeocodeAddress = async () => {
    const query = `${address} ${selectedCity}`.trim();
    if (!query) {
      setGeocodeMsg('Please enter an address first.');
      return;
    }

    try {
      setIsGeocoding(true);
      setGeocodeMsg('');
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data && data.length > 0) {
        const foundLat = parseFloat(data[0].lat);
        const foundLng = parseFloat(data[0].lon);
        setLat(foundLat);
        setLng(foundLng);
        setGeocodeMsg(`📍 Located! Pin updated to (${foundLat.toFixed(4)}, ${foundLng.toFixed(4)})`);
        if (onShowToast) onShowToast('Address geocoded successfully!', 'success');
      } else {
        setGeocodeMsg('Address not found. Please click "Pick Spot on Map" instead.');
      }
    } catch (err) {
      setGeocodeMsg('Could not geocode address automatically. Please pick on map.');
    } finally {
      setIsGeocoding(false);
    }
  };

  // Handle Local File Upload
  const handleFileUpload = (files) => {
    const fileList = Array.from(files);
    fileList.forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Add preset sample photo
  const handleAddPresetPhoto = (url) => {
    if (!photos.includes(url)) {
      setPhotos(prev => [...prev, url]);
    }
  };

  // Remove photo from preview list
  const handleRemovePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Please enter a title for the deal/item.');
      return;
    }
    if (price === '' || isNaN(parseFloat(price))) {
      setErrorMsg('Please enter a valid price (use 0 for freebies).');
      return;
    }
    if (!storeName.trim() && !address.trim()) {
      setErrorMsg('Please enter a place/store name or address.');
      return;
    }

    const tagsArray = tagsInput
      .split(',')
      .map(t => t.trim().replace(/^#/, ''))
      .filter(t => t.length > 0);

    const defaultImages = [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'
    ];

    const newDealObj = {
      id: `deal-${Date.now()}`,
      title: title.trim(),
      storeName: storeName.trim() || 'Local Cheap Spot',
      category: category,
      price: parseFloat(price),
      regularPrice: regularPrice !== '' ? parseFloat(regularPrice) : parseFloat(price),
      description: description.trim() || 'Great cheap deal submitted by community hunter.',
      address: address.trim() || storeName.trim() || selectedCity,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      city: selectedCity,
      images: photos.length > 0 ? photos : defaultImages,
      upvotes: 1,
      downvotes: 0,
      createdAt: new Date().toISOString(),
      postedBy: {
        name: 'You (Deal Spotter)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120',
        badge: 'New Finder 🌟'
      },
      tags: tagsArray.length > 0 ? tagsArray : ['CheapSpot', 'LocalDeal'],
      reviews: []
    };

    onAddDeal(newDealObj);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container add-deal-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        <div className="add-modal-header">
          <div className="header-icon-badge">
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </div>
          <div>
            <h2 className="modal-title">Post a Cheap Spot or Item</h2>
            <p className="modal-subtitle">Share cheap food, thrift finds, groceries, or freebies with the community!</p>
          </div>
        </div>

        {errorMsg && (
          <div className="error-banner">
            <AlertCircle className="w-4 h-4 inline mr-1.5" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-deal-form">
          {/* STEP 1: Basic Info */}
          <div className="form-section">
            <h4 className="section-heading">1. Item & Pricing Details</h4>

            <div className="form-group">
              <label className="input-label">Item / Deal Title *</label>
              <input 
                type="text" 
                placeholder="e.g. $2.99 Crispy BBQ Pork Bánh Mì or $4.50 Poutine" 
                className="form-input"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="form-group">
                <label className="input-label">Category *</label>
                <select 
                  className="form-select"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="input-label">Deal Price ($ CAD) *</label>
                <input 
                  type="number" 
                  step="0.01"
                  min="0"
                  placeholder="2.99 (0 for Free)" 
                  className="form-input"
                  required
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="input-label">Regular Price ($ CAD)</label>
                <input 
                  type="number" 
                  step="0.01"
                  min="0"
                  placeholder="e.g. 7.50 (for % savings)" 
                  className="form-input"
                  value={regularPrice}
                  onChange={e => setRegularPrice(e.target.value)}
                />
              </div>
            </div>

            {price !== '' && regularPrice !== '' && parseFloat(regularPrice) > parseFloat(price) && (
              <div className="savings-preview-badge">
                🎉 Savings Preview: Save Math.round(((regularPrice - price) / regularPrice) * 100)%!
              </div>
            )}

            <div className="form-group mt-3">
              <label className="input-label">Description & Tips</label>
              <textarea 
                placeholder="Portion size, special hours, cash only rules, flavor notes..." 
                className="form-textarea"
                rows="3"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* STEP 2: Location & Address */}
          <div className="form-section mt-4">
            <h4 className="section-heading">2. Location & Place Info</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="form-group">
                <label className="input-label">Store / Place Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bánh Mì Ba Lẹ" 
                  className="form-input"
                  value={storeName}
                  onChange={e => setStoreName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="input-label">City preset</label>
                <select 
                  className="form-select"
                  value={selectedCity}
                  onChange={e => handleCitySelect(e.target.value)}
                >
                  {CITIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <label className="input-label">Address or Cross Streets</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="e.g. 354 Spadina Ave, Toronto, ON" 
                  className="form-input"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
                <button 
                  type="button" 
                  className="geocode-btn shrink-0"
                  onClick={handleGeocodeAddress}
                  disabled={isGeocoding}
                >
                  {isGeocoding ? <Loader2 className="w-4 h-4 animate-spin inline mr-1" /> : <Search className="w-4 h-4 inline mr-1" />}
                  Geocode
                </button>
              </div>
              {geocodeMsg && <p className="text-xs text-indigo-600 font-semibold mt-1">{geocodeMsg}</p>}
            </div>

            {/* Map Pin Dropper Trigger */}
            <div className="map-picker-banner mt-3">
              <div>
                <span className="font-semibold text-sm block">Pin Coordinates on Map:</span>
                <span className="text-xs text-gray-500">Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}</span>
              </div>
              <button 
                type="button" 
                className="pin-picker-btn"
                onClick={onStartPinPick}
              >
                <MapPin className="w-4 h-4 mr-1 inline" />
                Pick Spot on Map
              </button>
            </div>
          </div>

          {/* STEP 3: Upload Photos */}
          <div className="form-section mt-4">
            <h4 className="section-heading">3. Upload Photos & Images</h4>

            <div 
              className={`dropzone-box ${isDragOver ? 'drag-active' : ''}`}
              onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={e => {
                e.preventDefault();
                setIsDragOver(false);
                handleFileUpload(e.dataTransfer.files);
              }}
            >
              <Upload className="w-8 h-8 text-indigo-500 mb-2" />
              <p className="dropzone-text font-medium text-sm">
                Drag & drop photos here, or <span className="text-indigo-600 underline cursor-pointer">browse files</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Supports PNG, JPG, WEBP photos</p>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                className="dropzone-file-input"
                onChange={e => handleFileUpload(e.target.files)}
              />
            </div>

            <div className="preset-photos-box mt-3">
              <span className="text-xs font-semibold text-gray-500 block mb-1.5">
                Or pick sample photos:
              </span>
              <div className="preset-buttons-flex">
                {SAMPLE_PRESET_IMAGES.map((preset, idx) => (
                  <button 
                    key={idx} 
                    type="button" 
                    className="preset-tag-btn"
                    onClick={() => handleAddPresetPhoto(preset.url)}
                  >
                    + {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {photos.length > 0 && (
              <div className="uploaded-photos-grid mt-3">
                {photos.map((pUrl, pIdx) => (
                  <div key={pIdx} className="uploaded-thumb-card">
                    <img src={pUrl} alt={`Upload ${pIdx + 1}`} />
                    <button 
                      type="button" 
                      className="remove-photo-badge"
                      onClick={() => handleRemovePhoto(pIdx)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* STEP 4: Tags */}
          <div className="form-group mt-4">
            <label className="input-label">Tags (comma separated)</label>
            <input 
              type="text" 
              placeholder="BanhMi, Chinatown, CashOnly, Under$3" 
              className="form-input"
              value={tagsInput}
              onChange={e => setTagsInput(e.target.value)}
            />
          </div>

          {/* Form Actions */}
          <div className="form-actions-row mt-6">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-deal-btn">
              <Sparkles className="w-4 h-4 mr-1.5 inline" />
              Publish Cheap Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
