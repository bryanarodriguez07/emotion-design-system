import React from 'react';
import './CardStates.css';

interface MiniCardProps {
  variant: 'elevated' | 'outlined';
  showMedia?: boolean;
  showSupportingText?: boolean;
  showButtons?: boolean;
}

const MiniCard: React.FC<MiniCardProps> = ({
  variant,
  showMedia = false,
  showSupportingText = false,
  showButtons = false,
}) => {
  return (
    <div className={`cs-card cs-card--${variant}`}>
      {showMedia && (
        <div className="cs-card__media">
          <svg width="48" height="48" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="36" r="14" fill="#374151" />
            <polygon points="32,14 52,46 12,46" fill="#4b5563" />
          </svg>
        </div>
      )}
      <div className="cs-card__body">
        <p className="cs-card__title">Card title</p>
        <p className="cs-card__sub">Secondary text</p>
        {showSupportingText && (
          <p className="cs-card__support">
            Greyhound divisively hello coldly wonderfully marginally far when fringe worn.
          </p>
        )}
      </div>
      {showButtons && (
        <>
          <div className="cs-card__divider" />
          <div className="cs-card__actions">
            <span className="cs-card__btn">Action 1</span>
            <span className="cs-card__btn">Action 2</span>
          </div>
        </>
      )}
    </div>
  );
};

const rows = [
  { label: 'Default', showMedia: false, showSupportingText: false, showButtons: false },
  { label: 'With media', showMedia: true, showSupportingText: false, showButtons: false },
  { label: 'Supporting text', showMedia: false, showSupportingText: true, showButtons: false },
  { label: 'With buttons', showMedia: false, showSupportingText: false, showButtons: true },
  { label: 'Full', showMedia: true, showSupportingText: true, showButtons: true },
];

const CardStates: React.FC = () => {
  return (
    <div className="cs-wrap">
      <div className="cs-grid">
        <div className="cs-col-spacer" />
        <div className="cs-col-header">Elevated</div>
        <div className="cs-col-header">Outlined</div>
      </div>

      {rows.map((row) => (
        <div className="cs-row" key={row.label}>
          <div className="cs-row-label">{row.label}</div>
          <div className="cs-card-wrap">
            {row.label === 'Full' && <span className="cs-badge">All options</span>}
            <MiniCard variant="elevated" {...row} />
          </div>
          <div className="cs-card-wrap">
            {row.label === 'Full' && <span className="cs-badge">All options</span>}
            <MiniCard variant="outlined" {...row} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStates;
