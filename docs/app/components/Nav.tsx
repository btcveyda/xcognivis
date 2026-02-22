'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        width: '100%',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 5vw', width: '100%', maxWidth: '1400px', margin: '0 auto',
        }}
      >
        {/* ── LOGO + NAME ── */}
        <Link
          href="#home"
          aria-label="XcogniVis Home"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
        >
          <div
            style={{
              height: '40px', width: '40px', borderRadius: '6px',
              background: 'linear-gradient(135deg, var(--blue), var(--purple))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', fontWeight: 700, color: 'white', flexShrink: 0,
            }}
          >
            X
          </div>
          <span style={{
            fontFamily: "'Poppins', sans-serif", fontSize: '1.1rem',
            fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1,
          }}>
            XcogniVis
          </span>
        </Link>

        {/* ── LINKS + TOGGLE ── */}
        <ul style={{
          display: 'flex', gap: '32px', listStyle: 'none',
          alignItems: 'center', margin: 0, padding: 0,
        }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-underline"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem', fontWeight: 500,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
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
              href="#services"
              aria-label="Get started with XcogniVis"
              className="btn-primary"
              style={{
                padding: '10px 20px', fontSize: '0.9rem',
              }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}