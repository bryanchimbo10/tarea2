//Pedir al usuario dos números y mostrar si son iguales o diferentes.  
//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir num1,num2 Como Entero
//	Escribir "Ingrese 2 numeros:"
//PROCESO: 
//	si num1==num2 Entonces
//		Escribir "Los numeros son iguales "
//	SiNo
//		Escribir "Los numeros son distintos"
//	FinSi
//Escribir "Los numeros son iguales "
//		Escribir "Los numeros son distintos"
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();

function ejercicio15 (){
    let num1=0,num2=0
    num1= read ("ingrese la primera cantidad: ")
    num1=parseInt(num1)
    num2= read ("ingrese la segunda cantidad: ")
    num2=parseInt(num2)

    if (num1==num2){
		console.log ("Los numeros son iguales ")
    }
    else{
		console.log ("Los numeros son distintos ")
	}

}
ejercicio15()
