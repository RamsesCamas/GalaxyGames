const express = require('express')
const bodyParser = require('body-parser')
const servicesEmpleado = require('./Services/empleado')
const servicesProducto = require('./Services/productos')
const servicesProveedor = require('./Services/proveedor')
const servicesCategoria = require('./Services/categoria')

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
app.get('/getProductoID',servicesProducto.getProductoID);
//Proveedores
app.get('/getProveedor',servicesProveedor.getProveedor);
app.post('/createProveedor',servicesProveedor.createProveedor);
app.delete('/deleteProveedor', servicesProveedor.deleteProveedor);
//Categoria
app.get('/getCategoria',servicesCategoria.getCategoria);
app.post('/createCategoria',servicesCategoria.createCategoria);
app.delete('/deleteCategoria',servicesCategoria.deleteCategoria);

app.get('/',(request, response)=>{
    response.json({name:'Ramses'})
    console.log("Ram")
});


app.listen(port, () => {
    console.log(`Servicio ejecutado en el puerto ${port}.`);
})






