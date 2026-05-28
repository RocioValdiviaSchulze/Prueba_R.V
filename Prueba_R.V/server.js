const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const puerto = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebadb'
});

conexion.connect(error => {
    if (error){
        console.error('Conexión fallida con la base de datos:)', error);
    } else {
        console.log('Conexión exitosa')
    }
});

//intente hacer un commit y non pude, no recuerdo

app.post('/enviar', (req, res) =>{
    const {Nombre, Email} = req.body;
    const sql = 'INSERT INTO datos (Nombre, Email) VALUES (?,?);'
    conexion.query(sql, [Nombre, Email], (error, resultados)=>{
        if (error){
            console.error('error al guardar datitos.', error)
        } else {
            console.log('los datos llegaron :D.')
            res.status(200).send('llegaron los datos x2.')
        }
    });
});
//intención de hacer un commit pero idk
app.listen(puerto, ()=>{
    console.log(`servidor escuchando http://localhost:${puerto}`);
});