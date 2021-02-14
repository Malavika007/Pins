

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var bird, slingshot;
var gameState="onsling"
var score=0;

function preload() {
    backgroundImg = loadImage("sprites/neon.png");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   platform = new Ground(300,400,500,5);
   ball1=new ball(350,390,10,10);
   ball2=new ball(200,390,10,10);
   ball3=new ball(210,390,10,10);
   ball4=new ball(220,390,10,10);
   ball5=new ball(310,390,10,10);
  // ball6=new ball(330,390,10,10);
  // ball7=new ball(340,390,10,10);


    ball8=new ball(210,380,10,10);
    ball9=new ball(220,380,10,10);
    ball10=new ball(310,380,10,10);
    ball11=new ball(330,380,10,10);
    ball12=new ball(340,380,10,10);
    ball13=new ball(220,370,10,10);
    ball14=new ball(310,370,10,10);

   ball15=new ball(330,380,10,10);
   ball16=new ball(340,370,10,10);


   bird=new pin(900,200);
    slingshot = new SlingShot(bird.body,{x:900, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   
    noStroke();
    textSize(35)
    fill("white")
    text("Score : " + score, width-300, 50)


    noStroke();
    textSize(20)
    fill("white")
    text(" You can drag the mouse to move the football and make it hit the pins. How many pins can you destroy at one stroke??",50,500)
    text("press the spacekey to get one more chance :)",50,520)

    ground.display();
   platform.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
//ball6.display();
// ball7.display();
 ball8.display();
ball9.display();
 ball10.display();
 ball11.display();
ball12.display();
 ball13.display();
 ball14.display();
 ball15.display();
 ball16.display();
bird.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched") {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        score++
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       gameState="launched";
    }
}