import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectPreview = ({ type, title }) => {
  if (type === "attorus") {
    return (
      <div className="project-preview attorus-preview" aria-label={title}>
        <div className="attorus-header">
          <div className="attorus-avatar">A</div>
          <div>
            <strong>Attorus</strong>
            <span>typically replies instantly</span>
          </div>
          <div className="attorus-refresh">R</div>
        </div>
        <div className="attorus-body">
          <div className="attorus-message">
            Hey, this is Tom from Attorus. Try the same bot we use for our own outbound.
          </div>
        </div>
        <div className="attorus-input">
          <span>Tell Attorus what you do for work</span>
          <button type="button" aria-label="Preview send">Go</button>
        </div>
      </div>
    );
  }

  if (type === "legal") {
    return (
      <div className="project-preview legal-preview" aria-label={title}>
        <div className="legal-topbar">
          <div className="legal-logo">LAW</div>
          <strong>Legal Advisor</strong>
          <span>Live & Ready</span>
        </div>
        <div className="legal-content">
          <div>
            <h4>Your Trusted Guide to Pakistani & Islamic Law</h4>
            <p>AI guidance for legal questions with RAG-backed context and structured answers.</p>
            <div className="legal-actions">
              <span>Try Demo</span>
              <span>Register Now</span>
            </div>
          </div>
          <div className="legal-chat">
            <p className="user-bubble">How do I file for Khula?</p>
            <p className="ai-bubble">Under Pakistani law, you can file for Khula in Family Court.</p>
            <small>AI is processing...</small>
          </div>
        </div>
      </div>
    );
  }

  if (type === "africa-baze") {
    return (
      <div className="project-preview africa-preview" aria-label={title}>
        <div className="africa-appbar">
          <div className="africa-logo">AB</div>
          <div>
            <strong>Africa Baze bot</strong>
            <span>Telegram content platform</span>
          </div>
          <div className="africa-menu">...</div>
        </div>
        <div className="africa-chat">
          <div className="africa-outgoing">/start</div>
          <div className="africa-panel">
            <strong>Africa Baze Dashboard</strong>
            <p>Where Africans Share African Stories</p>
          </div>
          <div className="africa-actions">
            <span>Browse</span>
            <span>Recommended</span>
            <span>Profile</span>
            <span>Wallet</span>
            <span>Creator Dashboard</span>
            <span>Admin Dashboard</span>
            <span>Moderator Dashboard</span>
          </div>
        </div>
        <div className="africa-input">
          <span>Message</span>
          <strong>mic</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview saas-preview" aria-label={title}>
      <div className="saas-window">
        <div className="saas-dots"><span></span><span></span><span></span></div>
        <div className="saas-grid">
          <div className="saas-chart"></div>
          <div className="saas-card"></div>
          <div className="saas-card wide"></div>
          <div className="saas-list"></div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "Africa Baze - Custom SaaS Platform",
      role: "Telegram Bot & Platform Developer",
      overview: "Built a Telegram-based content platform where creators publish African stories, normal users discover and watch content, paid content can be monetized, and admin/moderator roles manage platform operations.",
      tech: ["Telegram Bot", "Python", "Payments", "Role-Based Access"],
      link: "#",
      preview: "africa-baze"
    },
    {
      title: "Attorus AI - Lead Generation Bot",
      role: "AI Model Trainer & Prompt Engineer",
      overview: "Worked on an AI chatbot pipeline for lead generation and client communication, improving the assistant's response quality, tone, and conversion-focused conversation flow.",
      tech: ["LLMs", "RAG", "Prompt Engineering", "Python"],
      link: "https://www.attorus.com/demo/attorus",
      preview: "attorus"
    },
    {
      title: "Legal Advisor using XRAG",
      role: "AI Developer",
      overview: "A legal AI assistant using Extended RAG, Neo4j knowledge graphs, and vector embeddings to retrieve context and answer legal queries with stronger reasoning paths.",
      tech: ["LangChain", "Neo4j", "Python", "Vector DB"],
      link: "#",
      preview: "legal"
    }
  ];

  return (
    <section id="projects" className="section-padding section-light">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Selected client and AI projects with clear technical ownership and business context.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="project-row animate-fade-up" style={{ 
              animationDelay: `${index * 100}ms`, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '3rem',
              alignItems: 'center'
            }}>
              
              {/* Image Column */}
              <div className="project-media" style={{ 
                order: index % 2 === 0 ? 1 : 2, 
                borderRadius: '1.5rem', 
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                <ProjectPreview type={project.preview} title={project.title} />
              </div>

              {/* Text Column */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.125rem', marginBottom: '1.5rem' }}>{project.role}</p>
                
                <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.overview}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', fontSize: '0.875rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View Project <ExternalLink size={20} />
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)', borderRadius: '9999px', padding: '0.875rem 1.25rem', fontWeight: 600 }}>
                      Case study available on request
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .project-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
};
export default Projects;
