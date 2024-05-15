//Solicitar al usuario su edad y mostrar si es mayor o menor de edad.  
//ANALISIS DEL PROBLEMA
//ENTRADA:
//definir edad Como entero
//Escribir "Ingrese su edad: "
//Leer edad
//PROCESO: 
//Si edad >= 18 Entonces
//Escribir "Al tener ",edad, " años ya es mayor de edad. "
//SiNo
//Escribir "Al tener ",edad, " años aun no es mayor de edad. "
//FinSi
//SALIDA:
//Escribir "Al tener ",edad, " años ya es mayor de edad. "
//Escribir "Al tener ",edad, " años aun no es mayor de edad. "
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();

function ejercicio12(){

    let edad=0

    edad=read ("Ingrese su edad: ")
    
    if (edad>=18){
        console.log(`Al tener ${edad}  años ya es mayor de edad. `)
    }
    else{
       console.log(`Al tener ${edad}  años aun no es mayor de edad. `)
    }
}
ejercicio12()
