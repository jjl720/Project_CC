let m1;
let data = [[1, 'Hydrogen', 'H', 1.01, 0, 1, 1],
 [2, 'Helium', 'He', 4.0, 2, 2, 2],
 [3, 'Lithium', 'Li', 6.94, 4, 3, 3],
 [4, 'Beryllium', 'Be', 9.01, 5, 4, 4],
 [5, 'Boron', 'B', 10.81, 6, 5, 5],
 [6, 'Carbon', 'C', 12.01, 6, 6, 6],
 [7, 'Nitrogen', 'N', 14.01, 7, 7, 7],
 [8, 'Oxygen', 'O', 16.0, 8, 8, 8],
 [9, 'Fluorine', 'F', 19.0, 10, 9, 9],
 [10, 'Neon', 'Ne', 20.18, 10, 10, 10],
 [11, 'Sodium', 'Na', 22.99, 12, 11, 11],
 [12, 'Magnesium', 'Mg', 24.3, 12, 12, 12],
 [13, 'Aluminum', 'Al', 26.98, 14, 13, 13],
 [14, 'Silicon', 'Si', 28.09, 14, 14, 14],
 [15, 'Phosphorus', 'P', 30.97, 16, 15, 15],
 [16, 'Sulfur', 'S', 32.06, 16, 16, 16],
 [17, 'Chlorine', 'Cl', 35.45, 18, 17, 17],
 [18, 'Argon', 'Ar', 39.95, 22, 18, 18],
 [19, 'Potassium', 'K', 39.1, 20, 19, 19],
 [20, 'Calcium', 'Ca', 40.08, 20, 20, 20],
 [21, 'Scandium', 'Sc', 44.96, 24, 21, 21],
 [22, 'Titanium', 'Ti', 47.87, 26, 22, 22],
 [23, 'Vanadium', 'V', 50.94, 28, 23, 23],
 [24, 'Chromium', 'Cr', 52.0, 28, 24, 24],
 [25, 'Manganese', 'Mn', 54.94, 30, 25, 25],
 [26, 'Iron', 'Fe', 55.84, 30, 26, 26],
 [27, 'Cobalt', 'Co', 58.93, 32, 27, 27],
 [28, 'Nickel', 'Ni', 58.69, 31, 28, 28],
 [29, 'Copper', 'Cu', 63.55, 35, 29, 29],
 [30, 'Zinc', 'Zn', 65.38, 35, 30, 30],
 [31, 'Gallium', 'Ga', 69.72, 39, 31, 31],
 [32, 'Germanium', 'Ge', 72.64, 41, 32, 32],
 [33, 'Arsenic', 'As', 74.92, 42, 33, 33],
 [34, 'Selenium', 'Se', 78.96, 45, 34, 34],
 [35, 'Bromine', 'Br', 79.9, 45, 35, 35],
 [36, 'Krypton', 'Kr', 83.8, 48, 36, 36],
 [37, 'Rubidium', 'Rb', 85.47, 48, 37, 37],
 [38, 'Strontium', 'Sr', 87.62, 50, 38, 38],
 [39, 'Yttrium', 'Y', 88.91, 50, 39, 39],
 [40, 'Zirconium', 'Zr', 91.22, 51, 40, 40],
 [41, 'Niobium', 'Nb', 92.91, 52, 41, 41],
 [42, 'Molybdenum', 'Mo', 95.96, 54, 42, 42],
 [43, 'Technetium', 'Tc', 98.0, 55, 43, 43],
 [44, 'Ruthenium', 'Ru', 101.07, 57, 44, 44],
 [45, 'Rhodium', 'Rh', 102.91, 58, 45, 45],
 [46, 'Palladium', 'Pd', 106.42, 60, 46, 46],
 [47, 'Silver', 'Ag', 107.87, 61, 47, 47],
 [48, 'Cadmium', 'Cd', 112.41, 64, 48, 48],
 [49, 'Indium', 'In', 114.82, 66, 49, 49],
 [50, 'Tin', 'Sn', 118.71, 69, 50, 50],
 [51, 'Antimony', 'Sb', 121.76, 71, 51, 51],
 [52, 'Tellurium', 'Te', 127.6, 76, 52, 52],
 [53, 'Iodine', 'I', 126.9, 74, 53, 53],
 [54, 'Xenon', 'Xe', 131.29, 77, 54, 54],
 [55, 'Cesium', 'Cs', 132.91, 78, 55, 55],
 [56, 'Barium', 'Ba', 137.33, 81, 56, 56],
 [57, 'Lanthanum', 'La', 138.91, 82, 57, 57],
 [58, 'Cerium', 'Ce', 140.12, 82, 58, 58],
 [59, 'Praseodymium', 'Pr', 140.91, 82, 59, 59],
 [60, 'Neodymium', 'Nd', 144.24, 84, 60, 60],
 [61, 'Promethium', 'Pm', 145.0, 84, 61, 61],
 [62, 'Samarium', 'Sm', 150.36, 88, 62, 62],
 [63, 'Europium', 'Eu', 151.96, 89, 63, 63],
 [64, 'Gadolinium', 'Gd', 157.25, 93, 64, 64],
 [65, 'Terbium', 'Tb', 158.93, 94, 65, 65],
 [66, 'Dysprosium', 'Dy', 162.5, 97, 66, 66],
 [67, 'Holmium', 'Ho', 164.93, 98, 67, 67],
 [68, 'Erbium', 'Er', 167.26, 99, 68, 68],
 [69, 'Thulium', 'Tm', 168.93, 100, 69, 69],
 [70, 'Ytterbium', 'Yb', 173.05, 103, 70, 70],
 [71, 'Lutetium', 'Lu', 174.97, 104, 71, 71],
 [72, 'Hafnium', 'Hf', 178.49, 106, 72, 72],
 [73, 'Tantalum', 'Ta', 180.95, 108, 73, 73],
 [74, 'Wolfram', 'W', 183.84, 110, 74, 74],
 [75, 'Rhenium', 'Re', 186.21, 111, 75, 75],
 [76, 'Osmium', 'Os', 190.23, 114, 76, 76],
 [77, 'Iridium', 'Ir', 192.22, 115, 77, 77],
 [78, 'Platinum', 'Pt', 195.08, 117, 78, 78],
 [79, 'Gold', 'Au', 196.97, 118, 79, 79],
 [80, 'Mercury', 'Hg', 200.59, 121, 80, 80],
 [81, 'Thallium', 'Tl', 204.38, 123, 81, 81],
 [82, 'Lead', 'Pb', 207.2, 125, 82, 82],
 [83, 'Bismuth', 'Bi', 208.98, 126, 83, 83],
 [84, 'Polonium', 'Po', 210.0, 126, 84, 84],
 [85, 'Astatine', 'At', 210.0, 125, 85, 85],
 [86, 'Radon', 'Rn', 222.0, 136, 86, 86],
 [87, 'Francium', 'Fr', 223.0, 136, 87, 87],
 [88, 'Radium', 'Ra', 226.0, 138, 88, 88],
 [89, 'Actinium', 'Ac', 227.0, 138, 89, 89],
 [90, 'Thorium', 'Th', 232.04, 142, 90, 90],
 [91, 'Protactinium', 'Pa', 231.04, 140, 91, 91],
 [92, 'Uranium', 'U', 238.03, 146, 92, 92],
 [93, 'Neptunium', 'Np', 237.0, 144, 93, 93],
 [94, 'Plutonium', 'Pu', 244.0, 150, 94, 94],
 [95, 'Americium', 'Am', 243.0, 148, 95, 95],
 [96, 'Curium', 'Cm', 247.0, 151, 96, 96],
 [97, 'Berkelium', 'Bk', 247.0, 150, 97, 97],
 [98, 'Californium', 'Cf', 251.0, 153, 98, 98],
 [99, 'Einsteinium', 'Es', 252.0, 153, 99, 99],
 [100, 'Fermium', 'Fm', 257.0, 157, 100, 100],
 [101, 'Mendelevium', 'Md', 258.0, 157, 101, 101],
 [102, 'Nobelium', 'No', 259.0, 157, 102, 102],
 [103, 'Lawrencium', 'Lr', 262.0, 159, 103, 103],
 [104, 'Rutherfordium', 'Rf', 261.0, 157, 104, 104],
 [105, 'Dubnium', 'Db', 262.0, 157, 105, 105],
 [106, 'Seaborgium', 'Sg', 266.0, 160, 106, 106],
 [107, 'Bohrium', 'Bh', 264.0, 157, 107, 107],
 [108, 'Hassium', 'Hs', 267.0, 159, 108, 108],
 [109, 'Meitnerium', 'Mt', 268.0, 159, 109, 109],
 [110, 'Darmstadtium ', 'Ds ', 271.0, 161, 110, 110],
 [111, 'Roentgenium ', 'Rg ', 272.0, 161, 111, 111],
 [112, 'Copernicium ', 'Cn ', 285.0, 173, 112, 112],
 [113, 'Nihonium', 'Nh', 284.0, 171, 113, 113],
 [114, 'Flerovium', 'Fl', 289.0, 175, 114, 114],
 [115, 'Moscovium', 'Mc', 288.0, 173, 115, 115],
 [116, 'Livermorium', 'Lv', 292.0, 176, 116, 116],
 [117, 'Tennessine', 'Ts', 295.0, 178, 117, 117],
 [118, 'Oganesson', 'Og', 294.0, 176, 118, 118]];

