class Producto {
    constructor(id, nombre, precio, stock, descripcion) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.descripcion = descripcion
    }
}

const producto1 = new Producto(1, "HOODIE HUMAN", 9350, 10, 'Sudadera de cuello con capucha y manga larga . Detalle de texto HUMAN REVOLUTION en serigrafia en frente y espalda . Acabados en rib en puños y cintura. Color : Negro')
const producto2 = new Producto(2, "REMERA WAFFLE BLACK", 4990, 15, 'Camiseta amplia con cuello acabado en misma tela . Manga corta al corte . Color Negro. Material : Waffle')
const producto3 = new Producto(3, "REMERA WAFFLE SAND", 4990, 12, 'Camiseta amplia con cuello acabado en misma tela . Manga corta al corte . Color beige. Material : Waffle')
const producto4 = new Producto(4, "REME WARSAW BLANCA", 3390, 7, 'Remera de algodon unisex, dos talles oversize.')

const productor = [producto1, producto2, producto3, producto4]

const divProductos = document.getElementById('productos')

