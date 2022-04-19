function setup() {
  let canvas = createCanvas(600, 500);
  background("Grey");
  fill("white");
  rect(150, 25, 400, 400);
  canvas.parent("myContainer");
}


let menu_tool = [];
for (let i = 0; i < 28; i++) {
  menu_tool.push(false);
}
let curr_tool = null;
let size = 1;
let background_color = 'white';
let shape_color = 'blue';

function menu() {
  let sub_x = 0;
  let sub_y = 0;
  for (let i = 0; i < 10; i++) {
    rect(sub_x, sub_y, 25, 25);
    if (sub_x == 25) {
      sub_y = sub_y + 25;
      sub_x = sub_x - 50;
    }
    sub_x = sub_x + 25;
  }
  ellipse(12.5,12.5,10,10);
  rect(6,31,13,13);
  line(31,20,45,5);
  line(30,62.5,45,62.5);
  line(5,62.5,20,62.5);
  line(12.5,55,12.5,70);
  rect(7,83,12,12);
  line(11,89,17,79);
  rect(27.5+3+2,77.5+2,10,15);
  rect(27.5+3+2,77.5+2+3,10,15/2);
  fill(shape_color);
  rect(5,105,15,15);
  
  if (menu_tool[0] == true) {
     ellipse(25,150,20,20);
  }
  if (menu_tool[1] == true) {
    line(12,170,40,130);
  }
  if (menu_tool[2] == true) {
    rect(2+25/4,31+105,30,30);
  }
  if (menu_tool[3] == true) {
    //supposed to draw a triangle here but its kinda alot of work
  }

  if (menu_tool[6] == true) {
    rect(4+25/4,31+105+4,30,30);
    line(10+25/4,38+105+8,40,130)
  }
  if (menu_tool[7] == true) {
    rect(6.5+25/4,22.5+105+4,25,35);
    rect(6.5+25/4,27.5+105+4,25,25);
  }
  
  
  
  
}

function draw() {
  //tools
  fill("white");
  rect(0, 0, 50, 175);
  
  menu();
  if(menu_tool[0]==true){
      tool_1();
  }
  if(menu_tool[2]==true){
      tool_3();
  }
  if(menu_tool[3]==true){
      tool_4();
  }
  if(menu_tool[6]==true){
      tool_7();
  }
}

function tool_1(){
  if (mouseIsPressed && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25){
    fill(shape_color);
    ellipse(mouseX, mouseY,30*size, 30*size);
  }
}

function mouseDragged() {
  if (menu_tool[1]==true && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25) {
    stroke(shape_color);
    strokeWeight(10*size);
    line(mouseX, mouseY,  pmouseX, pmouseY);
    strokeWeight(1);
    stroke('black');
 }
  if (menu_tool[7]==true && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25) {
    fill(background_color);
    noStroke();
    rect(mouseX-12.5, mouseY-12.5, 25, 25);
    stroke('black');
  }
}

function tool_3(){
  if (mouseIsPressed && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25) {
    fill(shape_color);
    rect(mouseX, mouseY, 30*size, 30*size);
  }
}

function tool_4(){
  if (mouseIsPressed && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25) {
    fill(shape_color);
    triangle(
      mouseX + 1,
      mouseY - 20*size,
      mouseX - 20*size,
      mouseY + 20*size,
      mouseX + 20*size,
      mouseY + 20*size
    );
  }
}

function tool_7(){
  if (mouseIsPressed && mouseX<550 && mouseX>150 && mouseY<425 && mouseY>25) {
    fill(shape_color);
    rect(150, 25, 400, 400);
    fill('white');
  }
}

let color_list = ['white','#0000FF','#D2691E','#006400','#2F4F4F','#F8F8FF','#FFFF00','#4682B4','#FF6347','#FF0000','#FFC0CB','#CD853F','#663399','#808000','#00FF00','black','#FF69B4'];

function mousePressed() {
  let sub2_x = 0;
  let sub2_y = 0;
  let sub3_x = 12.5;
  let sub3_y = 300;
  for (let i = 0; i < 28; i++) {
    if (mouseX < sub2_x + 25 && mouseX > sub2_x && mouseY < sub2_y + 25 && mouseY > sub2_y) {
      if (curr_tool != null && i != 4 && i != 5 && i!=8) {
         menu_tool[curr_tool] = !menu_tool[curr_tool];
      }
      if (i == 4) {
          size++;
      }
      if (i == 5) {
          if (size>0 && size <= 1) {
              size = size -0.1;
          } else if (size == 0) {
            console.log('smallest size reached');
          } else {
            size = size -1;
          }
          
      }
      if (i == 8 ){
          for (let i = 0; i < 17; i++) {
            fill(color(color_list[i]));
            rect(sub3_x, sub3_y, 25, 25);
            if (sub3_x == (25*4)+12.5) {
              sub3_y = sub3_y + 25;
              sub3_x = 12.5;
            }
            sub3_x = sub3_x + 25;
          }
      }
      if (i != 4 && i != 5 && i!=8){
        menu_tool[i] = !menu_tool[i];
        curr_tool = i;
      }
      console.log(menu_tool)
    }
    if (sub2_x == 25) {
      sub2_y = sub2_y + 25;
      sub2_x = sub2_x - 50;
    }
    sub2_x = sub2_x + 25;
  }
  for (let i = 0; i < 17; i++) {
    if (mouseX < sub3_x + 25 && mouseX > sub3_x && mouseY < sub3_y +     25 && mouseY > sub3_y) {
      shape_color = color_list[i];
      console.log(shape_color);
    }
     if (sub3_x == (25*4)+12.5) {
              sub3_y = sub3_y + 25;
              sub3_x = 12.5;
            }
            sub3_x = sub3_x + 25;
    
  }
}
