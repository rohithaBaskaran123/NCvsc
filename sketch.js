const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1500, 700);

	//ground = new Ground(600,height,1200,20);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,200,300,20);


	bob1= new Bob(100,300,30); 
	bob2= new Bob(400,600,30); 
	bob3= new Bob(600,630,30); 
	bob4= new Bob(800,600,30);
	bob5= new Bob(1000,490,30);
	rope1=new Rope(bob1.body,ground.body,-120,0);
	rope2=new Rope(bob2.body,ground.body, -60,0);
	rope3=new Rope(bob3.body,ground.body, 0,0);
	rope4=new Rope(bob4.body,ground.body, 60,0);
	rope5=new Rope(bob5.body,ground.body, 120,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  //rect(roof.body.position.x,roof.body.position.y,width,10);
  //rect(ground.body.position.x,ground.body.position.y,width,10);
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-100,y:-100});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(bob2.body,bob2.body.position, {x:-100,y:-100});
}
}

