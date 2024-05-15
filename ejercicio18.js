//Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
 //ANALISIS DEL PROBLEMA
//ENTRADA:
//let numero
//PROCESO: 
//if (numero % 3 === 0 && numero % 2 === 0) {
//    console.log("El número " + numero + " es múltiplo de 3 y es par.");
//} else  {
 //   console.log("El número " + numero + " no cumple la condicion");
//SALIDA:
//console.log("El número " + numero + " es múltiplo de 3 y es par.");
//console.log("El número " + numero + " no cumple la condicion");
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 
const read = require('prompt-sync')();
function ejercicio18 (){
let numero 
numero= read("Por favor, ingresa un número: ");
numero=parseInt(numero)



if (numero % 3 === 0 && numero % 2 === 0) {
    console.log("El número " + numero + " es múltiplo de 3 y es par.");
} else  {
    console.log("El número " + numero + " no cumple la condicion");

}
}
ejercicio18()
