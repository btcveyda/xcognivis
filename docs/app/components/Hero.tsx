import type { FC } from 'react';

const Hero: FC = () => (
  <section
    id="home"
    aria-label="XcogniVis — Intelligent Systems Hero"
    style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 5vw 80px',
      overflow: 'hidden',
      zIndex: 1,
    }}
  >
    {/* Subtle background effects */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        top: '50%',
        left: '10%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }}
    />

    {/* Main content - Centered */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid var(--border-accent)',
          background: 'rgba(37,99,235,0.05)',
          padding: '8px 16px',
          borderRadius: '20px',
          marginBottom: '24px',
          animation: 'fadeUp 0.6s ease both',
        }}
      >
        <span
          className="animate-pulse-dot"
          aria-hidden="true"
          style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }}
        />
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--blue)' }}>
          Intelligent Systems & AI Solutions
        </span>
      </div>

      {/* H1 */}
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-1px',
          marginBottom: '24px',
          fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
          animation: 'fadeUp 0.7s 0.1s ease both',
        }}
      >
        <span style={{ display: 'block', color: 'var(--text-primary)' }}>Empower Your Business</span>
        <span className="gradient-text" style={{ display: 'block' }}>with Intelligent Technology</span>
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        marginBottom: '40px',
        lineHeight: 1.8,
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeUp 0.8s 0.2s ease both',
      }}>
        We design and deploy cutting-edge AI, machine learning, and full-stack solutions. From concept to production, we build systems that scale.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeUp 0.9s 0.3s ease both' }}>
        <a href="#services" className="btn-primary" aria-label="Explore XcogniVis services">Explore Services</a>
        <a href="#about"    className="btn-outline"  aria-label="Learn about XcogniVis">Learn More</a>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: 'clamp(24px, 4vw, 60px)',
        marginTop: '80px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animation: 'fadeUp 1s 0.4s ease both',
      }}>
        {[
          { num: '10+', label: 'Years Experience' },
          { num: 'AI', label: 'Powered Solutions' },
          { num: '∞', label: 'Scalable' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--blue)', marginBottom: '4px' }}>{s.num}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;