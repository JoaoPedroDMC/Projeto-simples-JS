let cor;
let CX;
let CY;


function setup() {
  createCanvas(500, 500);
  background("black");
  cor = color(random(0,255), random(0,255), random(0,255));
  CX = [0,0,0];
  CY = [random(height), random(height), random(height)];
}


function draw() {
  cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  fill(cor);
  for (let contador in CX) {
  circle(CX[contador], CY[contador], 80);  
  CX[contador] += random (0,3);
  CY[contador] += random (-3,3);
    
    if (CX[contador] >= width){
      CX[contador] = 0;
      CY[contador] = random(height);
    }
   
  }
}