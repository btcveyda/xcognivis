import type { FC } from 'react';
import Image from 'next/image';

const circuitNodes = [
  { size: 8, color: '#00d4ff', opacity: 0.5, top: '20%', left: '4%',  delay: '0s'   },
  { size: 5, color: '#b44de8', opacity: 0.4, top: '70%', left: '3%',  delay: '1.5s' },
  { size: 4, color: '#00d4ff', opacity: 0.6, top: '80%', right: '4%', delay: '0.8s' },
  { size: 6, color: '#b44de8', opacity: 0.3, top: '50%', left: '18%', delay: '3s'   },
];

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
      padding: '120px 5vw 80px',
      overflow: 'hidden',
      zIndex: 1,
    }}
  >
    {/* Radial glow — anchored left */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: '70vw',
        height: '70vw',
        maxWidth: '800px',
        maxHeight: '800px',
        background: 'radial-gradient(circle, rgba(30,125,224,0.16) 0%, rgba(139,47,201,0.10) 50%, transparent 70%)',
        top: '50%',
        left: '25%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }}
    />

    {/* Floating circuit nodes */}
    {circuitNodes.map((node, i) => (
      <div
        key={i}
        aria-hidden="true"
        className="animate-float"
        style={{
          position: 'absolute',
          width: node.size,
          height: node.size,
          borderRadius: '50%',
          background: node.color,
          opacity: node.opacity,
          top: node.top,
          left: 'left' in node ? node.left : undefined,
          right: 'right' in node ? (node as { right: string }).right : undefined,
          animationDelay: node.delay,
        }}
      />
    ))}

    {/* ── TWO COLUMN LAYOUT ── */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      {/* ── LEFT — Text content ── */}
      <div>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(0,212,255,0.3)',
            background: 'rgba(0,212,255,0.06)',
            padding: '6px 18px',
            borderRadius: '2px',
            marginBottom: '32px',
            animation: 'fadeUp 0.8s ease both',
          }}
        >
          <span
            className="animate-pulse-dot"
            aria-hidden="true"
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block' }}
          />
          <span style={{ fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#00d4ff', fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
            Artificial Intelligence &amp; Intelligent Systems
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'Orbitron', monospace",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-1px',
            marginBottom: '24px',
            fontSize: 'clamp(2.2rem, 4.5vw, 5rem)',
            animation: 'fadeUp 0.9s 0.1s ease both',
          }}
        >
          <span style={{ display: 'block', color: '#f0f4ff' }}>Empowering the</span>
          <span style={{ display: 'block', color: '#f0f4ff' }}>Future with</span>
          <span className="gradient-text" style={{ display: 'block' }}>Intelligent Technology</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
          color: '#8899bb',
          maxWidth: '520px',
          marginBottom: '40px',
          lineHeight: 1.8,
          animation: 'fadeUp 1s 0.2s ease both',
        }}>
          We design, build, and deploy cutting-edge AI, Machine Learning, and full-stack
          digital solutions — crafted with precision, delivered with excellence.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeUp 1s 0.3s ease both' }}>
          <a href="#services" className="btn-primary" aria-label="Explore XcogniVis services">Explore Services</a>
          <a href="#about"    className="btn-outline"  aria-label="Meet the XcogniVis team">Meet the Team</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: 'clamp(24px, 4vw, 60px)',
          marginTop: '60px',
          flexWrap: 'wrap',
          animation: 'fadeUp 1s 0.4s ease both',
        }}>
          {[
            { num: 'AI+', label: 'Powered Solutions' },
            { num: '10+', label: 'Specialisations'   },
            { num: '∞',   label: 'Scalable Vision'   },
          ].map((s) => (
            <div key={s.label}>
              <p className="gradient-text-cyan-blue" style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)', fontWeight: 700 }}>{s.num}</p>
              <p style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8899bb', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Floating logo ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Outer glow ring behind logo */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '75%',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,125,224,0.2) 0%, rgba(139,47,201,0.15) 50%, transparent 75%)',
            animation: 'heroDance 8s ease-in-out infinite',
            filter: 'blur(20px)',
          }}
        />

        {/* The logo image */}
        <Image
          src="/logo.jpg"
          alt="XcogniVis Intelligent Systems Logo"
          width={780}
          height={780}
          priority
          style={{
            width: 'clamp(260px, 38vw, 480px)',
            height: 'auto',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 2,
            animation: 'heroDance 8s ease-in-out infinite',
            filter: 'drop-shadow(0 0 40px rgba(30,125,224,0.35)) drop-shadow(0 0 80px rgba(139,47,201,0.2))',
          }}
        />
      </div>
    </div>

    {/* ── HERO DANCE KEYFRAME (injected via style tag) ── */}
    <style>{`
      @keyframes heroDance {
        0%   { transform: translateY(0px)    rotate(0deg);   }
        25%  { transform: translateY(-18px)  rotate(1.5deg); }
        50%  { transform: translateY(-8px)   rotate(-1deg);  }
        75%  { transform: translateY(-22px)  rotate(2deg);   }
        100% { transform: translateY(0px)    rotate(0deg);   }
      }
    `}</style>
  </section>
);

export default Hero;