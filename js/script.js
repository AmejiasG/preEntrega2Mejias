
const productos = [
    {id:1, nombre:"Hamburguesa Italiana", precio:3500},
    {id:2, nombre:"Hamburguesa Barros Luco", precio:3200},
    {id:3, nombre:"Hamburguesa Tocino y Queso", precio:3800},
    {id:4, nombre:"Completo Italiano", precio:2000},
    {id:5, nombre:"As queso", precio:2500},
    {id:6, nombre:"As Italiano", precio:2800},
    {id:7, nombre:"Pizza Napolitana", precio:4200},
    {id:8, nombre:"Pizza Pepperoni", precio:4000},
    {id:9, nombre:"Jugo de Durazno", precio:1400},
    {id:10, nombre:"Lata Sprite", precio:1200},
    {id:11, nombre:"Lata Coca-Cola", precio:1200},
    {id:12, nombre:"Lata Fanta", precio:1200}

]

alert("Bienvenido a AleMarket 🙂 \nHoy tenemos descuento comprando 4 productos o más!")

class Carrito {
    constructor() {
        this.productos = []
        this.descuento = 10
        this.maxProductosParaDescuento = 4
        this.totalPagar = 0

    }

    agregarProducto(id) { // Se agrega otro metodo
        let producto = productos.find(prod => prod.id === id)

        if (producto) {
            this.productos.push(producto)
            console.log("Agregaste el Producto #" + id + " al Carrito");

        } else { 
            console.log("No se encontró el producto con #" + id + "!");
        }
    }


    listarCarrito() {
        let salida = ""

        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n"

        })
        
        return salida

    }

    calcularTotalProductos(){
        return this.productos.length

    }

    aplicarDescuento() { // 4 o mas productos e carrito, aplico descuento
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento){
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100)

        } else {
            return 0

        }
    }

    calcularTotalPagar() {
        let total = 0

        this.productos.forEach(item => {
            total += item.precio
        })
        
        return total
    }
}


function listarProductos() {
    let salida = ""

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n"

    })

    return salida

}

const carrito = new Carrito()
let opcionSeleccionada = 10

while(opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("¿Que va a pedir hoy? (presione 0 para cuando este listo) \n\n" + listarProductos()))
    
    if (opcionSeleccionada == 0) {
        break
    }

    carrito.agregarProducto(opcionSeleccionada)

}

let productosDelCarrito = "Detalle:\n" + carrito.listarCarrito()
let subTotal = "Subtotal: $" + carrito.calcularTotalPagar()
let descuento = "Descuento: $" + carrito.aplicarDescuento()
let total = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento())
alert(productosDelCarrito + "\n" + subTotal + "\n" + descuento + "\n" + total)

alert("Disfrute su pedido! 😄🍕🍔🧋")
