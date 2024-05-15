// Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos. 
//Si la nota es mayor a 40 y menor a 60 se queda para recuperación caso contario pierde la materia. 
//ANALISIS DEL PROBLEMA
//ENTRADA: notaexa=leer
//PROCESO: si (notaexa>40&&notaexa<60)entoces
        //Escribir(`la nota de ${notaexa} hace que usted pase a un proceso de recuperacion`)
    //sino(notaexa>=60 )
    //    Escribir(`la nota de ${notaexa} nos indica que usted ha aprobado la materia`)
   // fin si
   //sino(notaexa<=40){
    //   Escribir(`la nota de ${notaexa} nos indica que usted ha reprobado la materia`)
    //fin si
//SALIDA:
    //    Escribir(`la nota de ${notaexa} hace que usted pase a un proceso de recuperacion`)
    //    Escribir(`la nota de ${notaexa} nos indica que usted ha aprobado la materia`)
    //    Escribir(`la nota de ${notaexa} nos indica que usted ha reprobado la materia`)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read =require(`prompt-sync`)();
function ejercicio24(){
    let notaexa=0
    notaexa= read ("Ingrese la nota de examen: ")
    notaexa=parseInt(notaexa)
    if (notaexa>40&&notaexa<60){
        console.log(`la nota de ${notaexa} hace que usted pase a un proceso de recuperacion`)
    }else if(notaexa>=60 ){
        console.log(`la nota de ${notaexa} nos indica que usted ha aprobado la materia`)
    }else if(notaexa<=40){
        console.log(`la nota de ${notaexa} nos indica que usted ha reprobado la materia`)
    }



}
ejercicio24()




