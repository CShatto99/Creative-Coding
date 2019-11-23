"use strict";
let walls = [];
let player;
let score = 0;
let collision = false;

// loads the canvas and generates an arbitrary number of obstacles
function setup() {

    createCanvas(500, 600);

    player = new Player();
    let obstacles = 500;
    let x = -1;
    let h = 20;
    let rightW = 600;

    for (var i = 0; i < obstacles; i++) {

      let y = (i * 120) + height;
      let leftW;
      let rightX;

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

  // call the player methods
  player.show();
  player.keyPressed();
  player.bound();

  // for every wall, call their methods
  for (var i = 0; i < walls.length; i++) {

    walls[i].showLeft();
    walls[i].showRight();
    walls[i].move();
    walls[i].bound();

  }

  // looks for a collision
  detectCollision();

  // display the current score
  displayScore();

  // increase the difficulty
  increaseDifficulty();

}

// displays the current score
function displayScore() {

    score+=1;
    Math.round(score);

    fill(255);
    textSize(10);
    textAlign(LEFT);
    text('SCORE: ' + score, 1, 10);

}

// slowly increments the speed of the obstacles
function increaseDifficulty() {

   for (var i = 0; i < walls.length; i++) {

    if (score % 200 == 0) {

      walls[i].speed+=.1;

    }

  }

}

// searches for a collision between the players and the obstacles
function detectCollision() {

    for (var i = 0; i < walls.length; i++) {

      // collision detection between the player and the left set of obstacles
      if (player.x > walls[i].leftX - walls[i].leftW && player.x < walls[i].leftX + walls[i].leftW &&
      player.y > walls[i].leftY - player.h && player.y < walls[i].leftY + player.h) {

        noLoop();
        collision = true;

        fill(255);
        textAlign(CENTER);

        textSize(32);
        text('GAME OVER', 250, 250);

        textSize(24);
        text('SCORE: ' + score, 250, 280);

      }

      // collision detection between the player and the right set of obstacles
      else if (player.x < walls[i].rightX + walls[i].rightW && player.x + player.w > walls[i].rightX &&
      player.y > walls[i].rightY - player.h && player.y < walls[i].rightY + player.h) {

        noLoop();
        collision = true;

        fill(255);
        textAlign(CENTER);

        textSize(32);
        text('GAME OVER', 250, 250);

        textSize(24);
        text('SCORE: ' + score, 250, 280);

      }

      collision = false;

    }

  }
