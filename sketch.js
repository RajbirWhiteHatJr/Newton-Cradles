
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (200,600);
	bob2 = new Bob (250,600);
	bob3 = new Bob (300,600);
	bob4 = new Bob (350,600);
	bob5 = new Bob (400,600);
	ground = new Ground(300,200,350,20);
	rope1 = new Rope(bob1.body,ground.body,-100,0);
	rope2 = new Rope(bob2.body,ground.body,-65,0);
	 rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,65,0);
	 rope5 = new Rope(bob5.body,ground.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:105,y:150}); }
}



