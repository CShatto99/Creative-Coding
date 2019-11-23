"use strict";

class Player {

  constructor() {

    this.speed = 3;
    this.x = 250;
    this.y = 0;
    this.w = 20;
    this.h = 20;

  }

  // displays the player
  show() {

    noStroke();
    fill(0, 50, 200);
    rect(this.x, this.y, this.w, this.h);

  }

  // allows the player to move
  keyPressed() {

    if (keyCode === UP_ARROW) {
      this.y-=this.speed;
    } else if (keyCode === DOWN_ARROW) {
      this.y+=this.speed;
    } else if (keyCode === LEFT_ARROW) {
      this.x-=this.speed;
    } else if (keyCode === RIGHT_ARROW) {
      this.x+=this.speed;
    }

  }

  // restrains the positon of the player to the boundaries of the screen
  bound() {

    if (this.x > width - this.w) {
      this.x-=this.speed;
    } else if (this.x < 0) {
      this.x+=this.speed;
    } else if (this.y > height - this.h) {
      this.y-=this.speed;
    } else if (this.y < 0) {
      this.y+=this.speed;
    }

  }

}
