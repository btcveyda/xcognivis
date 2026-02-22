import type { FC } from 'react';

const values = [
  { icon: '⚡', title: 'Speed', desc: 'Rapid development and deployment of intelligent solutions.' },
  { icon: '🔒', title: 'Reliability', desc: 'Robust systems built to perform at scale.' },
  { icon: '🚀', title: 'Innovation', desc: 'Cutting-edge tech using latest AI and ML frameworks.' },
  { icon: '🤝', title: 'Partnership', desc: 'We collaborate closely to align with your goals.' },
];

const About: FC = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    style={{ position: 'relative', zIndex: 1, width: '100%' }}
  >
    <div className="section-inner">
      <p className="section-tag">Who We Are</p>

      <h2 id="about-heading" className="section-heading">
        Built to Think.<br />
        <span className="gradient-text-blue-purple">Engineered to Deliver.</span>
      </h2>

      <div className="about-grid">
        {/* Left — mission + values */}
        <div className="reveal">
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
            <p style={{ marginBottom: '20px' }}>
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>XcogniVis</strong> specializes in delivering intelligent, scalable, and future-ready digital solutions across AI, Machine Learning, Full-Stack Development, and Cloud Architecture.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We work with startups, enterprises, and individuals to transform complex technical challenges into elegant, production-ready solutions. From AI-powered automation to robust cloud infrastructure, we've got you covered.
            </p>
            <p>
              Whether you need a full system redesign or targeted improvements, our team brings both technical expertise and a pragmatic approach to solving real-world problems.
            </p>
          </div>

          <div className="values-grid" aria-label="Our core values">
            {values.map((v) => (
              <article key={v.title} className="value-item">
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }} aria-hidden="true">{v.icon}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right — Founder card */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <article className="founder-card" aria-label="Founder profile — Wilfred Aquila">
            <div
              aria-hidden="true"
              style={{
                width: 70, height: 70,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue), var(--purple))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '20px',
                border: '2px solid rgba(37,99,235,0.3)',
              }}
            >WA</div>

            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Wilfred Aquila
            </h3>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--blue)', marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>
              Founder & CEO
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Wilfred founded XcogniVis to bridge the gap between cutting-edge AI research and practical business solutions. With expertise across AI, cloud infrastructure, and full-stack development, he leads a team dedicated to building systems that matter.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default About;
