import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: '#05070c', 
      padding: '4.5rem 0 2.5rem 0', 
      borderTop: '1px solid rgba(255, 255, 255, 0.07)' 
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        {/* Brand */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(129, 140, 248, 0.12) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(56, 189, 248, 0.2)'
            }}>
              <svg width="20" height="20" viewBox="0 0 34 34" fill="none">
                <path d="M7 12L3 17L7 22" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27 12L31 17L27 22" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 25L17 9L23 25" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 19H20.5" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="brand-logo" style={{ fontSize: '1.8rem' }}>Aftab Ali</span>
          </div>
          <p style={{ 
            color: 'var(--text-muted)', 
            textAlign: 'center', 
            maxWidth: '480px', 
            marginTop: '0.75rem',
            fontSize: '0.92rem',
            lineHeight: 1.6 
          }}>
            Full-Stack Software Engineer & AI Automation Specialist. Building scalable SaaS platforms, intelligent RAG systems, and enterprise n8n workflows for global businesses.
          </p>
        </div>

        {/* Quick Footer Links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#services" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Services</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Case Studies</a>
          <a href="#testimonials" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Client Reviews</a>
          <a href="#contact" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Contact</a>
          <a href="/Resume/Aftab_Resume.pdf" target="_blank" download style={{ color: 'var(--text-muted)', fontSize: '0.88rem', transition: '0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Download Resume</a>
        </div>
        
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* GitHub */}
          <a 
            href="https://github.com/aftab707" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid', 
              placeItems: 'center', 
              color: '#fff', 
              transition: 'all 0.25s' 
            }} 
            onMouseOver={e => { e.currentTarget.style.borderColor='#38bdf8'; e.currentTarget.style.color='#38bdf8'; e.currentTarget.style.transform='translateY(-3px)'; }} 
            onMouseOut={e => { e.currentTarget.style.borderColor='rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/aftab.automates/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid', 
              placeItems: 'center', 
              color: '#fff', 
              transition: 'all 0.25s' 
            }} 
            onMouseOver={e => { e.currentTarget.style.borderColor='#e1306c'; e.currentTarget.style.color='#e1306c'; e.currentTarget.style.transform='translateY(-3px)'; }} 
            onMouseOut={e => { e.currentTarget.style.borderColor='rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <path d="M17.5 6.5h.01"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/aftabali707/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid', 
              placeItems: 'center', 
              color: '#fff', 
              transition: 'all 0.25s' 
            }} 
            onMouseOver={e => { e.currentTarget.style.borderColor='#38bdf8'; e.currentTarget.style.color='#38bdf8'; e.currentTarget.style.transform='translateY(-3px)'; }} 
            onMouseOut={e => { e.currentTarget.style.borderColor='rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          <a 
            href="mailto:aftabali.deve@gmail.com" 
            aria-label="Direct Email"
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid', 
              placeItems: 'center', 
              color: '#fff', 
              transition: 'all 0.25s' 
            }} 
            onMouseOver={e => { e.currentTarget.style.borderColor='#38bdf8'; e.currentTarget.style.color='#38bdf8'; e.currentTarget.style.transform='translateY(-3px)'; }} 
            onMouseOut={e => { e.currentTarget.style.borderColor='rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <Mail size={18} />
          </a>
        </div>
        
        <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.06)' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Aftab Ali. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.8rem', fontWeight: 600 }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            Available for Q1/Q2 2026 Contracts Worldwide
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
