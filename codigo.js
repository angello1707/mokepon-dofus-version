const sectionReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar =document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputPandora = document.getElementById("Pandora")
const inputKratos = document.getElementById("Kratos")
const inputGricelda = document.getElementById("Gricelda")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador =document.getElementById("vidas-jugador")
const spanVidasEnemigo =document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let mokepones =[]
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida ){
        this.nombre = nombre
        this.foto= foto
        this.vida= vida
        this.ataques =[]
    }
}

let Pandora = new Mokepon("Pandora","./assets/Pandora1.png",3)
let Kratos = new Mokepon("Kratos","./assets/Grillo1.png", 3)
let Gricelda =  new Mokepon("Gricelda","./assets/Gricelda1.png", 3)

mokepones.push(Pandora,Kratos,Gricelda)


function iniciarJuego(){
    
    sectionReiniciar.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none" 
    botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador) 
    botonFuego.addEventListener("click", ataqueFuego)  
    botonAgua.addEventListener("click", ataqueAgua) 
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
// seleccion de Mascota
function SeleccionarMascotaJugador(){   
    sectionSeleccionarMascota.style.display = "none" 
    sectionSeleccionarAtaque.style.display = "flex"   
            if (inputPandora.checked){
                spanMascotaJugador.innerHTML= "Pandora"
            } else if(inputKratos.checked){
                spanMascotaJugador.innerHTML= "Kratos"
            } else if(inputGricelda.checked){
                spanMascotaJugador.innerHTML= "Gricelda"
            }  else {
                alert("No seleccionaste ninguna mascota")
                reiniciarJuego()
            }
            SeleccionarMascotaEnemigo()
}
//Seleccion de Mascota Computador Aleatorio
function SeleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
        if (mascotaAleatoria == 1){
            spanMascotaEnemigo.innerHTML= "Pandora"
        }  else if (mascotaAleatoria == 2){
            spanMascotaEnemigo.innerHTML= "Kratos"
        }  else if(mascotaAleatoria == 3){
            spanMascotaEnemigo.innerHTML= "Gricelda"
        }
}
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo= "FUEGO"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }
    combate()
}
function combate(){
            if(ataqueEnemigo == ataqueJugador) {
                CrearMensaje("EMPATE")

            }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
                CrearMensaje("GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
                CrearMensaje("GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
                CrearMensaje("GANASTE")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else{
                CrearMensaje("PERDISTE")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
                
            }

            revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        CrearMensajeFinal("FELICITACIONES! GANASTE😍")
    } else if (vidasJugador == 0){
        CrearMensajeFinal("LO SIENTO PERDISTE😪")
    }
}
function CrearMensaje(resultado){ 
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function CrearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal  
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)