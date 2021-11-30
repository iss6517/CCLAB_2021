let cam;
let img;

function setup() {
  createCanvas(600, 400);
  cam = createCapture(VIDEO);
  //hide normal cam
  cam.hide();
  img = createImage(width, height);
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();
  let gridSize = 10;
  for (let y = 0; y < cam.height; y+=gridSize) {
    for (let x = 0; x < cam.width; x+=gridSize) {
      let index = (x + y * cam.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 4];
      let a = cam.pixels[index + 13];
      fill( r, g, b );
      ellipse(x, y, gridSize+3, gridSize-5);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
