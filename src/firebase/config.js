import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Read Firebase secret credentials from environment variables (.env file)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if developer has populated secrets in .env
export const isFirebaseConfigured = () => {
  return (
    !!firebaseConfig.apiKey &&
    !!firebaseConfig.projectId &&
    firebaseConfig.apiKey !== 'AIzaSyYourApiKeyHere123456789'
  );
};

let app = null;
let db = null;
let auth = null;
let storage = null;
let googleProvider = null;

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
    googleProvider = new GoogleAuthProvider();
    console.log('🔥 Firebase successfully initialized with Firestore & Auth');
  } catch (err) {
    console.warn('Firebase initialization warning:', err);
  }
} else {
  console.info('ℹ️ Firebase credentials not provided in .env yet. Running in local state mode.');
}

export { app, db, auth, storage, googleProvider };
