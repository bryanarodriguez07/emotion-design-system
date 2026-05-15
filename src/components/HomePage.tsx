import React from 'react';
import './HomePage.css';
import HeroGraphic from './HeroGraphic';

interface HomePageProps {
  onNavigate: (page: 'home' | 'documentation' | 'design-system') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="hp-wrap">

      {/* Hero */}
      <section className="hp-hero">
        <div className="hp-hero__left">
          <p className="hp-hero__tag">Emotion Design System</p>
          <h1 className="hp-hero__title">
            Build faster.<br />
            Ship <span className="hp-hero__title--accent">smarter</span>.<br />
            Stay consistent.
          </h1>
          <p className="hp-hero__sub">
            A complete fintech component library built for speed, accessibility,
            and dark mode — ready to drop into your next product.
          </p>
          <div className="hp-hero__btns">
            <button className="hp-btn-primary" onClick={() => onNavigate('design-system')}>
              Get Started
            </button>
            <button className="hp-btn-secondary" onClick={() => onNavigate('design-system')}>
              View Components
            </button>
          </div>
        </div>
        <div className="hp-hero__right">
          <HeroGraphic />
        </div>
      </section>

      {/* Stats */}
      <div className="hp-stats">
        <div className="hp-stat">
          <span className="hp-stat__num">5</span>
          <span className="hp-stat__label">Core components</span>
        </div>
        <div className="hp-stat">
          <span className="hp-stat__num">40+</span>
          <span className="hp-stat__label">Component variants</span>
        </div>
        <div className="hp-stat">
          <span className="hp-stat__num">100%</span>
          <span className="hp-stat__label">Dark mode ready</span>
        </div>
      </div>

      {/* Features */}
      <section className="hp-features">
        <p className="hp-section__tag">What's included</p>
        <h2 className="hp-section__title">Everything you need to ship</h2>
        <p className="hp-section__sub">
          From interactive playgrounds to full state grids, every component is
          documented and ready to use.
        </p>
        <div className="hp-feature-grid">
          {[
            { icon: '◻', name: 'Cards', desc: 'Elevated and outlined variants with media, supporting text, and action buttons.' },
            { icon: '⬡', name: 'Buttons', desc: 'Primary, secondary, and tertiary styles across default, hover, and disabled states.' },
            { icon: '▭', name: 'Inputs', desc: 'Six states including focus, error, and disabled with optional label support.' },
            { icon: '◈', name: 'Alerts', desc: 'Success, info, warning, and error in filled and outlined variants.' },
            { icon: '◉', name: 'Badges', desc: 'Transaction status labels — completed, pending, failed, processing.' },
            { icon: '⊞', name: 'Interactive demos', desc: 'Every component comes with a live configuration playground.' },
          ].map(({ icon, name, desc }) => (
            <div className="hp-feature-card" key={name}>
              <div className="hp-feature-card__icon">{icon}</div>
              <p className="hp-feature-card__name">{name}</p>
              <p className="hp-feature-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hp-cta">
        <div className="hp-cta__text">
          <h2 className="hp-cta__title">Ready to start building?</h2>
          <p className="hp-cta__sub">Explore the full component library in the Design System tab.</p>
        </div>
        <button className="hp-btn-primary" onClick={() => onNavigate('design-system')}>
          View Design System
        </button>
      </section>

    </div>
  );
};

export default HomePage;
