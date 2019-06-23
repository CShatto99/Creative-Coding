PImage input;
JSONArray colors;
int totalPixels, totalR, totalG, totalB, avgRed, avgGreen, avgBlue;


void setup() {
  size(1000, 1000);
  input = loadImage("green.png");
  totalPixels = input.pixels.length;
  colors = loadJSONArray("colors.json");
  println("Total colors in JSON file: " + colors.size());
  println();
}

void draw() {
  image(input, 0, 0);
  input.loadPixels();
  for(int x = 0; x < input.width; x++) {
    for(int y = 0; y < input.height; y++) {
      int loc = x + (y * input.width);
      int r = floor(red(input.pixels[loc]));
      int g = floor(green(input.pixels[loc]));
      int b = floor(blue(input.pixels[loc]));
      totalR+=r;
      totalG+=g;
      totalB+=b;
    }
  }
  getAverageRGB();
  findMatch();
 }
 
 void getAverageRGB() {
   avgRed = (totalR / totalPixels);
   avgGreen = (totalG / totalPixels);
   avgBlue = (totalB / totalPixels);
   displayImageInfo();
   noLoop();
 }
 
 void displayImageInfo() {
   String imageHexCode = String.format("#%02x%02x%02x", avgRed, avgGreen, avgBlue);
   println("Input Image Information: ");
   println("RGB: " + avgRed + " " + avgGreen + " " + avgBlue);
   println("Hex Code: " + imageHexCode);
   println();
   noLoop();
 }
 
 void findMatch() {
   String imageHexCode = String.format("#%02x%02x%02x", avgRed, avgGreen, avgBlue);
   int imageHexValue = Integer.decode(imageHexCode);
   int min = Integer.MAX_VALUE;
   int index = 0;
   
   for(int i = 1; i < colors.size(); i++) {
     JSONObject current = colors.getJSONObject(i);
     String currentHexCode = current.getString("hexString");
     int currentHexValue = Integer.decode(currentHexCode);
     int currentDiff = abs(currentHexValue - imageHexValue);
     
     if(currentDiff < min) {
       index = i;
       min = currentDiff;
     }
   }
   noLoop();
   JSONObject match = colors.getJSONObject(index);
   displayMatch(match);
 }
 
 void displayMatch(JSONObject match) {
   String hexCode = match.getString("hexString");
   String name = match.getString("name");
   JSONObject rgb = match.getJSONObject("rgb");
   int r = rgb.getInt("r");
   int g = rgb.getInt("g");
   int b = rgb.getInt("b");
   
   println("Closest Match Information: ");
   println("Name: " + name);
   println("RGB: " + r + " " + g + " " + b);
   println("Hex Code: " + hexCode);
 }
