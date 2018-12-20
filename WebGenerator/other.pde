class Other {
  PVector pos;
  PVector vel;
  PVector acc;
  float r;
  float speed = 5;
  
  Other() {
    pos = new PVector(random(width), random(height));
    vel = new PVector(random(-speed, speed), random(-speed, speed));
    //acc = new PVector(0, 1);
    r = 2;
  }
  
  void show() {
    noStroke();
    fill(0, 255, 0);
    ellipse(pos.x, pos.y, r, r);
  }
  
  void move() {
    pos.add(vel);
    //vel.limit(50);
    //vel.add(acc);
  }
  
  void bound() {
    if ((pos.x < 0) || (pos.x > width)) {
     vel.x *= -1;
    }
    else if ((pos.y < 0) || (pos.y > height)) {
      vel.y *= -1;
    }
  }
}
