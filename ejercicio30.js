//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento que ofrece por ser cliente frecuente. 
//Si el total de la cuenta supera los $70, aplica el descuento por fidelidad, de lo contrario, no se aplica ningún descuento.
//Calcula y muestra el monto final con el descuento aplicado más el IVA del 15%. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//tc=0, pd=0,iva=0.15,tcf1=0,tcc=0,tcf2=0,pdc=0,ivac=0,cf="si"
//PROCESO: 
//si (tc>70&&cf=="si")entonces
//    tcc=tc*pdc
//    tcf1=tc-tcc
//    ivac=tcf1*iva
//   tcf2=tcf1+ivac
//Escribir (`El total a pagar es de: ${tcf2}`)   
///finsi
//sino
//    ivac=tc*iva
//   tcf2=tc+ivac
//escribir(`El total a pagar es de: ${tcf2}`)
//finsi
//SALIDA:
//Escribir (`El total a pagar es de: ${tcf2}`)
//escribir(`El total a pagar es de: ${tcf2}`)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require (`prompt-sync`)();
function ejercicio30(){
    let tc=0, pd=0,iva=0.15,tcf1=0,tcc=0,tcf2=0,pdc=0,ivac=0,cf="si"
    console.log(`ADVERTECNIA , SI SU CONSUMO ES SUPERIOR A 70 Y ES CLIENTE FRECUNETE RECIBE EL VALOR DE DESCUENTO DE SU CUPON INGRESADO `)
    console.log(``)
    tc= read (`ingrese el valor de su cuenta: `)
    tc=parseInt(tc)
    console.log(``)
    pd= read (`Ingrese el valor de descuento: `)
    pd=parseInt(pd)
    pdc=pd/100
    console.log(``)
    cf= read (`Es usted cliente frecuente: `)
    console.log(``)

   if (tc>70&&cf=="si"){
    tcc=tc*pdc
    tcf1=tc-tcc
    ivac=tcf1*iva
    tcf2=tcf1+ivac

    console.log(`El total a pagar es de: ${tcf2}`)
    
   }else{
    ivac=tc*iva
    tcf2=tc+ivac
    console.log(`El total a pagar es de: ${tcf2}`)

   }
}
ejercicio30()