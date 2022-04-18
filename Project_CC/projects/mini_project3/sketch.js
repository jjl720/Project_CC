let radius = 0;
let angle = 0;
let spiral = [];
let x =0;
let angle_rate = 1;
let radius_rate = 0.1;
let cx = 0;
let cy = 0;
let change = false;
let cleaning = false;
let zoom = 1;

function setup() {
  let canvas = createCanvas(400, 400);
  background(0);
  //setupGif(30);   // 30 [fps] is how fast the gif will play back
  canvas.parent("myContainer");
}


function draw() {
  //beginGif();

  // YOUR CODE GOES HERE
  //background(0);
 
  if (cleaning){
    fill('black');
    ellipse (width/2,height/2,zoom,zoom);
    zoom++;
    if (zoom>600) {
      zoom =1;
      cleaning = false;
    }
  } else {
    if (cx > width || cy > height ||cx < 0|| cy < 0){
      x = 0;
      angle = 0;
      radius = 0.1;
      cleaning = true;

    }
    if (mouseIsPressed){
      change = !change;
    }

    angle_rate = map(mouseX, 0, width, 1, 10);
    radius_rate = map(mouseY, 0, height, 0.1, 1);
    cx = 200 + sin(radians(angle)) * radius;
    cy = 200 + cos(radians(angle)) * radius;

    angle=angle+angle_rate;
    radius = radius + radius_rate;
    if (change) {
    if (noise(x) > noise(x + 1)) {
        fill("white");
        //ellipse(cx,cy,30,30);

        triangle(cx-10,cy,cx+15,cy-20,cx+15,cy+20);
    } else{
        fill("black");
        //ellipse(cx,cy,30,30);
        triangle(cx-10,cy,cx+15,cy-20,cx+15,cy+20);
    }
    } else {
    if (noise(x) > noise(x + 1)) {
        fill("white");
        //scale(zoom);
        ellipse(cx,cy,30,30);
    } else{
        fill("black");
        //scale(zoom);
        ellipse(cx,cy,30,30);
    }
    }
    x++;
  }
  

  //endGif(300);    // this stops recording after 300 times through draw
}
