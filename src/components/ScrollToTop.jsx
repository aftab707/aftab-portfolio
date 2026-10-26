import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        background: 'rgba(11, 16, 28, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(56, 189, 248, 0.35)',
        color: '#38bdf8',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
        e.currentTarget.style.boxShadow = '0 14px 35px rgba(56, 189, 248, 0.45)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'rgba(11, 16, 28, 0.88)';
        e.currentTarget.style.color = '#38bdf8';
        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
