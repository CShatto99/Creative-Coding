class Ball {
  PVector pos;
  PVector vel;
  PVector acc;
  float r = 1;
  
 Ball() {
   pos = new PVector(width/2, height/2);
   vel = new PVector(0, 0);
   acc = new PVector(0, 0);
 }
 
  void show() {
    noStroke();
    fill(255, 255, 0);
    ellipse(pos.x, pos.y, r, r);
  }
 
 void update() {
   pos.add(vel);
   vel.add(acc);
   acc = PVector.random2D();
   vel.limit(1000);
 }
 
 void bound() {
   if (pos.x < 0 || pos.x > width) {
    vel.x*=0;
    vel.y*=0;
   }
   else if (pos.y < 0 || pos.y > height) {
    vel.x*=0; 
    vel.y*=0;
   }
 }
}
