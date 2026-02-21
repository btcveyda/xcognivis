'use client';

import { useState, useRef, useEffect, type FC } from 'react';

const SERVICE_CATEGORIES = [
  { title: 'Artificial Intelligence', items: ['AI Strategy & Consulting','AI Model Design & Architecture','Custom AI Solution Development','AI Model Training & Fine-Tuning','AI Model Evaluation & Benchmarking','AI Integration into Existing Systems','AI-Powered Automation','Computer Vision Solution','AI Ethics & Bias Auditing'] },
  { title: 'Machine Learning', items: ['Supervised Learning Models','Unsupervised Learning / Clustering','Reinforcement Learning','Feature Engineering & Selection','ML Pipeline Development','Model Deployment (MLOps)','Model Monitoring & Retraining','AutoML Implementation','Transfer Learning'] },
  { title: 'Deep Learning & Neural Networks', items: ['Convolutional Neural Networks (CNN)','Recurrent Neural Networks (RNN/LSTM)','Transformer Models (BERT, GPT etc.)','Generative AI (GANs, Diffusion Models)','Custom Neural Architecture Design','Deep Learning for Image Recognition','Deep Learning for Time Series','Neural Network Optimisation'] },
  { title: 'NLP & Conversational AI', items: ['Natural Language Processing (NLP)','Text Classification & Sentiment Analysis','Named Entity Recognition (NER)','Document Understanding & Extraction','Language Model Fine-Tuning','Custom Chatbot Development','Voice Assistant / Speech-to-Text','Multilingual NLP Systems','Question Answering Systems'] },
  { title: 'Android & Mobile Development', items: ['Native Android App (Kotlin)','Android UI/UX Design','API Integration in Mobile App','Mobile App Testing & QA','Google Play Store Publishing','Push Notification System','Offline-First Mobile App','Mobile Analytics Integration'] },
  { title: 'Full-Stack Web Development', items: ['Frontend Development (React / Next.js)','Backend API Development (Python / Node.js)','Admin Dashboard / Portal','E-Commerce Web Application','Progressive Web App (PWA)','REST API Development','GraphQL API Development','Authentication & Authorization System','Third-Party API Integration','Web Performance Optimisation'] },
  { title: 'Database Design & Management', items: ['Database Architecture Design','Entity-Relationship (ER) Modelling','Relational Database Development (PostgreSQL / MySQL)','NoSQL Database Development (MongoDB / Firestore)','Database Migration & Upgrade','Database Performance Optimisation','Database Security & Access Control','Backup & Recovery Planning','Database Administration (DBA) Services','Data Modelling & Schema Design'] },
  { title: 'Data Science & Analytics', items: ['Exploratory Data Analysis (EDA)','Statistical Analysis & Modelling','Predictive Modelling','Sales Prediction System','Demand Forecasting','Customer Segmentation','Churn Prediction','Anomaly Detection','A/B Testing & Experiment Design','Data Cleaning & Preprocessing'] },
  { title: 'Data Engineering', items: ['ETL Pipeline Development','Data Warehouse Design & Build','Data Lake Architecture','Real-Time Streaming (Kafka / Spark)','Cloud Data Infrastructure (AWS / GCP / Azure)','Data Governance Framework','Data Quality Management','Data Catalog Implementation'] },
  { title: 'Data Visualisation & BI', items: ['Interactive Dashboard Development','Power BI / Tableau Implementation','Custom Visualisation with Python (Plotly / D3.js)','Executive KPI Reports & Scorecards','Business Intelligence Platform Setup','Real-Time Analytics Dashboard','Data Storytelling & Report Design','Google Looker Studio Integration'] },
  { title: 'Recommendation Systems', items: ['Product Recommendation Engine','Content-Based Filtering','Collaborative Filtering','Hybrid Recommendation System','Real-Time Recommendation API','Personalisation Engine','Search Ranking & Optimisation'] },
  { title: 'Software Maintenance & Consultation', items: ['Legacy System Audit & Review','Code Review & Quality Assessment','Technical Debt Reduction','Software Performance Tuning','Security Vulnerability Assessment','Bug Fixing & Patch Management','Software Architecture Consultation','Technology Stack Advisory','CI/CD Pipeline Setup (DevOps)','Cloud Migration Consultation'] },
];

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(c => c.items.map(i => ({ cat: c.title, item: i })));

