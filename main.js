const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function for creating a new window
function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js') //Route to the preload script
        }
    });

    // it will load the HTML file
    win.loadFile('index.html'); 
}

app.whenReady().then(createWindow);// Code to run when the app is ready

// Code to execute when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// Code to execute when the app is activated
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
