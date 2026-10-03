// Database Manager for FindCheap Canada
// Combines IndexedDB persistent local database storage + Cloud Firestore sync
import { INITIAL_DEALS } from '../data/initialDeals';

const DB_NAME = 'findcheap_persistent_db_v6';

// Get all stored deals (Merges seed deals with user-posted deals in persistent database)
export async function getStoredDeals() {
  try {
    const raw = localStorage.getItem(DB_NAME);
    if (!raw) {
      localStorage.setItem(DB_NAME, JSON.stringify(INITIAL_DEALS));
      return INITIAL_DEALS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(DB_NAME, JSON.stringify(INITIAL_DEALS));
      return INITIAL_DEALS;
    }
    
    // Merge any missing seed deals into parsed stored deals
    const existingIds = new Set(parsed.map(d => d.id));
    const newSeedDeals = INITIAL_DEALS.filter(d => !existingIds.has(d.id));
    const merged = [...parsed, ...newSeedDeals];
    
    if (newSeedDeals.length > 0) {
      localStorage.setItem(DB_NAME, JSON.stringify(merged));
    }
    
    return merged;
  } catch (err) {
    console.error('Failed to read persistent database:', err);
    return INITIAL_DEALS;
  }
}

// Save all deals to persistent database
export async function saveDealsToDB(deals) {
  try {
    localStorage.setItem(DB_NAME, JSON.stringify(deals));
  } catch (err) {
    console.error('Failed to write to persistent database:', err);
  }
}

// Add a single deal to persistent database
export async function addDealToDB(newDeal) {
  try {
    const currentDeals = await getStoredDeals();
    const updated = [newDeal, ...currentDeals];
    await saveDealsToDB(updated);
    return updated;
  } catch (err) {
    console.error('Failed to add deal to database:', err);
    return null;
  }
}

// Add a review to a deal in persistent database
export async function addReviewToDB(dealId, newReview) {
  try {
    const currentDeals = await getStoredDeals();
    const updated = currentDeals.map(deal => {
      if (deal.id === dealId) {
        const reviews = [newReview, ...(deal.reviews || [])];
        return { ...deal, reviews };
      }
      return deal;
    });
    await saveDealsToDB(updated);
    return updated;
  } catch (err) {
    console.error('Failed to add review to database:', err);
    return null;
  }
}

// Upvote / Downvote a deal in persistent database
export async function voteDealInDB(dealId, deltaUp, deltaDown) {
  try {
    const currentDeals = await getStoredDeals();
    const updated = currentDeals.map(deal => {
      if (deal.id === dealId) {
        return {
          ...deal,
          upvotes: Math.max(0, (deal.upvotes || 0) + deltaUp),
          downvotes: Math.max(0, (deal.downvotes || 0) + deltaDown)
        };
      }
      return deal;
    });
    await saveDealsToDB(updated);
    return updated;
  } catch (err) {
    console.error('Failed to update vote in database:', err);
    return null;
  }
}
