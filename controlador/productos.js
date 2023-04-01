import Servicio from '../servicio/productos.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerProductos = async (req,res) => {
        const { id } = req.params
        const productos = await this.servicio.obtenerProductos(id)
        res.json( productos )
    }

    guardarProducto = async (req,res) => {
        let producto = req.body
        const productoGuardado = await this.servicio.guardarProducto(producto)
        res.json( productoGuardado )
    }

    actualizarProducto = async (req,res) => {
        let { id } = req.params 
        let producto = req.body
        const productoActualizado = await this.servicio.actualizarProducto(id, producto)
        res.json( productoActualizado )
    }

    borrarProducto = async (req,res) => {
        let { id } = req.params 
        const producto =  await this.servicio.borrarProducto(id)
        res.json( producto )
    }
}

export default Controlador