let xPos = 25;
let direction = 1;
let charmanderpng;
let charmandermp3;

function preload() {
  charmanderpng = loadImage("/images/charmander.png")
  charmandermp3 = loadSound("/sounds/charmander.mp3")
}

function setup() {
  imageMode(CENTER)
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);
  fill(0, 255, 0);
  image(charmanderpng,xPos, 400, 50, 50);
  xPos += 3 * direction;
  if (xPos > 475 || xPos < 25) {
    direction *= -1;
    charmandermp3.play()
  }
}
