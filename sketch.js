var value = 0;
function setup() { 
  	createCanvas(400, 400);
} 
function draw() {
    fill(value);
    rect(25, 25, 250, 250);
  
    fill("black")    
    rect(35, 35, 100, 100)   
}
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
