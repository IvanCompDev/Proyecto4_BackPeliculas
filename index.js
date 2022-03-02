
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');

const PORT = 3306;

const router = require('./router');

let corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS

app.use(router);

app.listen(PORT, ()=> {
    console.log(`Servidor arriba y funcionando en el puerto ${PORT}`);
})

.catch((err)=> console.log(err.message));  