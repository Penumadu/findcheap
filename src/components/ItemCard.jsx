import React from 'react';
import { CATEGORIES } from '../data/initialDeals';
import { ThumbsUp, ThumbsDown, Bookmark, Star, MapPin, Tag, Flame, ArrowUpRight } from 'lucide-react';

export default function ItemCard({ 
  deal, 
  onSelectDeal, 
  isSaved, 
  onToggleSave, 
  onUpvote, 
  onDownvote,
  userVote 
}) {
  const categoryObj = CATEGORIES.find(c => c.id === deal.category) || CATEGORIES[0];
  const discountPercent = deal.regularPrice > deal.price 
    ? Math.round(((deal.regularPrice - deal.price) / deal.regularPrice) * 100) 
    : 0;

  const avgRating = deal.reviews && deal.reviews.length > 0 
    ? (deal.reviews.reduce((acc, r) => acc + r.rating, 0) / deal.reviews.length).toFixed(1) 
    : null;

  const totalScore = deal.upvotes - deal.downvotes;

  return (
    <div className="item-card group" onClick={() => onSelectDeal(deal)}>
      {/* Card Image Banner */}
      <div className="card-image-wrapper">
        <img 
          src={deal.images[0] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600'} 
          alt={deal.title}
          className="card-img"
          loading="lazy"
        />
        <div className="card-image-overlay"></div>

        {/* Category Badge */}
        <div className="card-category-badge" style={{ backgroundColor: categoryObj.color }}>
          <span>{categoryObj.icon}</span>
          <span>{categoryObj.label}</span>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="card-discount-badge">
            <Flame className="w-3.5 h-3.5 mr-0.5 fill-current" />
            {discountPercent}% OFF
          </div>
        )}

        {/* Save/Bookmark Button */}
        <button 
          className={`card-save-btn ${isSaved ? 'saved' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(deal.id);
          }}
          title={isSaved ? "Remove from saved" : "Save deal"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Price Tag Overlay */}
        <div className="card-price-tag">
          <span className="price-current">
            {deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`}
          </span>
          {deal.regularPrice > deal.price && (
            <span className="price-regular">${deal.regularPrice.toFixed(2)}</span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="card-title">{deal.title}</h3>
        </div>

        <p className="card-store">
          <MapPin className="w-3.5 h-3.5 text-gray-400 inline shrink-0 mr-1" />
          <span className="truncate">{deal.storeName || deal.address}</span>
        </p>

        <p className="card-description">{deal.description}</p>

        {/* Tags row */}
        {deal.tags && deal.tags.length > 0 && (
          <div className="card-tags-row">
            {deal.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="card-tag">#{tag}</span>
            ))}
          </div>
        )}

        {/* Footer info: Rating, Upvotes, Poster */}
        <div className="card-footer">
          <div className="rating-info">
            {avgRating ? (
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {avgRating} <span className="text-gray-400 text-xs font-normal">({deal.reviews.length})</span>
              </span>
            ) : (
              <span className="text-gray-400 text-xs">No reviews yet</span>
            )}
          </div>

          <div className="card-actions-right" onClick={(e) => e.stopPropagation()}>
            <div className="vote-pill">
              <button 
                className={`vote-btn ${userVote === 'up' ? 'active-up' : ''}`}
                onClick={() => onUpvote(deal.id)}
                title="Upvote deal"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <span className="vote-count">{totalScore}</span>
              <button 
                className={`vote-btn ${userVote === 'down' ? 'active-down' : ''}`}
                onClick={() => onDownvote(deal.id)}
                title="Downvote deal"
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
