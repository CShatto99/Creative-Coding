"use strict";
let walls = [];
let leftW;
let rightX;
let player;
let counter = 0;
let testEnd = false;

function setup() {
    createCanvas(500, 600);
    player = new Player();
    for (var i = 0; i < 500; i++) {
    var x = -1;
    var y = (i * 120) + height;
    var h = 20;
    var rightW = 600;
    leftW = random(100, 250);
    rightX = random(300, 400);
    if(leftW < 150) {
      rightX = random(200, 300);
    }
    else if (rightX > 350) {
      leftW = random(200, 300);
    }
    walls[i] = new Obstacle(x, y, h, leftW, rightX, rightW);
  }
}

function draw() {
  background(75);
  player.show();
  player.keyPressed();
  player.bound();
  for (var i = 0; i < walls.length; i++) {
    walls[i].showLeft();
    walls[i].showRight();
    walls[i].move();
    walls[i].bound();
  }
  
  if (!testEnd) {
    counter+=1;
    Math.round(counter);
    fill(255);
    textSize(10);
    text('SCORE: ' + counter, 1, 10);
  }

  for (var i = 0; i < walls.length; i++) {
    if (counter % 200 == 0) {
      walls[i].speed+=.1;
    }
  }
  
  for (var i = 0; i < walls.length; i++) {
    if (player.x > walls[i].leftX - walls[i].leftW && player.x < walls[i].leftX + walls[i].leftW &&
    player.y > walls[i].leftY - player.h && player.y < walls[i].leftY + player.h) {
      fill(255);
      textSize(32);
      textAlign(CENTER);
      text('GAME OVER', 250, 250);
      textSize(24);
      textAlign(CENTER);
      text('SCORE: ' + counter, 250, 280);
      noLoop();
      testEnd = true;
      } 
    else if (player.x < walls[i].rightX + walls[i].rightW && player.x + player.w > walls[i].rightX &&
    player.y > walls[i].rightY - player.h && player.y < walls[i].rightY + player.h) {
      fill(255);
      textSize(32);
      textAlign(CENTER);
      text('GAME OVER', 250, 250);
      textSize(24);
      textAlign(CENTER);
      text('SCORE: ' + counter, 250, 280);
      noLoop();
      testEnd = true;
      }
      testEnd = false
   }

  // if (walls.length == 0) {
  //   fill(255);
  //   textSize(32);
  //   textAlign(CENTER);
  //   text('YOU HAVE SURVIVED', 250, 250);
  //   textSize(24);
  //   textAlign(CENTER);
  //   text('SCORE: ' + counter, 250, 280);
  //   noLoop();
  // }
}