const SOCIAL_LINKS = [
  { label: 'Facebook',    href: 'https://facebook.com', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { label: 'X', href: 'https://x.com', isX: true },
  { label: 'YouTube',     href: 'https://youtube.com',  iconEl: 'youtube' },
  { label: 'LinkedIn',    href: 'https://linkedin.com', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Upwork',      href: 'https://upwork.com',   iconEl: 'upwork' },
  { label: 'TikTok',      href: 'https://tiktok.com',   iconEl: 'tiktok' },
];

const HUB_LINKS = [
  { label: 'GitHub',         href: 'https://github.com',        icon: 'gh' },
  { label: 'Kaggle',         href: 'https://kaggle.com',        icon: 'kg' },
  { label: 'HuggingFace',    href: 'https://huggingface.co',    icon: 'hf' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com', icon: 'so' },
  { label: 'Dev.to',         href: 'https://dev.to',            icon: 'dt' },
];

const PROJECTS = [
  { status: 'live',      label: 'Live',                color: '#00d4ff', dotColor: '#00ff88', items: ['XcogniVis.com Platform', 'AI Chatbot Suite v1'] },
  { status: 'completed', label: 'Completed \u00b7 Staging', color: '#b44de8', dotColor: '#b44de8', items: ['Client BI Dashboard', 'NLP Sentiment Engine'] },
  { status: 'progress',  label: 'In Progress',         color: '#1e7de0', dotColor: '#ffd700', items: ['Mobile AI Assistant', 'Recommendation API', 'Data Lake Infra'] },
  { status: 'paused',    label: 'On Hold',             color: '#8899bb', dotColor: '#ff6b6b', items: ['AutoML Platform', 'Real-Time Stream App'] },
];

const contactStyle: React.CSSProperties = { fontSize: '0.78rem', color: '#8899bb', textDecoration: 'none', fontFamily: "'Rajdhani', sans-serif", display: 'block', lineHeight: 1.6, transition: 'color 0.2s' };

const FooterLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ fontSize: '0.65rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#00d4ff', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, marginBottom: 2 }}>{children}</p>
);

const SocialIcon: FC<{ s: typeof SOCIAL_LINKS[0] }> = ({ s }) => {
  if (s.isX) return <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>;
  if (s.iconEl === 'youtube') return <><rect x="2" y="7" width="20" height="14" rx="3" ry="3"/><polygon points="10 12 16 14 10 16 10 12" fill="currentColor" stroke="none"/></>;
  if (s.iconEl === 'upwork') return <><circle cx="12" cy="12" r="10"/><path d="M8 12c1.5-2 3.5-3 4-3 1.5 0 2 1 2 2s-.5 3-2 4c-1 .7-2.5.5-3.5-.5" strokeWidth="1.5" fill="none"/><path d="M16 9l-1 6" strokeWidth="1.5"/></>;
  if (s.iconEl === 'tiktok') return <><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" fill="none" strokeWidth="2"/></>;
  return <path d={s.icon}/>;
};

const HubIcon: FC<{ icon: string }> = ({ icon }) => {
  if (icon === 'gh') return <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>;
  if (icon === 'kg') return <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>;
  if (icon === 'hf') return <><circle cx="12" cy="12" r="10"/><path d="M8 13s1 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeWidth="2" strokeLinecap="round"/></>;
  if (icon === 'so') return <><rect x="5" y="14" width="14" height="2"/><path d="M7.5 17v4h9v-4M9 14l.5-7 5.5 1-.5 6"/></>;
  return <><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M8 12h.01M12 9v6M16 10c1 0 2 .9 2 2s-1 2-2 2"/></>;
};

