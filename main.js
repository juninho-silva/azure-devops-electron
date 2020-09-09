const { app, screen, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const size = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width: size.width,
        height: size.height,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
        },
        title: 'Azure DevOps',
        autoHideMenuBar: true,
        frame: true,
        icon: path.join(__dirname, 'assets/img/icon.ico'),
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)