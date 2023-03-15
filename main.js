const productos = [
    {
        nombre: 'Ryzen 5 5600x',
        descripcion: 'Procesador AMD Ryzen 5 5600X',
        frecuencia: '3700 - 4600 MHz',
        nucleos: '6 nucleos - 12 hilos',
        socket: 'AM4',
        cache: '6 x 512KB L2 / 32MB L3',
        precio: 194,
        //imagen: 'ruta/a/la/imagen1.jpg',
    },
    {
        nombre: 'Ryzen 5 7600',
        descripcion: 'Procesador AMD Ryzen 5 7600',
        frecuencia: '3800 MHz',
        nucleos: '6 nucleos - 12 hilos',
        socket: 'AM5',
        cache: '6 x 1MB L2 / 32MB L3',
        precio: 239,
        //imagen: 'ruta/a/la/imagen2.jpg',
    },
    {
        nombre: 'Ryzen 9 5900x',
        descripcion: 'Procesador AMD Ryzen 9 5900X',
        frecuencia: '3700 MHz',
        nucleos: '12 núcleos / 24 hilos',
        socket: 'AM4',
        cache: '12 x 512KB L2 / 64MB L3',
        precio: 420,
        //imagen: 'ruta/a/la/imagen3.jpg',
    },
    {
        nombre: 'Ryzen 9 3900xt',
        descripcion: 'Procesador AMD Ryzen 9 3900xt',
        frecuencia: '3700 MHz',
        nucleos: '12 núcleos / 24 hilos',
        socket: 'AM4',
        cache: '12 x 512KB L2 / 64MB L3',
        precio: 400,
        //imagen: 'ruta/a/la/imagen4.jpg',
    }
];

// Asignar cada objeto del array 'productos' a una variable
const procesadorRyzen5600x = productos[1];
const procesadorRyzen7600 = productos[2];
const procesadorRyzen5900x = productos[3];
const procesadorRyzen3900xt = productos[4];

let productoCarrito = parseInt(prompt("Escoge el número del producto deseado. 1.Ryzen 5 5600x - 2.Ryzen 5 7600 - 3.Ryzen 9 5900x - 4.Ryzen 9 3900xt"));
let escogioProducto = false;
let infoProductoCarrito;

while (escogioProducto === false) {
    if (productoCarrito === 1) {
        escogioProducto = true;
        infoProductoCarrito = procesadorRyzen5600x;
    } else if (productoCarrito === 2) {
        escogioProducto = true;
        infoProductoCarrito = procesadorRyzen7600;
    } else if (productoCarrito === 3) {
        escogioProducto = true;
        infoProductoCarrito = procesadorRyzen5900x;
    } else if (productoCarrito === 4) {
        escogioProducto = true;
        infoProductoCarrito = procesadorRyzen3900xt;
    } else {
        productoCarrito = parseInt(prompt("Escoge un número de producto correcto. 1.Ryzen 5 5600x - 2.Ryzen 5 7600 - 3.Ryzen 9 5900x - 4.Ryzen 9 3900xt"));
    }
};

alert("El producto escogido es: " + infoProductoCarrito.nombre + " se ha agregado al carrito");
console.log("infoCarrito", infoProductoCarrito);

function calcularPrecio(producto) {
    return producto.precio;
}

let precioAPagar = calcularPrecio(infoProductoCarrito);
alert("El precio a pagar es: " + precioAPagar)
console.log("Precio del producto: " + precioAPagar);