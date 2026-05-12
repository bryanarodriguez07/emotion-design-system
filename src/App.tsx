import './App.css'
import DocsLayout from './components/DocsLayout'

function App() {
  return (
    <div className="App">
      <header style={{ padding: '32px', textAlign: 'center' }}>
        <h1>Emotion Design System — Demo</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
          <DocsLayout />
        </div>
      </header>
    </div>
  )
}

export default App
