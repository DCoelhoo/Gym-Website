import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

const AuthContext = createContext();

/**
 * Provides authenticated user state throughout the app.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session on mount
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) console.error('Error getting session:', error);
      setUser(session?.user || null);
      setLoading(false);
    };

    getSession();

    // Listen for login/logout/auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Cleanup listener on unmount
    return () => listener.subscription.unsubscribe();
  }, []);

  const value = { user, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to access auth context
 */
export const useAuth = () => useContext(AuthContext);
