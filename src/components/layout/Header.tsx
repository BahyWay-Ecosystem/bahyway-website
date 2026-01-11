// Header.tsx - Navigation header
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Applications', href: '#applications' },
    { label: 'Docs', href: '/docs' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled
          ? 'rgba(0, 0, 0, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(255,255,255,0.1)'
          : 'none',
        transition: 'all 0.3s'
      }}
    >
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a
          href="/"
          style={{
            fontSize: '24px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none'
          }}
        >
          BahyWay
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center'
        }}>
          {navItems.map((item) => (

              key={item.label}
              href={item.href}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s',
                display: window.innerWidth < 768 ? 'none' : 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2196F3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }}
            >
              {item.label}
            </a>
          ))}

          <button
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: window.innerWidth < 768 ? 'none' : 'block'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth < 768 ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            padding: '20px 40px'
          }}
        >
          {navItems.map((item) => (

              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                padding: '16px 0',
                fontSize: '18px',
                fontWeight: '500',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            style={{
              width: '100%',
              marginTop: '20px',
              padding: '14px',
              background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Get Started
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
