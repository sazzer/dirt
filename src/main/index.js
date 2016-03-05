import {app, BrowserWindow} from 'electron';

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL(`file://${__dirname}/ui/index.html`);
    mainWindow.webContents.openDevTools();

    let count = 0;
    setInterval(() => {
        mainWindow.webContents.send('ping', 'pong: ' + count);
        ++count
    }, 1000);
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  app.quit();
});
