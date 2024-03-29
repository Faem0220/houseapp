const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/houseapp-database')//Se conecta a la base de datos y le da un nombre
        .then(db => console.log('DB is connected'))
        .catch (err => console.error(err));

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);//Se configura puerto del servidor-->Usa el puerto que da el sis op o sino el 3000

//Middlewares
app.use(morgan('dev'));//Sirve para recibir peticiones del nav al serv y visualizarlas en la consola.
app.use(express.json());//Permite al servidor entender informacion JSON. 

//Routes
app.use('/house',require('./routes/house'))

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port')); 
})
