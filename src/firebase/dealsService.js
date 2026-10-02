import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  increment,
  arrayUnion,
  getDocs
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './config';

const DEALS_COLLECTION = 'deals';

// Real-time listener for Firestore deals
export const subscribeToFirestoreDeals = (callback) => {
  if (!isFirebaseConfigured() || !db) {
    return () => {};
  }

  const dealsQuery = query(collection(db, DEALS_COLLECTION), orderBy('createdAt', 'desc'));
  
  return onSnapshot(
    dealsQuery,
    (snapshot) => {
      const dealsList = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      callback(dealsList);
    },
    (err) => {
      console.error('Firestore snapshot listener error:', err);
    }
  );
};

// Add a new deal spot to Firestore
export const addDealToFirestore = async (newDealObj) => {
  if (!isFirebaseConfigured() || !db) return null;
  const docRef = await addDoc(collection(db, DEALS_COLLECTION), {
    ...newDealObj,
    createdAt: new Date().toISOString()
  });
  return docRef.id;
};

// Update deal votes in Firestore
export const voteDealInFirestore = async (dealId, deltaUp, deltaDown) => {
  if (!isFirebaseConfigured() || !db) return;
  const dealRef = doc(db, DEALS_COLLECTION, dealId);
  await updateDoc(dealRef, {
    upvotes: increment(deltaUp),
    downvotes: increment(deltaDown)
  });
};

// Add review to a deal in Firestore
export const addReviewToFirestore = async (dealId, newReviewObj) => {
  if (!isFirebaseConfigured() || !db) return;
  const dealRef = doc(db, DEALS_COLLECTION, dealId);
  await updateDoc(dealRef, {
    reviews: arrayUnion(newReviewObj)
  });
};
