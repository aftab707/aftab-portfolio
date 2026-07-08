import React from 'react';

const Stats = () => {
  const stats = [
    { value: "2+", label: "Client Projects Delivered" },
    { value: "15+", label: "Projects Built" },
    { value: "3", label: "Core Service Areas" },
    { value: "2", label: "International Client Regions" }
  ];

  return (
    <section className="section-padding section-light" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