// data = ["AtomicNumber","Element","Symbol","AtomicMass","NumberofNeutrons","NumberofProtons","NumberofElectrons"]


let back_page = false;
let element;
let value = 7;

function setup() {
  let canvas = createCanvas(700, 600);
  canvas.parent("myContainer4");
  // Oxygen
  // Argon
  // Hydrogen
  // Sodium
  // Carbon
  element = 'Sodium'; // <---- Choose the Element
  
  
  for(let i = 0; i<data.length ;i++){
    if (element == data[i][1]) {
      value = i;
    }
  }
  m1 = new button(data[value][0],data[value][1],data[value][2],data[value][3],data[value][4],data[value][5],data[value][6]);
  
}

function draw() {
  background(220);
  m1.display(0,0);

}

class atom_model {
  constructor(proton,neutron,electron,width,height,atomic_number,element,symbol,atomic_mass) {
    this.proton = proton;
    this.neutron = neutron;
    this.electron = electron;
    this.x_center = width/2;
    this.y_center = height/2;
    this.radius = 150;
    this.reverse = false;
    this.front = true;
    this.number = atomic_number;
    this.element = element;
    this.symbol = symbol;
    this.mass = atomic_mass;
    this.done = true;
    
  }
  
  display () {

    if (this.front) {
      this.nucleus();
      this.electron_orbit();
    } else {
      this.electron_orbit2();
      this.nucleus();
    }
    this.legend();  
  }
  nucleus() {
    //total amount of elements in the nucleus
    let nucleus_elements = (this.proton-1) + this.neutron;
    let p_count = 1;
    let r = 100;
    let sets = ~~((this.neutron + this.proton - 1)/10);
    let r2 =35;
    let count = 10;
    let bo = true;
    
    if (nucleus_elements%10<4) {
      r2 =25;
    }
    
    // centers the nuclues
    let x = this.x_center;
    let y = this.y_center;
    
    // angle start position
    let angle = 0;
    
    let inner_radius = 40;
    
    if (nucleus_elements>=20) {
        count = 10;
        inner_radius = 1;
    }
  
    if (nucleus_elements>40){
      count = 10;
      inner_radius = 1;
    }
    if (nucleus_elements>70){
      count = 10;
      inner_radius = 0.01;
    }
   
    if (nucleus_elements>90){
      count = 10;
      inner_radius = 0.01;
    }
    
    if ( sets >= 1) {
      r-= sets*10;
      if (r <= 5 ) {
        r = 5;
      }
      r2 += 25*sets;
      console.log(r2);
      if (r2 >120) {
        r2 = 120;
        if (nucleus_elements>70){
        r2 = 120;
        }
        if (nucleus_elements>90){
        r2 = 100;
        }
     }
    } 
    
    strokeWeight(1);
    
    if (nucleus_elements <= 10) {
      r = 50;
      count = 20;
      inner_radius = 1;
      r2= 30;
    }
  
    
    for (let n = 0; n <nucleus_elements; n++) {
      
      if (n%2 == 0 && p_count < this.proton) {
        fill(0,0,255,210);
        p_count++;
      } else {
        fill(47,79,79,210);
      }
      
      
      
      if (n>0 && n%10 == 0) {
        count+= inner_radius;
        r2 -= count;
        
      }
      
      if ( n >= sets*10 && bo) {
        if (nucleus_elements - sets*10 > 4) {
          console.log('er');
          if (nucleus_elements>20) {
           
            r2 = count*4;
          } else 
           {
            r2 -= count;
           }
        } else {
  
          if (nucleus_elements>20) { 
            r2 = 0;
          } else {
          
            r2 = count;}

          if (nucleus_elements>70) {
            r2 = count*2;
          }
        }
        bo = false
      }
      
      
      x = this.x_center + r2* cos(angle);
      y = this.y_center + r2* sin(angle);
      
      
      ellipse(x,y,r,r);
      
      if (n+1 <= sets*10) {
        if (sets>3){
          angle = angle + (2*PI)/10;
        } else if (sets>9) {
          angle = angle + (2*PI)/30;
        }
        else {
        angle = angle + (2*PI)/10;}
      } else {
        angle = angle + (2*PI)/(nucleus_elements-(sets*10));
      }
      
    
    }
    
    fill(0,0,255,270);
    ellipse(this.x_center,this.y_center,r,r);
  }
  electron_orbit() {
    
    let angle = PI;
    let x = this.x_center;
    let y = this.y_center;
    fill('red');
     
    this.radius--;
    
    
    for (let e = 0; e < this.electron; e++) {
      x = this.x_center + this.radius * cos(angle);
      y = this.y_center + this.radius * sin(angle);
      
      ellipse(x,y,20,20);
      angle = angle + (2*PI)/this.electron;
      
      

    }
    if (this.radius == -200) {
      this.front = false;
    }  
  }
  electron_orbit2() {
    
    let angle = PI;
    let x = this.x_center;
    let y = this.y_center;
    fill('red');
     
    this.radius++;
    
    
    for (let e = 0; e < this.electron; e++) {
      x = this.x_center + this.radius * cos(angle);
      y = this.y_center + this.radius* sin(angle);
      
      ellipse(x,y,20,20);
      angle = angle + (2*PI)/this.electron;
      
      

    }
    if (this.radius == 200) {
      this.front = true;
    }  
  }
  legend() {
    push();
    translate(0,-10);
    fill("white");
    rect(1+20,(this.y_center*2)-151,150-10,150);
    fill("black");  
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.symbol, (150/2)-1+20,(this.y_center*2)-120);
    textSize(15);
    text(this.element, (150/2)-1+20,(this.y_center*2)-90);
    text("Proton: " + this.proton, (150/2)-1+20,(this.y_center*2)-70);
    text("Neutron: " + this.neutron, (150/2)-1+20,(this.y_center*2)-50);
    text("Electron: " + this.electron, (150/2)-1+20,(this.y_center*2)-30);
    text("Atomic Mass: " + this.mass, (150/2)-2+20,(this.y_center*2)-10);
    pop();
  }
  
}

