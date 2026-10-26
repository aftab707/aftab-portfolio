import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      id: "us-client",
      author: "David Dutton",
      role: "Founder & Operations Director",
      company: "David Media & SaaS",
      location: "California, United States",
      flag: "🇺🇸",
      project: "Full-Stack Web App & n8n AI Automations",
      rating: 5,
      date: "Recent 2026 Collaboration",
      highlight: "Automated 15+ hours of manual team ops every week.",
      text: "Aftab completely transformed our operational backend. His custom n8n workflows and React frontend automated what used to take our team 15+ hours a week. Brilliant communication, zero hand-holding required, and 24/7 responsiveness. Working with him was easily one of the best hiring decisions we've made.",
      deliverables: ["Custom n8n Automations", "React Dashboard", "Webhook Lead Sync"]
    },
    {
      id: "kenya-client",
      author: "Kihato Kevin Ashema",
      role: "Founder & CEO",
      company: "Africa Baze Media Platform",
      location: "Nairobi, Kenya",
      flag: "🇰🇪",
      project: "Africa Baze Custom SaaS Platform",
      rating: 5,
      date: "Multi-Market Production Contract",
      highlight: "Exceeded expectations in both functionality & speed.",
      text: "Absolutely, you are one of the best I have worked with. The Africa Baze SaaS platform exceeded expectations in both functionality and performance. Remember you will be creating a similar SaaS for the Nigerian, South African, and Ghana markets next!",
      deliverables: ["Telegram SaaS Platform", "Monetization Engine", "Role-Based RBAC"]
    },
    {
      id: "hk-client",
      author: "Ken",
      role: "Product & AI Lead",
      company: "Attorus AI",
      location: "Hong Kong",
      flag: "🇭🇰",
      project: "Attorus AI Lead Gen & RAG Pipeline",
      rating: 5,
      date: "AI Chatbot Architecture",
      highlight: "Extremely prompt with milestones and clean RAG logic.",
      text: "Aftab was fantastic to work with! Clear communication, extremely prompt with responses and milestones. I highly recommend him and would love to collaborate on his RAG/chatbot pipeline again in the future.",
      deliverables: ["RAG Knowledge Retrieval", "Lead Qualification Flow", "Python LLM Backend"]
    }
  ];

  // Auto-rotation every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const current = reviews[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="section-padding section-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#34d399',
            fontSize: '0.825rem',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>
            <ShieldCheck size={15} /> 100% Verified Global Client Endorsements
          </div>

          <h2 className="section-title">International Client Success</h2>
          <p className="section-subtitle">
            Direct feedback from founders and engineering leaders across the United States, Hong Kong, and Africa.
          </p>

          {/* Interactive Client Selector Tabs */}
          <div style={{ 
            display: 'inline-flex', 
            gap: '0.65rem', 
            padding: '0.45rem', 
            borderRadius: '999px', 
            background: 'rgba(15, 23, 42, 0.7)', 
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: activeIndex === i ? 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)' : 'transparent',
                  color: activeIndex === i ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: activeIndex === i ? '0 4px 15px rgba(56, 189, 248, 0.3)' : 'none'
                }}
              >
                <span>{r.flag}</span>
                <span>{r.author}</span>
                <span style={{ fontSize: '0.75rem', opacity: activeIndex === i ? 0.9 : 0.6 }}>({r.location.split(',')[1] || r.location})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div style={{
          maxWidth: '920px',
          margin: '0 auto 3rem auto',
          position: 'relative'
        }}>
          
          {/* Main Showcase Glass Card */}
          <div className="card" style={{
            padding: '3.5rem 3rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.4)',
            borderRadius: '2rem',
            position: 'relative'
          }}>
            
            {/* Top Row: Stars + Verified Badge + Quote Icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {[...Array(current.rating)].map((_, si) => (
                  <Star key={si} size={20} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span style={{ marginLeft: '0.5rem', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700 }}>5.0 Rating</span>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#34d399',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                <ShieldCheck size={14} /> Verified Client Contract
              </div>
            </div>

            {/* Testimonial Quote */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <Quote 
                size={64} 
                color="rgba(56, 189, 248, 0.12)" 
                style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', zIndex: 0 }} 
              />
              <p style={{
                position: 'relative',
                zIndex: 1,
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                color: 'var(--text-main)',
                lineHeight: 1.7,
                fontStyle: 'normal',
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}>
                &ldquo;{current.text}&rdquo;
              </p>
            </div>

            {/* Author Profile & Deliverables */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-color)',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}>
              
              {/* Left: Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.4rem',
                  boxShadow: '0 8px 20px rgba(56, 189, 248, 0.3)'
                }}>
                  {current.flag}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {current.author}
                  </h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
                    {current.role} • <span style={{ color: 'var(--text-muted)' }}>{current.company}</span>
                  </p>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{current.location}</span>
                </div>
              </div>

              {/* Right: Deliverables tags */}
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {current.deliverables.map((item, di) => (
                  <span 
                    key={di}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* Navigation Controls: Arrows & Dots */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginTop: '1.5rem',
            padding: '0 0.5rem' 
          }}>
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#fff'; }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              {reviews.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  style={{
                    width: activeIndex === dotIdx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: activeIndex === dotIdx ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#fff'; }}
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* 3 Quick Summary Cards Below (All At A Glance) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          marginTop: '4rem'
        }}>
          {reviews.map((r, idx) => (
            <div 
              key={r.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                padding: '1.5rem',
                borderRadius: '1.25rem',
                background: activeIndex === idx ? 'var(--bg-surface-elevated)' : 'var(--bg-card)',
                border: activeIndex === idx ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{r.flag}</span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
              <h5 style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>{r.author}</h5>
              <p style={{ color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem' }}>{r.company} • {r.location.split(',')[0]}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.5, margin: 0 }}>
                "{r.highlight}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
