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
function keyPressed() {
  if (key == " ") {
    background(114, 149, 134);
    bColor = "MintCream";
  } else if (key == "1") {
    bColor = "Honeydew";
  } else if (key == "2") {
    bColor = "LightGreen";
  } else if (key == "3") {
    bColor = "MediumAquaMarine";
  } else if (key == "4") {
    bColor = "SeaGreen";
  } else if (key == "5") {
    bColor = "ForestGreen";
  } else if (key == "6") {
    bColor = "DarkGreen";
  } else if (key == "7") {
    bColor = "DarkSlateGrey";
  }
}
