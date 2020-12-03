/****************************************************************************/
//IMPORTAMOS TODAS LAS LIBRERIAS
/****************************************************************************/
//Llamamos framework express
const express = require("express");
require('colors');
const { textSync } = require('figlet');
const { appPort, appName, appAutor } = require('./config/config');

/****************************************************************************/
//INSTANCIAMOS LA VARIABLE DE LA APP
/****************************************************************************/
const app = express();

/****************************************************************************/
//ARRANCAMOS LA APLICACION 
/****************************************************************************/

app.listen(appPort, (err, ser) => {
    if (err) throw err.red;
    console.log(textSync(appAutor).red);
    console.log(appName.blue);
    console.log(ser, `Servidor listo en http://localhost:${appPort}`);
});