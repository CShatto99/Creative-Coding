
Other [] vertices;
int numOfVert = 4;
void setup ()  {
  background(0);
  fullScreen();
  vertices = new Other[numOfVert];
  for (int i = 0; i < vertices.length; i++) {
   vertices[i] = new Other();
  }
}

void draw () { 
  //background(0);
  int r = 200;
  int b = 100;
  for (int i = 0; i < vertices.length; i++) {
   //vertices[i].show();
   vertices[i].move();
   vertices[i].bound();
   stroke(lerpColor(r, b, (millis()%5000)/5000.0), 10);
   line(vertices[0].pos.x, vertices[0].pos.y, vertices[i].pos.x, vertices[i].pos.y);
  } 
}
