import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.jsx'
import './style/lenis.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
