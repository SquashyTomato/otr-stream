// Import Modules
import { app, BrowserWindow } from 'electron';
import * as path from 'node:path';

const createWindow = () => {
  // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 830,
        height: 520,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            //preload: path.join(__dirname, 'preload.js'),
        },
    });

    // Load Web View
    mainWindow.loadFile(path.join(__dirname, '../dist/web/index.html'));
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
