let bg;
let y = 0;

function setup() {
  bg = loadImage("assets/map.jpg");
  let canvas = createCanvas(800, window.innerHeight+10);
  canvas.parent='canvas-container'
}

function draw() {
  background(bg);
  noStroke();
  fill(110, 81, 65);
  //China
  ellipse(630, 400, 10, 10)
  //India
  ellipse(555, 450, 10, 10)
  //Morocco
  ellipse(375, 425, 10, 10)
  //UK
  ellipse(380, 315, 10, 10)
  //Bolivia
  ellipse(260, 570, 10, 10)
}
