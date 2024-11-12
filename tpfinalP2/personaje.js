class Personaje {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.miColor = color(0, 0, 255);
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX - 25, this.posY - 25, 50, 50);
  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    if (this.posX < 532) {
      this.posX += 213;
    }
  }

  moverIzquierda() {
    if (this.posX > 106) {
      this.posX -= 213;
    }
  }
}
