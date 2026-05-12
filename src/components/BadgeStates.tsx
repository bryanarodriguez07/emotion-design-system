import React from 'react';
import './BadgeStates.css';

type Status = 'completed' | 'pending' | 'failed' | 'processing';
type Variant = 'filled' | 'outlined';

interface BadgeProps {
  status: Status;
  variant: Variant;
  icon?: boolean;
}

const ICONS: Record<Status, string> = {
  completed: 'ti ti-check',
  pending: 'ti ti-clock',
  failed: 'ti ti-x',
  processing: 'ti ti-refresh',
};

const LABELS: Record<Status, string> = {
  completed: 'Completed',
  pending: 'Pending',
  failed: 'Failed',
  processing: 'Processing',
};

const Badge: React.FC<BadgeProps> = ({ status, variant, icon }) => {
  return (
    <span className={`bdg bdg--${status}-${variant}`}>
      {icon && <i className={ICONS[status]} aria-hidden="true" />}
      {LABELS[status]}
    </span>
  );
};

const STATUSES: { id: Status; label: string }[] = [
  { id: 'completed', label: 'Completed' },
  { id: 'pending', label: 'Pending' },
  { id: 'failed', label: 'Failed' },
  { id: 'processing', label: 'Processing' },
];

const BadgeStates: React.FC = () => {
  return (
    <div className="bdg-wrap">
      <div className="bdg-col-headers">
        <div className="bdg-spacer" />
        <div className="bdg-col-header">Filled</div>
        <div className="bdg-col-header">Filled + icon</div>
        <div className="bdg-col-header">Outlined</div>
        <div className="bdg-col-header">Outlined + icon</div>
      </div>

      {STATUSES.map(({ id, label }, i) => (
        <React.Fragment key={id}>
          <div className="bdg-row">
            <div className={`bdg-row-label bdg-row-label--${id}`}>{label}</div>
            <div className="bdg-cell"><Badge status={id} variant="filled" /></div>
            <div className="bdg-cell"><Badge status={id} variant="filled" icon /></div>
            <div className="bdg-cell"><Badge status={id} variant="outlined" /></div>
            <div className="bdg-cell"><Badge status={id} variant="outlined" icon /></div>
          </div>
          {i < STATUSES.length - 1 && <div className="bdg-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BadgeStates;
