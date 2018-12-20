"use strict";
class Obstacle {
  constructor(x, y, h, leftW, rightX, rightW) {
    this.speed = 2;
    this.h = h;
    this.leftX = x;
    this.leftY = y
    this.leftW = leftW;
    this.rightX = rightX;
    this.rightY = y
    this.rightW = rightW;
  }
  
  showLeft() {
    stroke(255);
    fill(200, 25, 50);
    rect(this.leftX, this.leftY, this.leftW, this.h);
  }
  
    showRight() {
    stroke(255);
    fill(200, 25, 50);
    rect(this.rightX, this.rightY, width, this.h);
  }
  
  move() {
    this.leftY -= this.speed;
    this.rightY -= this.speed;
  }
  
  bound() {
    if (this.leftY < -this.h) {
      this.leftY = 60000 + height;
      this.rightY = 60000 + height;
      
      
      //walls.shift();
    }
  }
}