// Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar 
//el descuento siempre cuando el precio sea mayor $100. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//pp=0,pd=0,pd2=0,pf=0,pdc=0
//PROCESO: 
//si(pp>100)entoces
//    pd2=pp*pdc
 //   pf=pp-pd2
//    console.log(`su precio sin descuento es de ${pp} y su total a pagar con descuento es de ${pf}`)
//finsi
//sino si entonces
//    console.log(`Su compra no aplica descuento debido a que no es superior a $100`)
//    fin si
//SALIDA:
//    escribir(`su precio sin descuento es de ${pp} y su total a pagar con descuento es de ${pf}`)
//    escribir(`Su compra no aplica descuento debido a que no es superior a $100`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)()
function ejercicio23(){
    let pp=0,pd=0,pd2=0,pf=0,pdc=0
    pp= read (`ingrese el precio del producto`)
    pp= parseInt(pp)
    pd= read (`ingrese valor del descuento:`)
    pd= parseInt(pd)
    pdc=pd/100
    if (pp>100){
        pd2=pp*pdc
        pf=pp-pd2
        console.log(`su precio sin descuento es de ${pp} y su total a pagar con descuento es de ${pf}`)

    }else {
        console.log(`Su compra no aplica descuento debido a que no es superior a $100`)
    }
}
ejercicio23()
