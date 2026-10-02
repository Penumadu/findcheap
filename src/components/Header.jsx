import React from 'react';
import { CITIES } from '../data/initialDeals';
import { 
  MapPin, Search, Plus, Map, LayoutGrid, Split, Bookmark, 
  Sun, Moon, Globe, User, LogOut, Navigation 
} from 'lucide-react';

export default function Header({ 
  searchQuery, 
  onSearchChange, 
  selectedCity, 
  onCityChange, 
  viewMode, 
  onViewModeChange, 
  savedCount, 
  onOpenSavedDrawer, 
  onOpenAddModal,
  onLocateUser,
  mapTheme,
  onToggleTheme,
  currentUser,
  onOpenAuthModal,
  onLogout
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand Logo */}
        <div className="header-brand" onClick={() => onViewModeChange('split')}>
          <div className="brand-icon-wrapper">
            <span className="brand-emoji">🏷️</span>
          </div>
          <div className="brand-text-col">
            <h1 className="brand-title">FindCheap</h1>
            <span className="brand-subtitle">Cheap Food & Deals Map</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="header-search-box">
          <Search className="search-icon w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search banh mi, poutine, vintage, bagels..." 
            className="header-search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="clear-search-btn"
              onClick={() => onSearchChange('')}
            >
              &times;
            </button>
          )}
        </div>

        {/* City Selector Dropdown & GPS button */}
        <div className="header-city-wrapper">
          <div className="city-select-box">
            <MapPin className="w-4 h-4 text-rose-500 mr-1" />
            <select 
              className="header-city-select"
              value={selectedCity.name}
              onChange={(e) => {
                const city = CITIES.find(c => c.name === e.target.value);
                if (city) onCityChange(city);
              }}
            >
              {CITIES.map(city => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>

          <button 
            className="locate-me-btn" 
            onClick={onLocateUser}
            title="Locate my current position"
          >
            <Navigation className="w-4 h-4" />
          </button>
        </div>

        {/* View Mode Toggle (Map, Split, Grid) */}
        <div className="header-view-toggle">
          <button 
            className={`view-btn ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => onViewModeChange('map')}
            title="Map View"
          >
            <Map className="w-4 h-4 mr-1 inline" />
            <span className="hidden md:inline">Map</span>
          </button>
          <button 
            className={`view-btn ${viewMode === 'split' ? 'active' : ''}`}
            onClick={() => onViewModeChange('split')}
            title="Split View"
          >
            <Split className="w-4 h-4 mr-1 inline" />
            <span className="hidden md:inline">Split</span>
          </button>
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewModeChange('grid')}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4 mr-1 inline" />
            <span className="hidden md:inline">Grid</span>
          </button>
        </div>

        {/* Right Actions: Theme Toggle, Saved Drawer, User Auth, Post Spot */}
        <div className="header-actions">
          {/* Theme switcher */}
          <button 
            className="icon-action-btn"
            onClick={onToggleTheme}
            title={`Switch to ${mapTheme === 'dark' ? 'Light' : mapTheme === 'light' ? 'Satellite' : 'Dark'} map theme`}
          >
            {mapTheme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : mapTheme === 'satellite' ? <Globe className="w-4 h-4 text-emerald-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>

          {/* Saved items drawer button */}
          <button 
            className="icon-action-btn relative"
            onClick={onOpenSavedDrawer}
            title="Saved Deals"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="saved-badge-counter">{savedCount}</span>
            )}
          </button>

          {/* Firebase User Auth */}
          {currentUser ? (
            <div className="user-profile-badge flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-full px-2.5 py-1 text-xs">
              <img 
                src={currentUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.uid}`} 
                alt={currentUser.displayName || 'User'} 
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-semibold text-indigo-700 dark:text-indigo-300 max-w-[80px] truncate">
                {currentUser.displayName || 'Spotter'}
              </span>
              <button 
                onClick={onLogout}
                className="text-gray-400 hover:text-rose-500 ml-1 transition-colors"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button 
              className="icon-action-btn border-indigo-200 text-indigo-600 hover:bg-indigo-50"
              onClick={onOpenAuthModal}
              title="Firebase User Sign In"
            >
              <User className="w-4 h-4" />
            </button>
          )}

          {/* Add New Deal CTA */}
          <button 
            className="post-deal-btn"
            onClick={onOpenAddModal}
          >
            <Plus className="w-4 h-4 mr-1 inline font-bold" />
            <span>Post Spot</span>
          </button>
        </div>
      </div>
    </header>
  );
}
