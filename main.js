class Producto {
    constructor(nombre, marca, modelo, id, precio) {
        this.nombre = nombre
        this.marca = marca
        this.modelo = modelo
        this.id = id
        this.precio = precio
    }
};

const procesador = new Producto("procesador", "amd", "ryzen", 1, 300);
const tarjetaGrafica = new Producto("tarjeta grafica", "asus", "rog strix", 2, 900);
const fuenteAlimentacion = new Producto("fuente de alimentacion", "evga", "nova", 3, 280);
const placaMadre = new Producto("placa madre", "asus", "tuf", 4, 400);

let productoCarrito = parseInt(
    prompt("Escoge el numero del producto deseado. 1.Procesador - 2.Tarjeta Grafica - 3.Fuente de Alimentaciom - 4.Placa Madre")
);

let escogioProducto = false

let infoProductoCarrito

while (escogioProducto === false) {
    if (productoCarrito === 1) {
        escogioProducto = true
        infoProductoCarrito = procesador
    } else if (productoCarrito === 2) {
        escogioProducto = true
        infoProductoCarrito = tarjetaGrafica
    } else if (productoCarrito === 3) {
        escogioProducto = true
        infoProductoCarrito = fuenteAlimentacion
    } else if (productoCarrito === 4) {
        escogioProducto = true
        infoProductoCarrito = placaMadre
    } else {
        productoCarrito = parseInt(
            prompt(
                "Escoge UN numero de producto CORRECTO. 1.Procesador - 2.Tarjeta Grafica - 3.Fuente de Alimentaciom - 4.Placa Madre"
            )
        )
    }
};
alert("El producto escogido es: " + infoProductoCarrito.nombre + " se ha agregado al carrito");
console.log("infoCarrito", infoProductoCarrito);

function calcularPrecio(producto) {
  return producto.precio;
}

let precioAPagar = calcularPrecio(infoProductoCarrito);
alert("El precio a pagar es: " + precioAPagar)
console.log("Precio del producto: " + precioAPagar); // Agregar esta línea