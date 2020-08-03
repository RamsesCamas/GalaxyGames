const { app, BrowserWindow, net, ipcMain} = require('electron');
let win;
var respuesta ="";

function createWindow() {
    win = new BrowserWindow({ 
        webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
        }
    });
    win.loadFile("./html/index.html");
    win.resizable = false;
    win.webContents.openDevTools();
    win.maximize();
    win.setMovable(false);

}

function cambiarVista(ruta){
    win.loadFile(ruta);
    win.resizable = false;
    win.maximize();
    win.setMovable(false);
}

const createProductos=(data)=>{
    const options = {
        method: 'POST',
        protocol: 'http:',
        hostname: 'localhost',
        port: 8000,
        path: '/createProducto'
    }
    const request = net.request(options, (res) => {
        console.log(` Request statusCode: ${res.statusCode}`)
    })
    request.setHeader('Content-Type', 'application/json');

    request.write(data);
    request.end();
    request.on('response', (response) => {
        response.on('data', (chunk) => {
            respuesta = JSON.parse(chunk)
        });
    });
}

const createCategoria=(data)=>{
    const options = {
        method: 'POST',
        protocol: 'http:',
        hostname: 'localhost',
        port: 8000,
        path: '/createCategoria'
    }
    const request = net.request(options, (res) => {
        console.log(` Request statusCode: ${res.statusCode}`)
    })
    request.setHeader('Content-Type', 'application/json');

    request.write(data);
    request.end();
    request.on('response', (response) => {
        response.on('data', (chunk) => {
            respuesta = JSON.parse(chunk)
        });
    });
}
const getLogin = (username) => {
    const options = {
        method: 'GET',
        protocol: 'http:',
        hostname: 'localhost',
        port: 8000,
        path: '/getEmpleado'
    }
    const request = net.request(options, (res) => {
        console.log(` Request statusCode: ${res.statusCode}`)
    })
    request.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify({
        'username': username
    });

    request.write(data);
    request.end();

    request.on('response', (response) => {
        response.on('data', (chunk) => {
            respuesta = JSON.parse(chunk)
        });
    });
}

ipcMain.on('asynchronous-message',(event,arg)=>{
    dosomething(arg, function(){
        setTimeout(()=>{
            event.reply('user-reply',respuesta)
        },500)
    });
});
function dosomething(damsg, callback){
    getLogin(damsg);
    if(typeof callback=="function")
        callback()
}


app.on("ready", createWindow);


module.exports ={
    cambiarVista,
    getLogin,
    createCategoria,
    createProductos
}