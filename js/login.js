const {BrowserWindow} = require('electron').remote
const remote =  require('electron').remote;
const {ipcRenderer} = require('electron')
const main = remote.require('./main.js');

const btnLogin = document.getElementById("btnLogin");
const volver = document.getElementById('volver');

btnLogin.addEventListener('click',()=>{
    let username = document.getElementById("username");
    ipcRenderer.send('asynchronous-message',username.value);
    
})
window.onload = function(){
    ipcRenderer.on('user-reply',(event,arg)=>{
    let password = document.getElementById("password");
    if (arg.length == 0)
        document.querySelector("#error").textContent = 'Usuario no existe'
    else if (password.value != arg[0].password)
        document.querySelector("#error").textContent = 'La contraseña es incorrecta'
    else
        main.cambiarVista('./html/categories.html');
    })
}
volver.addEventListener('click',()=>{
    main.cambiarVista('./html/index.html');
})