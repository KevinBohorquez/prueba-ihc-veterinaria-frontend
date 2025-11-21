import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'

// No se necesita el fetchWrapper porque los componentes son estáticos
// import { enableMockFetch } from './utils/fetchWrapper'
// enableMockFetch();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
