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

const getVentas = (request,response)=>{
    const {idVenta} = request.body
    myConnection.query('SELECT * from ventas where  idVenta = ?', [idVenta]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}
const createVentas = (request, response) => {
    const { idVenta, idProducto} = request.body
    myConnection.query('INSERT INTO ventas VALUES (?,?)'
    , [idventas, categoria], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}
const getCount = (request,response)=>{
    myConnection.query('select count(*) from ventas', (err, result)=>{
        if(err) throw err;
        response.status(200).json(result[0]);
    })
}
const deleteVentas = (request,response)=>{
    const {idVenta} = request.body;
    connection.query('DELETE FROM ventas WHERE idVenta = ?', [idVenta], (error, result) => {
        if (error) throw error;
        response.status(20).json(result);
    })
}
module.exports = {
    getVentas,
    createVentas,
    deleteVentas,
    getCount
}