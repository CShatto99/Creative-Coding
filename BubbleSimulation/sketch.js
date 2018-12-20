"use strict";
let bubbles = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 15; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(1, 10);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function mouseDragged() {
  let r = random(1, 10);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0, 75, 100);
  //background(175, 175, 50);
  for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].display();
  bubbles[i].move();
  bubbles[i].reset();
  if (bubbles.length > 400 && bubbles[i].y < 0) {
    bubbles.shift();
  }
  }
  
}