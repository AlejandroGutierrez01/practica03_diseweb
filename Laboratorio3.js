//Variables simples

let username = "Alejandro"
let descuento = "DESC-20PERCT"
let envio = false
let precioArticulo = 15.2
let totalCompra = 50

//Variables compuestas: 

let productos = ["Relog","Zapatos","Carteras","Billeteras"]
let productosTecnologicos ={
    nombre: "Mouse Logitech",
    precioArticulo: 15.0,
    estrellas: 4.4
}
//Métodos:

console.log(username.trim())
console.log(username.includes("o"))
console.log(username.toLowerCase());
console.log(username.toUpperCase());

//Operador ternario

username == "" ? console.log("Usuario no encontrado, registrese para comprar") : console.log("Usuario encontrado");

//Valores falsy:
let enviogratis = false
let producto = ""
let precio = 0 
if (producto == false) {
    console.log("Falso");
}

//Valores truthy
enviogratis = true
if (enviogratis == true) {
    console.log("Verdadero");
}

//Bucles
productosTecnologicos = ["Smartphone","Auriculares","Camara","Monitor"]
productosTecnologicos.forEach(producto => {console.log(producto)})

console.log(productosTecnologicos)

//Funcion declarada
function mostrarProducto() {
    console.log("Producto disponible");
}
mostrarProducto()
//funcion expresada
const validarEnvioGratis = function () {
    console.log("Envio gratis");
}
validarEnvioGratis()

//Parametros
function saludarUser(nombre) {
    console.log(`Bienvenido, ${nombre}`);
}
saludarUser("Alejandro")
//Parametros opcionales
function saludarUser2(nombre = "Nuevo Usuario") {
    console.log(`Bienvenido, ${nombre}`);
}
saludarUser2()

//Funcion flecha
const mostrarValoracion = () => {
    console.log(4.9);
}
mostrarValoracion()

//objetos:
const cliente = {
    nombre: "Alejandro Gutierrez",
    edad: "20",
    direccion:{
        ciudad: "Quito",
        telefono: "0684651554"
    },
    favoritos: ["Celulares","Zapatos","Mascotas"]
};

//JSON

const cliente1 = {
    "nombre": "Alejandro Gutierrez",
    "edad": "20",
    "direccion":{
        "ciudad": "Quito",
        "telefono": "0684651554"
    },
    "favoritos": ["Celulares","Zapatos","Mascotas"]
};

console.log(cliente1.nombre)
console.log(cliente1.edad)
console.log(cliente1.direccion)
console.log(cliente1.favoritos)

//Deconstrucción
const datosUser = {nombre, edad, direccion,favoritos} = cliente

//Propiedades

//Agregar propiedades
cliente.foto = "UserAlejandro.png"
console.log(cliente)

//Eliminar propiedades
delete cliente.favoritos
console.log(cliente)

//Validar valores vacios

Object.values(cliente).includes("") ? console.log("Ingrese todos los campos"):console.log("Registro exitosos")

//Union de Objetos 

const carritoCompra = {
    productName:"Mochila",
    price:25.00
}

const comprador={
    username: "Alejandro",
    telf: "0684651554"
}

//Union de los objetos con metodo Rest
const ordenCompra = {...comprador,...carritoCompra}
console.log(ordenCompra)