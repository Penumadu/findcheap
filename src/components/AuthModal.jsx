import React, { useState } from 'react';
import { X, LogIn, UserPlus, Flame, AlertCircle, Sparkles } from 'lucide-react';
import { loginWithGoogle, loginWithEmail, registerWithEmail, loginAnonymously } from '../firebase/authService';

export default function AuthModal({ isOpen, onClose, currentUser }) {
  if (!isOpen) return null;

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setErrorMsg('');
      await loginWithGoogle();
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    try {
      setLoading(true);
      setErrorMsg('');
      if (isRegistering) {
        await registerWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      setLoading(true);
      setErrorMsg('');
      await loginAnonymously();
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Failed guest login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        <div className="auth-header text-center">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="modal-title">{isRegistering ? 'Create FindCheap Account' : 'Sign in to FindCheap'}</h2>
          <p className="modal-subtitle">Sync your cheap spots, upvotes, and reviews with Firebase</p>
        </div>

        {errorMsg && (
          <div className="error-banner mt-3">
            <AlertCircle className="w-4 h-4 inline mr-1.5" />
            {errorMsg}
          </div>
        )}

        {/* Google Sign In Button */}
        <div className="auth-body mt-4">
          <button 
            type="button" 
            className="google-auth-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <svg className="w-5 h-5 mr-2 inline" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continue with Google
          </button>

          <div className="auth-divider my-4 text-xs text-gray-400 text-center uppercase tracking-wider">
            <span>or sign in with email</span>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-3">
            <div>
              <label className="input-label">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="form-input"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="input-label">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="form-input"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-auth-btn" disabled={loading}>
              {loading ? 'Processing...' : isRegistering ? 'Register Account' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer-toggle text-center mt-4">
            <button 
              type="button" 
              className="text-xs text-indigo-600 hover:underline font-semibold"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Sign In' : 'Need an account? Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
