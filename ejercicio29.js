//Pide al usuario su salario actual y la cantidad de años de antigüedad. 
//Calcule el valor del bono de antigüedad del empleado aplicando el 3% del salario por el número de años de antigüedad 
//siempre y cuando supere los 3 años, caso contrario el bono de antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//sueldo=0, aa=0,ba=0.03,sueldofinal=0,sueldocal=0,maa=0
//PROCESO:
//si (aa>3)entonces
//    maa=sueldo*ba
 //   sueldocal= sueldo-maa
//    sueldofinal=sueldo+sueldocal
//   escribir(`Su sueldo adicional al bono de antiguedad es de ${sueldofinal}`)
//finsi
///sino
//       escribir (`Usted no cumple con el periodo de antiguedad para recibir el bono salarial por antiguedad`)
//finsi 
//SALIDA:
//escribir(`Su sueldo adicional al bono de antiguedad es de ${sueldofinal}`)
//       escribir (`Usted no cumple con el periodo de antiguedad para recibir el bono salarial por antiguedad`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
function ejercicio29(){
    let sueldo=0, aa=0,ba=0.03,sueldofinal=0,sueldocal=0,maa=0
    console.log(`Para recibir el bono salarial por antiguedad los años deben ser superiores a 3`)
    console.log(``)
    sueldo= read (`ingrese su sueldo actual: `)
    sueldo=parseInt(sueldo)
    console.log(``)
    aa= read (`Ingrese cuantos aos lleva laborando en la emrpesa: `)
    aa=parseInt(aa)
    if (aa>3){
     maa=sueldo*ba
     sueldocal= sueldo-maa
     sueldofinal=sueldo+sueldocal
     console.log (`Su sueldo adicional al bono de antiguedad es de ${sueldofinal}`)
    }else{
        console.log (`Usted no cumple con el periodo de antiguedad para recibir el bono salarial por antiguedad`)
    }
}
ejercicio29()
