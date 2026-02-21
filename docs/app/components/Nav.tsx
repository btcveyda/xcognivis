'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home',     href: '#home'     },
    { label: 'About',    href: '#about'    },
    { label: 'Services', href: '#services' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: scrolled
          ? (isDark ? 'rgba(4,8,16,0.98)' : 'rgba(245,247,255,0.98)')
          : (isDark ? 'rgba(4,8,16,0.92)' : 'rgba(245,247,255,0.92)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isDark
          ? '1px solid rgba(0,212,255,0.15)'
          : '1px solid rgba(30,125,224,0.15)',
        boxShadow: scrolled
          ? (isDark ? '0 4px 30px rgba(0,0,0,0.6)' : '0 4px 30px rgba(0,0,0,0.1)')
          : 'none',
        transition: 'all 0.3s ease',
        width: '100%',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 5vw', width: '100%',
        }}
      >
        {/* ── LOGO + NAME ── */}
        <Link
          href="#home"
          aria-label="XcogniVis Home"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}
        >
          <Image
            src="/logo.svg"
            alt="XcogniVis Logo"
            width={60} height={60} priority
            style={{
            height: '60px', width: '60px', objectFit: 'contain', borderRadius: '8px',
            background: isDark ? 'white' : 'transparent',
            padding: isDark ? '3px' : '0px',
          }}
          />
          <span style={{
            fontFamily: "'Orbitron', monospace", fontSize: '1.2rem',
            fontWeight: 900, letterSpacing: '2px', lineHeight: 1,
          }}>
            <span style={{ color: '#1e7de0' }}>X</span>
            <span style={{ color: isDark ? '#f0f4ff' : '#0d1829' }}>Cogn</span>
            <span style={{ color: '#b44de8' }}>Vis</span>
            <span style={{ color: '#00d4ff' }}>.com</span>
          </span>
        </Link>

        {/* ── LINKS + TOGGLE ── */}
        <ul style={{
          display: 'flex', gap: '28px', listStyle: 'none',
          alignItems: 'center', margin: 0, padding: 0,
        }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-underline"
                style={{
                  color: isDark ? '#8899bb' : '#4a5568',
                  textDecoration: 'none',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '0.95rem', fontWeight: 600,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? '#00d4ff' : '#1565c0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#8899bb' : '#4a5568')}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* ── THEME TOGGLE ── */}
          <li>
            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>

          {/* ── GET STARTED ── */}
          <li>
            <a
              href="#contact"
              aria-label="Get started with XcogniVis"
              style={{
                background: 'linear-gradient(135deg, #1e7de0, #8b2fc9)',
                color: 'white', padding: '10px 24px', borderRadius: '3px',
                fontFamily: "'Rajdhani', sans-serif", fontSize: '0.9rem',
                fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none', display: 'inline-block',
                boxShadow: '0 0 20px rgba(30,125,224,0.3)', transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}