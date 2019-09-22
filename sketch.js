//i fixed it Tang, we had to put an equal sign when we define our objects.

let user = { // <------------------------like here
  firstname: "Kaicong",
  lastname: "Tang",
  color: "black",
  animals: "dog",
  movie: "iron man123",
  game:"csgo",
  superhero: "iron man",
  fact: "love gaming"
}

var human = { // <------------------------and here
  firstName:"Eddson",
  lastName:"Jose",
  color:"midnight blue",
  animal:"",
  book:"The Dark Forest",
  movie:"The Fountain",
  game:"Halo Reach",
  superhero:"Superman",
  fact:"I am made up of stardust"
  };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // text("group randomizer", 200 ,200 ,400, 400);

  textSize(32);
  text(human.firstName, width/2, height/2);
}
