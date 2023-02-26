alert("¡Hola! ¡Bienvenido al mejor sitio de calculo para soldadores!")

alert("Calculemos juntos que electrodo utilizar y que amperaje seran los apropiados para tu proyecto.")


let nombre = prompt("Ingrese su nombre por favor")
const NOMBRE_VACIO = ("indicanos tu nombre y vuelvé a intentarlo.")
const MENSAJE_DE_ERROR = "Lo sentimos " + nombre + ". 20mm es el grosor maximo para soldar con electrodos convencionales."
const SIN_DATOS = nombre + " asegurate de ingresar un valor numerico valido!!"

function validacionDeNombre() {
    while (nombre === "") {
        alert(NOMBRE_VACIO)
        nombre = prompt("ingresa tu nombre por favor!!")
    }
}
validacionDeNombre()


let grosorMetal = prompt("Genial " + nombre + "!!! Por favor indique en milimetros (desde 1 a 20) el espesor de su metal")

function validarGrosorMetal() {
    while (grosorMetal === "") {
        alert("NO HAS INGRESADO NINGUN VALOR")
        grosorMetal = prompt(nombre + "!!! Por favor indique en milimetros (desde 1 a 20) el espesor de su metal")
    }
}

validarGrosorMetal()

//Hola Profe te dejo los valores de cada variable.
//primero ponemos el grosor del material a soldar por prompt
//y luego en un alert el grosor del electrodo + el amperaje apropiado.

//Metales: entre 1 y 2mm: 1.6mm y 45amp maximo.
//         entre 3 y 4mm: 2mm y de 45 a 75amp.
//         entre 5 y 9mm: 2.5 y 75-110amp.
//         entre 10 y 14mm: 3.25 y 110-140amp.
//         entre 15 y 20mm: 4mm y + de 160amp.

if (grosorMetal === "") {
    alert(SIN_DATOS)
} else if (grosorMetal <= 2) {
    alert(nombre + " deberas utilizarar un electrodo de 1.6mm y un amperaje que no sea mayor a 45 amperes")
} else if (grosorMetal == 3 || grosorMetal == 4) {
    alert(nombre + " deberas utilizarar un electrodo de 2mm y un amperaje entre 45 y 75")
} else if (grosorMetal >= 5 && grosorMetal <= 9) {
    alert(nombre + " deberas utilizarar un electrodo de 2.5mm y un amperaje entre 75 y 110")
} else if (grosorMetal >= 10 && grosorMetal <= 14) {
    alert(nombre + " deberas utilizarar un electrodo de 3.25mm y un amperaje entre 110 y 140")
} else if (grosorMetal >= 15 && grosorMetal <= 20) {
    alert(nombre + " deberas utilizar como minimo un electrodo de 4mm y un amperaje igual o superior a 160 segun demanda.")
} else if (grosorMetal >= 21) {
    alert(MENSAJE_DE_ERROR)
} alert("MUCHAS GRACIAS " + nombre + " POR UTILIZAR NUESTRO ASESOR VIRTUAL")