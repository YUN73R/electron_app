const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
    ipcMain.handle('ping', () => 'pong')
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})