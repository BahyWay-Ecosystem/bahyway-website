// Header.tsx - Navigation Bar
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Applications', href: '#applications' },
    { label: 'Docs', href: '/docs' }
  ];

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '15px 20px' : '25px 20px',
      background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontSize: '24px',
          fontWeight: '800',
          color: 'white',
          textDecoration: 'none',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #fff 0%, #2196F3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          BahyWay
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div className="desktop-links" style={{ display: 'flex', gap: '30px' }}>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2196F3'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" style={{
            padding: '10px 22px',
            background: '#2196F3',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s'
          }}>
            Get Started
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'none' // Hide by default, handle with media queries in CSS
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
