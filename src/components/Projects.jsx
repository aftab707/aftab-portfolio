import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Terminal,
  Globe2,
  Database
} from 'lucide-react';

const ProjectMockup = ({ type, title, url }) => {
  return (
    <div style={{
      borderRadius: '1.25rem',
      overflow: 'hidden',
      background: '#070b14',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8)'
    }}>
      {/* Mac OS Window Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem',
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
        </div>
        <div style={{
          padding: '0.2rem 1rem',
          borderRadius: '999px',
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.75rem',
          color: '#94a3b8',
          letterSpacing: '0.01em',
          maxWidth: '240px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          🔒 {url}
        </div>
        <div style={{ width: '32px' }}></div>
      </div>

      {/* Screen Content */}
      <div style={{ minHeight: '340px', position: 'relative' }}>
        {type === "attorus" && (
          <div className="attorus-preview" style={{ height: '100%', minHeight: '340px' }}>
            <div className="attorus-header">
              <div className="attorus-avatar">A</div>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>Attorus AI Assistant</strong>
                <span>Lead Qualification Pipeline • Live</span>
              </div>
              <div className="attorus-refresh">Active</div>
            </div>
            <div className="attorus-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="attorus-message" style={{ background: '#064e3b', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  👋 Hi! I'm the automated lead-gen agent built by Aftab. I qualify B2B prospects, collect requirements, and route directly to sales.
                </div>
                <div style={{ 
                  alignSelf: 'flex-end', 
                  maxWidth: '80%', 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.75rem', 
                  fontSize: '0.85rem',
                  color: '#e2e8f0'
                }}>
                  We need a RAG pipeline for our SaaS docs. What's the timeline?
                </div>
                <div className="attorus-message" style={{ background: '#064e3b', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  ✅ Average deployment is 1-2 weeks with production vector search & LLM caching. Let's schedule your architecture review.
                </div>
              </div>
            </div>
            <div className="attorus-input">
              <span>Type your technical requirement...</span>
              <button type="button" aria-label="Send">Go</button>
            </div>
          </div>
        )}

        {type === "africa-baze" && (
          <div className="africa-preview" style={{ height: '100%', minHeight: '340px' }}>
            <div className="africa-appbar">
              <div className="africa-logo">AB</div>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>Africa Baze SaaS Engine</strong>
                <span>Creator Monetization & Video Streaming Platform</span>
              </div>
              <div className="africa-menu">PROD</div>
            </div>
            <div className="africa-chat">
              <div className="africa-outgoing">/dashboard --admin</div>
              <div className="africa-panel" style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#f59e0b' }}>Africa Baze Hub</strong>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(245, 158, 11, 0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px', color: '#f59e0b' }}>Multi-Market</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.5rem' }}>
                  Automated Content Monetization, Tiered Subscriptions & Role-Based Access for Creators.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.85rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <small style={{ color: '#94a3b8', fontSize: '0.7rem' }}>Markets</small>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>KE, NG, GH</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <small style={{ color: '#94a3b8', fontSize: '0.7rem' }}>Engine</small>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#38bdf8' }}>Python/Bot</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                    <small style={{ color: '#94a3b8', fontSize: '0.7rem' }}>Access</small>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#34d399' }}>Role RBAC</div>
                  </div>
                </div>
              </div>
              <div className="africa-actions" style={{ width: '100%', marginTop: '0.75rem' }}>
                <span>Creator Portal</span>
                <span>Subscriber Wallet</span>
                <span>Admin Analytics & Payouts</span>
              </div>
            </div>
          </div>
        )}

        {type === "legal" && (
          <div className="legal-preview" style={{ height: '100%', minHeight: '340px' }}>
            <div className="legal-topbar">
              <div className="legal-logo">XRAG</div>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>Legal Advisor — Graph RAG</strong>
                <span>Neo4j Knowledge Graph & Extended Vector Retrieval</span>
              </div>
              <span>Zero-Hallucination</span>
            </div>
            <div className="legal-content">
              <div>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.35rem', 
                  padding: '0.25rem 0.65rem', 
                  borderRadius: '999px', 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  color: '#38bdf8', 
                  fontSize: '0.72rem', 
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>
                  <Database size={12} /> Graph-Augmented LLM
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#fff' }}>
                  Complex Case Law Reasoning
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  Traverses statutes, case precedents, and constitutional hierarchies using Neo4j graph nodes and vector semantic embeddings.
                </p>
                <div className="legal-actions">
                  <span>Graph Traversal</span>
                  <span>Citation Verified</span>
                </div>
              </div>
              <div className="legal-chat">
                <p className="user-bubble">What are the statutory requirements under Section 9?</p>
                <p className="ai-bubble">
                  Query resolved via 3 Neo4j relation hops with 100% cited precedent authority.
                </p>
                <small>⚡ Response latency: 1.1s • Verified accuracy</small>
              </div>
            </div>
          </div>
        )}

        {type === "saas" && (
          <div className="saas-preview" style={{ height: '100%', minHeight: '340px', padding: '1.5rem' }}>
            <div className="saas-window" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                  Full-Stack Cloud Dashboard
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                  React 19 + FastAPI
                </span>
              </div>
              <div className="saas-grid">
                <div className="saas-chart" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem' }}>
                  <TrendingUp size={24} color="#38bdf8" />
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>Real-time Analytics</span>
                </div>
                <div className="saas-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem' }}>
                  <ShieldCheck size={24} color="#10b981" />
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>Secure JWT / RBAC</span>
                </div>
                <div className="saas-card wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>PostgreSQL + Redis Caching</span>
                  <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700 }}>&lt; 50ms Latency</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const featuredProjects = [
    {
      id: "africa-baze",
      category: "saas",
      tag: "Live Client SaaS Platform",
      status: "Production Shipped",
      statusColor: "#f59e0b",
      title: "Africa Baze — Custom Creator SaaS & Media Platform",
      role: "Lead Platform & Telegram SaaS Engineer",
      client: "Kihato Kevin Ashema (Kenya)",
      preview: "africa-baze",
      url: "africabaze.org/platform",
      link: "#contact",
      linkText: "Request Architecture Deck",
      metrics: [
        { label: "Target Markets", val: "Kenya, Nigeria, Ghana" },
        { label: "Architecture", val: "Tiered Subscriptions & RBAC" },
        { label: "Core Backend", val: "Python, Webhooks & Payments" }
      ],
      challenge: "The client needed a high-engagement, frictionless media platform for African storytellers that avoided heavy mobile app downloads while handling creator subscriptions, paid viewing, and distinct roles for creators, moderators, and super-admins.",
      solution: "Engineered a high-performance Telegram-based SaaS engine with role-based access control (RBAC), multi-market monetization logic, and direct creator payout dashboards.",
      outcome: "Exceeded client expectations on performance and scalability. Client awarded follow-up contracts to expand into the Nigerian, South African, and Ghanaian markets.",
      tech: ["Python", "Telegram Bot API", "Payment Webhooks", "RBAC", "PostgreSQL", "Cloud VPS"]
    },
    {
      id: "attorus",
      category: "ai",
      tag: "Enterprise AI & Lead Generation",
      status: "Live in Production",
      statusColor: "#10b981",
      title: "Attorus AI — High-Conversion Lead Qualification Pipeline",
      role: "AI Model Engineer & RAG Pipeline Developer",
      client: "Ken (Hong Kong)",
      preview: "attorus",
      url: "attorus.com/demo/attorus",
      link: "https://www.attorus.com/demo/attorus",
      linkText: "Test Live Production Bot",
      metrics: [
        { label: "Lead Response Time", val: "Instant (< 2s)" },
        { label: "Pipeline", val: "Context-Aware RAG" },
        { label: "Status", val: "Client Outbound Active" }
      ],
      challenge: "Attorus needed an outbound and inbound AI conversational system capable of qualifying B2B prospects, answering technical queries without hallucination, and converting leads with a natural human tone.",
      solution: "Trained and refined prompt engineering pipelines, integrated structured knowledge retrieval (RAG), and created multi-turn conversation guardrails for conversion-focused lead capture.",
      outcome: "Directly deployed into client outbound operations. Received top testimonial for clear communication, prompt milestone deliveries, and ongoing AI collaboration.",
      tech: ["LLMs", "RAG Pipelines", "Prompt Engineering", "Python", "Vector Embeddings", "REST API"]
    },
    {
      id: "legal",
      category: "ai",
      tag: "Deep Tech & Graph Retrieval",
      status: "Validated Architecture",
      statusColor: "#38bdf8",
      title: "Legal Advisor — Knowledge Graph Augmented Generation (XRAG)",
      role: "AI Architecture & Graph RAG Developer",
      client: "Specialized Legal AI Research",
      preview: "legal",
      url: "xrag-legal-engine.internal",
      link: "#contact",
      linkText: "Request Technical Case Study",
      metrics: [
        { label: "Retrieval Method", val: "Hybrid Graph + Vector" },
        { label: "Hallucination Rate", val: "Zero Grounded" },
        { label: "Graph Engine", val: "Neo4j Multi-Hop" }
      ],
      challenge: "Standard vector RAG fails on legal frameworks because statutes depend on complex hierarchical relationships (case law precedent, constitutional hierarchies, jurisdiction clauses).",
      solution: "Designed an Extended RAG (XRAG) architecture combining Neo4j knowledge graphs with vector embeddings. Queries traverse legal graph relationships before passing verified citations to the LLM.",
      outcome: "Produced a reliable, citation-backed legal consultation pipeline that answers complex questions with verified precedent authority and zero ungrounded claims.",
      tech: ["Neo4j Graph DB", "LangChain", "Vector DB", "Python", "FastAPI", "Cypher Queries"]
    },
    {
      id: "fullstack-saas",
      category: "saas",
      tag: "Full-Stack Web Development",
      status: "Scalable Architecture",
      statusColor: "#818cf8",
      title: "Modern Full-Stack Web Application & SaaS Engine",
      role: "Full-Stack Software Engineer",
      client: "Enterprise Web Services",
      preview: "saas",
      url: "saas-core.aftab.dev",
      link: "#contact",
      linkText: "Inquire About Web Build",
      metrics: [
        { label: "Frontend", val: "React 19 & Modern CSS" },
        { label: "Backend API", val: "FastAPI / Django REST" },
        { label: "Deployment", val: "Vercel & Docker Container" }
      ],
      challenge: "International businesses often need modern, high-speed web apps that combine responsive interactive frontends with rock-solid backend authentication, databases, and third-party API integrations.",
      solution: "Engineered scalable web applications featuring React frontends, robust RESTful APIs, JWT/OAuth authentication, database schema design, and seamless deployment pipelines.",
      outcome: "Production-ready architectures built for speed, SEO, cross-browser compatibility, and zero-downtime updates.",
      tech: ["React 19", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding section-light">
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            <Sparkles size={15} /> Real Client Engineering & Case Studies
          </div>
          
          <h2 className="section-title">Featured Production Work</h2>
          <p className="section-subtitle">
            Deep-dive case studies showcasing technical ownership, business problems solved, and measurable client results.
          </p>

          {/* Filter Pills */}
          <div style={{ 
            display: 'inline-flex', 
            gap: '0.5rem', 
            padding: '0.4rem', 
            borderRadius: '999px', 
            background: 'var(--bg-card)', 
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(12px)'
          }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: filter === 'all' ? 'linear-gradient(135deg, #38bdf8, #2563eb)' : 'transparent',
                color: filter === 'all' ? '#fff' : 'var(--text-muted)'
              }}
            >
              All Systems ({featuredProjects.length})
            </button>
            <button
              onClick={() => setFilter('saas')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: filter === 'saas' ? 'linear-gradient(135deg, #38bdf8, #2563eb)' : 'transparent',
                color: filter === 'saas' ? '#fff' : 'var(--text-muted)'
              }}
            >
              Web & SaaS Platforms
            </button>
            <button
              onClick={() => setFilter('ai')}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: filter === 'ai' ? 'linear-gradient(135deg, #38bdf8, #2563eb)' : 'transparent',
                color: filter === 'ai' ? '#fff' : 'var(--text-muted)'
              }}
            >
              AI & RAG Systems
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-row animate-fade-up" 
              style={{ 
                animationDelay: `${index * 100}ms`, 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '3.5rem',
                alignItems: 'center'
              }}
            >
              
              {/* Visual Mockup Column */}
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <ProjectMockup type={project.preview} title={project.title} url={project.url} />
                
                {/* 3 Metric Pills beneath mockup */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '0.75rem', 
                  marginTop: '1rem' 
                }}>
                  {project.metrics.map((m, mi) => (
                    <div key={mi} style={{
                      padding: '0.65rem 0.75rem',
                      borderRadius: '0.75rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{m.label}</div>
                      <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text & Case Study Breakdown Column */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                
                {/* Top Status & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.65rem', 
                    borderRadius: '999px', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-color)', 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)',
                    fontWeight: 600
                  }}>
                    {project.tag}
                  </span>
                  
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: project.statusColor
                  }}>
                    <span className="pulse-dot" style={{ background: project.statusColor, width: '6px', height: '6px' }}></span>
                    {project.status}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 style={{ 
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.15rem)', 
                  color: 'var(--text-main)', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {project.role} {project.client && `• Client: ${project.client}`}
                </p>

                {/* Structured 3-Part Case Study Box */}
                <div style={{ 
                  background: 'var(--bg-card)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '1.15rem', 
                  padding: '1.35rem', 
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(12px)'
                }}>
                  <div style={{ marginBottom: '0.85rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      🎯 The Challenge
                    </strong>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {project.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      ⚙️ The Architecture
                    </strong>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      📈 Business Outcome
                    </strong>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                  {project.tech.map((t, ti) => (
                    <span 
                      key={ti} 
                      style={{ 
                        padding: '0.3rem 0.8rem', 
                        borderRadius: '9999px', 
                        background: 'rgba(56, 189, 248, 0.08)', 
                        color: '#7dd3fc', 
                        fontSize: '0.8rem', 
                        fontWeight: 500,
                        border: '1px solid rgba(56, 189, 248, 0.2)' 
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTA Button */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {project.link.startsWith("http") ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      {project.linkText} <ExternalLink size={18} />
                    </a>
                  ) : (
                    <a 
                      href={project.link} 
                      className="btn btn-secondary"
                    >
                      {project.linkText} <ArrowRight size={18} />
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
      
      <style>{`
        @media (max-width: 860px) {
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
