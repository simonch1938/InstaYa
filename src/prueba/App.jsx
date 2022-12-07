import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="/" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Instaya</h1>
      <div className="card">
        
        <p>
          App de Registro y Seguimiento de Paquetes
        </p>
      </div>
      <p className="read-the-docs">
        Grupo 12
      </p>
    </div>
  )
}

export default App
