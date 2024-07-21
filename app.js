let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento).innerHTML = texto;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p", `¡Ganaste! Era el ${numeroSecreto}. Lo adivinaste en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else
    // El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento("p", `El numero es menor`);
  } else {
    asignarTextoElemento("p", `El numero es mayor`);
  }

  intentos++;
  limpiarCaja();
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario").value = " "
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego Adivinar numero!");
  asignarTextoElemento("p", "Elige un numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //Limpiar caja
  limpiarCaja();
  //mensaje de Juego de Adivinar
  //numero aleatorio cambia
  //intentos = 0
  condicionesIniciales();
  // deshabilitar el btn
  document.querySelector("#reiniciar").setAttribute("disabled",true);
}


condicionesIniciales()
