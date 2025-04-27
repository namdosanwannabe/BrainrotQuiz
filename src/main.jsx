import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrainrotProvider } from './contexts/BrainrotContext'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrainrotProvider>
            <App />
        </BrainrotProvider>
    </StrictMode>,
)
