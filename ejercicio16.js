//Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 
//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir letra Como Caracter
//	Escribir "ingrese un carater a evaluar:"
//	Leer letra
//PROCESO: 
//	si letra=="a" o letra=="e" o letra=="i" o letra=="o" o letra=="u" Entonces
//		Escribir "el caracter es una vocal"
//	SiNo
//		si letra=="A" o letra=="E" o letra=="I" o letra=="O" o letra=="U" Entonces
//			Escribir "el caracter es una vocal"
//		SiNo
//			Escribir "el caracter es una consonate"
//		FinSi
//	FinSi
//FinAlgoritmo
//SALIDA:
//Escribir "el caracter es una vocal"
//Escribir "el caracter es una vocal"
//Escribir "el caracter es una consonate"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();

function ejercicio16(){
    let letra=""
    letra= read ("ingrese el caracter a evaluar: ")
  

    if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
		console.log ("el caracter es una vocal ")
    }
    else if(letra=="A" || letra=="E" || letra=="I" || letra=="O" || letra=="U"){
		console.log ("el caracter es una vocal")
	}
    else{
        console.log ("el caracter es una consonante")
	
    }

}
ejercicio16()