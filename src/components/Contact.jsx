import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`);

    setIsSubmitting(true);
    window.location.href = `mailto:aftabali.deve@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding section-light">
      <div className="container">
        <h2 className="section-title">Ready to Build?</h2>
        <p className="section-subtitle">Share your AI, SaaS, or data problem and I will help shape the technical path.</p>
        
        <div className="surface-panel contact-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', padding: '3rem', borderRadius: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Get In Touch</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Whether you need an AI chatbot, a custom SaaS platform, or data analytics support, I can help you move from idea to working product.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a className="contact-method" href="mailto:aftabali.deve@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Email</h4>
                  <span>aftabali.deve@gmail.com</span>
                </div>
              </a>
              
              <div className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Location</h4>
                  <span>Lahore, Pakistan (Available Globally)</span>
                </div>
              </div>
              
              <a className="contact-method" href="https://www.linkedin.com/in/aftabali707/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.1)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.125rem', marginBottom: '0.25rem' }}>LinkedIn</h4>
                  <span>Connect Professionally</span>
                </div>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {submitted && (
              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)', textAlign: 'center' }}>
                Opening your email app with a prepared project message.
              </div>
            )}
            <div>
              <input name="name" type="text" placeholder="Your Name" required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: '0.3s' }} onFocus={e => e.target.style.borderColor='#38bdf8'} onBlur={e => e.target.style.borderColor='var(--border-color)'} />
            </div>
            <div>
              <input name="email" type="email" placeholder="Your Email" required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: '0.3s' }} onFocus={e => e.target.style.borderColor='#38bdf8'} onBlur={e => e.target.style.borderColor='var(--border-color)'} />
            </div>
            <div>
              <textarea name="message" placeholder="Tell me about your project..." required rows={5} style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-main)', outline: 'none', transition: '0.3s', resize: 'vertical' }} onFocus={e => e.target.style.borderColor='#38bdf8'} onBlur={e => e.target.style.borderColor='var(--border-color)'} />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? 'Preparing...' : <><Send size={20} /> Send Project Brief</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
