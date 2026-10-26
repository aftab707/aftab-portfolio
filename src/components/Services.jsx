import React from 'react';
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  Code2, 
  Globe2, 
  TrendingUp, 
  Settings2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  Database,
  Cpu
} from 'lucide-react';

const Services = () => {
  const serviceOfferings = [
    {
      icon: <Workflow size={28} color="#38bdf8" />,
      badge: "High Demand",
      badgeColor: "#38bdf8",
      title: "AI Automations & Workflow Engineering",
      subtitle: "n8n • Make.com • Zapier • Custom Python Scripts",
      description: "I build self-healing, multi-step automation pipelines that eliminate manual tasks. From webhook triggers and AI data extraction to cross-platform sync between your database, CRM, and cloud services.",
      deliverables: [
        "Automated n8n & Make.com complex scenarios",
        "Custom Python automation & background workers",
        "API data pipelines & multi-app webhooks",
        "Automated PDF parsing & LLM data synthesis"
      ]
    },
    
    {
      icon: <Globe2 size={28} color="#818cf8" />,
      badge: "Full-Stack Web",
      badgeColor: "#818cf8",
      title: "Modern Web Apps & SaaS Engineering",
      subtitle: "React 19 • Next.js • FastAPI • Django • PostgreSQL",
      description: "Custom web applications engineered for speed, clean architecture, and conversion. Responsive frontends paired with robust REST/GraphQL APIs, secure authentication, and scalable databases.",
      deliverables: [
        "Interactive React 19 dashboards & modern UI",
        "Scalable backend architecture (FastAPI / Django)",
        "Secure auth (JWT/OAuth), Stripe & subscriptions",
        "High-performance databases (PostgreSQL & Redis)"
      ]
    },
    {
      icon: <BrainCircuit size={28} color="#c084fc" />,
      badge: "Deep AI",
      badgeColor: "#c084fc",
      title: "Agentic AI, RAG & Knowledge Graphs",
      subtitle: "Neo4j • LangChain • Vector DBs • Extended RAG",
      description: "Move beyond simple chatbots. I engineer production RAG systems with knowledge graph verification, vector semantic search, and autonomous multi-agent tool execution.",
      deliverables: [
        "Neo4j Knowledge Graph RAG (XRAG)",
        "Context-grounded zero-hallucination pipelines",
        "Multi-turn conversational memory & caching",
        "Custom tool-calling & autonomous agents"
      ]
    },
    {
      icon: <Bot size={28} color="#f59e0b" />,
      badge: "Conversational",
      badgeColor: "#f59e0b",
      title: "Interactive Bots & Messaging Automation",
      subtitle: "Telegram Bot API • WhatsApp Cloud API • AI Assistants",
      description: "High-engagement messaging bots for community monetization, client support, and lead capture. Built with role-based permissions, payment triggers, and automated notification loops.",
      deliverables: [
        "Telegram SaaS bots with monetization logic",
        "WhatsApp Business Cloud API integrations",
        "Interactive bot keyboards & admin panels",
        "Stripe / crypto payment webhook triggers"
      ]
    },
    {
      icon: <Settings2 size={28} color="#10b981" />,
      badge: "Business Ops",
      badgeColor: "#10b981",
      title: "CRM & Operations Automation",
      subtitle: "GoHighLevel (GHL) • Monday.com • ClickUp",
      description: "Streamline client acquisition, project management, and sales ops. I connect your CRM to automated messaging, pipeline tracking, task dispatch, and real-time dashboard analytics.",
      deliverables: [
        "GoHighLevel (GHL) snapshot setups & triggers",
        "ClickUp & Monday.com workflow automation",
        "Multi-channel lead routing (Email, SMS, Slack)",
        "Automated client onboarding & status sync"
      ]
    },
    {
      icon: <Cpu size={28} color="#34d399" />,
      badge: "DevOps & Cloud",
      badgeColor: "#34d399",
      title: "Cloud Deployment, APIs & Maintenance",
      subtitle: "Docker • Vercel • AWS • CI/CD • 24/7 Monitoring",
      description: "Containerized, deployment-ready architectures that guarantee 99.9% uptime. Complete handover with documentation, environment configs, and round-the-clock maintenance.",
      deliverables: [
        "Docker containerization & cloud VPS setup",
        "Vercel, AWS & Supabase deployment pipelines",
        "API rate limiting, security & SSL hardening",
        "Full documentation & video handover guide"
      ]
    }
  ];

  const workSteps = [
    {
      step: "01",
      title: "Technical Discovery & Scope",
      tagline: "No guesswork. Clean architecture.",
      desc: "We analyze your exact business problem, data flow, and tech stack requirements. You receive a transparent milestone roadmap with realistic timelines."
    },
    {
      step: "02",
      title: "Rapid Prototype (48-72h)",
      tagline: "See working results fast.",
      desc: "I build the core workflow prototype or UI wireframe within 2 to 3 days so you can test early functionality and give immediate feedback."
    },
    {
      step: "03",
      title: "Agile Sprints & Live Demos",
      tagline: "Weekly demos & 24/7 direct comms.",
      desc: "Regular sprint deliveries with transparent GitHub commits, Loom video walkthroughs, and direct WhatsApp/Slack communication whenever you need."
    },
    {
      step: "04",
      title: "Production Launch & Handover",
      tagline: "Zero downtime + Full IP transfer.",
      desc: "Seamless live deployment, clean source code repository handover, comprehensive documentation, and 24/7 post-launch guarantee."
    }
  ];

  return (
    <section id="services" className="section-padding section-dark">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            <Sparkles size={15} /> End-to-End Technical Execution
          </div>

          <h2 className="section-title">Specialized Engineering Services</h2>
          <p className="section-subtitle">
            From modern web applications and AI automations to enterprise RAG systems — built for founders, agencies, and high-growth businesses.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem',
          marginBottom: '6rem'
        }}>
          {serviceOfferings.map((service, index) => (
            <div 
              key={index} 
              className="card animate-fade-up" 
              style={{ 
                animationDelay: `${index * 80}ms`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem'
              }}
            >
              <div>
                {/* Header: Icon + Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '16px', 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    {service.icon}
                  </div>
                  
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '999px', 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    border: `1px solid ${service.badgeColor}40`, 
                    color: service.badgeColor, 
                    fontSize: '0.75rem', 
                    fontWeight: 700 
                  }}>
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--primary)', fontSize: '0.825rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {service.subtitle}
                </p>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {service.deliverables.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', color: 'var(--text-main)', fontSize: '0.825rem' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick CTA */}
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <a 
                  href="#contact" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.45rem', 
                    color: '#38bdf8', 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    transition: 'gap 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.gap = '0.7rem'}
                  onMouseOut={e => e.currentTarget.style.gap = '0.45rem'}
                >
                  Discuss this service <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: The 4-Step "How I Work" Delivery Funnel */}
        <div style={{
          padding: '3.5rem 2.5rem',
          borderRadius: '2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 60px -20px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Transparent Execution Process
            </span>
            <h3 style={{ fontSize: '2.15rem', color: 'var(--text-main)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              How We Work Together
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '580px', margin: '0 auto' }}>
              A disciplined 4-stage pipeline that eliminates surprises, keeps you informed daily, and delivers on time.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
            gap: '2rem',
            position: 'relative'
          }}>
            {workSteps.map((step, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: 'relative',
                  padding: '1.75rem',
                  borderRadius: '1.25rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  fontFamily: 'var(--font-display)',
                  color: 'var(--primary)', 
                  opacity: 0.6,
                  marginBottom: '0.75rem' 
                }}>
                  {step.step}
                </div>
                
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.35rem', fontWeight: 700 }}>
                  {step.title}
                </h4>
                
                <div style={{ color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {step.tagline}
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Action */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.95rem 2.25rem' }}>
              Start Your Project with Clear Milestones <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
