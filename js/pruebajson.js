document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})
const templateFragment = document.querySelector('#template').content
const fragment = document.createDocumentFragment()
const cards = document.getElementById ('cards')


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

        const clone = templateFragment.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}