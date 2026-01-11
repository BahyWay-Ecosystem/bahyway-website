// Layout.tsx - Page wrapper component
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  showHeader = true,
  showFooter = true
}: LayoutProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#000'
    }}>
      {showHeader && <Header />}

      <main style={{ flex: 1 }}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
