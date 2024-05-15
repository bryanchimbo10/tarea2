//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá. 
//Calcula y muestra el nuevo salario después del aumento. 
//ANALISIS DEL PROBLEMA
//ENTRADA:vs(leer),pa(leer),cp(calcular),ns(calcular)
//PROCESO: 
//cp=pa/100
//pa=vs*cp
//ns=vs+pa
//SALIDA:
//Escribir("El valor de su aumneto es de "+pa+" su nuevo sueldo con aumento es de "+ns)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read= require (`prompt-sync`)();
function ejercicio9(){

    let vs=0, pa=0,cp=0,ns=0

    vs= read(`ingrese el valor de su sueldo: `)
    vs= parseInt(vs)
    pa= read(`ingrese el valor de su sueldo: `)
    pa= parseInt(pa)

    cp=pa/100
    pa=vs*cp
    ns=vs+pa

    console.log("El valor de su aumneto es de "+pa+" su nuevo sueldo con aumento es de "+ns)

}
ejercicio9()