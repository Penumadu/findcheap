import React from 'react';
import { CATEGORIES } from '../data/initialDeals';
import { SlidersHorizontal, ArrowUpDown, DollarSign } from 'lucide-react';

export default function CategoryBar({ 
  selectedCategory, 
  onCategoryChange, 
  maxPrice, 
  onMaxPriceChange, 
  sortBy, 
  onSortByChange,
  totalResultsCount 
}) {
  return (
    <div className="category-bar-wrapper">
      <div className="category-bar-container">
        {/* Category Pills List */}
        <div className="category-pills-scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              style={{
                '--cat-accent': cat.color
              }}
              onClick={() => onCategoryChange(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Controls: Max Price & Sort By */}
        <div className="filter-controls-group">
          {/* Price Quick Filters */}
          <div className="price-filter-box">
            <span className="filter-label">Max Price:</span>
            <div className="price-buttons">
              {[
                { label: 'All', value: 100 },
                { label: 'Free', value: 0 },
                { label: '< $2', value: 2 },
                { label: '< $5', value: 5 },
                { label: '< $10', value: 10 }
              ].map((p) => (
                <button
                  key={p.value}
                  className={`price-btn ${maxPrice === p.value ? 'active' : ''}`}
                  onClick={() => onMaxPriceChange(p.value)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="sort-dropdown-box">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 mr-1" />
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
            >
              <option value="upvotes">🔥 Most Popular</option>
              <option value="cheapest">💰 Cheapest First</option>
              <option value="savings">🎁 Highest Savings %</option>
              <option value="rating">⭐ Highest Rated</option>
              <option value="recent">⏱️ Most Recent</option>
            </select>
          </div>

          {/* Counter badge */}
          <div className="results-counter-badge">
            {totalResultsCount} spots found
          </div>
        </div>
      </div>
    </div>
  );
}
