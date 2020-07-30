const express = require('express');
const bodyparser = require('body-parser');
const servicesEmpleado = require('./Services/empleado')
var app = express();
var port = 8080;

app.use(bodyparser.json);
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)
app.get('/getEmpleado',servicesEmpleado.getEmpleado);


app.listen(port,()=>{
    console.log("Conexion exitosa a puerto "+port);
})


