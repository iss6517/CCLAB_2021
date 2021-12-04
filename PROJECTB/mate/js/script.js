let angle =40;
let amp = 500;
let speed = 0.001;
let colArray;
let r;
let g;
let b;
let img;

function setup() {
  img = loadImage('yerba mate.png');


  let canvas = createCanvas(800, window.innerHeight+10);
  canvas.parent='canvas-container'
  pixelDensity(1);
  noiseSeed(2);
  colArray = [];
  for (let i = 0; i <= 300; i++){
  r = int(random(100, 255));
  g = int(random(100, 235));
  b = 0;
  colArray.push(color(r,g,b));
  }
}

function draw() {
  background(223, 255, 0)
  n= 5
  let index = 0
  for (var offset = -210; offset<=height+20; offset+=20){
    noiseSeed(n);
    let wavecolor = colArray[index]
    wavyLineHorizontal(offset, wavecolor);
    index += 1

  }
  image(img, 0, 0, 800, window.innerHeight + 10);
}

function wavyLineHorizontal(offset, wavecolor) {
  stroke(wavecolor);
  let delay = 0;
  for (var x = -30; x<=width+50; x++) {
    let y = offset + sin(noise(5, angle-  delay/45))*amp*noise((angle+x)/150);
    strokeWeight((y-offset)/7+0.5);
    point(x,y);
    delay+=0.5;
  }
  angle += speed
}
