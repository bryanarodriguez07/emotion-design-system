import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header style={{ padding: '32px', textAlign: 'center' }}>
        <h1>Emotion Design System — Demo</h1>
        <p>Example buttons using the design tokens</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
          <Button onClick={() => setCount(c => c + 1)}>Primary Button ({count})</Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>Secondary</Button>
          <Button variant="ghost" onClick={() => alert('Ghost clicked')}>Ghost</Button>
        </div>
      </header>
    </div>
  )
}

export default App
