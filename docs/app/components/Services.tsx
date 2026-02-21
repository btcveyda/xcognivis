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
  { icon: '🤖', iconVariant: 'icon-blue',   title: 'Artificial Intelligence',  description: 'Custom AI systems, NLP solutions, computer vision pipelines, and conversational agents built to solve real business challenges.',                                       tag: 'AI Solutions',    delay: '0s'    },
  { icon: '📊', iconVariant: 'icon-purple', title: 'Machine & Deep Learning',  description: 'Predictive models, neural networks, and advanced ML pipelines — trained, evaluated, and deployed for maximum accuracy and impact.',                                       tag: 'ML / DL',         delay: '0.05s' },
  { icon: '🔬', iconVariant: 'icon-cyan',   title: 'Data Science',             description: 'From raw data to rich insights — we handle data wrangling, EDA, statistical modelling, and predictive analytics end-to-end.',                                               tag: 'Analytics',       delay: '0.1s'  },
  { icon: '💻', iconVariant: 'icon-blue',   title: 'Full-Stack Development',   description: 'Scalable web applications built with modern stacks — React, Node.js, Python — from sleek frontends to robust server architectures.',                                        tag: 'Web & API',       delay: '0.15s' },
  { icon: '📱', iconVariant: 'icon-purple', title: 'Android Engineering',      description: 'Native and cross-platform Android applications designed for performance, usability, and seamless user experiences.',                                                         tag: 'Mobile',          delay: '0.2s'  },
  { icon: '🗄️', iconVariant: 'icon-cyan',   title: 'Database Architecture',    description: 'Optimised relational and non-relational database design, migration, performance tuning, and cloud-ready data infrastructure.',                                              tag: 'SQL / NoSQL',     delay: '0.25s' },
  { icon: '📈', iconVariant: 'icon-blue',   title: 'Business Intelligence',    description: 'Interactive dashboards, KPI frameworks, and BI solutions that turn data into decisions — powered by tools like Power BI and Tableau.',                                       tag: 'BI & Dashboards', delay: '0.3s'  },
  { icon: '☁️', iconVariant: 'icon-purple', title: 'Cloud & DevOps',           description: 'Deployment pipelines, containerisation, CI/CD, and cloud infrastructure on AWS, Azure, and GCP — scalable from day one.',                                                   tag: 'Cloud-Ready',     delay: '0.35s' },
  { icon: '🎯', iconVariant: 'icon-cyan',   title: 'Digital Consulting',       description: 'Technology strategy, digital transformation roadmaps, and AI readiness assessments — helping you make the right move at the right time.',                                    tag: 'Strategy',        delay: '0.4s'  },
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
            <div className={`${service.iconVariant}`} style={{ width: 50, height: 50, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }} aria-hidden="true">
              {service.icon}
            </div>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '1px', color: '#f0f4ff', marginBottom: '10px' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '0.87rem', color: '#8899bb', lineHeight: 1.65 }}>
              {service.description}
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '16px',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#00d4ff',
              border: '1px solid rgba(0,212,255,0.2)',
              padding: '3px 10px',
              borderRadius: '2px',
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
