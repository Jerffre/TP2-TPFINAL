import express from "express" 
import routes from "./routes/routes.js"
import { getDate } from "./middlewares/getDate.js"
import { notFound } from "./middlewares/notFound.js"
import morgan from "morgan"
import connection from "./connection/connection.js"

// crear el server
const app = express() 

//  console.log("🚀 ~ app:", app) //si se descomenta esto se va a ver todo lo que contiene app(es eterno)

//middlewares fundamentales
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan("tiny"))


// middlewares

// rutas
app.use("/app", getDate, routes); //con el "use" app va a tener acceso a todo lo que este en routes.js

app.use(notFound)

await connection.sync({ force: true });

// listen
const PORT = 8080
app.listen(PORT, () => {
    console.log("🚀 ~ app.listen ~ listen: on port 8080")
})
app.on('error', error => console.log(`Error en servidor: ${error.message}`))
