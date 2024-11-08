import express from "express" 
import routes from "./routes/routes.js"

const app = express() //Para crear el server (usando express logicamente)

//  console.log("🚀 ~ app:", app) //si se descomenta esto se va a ver todo lo que contiene app(es eterno)


app.use("/app", routes); //con el "use" app va a tener acceso a todo lo que este en routes.js


app.listen(8080, () => {
    console.log("🚀 ~ app.listen ~ listen: on port 8080")
})





/* Asi estaba antes */

// app.use(express.json())
// const PORT = 8080
// app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando http://localhost ${PORT}`))

