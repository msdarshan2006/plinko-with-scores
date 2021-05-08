const Engine = Matter.Engine ;
const World= Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;
var gameState = "start";
var ground ;
var engine , world;
var division = [];
var divisionHeight=300;
var plinkos=[];
var particles=[];
var score = 0;
var count = 0;
var particlesObj;
function setup() {
 var canvas =  createCanvas(800,800);

 engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,780,800,10);
  //createSprite(400, 200, 50, 50);

  for (var k = 0; k <=width; k = k + 80) {
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
     for(var j = 40;j<=width;j=j+50)
     {
       plinkos.push(new Plinko(j,75));
     }
     for(var j = 15;j<=width-10;j=j+50)
     {
       plinkos.push(new Plinko(j,175));
     }
     for(var j = 40;j<=width-10;j=j+50)
     {
       plinkos.push(new Plinko(j,275));
     }
     for(var j = 15;j<=width-10;j=j+50)
     {
       plinkos.push(new Plinko(j,375));
     }




}

function draw() {
  background("black");  
Engine.update(engine);
  ground.display();
for (var k = 0; k < division.length; k++) { 
  division[k].display();
 }
 for (var k = 0; k < plinkos.length; k++) { 
  plinkos[k].display();
 }
 /*if(frameCount%60===0){
   score=score+1;
  particles.push(new Particles(random(50,700),50));
 }
 for (var k = 0; k < particles.length; k++) { 
  particles[k].display();
 }*/
 if(particlesObj!=null){
   particlesObj.display();
   if(particlesObj.body.position.y>=750){
      if (particlesObj.body.position.x<300 &&particlesObj.body.position.x>0)  {
        //500 score division
        score=score+500;
        particlesObj=null;
        if(count>=5){
          gameState="end";
        }
      }else if (particlesObj.body.position.x<450 &&particlesObj.body.position.x>0){
        score=score+100;
        particlesObj=null;
        if(count>=5){
          gameState="end";
        }
      }else if (particlesObj.body.position.x<750 &&particlesObj.body.position.x>0){
        score=score+200;
        particlesObj=null;
        if(count>=5){
          gameState="end";
        }
      }
      
   }
 }
 if (gameState==="end"){
   textSize(100);
   text("GAME OVER",150,250);

 }
    textSize(35) 
    text("Score : "+score,20,40); 
    fill("white");
    textSize(35) 
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 200 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200",720,550 );

  drawSprites();
}
function keyPressed(){
  if(gameState==="start"){
    console.log("keyPressed");
    particlesObj=new Particles(mouseX,50);
    count=count +1
  }


}