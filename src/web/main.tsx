// Import Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Styles & Scripts
import './styles/main.css';

// Import Pages
import App from './views/pages/App.tsx';
import Live from './views/pages/Live.tsx';

// Define React Router
const Router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/live', element: <Live /> },
]);

// Render React App
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>,
);
