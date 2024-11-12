class Camino {
  constructor(posX) {
    this.posX = posX;
    this.miColor = color(150, 150, 150);
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX - 106, 0, 213, height);
  }
}
