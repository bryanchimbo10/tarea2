//17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir nombre1,nombre2 Como Caracter
//PROCESO:
//    Si nombre1 == nombre2 Entonces
//        Escribir "Los nombres son iguales."
//    Sino Si nombre1 > nombre2 Entonces
//		  Escribir "El primer nombre es mayor que el segundo."
//		Sino
//			Escribir "El primer nombre es menor que el segundo."
//		Fin Si
//	FinSi 
//SALIDA:
//        Escribir "Los nombres son iguales."
//		  Escribir "El primer nombre es mayor que el segundo."
//			Escribir "El primer nombre es menor que el segundo."
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();

function ejercicio17 (){
    let nomb1="",nomb2=""
    nomb1= read ("Ingrese el primer nombre: ")
    
    nomb2= read ("Ingrese el segundo nombre: ")
    

    if (nomb1==nomb2){
		console.log("Los nombres son iguales. ")
    }
    else if(nomb1>nomb2){
		console.log ("El primer nombre es mayor que el segundo. ")
	}
    else{
        console.log ("El primer nombre es menor que el segundo. ")
    }

}
ejercicio17()