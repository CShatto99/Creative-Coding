class Ball {
  PVector pos;
  PVector vel;
  PVector acc;
  float r = 3;
  
 Ball() {
   pos = new PVector(width/2, height/2);
   vel = new PVector(0, 0);
   acc = new PVector(0, 0);
 }
 
  void show() {
    noStroke();
    fill(255);
    ellipse(pos.x, pos.y, r, r);
  }
 
 void update() {
   PVector mouse = new PVector(mouseX, mouseY);
   pos.add(vel);
   vel.add(acc);
   vel.limit(random(5, 500));
   mouse.sub(pos);
   mouse.setMag(.5);
   acc = mouse;
   
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
