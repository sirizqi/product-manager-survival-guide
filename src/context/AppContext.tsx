import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations } from '../data/translations';
import type { Language, Translations } from '../data/translations';
import type { DonationItem } from '../types';

// ==========================================
// Types
// ==========================================
type Theme = 'light' | 'dark';

interface AppContextType {
  // Theme
  theme: Theme;
  toggleTheme: () => void;

  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;

  // Bookmarks
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;

  // Reading Progress
  completedDocs: string[];
  toggleCompleted: (slug: string) => void;
  isCompleted: (slug: string) => boolean;
  totalCompleted: number;

  // Donation & Webhook Overlay
  isDonationModalOpen: boolean;
  openDonationModal: () => void;
  closeDonationModal: () => void;
  activeDonation: DonationItem | null;
  dismissDonation: () => void;
  simulateDonation: (custom?: Partial<DonationItem>) => Promise<void>;
}

const STORAGE_KEYS = {
  THEME: 'pm_playbooks_theme',
  LANGUAGE: 'pm_playbooks_language',
  BOOKMARKS: 'pm_playbooks_bookmarks',
  COMPLETED: 'pm_playbooks_completed',
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Theme State
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // 2. Language State
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (saved === 'en' || saved === 'id') return saved;
      return 'id'; // default to Indonesian as requested
    } catch {
      return 'id';
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'id' : 'en';
      try {
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, next);
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const t = useMemo(() => translations[language], [language]);

  // 3. Bookmarks State
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  // 4. Reading Progress State
  const [completedDocs, setCompletedDocs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleCompleted = useCallback((slug: string) => {
    setCompletedDocs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (slug: string) => completedDocs.includes(slug),
    [completedDocs]
  );

  // 5. Donation Modal & Webhook Overlay State
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [activeDonation, setActiveDonation] = useState<DonationItem | null>(null);

  const openDonationModal = useCallback(() => setIsDonationModalOpen(true), []);
  const closeDonationModal = useCallback(() => setIsDonationModalOpen(false), []);
  const dismissDonation = useCallback(() => setActiveDonation(null), []);

  const simulateDonation = useCallback(async (custom?: Partial<DonationItem>) => {
    try {
      const res = await fetch('/api/donations/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(custom || {}),
      });
      if (!res.ok) {
        // Fallback local simulation if server endpoint is offline
        setActiveDonation({
          id: `tip_local_${Date.now()}`,
          amount: 25000,
          currency: 'IDR',
          message: 'Semangat terus nulis playbook PM-nya bang Rizqi!',
          sender: 'Teman PM',
          timestamp: new Date().toISOString(),
          ...custom,
        });
      }
    } catch {
      setActiveDonation({
        id: `tip_local_${Date.now()}`,
        amount: 25000,
        currency: 'IDR',
        message: 'Semangat terus nulis playbook PM-nya bang Rizqi!',
        sender: 'Teman PM',
        timestamp: new Date().toISOString(),
        ...custom,
      });
    }
  }, []);

  // 6. Connect to SSE Stream for Live Webhook Tip Notifications
  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;

    const connectSSE = () => {
      try {
        eventSource = new EventSource('/api/donations/stream');

        eventSource.addEventListener('donation', (e) => {
          try {
            const data: DonationItem = JSON.parse(e.data);
            console.log('[SSE] Live Donation received:', data);
            setActiveDonation(data);
          } catch (err) {
            console.error('[SSE] Failed to parse donation event data:', err);
          }
        });

        eventSource.onerror = () => {
          if (eventSource) {
            eventSource.close();
            eventSource = null;
          }
          // Reconnect after 8 seconds
          reconnectTimeout = setTimeout(connectSSE, 8000);
        };
      } catch {
        // SSE not supported or server offline, retry later
        reconnectTimeout = setTimeout(connectSSE, 10000);
      }
    };

    connectSSE();

    return () => {
      if (eventSource) eventSource.close();
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
    };
  }, []);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.COMPLETED && e.newValue) {
        try {
          setCompletedDocs(JSON.parse(e.newValue));
        } catch {}
      } else if (e.key === STORAGE_KEYS.BOOKMARKS && e.newValue) {
        try {
          setBookmarks(JSON.parse(e.newValue));
        } catch {}
      } else if (e.key === STORAGE_KEYS.THEME && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
      } else if (e.key === STORAGE_KEYS.LANGUAGE && (e.newValue === 'en' || e.newValue === 'id')) {
        setLanguageState(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      language,
      setLanguage,
      toggleLanguage,
      t,
      bookmarks,
      toggleBookmark,
      isBookmarked,
      completedDocs,
      toggleCompleted,
      isCompleted,
      totalCompleted: completedDocs.length,
      isDonationModalOpen,
      openDonationModal,
      closeDonationModal,
      activeDonation,
      dismissDonation,
      simulateDonation,
    }),
    [
      theme,
      toggleTheme,
      language,
      setLanguage,
      toggleLanguage,
      t,
      bookmarks,
      toggleBookmark,
      isBookmarked,
      completedDocs,
      toggleCompleted,
      isCompleted,
      isDonationModalOpen,
      openDonationModal,
      closeDonationModal,
      activeDonation,
      dismissDonation,
      simulateDonation,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export function useLanguage() {
  const { language, setLanguage, toggleLanguage, t } = useApp();
  return { language, setLanguage, toggleLanguage, t };
}

export function useDonation() {
  const {
    isDonationModalOpen,
    openDonationModal,
    closeDonationModal,
    activeDonation,
    dismissDonation,
    simulateDonation,
  } = useApp();

  return {
    isDonationModalOpen,
    openDonationModal,
    closeDonationModal,
    activeDonation,
    dismissDonation,
    simulateDonation,
  };
}
