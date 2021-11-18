let song;

function preload(){
sound = loadSound("assets/song.mp3")
}

function setup(){
  createCanvas(400,500);
  let canvas = createCanvas(400, 400);
  canvas.mousePressed(userStartAudio);

}

function draw(){
  background (0, 10);

  let volume = amp.getLevel();
  console.log(floor(volume *100));
  noStroke();
  fill(0, 100, 255);
  ellipse(width/2, height/2, dia, dia);

  let vol = map(mouseY, 0, height, 1.00, 0.00, true);

  song.setVolume(vol);
  let panning = map(mouseX, 0, width, -1.00, 1.00, true);
  song.pan(panning);
}

function keyPressed(){
  if (key == "p") {
    if (song.isPlaying() == false){
    song.play();
    }
  }
  else if (key == "s") {
    song.stop();
  }
}
