import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: 'all 0.3s',
      background: isScrolled ? 'rgba(11, 15, 25, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="brand-logo">Aftab Ali</a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} style={{ color: 'var(--text-muted)', fontWeight: 500, transition: '0.3s' }} 
                   onMouseOver={e => e.target.style.color = '#fff'} 
                   onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'block', color: '#fff' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(11, 15, 25, 0.95)',
          backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)} style={{ color: '#fff', fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
export default Navbar;
