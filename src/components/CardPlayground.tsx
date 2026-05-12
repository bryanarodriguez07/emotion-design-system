import React, { useState } from 'react';
import './CardPlayground.css';

type Variant = 'elevated' | 'outlined';

interface CardPreviewProps {
  variant: Variant;
  showMedia: boolean;
  showSupportingText: boolean;
  showButtons: boolean;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  variant,
  showMedia,
  showSupportingText,
  showButtons,
}) => {
  return (
    <div className={`cp-card cp-card--${variant}`}>
      {showMedia && (
        <div className="cp-card__media">
          <svg width="56" height="56" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="36" r="14" fill="#374151" />
            <polygon points="32,14 52,46 12,46" fill="#4b5563" />
          </svg>
        </div>
      )}
      <div className="cp-card__body">
        <p className="cp-card__title">Card title</p>
        <p className="cp-card__sub">Secondary text</p>
        {showSupportingText && (
          <p className="cp-card__support">
            Greyhound divisively hello coldly wonderfully marginally far when fringe worn thereof.
          </p>
        )}
      </div>
      {showButtons && (
        <>
          <div className="cp-card__divider" />
          <div className="cp-card__actions">
            <button className="cp-card__btn">Action 1</button>
            <button className="cp-card__btn">Action 2</button>
          </div>
        </>
      )}
    </div>
  );
};

const CardPlayground: React.FC = () => {
  const [variant, setVariant] = useState<Variant>('elevated');
  const [showMedia, setShowMedia] = useState(false);
  const [showSupportingText, setShowSupportingText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="cp-wrap">
      <div className="cp-preview-panel">
        <div className="cp-tabs">
          <button
            className={`cp-tab ${variant === 'elevated' ? 'cp-tab--active' : ''}`}
            onClick={() => setVariant('elevated')}
          >
            Elevated
          </button>
          <button
            className={`cp-tab ${variant === 'outlined' ? 'cp-tab--active' : ''}`}
            onClick={() => setVariant('outlined')}
          >
            Outlined
          </button>
        </div>
        <div className="cp-preview">
          <CardPreview
            variant={variant}
            showMedia={showMedia}
            showSupportingText={showSupportingText}
            showButtons={showButtons}
          />
        </div>
      </div>

      <div className="cp-config-panel">
        <div className="cp-config-header">
          <span className="cp-config-title">Configuration</span>
          <button className="cp-config-close" aria-label="Close">✕</button>
        </div>
        <div className="cp-config-body">
          <p className="cp-options-label">Options</p>
          <label className="cp-checkbox-row">
            <input type="checkbox" checked={showMedia} onChange={(e) => setShowMedia(e.target.checked)} />
            <span>Media</span>
          </label>
          <label className="cp-checkbox-row">
            <input type="checkbox" checked={showSupportingText} onChange={(e) => setShowSupportingText(e.target.checked)} />
            <span>Supporting text</span>
          </label>
          <label className="cp-checkbox-row">
            <input type="checkbox" checked={showButtons} onChange={(e) => setShowButtons(e.target.checked)} />
            <span>Buttons</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardPlayground;
