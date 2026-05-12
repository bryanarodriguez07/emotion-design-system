import React, { useState } from 'react';
import './ButtonPlayground.css';

type Variant = 'primary' | 'secondary' | 'tertiary';
type State = 'default' | 'hover' | 'disabled';

const ButtonPlayground: React.FC = () => {
  const [variant, setVariant] = useState<Variant>('primary');
  const [btnState, setBtnState] = useState<State>('default');
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="bp-wrap">
      <div className="bp-preview-panel">
        <div className="bp-preview">
          <button
            className={`bp-btn bp-btn--${variant} bp-btn--${btnState}`}
            disabled={btnState === 'disabled'}
          >
            {showIcon && <span className="bp-btn__icon">★</span>}
            Button
          </button>
        </div>
      </div>

      <div className="bp-config-panel">
        <div className="bp-config-header">
          <span className="bp-config-title">Configuration</span>
          <button className="bp-config-close" aria-label="Close">✕</button>
        </div>
        <div className="bp-config-body">

          <p className="bp-config-label">Variant</p>
          {(['primary', 'secondary', 'tertiary'] as Variant[]).map((v) => (
            <label className="bp-radio-row" key={v}>
              <input
                type="radio"
                name="variant"
                checked={variant === v}
                onChange={() => setVariant(v)}
              />
              <span>{v.charAt(0).toUpperCase() + v.slice(1)}</span>
            </label>
          ))}

          <p className="bp-config-label">State</p>
          {(['default', 'hover', 'disabled'] as State[]).map((s) => (
            <label className="bp-radio-row" key={s}>
              <input
                type="radio"
                name="state"
                checked={btnState === s}
                onChange={() => setBtnState(s)}
              />
              <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
            </label>
          ))}

          <p className="bp-config-label">Options</p>
          <label className="bp-checkbox-row">
            <input
              type="checkbox"
              checked={showIcon}
              onChange={(e) => setShowIcon(e.target.checked)}
            />
            <span>Show icon</span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default ButtonPlayground;
