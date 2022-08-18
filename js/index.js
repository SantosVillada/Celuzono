//debugger

const descripcion = document.querySelector ("#descripcion")
const importe = document.querySelector("#importe")
const texto = document.querySelector("#textoinner")
texto.innerHTML = "<h1>Probando InnerText</h1>"
const productos = ['iphone', 'samsung', 'sony', 'motorola']
const celulares = document.querySelector("select")
function cargoProdcutos() {
    productos.forEach(producto => {
        celulares.innerHTML += `<option value="">${producto}</option>`
    });
}
cargoProdcutos()

/* function eleccionProducto() {
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
eleccionProducto ()

//debugger
const celulares = []
const carrito = []

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
//debugger
function buscarproductos(){
    let aviso = confirm("Productos disponibles: iPhone, Samsung, Sony y Motorola")
    let src = prompt("Ingrese el nombre del producto a buscar")
    const resultado = productos.filter(productos => productos.length === aviso)
    console.log(resultado)
}
agregarProductos()
buscarproductos() */


