var bg;
var hr, mn, sc, hrAngle, mnAngle, scAngle;

function preload(){
bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  
}

function draw() {
  background(bg);
  translate(400,300);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,24,0,360);

  //drawing the second hand of the clock
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,110,0);
  pop();
  //drawing the minute hand of the clock
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,85,0);
  pop();
  //drawing the hour hand of the clock
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  
  stroke(255,0,255);
  noFill();
  point(0,0);
  strokeWeight(10);
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  //ellipse (center circle of the clock)
  stroke(0);
  strokeWeight(2);
  fill(255,255,255);
  ellipse(500,300,15);
  ellipseMode(CENTER);

  drawSprites();
}