import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <div className='absolute left-px bottom-px text-gray-950 z-20'>
        <h1 className='text-gray'>Renderer: WebGL</h1>
      </div>
    </main>
    <App />
  </React.StrictMode>,
)
