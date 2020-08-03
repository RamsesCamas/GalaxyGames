const {BrowserWindow} = require('electron').remote
const remote =  require('electron').remote;
const main = remote.require('./main.js');

const num = document.getElementById('num');
const name = document.getElementById('name');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click',()=>{
    let data = JSON.stringify({
        "idCategoria": num.value,
        "categoria": name.value 
    });
    main.createCategoria(data);
    alert("Categoria creada");
})