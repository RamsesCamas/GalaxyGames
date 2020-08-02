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

const getProveedor = (request,response)=>{
    const {nombre} = request.body
    myConnection.query('SELECT * from proveedor where  nombre = ?', [nombre]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}
const createProveedor = (request, response) => {
    const { idProveedor, nombre} = request.body
    myConnection.query('INSERT INTO productos VALUES  (?,?)'
    , [idProveedor,nombre], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}
const getCount = (request,response)=>{
    myConnection.query('select count(*) from proveedor', (err, result)=>{
        if(err) throw err;
        response.status(200).json(result[0]);
    })
}
const deleteProveedor = (request,response)=>{
    const {nombre} = request.body;
    connection.query('DELETE FROM proveedor WHERE nombre = ?', [nombre], (error, result) => {
        if (error) throw error;
        response.status(20).json(result);
    })
}
module.exports = {
    getProveedor,
    createProveedor,
    deleteProveedor,
    getCount
}