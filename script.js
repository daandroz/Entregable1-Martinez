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
    name: "Gameboy Handheld [NEW]",
    price: 350,
},
{
    name: "Gamecube [USED]",
    price: 300,
},
{
    name: "PSP [USED - Like new]",
    price: 200,
},
{
    name: "Gameboy Color Camera [RARE]",
    price: 700,
}
]

let carrito = []


function mostrarProductos() {
    let mensaje = "Este es el catálogo actual en la thrift store\n\n";
    productos.forEach((producto, index) => {
        mensaje += `${index+1}. ${producto.name} - Precio: $${producto.price}\n`;
    });
    mensaje += "\nPara agregar sus productos al carrito regrese al menú principal y seleccione opción #2.";
    alert(mensaje);
}

function productSelection(){

    let mensaje = "Este es el catálogo actual en la thrift store\n\n";
    productos.forEach((producto, index) => {
        mensaje += `${index+1}. ${producto.name} - Precio: $${producto.price}\n`;
    });
    mensaje += "\nIngrese el número del artículo que desea agregar a su carrito";
    let userSelection = Number(prompt(mensaje))
    carrito.push(productos[userSelection - 1])
    console.table(carrito)
    return userSelection;
}

function editCarrito(){
    let message = "Indique el número del artículo que desea eliminar:\n\n";
    carrito.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Precio: $${product.price}\n`;
    });
    let userErase = Number(prompt(message));
    carrito.splice(userErase - 1,1)
    console.table(carrito)
    return userErase;
}

function showCarrito(){
    let message = "Retro Games Thrift Store:\n\n";
    carrito.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Precio: $${product.price}\n`;
    });
    message += "\n Estos productos se encuentran en su carrito";
    alert(message);
}

function checkout(){
    let priceTotal = 0
    let message = "Carrito:\n\n";
    carrito.forEach((product) => {
        priceTotal += product.price
    });

    let userCheckout = confirm(message + "Este es su total: $" + priceTotal + " ¿desea finalizar con su compra?");
    if (userCheckout == true) {
        carrito.length = 0
        alert("Gracias por su compra")
    }
    console.log(priceTotal)
    console.log(carrito)
    return userCheckout;
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
                productSelection();
                flag = confirm("quiere seguir operando?")

            break;
            case 3:
                editCarrito();
                flag = confirm("quiere seguir operando?")

            break;
            case 4:
                showCarrito();
                flag = confirm("quiere seguir operando?")

            break;
            case 5:
                checkout();
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