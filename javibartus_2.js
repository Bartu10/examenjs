debugger
"use strict"
function isLeapYear(year1, year2){

let anho1 = parseInt(year1)     //Recibo los parametros de los años y les quito los decimales
let anho2 = parseInt(year2)
if (isNaN(anho1) || isNaN(anho2)){      //Compruebo si son numeros
    return alert("No has introducido numeros")
}
if (anho1 < 2001 || anho2 > 2500){      //Compruebo que esta dentro de los limites
    return alert("El año introducido es mayor de 2500 y menor de 2001")
}

for (let x = anho1; x <= anho2; x++){       //Creo un bucle for que empieze en el año de inicio y termine en el año de fin
    if ((x % 4 == 0) || (x % 100 == 0 && x % 400 == 0)){    //Si es divisible por 4 o por 100 cuando tambien lo sea por 400 es bisiesto
        document.write(`${x}, `)    //Imprimo en el documento los años
    }
}
}

isLeapYear(2004,2400)