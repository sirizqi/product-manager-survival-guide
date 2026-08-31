import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { DocPage } from './DocPage';

interface DocsLayoutProps {
  onOpenSearch: () => void;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ onOpenSearch }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neo-bg dark:bg-neo-darkBg flex">
      {/* Docusaurus-like Left Navigation Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenSearch={onOpenSearch}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-80 min-w-0 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DocPage onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </main>
    </div>
  );
};
