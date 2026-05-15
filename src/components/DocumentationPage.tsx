import type { FC } from 'react';
import './PageShared.css';
import './DocumentationPage.css';

const DocumentationPage: FC = () => {
  return (
    <div className="ppage-wrap">
      <div className="ppage-container">
        <h1 className="ppage-title ppage-title--standalone">Documentation</h1>

        <div className="doc-body">

          <section className="doc-section">
            <h2 className="doc-section__heading">Getting Started</h2>
            <p className="doc-section__text">
              Emotion Design System is a dark-first component library built for fintech products.
              It provides accessible, production-ready components that enforce visual consistency
              across your application.
            </p>
          </section>

          <section className="doc-section">
            <h2 className="doc-section__heading">Installation</h2>
            <p className="doc-section__text">Clone the repository and install dependencies:</p>
            <div className="doc-code-block">
              <code>git clone https://github.com/your-org/emotion-design-system</code>
              <code>cd emotion-design-system</code>
              <code>npm install</code>
              <code>npm run dev</code>
            </div>
          </section>

          <section className="doc-section">
            <h2 className="doc-section__heading">Core Components</h2>
            <p className="doc-section__text">
              The system ships five foundational components, each with interactive playgrounds
              and full state grids documented in the Design System tab.
            </p>
            <div className="doc-component-grid">
              {[
                { name: 'Button', desc: 'Primary, secondary, and tertiary variants across all interaction states.' },
                { name: 'Card', desc: 'Elevated and outlined cards with optional media, body, and action slots.' },
                { name: 'Input', desc: 'Text field with six states: default, filled, hover, focus, disabled, and error.' },
                { name: 'Alert', desc: 'Filled and outlined severity banners — success, info, warning, and error.' },
                { name: 'Badge', desc: 'Transaction status labels: completed, pending, failed, and processing.' },
              ].map(({ name, desc }) => (
                <div className="doc-component-card" key={name}>
                  <p className="doc-component-card__name">{name}</p>
                  <p className="doc-component-card__desc">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="doc-section">
            <h2 className="doc-section__heading">Design Tokens</h2>
            <p className="doc-section__text">
              All visual properties are driven by CSS custom properties defined in{' '}
              <span className="doc-inline-code">src/index.css</span>. Override them at the{' '}
              <span className="doc-inline-code">:root</span> level to theme the entire system.
            </p>
            <div className="doc-token-list">
              {[
                { token: '--color-brand-primary', value: '#004d3d' },
                { token: '--color-brand-secondary', value: '#00c070' },
                { token: '--color-bg-main', value: '#0d0e14' },
                { token: '--color-text-primary', value: '#f3f4f6' },
                { token: '--color-text-secondary', value: '#9ca3af' },
              ].map(({ token, value }) => (
                <div className="doc-token-row" key={token}>
                  <span className="doc-token-row__name">{token}</span>
                  <span className="doc-token-row__value">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="doc-section">
            <h2 className="doc-section__heading">Contributing</h2>
            <p className="doc-section__text">
              Open a pull request against <span className="doc-inline-code">main</span>. Each
              component lives in <span className="doc-inline-code">src/components/</span> with a
              co-located CSS file. Follow the existing naming conventions and include both a
              playground and a states grid for any new component.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
