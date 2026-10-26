import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles, 
  Database, 
  Flame,
  Terminal,
  Server,
  Workflow
} from 'lucide-react';

const Stats = () => {
  const metrics = [
    {
      value: "15+",
      label: "Production Systems Shipped",
      detail: "Full-stack SaaS, AI chatbots & automation pipelines",
      accent: "from-sky-400 to-blue-500"
    },
    {
      value: "99.9%",
      label: "System Reliability",
      detail: "Clean modular architecture, secure auth & zero data loss",
      accent: "from-emerald-400 to-teal-500"
    },
    {
      value: "< 24h",
      label: "Rapid Sprint Turnaround",
      detail: "Fast iterations with continuous Slack/WhatsApp updates",
      accent: "from-indigo-400 to-purple-500"
    },
    {
      value: "24/7",
      label: "Global Availability",
      detail: "Round-the-clock responsiveness for global timezones",
      accent: "from-amber-400 to-orange-500"
    }
  ];

  const technologies = [
    { name: "React 19 & Next.js", icon: "⚛️" },
    { name: "Python & FastAPI", icon: "🐍" },
    { name: "n8n Workflow Automation", icon: "🔄" },
    { name: "LangChain & LlamaIndex", icon: "🧠" },
    { name: "Make.com & Zapier", icon: "⚡" },
    { name: "GoHighLevel (GHL) CRM", icon: "📈" },
    { name: "Neo4j Graph DB", icon: "🕸️" },
    { name: "PostgreSQL & Supabase", icon: "🐘" },
    { name: "ClickUp & Monday.com Ops", icon: "📋" },
    { name: "OpenAI & Claude LLMs", icon: "✨" },
    { name: "Telegram & WhatsApp Bots", icon: "🤖" },
    { name: "Docker & Redis Caching", icon: "🐳" },
    { name: "Vercel & Cloud VPS", icon: "☁️" }
  ];

  const clientAssurances = [
    { icon: <ShieldCheck size={18} color="#38bdf8" />, text: "100% IP & NDA Protected" },
    { icon: <CheckCircle2 size={18} color="#34d399" />, text: "Weekly Live Sprints & Demos" },
    { icon: <Workflow size={18} color="#818cf8" />, text: "Full Clean Source Code Handover" },
    { icon: <Clock size={18} color="#f59e0b" />, text: "24/7 Direct WhatsApp & Slack Comms" }
  ];

  return (
    <section className="section-padding section-light" style={{ 
      padding: '5rem 0', 
      borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">

        {/* 4 Core Metrics Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.75rem', 
          marginBottom: '4.5rem' 
        }}>
          {metrics.map((stat, index) => (
            <div 
              key={index} 
              className="card animate-fade-up" 
              style={{ 
                animationDelay: `${index * 80}ms`,
                padding: '2rem 1.75rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.65)'
              }}
            >
              <div>
                <h3 className="gradient-text" style={{ 
                  fontSize: '3.25rem', 
                  marginBottom: '0.65rem',
                  lineHeight: 1,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.03em'
                }}>
                  {stat.value}
                </h3>
                <h4 style={{ 
                  color: 'var(--text-main)', 
                  fontSize: '1.05rem', 
                  fontWeight: 700, 
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em'
                }}>
                  {stat.label}
                </h4>
              </div>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.86rem', 
                lineHeight: 1.55,
                margin: 0
              }}>
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.12em',
            fontWeight: 700
          }}>
            Powering Modern Enterprise Web & AI Systems
          </span>
        </div>

        {/* Tech Stack Continuous Marquee */}
        <div className="marquee-container" style={{ marginBottom: '3.5rem' }}>
          <div className="marquee-content">
            {/* Doubled for seamless infinite scroll */}
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={idx} className="tech-ticker-item">
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Peace of Mind & Guarantees */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '1rem',
          padding: '1.25rem 1.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '1.25rem',
          backdropFilter: 'blur(16px)'
        }}>
          {clientAssurances.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                display: 'grid',
                placeItems: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.1)',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <span style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
