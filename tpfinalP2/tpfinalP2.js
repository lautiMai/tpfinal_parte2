let objJuego;
let pantallaInicio;

function setup() {
  createCanvas(640, 480);
  pantallaInicio = new PantallaInicio();
  objJuego = null;
}

function draw() {
  background(220);

  if (pantallaInicio.activa) {
    pantallaInicio.dibujar();
  } else {
    if (!objJuego) {
      objJuego = new Juego(3);
    }
    objJuego.dibujar();
  }
}

function mousePressed() {
  if (pantallaInicio.activa) {
    pantallaInicio.chequearBoton(mouseX, mouseY);
  } else if (objJuego && (objJuego.juegoTerminado || objJuego.gano)) {
    objJuego.chequearBotonesFin(mouseX, mouseY);
  }
}

function keyPressed() {
  if (objJuego && !pantallaInicio.activa) {
    objJuego.teclaPresionada(keyCode);
  }
}