class button {
  constructor(atomic_number,element,symbol,atomic_mass,neutrons,proton,electron){
    this.atomic_number = atomic_number;
    this.element = element;
    this.symbol = symbol;
    this.atomic_mass = atomic_mass;
    this.neutrons = neutrons;
    this.proton = proton;
    this.electrons = electron;
    this.done = false;
    this.atom = new atom_model(proton,neutrons,electron,700,600,atomic_number,element,symbol,atomic_mass);
  }
  display(){
    if (this.done) {
     fill('220');
     rect(0,0,700,600);
     this.atom.display();
    } else {
    fill('white');
    rect(700/2-100,600/2-100,200,200);
    fill("black");
    textSize(20);
    text(this.atomic_number,700/2-100,600/2-100+20);
    textSize(40); 
    text(this.symbol,700/2-100+75,600/2-100+50);
    textSize(30); 
    text(this.element,700/2-100+45,600/2-100+90);
    textSize(20); 
    text("Atomic mass: "+this.atomic_mass,700/2-100+10,600/2-100+120);
    text("Protons: "+this.proton,700/2-100+10,600/2-100+140);
    text("Neutrons: "+this.neutrons,700/2-100+10,600/2-100+160);
    text("Electrons: "+this.electrons,700/2-100+10,600/2-100+180); 
      
    if (mouseX<700/2+200-100 && mouseX>700/2-100 && mouseY<600/2+200-100 && mouseY>600/2-100 && mouseIsPressed){
      this.done = true;
      } 
    }
   
  }
  
  
  
}

