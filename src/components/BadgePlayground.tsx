import React, { useState } from 'react';
import './BadgePlayground.css';

type Status = 'completed' | 'pending' | 'failed' | 'processing';
type Variant = 'filled' | 'outlined';

const ICONS: Record<Status, string> = {
  completed: '✓',
  pending: '⏱',
  failed: '✕',
  processing: '↻',
};

const LABELS: Record<Status, string> = {
  completed: 'Completed',
  pending: 'Pending',
  failed: 'Failed',
  processing: 'Processing',
};

const BadgePlayground: React.FC = () => {
  const [status, setStatus] = useState<Status>('completed');
  const [variant, setVariant] = useState<Variant>('filled');
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="bdgp-wrap">
      <div className="bdgp-preview-panel">
        <div className="bdgp-preview">
          <span className={`bdgp-badge bdgp-badge--${status}-${variant}`}>
            {showIcon && <span className="bdgp-badge__icon">{ICONS[status]}</span>}
            {LABELS[status]}
          </span>
        </div>
      </div>

      <div className="bdgp-config-panel">
        <div className="bdgp-config-header">
          <span className="bdgp-config-title">Configuration</span>
          <button className="bdgp-config-close" aria-label="Close">✕</button>
        </div>
        <div className="bdgp-config-body">

          <p className="bdgp-config-label">Status</p>
          {(['completed', 'pending', 'failed', 'processing'] as Status[]).map((s) => (
            <label className="bdgp-radio-row" key={s}>
              <input type="radio" name="status" checked={status === s} onChange={() => setStatus(s)} />
              <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
            </label>
          ))}

          <p className="bdgp-config-label">Variant</p>
          {(['filled', 'outlined'] as Variant[]).map((v) => (
            <label className="bdgp-radio-row" key={v}>
              <input type="radio" name="variant" checked={variant === v} onChange={() => setVariant(v)} />
              <span>{v.charAt(0).toUpperCase() + v.slice(1)}</span>
            </label>
          ))}

          <p className="bdgp-config-label">Options</p>
          <label className="bdgp-checkbox-row">
            <input type="checkbox" checked={showIcon} onChange={(e) => setShowIcon(e.target.checked)} />
            <span>Show icon</span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default BadgePlayground;
