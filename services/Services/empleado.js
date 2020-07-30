const mysql = require('mysql');
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
    const {login} = request.body

    myConnection.query('SELECT * from Empleados where login = ?', [login]
    ,(err, result)=>{
        if(err) throw err;
        response.status(200).json(result)
    })
}

module.exports = {
    getEmpleado
}