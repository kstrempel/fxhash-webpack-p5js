// FH_HASH p5 template | by @squintdev, @kstrempel
let seed = 0; //seed Hash
let count = 0;

function h(value) {
  return canvasSize * value;
}

function w(value) {
  return canvasSize * value;
}

function setup() {
  canvasSize = min(windowWidth, windowHeight);
  let cnv = createCanvas(canvasSize, canvasSize);
  cnv.id('p5canvas');

  //set angleMode and rectMode here
  angleMode(DEGREES)
  rectMode(CENTER)

  colorMode(HSB, 360, 100, 100);

  /**
   * MAKE SURE TO PUT ANY CALLS TO RANDOM() OR NOISE() AFTER randomSeed(seed)
   */
  seed = int(fxrand() * 100000000) // FXHASH seed rand
  randomSeed(seed)

  backgroundColor = color(random(360), 60, 60);
  shapeColor = color(60, 0, 0);
  count = random(500);
  jumpColor = 100 / count
  maxAngle = random(100)
  height = random(0.1)
  strokeW = random(0.02)

  // fxHash Features
  window.$fxhashFeatures = {
    "count": count,
    "maxAngle": maxAngle,
    "height": height,
    "stroke": strokeW
  };

  background(backgroundColor)

  console.log($fxhashFeatures)
}

function draw() {
  shapeColor = color(60,0,brightness(shapeColor) + jumpColor);
  fill(shapeColor);
  strokeWeight(w(strokeW));
  resetMatrix();
  rotate(random(-maxAngle, maxAngle));
  rect(
    w(random(1.0)),
    h(random(1.0)),
    w(random(0.01, 0.1)),
    h(height)
  );
  count-=1
  if(count < 0) {
    noLoop();
  }
}

function windowResized() {
  let newSize = min(windowWidth, windowHeight);
  resizeCanvas(newSize, newSize);
}