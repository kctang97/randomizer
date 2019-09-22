function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  background(0);
  fill(random(100, 255), random(100, 255), random(100, 255));
  textSize(32);
  text("hello world", random(0, width), random(0, height));
}
