const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Winston Pong');
    mainWindow.loadURL('https://ratamacue.github.io/winston-pong/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
