import mongoose from "mongoose"
import DB from '../db.js'

class ModelMongoDB {

    constructor() {
        const productosSchema = mongoose.Schema({
            nombre: String,
		    precio: Number,
		    stock: Number
        })

        this.ProductoModel = mongoose.model('productos', productosSchema)
    }

    obtenerProductos = async id => {
        if(!DB.getConexion()) return []

        if(id) {
            const producto = await this.ProductoModel.findOne({_id:id})
            return producto
        }
        else {
            const productos = await this.ProductoModel.find({})
            return productos
        }
    }

    guardarProducto = async producto => {
        if(!DB.getConexion()) return {}

        const productoModel = new this.ProductoModel(producto)
        await productoModel.save()

        // leemos el último producto agregado de la base para retornarlo con todos sus datos
        const productos = await this.ProductoModel.find({})
        const productoAgregado = productos[productos.length-1]

        return productoAgregado
    }

    actualizarProducto = async (id, productoNew) => {
        if(!DB.getConexion()) return {}

        await this.ProductoModel.updateOne({_id:id}, {$set: productoNew })
        
        // leemos el producto actualizado
        const productoActualizado = await this.ProductoModel.findOne({_id:id})

        return productoActualizado
    }

    borrarProducto = async id => {
        if(!DB.getConexion()) return {}

        // leemos el producto a ser eliminado
        const productoEliminado = await this.ProductoModel.findOne({_id:id})

        await this.ProductoModel.deleteOne({_id: id})

        return productoEliminado
    }
}

export default ModelMongoDB
