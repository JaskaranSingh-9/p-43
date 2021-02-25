
 let m,h,s ;
 


function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES)

}

function draw() {
  background("black");  
  translate (200,150)
  m = minute();
  h = hour();
  s = second();
  
  sAngle=map(s,0,60,0,360);
  hAngle=map(h,0,60,0,360);
  mAngle=map(m,0,60,0,360);
  noFill();
  strokeWeight (5)
  stroke ("blue")
arc(10, 10, 300, 300,h,PI, PI);

noFill();
  strokeWeight (5)
  stroke (17,255,0)
arc(10, 10, 280, 280,m, PI, PI);

noFill();
  strokeWeight (5)
  stroke ("red")
arc(10, 10, 260, 260,s,400, PI + QUARTER_PI, TWO_PI);

  push ();
  rotate (sAngle)
  stroke("red");
  strokeWeight(5);
  line (0,0,100,0)
  pop ();

  push ();
  rotate (hAngle)
  stroke("blue");
  strokeWeight(7);
  line (0,0,50,0)
  pop ();

  push ();
  rotate (mAngle)
  stroke(12,255,0);
  strokeWeight(7);
  line (0,0,80,0)
  pop ();
  
  drawSprites();
}