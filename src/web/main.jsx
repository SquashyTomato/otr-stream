// Import Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Import Styles & Scripts
import './styles/main.css';

// Import Pages
import App from './views/pages/App.jsx';
import Live from './views/pages/Live.jsx';

// Define React Router
const Router = createHashRouter([
    { path: '/', element: <App /> },
    { path: '/live', element: <Live /> },
]);

// Render React App
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>,
);
