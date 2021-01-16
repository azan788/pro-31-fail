const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height, width, 20);
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  drawSprites();
}