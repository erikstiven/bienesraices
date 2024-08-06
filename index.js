import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

// Crear la app
const app = express()

//habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica
app.use( express.static('public'))

//Routing - definir los endpoints
app.use('/auth', usuarioRoutes)



//Definir un purto y arrancar el proyecto

const port = 3000
app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`)
})