import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import DocumentationPage from './components/DocumentationPage'
import ReleasesPage from './components/ReleasesPage'
import DocsLayout from './components/DocsLayout'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/design-system" element={<DocsLayout />} />
      </Routes>
    </HashRouter>
  )
}

export default App