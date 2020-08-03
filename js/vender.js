const {BrowserWindow} = require('electron').remote
const remote =  require('electron').remote;
const main = remote.require('./main.js');

const nombreJuego = document.getElementById('nombreJuego');
const cantidad = document.getElementById('cantidad');
const proveedor = document.getElementById('proveedor');
const categoria = document.getElementById('categoria');

const btnVender = document.getElementById('btnVender');

btnVender.addEventListener('click',()=>{
    id = 5
    let data = JSON.stringify({
        "idProduct": id,
        "Nombre": nombreJuego.value,
        "precio": 200,
        "cantidad": cantidad.value,
        "Proveedor_id": proveedor.value,
        "Categoria_id":categoria.value
    });
    main.createProductos(data);
    alert("Videojuego vendido");
})
