function setup() {
  createCanvas(windowHeight,windowWidth );
}
function draw() {
  rectMode(CENTER)
  background(0);
	stroke(225)
	noFill() 
  for(var j=0;j<height/50;j=j+1)
  {
   for(var i=0;i<width/50;i=i+1)
   {
   ellipse(25+50*i,25+50*j,50) 
   rect(25+50*i,25+50*j,50)
   ellipse(50+50*i,50+50*j,25)
   }
  }
}



 




