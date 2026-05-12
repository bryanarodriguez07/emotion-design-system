import React, { useState } from 'react';
import CardPlayground from './CardPlayground';
import CardStates from './CardStates';
import ButtonPlayground from './ButtonPlayground';
import ButtonStates from './ButtonStates';
import InputPlayground from './InputPlayground';
import InputStates from './InputStates';
import AlertPlayground from './AlertPlayground';
import AlertStates from './AlertStates';
import BadgePlayground from './BadgePlayground';
import BadgeStates from './BadgeStates';
import './DocsLayout.css';

type ComponentId = 'cards' | 'buttons' | 'inputs' | 'alerts' | 'badges';

interface NavItem {
  id: ComponentId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'alerts', label: 'Alerts' },
  { id: 'badges', label: 'Badges' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'inputs', label: 'Inputs' },
];

const DocsLayout: React.FC = () => {
  const [active, setActive] = useState<ComponentId>('cards');

  return (
    <div className="dl-wrap">
      {/* Sidebar */}
      <aside className="dl-sidebar">
        <p className="dl-sidebar__heading">Components</p>
        <nav>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`dl-nav-item ${active === item.id ? 'dl-nav-item--active' : ''}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="dl-content">
        {active === 'cards' && (
          <div className="dl-section">
            <div className="dl-section__header">
              <h1 className="dl-section__title">Card</h1>
              <p className="dl-section__desc">
                Cards contain content and actions about a single subject. Available in elevated and outlined variants with optional media, supporting text, and action buttons.
              </p>
            </div>

            <div className="dl-block">
              <p className="dl-block__label">Interactive demo</p>
              <CardPlayground />
            </div>

            <div className="dl-block">
              <p className="dl-block__label">All states</p>
              <CardStates />
            </div>
          </div>
        )}
        {active === 'buttons' && (
          <div className="dl-section">
            <div className="dl-section__header">
              <h1 className="dl-section__title">Button</h1>
              <p className="dl-section__desc">
                Buttons are used for actions, available in primary, secondary, and tertiary variants, shown across default, hover, and disabled states.
              </p>
            </div>

            <div className="dl-block">
              <p className="dl-block__label">Interactive demo</p>
              <ButtonPlayground />
            </div>

            <div className="dl-block">
              <p className="dl-block__label">All states</p>
              <ButtonStates />
            </div>
          </div>
        )}
        {active === 'inputs' && (
          <div className="dl-section">
            <div className="dl-section__header">
              <h1 className="dl-section__title">Input</h1>
              <p className="dl-section__desc">
                Inputs show different field states including default, filled, hover, focus, disabled, and error.
              </p>
            </div>

            <div className="dl-block">
              <p className="dl-block__label">Interactive demo</p>
              <InputPlayground />
            </div>

            <div className="dl-block">
              <p className="dl-block__label">All states</p>
              <InputStates />
            </div>
          </div>
        )}
        {active === 'alerts' && (
          <div className="dl-section">
            <div className="dl-section__header">
              <h1 className="dl-section__title">Alert</h1>
              <p className="dl-section__desc">
                Alerts communicate important messages and are available in filled and outlined variants across different severities.
              </p>
            </div>

            <div className="dl-block">
              <p className="dl-block__label">Interactive demo</p>
              <AlertPlayground />
            </div>

            <div className="dl-block">
              <p className="dl-block__label">All states</p>
              <AlertStates />
            </div>
          </div>
        )}
        {active === 'badges' && (
          <div className="dl-section">
            <div className="dl-section__header">
              <h1 className="dl-section__title">Badge</h1>
              <p className="dl-section__desc">
                Badges represent status and counters for items; they come in filled and outlined variants across statuses like completed, pending, failed, and processing.
              </p>
            </div>

            <div className="dl-block">
              <p className="dl-block__label">Interactive demo</p>
              <BadgePlayground />
            </div>

            <div className="dl-block">
              <p className="dl-block__label">All states</p>
              <BadgeStates />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DocsLayout;
