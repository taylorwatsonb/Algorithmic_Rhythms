let size;
let phases;
let numLines;
let speed;

function setup() {
  createCanvas(700, 700);
  size = width * 0.8;
  numLines = 20;
  phases = [];
  speed = 0.02;
  
  // Initialize random phases
  for (let i = 0; i < numLines; i++) {
    phases.push(random(TWO_PI));
  }
}

function draw() {
  background(0); // Black background
  translate(width/2, height/2);
  
  // Draw the phase pattern
  noFill();
  stroke(255, 0, 0); // Red stroke
  strokeWeight(2);
  
  for (let i = 0; i < numLines; i++) {
    beginShape();
    for (let x = -size/2; x <= size/2; x += 5) {
      let y = sin(x * 0.05 + phases[i]) * size/4;
      vertex(x, y);
    }
    endShape();
    
    // Update phases for animation
    phases[i] += speed * (i + 1) / numLines;
    if (phases[i] > TWO_PI) phases[i] -= TWO_PI;
  }
}

function mousePressed() {
  // Toggle animation on mouse click
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}
