// Import Modules
import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Import Utilities
import OsuIpcHandler from './handlers/osuIpcHandler.js';

// Define Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ignore CSP Warning in Development
if (!app.isPackaged) process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// Create App Window
const createWindow = () => {
  // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 830,
        height: 520,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            //preload: join(__dirname, 'preload.js'),
        },
    });

    // Load Web View
    mainWindow.loadFile(join(__dirname, '../../dist/index.html'));
};

// Electron Events
app.whenReady().then(() => {
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});
