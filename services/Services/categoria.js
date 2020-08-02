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

const getCategoria = (request,response)=>{
    const {categoria} = request.body
    myConnection.query('SELECT * from categoria where  categoria = ?', [categoria]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}
const createCategoria = (request, response) => {
    const { idCategoria, categoria} = request.body
    myConnection.query('INSERT INTO categoria VALUES (?,?)'
    , [idCategoria, categoria], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}
const getCount = (request,response)=>{
    myConnection.query('select count(*) from categoria', (err, result)=>{
        if(err) throw err;
        response.status(200).json(result[0]);
    })
}
const deleteCategoria = (request,response)=>{
    const {categoria} = request.body;
    connection.query('DELETE FROM categoria WHERE categoria = ?', [categoria], (error, result) => {
        if (error) throw error;
        response.status(20).json(result);
    })
}
module.exports = {
    getCategoria,
    createCategoria,
    deleteCategoria,
    getCount
}