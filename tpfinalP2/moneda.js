class Moneda {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.miColor = color(200, 255, 0);
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  mover() {
    this.posY += 3;
  }

  estaRecolectada(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX + 25, personaje.posY + 25);
    return distancia < 35;
  }

  fueraDePantalla() {
    return this.posY > height;
  }
}
