var hr,mn,sc


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
  
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate-90
  hr=hour()
  mn=minute()
  sc=second()
  strokeWeight(8)
  stroke("red");
  noFill();
  var scAngle=map(sc, 0,60,0,360)
  arc(0,0,300,300,0,scAngle)
push()
rotate(scAngle)
stroke("red")
line(0,0,100,0)
pop();

stroke("lightgreen");
  noFill();
  var mnAngle=map(mn, 0,60,0,360)
  arc(0,0,280,280,0,mnAngle)
push()
rotate(mnAngle)
stroke("lightgreen")
line(0,0,90,0)
pop();

stroke("blue");
  noFill();
  var hrAngle=map(hr%12, 0,12,-0,360)
  arc(0,0,260,260,0,hrAngle)
push()
rotate(hrAngle)
stroke("blue")
line(0,0,80,0)
pop();
  drawSprites();

}