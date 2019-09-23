let user = {
  firstname: "Kaicong",
  lastname: "Tang",
  favColor: "black",
  animal: "dog",
  movie: "iron man123",
  game:"csgo",
  superhero: "iron man",
  fact: "love gaming"
};

user.isAdmin = true;

let key = prompt("what do you want to know about the user? (firstname, lastname, favColor, animal, movie, game, superhero,fact) ");
alert(user[key]);

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
