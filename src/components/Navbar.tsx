import type { FC } from 'react';
import './Navbar.css';

export type Page = 'home' | 'documentation' | 'design-system';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: FC<NavbarProps> = ({ activePage, onNavigate }) => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Emotion</div>

      <nav className="navbar__nav" aria-label="Primary navigation">
        <button
          className={`navbar__link ${activePage === 'home' ? 'navbar__link--active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>

        <button
          className={`navbar__link ${activePage === 'documentation' ? 'navbar__link--active' : ''}`}
          onClick={() => onNavigate('documentation')}
        >
          Documentation
        </button>

        <button
          className={`navbar__link ${activePage === 'design-system' ? 'navbar__link--active' : ''}`}
          onClick={() => onNavigate('design-system')}
        >
          Design System
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
