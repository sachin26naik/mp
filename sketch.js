
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var tree;
function preload(){
	boy=loadImage("images/boy.png")
}


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	tree = new Tree(1050,340,450,500);
    ground = new Ground(width/2,600,width,20);
	stone = new Stone(235,420,30);
   m1 = new Mango(1100,100,30);
   m2 = new Mango(1170,130,30);
   m3 = new Mango(1010,140,30);
    launcher = new Launcher(stone.body,{x:235,y:420});
   
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  tree.display();
  image(boy,200,340,200,300);
  ground.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();



  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  launcher.display();
  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}  
function mouseReleased(){
  launcher.fly();
}
function detectCollision(lstone,lmango){
  mangobody=lmango.body.setPosition;
  stonebody=lstone.body.setPosition;


  var distance=dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);


  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
  
}

