//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//mtf=0,ac=0,pd2=0,pf=0,pdc=0,iva1=0.12,iva2=0.15
//PROCESO: 
//si (ac<2024)entonces
//    pd2=mtf*iva1
//    pf=mtf+pd2
//    console.log(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
//finsi
//sino si(ac>=24)entonces
//    pd2=mtf*iva2
//    pf=mtf+pd2
//    console.log(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
//finsi
//SALIDA:
//   escribir(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
//   escribir(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)()
function ejercicio22(){
    let mtf=0,ac=0,pd2=0,pf=0,pdc=0,iva1=0.12,iva2=0.15
    mtf= read (`ingrese el monto total de la factura: `)
    mtf= parseInt(mtf)
    ac= read (`ingrese el año de la compra: `)
    ac= parseInt(ac)
   
    if (ac<2024){
        pd2=mtf*iva1
        pf=mtf+pd2
        console.log(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
    }else if(ac>=24){
        pd2=mtf*iva2
        pf=mtf+pd2
        console.log(`su precio sin iva es ${mtf} y su total a pagar con iva es de ${pf}`)
    }
}
ejercicio22()

