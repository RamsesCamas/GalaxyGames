const {app, BrowserWindow} = require('electron');
let win;

function createWindow(){
    win = new BrowserWindow({});
    win.maximize();
    win.loadFile("./html/index.html");
    win.resizable = false;
    webPreferences: {
        nodeIntegration: true
        //enableRemoteModule: true,
         }
    //win.webContents.openDevTools();
}
/*
const options = {
        method: 'GET',
        protocol: 'http:',
        hostname: 'localhost',
        port: 9002,
        path: '/getUser'
    };
const data = JSON.stringify({
        'login': 'fabricio'
    });   
const request = net.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log('statusCode:' + res.statusCode)
    })
    
request.setHeader('Content-Type', 'application/json');
    request.write(data);
    request.end();
request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
            console.log(JSON.parse(chunk)[0].login)
        });
    });*/

app.on("ready",createWindow);