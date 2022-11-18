debugger
"use strict"


class Jugador{

    constructor(nombre,apellidos,nivel = 1,puntuacion = 1){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = nivel;                 //Creo un Constructor de los atributos del jugador
        this.puntuacion = puntuacion,
        this.puntuacionAcumuladaResta = 0   //Le añado este atributo para que cada vez que se reste puntuacion 10 veces reste 1 nivel
    }
    sumarPuntuacion(){
        this.puntuacion += 1
        if (this.puntuacion >= 10){     //Añado 1 punto y si supera los 10 sube un nivel
            this.nivel += 1
        }
    }
    restarPuntuacion(){
        this.puntuacionAcumuladaResta += 1
        this.puntuacion -= 1
        if(this.puntuacionAcumuladaResta >= 10){        //Resta los puntos y cada vez que resta 10 resta un nivel
            this.nivel -= 1
        }
        if(this.puntuacion == 0){this.resetearPuntuacion()}  //Cuando la puntuacion es 0 llama a la funcion resetear puntuacion 
    }
    resetearPuntuacion(){
        this.nivel = 1
        this.puntuacion = 1     //Pone en default las puntuaciones y termina la partida
        return alert(`El jugador ${this.nombre} ha sido eliminado`)
        
    }
}

let listaDeJugadores = []   //Creo una lista de jugadores vacia
let Jugador1 = new Jugador("Javi","Bartus")         //Creo los objetos
let Jugador2 = new Jugador("Jorge", "Perez")
Jugador1.sumarPuntuacion()
Jugador2.sumarPuntuacion()
Jugador1.restarPuntuacion()     //Ejecuto los metodos de los objetos
Jugador1.restarPuntuacion()

listaDeJugadores.push(Jugador1,Jugador2)    //Añado los jugadores a la lista
console.log(Jugador2)
console.log(Jugador1)
console.log(listaDeJugadores)
