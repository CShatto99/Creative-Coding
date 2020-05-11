int numPoints = 100;
PVector[] points = new PVector[numPoints];

void setup() {
  size(500, 500);
  for(int i = 0; i < numPoints; i++) {
    points[i] = new PVector(random(width), random(height));
  }
}

void draw() {
 loadPixels();
 for(int i = 0; i < pixels.length; i++) {
  float minDist = width;
  for(PVector v : points) {
   int x = floor(i/width);
   int y = i%width;
   float d = dist(x, y, v.x, v.y);
   if(d < minDist) minDist = d;
  }
  float shading = map(minDist, 0, width/(log(numPoints)), 0, 255);
  pixels[i] = color(shading, shading, shading+shading);
 }
 updatePixels();
 for(PVector v : points) {
  v.x += random(-2, 2);
  v.y += random(-2, 2);
 }
}
