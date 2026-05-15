import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/documentation', label: 'Documentation' },
    { path: '/releases', label: 'Releases' },
    { path: '/design-system', label: 'Design System' },
  ]

  return (
    <nav className="navbar">
      <span className="navbar__logo">Emotion Design System</span>
      <div className="navbar__links">
        {links.map(({ path, label }) => (
          <button
            key={path}
            className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar