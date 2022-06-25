class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase()
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}

function agregarProductos(){
    let numeroProductos = parseInt(prompt("Cuantos productos necesita ingresar"))
    let productos = []

    for(let index = 0; index < numeroProductos; index++){
        let nombre = prompt("Ingrese el nombre")
        let precioCompra = parseFloat(prompt("Ingrese el precio compra"))
        let precioVenta = parseFloat(prompt("Ingrese el precio venta"))
        let cantidad = parseInt( prompt("Ingrese la cantidad"))


        let productoARegistrar = new Producto (nombre, precioCompra, precioVenta, cantidad)
    
        productos.push(productoARegistrar)
    }

    //console.log(productos)
    return productos
}

function mostrarProductos(productos){
    for(const producto of productos)
    console.log(producto)
    console.log(producto.nombre) //no me anda, debería arrojar el nombre del producto
}

function main (){
    let productosRegistrados = agregarProductos()
    mostrarProductos(productosRegistrados)
}

main()