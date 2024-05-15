//. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el sueldo actual es menor que 500,
// aplica el incremento del 5%, de lo contrario, no aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento aplicado.
//ANALISIS DEL PROBLEMA
//ENTRADA:sueldo=0, pisa=0,incre=0.05,sueldofinal=0,sueldocal=0,pisaconvertido=0
//PROCESO: 
//si (sueldo<500)entonces
 //   sueldocal=sueldo*incre
//    sueldofinal=sueldocal+sueldo
//    escribir(`su sueldo es de ${sueldofinal}`)
//finsi
//sino
//    sueldocal=sueldo*pisaconvertido
//    sueldofinal=sueldo+sueldocal
//   escribir(`su sueldo es de ${sueldofinal}`)
//finsi
//SALIDA:
//   escribir(`su sueldo es de ${sueldofinal}`)
//  escribir(`su sueldo es de ${sueldofinal}`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
function ejercicio27(){
    let sueldo=0, pisa=0,incre=0.05,sueldofinal=0,sueldocal=0,pisaconvertido=0
    console.log(`recuerde que si su sueldo es menor a $500 solo recibe el 5% de incremento`)
    console.log(``)
    sueldo= read (`ingrese su sueldo actual: `)
    sueldo=parseInt(sueldo)
    console.log(``)
    pisa= read (`ingrese el porcentaje de incremento del salrio anual: `)
    pisa=parseInt(pisa)
    pisaconvertido=pisa/100


    if (sueldo<500){
        sueldocal=sueldo*incre
        sueldofinal=sueldocal+sueldo
        console.log(`su sueldo es de ${sueldofinal}`)
    }else{
        sueldocal=sueldo*pisaconvertido
        sueldofinal=sueldo+sueldocal
        console.log(`su sueldo es de ${sueldofinal}`)
    }

}
ejercicio27()