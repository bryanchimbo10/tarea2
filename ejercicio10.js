// El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que: 
//Si su cliente tiene tarjeta tipo 1, el aumento será del  $100 . Si tiene tipo 2 el aumento será del $200 Si tiene tipo 3, 
//el aumento será del $300 Para cualquier otro tipo será del 500 Se pide realizar un algoritmo que ayude al banco a determinar 
//el nuevo límite de crédito que tendrá una persona en su tarjeta considerando que después del aumento se tendrá que subir 10% adicionales 
//a todas las tarjetas 
//ANALISIS DEL PROBLEMA
//ENTRADA:credito(leer), tipoTarjeta(leer)
//PROCESO: si tipo==1 credito = credito +100
         // sino si tipo == 2 credito = credito + 200
         // sino si tipo == 3 credito = credito + 300
         // sino credito = credito + 500
         // finsi
         // credito = credito + credito*aa
//SALIDA:escribir credito
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read=require (`prompt-sync`)();
function ejercicio10(){
    let credito=0,tipo ="",aa=0.10,credito2=0,credito3=0
    credito= read("ingres el valor de su credito: ")
    credito=parseInt(credito)
    tipo=read(`ingrese que tipo de tarjeta maneja con nosotros `)
    if (tipo==1){
        credito=credito+100
        console.log(`Su nuevo cupo disponible sin el aumento del 10% es de ${credito}`)
    }else if(tipo==2){
        credito=credito+200
        console.log(`Su nuevo cupo disponible sin el aumento del 10% es de ${credito}`)
    }else if(tipo==3){
        credito=credito+300
        console.log(`Su nuevo cupo disponible sin el aumento del 10% es de ${credito}`)
    }else{
        credito=credito+500
        console.log(`Su nuevo cupo disponible sin el aumento del 10% es de ${credito}`)
    }
    console.log(`AL CONOCER SU CUPO DISPONIBLE SE LE REALIZARA UN AUMENTO DEL 10%`)
    credito2= credito*aa
    credito3=credito+credito2
    console.log(`Su nuevo cupo disponible es de ${credito3}`)



}
ejercicio10()

