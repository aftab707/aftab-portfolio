import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Full-Stack Web & SaaS');
  const [selectedBudget, setSelectedBudget] = useState('$2k - $5k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const emailAddress = "aftabali.deve@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const servicesList = [
    'Full-Stack Web & SaaS',
    'AI & RAG Pipelines',
    'n8n / Workflow Automation',
    'GoHighLevel & CRM Ops'
  ];

  const budgetList = [
    '< $2k',
    '$2k - $5k',
    '$5k - $10k',
    'Open / Monthly Retainer'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e6ba10e7-eefa-4fd9-b828-0aa6bb438dd0',
          name: formData.name,
          email: formData.email,
          service: selectedService,
          budget: selectedBudget,
          message: formData.message,
          subject: `🚀 New Project Inquiry from ${formData.name} [${selectedService}]`,
          from_name: `${formData.name} (Portfolio Inquiry)`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again or message via WhatsApp.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again or email aftabali.deve@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-light" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '380px',
        height: '380px',
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
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#38bdf8',
            fontSize: '0.825rem',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>
            <Sparkles size={15} /> Fast Turnaround • Rapid Response
          </div>

          <h2 className="section-title">Ready to Build Your System?</h2>
          <p className="section-subtitle">
            Whether you need a custom web application, an automated n8n workflow, or an enterprise RAG chatbot — let's map out your architecture.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="surface-panel contact-panel" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(320px, 1.25fr)',
          gap: '3.5rem',
          padding: '3.5rem 3rem',
          borderRadius: '2rem',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-card)',
          boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.3)'
        }}>
          
          {/* Left Column: Direct Channels & Call Booking */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#10b981',
                fontSize: '0.78rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}>
                <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
                24/7 Available for International Clients
              </div>

              <h3 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                Let's Start a Conversation
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Share your requirements below, or reach out directly through any of these fast channels. I typically respond within 1-2 hours.
              </p>

              {/* Direct Channels Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                
                {/* 1-Click Copy Email Card */}
                <div 
                  onClick={handleCopyEmail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: '1rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: 'var(--primary)',
                      display: 'grid',
                      placeItems: 'center'
                    }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Email</div>
                      <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.92rem' }}>{emailAddress}</div>
                    </div>
                  </div>
                  
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    background: copied ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
                    color: copied ? '#10b981' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: copied ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-color)'
                  }}>
                    {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
                  </span>
                </div>

                {/* Direct WhatsApp / Chat Card */}
                <a 
                  href="https://wa.me/923013291634?text=Hi%20Aftab,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: '1rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.borderColor = '#10b981'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      display: 'grid',
                      placeItems: 'center'
                    }}>
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Instant Messaging</div>
                      <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.92rem' }}>Direct WhatsApp Chat</div>
                    </div>
                  </div>
                  <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>Message &rarr;</span>
                </a>

                {/* Location Card */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '1rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(129, 140, 248, 0.15)',
                    color: 'var(--secondary)',
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location & Timezone</div>
                    <div style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}>
                      Lahore, Pakistan (UTC+5) • 24/7 Global Delivery
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Schedule Discovery Call Promo Banner */}
            <div style={{
              padding: '1.5rem',
              borderRadius: '1.25rem',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.88rem' }}>
                <Calendar size={18} /> Prefer a quick intro call?
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                Schedule a 15-minute video consultation to review your technical architecture and scope.
              </p>
              <a 
                href="https://cal.com/aftab-shad-y7krbq/15min" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.65rem 1.25rem', fontSize: '0.85rem', justifyContent: 'center' }}
              >
                Schedule 15-Min Call <ArrowRight size={15} />
              </a>
            </div>

          </div>

          {/* Right Column: Project Brief Form */}
          <div>
            
            {submitted ? (
              <div style={{
                padding: '3rem 2rem',
                borderRadius: '1.5rem',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#10b981'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>Project Inquiry Delivered!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you! Your technical brief has been delivered directly to my inbox. I review every project personally and will respond via email within <strong>2 hours</strong>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.6rem 1.5rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                
                {errorMessage && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    fontSize: '0.85rem'
                  }}>
                    {errorMessage}
                  </div>
                )}
                
                {/* Service Selection Chips */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    What service do you need?
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {servicesList.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        style={{
                          padding: '0.45rem 0.95rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          background: selectedService === s ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: selectedService === s ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: selectedService === s ? '#38bdf8' : '#cbd5e1'
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs in 2 columns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.45rem' }}>
                      Your Name *
                    </label>
                    <input 
                      name="name" 
                      type="text" 
                      placeholder="e.g. Alex Miller" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.9rem 1.15rem', 
                        background: 'rgba(7, 9, 14, 0.75)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)', 
                        borderRadius: '0.85rem', 
                        color: '#f8fafc', 
                        fontSize: '0.9rem',
                        outline: 'none', 
                        transition: '0.2s' 
                      }} 
                      onFocus={e => e.target.style.borderColor='#38bdf8'} 
                      onBlur={e => e.target.style.borderColor='rgba(255, 255, 255, 0.08)'} 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.45rem' }}>
                      Work Email *
                    </label>
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="alex@company.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.9rem 1.15rem', 
                        background: 'rgba(7, 9, 14, 0.75)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)', 
                        borderRadius: '0.85rem', 
                        color: '#f8fafc', 
                        fontSize: '0.9rem',
                        outline: 'none', 
                        transition: '0.2s' 
                      }} 
                      onFocus={e => e.target.style.borderColor='#38bdf8'} 
                      onBlur={e => e.target.style.borderColor='rgba(255, 255, 255, 0.08)'} 
                    />
                  </div>
                </div>

                {/* Estimated Budget Chips */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Estimated Budget Range
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {budgetList.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        style={{
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          background: selectedBudget === b ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          border: selectedBudget === b ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.06)',
                          color: selectedBudget === b ? '#38bdf8' : '#94a3b8'
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Scope Textarea */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.45rem' }}>
                    Project Scope & Objectives *
                  </label>
                  <textarea 
                    name="message" 
                    placeholder="Tell me about your project, current bottlenecks, desired timeline, or tech stack..." 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '0.9rem 1.15rem', 
                      background: 'rgba(7, 9, 14, 0.75)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)', 
                      borderRadius: '0.85rem', 
                      color: '#f8fafc', 
                      fontSize: '0.9rem',
                      outline: 'none', 
                      transition: '0.2s', 
                      resize: 'vertical',
                      lineHeight: 1.6
                    }} 
                    onFocus={e => e.target.style.borderColor='#38bdf8'} 
                    onBlur={e => e.target.style.borderColor='rgba(255, 255, 255, 0.08)'} 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-primary" 
                  style={{ 
                    width: '100%', 
                    padding: '0.95rem',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                    opacity: isSubmitting ? 0.75 : 1 
                  }}
                >
                  {isSubmitting ? 'Formatting Project Brief...' : <><Send size={18} /> Send Project Inquiry</>}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  <ShieldCheck size={14} color="#34d399" />
                  <span>100% Confidential • NDA Guaranteed Upon Request</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
