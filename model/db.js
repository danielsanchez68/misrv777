import mongoose from "mongoose";
import config from "../config.js";

class DBMongo {
    static conexion = false

    static getConexion() {
        return DBMongo.conexion
    }

    static async conectar() {
        try {
            console.log('Conectando a la base de datos...')
            await mongoose.connect(config.STR_CNX, {
                useNewUrlParser: true,
                useUnifiedTopology : true
            })
            console.log('Base de datos conectada!')
            DBMongo.conexion = true
        }
        catch(err) {
            console.log(`Error en conexión de base de datos: ${err.message}`)
        }
    }
}

export default DBMongo