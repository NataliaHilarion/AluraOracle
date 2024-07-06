let numeroSecreto = generarNumeroSecreto()
let intentos = 1;

function asignarTextoElemento (elemento, texto){
  let elementoHtml = document.querySelector(elemento)
  elementoHtml.innerHTML = texto
}

function generarNumeroSecreto() {
  return Math.floor(Math.random()*10)+1
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento("p", `¡Ganaste! Era el ${numeroSecreto}. Lo adivinaste en ${intentos} ${ (intentos === 1) ? "intento" : "intentos" }`)
  } else if(numeroDeUsuario > numeroSecreto){
     asignarTextoElemento("p", `El numero es menor`)
  } else {
     asignarTextoElemento("p", `El numero es mayor`)
     intentos++
  }

}

asignarTextoElemento("h1", "Juego Adivinar numero!")
asignarTextoElemento("p", "Elige un numero del 1 al 10")


