//Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a. 
////ANALISIS DEL PROBLEMA
//ENTRADA:a=8 y b=5
//PROCESO: 2 * 5 + 8 div 2 + 4 * 5 mod 8. 
//SALIDA:2 * 5 + 8 div 2 + 4 * 5 mod 8.= 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
function ejercicio1 (){
    let a=8, b=5,opera=0
    console.log("Siendo a=8 y b=5 se realizara la siguiente operacion")
    opera== 2 * b + a / 2 + 4 * (b % a)
    console.log(`el valor de la operacion es ${opera}`)
}
ejercicio1()
