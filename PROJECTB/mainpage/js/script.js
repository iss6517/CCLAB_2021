let bg;
let y = 0;
let button;


function setup() {
bg = loadImage("assets/mapp.jpg");
  createCanvas(1000, window.innerHeight+10);
  button = createButton('oolong');
  button.position(850, 290);
  button.mousePressed(gotooolong);
  button = createButton('chai');
  button.position(730, 400);
  button.mousePressed(changeBG);
  button.mousePressed(gotochai);
  button = createButton('moroccan mint tea');
  button.position(350, 430);
  button.mousePressed(changeBG);
  button.mousePressed(gotoomoroccanminttea);
  button = createButton('earl grey');
  button.position(290, 225);
  button.mousePressed(changeBG);
  button.mousePressed(gotoearlgrey);
  button = createButton('mate');
  button.position(150, 370);
  button.mousePressed(changeBG);
  button.mousePressed(gotomate);

}

function changeBG() {
  let val = random(255);
  background(val);
}

function gotooolong() {
  window.open('https://iss6517.github.io/CCLAB_2021/PROJECTB/oolong');
}
function gotochai() {
	window.open('https://iss6517.github.io/CCLAB_2021/PROJECTB/chai');
}
function gotoomoroccanminttea() {
	window.open('https://iss6517.github.io/CCLAB_2021/PROJECTB/moroccanmint/');
}
function gotoearlgrey() {
	window.open('https://iss6517.github.io/CCLAB_2021/PROJECTB/earlgrey/');
}
function gotomate() {
  window.open('https://iss6517.github.io/CCLAB_2021/PROJECTB/mate');
}

function draw() {
  background(bg);

  strokeWeight(2);
  fill(0);
  line(890, 320, 790, 310);
  line(755, 430, 700, 340);
  line(460, 460, 460, 330);
  line(470, 225, 340, 270);
  line(285, 485, 200, 400);


  fill(110, 81, 65);
  //China
  ellipse(790, 310, 10, 10)
  //India
  ellipse(700, 340, 10, 10)
  //Morocco
  ellipse(460, 330, 10, 10)
  //UK
  ellipse(470, 225, 10, 10)
  //Bolivia
  ellipse(285, 485, 10, 10)


}
