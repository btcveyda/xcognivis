import type { FC } from 'react';

type IconVariant = 'icon-blue' | 'icon-purple' | 'icon-cyan';

interface Service {
  icon: string;
  iconVariant: IconVariant;
  title: string;
  description: string;
  tag: string;
  delay: string;
}

const services: Service[] = [
  { icon: '🤖', iconVariant: 'icon-blue',   title: 'AI Solutions',  description: 'Custom AI systems, NLP, computer vision, and AI-powered automation to solve real business challenges.',                                       tag: 'AI',    delay: '0s'    },
  { icon: '📊', iconVariant: 'icon-purple', title: 'Machine Learning',  description: 'ML models, predictive analytics, and data-driven systems trained, evaluated, and deployed for impact.',                                       tag: 'ML',         delay: '0.05s' },
  { icon: '🔬', iconVariant: 'icon-cyan',   title: 'Data Science',             description: 'Data wrangling, exploratory analysis, statistical modeling, and predictive analytics end-to-end.',                                               tag: 'Data',       delay: '0.1s'  },
  { icon: '💻', iconVariant: 'icon-blue',   title: 'Full-Stack Dev',   description: 'Scalable web applications with React, Node.js, Python — from frontend to robust backends.',                                        tag: 'Backend',       delay: '0.15s' },
  { icon: '📱', iconVariant: 'icon-purple', title: 'Mobile Apps',      description: 'Native and cross-platform mobile applications for iOS and Android with excellent UX.',                                                         tag: 'Mobile',          delay: '0.2s'  },
  { icon: '🗄️', iconVariant: 'icon-cyan',   title: 'Database Design',    description: 'Optimised relational and NoSQL database architecture, migration, and performance tuning.',                                              tag: 'Database',     delay: '0.25s' },
  { icon: '📈', iconVariant: 'icon-blue',   title: 'Business Intelligence',    description: 'Interactive dashboards, KPI frameworks, and BI solutions powered by Power BI and Tableau.',                                       tag: 'BI', delay: '0.3s'  },
  { icon: '☁️', iconVariant: 'icon-purple', title: 'Cloud & DevOps',           description: 'Deployment pipelines, CI/CD, containerisation, and cloud infrastructure on AWS, Azure, GCP.',                                                   tag: 'Cloud',     delay: '0.35s' },
];

const Services: FC = () => (
  <section
    id="services"
    aria-labelledby="services-heading"
    className="services-section"
  >
    <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
      <p className="section-tag">What We Do</p>

      <h2 id="services-heading" className="section-heading">
        Our <span className="gradient-text-blue-purple">Core Services</span>
      </h2>

      <div className="services-grid" role="list" aria-label="XcogniVis service offerings">
        {services.map((service) => (
          <article
            key={service.title}
            className={`service-card reveal`}
            style={{ transitionDelay: service.delay }}
            role="listitem"
            aria-label={service.title}
          >
            <div className={`${service.iconVariant}`} style={{ width: 48, height: 48, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '16px' }} aria-hidden="true">
              {service.icon}
            </div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {service.description}
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '12px',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--blue)',
              border: '1px solid var(--border-accent)',
              padding: '4px 10px',
              borderRadius: '4px',
              background: 'rgba(37,99,235,0.05)',
            }}>
              {service.tag}
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
