const productos = [{
        nombre: "iPhonex",
        precio: "800",
        id: creoID(),
    },
    {
        nombre: "iPhone11",
        precio: "950",
        id: creoID(),
    },
    {
        nombre: "iPhone12",
        precio: "1150",
        id: creoID(),
    },

];

function creoID() {
    return parseInt(Math.random() * 100000)
}

const divCelulares = document.querySelector(".divCelulares");

function creoCards() {
    productos.forEach((prod) => {
        divCelulares.innerHTML += `<div>
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <p>${prod.id}</p>
        <button id="btn-agregar${prod.id}">Agregar producto</button>
        </div>`;
    });
    funcionBtn()
}

function funcionBtn() {
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", () => {
            console.log(prod)
        })
    })
}

function agregarAlCarrito(prod) {
    let cantidad = carrito.some((cantidad) => cantidad.id === prod.id);
    if(cantidad === false) {
     prod.cant = 1;
     carrito.push(prod);
    } else {
        prod.cant++;
    }
    //productos.push(prod);
    console.log(carrito);
}

creoCards();