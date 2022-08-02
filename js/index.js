//debugger
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
eleccionProducto ()