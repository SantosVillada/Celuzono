//debugger
/*
function eleccionProducto() {
    let presentar = confirm("Tiene los siguientes productos a elegir: blanco, negro y gris.")
    let eleccion = prompt("Indica que producto vas a llevar")
    let cantidad = parseInt(prompt("Indica la cantidad que desea llevar"))
    console.log("Precio",presupuesto(eleccion) * cantidad)
}

function presupuesto(color) {
    switch (color) {
        case "blanco":
            return 1000
        case "gris":
            return 5000
        case "negro":
            return 15000
        default:
            return "No tenemos ese producto disponible"
    }
}
eleccionProducto () */

//debugger
const celulares = []
const carrito = []
const celular = [iPhonex, iPhone11, iPhone12, iPhone13]
const iPhonex = {
    memoria: "350gb",
    bateria: "%93",
    color: "negro",
}
class producto {
    constructor(id, descripcion, importe) {
    this.id = id
    this.descripcion = descripcion
    this.importe = importe
    }
}

function creoID() {
    return parseInt(Math.random() * 100000)
}

function agregarProductos() {
    //debugger
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let importe = parseInt(prompt("Ingresa el importe:"))
    celulares.push(new producto(id, descripcion, importe))
    console.table(celulares)
}
agregarProductos()



