import './App.css'
import Demo from './components/Demo'
import Hero from './components/Hero'

export default function App() {
  return (
    <main>
        <div className="main">
            <div className="gradient"></div>
        </div>

        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}
