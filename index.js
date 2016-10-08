const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    });
 mainWindow.loadURL(`file://${__dirname}/index.html`);
});