import React from 'react';
import './Card.css';

export interface CardProps {
  variant?: 'elevated' | 'outlined';
  showMedia?: boolean;
  showSupportingText?: boolean;
  showButtons?: boolean;
  title?: string;
  secondaryText?: string;
  supportingText?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  showMedia = false,
  showSupportingText = false,
  showButtons = false,
  title = 'Card title',
  secondaryText = 'Secondary text',
  supportingText = 'Greyhound divisively hello coldly wonderfully marginally far when fringe worn thereof.',
}) => {
  return (
    <div className={`card card--${variant}`}>
      {showMedia && (
        <div className="card__media">
          <svg
            className="card__media-placeholder"
            viewBox="0 0 400 225"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="400" height="225" fill="#c9c9c9" />
            <circle cx="160" cy="130" r="60" fill="#9e9e9e" />
            <polygon points="220,60 310,190 130,190" fill="#757575" />
          </svg>
        </div>
      )}

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__secondary-text">{secondaryText}</p>
      </div>

      {showSupportingText && (
        <div className="card__supporting-text">
          <p>{supportingText}</p>
        </div>
      )}

      {showButtons && (
        <div className="card__actions">
          <button className="card__action-btn">ACTION 1</button>
          <button className="card__action-btn">ACTION 2</button>
        </div>
      )}
    </div>
  );
};

export default Card;
