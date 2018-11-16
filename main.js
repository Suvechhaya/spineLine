const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
let $ = require('jquery');
// mainWindow.$ = $;

let win;

function createWindow(){
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/spine.jpg'});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //open devtools
win.webContents.openDevTools();

win.on('closed', () => {
  win = null;
});
}

//run create window function
app.on('ready', createWindow);

//for pop up
// function popUp(){
//   Push.create("Hello world!",{
//           body: "This is example of Push.js Tutorial",
//           icon: '/images/hand.jpg',
//           timeout: 4000,
//           onShow: function () {
//               window.focus();
//               this.close();
//           }
//       });
// }
//   let myVar = setInterval(popUp, 6000);

notification.requestPermission();




//quit when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'win32'){
    app.quit();
  }
});
