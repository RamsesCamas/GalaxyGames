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

const getEmpleado = (request,response)=>{
    const {username} = request.body
    console.log(username)
    myConnection.query('SELECT * from Empleados where username = ?', [username]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}
const createEmpleado = (request, response) => {
    const { idEmpleado, nombre, apePaterno, apeMaterno,puesto,username,password } = request.body
    myConnection.query('INSERT INTO Empleados VALUES  (?, ?,?,?,?,?,?)'
    , [idEmpleado, nombre, apePaterno, apeMaterno,puesto,username,password], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}
const getCount = (request,response)=>{
    myConnection.query('select count(*) from Empleados', (err, result)=>{
        if(err) throw err;
        response.status(200).json(result[0]);
    })
}
const deleteEmpleado = (request,response)=>{
    const {username} = request.body;
    connection.query('DELETE FROM Empleados WHERE username = ?', [username], (error, result) => {
        if (error) throw error;
        response.status(20).json(result);
    })
}
module.exports = {
    getEmpleado,
    createEmpleado,
    deleteEmpleado,
    getCount
}