Ball[] balls;
int numBalls = 2000;

void setup() {
  //background(0);
  fullScreen();
  balls = new Ball[numBalls];
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball();
  }
}

void draw() {
  background(0);
  for (int i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].update();
    //balls[i].bound();
  }
}
