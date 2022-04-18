let colors = [
  "Chartreuse",
  "Coral",
  "CornflowerBlue",
  "Crimson",
  "DarkTurquoise",
  "Salmon",
  "SpringGreen",
  "Lightblue"
];

let colors_2 = ["yellow",
               "lime",
               "antiquewhite",
               "chartreuse",
               "greenyellow",
               "lawngreen",
               "lightpink",
               "lightyellow",
               "moccasin",
               "tomato",
               "springgreen",
               "steelblue"];

let clothes_color;
let design_color;
let skin_color;

function setup() {
  let canvas = createCanvas(600, 600);
  clothes_color =random(colors);
  design_color =random(colors);
  skin_color = random(colors_2);
  canvas.parent("myContainer4");
  
}

function draw() {
  background(220);

  for (let i = 30 ; i < width+20; i = i+ width/10) {
  for (let j = 45 ; j < height-10; j= j+ (height/10)*2) {
      drawCreature(i, j, 0.5);
    }
  }
  
}

function drawCreature(x, y,ratio) {
  push();
  translate(x, y);

  // YOUR CODE GOES HERE
  // introduce additional functions
  // for parts of your creature that
  // are repeated, and call them from
  // here
  drawLegs(ratio);
  drawArms(ratio);
  drawBody(ratio);
  drawFace(ratio);
  drawClothes(ratio);
  pop();
}

function drawBody(ratio) {
  fill(skin_color);
  arc(0,35*ratio,80*ratio,80*ratio, 0, PI);
  arc(0,-35*ratio,80*ratio,80*ratio, PI,0);
  noStroke();
  rect(-40*ratio,-35*ratio,80*ratio,70*ratio);
  stroke('black');
  strokeWeight(1);
  line(-40*ratio,-35*ratio,-40*ratio,40*ratio);
  line(40*ratio,-35*ratio,40*ratio,40*ratio);
  fill('white')
}

function drawFace(ratio) {
  fill(skin_color);
  arc(2 * ratio,-30 * ratio,80 * ratio,80 * ratio,PI*3/2,PI*5/3);
  arc(2 * ratio,-25 * ratio,80 * ratio,80 * ratio,PI*3/2,PI*5/3);
  arc(2 * ratio,-20 * ratio,80 * ratio,80 * ratio,PI*3/2,PI*5/3);
 
  arc(-2 * ratio,-30 * ratio,80 * ratio,80 * ratio,PI*4/3,PI*3/2);
  arc(-2 * ratio,-25 * ratio,80 * ratio,80 * ratio,PI*4/3,PI*3/2);
  arc(-2 * ratio,-20 * ratio,80 * ratio,80 * ratio,PI*4/3,PI*3/2);
  
  fill('black');
  rect(-40 * ratio,-30 * ratio,80 * ratio,10 * ratio);
  arc(12 * ratio,-25 * ratio, 34 * ratio,30 * ratio,PI*5/4,PI*3/4);
  arc(-12 * ratio,-25 * ratio, 34 * ratio,30 * ratio,PI/4,PI*7/4);
  fill('grey');
  noStroke();
  ellipse(12 * ratio,-25 * ratio, 34 * ratio,30 * ratio);
  ellipse(-12 * ratio,-25 * ratio, 34 * ratio,30 * ratio);
  stroke('black');
  fill('white');
  ellipse(-12 * ratio,-25 * ratio,20 * ratio,20 * ratio);
  ellipse(12 * ratio,-25 * ratio,20 * ratio,20 * ratio);
  fill('black');
  ellipse(-12 * ratio,-25 * ratio,10 * ratio,10 * ratio);
  ellipse(12 * ratio,-25 * ratio,10 * ratio,10 * ratio);
  fill('white')
  ellipse(15 * ratio,-26 * ratio,4 * ratio,5 * ratio);
  ellipse(-10 * ratio,-26 * ratio,4 * ratio,4 * ratio);
  fill(skin_color);
  arc(0 * ratio,-10 * ratio,40 * ratio,40 * ratio,PI/3,PI*2/3);
  fill('white');
  
}

function drawArms(ratio){
  fill(skin_color);
  arc(-5* ratio,40* ratio,100* ratio,90* ratio,PI*3/4,PI*5/4);
  fill("black");
  push();
  rotate(PI / 4.0);
  rect(20* ratio,65* ratio,13* ratio,15* ratio);
  pop();
  ellipse(-36* ratio,79* ratio,14* ratio,14* ratio);
  ellipse(-25* ratio,82* ratio,14* ratio,14* ratio);
  ellipse(-25* ratio,72* ratio,14* ratio,14* ratio);
  fill('white');
  fill(skin_color);
  arc(5* ratio,40* ratio,100* ratio,90* ratio,PI*7/4,PI/4);
  fill("black");
  push();
  rotate(PI / 4.0);
  rect(60* ratio,25* ratio,19* ratio,12* ratio);
  pop();
  ellipse(32* ratio,82* ratio,14* ratio,14* ratio);
  ellipse(22* ratio,82* ratio,14* ratio,14* ratio);
  ellipse(22* ratio,72* ratio,14* ratio,14* ratio);
  fill('white');
}

function drawLegs(ratio){
  fill(skin_color);
  rect(-25*ratio,50*ratio,20*ratio,50*ratio);
  rect(10*ratio,50*ratio,20*ratio,50*ratio);
  fill('black');
  rect(-30*ratio,100*ratio,25*ratio,15*ratio);
  ellipse(-33*ratio,107*ratio,15*ratio,17*ratio);
  rect(35*ratio,100*ratio,-25*ratio,15*ratio);
  ellipse(38*ratio,107*ratio,15*ratio,17*ratio);
  fill('white');
}

function drawClothes(ratio) {
  fill(clothes_color);
  arc(0*ratio,35*ratio,80*ratio,80*ratio, 0*ratio, PI);
  fill(design_color);
  ellipse(0*ratio,55*ratio,30*ratio,10*ratio);
 
}