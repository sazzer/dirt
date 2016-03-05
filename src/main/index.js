import {app, BrowserWindow} from 'electron';

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  app.quit();
});
