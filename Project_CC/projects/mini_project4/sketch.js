let w=1;
let h=1;
let odd =1;
let pac = 2/600;
let sw = 5/600;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("myContainer4");
  background('black');
  // YOUR CODE HERE
  // .. variables that accumulate values
  // .. loops
  // .. transformations
  // .. conditionals
  // .. randomness
 translate(width/2,height/2);
  for (let k=0; k<PI*2; k+=PI/2){
    w=1;
    h=1;
    
    push();
    rotate(k);
    sw = 5/10;
    color_fill =0;
    pac = 5/60;
    for(let i=10; i<width;i+=w){
    //h=1;
    for(let j=0; j<height;j+=h){
      fill(color_fill);
      stroke('black');
      if (odd%2 == 1){
        rect(i,j,w,h);
        noStroke();
        if (odd==3){
          fill('blue');
          ellipse(i+(w/2),j+pac+(h/2),sw);
          rect(i+(w/2)-(sw/2),j+pac+(h/2),sw,-sw/2);
          fill('white');
          ellipse(i+(w/2)-sw/5,j+pac+(h/2)+sw/6,sw/4);
          ellipse(i+(w/2)+sw/5,j+pac+(h/2)+sw/6,sw/4);
          fill('black');
          ellipse(i+(w/2)-sw/5,j+pac+(h/2)+sw/6,sw/6);
          ellipse(i+(w/2)+sw/5,j+pac+(h/2)+sw/6,sw/6);
          strokeWeight(0.5);
          stroke(50)
          line(i+(w/4),j,i+(w/4),j+h);
          line(i+(w*2/4),j,i+(w*2/4),j+h);
          line(i+(w*3/4),j,i+(w*3/4),j+h);
        } else {
          fill('red');
          ellipse(i+(w/2),j+pac+(h/2),sw);
          rect(i+(w/2)-(sw/2),j+pac+(h/2),sw,sw/2);
          fill('white');
          ellipse(i+(w/2)-sw/5,j+pac+(h/2)-sw/6,sw/4);
          ellipse(i+(w/2)+sw/5,j+pac+(h/2)-sw/6,sw/4);
          fill('blue');
          ellipse(i+(w/2)-sw/5,j+pac+(h/2)-sw/6,sw/6);
          ellipse(i+(w/2)+sw/5,j+pac+(h/2)-sw/6,sw/6);
          strokeWeight(1);
          stroke(50)
          line(i+(w/4),j,i+(w/4),j+h);
          line(i+(w*2/4),j,i+(w*2/4),j+h);
          line(i+(w*3/4),j,i+(w*3/4),j+h);
        }
        
      }else{
        rect(j,i,h,w);
        if (odd == 2){
        fill('blue');
        noStroke();
        ellipse(j-(pac*1.5)+(h/2),i+(w/2),sw);
        rect(j-(pac*1.5)+(h/2), i+(w/2)-(sw/2),sw/2,sw);
        fill('white');
        ellipse(j-(pac*1.5)+(h/2)-sw/6,i+(w/2)-sw/5,sw/4);
        ellipse(j-(pac*1.5)+(h/2)-sw/6,i+(w/2)+sw/5,sw/4);
        fill('black');
        ellipse(j-(pac*1.5)+(h/2)-sw/6,i+(w/2)-sw/5,sw/6);
        ellipse(j-(pac*1.5)+(h/2)-sw/6,i+(w/2)+sw/5,sw/6);
        strokeWeight(1);
        stroke(50);
        line(j,i+w/4,j+h,i+w/4);
        line(j,i+(2*w/4),j+h,i+(2*w/4));
        line(j,i+(3*w/4),j+h,i+(3*w/4));
        } else {
        fill('red');
        noStroke();
        ellipse(j-(pac*1.5)+(h/2),i+(w/2),sw);
        rect(j-(pac*1.5)+(h/2), i+(w/2)-(sw/2),-sw/2,sw);
        fill('white');
        ellipse(j-(pac*1.5)+(h/2)+sw/6,i+(w/2)-sw/4,sw/4);
        ellipse(j-(pac*1.5)+(h/2)+sw/6,i+(w/2)+sw/4,sw/4);
        fill('blue');
        ellipse(j-(pac*1.5)+(h/2)+sw/6,i+(w/2)-sw/5,sw/6);
        ellipse(j-(pac*1.5)+(h/2)+sw/6,i+(w/2)+sw/5,sw/6);
        strokeWeight(0.5);
        stroke(50);
        line(j,i+w/4,j+h,i+w/4);
        line(j,i+(2*w/4),j+h,i+(2*w/4));
        line(j,i+(3*w/4),j+h,i+(3*w/4));
        }
      }
    }
   
    color_fill+=10;
    w+=1;
    h+=1;
    sw+=5/10;
    pac += 5/60;
  }
  console.log(color_fill);
  pop();
  odd++;
  }
  fill('yellow');
  ellipse(0,0,15);
  fill('black');
  ellipse(2.9,-0.5,1);
  triangle(0,0,5,10,-5,10);
  for(let i = 20;i<200;i+=10){
    noStroke();
    fill('white');
    ellipse(0,i,5);
  }
  
  //drawGrid();
  saveCanvas('Image_9', 'png');
}
function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
    
}