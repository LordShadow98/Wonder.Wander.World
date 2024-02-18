const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Controladores
const {saveCountry, viewCountry, editCountry, deleteCountry} = require("./controllers/Country.controller.js");


const app = express();
const port = 3002;

app.use(morgan("dev"));//Utilizando morgan
app.use(express.json())


async function BDconnection() {
    try{
        //Conectando a la base de datos
        await mongoose.connect('mongodb://localhost:27017/country');
        
        console.log("Conectado a la base de datos");
    }catch (error){
        console.log("Erro al conectarse a la base de datos: " + error);
    }
}

BDconnection();

// app.get("/usuarios", (req, res) => res.send("Hola mundo"));
// app.get("/tareas", (req, res) => res.send("Lista de tareas desde el servidor"));

app.post("/country", saveCountry);
app.get("/country", viewCountry);
app.put("/country/:id", editCountry);
app.delete("/country/:id", deleteCountry);

app.listen(port, () => console.log("Servidor ejecutándose"));