import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import type { Page } from './components/Navbar'
import HomePage from './components/HomePage'
import DocumentationPage from './components/DocumentationPage'
import DocsLayout from './components/DocsLayout'

function App() {
  const [active, setActive] = useState<Page>('home')

  return (
    <div className="App">
      <Navbar activePage={active} onNavigate={setActive} />

      <main>
        {active === 'home' && <HomePage onNavigate={setActive} />}
        {active === 'documentation' && <DocumentationPage />}
        {active === 'design-system' && (
          <div style={{ padding: 24 }}>
            <h1 style={{ color: '#f8fafc' }}>Design System</h1>
            <DocsLayout />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