const SearchBar: FC<{ placeholder: string; data: { cat: string; item: string }[]; compact?: boolean }> = ({ placeholder, data, compact }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ cat: string; item: string }[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  const search = (q: string) => {
    setQuery(q);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    setResults(data.filter(d => d.item.toLowerCase().includes(q.toLowerCase()) || d.cat.toLowerCase().includes(q.toLowerCase())).slice(0, 8));
    setOpen(true);
  };
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 4, padding: compact ? '6px 12px' : '9px 16px' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input value={query} onChange={e => search(e.target.value)} placeholder={placeholder} style={{ background: 'none', border: 'none', outline: 'none', color: '#c8d4e8', fontSize: compact ? '0.75rem' : '0.82rem', width: '100%', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px' }} />
        {query && <button onClick={() => { setQuery(''); setResults([]); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#8899bb', cursor: 'pointer', padding: 0, fontSize: 14 }}>&#10005;</button>}
      </div>
      {open && results.length > 0 && (
        <div style={{ position: 'absolute', bottom: '110%', left: 0, right: 0, background: 'rgba(4,8,20,0.98)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 4, zIndex: 9999, maxHeight: 260, overflowY: 'auto', backdropFilter: 'blur(20px)' }}>
          {results.map((r, i) => (
            <div key={i} style={{ padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,255,0.08)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ fontSize: '0.78rem', color: '#f0f4ff', fontFamily: "'Rajdhani', sans-serif" }}>{r.item}</div>
              <div style={{ fontSize: '0.65rem', color: '#00d4ff', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 2 }}>{r.cat}</div>
            </div>
          ))}
        </div>
      )}
      {open && results.length === 0 && query && (
        <div style={{ position: 'absolute', bottom: '110%', left: 0, right: 0, background: 'rgba(4,8,20,0.98)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 4, padding: '12px 14px', zIndex: 9999 }}>
          <span style={{ fontSize: '0.78rem', color: '#8899bb', fontFamily: "'Rajdhani', sans-serif" }}>No results for &ldquo;{query}&rdquo;</span>
        </div>
      )}
    </div>
  );
};

const ServicesPanel: FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [servSearch, setServSearch] = useState('');
  const [openUpward, setOpenUpward] = useState(true);
  const [openLeftward, setOpenLeftward] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const openPanel = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      // Vertical: open upward only if enough space above
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpward(spaceAbove > 440 || spaceAbove > spaceBelow);

      // Horizontal: panel is 660px wide — open leftward if not enough space to the right
      const spaceRight = window.innerWidth - rect.left;
      setOpenLeftward(spaceRight < 680);
    }
    setActive(SERVICE_CATEGORIES[0].title);
  };

  const closePanel = () => {
    setActive(null);
    setServSearch('');
  };

  const filtered = active
    ? SERVICE_CATEGORIES.find(c => c.title === active)?.items.filter(i =>
        servSearch ? i.toLowerCase().includes(servSearch.toLowerCase()) : true
      ) ?? []
    : [];

  return (
    <div ref={triggerRef} style={{ position: 'relative' }}>

      {/* ── Trigger button ── */}
      <button
        style={{
          background: 'none',
          border: '1px solid rgba(0,212,255,0.25)',
          borderRadius: 3,
          padding: '7px 16px',
          color: '#00d4ff',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.88rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => { openPanel(); e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
      >
        <span>▤</span> Browse Services
      </button>

      {/* ── Mega panel ── */}
      {active !== null && (
        <div
          style={{
            position: 'absolute',
            // Vertical positioning
            ...(openUpward ? { bottom: '110%', top: 'auto' } : { top: '110%', bottom: 'auto' }),
            // Horizontal positioning
            ...(openLeftward ? { right: 0, left: 'auto' } : { left: 0, right: 'auto' }),
            zIndex: 9999,
            display: 'flex',
            // Flip column order when opening leftward so items pane is always on the visible/inner side
            flexDirection: openLeftward ? 'row-reverse' : 'row',
            background: 'rgba(4,8,20,0.99)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 6,
            boxShadow: openUpward
              ? '0 -20px 60px rgba(0,0,0,0.8)'
              : '0 20px 60px rgba(0,0,0,0.8)',
            width: 660,
            backdropFilter: 'blur(24px)',
          }}
          onMouseLeave={closePanel}
        >
          {/* ── Category list ── */}
          <div style={{
            width: 220,
            // Divider border always between the two panes
            borderRight: openLeftward ? 'none' : '1px solid rgba(0,212,255,0.1)',
            borderLeft:  openLeftward ? '1px solid rgba(0,212,255,0.1)' : 'none',
            padding: '14px 0',
            flexShrink: 0,
          }}>
            <div style={{
              padding: '4px 16px 12px',
              fontSize: '0.72rem',
              letterSpacing: '2px',
              color: '#8899bb',
              textTransform: 'uppercase',
              fontFamily: "'Rajdhani', sans-serif",
            }}>
              Categories
            </div>
            {SERVICE_CATEGORIES.map(cat => (
              <div
                key={cat.title}
                onMouseEnter={() => { setActive(cat.title); setServSearch(''); }}
                style={{
                  padding: '9px 16px',
                  fontSize: '0.84rem',
                  color: active === cat.title ? '#00d4ff' : '#8899bb',
                  background: active === cat.title ? 'rgba(0,212,255,0.07)' : 'transparent',
                  cursor: 'default',
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: '0.5px',
                  // Active indicator bar flips to match layout direction
                  borderLeft:  !openLeftward ? (active === cat.title ? '2px solid #00d4ff' : '2px solid transparent') : 'none',
                  borderRight:  openLeftward ? (active === cat.title ? '2px solid #00d4ff' : '2px solid transparent') : 'none',
                  transition: 'all 0.15s',
                }}
              >
                {cat.title}
              </div>
            ))}
          </div>

          {/* ── Service items ── */}
          <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Filter input */}
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(0,212,255,0.05)',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: 3, padding: '6px 12px', marginBottom: 10,
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  value={servSearch}
                  onChange={e => setServSearch(e.target.value)}
                  placeholder="Filter services…"
                  style={{
                    background: 'none', border: 'none', outline: 'none',
                    color: '#c8d4e8', fontSize: '0.82rem',
                    width: '100%', fontFamily: "'Rajdhani', sans-serif",
                  }}
                />
                {servSearch && (
                  <button
                    onClick={() => setServSearch('')}
                    style={{ background: 'none', border: 'none', color: '#8899bb', cursor: 'pointer', padding: 0, fontSize: 13 }}
                  >✕</button>
                )}
              </div>
              <div style={{
                fontSize: '0.72rem',
                letterSpacing: '2px',
                color: '#00d4ff',
                textTransform: 'uppercase',
                fontFamily: "'Rajdhani', sans-serif",
                marginBottom: 8,
              }}>
                {active}
              </div>
            </div>

            {/* Items */}
            <div style={{ overflowY: 'auto', maxHeight: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {filtered.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '6px 10px', borderRadius: 3, cursor: 'default', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,255,0.07)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{ color: '#b44de8', fontSize: '0.65rem', flexShrink: 0 }}>■</span>
                  <span style={{ fontSize: '0.86rem', color: '#c8d4e8', fontFamily: "'Rajdhani', sans-serif" }}>{item}</span>
                </div>
              ))}
              {filtered.length === 0 && (
                <span style={{ fontSize: '0.84rem', color: '#8899bb', fontFamily: "'Rajdhani', sans-serif" }}>No matches</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const CTABanner: FC = () => (
  <div style={{ padding: '0 5vw 80px', position: 'relative', zIndex: 1 }}>
    <div id="contact" className="reveal" style={{ padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(0,212,255,0.15)', background: 'linear-gradient(135deg, #0d1829, rgba(30,125,224,0.1), rgba(139,47,201,0.12), #111e33)', width: '100%' }} aria-labelledby="cta-heading">
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
      <h2 id="cta-heading" style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', marginBottom: '16px', color: '#f0f4ff' }}>
        Ready to Build Something{' '}
        <span style={{ background: 'linear-gradient(90deg, #1e7de0, #b44de8, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Intelligent?</span>
      </h2>
      <p style={{ color: '#8899bb', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7 }}>
        Let&apos;s turn your vision into a future-ready digital reality. Reach out and let&apos;s get to work.
      </p>
      <a href="mailto:hello@xcognivis.com" aria-label="Email XcogniVis to get started" style={{ background: 'linear-gradient(135deg, #1e7de0, #8b2fc9)', color: 'white', padding: '16px 40px', borderRadius: '3px', fontFamily: "'Rajdhani', sans-serif", fontSize: '0.95rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', boxShadow: '0 0 30px rgba(30,125,224,0.3)', transition: 'transform 0.2s, box-shadow 0.3s' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(30,125,224,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(30,125,224,0.3)'; }}>
        Contact Us &mdash; hello@xcognvis.com
      </a>
    </div>
  </div>
);

export const Footer: FC = () => (
  <footer role="contentinfo" style={{ position: 'relative', zIndex: 1, width: '100%', background: 'rgba(2,5,12,0.98)', borderTop: '1px solid rgba(0,212,255,0.12)' }}>
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 5vw', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8899bb', flexShrink: 0 }}>Site Search</span>
      <div style={{ flex: 1, minWidth: 240 }}><SearchBar placeholder="Search anything on XcogniVis..." data={ALL_SERVICES} /></div>
      <ServicesPanel />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, padding: '48px 5vw 36px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div style={{ background: 'white', borderRadius: 8, padding: 4, display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="XcogniVis Logo" width={44} height={44} style={{ display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: '1rem' }}>
            <span style={{ color: '#1e7de0' }}>X</span><span style={{ color: '#f0f4ff' }}>Cogn</span><span style={{ color: '#b44de8' }}>Vis</span><span style={{ color: '#00d4ff' }}>.com</span>
          </div>
        </div>
        <p style={{ fontSize: '0.78rem', color: '#8899bb', lineHeight: 1.8, marginBottom: 20, fontFamily: "'Rajdhani', sans-serif" }}>Intelligent systems built for the future. AI, ML, Data &amp; Full-Stack excellence &mdash; crafted with precision.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          <FooterLabel>Contact</FooterLabel>
          {['+254 112 554 165', '+254 724 704 865'].map(n => <a key={n} href={`tel:${n.replace(/\s/g,'')}`} style={contactStyle}>&#128222; {n}</a>)}
          <a href="mailto:wilfredaquila@gmail.com" style={contactStyle}>&#9993; wilfredaquila@gmail.com</a>
          <a href="https://xcognivs.com" target="_blank" rel="noreferrer" style={contactStyle}>&#127760; xcognivs.com</a>
        </div>
        <div style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 4, padding: '10px 14px', marginBottom: 20 }}>
          <FooterLabel>Support Helpline</FooterLabel>
          <p style={{ fontSize: '0.75rem', color: '#8899bb', fontFamily: "'Rajdhani', sans-serif", margin: '4px 0 6px' }}>Mon&ndash;Fri &middot; 08:00&ndash;18:00 EAT</p>
          <a href="tel:+254112554165" style={{ color: '#00d4ff', fontFamily: "'Orbitron', monospace", fontSize: '0.85rem', textDecoration: 'none', fontWeight: 700 }}>+254 112 554 165</a>
        </div>
      </div>
      <div>
        <FooterLabel>Follow Us</FooterLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28, marginTop: 12 }}>
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              style={{ width: 38, height: 38, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', color: '#8899bb', transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4ff'; e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#8899bb'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><SocialIcon s={s} /></svg>
            </a>
          ))}
        </div>
        <FooterLabel>Developer Hubs</FooterLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
          {HUB_LINKS.map(h => (
            <a key={h.label} href={h.href} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#8899bb', textDecoration: 'none', fontSize: '0.8rem', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b44de8')} onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><HubIcon icon={h.icon} /></svg>
              {h.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <FooterLabel>Our Projects</FooterLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 12 }}>
          {PROJECTS.map(group => (
            <div key={group.status}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: group.dotColor, display: 'inline-block', boxShadow: `0 0 6px ${group.dotColor}` }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: group.color, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>{group.label}</span>
              </div>
              {group.items.map(p => (
                <div key={p} style={{ fontSize: '0.78rem', color: '#8899bb', fontFamily: "'Rajdhani', sans-serif", paddingLeft: 14, marginBottom: 4, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: group.color, fontSize: '0.6rem' }}>&#9656;</span>{p}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <FooterLabel>Quick Links</FooterLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, marginBottom: 28 }}>
          {['Home', 'About', 'Services', 'Projects', 'Blog', 'Careers', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: '0.8rem', color: '#8899bb', textDecoration: 'none', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0f4ff')} onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}>
              <span style={{ color: '#1e7de0', fontSize: '0.55rem' }}>&#9670;</span>{l}
            </a>
          ))}
        </div>
        <FooterLabel>Search Services</FooterLabel>
        <div style={{ marginTop: 12 }}><SearchBar placeholder="Find a service..." data={ALL_SERVICES} compact /></div>
        <div style={{ marginTop: 20, padding: '12px 14px', background: 'rgba(180,77,232,0.06)', border: '1px solid rgba(180,77,232,0.2)', borderRadius: 4 }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#b44de8', fontFamily: "'Rajdhani', sans-serif", marginBottom: 6, fontWeight: 700 }}>Need a Custom Solution?</p>
          <a href="#contact" style={{ fontSize: '0.78rem', color: '#f0f4ff', fontFamily: "'Rajdhani', sans-serif", textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#b44de8')} onMouseLeave={e => (e.currentTarget.style.color = '#f0f4ff')}>Get in touch &rarr;</a>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(0,212,255,0.08)', padding: '18px 5vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
      <p style={{ fontSize: '0.75rem', color: '#8899bb', fontFamily: "'Rajdhani', sans-serif" }}>
        &copy; {new Date().getFullYear()} XcogniVis. All rights reserved. Founded by <span style={{ color: '#c8d4e8' }}>Wilfred Aquila</span>.
      </p>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
          <a key={l} href="#" style={{ fontSize: '0.72rem', color: '#8899bb', textDecoration: 'none', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')} onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}>{l}</a>
        ))}
      </div>
      <a href="#home" aria-label="Back to top" style={{ fontSize: '0.72rem', color: '#00d4ff', textDecoration: 'none', fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: 6 }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>Back to top &uarr;</a>
    </div>
  </footer>
);

export default Footer;