//Solicitar al usuario un número y mostrar si es un número de un solo dígito.  
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir num como entero
//    Escribir "Ingrese un número:"
//    Leer num
//PROCESO:
//    Si num >= 0 y num <= 9 Entonces
//        Escribir "El número ingresado es un solo dígito."
//    Sino
//        Escribir "El número ingresado no es un solo dígito."
//    Fin Si 
//SALIDA:
//Escribir "El número ingresado es un solo dígito."
//        Escribir "El número ingresado no es un solo dígito."

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read =require (`prompt-sync`)();

function ejercicio21(){
    let num=0
    num= read ("ingrese la primera cantidad: ")
    num=parseInt(num)
  

    if (num >= -9 && num <= 9){
        console.log ("El número ingresado es de un solo dígito.")
    }
    else{
        console.log ("El número ingresado no es de un solo dígito.")
	}
}
ejercicio21()
