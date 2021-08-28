// Capturar entradas
let entradaNombre = prompt("Ingresa tu nombre: ");
let entradaApellido = prompt("Ingresa tu apellido: ");
let entradaEdad = prompt("Ingresa tu edad: ");
const limite =18; 
let edadFaltante = "Te faltan estos años para ser mayor de edad: " + ( limite - parseInt(entradaEdad));

// Ojo porque las mayúsculas y minúsculas se diferencian
if (entradaEdad < 18){
    alert("Lo siento, eres menor de edad en Colombia");
    alert (edadFaltante);
    console.log ("Ingresó el menor de edad: " + nombreIngresado);
} else {
    alert("Bien! Eres mayor de edad en Colombia");
    console.log ("Ingresó el mayor de edad: " + nombreIngresado);
}

