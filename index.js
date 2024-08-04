import express from 'express'

// Crear la app
const app = express()

//Routing - definir los endpoints
app.get('/', function (req, res){
    res.json({msg: 'Welcome'})
});


//Definir un purto y arrancar el proyecto

const port = 3000
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`)
})