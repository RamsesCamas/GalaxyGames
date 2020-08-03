const {BrowserWindow} = require('electron').remote

const remote =  require('electron').remote;
const main = remote.require('./main.js');

const login = document.getElementById('login');
const comprar = document.getElementById('btnComprar');
const vender = document.getElementById('btnVender');

login.addEventListener('click',()=>{
    main.cambiarVista('./html/login.html');
})

/*comprar.addEventListener('click',()=>{
    main.cambiarVista('./html/compra.html');
})*/
vender.addEventListener('click',()=>{
    main.cambiarVista('./html/venderJuego.html');
})