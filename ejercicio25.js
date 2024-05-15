// Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación está entre el 2020 y 2023, 
//aplicar un descuento del 5% sobre el precio de venta. mostrar el precio final incluyendo el 15% del IVA. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir preciovehi=0,ano_fabri=0,descu=0.05,precio_final=0,iva=0.15,precio_final2=0,precio_final3=0,preciosindes=0 Como real
//PROCESO: 
//	Si ano_fabri>=2020&&ano_fabri<=2023 Entonces
//		descu=preciovehi*descu
		//precio_final=preciovehi - descu
        //precio_final2=precio_final*iva 
		//precio_final3=precio_final+precio_final2
		//escrbir (`El Precio de su vehiculo es de:  ${preciovehi}`)
		//escrbir ("")
		//escrbir (`El valor de  su descuento es:  ${descu}`)
		//escrbir ("")
		//escrbir (`El precio final de su vehiculo es de:  ${precio_final3}`)
//	SiNo
//		 iva=preciovehi*iva
		//preciosindes=preciovehi+iva
		//escrbir (`El Precio de su vehiculo es de:  ${preciosindes}`)
		//escrbir("")
		//escrbirg ("Usted no recibe ningun descuento ya que el vehiculo que va a adquierir no se encuentra comprendidio entre el año 2020 y el ao 2023")
//	FinSi
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();

function ejercicio25 (){
    let  preciovehi=0,ano_fabri=0,descu=0.05,precio_final=0,iva=0.15,precio_final2=0,precio_final3=0,preciosindes=0
	console.log ("")
	console.log("ADVERTENCIA:Recuerde que si su vehiculo esta entre el 2020 y 2023 aplica un descuento...")
    console.log ("ADVERTENCIA:Recuerde que por la compra tambien se cobra iva que es el 15%...")
	console.log ("")
    preciovehi= read ("Ingrese el precio de su vehiculo: ")
    preciovehi=parseInt(preciovehi)
	console.log ("")
    ano_fabri= read ("Ingrese el año de fabricacion del vehiculo: ")
    ano_fabri=parseInt(ano_fabri)
    console.log ("")
    if (ano_fabri>=2020&&ano_fabri<=2023){
        
        descu=preciovehi*descu
		precio_final=preciovehi - descu
        precio_final2=precio_final*iva 
		precio_final3=precio_final+precio_final2
		console.log (`El Precio de su vehiculo es de:  ${preciovehi}`)
		console.log ("")
		console.log (`El valor de  su descuento es:  ${descu}`)
		console.log ("")
		console.log (`El precio final de su vehiculo es de:  ${precio_final3}`)
    }
    else{
		
        iva=preciovehi*iva
		preciosindes=preciovehi+iva
		console.log (`El Precio de su vehiculo es de:  ${preciosindes}`)
		console.log ("")
		console.log ("Usted no recibe ningun descuento ya que el vehiculo que va a adquierir no se encuentra comprendidio entre el año 2020 y el ao 2023")
	}

}
ejercicio25()
