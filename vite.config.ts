// Import Modules
import { defineConfig } from 'vite';
import path from 'node:path'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite Config (https://vite.dev/config)
export default defineConfig({
    root: path.resolve(__dirname, 'src/web'),
    build: {
        outDir: '../dist/web',
    },
    plugins: [
        react(),
        tailwindcss(),
    ],
});
