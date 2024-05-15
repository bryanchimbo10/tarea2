// Solicitar al usuario un número y mostrar si es divisible por 2 o impar.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//num(leer)
//PROCESO:
//si (num % 2 === 0||num % 2 === 0) {
   // console.log(`El número ${num} es divisible por 2y tambien es par.`);
//} sino {
 //   console.log(`El número ${num} no cumple con la condicion `);
//} 
//SALIDA:
//escrbir(`El número ${num} es divisible por 2y tambien es par.`);
//escrbir (`El número ${num} no cumple con la condicion `);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
function ejercicio19(){
  let num=0
  num = Number(read("Por favor, ingresa un número: "));

  if (num % 2 === 0||num % 2 === 0) {
    console.log(`El número ${num} es divisible por 2y tambien es par.`);
  } else {
    console.log(`El número ${num} no cumple con la condicion `);
  }
}
ejercicio19()

