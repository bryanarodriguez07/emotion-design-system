import type { FC } from 'react';
import './PageShared.css';
import './ReleasesPage.css';

interface Release {
  version: string;
  date: string;
  tag: 'stable' | 'beta' | 'alpha';
  summary: string;
  changes: string[];
}

const RELEASES: Release[] = [
  {
    version: 'v1.0.0',
    date: 'May 15, 2026',
    tag: 'stable',
    summary: 'First stable release of the Emotion Design System.',
    changes: [
      'Five production-ready components: Button, Card, Input, Alert, Badge',
      'Interactive playground for every component',
      'Full state grids including hover, focus, disabled, and error states',
      'Complete dark mode support across all components',
      'CSS custom property token system for easy theming',
      'Accessible markup with ARIA attributes throughout',
    ],
  },
  {
    version: 'v0.9.0',
    date: 'April 28, 2026',
    tag: 'beta',
    summary: 'Public beta with finalized component APIs and dark-mode polish.',
    changes: [
      'Finalized design token naming convention',
      'Added Badge component with four transaction states',
      'Alert component now supports filled and outlined variants',
      'Input playground added with live state preview',
      'Improved keyboard navigation for all interactive components',
    ],
  },
  {
    version: 'v0.8.0',
    date: 'April 3, 2026',
    tag: 'alpha',
    summary: 'Alpha release introducing the core layout and first three components.',
    changes: [
      'Initial Button, Card, and Input components',
      'Dark-first color system established',
      'DocsLayout sidebar navigation scaffolded',
      'Vite + React + TypeScript project setup',
      'GitHub Pages deployment configured',
    ],
  },
];

const TAG_LABELS: Record<Release['tag'], string> = {
  stable: 'Stable',
  beta: 'Beta',
  alpha: 'Alpha',
};

const ReleasesPage: FC = () => {
  return (
    <div className="ppage-wrap">
      <div className="ppage-container">
        <h1 className="ppage-title ppage-title--standalone">Releases</h1>

        <div className="rel-feed">
          {RELEASES.map((release) => (
            <article className="rel-entry" key={release.version}>
              <div className="rel-entry__meta">
                <span className="rel-entry__version">{release.version}</span>
                <span className={`rel-entry__tag rel-entry__tag--${release.tag}`}>
                  {TAG_LABELS[release.tag]}
                </span>
                <span className="rel-entry__date">{release.date}</span>
              </div>
              <p className="rel-entry__summary">{release.summary}</p>
              <ul className="rel-entry__list">
                {release.changes.map((change) => (
                  <li key={change} className="rel-entry__item">{change}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReleasesPage;
