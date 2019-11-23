"use strict";
class Obstacle {

  constructor(x, y, h, leftW, rightX, rightW) {

    this.speed = 2;
    this.h = h;

    // variables for left set of obstacles
    this.leftX = x;
    this.leftY = y;
    this.leftW = leftW;

    // variables for right set of obstacles
    this.rightX = rightX;
    this.rightY = y;
    this.rightW = rightW;

  }

  // displays the left set of obstacles
  showLeft() {

    stroke(255);
    fill(200, 25, 50);
    rect(this.leftX, this.leftY, this.leftW, this.h);

  }

  // displays the right set of obstacles
  showRight() {

    stroke(255);
    fill(200, 25, 50);
    rect(this.rightX, this.rightY, width, this.h);

  }

  // moves every obstacle upwards by continuously subtracting the speed from the y position
  move() {

    this.leftY -= this.speed;
    this.rightY -= this.speed;

  }

  // resets the obstacles position if it moves beyond the upper boundary of the screen
  bound() {

    if (this.leftY < -this.h) {

      this.leftY = 60000 + height;
      this.rightY = 60000 + height;

    }

  }

}
