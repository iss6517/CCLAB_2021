let dia;
let bColor = "MintCream";

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent=("imgcontainer")
  background(114, 149, 134);
  dia = 30;
}
function draw() {
  currX = mouseX;
  currY = mouseY;
  if (mouseIsPressed) {
    fill(bColor);
    ellipse(mouseX, mouseY, dia, dia);
    console.log("prev: " + prevX + "," + prevY);
    console.log("curr: " + currX + "," + currY);
  }
  prevX = currX;
  prevY = currY;
}
function mousePressed() {}
function keyPressed0() {
  if (key == " ") {
    background(114, 149, 134);
    bColor = "MintCream";
  }
  function keyPressed1() {
    background(114, 149, 134);
    if (key == "1") {
    bColor = "Honeydew";
  }
}
  function keyPressed2() {
    background(114, 149, 134);
    if (key == "2") {
    bColor = "LightGreen";
  }
}
function keyPressed3() {
  background(114, 149, 134);
  if (key == "3") {
    bColor = "MediumAquaMarine";
  }
}
function keyPressed4() {
  background(114, 149, 134);
   if (key == "4") {
    bColor = "SeaGreen";
  }
}
function keyPressed5() {
  background(114, 149, 134);
   if (key == "5") {
    bColor = "ForestGreen";
  }
}
function keyPressed6() {
  background(114, 149, 134); if (key == "6") {
    bColor = "DarkGreen";
  }
}
function keyPressed7() {
  background(114, 149, 134); if (key == "7") {
    bColor = "DarkSlateGrey";
  }
}
