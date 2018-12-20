"use strict";

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  display() {
    stroke(200);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y - 3;
  }
  reset() {
    if (this.y < -100) {
      this.x = random(0, width);
      this.y = height + this.r;
    }
  }
}