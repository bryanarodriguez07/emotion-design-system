import React from 'react';
import './AlertStates.css';

type Severity = 'success' | 'info' | 'warning' | 'error';
type Variant = 'filled' | 'outlined';

interface AlertProps {
  severity: Severity;
  variant: Variant;
}

const Alert: React.FC<AlertProps> = ({ severity, variant }) => {
  const titles: Record<Severity, string> = {
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
  };

  return (
    <div className={`as-alert as-alert--${severity}-${variant}`}>
      <button className="as-alert__close" aria-label="Dismiss">✕</button>
      <p className="as-alert__title">{titles[severity]}</p>
      <p className="as-alert__body">Get immediate alerts and a notification badge.</p>
    </div>
  );
};

const SEVERITIES: { id: Severity; label: string }[] = [
  { id: 'success', label: 'Success' },
  { id: 'info', label: 'Info' },
  { id: 'warning', label: 'Warning' },
  { id: 'error', label: 'Error' },
];

const AlertStates: React.FC = () => {
  return (
    <div className="as-wrap">
      <div className="as-col-headers">
        <div className="as-spacer" />
        <div className="as-col-header">Filled</div>
        <div className="as-col-header">Outlined</div>
      </div>

      {SEVERITIES.map(({ id, label }, i) => (
        <React.Fragment key={id}>
          <div className="as-row">
            <div className={`as-row-label as-row-label--${id}`}>{label}</div>
            <div><Alert severity={id} variant="filled" /></div>
            <div><Alert severity={id} variant="outlined" /></div>
          </div>
          {i < SEVERITIES.length - 1 && <div className="as-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AlertStates;
