import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Absolutely, you are one of the best I have worked with. The Africa Baze SaaS platform exceeded expectations in both functionality and performance. Remember you will be creating a similar SaaS for the Nigerian, South African, and Ghana markets next!",
      author: "Kihato Kevin Ashema",
      location: "Kenya",
      project: "Africa Baze SaaS Platform"
    },
    {
      text: "Aftab was fantastic to work with! Clear communication, extremely prompt with responses and milestones. I highly recommend him and would love to collaborate on his RAG/chatbot pipeline again in the future.",
      author: "Ken",
      location: "Hong Kong",
      project: "Attorus AI Chatbot"
    }
  ];

  return (
    <section id="testimonials" className="section-padding section-dark">
      <div className="container">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-subtitle">Feedback from real client collaborations across SaaS and AI chatbot work.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, index) => (
            <div key={index} className="card animate-fade-up" style={{ position: 'relative', animationDelay: `${index * 100}ms` }}>
              <Quote size={40} color="rgba(56, 189, 248, 0.2)" style={{ position: 'absolute', top: '2rem', right: '2rem' }} />
              <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic' }}>
                &quot;{review.text}&quot;
              </p>
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{review.author}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  {review.project} - {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
