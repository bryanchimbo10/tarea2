 //Pedir al usuario un número y mostrar si es mayor o menor que 10. 
 //ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir num1 Como Entero
//Escribir "Ingrese el numero que desea evaluar: "
//Leer num1
//PROCESO: 
//Si num1>=10 Entonces
//	Escribir "El numero ", num1 " es mayor que 10"
//SiNo
//	Escribir "El numero ", num1 " es menor que 10"
//Fin Si
//SALIDA:
//	Escribir "El numero ", num1 " es mayor que 10"
//	Escribir "El numero ", num1 " es menor que 10"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read= require (`prompt-sync`)();

function ejercicio11(){
    let num1
    num1= read("Ingrese el numero que desea evaluar: ")
    if (num1>=10){
        console.log(`El numero  ${num1}  es mayor que el numero 10`)
    }
    else{
        console.log(`El numero  ${num1}  es menor que el numero 10`)
    }
}
ejercicio11()

