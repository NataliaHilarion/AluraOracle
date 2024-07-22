let numeroSecreto = 0;
let intentos = 0;
let listaNumeroGenerado = []
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento).innerHTML = texto;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado)
  console.log(listaNumeroGenerado)

  if(listaNumeroGenerado.length == numeroMaximo){
    return asignarTextoElemento("p", `Ya se sortearon todos los numeros posibles: ${numeroMaximo}`)
  } else {
    if (listaNumeroGenerado.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroGenerado.push(numeroGenerado);
      return numeroGenerado;
    }
  }
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
  let valorCaja = document.querySelector("#valorUsuario").value = ""
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego Adivinar numero!");
  asignarTextoElemento("p", `Elige un numero del 1 al ${numeroMaximo}`);
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
