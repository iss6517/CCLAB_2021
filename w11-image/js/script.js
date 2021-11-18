function setup() {
  createCanvas(400, 500);
  background(129, 179, 139);
  img = loadImage("asset/vines.jpg")
  }

function draw() {
  background(129, 179, 139);

  image(img, 0, 0, width, height);
  img.filter(INVERT);
  }
