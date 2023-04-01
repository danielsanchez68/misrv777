import fs from 'fs'

class ModelFile {

    constructor() {
        this.nombreArchivo = 'productos.json'
    }

    obtenerProductos = async id => {
        const productos = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'UTF-8'))
        if(id) {
            return productos.find( producto => producto.id == id )
        }
        else {
            return productos
        }
    }

    guardarProducto = async producto => {
        const productos = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'UTF-8'))
        const id = (productos[productos.length-1]?.id || 0) + 1
        producto.id = id
        productos.push(producto)

        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, '\t'))

        return producto
    }

    actualizarProducto = async (id, productoNew) => {
        const productos = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'UTF-8'))

        let producto
        const index = productos.findIndex( prod => prod.id == id )

        let productoAnt = productos[index]
        if(productoAnt) {
            producto = { ...productoAnt, ...productoNew }
            productos.splice(index, 1, producto)
        }
        else {
            producto = productoNew
            const id = (productos[productos.length-1]?.id || 0) + 1
            producto.id = id
            productos.push(producto)
        }
        
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, '\t'))
        
        return producto
    }

    borrarProducto = async id => {
        const productos = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'UTF-8'))

        const index = productos.findIndex( prod => prod.id == id )
        const producto = productos.splice(index, 1)[0]

        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, '\t'))
        
        return producto
    }
}

export default ModelFile