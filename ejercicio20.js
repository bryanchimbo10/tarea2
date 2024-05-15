//Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.  
//ANALISIS DEL PROBLEMA
//ENTRADA:num(leer)
//PROCESO: if (num>0&&num<=100){
        
//SALIDA:
//escribir(`${num} es mayor que 0 y es menor igual que 100`)
//escribir(`${num} es mayor que 0 y es menor igual que 100`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)()
function ejercicio20 (){
    let num=0

    num=read(`ingrese un numero: `)
    num=parseInt(num)

    if (num>0&&num<=100){
        console.log(`${num} es mayor que 0 y es menor igual que 100`)

    }else{
        console.log(`no cumple con la condicion`)
    }

}
ejercicio20()
