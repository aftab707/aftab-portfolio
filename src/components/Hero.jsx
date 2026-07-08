import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  const proofPoints = ['Client SaaS work', 'AI chatbot pipelines', 'RAG applications'];
  const roles = ['SOFTWARE ENGINEER','AI SPECIALIST', 'TECH CONSULTANT'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero-section" style={{ 
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '96px', overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: '#38bdf8', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', background: '#c084fc', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.08fr) minmax(320px, 0.92fr)', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <div className="animate-fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '9999px', color: '#38bdf8', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            <Sparkles size={16} /> Available for AI, RAG & SaaS projects
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            <span className="hero-role-line">
              <span className="hero-role-static">I'M A</span>
              <span key={roles[roleIndex]} className="hero-role-dynamic">{roles[roleIndex]}</span>
            </span>
            {/* <span className="hero-subline">
              Building <span className="gradient-text">RAG, chatbot & SaaS products</span>
            </span> */}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            I help clients turn business workflows into reliable AI chatbots, retrieval systems, and web platforms. My recent work includes client-facing SaaS, lead-generation bots, and graph-based RAG systems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/Resume/Aftab_Resume.pdf" className="btn btn-secondary" target="_blank" download>
              Download CV <Download size={20} />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {proofPoints.map((point) => (
              <span key={point} style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.03)', borderRadius: '9999px', padding: '0.45rem 0.85rem', fontSize: '0.875rem' }}>
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Right portrait */}
        <div className="animate-fade-up" style={{ animationDelay: '200ms', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: '1rem', background: 'var(--gradient-main)', borderRadius: '2rem', transform: 'rotate(4deg)', opacity: 0.45, zIndex: -1 }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', transform: 'rotate(-2deg)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', zIndex: -1 }}></div>
          
          <img 
            src="/images/aftab-profile-dark.png" 
            alt="Aftab Ali professional portrait" 
            style={{ 
              width: '100%', 
              maxWidth: '430px', 
              aspectRatio: '4/5', 
              objectFit: 'cover', 
              objectPosition: 'center 35%',
              borderRadius: '2rem', 
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }} 
          />
          <div style={{ position: 'absolute', left: '0.25rem', bottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.55rem', background: 'rgba(11, 15, 25, 0.86)', border: '1px solid var(--border-color)', borderRadius: '9999px', color: '#fff', padding: '0.65rem 0.9rem', backdropFilter: 'blur(12px)', boxShadow: '0 12px 30px rgba(0,0,0,0.28)' }}>
            <MapPin size={17} color="#38bdf8" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Lahore, Pakistan - working globally</span>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-section > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-section > .container > div:first-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
