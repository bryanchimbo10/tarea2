//Pedir al usuario un número y mostrar si es par o impar.  
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir n Como Entero
//PROCESO: 
//si n mod 2==0 Entonces
//Escribir "El numero ",n, " es par"
//SiNo
//Escribir "El numero ",n, " es impar"
//FinSi
//SALIDA:
//Escribir "El numero ",n, " es par"
//Escribir "El numero ",n, " es impar"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require(`prompt-sync`)();

function ejercicio13(){
    let n=0
    n=read ("Ingrese un numero: ")
    n= parseInt(n)
    if (n % 2==0){
        console.log(`El numero ${n}  es par`)
    }
    else{
        console.log(`El numero ${n}  es impar`)
    }


}
ejercicio13()
