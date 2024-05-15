//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de descuento a aplicar en porcentaje. 
//Si el precio total de la compra supera los $10, aplica el descuento, de lo contrario, no aplica ningún descuento. 
//Calcula y muestra el monto final con el descuento con el IVA del 15%. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//pt=0,cd=0,iva=0.15,cdc=0,pf=0,cd1=0,cd2=0,pf1=0
//PROCESO: 
//si (pt>10)entonces
//    cd1=pt*cdc
//    cd2=pt-cd1
//    pf=cd2*iva
//    pf1=cd2+pf
//    escribir(`Su compra es superior a los $10  enonces se le aplica su cupon de descuento ${cd} su precio total a pagar con IVA es ${pf1}`)
//finsi
//sino
//       pf=pt*iva
//       pf1=pt+pf
//       escribir (`su compra al ser menor de $10 no recibe descuento, su valor a pagar con IVA es de ${pf1}`)
//finsi
//SALIDA:
//    escribir(`Su compra es superior a los $10  enonces se le aplica su cupon de descuento ${cd} su precio total a pagar con IVA es ${pf1}`)
//    escribir (`su compra al ser menor de $10 no recibe descuento, su valor a pagar con IVA es de ${pf1}`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
function ejercicio28 (){
    let pt=0,cd=0,iva=0.15,cdc=0,pf=0,cd1=0,cd2=0,pf1=0
    pt=read (`ingrese el precio total de una compra: `)
    pt= parseInt(pt)
    cd=read (`ingrese el valor de descuneto: `)
    cd= parseInt(cd)
    cdc=cd/100

    if (pt>10){
     cd1=pt*cdc
     cd2=pt-cd1
     pf=cd2*iva
     pf1=cd2+pf
     console.log(`Su compra es superior a los $10  enonces se le aplica su cupon de descuento ${cd} su precio total a pagar con IVA es ${pf1}`)


    }else{
        pf=pt*iva
        pf1=pt+pf
        console.log(`su compra al ser menor de $10 no recibe descuento, su valor a pagar con IVA es de ${pf1}`)
    }

}
ejercicio28()
