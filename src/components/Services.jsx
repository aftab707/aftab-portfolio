import React from 'react';
import { Bot, BrainCircuit, Code2, Globe2, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot size={32} color="#38bdf8" />,
      title: "Agentic AI, Chatbots & RAG",
      description: "I build AI agents, chatbot workflows, RAG pipelines, and tool-using assistants that can retrieve knowledge, qualify leads, and automate business conversations."
    },
    {
      icon: <BrainCircuit size={32} color="#22c55e" />,
      title: "Machine Learning & AI Models",
      description: "I develop practical ML and AI solutions for prediction, classification, recommendation, data preprocessing, model evaluation, and business-focused automation."
    },
    {
      icon: <Globe2 size={32} color="#f59e0b" />,
      title: "Web Development",
      description: "I create responsive web applications using React, Django, Flask, FastAPI, REST APIs, authentication, database integration, and clean deployment-ready architecture."
    },
    {
      icon: <Code2 size={32} color="#818cf8" />,
      title: "Python & SaaS Development",
      description: "I build practical web applications with clean backend logic, database design, authentication, dashboards, and deployment-ready structure."
    },
    {
      icon: <LineChart size={32} color="#c084fc" />,
      title: "Data Science & Analytics",
      description: "I turn raw datasets into models, visual summaries, and decision-ready insights using Python, Pandas, scikit-learn, and modern ML workflows."
    }
  ];

  return (
    <section id="services" className="section-padding section-dark">
      <div className="container">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">Focused technical services for founders, teams, and clients who need useful AI and web systems.</p>
        
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {services.map((service, index) => (
            <div key={index} className="card animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
