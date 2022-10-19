document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    if (localStorage.getItem('guardado')) {
        carrito = JSON.parse(localStorage.getItem('guardado'))
        crearCarrito()
    }
})

divCard.addEventListener('click', e => {
    addCarrito(e)
})



const items = document.getElementById('items')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const footer = document.getElementById('footer')
const templateFragment = document.querySelector('#template').content
const fragment = document.createDocumentFragment()
const cards = document.getElementById ('cards')
let carrito = {}

items.addEventListener('click', e => {
    btnDinamico(e)
})


const fetchData = async () => {
    try {
            const res = await fetch ('catalogo.json')
            const data = await res.json()
            crearCards(data)
    } catch (error) {
    console.log(error)
    }
}

const crearCards = data => {
    data.forEach(producto => {
        templateFragment.querySelector('h2').textContent = producto.articulo
        templateFragment.querySelector('#precio').textContent = producto.precio
        templateFragment.querySelector('#id-producto').textContent = producto.id
        templateFragment.querySelector('#img-dinamica').setAttribute("src", producto.img)
        templateFragment.querySelector('.btn-primary').dataset.id = producto.id
        const clone = templateFragment.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.classList.contains('btn-primary')) {

        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-primary').dataset.id,
        articulo: objeto.querySelector('h2').textContent,
        precio: objeto.querySelector('#precio').textContent,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    crearCarrito()

}

const crearCarrito = () => {
    //console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.articulo
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    footerCarrito()
    localStorage.setItem ('guardado', JSON.stringify(carrito))
}

const footerCarrito = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }

    const cantidad = Object.values(carrito).reduce((acc, {cantidad})  => acc + cantidad , 0 )
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad, precio}) => acc + cantidad * precio, 0 )

    templateFooter.querySelectorAll('td')[0].textContent = cantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () =>{
    carrito = {}
    crearCarrito()
    })
    const comprarFinal = document.getElementById('comprar-final')
    comprarFinal.addEventListener('click', () => {
        carrito = {}
        crearCarrito()
        Swal.fire('Gracias por tu compra!')
    })

}

const btnDinamico = e => {
    console.log(e.target)
    if (e.target.classList.contains('btn-info')) {
        //console.log(carrito[e.target.dataset.id])
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
        carrito[e.target.dataset.id] = {...producto}
        crearCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito [e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        crearCarrito()
    }

    e.stopPropagation()
}