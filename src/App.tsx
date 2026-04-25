import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

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

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
          <Card title="Default Card" subtitle="Standard">
            <p style={{ margin: 0 }}>Default card using standard padding and subtle shadow.</p>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <Button>Action</Button>
              <Button variant="ghost">More</Button>
            </div>
          </Card>

          <Card title="Outlined Card" subtitle="Bordered" variant="outlined">
            <p style={{ margin: 0 }}>Outlined card uses a clear border and no shadow.</p>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <Button variant="secondary">Primary Action</Button>
            </div>
          </Card>

          <Card title="Image Card" subtitle="Media" variant="default">
            <img src={heroImg} alt="Hero" className="eds-card__media" />
            <p style={{ margin: 0 }}>This variant shows an image at the top of the card, using the card's padding and token-based radii.</p>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <Button>View</Button>
              <Button variant="ghost">Share</Button>
            </div>
          </Card>
        </div>
      </header>
    </div>
  )
}

export default App
