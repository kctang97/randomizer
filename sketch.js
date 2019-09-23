

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(0);
  fill(random(100, 255), random(100, 255), random(100, 255));
  textSize(40);
  text("Welcome", random(1, width), random(1, height));
}
