import React from 'react';
import './HeroGraphic.css';

const HeroGraphic: React.FC = () => {
  return (
    <div className="hg-wrap">
      <div className="hg-laptop">
        <div className="hg-bezel" />

        <div className="hg-card">

          {/* Header */}
          <div className="hg-card-header">
            <span className="hg-card-title">Portfolio Overview</span>
            <span className="hg-live-dot" />
          </div>

          {/* Stat row */}
          <div className="hg-stats">
            <div className="hg-stat">
              <span className="hg-stat-val">$24.8k</span>
              <span className="hg-stat-lbl">Balance</span>
            </div>
            <div className="hg-stat">
              <span className="hg-stat-val hg-stat-val--positive">+12.4%</span>
              <span className="hg-stat-lbl">Growth</span>
            </div>
            <div className="hg-stat">
              <span className="hg-stat-val">98</span>
              <span className="hg-stat-lbl">Transactions</span>
            </div>
          </div>

          {/* Bar chart */}
          <div className="hg-chart">
            <span className="hg-chart-label">Monthly Activity</span>
            <div className="hg-bars">
              {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                <div className="hg-bar" key={i}>
                  <div className="hg-bar-fill" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="hg-bottom">
            {/* Badges */}
            <div className="hg-badges-wrap">
              <span className="hg-section-label">Status</span>
              <div className="hg-badges">
                <span className="hg-badge hg-badge--completed">● Completed</span>
                <span className="hg-badge hg-badge--pending">● Pending</span>
                <span className="hg-badge hg-badge--failed">● Failed</span>
              </div>
            </div>

            {/* Recent activity */}
            <div className="hg-activity">
              <span className="hg-section-label">Recent</span>
              {[
                { label: 'Transfer', val: '+$840' },
                { label: 'Payment', val: '-$120' },
                { label: 'Deposit', val: '+$2.4k' },
              ].map(({ label, val }) => (
                <div className="hg-activity-row" key={label}>
                  <span className="hg-activity-name">{label}</span>
                  <span className={`hg-activity-val ${val.startsWith('+') ? 'hg-activity-val--positive' : 'hg-activity-val--negative'}`}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert */}
          <div className="hg-alert">
            <div className="hg-alert-title">Payment processed</div>
            <div className="hg-alert-body">Your transfer of $840 was completed.</div>
          </div>

        </div>

        <div className="hg-base" />
      </div>
    </div>
  );
};

export default HeroGraphic;
