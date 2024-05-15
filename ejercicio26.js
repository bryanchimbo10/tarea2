//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado en su región. 
//Si el precio del artículo supera los $200, aplica el impuesto de ventas, de lo contrario, no se aplica impuesto. 
//Calcula y muestra el precio final luego de aplicar el impuesto. 
//ANALISIS DEL PROBLEMA
//ENTRADA:pa=0,iv=0,ivc=0,iv2=0,pf=0
//PROCESO: 
//si(pa>200)entoces
//    iv2=pa*ivc
//    pf=pa+iv2
//    escribir(`Su compre supera los $200 dolares entonces se le aplica el impuesto de venta que es de ${iv}%, su valor a cancelar es de ${pf}`)
//finsi
//sino
//   escribir(`su compra no supera los $200 dolares entonces no se le aplica el impuesto de venta`)
//    finsi
//SALIDA:
//    escribir(`Su compre supera los $200 dolares entonces se le aplica el impuesto de venta que es de ${iv}%, su valor a cancelar es de ${pf}`)
//    escribir(`su compra no supera los $200 dolares entonces no se le aplica el impuesto de venta`)
//finsi
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)()
function ejercicio26(){
    let pa=0,iv=0,ivc=0,iv2=0,pf=0
    pa= read (`ingrese el precio del articulo`)
    pa=parseInt(pa)
    console.log(``)
    iv= read (`ingrese el precio del articulo`)
    iv=parseInt(iv)
    ivc=iv/100
    if (pa>200){
        iv2=pa*ivc
        pf=pa+iv2
        console.log(`Su compre supera los $200 dolares entonces se le aplica el impuesto de venta que es de ${iv}%, su valor a cancelar es de ${pf}`)
    }else{
        console.log(`su compra no supera los $200 dolares entonces no se le aplica el impuesto de venta`)
    }
}
ejercicio26()

//Emir141023