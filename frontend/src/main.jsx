import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import AppRoutes from "./Routes";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)
