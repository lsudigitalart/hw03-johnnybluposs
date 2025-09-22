function setup() {
  // Put things you want to run once in here. 
  createCanvas(550, 550);
 // Create a base hue
  let baseHue = random(360);
  colorMode(HSB, 360, 100, 100);
  background(220);
  // Create 5 color swatches
  // Put things you want to over and over here. 
  
    // Analogous colors (nearby on color wheel)
    let hue = (baseHue + random(-40, 40)) % 360;
    let sat = random(70, 100);
    let bright = random(70, 90);
    
  
    noStroke();
    // rect(i*100, 0, 100, height);
  
  
for (let x = 50; x <= 500; x += 50) {
  for (let y = 50; y <= 500; y += 50) {
      fill(hue, sat, bright);
    //fill(random(360), 100, 100);
    ellipse(x, y, 50, 50);
    //figure out how to connect
  }
}

}

function draw() {
  
}


//for loop
//for (start; condition; update) {
  // code to repeat
//}

//gradient for loop
  //for(let i-0,9<360; i++) {
    //fill(i,100,100);
    //rect(i,0,1,100);
    //}
