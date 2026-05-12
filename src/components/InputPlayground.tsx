import React, { useState } from 'react';
import './InputPlayground.css';

type InputState = 'default' | 'filled' | 'hover' | 'focus' | 'disabled' | 'error';

const InputPlayground: React.FC = () => {
  const [inputState, setInputState] = useState<InputState>('default');
  const [showLabel, setShowLabel] = useState(false);

  const getValue = () => {
    if (inputState === 'filled' || inputState === 'focus' || inputState === 'error') return 'Input text';
    return '';
  };

  const getPlaceholder = () => {
    if (inputState === 'disabled') return 'Disabled';
    return 'Placeholder';
  };

  return (
    <div className="ip-wrap">
      <div className="ip-preview-panel">
        <div className="ip-preview">
          <div className="ip-field-wrap">
            {showLabel && (
              <div className={`ip-label ip-label--${inputState}`}>Label</div>
            )}
            <input
              className={`ip-inp ip-inp--${inputState}`}
              placeholder={getPlaceholder()}
              value={getValue()}
              disabled={inputState === 'disabled'}
              readOnly={inputState !== 'disabled'}
              onChange={() => {}}
            />
            {inputState === 'error' && (
              <div className="ip-error-msg">Error message</div>
            )}
          </div>
        </div>
      </div>

      <div className="ip-config-panel">
        <div className="ip-config-header">
          <span className="ip-config-title">Configuration</span>
          <button className="ip-config-close" aria-label="Close">✕</button>
        </div>
        <div className="ip-config-body">

          <p className="ip-config-label">State</p>
          {(['default', 'filled', 'hover', 'focus', 'disabled', 'error'] as InputState[]).map((s) => (
            <label className="ip-radio-row" key={s}>
              <input
                type="radio"
                name="state"
                checked={inputState === s}
                onChange={() => setInputState(s)}
              />
              <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
            </label>
          ))}

          <p className="ip-config-label">Options</p>
          <label className="ip-checkbox-row">
            <input
              type="checkbox"
              checked={showLabel}
              onChange={(e) => setShowLabel(e.target.checked)}
            />
            <span>Show label</span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default InputPlayground;
