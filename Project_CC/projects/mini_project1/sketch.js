function setup() {
  
  let canvas = createCanvas(600, 500);
  canvas.parent("myContainer");
}

function draw() {
  background("white");
  fill("brown");
  rect(width/4-(150/4),height/2,10,220);
  rect(width/4+(150/4),height/2,10,220);
  fill('black');
  ellipse((width/4)+5, (height/2)+20, 150,100);
  fill("light-black");
  stroke('black');
  triangle(58,401,111,361,198,361);
  triangle(58,401,198-40,401,198,361);
  triangle(198-40,401,198,361,198,371);
  triangle(198-40,401,198-40,411,198,371);
  fill("brown");
  rect(width/4-(150/4),height/2+170,85,10);
  rect(68,401,10,95);
  rect(138,401,10,95);
  rect(68,401+37.5,70,10);
  fill("white");
  rect(58,401,100,10);
  triangle(249,456,249,90,500,60);
  triangle(249,456,500,456+20,500,60);
  fill(color('#F0F8FF'));
  stroke(color('#F0F8FF'));
  triangle(249+5,456-5,249+5,90+5,500-5,60+5);
  triangle(249+5,456-5,500-5,456+20-5,500-5,60+5);
}