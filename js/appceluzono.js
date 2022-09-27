const divCelulares = document.querySelector(".divCelulares");
const divCarrito = document.querySelector(".carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

/* 
const productos = [{
        nombre: "iPhonex",
        precio: "800",
        id: 1000,
    },
    {
        nombre: "iPhone11",
        precio: "950",
        id: 1001,
    },
    {
        nombre: "iPhone12",
        precio: "1150",
        id: 1002,
    },

]; */

/* function creoID() {
    return parseInt(Math.random() * 100000)
} */



function creoCards() {
    productos.forEach((prod) => {
        divCelulares.innerHTML += `<div>
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <p>${prod.id}</p>
        <button id="btn-agregar${prod.id}">Comprar</button>
        </div>`;
    });
    funcionBtn()
}

function funcionBtn() {
    productos.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`).addEventListener("click", () => {
            console.log(prod);
            agregarAlCarrito(prod)
            Swal.fire('Agregaste al carrito')
        })
    })
}

function agregarAlCarrito(prod) {
    let cantidad = carrito.some((cantidad) => cantidad.id === prod.id);
    if (cantidad === false) {
        prod.cant = 1;
        carrito.push(prod);
    } else {
        let buscarProd = carrito.find(buscarProd => buscarProd.id === prod.id)
        prod.cant++;
    }
    //productos.push(prod);
    console.log(carrito);
    crearCarrito()
}

function crearCarrito() {
    divCarrito.innerHTML = ""
    carrito.forEach(prod => {
        divCarrito.innerHTML += `<div>
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <p>${prod.id}</p>
        <button id="btn-borrar${prod.id}">Quitar producto</button>
        </div>`
    });
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProducto()
    
}

function borrarProducto() {
    carrito.forEach((prod) => {
        document
            .querySelector(`#btn-borrar${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter((prodfilter) => prodfilter.id !== prod.id);
                crearCarrito()
                Swal.fire('Eliminaste el producto')
            });
    })
}

creoCards();
crearCarrito();