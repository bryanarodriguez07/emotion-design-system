import { useState } from 'react';
import type { FC } from 'react';
import './DocumentationPage.css';
import DocsLayout from './DocsLayout';

const SECTIONS = ['Overview', 'Colors', 'Typography', 'Spacing', 'Usage'] as const;
type Section = typeof SECTIONS[number];

const DocumentationPage: FC = () => {
  const [section, setSection] = useState<Section>('Overview');

  return (
    <div className="doc-wrap">
      <div className="doc-inner">
        <aside className="doc-sidebar">
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => setSection(s)}>
              {s}
            </button>
          ))}
        </aside>

        <main className="doc-content">
          {section === 'Overview' && (
            <div>
              <h1 className="doc-section__title">Overview</h1>
              <p className="doc-section__desc">Emotion is a dark-first design system focused on speed and consistency.</p>
            </div>
          )}

          {section === 'Colors' && (
            <div>
              <h1 className="doc-section__title">Colors</h1>
              <p className="doc-section__desc">Color tokens and usage guidelines, including the system's primary greens and neutrals.</p>
            </div>
          )}

          {section === 'Typography' && (
            <div>
              <h1 className="doc-section__title">Typography</h1>
              <p className="doc-section__desc">Type scale, weights, and recommended pairings.</p>
            </div>
          )}

          {section === 'Spacing' && (
            <div>
              <h1 className="doc-section__title">Spacing</h1>
              <p className="doc-section__desc">Spacing scale and layout patterns.</p>
            </div>
          )}

          {section === 'Usage' && (
            <div>
              <h1 className="doc-section__title">Usage</h1>
              <p className="doc-section__desc">How to import components and integrate the design system in your app.</p>
            </div>
          )}

          <div style={{ marginTop: 24 }}>
            <h2 className="doc-section__title">Component library</h2>
            <DocsLayout />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
