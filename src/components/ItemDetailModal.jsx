import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CATEGORIES } from '../data/initialDeals';
import { 
  X, Star, ThumbsUp, ThumbsDown, Bookmark, MapPin, Share2, 
  ExternalLink, Calendar, CheckCircle2, Flame, Camera, Upload, 
  Sparkles, MessageSquare, AlertCircle, Heart 
} from 'lucide-react';

export default function ItemDetailModal({ 
  deal, 
  onClose, 
  isSaved, 
  onToggleSave, 
  onUpvote, 
  onDownvote, 
  userVote,
  onAddReview,
  onVoteHelpful
}) {
  if (!deal) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [reviewFilter, setReviewFilter] = useState('all'); // all, photos, 5star
  
  // New Review Form State
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewPhotos, setReviewPhotos] = useState([]);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState('');

  const categoryObj = CATEGORIES.find(c => c.id === deal.category) || CATEGORIES[0];
  const discountPercent = deal.regularPrice > deal.price 
    ? Math.round(((deal.regularPrice - deal.price) / deal.regularPrice) * 100) 
    : 0;

  const totalSavings = deal.regularPrice > deal.price ? (deal.regularPrice - deal.price).toFixed(2) : 0;
  const reviews = deal.reviews || [];

  // Calculate rating stats
  const avgRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => {
    if (ratingCounts[r.rating] !== undefined) ratingCounts[r.rating]++;
  });

  // Filter reviews
  const filteredReviews = reviews.filter(r => {
    if (reviewFilter === 'photos') return r.photos && r.photos.length > 0;
    if (reviewFilter === '5star') return r.rating === 5;
    return true;
  });

  // Handle Photo Upload for Review
  const handleReviewPhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewPhotos(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle Submitting Review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;

    setIsSubmittingReview(true);

    const newRevObj = {
      id: `rev-${Date.now()}`,
      userName: reviewerName.trim() || 'Anonymous Finder',
      userAvatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`,
      rating: newRating,
      date: 'Just now',
      title: reviewTitle.trim() || 'Great find!',
      comment: reviewComment.trim(),
      helpfulCount: 0,
      photos: reviewPhotos,
      verifiedVisit: true
    };

    setTimeout(() => {
      onAddReview(deal.id, newRevObj);
      setIsSubmittingReview(false);
      setReviewSuccessMsg('Review posted successfully!');
      setReviewTitle('');
      setReviewComment('');
      setReviewPhotos([]);
      setReviewerName('');

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      setTimeout(() => setReviewSuccessMsg(''), 4000);
    }, 400);
  };

  // Copy share link
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Deal link copied to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container deal-detail-modal" onClick={e => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        <div className="modal-body-grid">
          {/* LEFT COLUMN: Gallery & Quick Details */}
          <div className="modal-left-col">
            {/* Main Active Image View */}
            <div className="main-gallery-image-wrapper">
              <img 
                src={deal.images[activeImageIndex] || deal.images[0] || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'} 
                alt={deal.title}
                className="main-gallery-img"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800';
                }}
              />
              <span className="gallery-cat-badge" style={{ backgroundColor: categoryObj.color }}>
                {categoryObj.icon} {categoryObj.label}
              </span>
              {discountPercent > 0 && (
                <span className="gallery-discount-badge">
                  🔥 {discountPercent}% OFF (Save ${totalSavings})
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            {deal.images && deal.images.length > 1 && (
              <div className="gallery-thumbnails-row">
                {deal.images.map((imgUrl, idx) => (
                  <button 
                    key={idx} 
                    className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Thumbnail ${idx + 1}`} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Location & Directions Card */}
            <div className="location-info-card">
              <div className="location-card-header">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="store-name">{deal.storeName || 'Spot Location'}</h4>
                  <p className="store-address">{deal.address}</p>
                </div>
              </div>
              <div className="modal-directions-btn-group">
                <a 
                  href={`https://maps.apple.com/?q=${encodeURIComponent((deal.storeName ? deal.storeName + ' ' : '') + deal.address)}&ll=${deal.lat},${deal.lng}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-direct-btn apple"
                >
                  🍏 Open Apple Maps
                </a>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((deal.storeName ? deal.storeName + ' ' : '') + deal.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-direct-btn google"
                >
                  🗺️ Google Maps
                </a>
              </div>
            </div>

            {/* Posted By Card */}
            <div className="posted-by-card">
              <img 
                src={deal.postedBy?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120'} 
                alt={deal.postedBy?.name || 'User'} 
                className="poster-avatar"
              />
              <div>
                <p className="poster-name">{deal.postedBy?.name || 'CheapSpot Hunter'}</p>
                <span className="poster-badge">{deal.postedBy?.badge || 'Deal Scout 🔍'}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Deal Info, Upvotes & Reviews */}
          <div className="modal-right-col">
            {/* Title & Price Header */}
            <div className="deal-header-box">
              <h2 className="modal-deal-title">{deal.title}</h2>

              <div className="price-box-row">
                <div className="main-price-display">
                  <span className="price-amount">
                    {deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`}
                  </span>
                  {deal.regularPrice > deal.price && (
                    <span className="regular-price-crossed">${deal.regularPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="modal-actions-bar">
                  <div className="modal-vote-pill">
                    <button 
                      className={`vote-btn ${userVote === 'up' ? 'active-up' : ''}`} 
                      onClick={() => onUpvote(deal.id)}
                    >
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <span className="vote-num">{deal.upvotes - deal.downvotes}</span>
                    <button 
                      className={`vote-btn ${userVote === 'down' ? 'active-down' : ''}`}
                      onClick={() => onDownvote(deal.id)}
                    >
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    className={`modal-save-btn ${isSaved ? 'saved' : ''}`}
                    onClick={() => onToggleSave(deal.id)}
                  >
                    <Bookmark className="w-4 h-4 mr-1 inline" />
                    {isSaved ? 'Saved' : 'Save'}
                  </button>

                  <button className="modal-share-btn" onClick={handleShare}>
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="deal-desc-section">
              <h4 className="section-label">Item Description</h4>
              <p className="deal-desc-text">{deal.description}</p>

              {deal.tags && deal.tags.length > 0 && (
                <div className="modal-tags-list">
                  {deal.tags.map((t, idx) => (
                    <span key={idx} className="modal-tag">#{t}</span>
                  ))}
                </div>
              )}
            </div>

            {/* REVIEWS & RATINGS SECTION */}
            <div className="reviews-master-section">
              <div className="reviews-section-header">
                <h3 className="section-title">
                  <MessageSquare className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Item Reviews ({reviews.length})</span>
                </h3>
              </div>

              {/* Rating Overview Summary Box */}
              <div className="rating-overview-box">
                <div className="overall-score-col">
                  <div className="big-rating-number">{avgRating}</div>
                  <div className="stars-row flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 shrink-0" 
                        fill={star <= Math.round(avgRating) ? '#f59e0b' : '#e5e7eb'}
                        color={star <= Math.round(avgRating) ? '#f59e0b' : '#d1d5db'}
                      />
                    ))}
                  </div>
                  <span className="total-reviews-sub">Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</span>
                </div>

                <div className="rating-bars-col">
                  {[5, 4, 3, 2, 1].map(num => {
                    const count = ratingCounts[num] || 0;
                    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                    return (
                      <div key={num} className="rating-bar-row">
                        <span className="bar-label">{num}★</span>
                        <div className="bar-track">
                          <div className="bar-fill" style={{ width: `${pct}%` }}></div>
                        </div>
                        <span className="bar-count">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add Review Form */}
              <div className="add-review-card">
                <h4 className="add-review-heading">
                  <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>Share your experience with this spot</span>
                </h4>

                {reviewSuccessMsg && (
                  <div className="success-banner">
                    <CheckCircle2 className="w-4 h-4 inline mr-1.5" />
                    {reviewSuccessMsg}
                  </div>
                )}

                <form onSubmit={handleSubmitReview} className="review-form">
                  <div className="star-rating-selector">
                    <span className="star-select-label">Your Rating:</span>
                    <div className="interactive-stars flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          className="star-btn"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setNewRating(star)}
                        >
                          <Star 
                            className={`w-6 h-6 transition-transform ${
                              star <= (hoverRating || newRating) ? 'scale-110' : ''
                            }`} 
                            fill={star <= (hoverRating || newRating) ? '#f59e0b' : '#e5e7eb'}
                            color={star <= (hoverRating || newRating) ? '#f59e0b' : '#d1d5db'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-row gap-3 grid grid-cols-1 sm:grid-cols-2">
                    <input 
                      type="text" 
                      placeholder="Your Name (e.g. FoodieSam)" 
                      className="form-input"
                      value={reviewerName}
                      onChange={e => setReviewerName(e.target.value)}
                    />
                    <input 
                      type="text" 
                      placeholder="Headline / Review Title" 
                      className="form-input"
                      value={reviewTitle}
                      onChange={e => setReviewTitle(e.target.value)}
                    />
                  </div>

                  <textarea 
                    placeholder="Describe the quality, portion size, pricing, or tips for others..." 
                    className="form-textarea"
                    rows="3"
                    required
                    value={reviewComment}
                    onChange={e => setReviewComment(e.target.value)}
                  ></textarea>

                  {/* Photo Upload for Review */}
                  <div className="review-photo-uploader">
                    <label className="upload-photo-btn">
                      <Camera className="w-4 h-4 inline mr-1.5" />
                      Add Review Photos
                      <input 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        onChange={handleReviewPhotoUpload}
                        style={{ display: 'none' }}
                      />
                    </label>

                    {reviewPhotos.length > 0 && (
                      <div className="review-photos-preview">
                        {reviewPhotos.map((photo, idx) => (
                          <div key={idx} className="preview-thumb">
                            <img src={photo} alt={`Upload ${idx + 1}`} />
                            <button 
                              type="button" 
                              className="remove-thumb-btn"
                              onClick={() => setReviewPhotos(prev => prev.filter((_, i) => i !== idx))}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-review-btn"
                    disabled={isSubmittingReview}
                  >
                    {isSubmittingReview ? 'Submitting...' : 'Post Review'}
                  </button>
                </form>
              </div>

              {/* Reviews List Filter */}
              <div className="reviews-filter-pills">
                <button 
                  className={`filter-pill ${reviewFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('all')}
                >
                  All reviews ({reviews.length})
                </button>
                <button 
                  className={`filter-pill ${reviewFilter === 'photos' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('photos')}
                >
                  With photos
                </button>
                <button 
                  className={`filter-pill ${reviewFilter === '5star' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('5star')}
                >
                  5★ ratings only
                </button>
              </div>

              {/* Reviews List */}
              <div className="reviews-list">
                {filteredReviews.length === 0 ? (
                  <p className="no-reviews-text">No reviews found matching filter. Be the first to share your experience!</p>
                ) : (
                  filteredReviews.map((rev) => (
                    <div key={rev.id} className="review-item-card">
                      <div className="review-card-header">
                        <div className="reviewer-info">
                          <img 
                            src={rev.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'} 
                            alt={rev.userName} 
                            className="reviewer-avatar"
                          />
                          <div>
                            <div className="reviewer-name-row">
                              <span className="reviewer-name">{rev.userName}</span>
                              {rev.verifiedVisit && (
                                <span className="verified-badge">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline mr-1" /> Verified Spotter
                                </span>
                              )}
                            </div>
                            <div className="review-meta">
                              <div className="stars-mini flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(s => (
                                  <Star 
                                    key={s} 
                                    className="w-4 h-4 shrink-0" 
                                    fill={s <= rev.rating ? '#f59e0b' : '#e5e7eb'}
                                    color={s <= rev.rating ? '#f59e0b' : '#d1d5db'}
                                  />
                                ))}
                              </div>
                              <span className="review-date">{rev.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {rev.title && <h5 className="review-item-title">{rev.title}</h5>}
                      <p className="review-item-comment">{rev.comment}</p>

                      {/* Review Photos */}
                      {rev.photos && rev.photos.length > 0 && (
                        <div className="review-attached-photos">
                          {rev.photos.map((pUrl, pIdx) => (
                            <img key={pIdx} src={pUrl} alt="User review attachment" className="review-attach-img" />
                          ))}
                        </div>
                      )}

                      <div className="review-footer-action">
                        <button 
                          className="helpful-btn"
                          onClick={() => onVoteHelpful(deal.id, rev.id)}
                        >
                          <ThumbsUp className="w-4 h-4 mr-1.5 inline" />
                          Helpful ({rev.helpfulCount || 0})
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
