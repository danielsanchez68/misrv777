class ModelMem {

    constructor() {
        this.productos = [
            { id: 1, nombre: 'TV', precio: 1234, stock: 45 },
            { id: 2, nombre: 'Mouse', precio: 123, stock: 567 },
            { id: 3, nombre: 'Teclado', precio: 456, stock: 432 }
        ]
    }

    obtenerProductos = async id => {
        if(id) {
            return await Promise.resolve(this.productos.find( producto => producto.id == id ))
        }
        else {
            return await Promise.resolve(this.productos)
        }
    }

    guardarProducto = async producto => {
        const id = (this.productos[this.productos.length-1]?.id || 0) + 1
        producto.id = id
        this.productos.push(producto)
        return await Promise.resolve(producto)
    }

    actualizarProducto = async (id, productoNew) => {
        let producto
        const index = this.productos.findIndex( prod => prod.id == id )

        let productoAnt = this.productos[index]
        if(productoAnt) {
            producto = { ...productoAnt, ...productoNew }
            this.productos.splice(index, 1, producto)
        }
        else {
            producto = productoNew
            const id = (this.productos[this.productos.length-1]?.id || 0) + 1
            producto.id = id
            this.productos.push(producto)
        }

        return await Promise.resolve(producto)
    }

    borrarProducto = async id => {
        const index = this.productos.findIndex( prod => prod.id == id )
        const producto = this.productos.splice(index, 1)[0]
        return await Promise.resolve(producto)
    }
}

export default ModelMem
