let bg;
let y = 0;
let button;


function setup() {
bg = loadImage("assets/map.jpg");
  createCanvas(800, window.innerHeight+20);
  button = createButton('oolong');
  button.position(610, 390);
  button.mousePressed(gotooolong);
  button = createButton('chai');
  button.position(530, 400);
  button.mousePressed(changeBG);
  button.mousePressed(gotochai);
  button = createButton('moroccan mint tea');
  button.position(350, 430)
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

  fill(0);
  line(635, 395, 660, 420);
  line(555, 430, 530, 400);
  line(380, 410, 420, 450);
  line(385, 300, 340, 270);
  line(240, 480, 200, 400);
  stroke(3);


  fill(110, 81, 65);
  //China
  ellipse(635, 395, 10, 10)
  //India
  ellipse(530, 400, 10, 10)
  //Morocco
  ellipse(380, 410, 10, 10)
  //UK
  ellipse(385, 300, 10, 10)
  //Bolivia
  ellipse(240, 480, 10, 10)


}
