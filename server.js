import express from 'express'
import RouterProductos from './router/productos.js'
import config from './config.js'

import DB from './model/db.js'

if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await DB.conectar()
}

const app = express()
app.use(express.json())

app.use('/api/productos', new RouterProductos().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`El servidor express está escuchando en la url: http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))


