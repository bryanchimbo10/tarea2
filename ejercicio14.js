//Solicitar al usuario un número y mostrar si es positivo o negativo.  
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir num1 Como Entero
//Escribir "Ingrese el número que desea evaluar: "
//Leer num1
//PROCESO: 
//Si num1>=0 Entonces
//	Escribir "El número ", num1 " es positivo."
//	SiNo
//  Escribir "El número ", num1 " es negativo."
//	FinSi
//SALIDA:
//Escribir "El número ", num1 " es positivo."
//Escribir "El número ", num1 " es negativo."
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();

function ejercicio14(){
    let num1=0

    num1=read ("Ingrese un numero: ")
    num1= parseInt(num1)
    if ( num1>=0){
        console.log(`El numero ${num1}  es positivo`)
    }
    else{
        console.log(`El numero ${num1}  es negativo`)
    }
}
ejercicio14()
