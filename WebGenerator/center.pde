class Dot {
  PVector position;
  float r;
  
  Dot() {
    position = new PVector(width/2, height/2);
    r = 10;
  }
  
  void show() {
    noStroke();
    fill(255, 0, 0);
    ellipse(position.x, position.y, r, r);
  }
}
