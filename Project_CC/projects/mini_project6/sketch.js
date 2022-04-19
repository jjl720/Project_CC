/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  angleMode(DEGREES);
  dancer = new YourNameDancer(width/2, height/2);
  canvas.parent("myContainer4");
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background('grey');
  dancer.update();
  dancer.display(); 
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class YourNameDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.leg_left = 58;
    this.leg_right = 58;
    
    this.arm_left_X =-23;
    this.arm_left_Y = 35;
    this.rotate = 0;
    this.complete = true;
    
    this.head_rotate = 0;
    
    
    
    // add properties for your dancer here:
    
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    if (this.complete) {
      this.rotate++;
      if (this.rotate == 10) {
        this.complete = false;
      }
    
    }
    if ( !this.complete) {
    
    this.rotate--;
    if (this.rotate == -10) {
      this.complete = true;
    }
    this.head_rotate++;
    }
  console.log(this.rotate,this.complete);
    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    
    
    
   
    
    
    
     
    
    // body
    fill('red');
    stroke('black');
    noStroke();
    ellipse(0,40,40,40);
    stroke('black')
    fill('white');
    
    /*
    
 
    push();
    rotate(-PI/6);
    arc(60,148,16,25,PI*3/2,PI*5/6);
    pop();
    
    */
    angleMode(DEGREES);
    push();
    rotate(this.rotate);
    
    stroke(1);
    fill('yellow');
    rect(12,35,10,15,2);// arm right
    rect(this.arm_left_X,this.arm_left_Y,10,15,2);// arm left
    
    
    pop();
    
    
    angleMode(RADIANS);
    //-23,35
    fill('red');
    arc(0,40,45+8,50,PI,PI*2);
    fill("yellow");
    arc(0,30,15,20,0,PI);
    fill('red');

    
    //left
  
    //arc(10,40,25,120,PI*2,PI/30);
    arc(0,50,28,120,PI*7/4,PI/6);
    
       
    
    //right
    
    //arc(-10,40,25,120,PI*29/30,PI);
    arc(0,50,28,120,PI*5/6,PI*5/4);
    noStroke();
  
    triangle(0,49,13,57,-13,57);
    stroke('black');
    
    // decoration
    fill('yellow');
    ellipse(-9,40,7,7); 
    ellipse(9,40,7,7); 
    fill('red');
    rect(-4,47,8,5,1);
    
    fill('white');
    

    
    
    
    //hand
    //-23,35
    angleMode(DEGREES);
    push();
    rotate(this.rotate);
    fill(color("#fde7d6"));
    push();
    translate(this.arm_left_X - 20, this.arm_left_Y - 35 + 28.5);
    noStroke();
    ellipse(108/4,98/4,35/4,33/4);
    stroke('black');
    arc(100/4,100/4,20/4,30/4,PI/3,PI*3/2);
    arc(110/4,105/4,16/4,25/4,PI*11/6,PI*7/6);
    arc(120/4,105/4,16/4,25/4,PI*11/6,PI*7/6);
    angleMode(RADIANS);
    push();
    rotate(-PI/6);
    arc(60/4,148/4,16/4,25/4,PI*3/2,PI*5/6);
    pop();
    pop();
    pop();
    angleMode(DEGREES);
    push();
    rotate(this.rotate);
    push();
    translate(-3,29);
    noStroke();
    ellipse(87/4,94/4,33.5/4,17.5/4);
    stroke('black')
    stroke('black');
    arc(100/4,100/4,20/4,30/4,PI*3/2,PI*5/6);
    arc(90/4,105/4,16/4,25/4,PI*11/6,PI*7/6);
    arc(80/4,105/4,16/4,25/4,PI*11/6,PI*7/6);
    angleMode(RADIANS);
    push();
    rotate(PI/6);
    arc(110/4,48/4,16/4,20/4,PI/6,PI*4/3);
    pop();
    
    pop();
    
    pop();
    
    fill('white');
    
    
    angleMode(DEGREES);
    push();
    rotate(this.rotate);
    angleMode(RADIANS);
    //head
    fill(color("#fde7d6"));
    stroke('black');
    ellipse(0,0+7,70,50);
    
    //ears
    
    arc(35,0+7,10,10,PI*5/4,PI*3/4);
    arc(-35,0+7,10,10,PI*1/6,PI*7/4);
    
    // eyes
    fill('white');
    ellipse((35/2)-2,0+7,15,15);
    ellipse((-35/2)+2,0+7,15,15);
    fill('black');
    ellipse((35/2)-2,0+7,3,3);
    ellipse((-35/2)+2,0+7,3,3);
    
    
    // hair
    fill(color("#fde7d6"));
    arc (-30,(-50/2)+14+7,10,10,PI*5/3,PI*1/6);
    arc (-20,(-50/2)+8+7,10,10,PI*5/3,PI*1/6);
    arc (-10,(-50/2)+6+7,10,10,PI*3/2,PI*1/6);
    arc (0,(-50/2)+5+7,10,10,PI*3/2,PI*1/6);
    arc (10,(-50/2)+6+7,10,10,PI*3/2,PI*1/6);
    arc (20,(-50/2)+10+7,10,10,PI*5/3,PI*1/6);

    
    
    fill(color("#fde7d6"));
    arc(3,16,10,10,PI/3,PI*2/3);
    
    line(5,18,6,22);
    
    line(0,10,-5,13);
    line(-5,13,0,15);
    pop();
    angleMode(RADIANS);
    
    
   
    
    // legs
    fill('red');
    rect(-13.5,this.leg_left,13,20,2);
    rect(0.5,this.leg_right,13,20,2);
    noStroke();
    rect(-13,this.leg_left-1,13,2);
    rect(0,this.leg_left-1,13,2);
    stroke('black');
    fill('white');
    
    
    
    
    // feet
    fill('lightblue');
    rect(0,this.leg_left+19,15,5,1);
    rect(-16,this.leg_right+19,15,5,1);
    fill(color("#fde7d6"));
    
    // ⬆️ draw your dancer here ⬆️
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()
   
    pop();
  }  
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/