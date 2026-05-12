import React, { useState } from 'react';
import './AlertPlayground.css';

type Severity = 'success' | 'info' | 'warning' | 'error';
type Variant = 'filled' | 'outlined';

const AlertPlayground: React.FC = () => {
  const [severity, setSeverity] = useState<Severity>('success');
  const [variant, setVariant] = useState<Variant>('filled');

  const titles: Record<Severity, string> = {
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
  };

  return (
    <div className="ap-wrap">
      <div className="ap-preview-panel">
        <div className="ap-preview">
          <div className={`ap-alert ap-alert--${severity}-${variant}`}>
            <button className="ap-alert__close" aria-label="Dismiss">✕</button>
            <p className="ap-alert__title">{titles[severity]}</p>
            <p className="ap-alert__body">Get immediate alerts and a notification badge.</p>
          </div>
        </div>
      </div>

      <div className="ap-config-panel">
        <div className="ap-config-header">
          <span className="ap-config-title">Configuration</span>
          <button className="ap-config-close" aria-label="Close">✕</button>
        </div>
        <div className="ap-config-body">

          <p className="ap-config-label">Severity</p>
          {(['success', 'info', 'warning', 'error'] as Severity[]).map((s) => (
            <label className="ap-radio-row" key={s}>
              <input type="radio" name="severity" checked={severity === s} onChange={() => setSeverity(s)} />
              <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
            </label>
          ))}

          <p className="ap-config-label">Variant</p>
          {(['filled', 'outlined'] as Variant[]).map((v) => (
            <label className="ap-radio-row" key={v}>
              <input type="radio" name="variant" checked={variant === v} onChange={() => setVariant(v)} />
              <span>{v.charAt(0).toUpperCase() + v.slice(1)}</span>
            </label>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AlertPlayground;
