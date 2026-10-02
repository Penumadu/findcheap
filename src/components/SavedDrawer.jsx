import React from 'react';
import { X, Trash2, ExternalLink, Bookmark, Sparkles } from 'lucide-react';

export default function SavedDrawer({ 
  isOpen, 
  onClose, 
  savedDeals, 
  onSelectDeal, 
  onRemoveSave 
}) {
  if (!isOpen) return null;

  const totalSavedValue = savedDeals.reduce((sum, d) => {
    return sum + (d.regularPrice > d.price ? (d.regularPrice - d.price) : 0);
  }, 0);

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-indigo-500 fill-indigo-500" />
            <h3 className="drawer-title">Saved Spots & Wishlist ({savedDeals.length})</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {totalSavedValue > 0 && (
          <div className="drawer-savings-summary">
            <Sparkles className="w-4 h-4 text-emerald-500 inline mr-1.5" />
            Total Savings Potential: <strong className="text-emerald-600">${totalSavedValue.toFixed(2)}</strong>!
          </div>
        )}

        <div className="drawer-body">
          {savedDeals.length === 0 ? (
            <div className="empty-drawer-state">
              <div className="empty-icon">🔖</div>
              <h4>No saved deals yet</h4>
              <p>Click the bookmark icon on any cheap deal to save it for quick reference later!</p>
            </div>
          ) : (
            <div className="saved-items-list">
              {savedDeals.map((deal) => (
                <div key={deal.id} className="saved-item-row" onClick={() => { onSelectDeal(deal); onClose(); }}>
                  <img src={deal.images[0] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200'} alt={deal.title} className="saved-item-img" />
                  
                  <div className="saved-item-info">
                    <h4 className="saved-item-title">{deal.title}</h4>
                    <span className="saved-item-store">📍 {deal.storeName || deal.address}</span>
                    <div className="saved-item-price-row">
                      <span className="saved-price">{deal.price === 0 ? 'FREE' : `$${deal.price.toFixed(2)}`}</span>
                      {deal.regularPrice > deal.price && (
                        <span className="saved-regular">${deal.regularPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  <button 
                    className="remove-saved-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSave(deal.id);
                    }}
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-rose-500 transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
