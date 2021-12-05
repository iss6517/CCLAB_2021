let angle =-50;
let amp = 500;
let speed = 0.00025;
let colArray;
let r;
let g;
let b;
let img;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width-650) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  img = loadImage('earl grey.png');
  cnv = createCanvas(550, 550);
  centerCanvas();
  pixelDensity(1);
  noiseSeed(2);
  colArray = [];
  for (let i = 0; i <= 300; i++){
  r = int(random(75, 100));
  g = 0;
  b = int(random(100, 225));
  colArray.push(color(r,g,b));
  }
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(0, 0, 139)
  var slider = document.getElementById("myRange");
  n = map(slider.value, 0, 1, 4, 10);
  let index = 0
  for (var offset = -210; offset<=height+20; offset+=15){
    noiseSeed(n);
    let wavecolor = colArray[index]
    wavyLineHorizontal(offset, wavecolor);
    index += 1

  }
  image(img, 0, 0, 550, 550);
}

// sin(freq) * amp;

function wavyLineHorizontal(offset, wavecolor) {
  stroke(wavecolor);
  let delay = 0;
  for (var x = -30; x<=width+50; x++) {
    let y = offset + sin(noise(5, angle-  delay/100))*amp*noise((angle+x)/500);
    strokeWeight((y-offset)/7+0.5);
    point(x,y);
    delay+=0.5;
  }
  angle += speed
}
