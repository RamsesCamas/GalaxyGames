const mysql = require('mysql');
const { request, response } = require('express');
var myConnection = mysql.createConnection(
    {
     host:'localhost',
     port: 3306,
     user: 'user.nodejs',
     password:'Machiniram117.',
     database : 'galaxygames'
    }
 );

 myConnection.connect((err)=>{
     if(!err)
         console.log("Conexión exitosa a la BD");
     else
         console.log("Conexión fallida \n Error: "+JSON.stringify(err, undefined,2))
 });

const getProducto = (request,response)=>{
    const {Nombre} = request.body
    myConnection.query('SELECT * from productos where  Nombre = ?', [Nombre]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}
const createProducto = (request, response) => {
    const { idProduct, Nombre, precio, cantidad,Proveedor_id,Categoria_id} = request.body
    myConnection.query('INSERT INTO productos VALUES  (?,?,?,?,?,?)'
    , [idProduct, Nombre, precio, cantidad,Proveedor_id,Categoria_id], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}
const getCount = (request,response)=>{
    myConnection.query('select count(*) from productos', (err, result)=>{
        if(err) throw err;
        response.status(200).json(result[0]);
    })
}
const deleteProducto = (request,response)=>{
    const {nombre} = request.body;
    connection.query('DELETE FROM productos WHERE nombre = ?', [nombre], (error, result) => {
        if (error) throw error;
        response.status(20).json(result);
    })
}
module.exports = {
    getProducto,
    createProducto,
    deleteProducto,
    getCount
}