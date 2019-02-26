const {
    app,
    BrowserWindow
} = require('electron')
const dialog = require('electron').dialog;
const path = require('path')

let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1366,
        height: 783
    })
    // and load the index.html of the app.
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    mainWindow.setMenu(null)
     mainWindow.loadFile('index.html');
    /*var macaddrq = macaddress.one(function (err, mac) {
        //console.log("Mac address for this host: %s", mac);
        return mac;
    });*/


    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}
app.on('ready', createWindow);

///Auto updater from here
require('update-electron-app')({
    updateInterval: '5 minutes'
    //logger: require('electron-log')
})
