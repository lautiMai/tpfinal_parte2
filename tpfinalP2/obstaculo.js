class Obstaculo {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.miColor = color(255, 0, 0);
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 50, 50);
  }

  mover() {
    this.posY += 2;
  }

  estaColisionado(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX + 25, personaje.posY + 25);
    return distancia < 50;
  }

  fueraDePantalla() {
    return this.posY > height;
  }
}
