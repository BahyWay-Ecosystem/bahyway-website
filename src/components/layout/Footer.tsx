// Footer.tsx - Website footer
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Applications', href: '#applications' },
      { label: 'Pricing', href: '#pricing' }
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'GitHub', href: 'https://github.com/bahyway' },
      { label: 'Blog', href: '/blog' }
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Privacy', href: '/privacy' }
    ],
    applications: [
      { label: 'NajafWay', href: '/najafway' },
      { label: 'WPDWay', href: '/wpdway' },
      { label: 'BeeMDMWay', href: '/beemdmway' },
      { label: 'OntoWay', href: '/ontoway' }
    ]
  };

  return (
    <footer style={{
      background: 'linear-gradient(to bottom, #000, #0a0e1a)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '80px 20px 40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              BahyWay
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '20px'
            }}>
              The heart of your data ecosystem. Real-time knowledge graph
              managing 1 billion nodes with 8-way parallel processing.
            </p>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <SocialLink href="https://github.com/bahyway" icon={<Github size={20} />} />
              <SocialLink href="https://twitter.com/bahyway" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com/company/bahyway" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:contact@bahyway.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white'
            }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.product.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white'
            }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.resources.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white'
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white'
            }}>
              Applications
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.applications.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            © {currentYear} BahyWay. Made with <Heart size={16} color="#F44336" fill="#F44336" /> by Bahaa Fadam
          </p>

          <div style={{
            display: 'flex',
            gap: '30px'
          }}>
            <a href="/terms" style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Terms
            </a>
            <a href="/privacy" style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Privacy
            </a>
            <a href="/cookies" style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        transition: 'color 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#2196F3';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
      }}
    >
      {label}
    </a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(33,150,243,0.2)';
        e.currentTarget.style.borderColor = '#2196F3';
        e.currentTarget.style.color = '#2196F3';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon}
    </a>
  );
}
