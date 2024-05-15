//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad del número 2; Y si el numero 3 es divisor del numero4. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//num1=0,num2=0,num3=0,num4=0
//PROCESO: 
//si (num1==num2/2&& num3%num4==0)entonces
//    escribir (`las condiciones se cumple`)
//finsi
//sino 
//    escrbir(`las condiciones no se cumplen`)
//finsi
//SALIDA:
//    escribir (`las condiciones se cumple`)
//    escrbir(`las condiciones no se cumplen`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read= require (`prompt-sync`)();
function ejercicio6(){
    let num1=0,num2=0,num3=0,num4=0

    num1=read(`Ingrese una cantidad: `)
    num1=parseInt(num1)
    num2=read(`Ingrese una cantidad: `)
    num2=parseInt(num2)
    num3=read(`Ingrese una cantidad: `)
    num3=parseInt(num3)
    num4=read(`Ingrese una cantidad: `)
    num4=parseInt(num4)

    if (num1==num2/2&& num3%num4==0){
        console.log (`las condiciones se cumple`)
    }else {
        console.log(`las condiciones no se cumplen`)
    }



}
ejercicio6