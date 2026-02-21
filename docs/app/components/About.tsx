import type { FC } from 'react';

const values = [
  { icon: '⚡', title: 'Precision',     desc: 'Every line of code, every model, every system — built with intentional exactness.' },
  { icon: '🔭', title: 'Future-Ready',  desc: 'Solutions designed to evolve, scale, and lead — not just keep up.' },
  { icon: '🤝', title: 'Partnership',   desc: "We don't deliver and disappear. We build alongside you." },
  { icon: '🧠', title: 'Intelligence',  desc: "AI isn't a buzzword here — it's the foundation of everything we create." },
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
          <div style={{ color: '#8899bb', lineHeight: 1.85, fontSize: '1rem' }}>
            <p style={{ marginBottom: '18px' }}>
              <strong style={{ color: '#f0f4ff', fontWeight: 600 }}>XcogniVis.com</strong> is a
              technology and intelligent systems company on a mission to redefine what&apos;s
              possible through the power of artificial intelligence and cutting-edge engineering.
            </p>
            <p style={{ marginBottom: '18px' }}>
              We specialise in delivering{' '}
              <strong style={{ color: '#f0f4ff', fontWeight: 600 }}>
                intelligent, scalable, and future-ready digital solutions
              </strong>{' '}
              across AI, Machine Learning, Deep Learning, Data Science, Full-Stack Software
              Development, Android Engineering, Database Architecture, Business Intelligence,
              and beyond.
            </p>
            <p>
              Whether you&apos;re a startup finding your footing, an enterprise scaling at speed,
              or an individual with a bold vision — XcogniVis crafts solutions that don&apos;t
              just work today, but are built for tomorrow.
            </p>
          </div>

          <div className="values-grid" aria-label="Our core values">
            {values.map((v) => (
              <article key={v.title} className="value-item">
                <div style={{ fontSize: '1.4rem', marginBottom: '8px' }} aria-hidden="true">{v.icon}</div>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px', color: '#f0f4ff', marginBottom: '4px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#8899bb', lineHeight: 1.55 }}>{v.desc}</p>
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
                background: 'linear-gradient(135deg, #0f4fa8, #8b2fc9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Orbitron', monospace",
                fontSize: '1.4rem',
                fontWeight: 900,
                color: 'white',
                marginBottom: '20px',
                border: '2px solid rgba(0,212,255,0.3)',
              }}
            >WA</div>

            <h3 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: '1.1rem', color: '#f0f4ff', marginBottom: '4px' }}>
              Wilfred Aquila
            </h3>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '20px', fontFamily: "'Rajdhani', sans-serif" }}>
              Founder &amp; CEO — XcogniVis.com
            </p>
            <p style={{ fontSize: '0.95rem', color: '#8899bb', lineHeight: 1.75 }}>
              Wilfred Aquila founded XcogniVis with a conviction that intelligent technology,
              when built right, can transform businesses and lives alike. Driven by a passion
              for AI, engineering, and purposeful innovation, he leads a team committed to
              building systems that are not just smart — but meaningful.
            </p>
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'rgba(136,153,187,0.7)', fontStyle: 'italic' }}>
              &ldquo;We don&apos;t just write code. We craft intelligence.&rdquo;
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default About;
