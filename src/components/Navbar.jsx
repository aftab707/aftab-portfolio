import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Default is strictly 'dark' for every new visitor
    try {
      localStorage.removeItem('portfolio-theme');
    } catch (e) {}
    return sessionStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    sessionStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const isLight = theme === 'light';

  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 1000, 
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      background: isScrolled 
        ? (isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(7, 9, 14, 0.88)') 
        : (isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(7, 9, 14, 0.4)'),
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: isScrolled 
        ? (isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)') 
        : '1px solid transparent',
      padding: isScrolled ? '0.85rem 0' : '1.35rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand with Developer Monogram Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: isLight 
              ? 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)' 
              : 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(129, 140, 248, 0.12) 100%)',
            border: isLight ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid rgba(56, 189, 248, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isLight ? '0 4px 12px rgba(2, 132, 199, 0.25)' : '0 0 16px rgba(56, 189, 248, 0.22)',
            flexShrink: 0
          }}>
            <svg width="22" height="22" viewBox="0 0 34 34" fill="none">
              <path d="M7 12L3 17L7 22" stroke={isLight ? "#ffffff" : "#38bdf8"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M27 12L31 17L27 22" stroke={isLight ? "#ffffff" : "#818cf8"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 25L17 9L23 25" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 19H20.5" stroke={isLight ? "#ffffff" : "#38bdf8"} strokeWidth="2.4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <span className="brand-logo">Aftab Ali</span>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            padding: '0.2rem 0.55rem', 
            borderRadius: '999px', 
            background: isLight ? 'rgba(5, 150, 105, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
            border: isLight ? '1px solid rgba(5, 150, 105, 0.25)' : '1px solid rgba(16, 185, 129, 0.25)', 
            color: isLight ? '#059669' : '#34d399', 
            fontSize: '0.72rem', 
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px', background: isLight ? '#059669' : '#10b981' }}></span>
            Available
          </span>
        </a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{ 
                    color: 'var(--text-muted)', 
                    fontWeight: 500, 
                    fontSize: '0.92rem', 
                    transition: 'color 0.2s ease' 
                  }} 
                  onMouseOver={e => e.target.style.color = 'var(--text-main)'} 
                  onMouseOut={e => e.target.style.color = 'var(--text-muted)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: isLight ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
                color: isLight ? '#0f172a' : '#f8fafc',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.transform = 'rotate(15deg) scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = isLight ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
              }}
            >
              {isLight ? <Moon size={18} color="#6366f1" /> : <Sun size={18} color="#f59e0b" />}
            </button>

            {/* Let's Talk CTA */}
            <a 
              href="#contact" 
              className="btn btn-secondary" 
              style={{ 
                padding: '0.55rem 1.25rem', 
                fontSize: '0.85rem', 
                borderRadius: '999px',
                border: '1px solid var(--border-hover)',
                color: 'var(--primary)'
              }}
            >
              Let's Talk <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Theme Button on Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-actions">
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="mobile-theme-btn"
            style={{
              display: 'grid',
              placeItems: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: isLight ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.05)',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-main)'
            }}
          >
            {isLight ? <Moon size={18} color="#6366f1" /> : <Sun size={18} color="#f59e0b" />}
          </button>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle navigation"
            style={{ 
              display: 'block', 
              color: 'var(--text-main)', 
              padding: '0.5rem', 
              borderRadius: '8px', 
              background: isLight ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.05)',
              border: isLight ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          width: '100%', 
          background: isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(7, 9, 14, 0.98)',
          backdropFilter: 'blur(20px)', 
          borderBottom: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '1.5rem 2rem',
          boxShadow: isLight ? '0 20px 40px rgba(15, 23, 42, 0.08)' : '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem', display: 'block' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            
            <li style={{ paddingTop: '0.75rem', borderTop: isLight ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-actions { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
