import React from 'react';
import { CATEGORIES } from '../data/initialDeals';
import { calculateDistance } from '../utils/distance';
import { 
  ThumbsUp, ThumbsDown, Bookmark, Star, MapPin, 
  Flame, Navigation, ArrowUpRight, Sparkles 
} from 'lucide-react';

export default function ItemCard({ 
  deal, 
  onSelectDeal, 
  isSaved, 
  onToggleSave, 
  onUpvote, 
  onDownvote,
  userVote,
  currentCenter
}) {
  const categoryObj = CATEGORIES.find(c => c.id === deal.category) || CATEGORIES[0];
  const discountPercent = deal.regularPrice > deal.price 
    ? Math.round(((deal.regularPrice - deal.price) / deal.regularPrice) * 100) 
    : 0;

  const avgRating = deal.reviews && deal.reviews.length > 0 
    ? (deal.reviews.reduce((acc, r) => acc + r.rating, 0) / deal.reviews.length).toFixed(1) 
    : null;

  const totalScore = (deal.upvotes || 0) - (deal.downvotes || 0);

  // Calculate distance
  const distanceText = currentCenter 
    ? calculateDistance(currentCenter.lat, currentCenter.lng, deal.lat, deal.lng) 
    : null;

  // External directions URL (Apple Maps on Apple devices / Google Maps)
  const directionsUrl = `https://maps.apple.com/?q=${encodeURIComponent(deal.storeName || deal.title)}&ll=${deal.lat},${deal.lng}`;

  return (
    <article className="item-card group" onClick={() => onSelectDeal(deal)}>
      {/* 1. Visual Photo Scrim */}
      <div className="card-image-wrapper">
        <img 
          src={deal.images[0] || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'} 
          alt={deal.title}
          className="card-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800';
          }}
        />
        <div className="card-image-gradient" />

        {/* Top Badges Row */}
        <div className="card-top-badges">
          {/* Category Pill */}
          <span className="card-cat-badge" style={{ '--badge-tint': categoryObj.color }}>
            <span className="cat-badge-emoji">{categoryObj.icon}</span>
            <span>{categoryObj.label}</span>
          </span>

          {/* Savings / Discount Badge */}
          {discountPercent > 0 && (
            <span className="card-discount-chip">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Top Right Save Bookmark */}
        <button 
          type="button"
          className={`card-bookmark-btn ${isSaved ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(deal.id);
          }}
          title={isSaved ? "Remove from saved wishlist" : "Save spot"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom Hero Price Plaque */}
        <div className="card-price-plaque">
          <div className="price-stack">
            <span className="price-lead-label">Deal Price</span>
            <div className="price-row">
              <span className="price-hero">
                {deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`}
              </span>
              {deal.regularPrice > deal.price && (
                <span className="price-strikethrough">${deal.regularPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          {/* Distance Indicator */}
          {distanceText && (
            <div className="card-distance-tag">
              <Navigation className="w-3 h-3 inline mr-1 text-rose-500" />
              <span>{distanceText}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Editorial Card Body */}
      <div className="card-content">
        {/* Deal Title */}
        <h3 className="card-title">{deal.title}</h3>

        {/* Store & City Address */}
        <div className="card-location-row">
          <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mr-1.5" />
          <span className="font-semibold text-xs text-stone-800 dark:text-stone-200 truncate">
            {deal.storeName}
          </span>
          <span className="card-dot-sep">•</span>
          <span className="text-xs text-stone-500 dark:text-stone-400 truncate">
            {deal.city}
          </span>
        </div>

        {/* Descriptive Note */}
        <p className="card-description">{deal.description}</p>

        {/* Community Tags */}
        {deal.tags && deal.tags.length > 0 && (
          <div className="card-tags-list">
            {deal.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="card-tag-pill">#{tag}</span>
            ))}
          </div>
        )}

        {/* 3. Card Meta & Community Action Bar */}
        <div className="card-footer-bar">
          {/* Reviews & Star Rating */}
          <div className="card-rating-col">
            {avgRating ? (
              <div className="flex items-center gap-1.5">
                <div className="star-badge">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 mr-1" />
                  <span className="font-bold text-xs">{avgRating}</span>
                </div>
                <span className="text-[11px] text-stone-400">
                  ({deal.reviews.length} {deal.reviews.length === 1 ? 'review' : 'reviews'})
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-stone-400 font-medium">New Spot</span>
            )}
          </div>

          {/* Right Action: Upvote Pill & Quick Nav */}
          <div className="card-actions-group" onClick={(e) => e.stopPropagation()}>
            {/* Directions Link */}
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-nav-link"
              title="Open directions in Apple Maps / Maps"
            >
              <Navigation className="w-3 h-3 mr-1" />
              <span>Map</span>
            </a>

            {/* Voting Pill */}
            <div className="vote-capsule">
              <button 
                type="button"
                className={`vote-btn up ${userVote === 'up' ? 'active' : ''}`}
                onClick={() => onUpvote(deal.id)}
                title="Upvote cheap deal"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <span className="vote-score">{totalScore}</span>
              <button 
                type="button"
                className={`vote-btn down ${userVote === 'down' ? 'active' : ''}`}
                onClick={() => onDownvote(deal.id)}
                title="Downvote"
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
