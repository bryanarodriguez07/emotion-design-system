import React from 'react';
import './ButtonStates.css';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  state: 'default' | 'hover' | 'disabled';
  icon?: boolean;
}

const Btn: React.FC<ButtonProps> = ({ variant, state, icon }) => {
  return (
    <button
      className={`bts-btn bts-btn--${variant} bts-btn--${state}`}
      disabled={state === 'disabled'}
    >
      {icon && <span className="bts-btn__icon">★</span>}
      Button
    </button>
  );
};

const VARIANTS: { id: 'primary' | 'secondary' | 'tertiary'; label: string }[] = [
  { id: 'primary', label: 'Primary — filled' },
  { id: 'secondary', label: 'Secondary — outlined' },
  { id: 'tertiary', label: 'Tertiary — text only' },
];

const STATES: ('default' | 'hover' | 'disabled')[] = ['default', 'hover', 'disabled'];

const ButtonStates: React.FC = () => {
  return (
    <div className="bts-wrap">
      {/* Section: Without icon */}
      <div className="bts-section">
        <div className="bts-section-title">Without icon</div>

        <div className="bts-col-group-headers">
          <div className="bts-spacer" />
          <div className="bts-group-header">Primary</div>
          <div className="bts-group-header">Secondary</div>
          <div className="bts-group-header">Tertiary</div>
        </div>

        <div className="bts-col-headers">
          <div className="bts-spacer" />
          <div className="bts-col-header">Primary</div>
          <div className="bts-col-header">Secondary</div>
          <div className="bts-col-header">Tertiary</div>
        </div>

        {STATES.map((state) => (
          <div className="bts-row" key={`noicon-${state}`}>
            <div className={`bts-row-label`}>{state.charAt(0).toUpperCase() + state.slice(1)}</div>
            {VARIANTS.map(({ id }) => (
              <div className={`bts-cell bts-cell--${state}`} key={id}>
                <Btn variant={id} state={state} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Section: With icon */}
      <div className="bts-section">
        <div className="bts-section-title">With icon</div>

        <div className="bts-col-group-headers">
          <div className="bts-spacer" />
          <div className="bts-group-header">Primary</div>
          <div className="bts-group-header">Secondary</div>
          <div className="bts-group-header">Tertiary</div>
        </div>

        <div className="bts-col-headers">
          <div className="bts-spacer" />
          <div className="bts-col-header">Primary</div>
          <div className="bts-col-header">Secondary</div>
          <div className="bts-col-header">Tertiary</div>
        </div>

        {STATES.map((state) => (
          <div className="bts-row" key={`icon-${state}`}>
            <div className={`bts-row-label`}>{state.charAt(0).toUpperCase() + state.slice(1)}</div>
            {VARIANTS.map(({ id }) => (
              <div className={`bts-cell bts-cell--${state}`} key={id}>
                <Btn variant={id} state={state} icon />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonStates;
