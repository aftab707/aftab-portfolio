import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, MapPin, Sparkles, Calendar, CheckCircle2, Code2 } from 'lucide-react';

const Hero = () => {
  const roles = [
    'AI AUTOMATION SPECIALIST',
    'FULL-STACK ENGINEER',
    'PYTHON & RAG DEVELOPER'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  const proofPoints = [
    '⚡ React & Python Backends',
    '🧠 Intelligent RAG & AI Agents',
    '🛡️ Production-Grade APIs & SaaS',
    '🌍 24/7 Worldwide Availability'
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      paddingTop: '110px', 
      paddingBottom: '60px',
      overflow: 'hidden'
    }}>
      {/* Ambient background lighting */}
      <div style={{ 
        position: 'absolute', 
        top: '15%', 
        left: '5%', 
        width: '380px', 
        height: '380px', 
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)', 
        filter: 'blur(60px)', 
        pointerEvents: 'none',
        zIndex: 0 
      }}></div>
      
      <div style={{ 
        position: 'absolute', 
        bottom: '15%', 
        right: '5%', 
        width: '420px', 
        height: '420px', 
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)', 
        filter: 'blur(70px)', 
        pointerEvents: 'none',
        zIndex: 0 
      }}></div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)', 
        gap: '4rem', 
        alignItems: 'center' 
      }}>
        
        {/* Left Content Column */}
        <div className="animate-fade-up">
          
          {/* Availability Pill */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            padding: '0.45rem 1.1rem', 
            background: 'rgba(56, 189, 248, 0.08)', 
            border: '1px solid rgba(56, 189, 248, 0.25)', 
            borderRadius: '9999px', 
            color: '#38bdf8', 
            fontWeight: 600, 
            marginBottom: '1.75rem', 
            fontSize: '0.85rem',
            letterSpacing: '0.02em',
            backdropFilter: 'blur(8px)'
          }}>
            <span className="pulse-dot"></span>
            Available for Contract & SaaS Projects
          </div>

          {/* Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)', 
            marginBottom: '1.5rem', 
            lineHeight: 1.15,
            letterSpacing: '-0.025em' 
          }}>
            <span className="hero-role-line">
              <span className="hero-role-static">I'M A</span>
              <span key={roles[roleIndex]} className="hero-role-dynamic">
                {roles[roleIndex]}
              </span>
            </span>
          </h1>

          {/* Business-Oriented Value Proposition */}
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--text-muted)', 
            marginBottom: '2.5rem', 
            lineHeight: 1.75,
            maxWidth: '580px' 
          }}>
            I engineer production-ready web applications, scalable SaaS architectures, and intelligent RAG chatbots for international startups and businesses. Focused on clean code, rapid delivery, and measurable ROI.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a 
              href="https://cal.com/aftab-shad-y7krbq/15min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <Calendar size={18} /> Book a 15-Min Intro Call
            </a>
            
            <a href="#projects" className="btn btn-secondary">
              View Selected Work <ArrowRight size={18} />
            </a>

            <a href="/Resume/Aftab_Resume.pdf" className="btn btn-secondary" target="_blank" download>
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Key Engineering Pillars */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            {proofPoints.map((point) => (
              <span 
                key={point} 
                style={{ 
                  color: 'var(--text-main)', 
                  border: '1px solid var(--border-color)', 
                  background: 'var(--bg-card)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '9999px', 
                  padding: '0.4rem 0.85rem', 
                  fontSize: '0.825rem',
                  fontWeight: 600
                }}
              >
                {point}
              </span>
            ))}
          </div>

        </div>

        {/* Right Portrait & Trust Cards Column */}
        <div className="animate-fade-up hero-portrait-wrapper" style={{ 
          animationDelay: '150ms', 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center' 
        }}>
          
          {/* Subtle Outer Glow Frame */}
          <div style={{ 
            position: 'absolute', 
            inset: '-10px', 
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(129, 140, 248, 0.15) 50%, transparent 75%)', 
            borderRadius: '2.5rem', 
            filter: 'blur(20px)',
            zIndex: -1 
          }}></div>

          {/* Image Container Card */}
          <div style={{
            position: 'relative',
            borderRadius: '2rem',
            padding: '8px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
          }}>
            <img 
              src="/images/profile1.jpg" 
              alt="Aftab Ali — Full Stack & AI Systems Engineer" 
              style={{ 
                width: '100%', 
                maxWidth: '410px', 
                aspectRatio: '4/5', 
                objectFit: 'cover', 
                objectPosition: 'center 20%',
                borderRadius: '1.65rem', 
                display: 'block'
              }} 
            />

            {/* Top Floating Badge */}
            <div style={{ 
              position: 'absolute', 
              top: '1.25rem', 
              right: '-1rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(7, 9, 14, 0.92)', 
              border: '1px solid rgba(56, 189, 248, 0.3)', 
              borderRadius: '9999px', 
              color: '#f8fafc', 
              padding: '0.55rem 0.95rem', 
              backdropFilter: 'blur(16px)', 
              boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>100% Delivery Track Record</span>
            </div>

            {/* Bottom Floating Card */}
            <div style={{ 
              position: 'absolute', 
              left: '0.5rem', 
              right: '0.5rem',
              bottom: '1rem', 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.35rem', 
              background: 'rgba(7, 9, 14, 0.92)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: '1.25rem', 
              color: '#fff', 
              padding: '0.85rem 1.15rem', 
              backdropFilter: 'blur(16px)', 
              boxShadow: '0 14px 35px rgba(0,0,0,0.6)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Aftab Ali</span>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>Full-Stack & AI</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)' }}>
                <MapPin size={14} color="#34d399" />
                <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Lahore (UTC+5) • 24/7 Global Availability</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-section > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3.5rem !important;
          }
          .hero-section > .container > div:first-child > div {
            justify-content: center;
          }
          .hero-portrait-wrapper {
            order: -1;
            margin-bottom: 1rem;
          }
          .hero-portrait-wrapper .top-badge {
            right: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
