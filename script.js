// Este es un simulador de compra de productos. Thrift Shop de consolas de videojuego
// El simulador incluye una base de datos basica que contiene productos y algunas de sus propiedades como su precio
// El usuario debe ser capaz de:
// 1. Ver el catalogo de productos disponibles en el simulador
// 2. Agregar los productos a un carrito de compras
// 3. Eliminar productos del carrito de compras
// 4. Ver productos actuales en el carrito de compras (cantidad de producto y su precio final)
// 5. Simular un pago y vaciar el carrito

const productos = [
{
    productName: "Gameboy Handheld",
    price: 100,
},
{
    productName: "Gamecube [USED]",
    price: 300,
},
{
    productName: "PSP [USED - Like new]",
    price: 200,
}
]

function mostrarProductos() {
    let mensaje = "Este es el catálogo actual en la thrift store\n\n";
    productos.forEach((producto, index) => {
        mensaje += `${index+1}. ${producto.productName} - Precio: $${producto.price}\n`;
    });
    mensaje += "\nPara agregar sus productos al carrito regrese al menú principal y seleccione opción #2.";
    alert(mensaje);
}




function initFunction(){
    let flag = true
    let userOption = Number(prompt("Ingrese la operación deseada:\n 1. Ver el catálogo de productos\n 2. Agregar prodcutos a su carrito de compras\n 3. Eliminar producros a su carrito de compras\n 4. Ver su carrito de compras\n 5. Realizar pago "))

    while (flag) {
        switch (userOption) {
            case 1:
                mostrarProductos()
                flag = confirm("quiere seguir operando?")

            break;
            case 2:
                flag = confirm("quiere seguir operando?")

            break;
            case 3:
                flag = confirm("quiere seguir operando?")

            break;
            case 4:
                flag = confirm("quiere seguir operando?")

            break;
            case 5:
                flag = confirm("quiere seguir operando?")

            break;
        
            default:
                alert("No contamos con la opción ingresada, ingrese otro número")
                flag = confirm("quiere seguir operando?")

            break;
        }
        if (flag){
            userOption = Number(prompt("Ingrese la operación deseada:\n 1. Ver el catálogo de productos\n 2. Agregar prodcutos a su carrito de compras\n 3. Eliminar producros a su carrito de compras\n 4. Ver su carrito de compras\n 5. Realizar pago "))
        }
    }
}

initFunction()