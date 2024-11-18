import express from "express" 
import routes from "./routes/routes.js"
import { notFound } from "./middlewares/notFound.js"
import connection from "./connection/connection.js"
import { SERVER_PORT } from "./config/config.js"


// crear el server
const app = express() 

//  console.log("🚀 ~ app:", app) //si se descomenta esto se va a ver todo lo que contiene app(es eterno)

//middlewares fundamentales
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// middlewares

// rutas
app.use("/app", routes); //con el "use" app va a tener acceso a todo lo que este en routes.js

app.use(notFound)



await connection.sync({ force: false }) // Usa { force: true } solo si podes eliminar y recrear las tablas desde sql
.then(() => console.log("Base de datos sincronizada"))
.catch((err) => console.error("Error al sincronizar la base de datos:", err));


// listen
app.listen(SERVER_PORT, () => {
    console.log(`🚀 ~ app.listen ~ listen: on port ${SERVER_PORT}`)
})
app.on('error', error => console.log(`Error en servidor: ${error.message}`))



// para ver el fin de la terminal jajaj
const saludo = "Hola Eze";

console.log("🚀 ~ saludo:", saludo)

