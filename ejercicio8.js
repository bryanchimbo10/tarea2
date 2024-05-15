//Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si es positivo par o impar múltiplo de 7. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//num1=0
//PROCESO:
//si (num1<-20)entonces
//    escribir(`el numero ingresado es menor que 20`)
//fin si
//sino si(num1<0&&num1%2==0&&num1%7==0) entonces
//    escribir(`se cumple la segunda condicion`)
//finsi
//SALIDA:
//    escribir(`el numero ingresado es menor que 20`)
//    escribir(`se cumple la segunda condicion`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read= require (`prompt-sync`)();
function ejercicio8(){
    let num1=0

    num1=read(`Ingrese una cantidad: `)
    num1=parseInt(num1)
   
    if (num1<-20){
        console.log (`el numero ingresado es menor que 20`)
    }else if(num1<0&&num1%2==0&&num1%7==0) {
        console.log(`se cumple la segunda condicion`)
    }
}
ejercicio8()
