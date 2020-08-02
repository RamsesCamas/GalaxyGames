const express = require('express')
const bodyParser = require('body-parser')
const servicesEmpleado = require('./Services/empleado')
const servicesProducto = require('./Services/productos')
const servicesProveedor = require('./Services/proveedor')

const app = express()
const port = 8000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
//Empleados
app.get('/getEmpleado', servicesEmpleado.getEmpleado);
app.post('/createEmpleado', servicesEmpleado.createEmpleado);
app.delete('/deleteEmpleado',servicesEmpleado.deleteEmpleado);

//Productos
app.get('/getProducto', servicesProducto.getProducto);
app.post('/createProducto',servicesProducto.createProducto);
app.delete('/deleteProducto',servicesProducto.deleteProducto);

//Proveedores
app.get('/getProveedor',servicesProveedor.getProveedor);
app.post('/createProveedor',servicesProveedor.createProveedor);
app.delete('/deleteProveedor', servicesProveedor.deleteProveedor);


app.get('/',(request, response)=>{
    response.json({name:'Ramses'})
    console.log("Ram")
});

app.get('/count',servicesEmpleado.getCount);

app.listen(port, () => {
    console.log(`Servicio ejecutado en el puerto ${port}.`);
})






