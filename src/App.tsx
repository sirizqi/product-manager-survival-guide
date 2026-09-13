import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useDonation } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { CmdKSearchModal } from './components/CmdKSearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { DonationOverlay } from './components/DonationOverlay';
import { DonationModal } from './components/DonationModal';
import { FloatingDonateButton } from './components/FloatingDonateButton';
import { LandingPage } from './pages/LandingPage';
import { DocsLayout } from './pages/DocsLayout';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const location = useLocation();

  const {
    isDonationModalOpen,
    openDonationModal,
    closeDonationModal,
    activeDonation,
    dismissDonation,
  } = useDonation();

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isDocs = location.pathname.startsWith('/docs');

  return (
    <div className="min-h-screen bg-neo-bg dark:bg-neo-darkBg flex flex-col selection:bg-neo-yellow selection:text-black">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Main Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Router View */}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<LandingPage onOpenSearch={() => setIsSearchOpen(true)} />}
          />
          <Route
            path="/docs"
            element={<DocsLayout onOpenSearch={() => setIsSearchOpen(true)} />}
          />
          <Route
            path="/docs/:docSlug"
            element={<DocsLayout onOpenSearch={() => setIsSearchOpen(true)} />}
          />
          <Route
            path="*"
            element={<NotFoundPage onOpenSearch={() => setIsSearchOpen(true)} />}
          />
        </Routes>
      </div>

      {/* Global Footer (shown on landing and other pages) */}
      {!isDocs && <Footer />}

      {/* Cmd + K Spotlight Search Modal */}
      <CmdKSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Bookmarks Slide-over Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
      />

      {/* Floating Quick Donate Button */}
      <FloatingDonateButton onClick={openDonationModal} />

      {/* Real-time Webhook Donation Alert Overlay */}
      <DonationOverlay
        donation={activeDonation}
        onDismiss={dismissDonation}
      />

      {/* Donation Modal with Live QR Code Widget */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={closeDonationModal}
      />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
