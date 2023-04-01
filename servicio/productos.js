import ModelFactory from '../model/DAO/productosFactory.js'
import config from '../config.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        const productos = await this.model.obtenerProductos(id)
        return productos
    }

    guardarProducto = async producto => {
        const productoGuardado = await this.model.guardarProducto(producto)
        return productoGuardado
    }

    actualizarProducto = async (id, productoNew) => {
        const producto = await this.model.actualizarProducto(id, productoNew)
        return producto
    }

    borrarProducto = async id => {
        const producto = await this.model.borrarProducto(id)
        return producto
    }
}

export default Servicio