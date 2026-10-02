import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from './config';

// Subscribe to auth state changes
export const subscribeToAuth = (callback) => {
  if (!isFirebaseConfigured() || !auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// Sign in with Google
export const loginWithGoogle = async () => {
  if (!isFirebaseConfigured() || !auth) {
    throw new Error('Firebase is not configured in .env yet.');
  }
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Sign in with Email & Password
export const loginWithEmail = async (email, password) => {
  if (!isFirebaseConfigured() || !auth) {
    throw new Error('Firebase is not configured in .env yet.');
  }
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

// Register with Email & Password
export const registerWithEmail = async (email, password) => {
  if (!isFirebaseConfigured() || !auth) {
    throw new Error('Firebase is not configured in .env yet.');
  }
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
};

// Sign in Anonymously
export const loginAnonymously = async () => {
  if (!isFirebaseConfigured() || !auth) {
    throw new Error('Firebase is not configured in .env yet.');
  }
  const result = await signInAnonymously(auth);
  return result.user;
};

// Logout
export const logoutUser = async () => {
  if (!isFirebaseConfigured() || !auth) return;
  await signOut(auth);
};
