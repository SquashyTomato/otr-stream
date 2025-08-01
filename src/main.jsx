// Import Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Styles & Scripts
import  './scripts/main.js';
import './styles/main.css';

// Import Pages
import App from './views/App.jsx';

// Render React App
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
