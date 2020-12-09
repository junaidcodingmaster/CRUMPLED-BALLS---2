const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine, world,dustbin,paper,dustbinimg,groundimg;

function preload(){
  dustbininimg = loadImage("image/dustbin.png");
}
function setup() {
  createCanvas(800, 410);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(200, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);

  groundimg = createSprite(width / 2, 400, width, 10);
  groundimg.shapeColor = "yellow";

  dustbinimg = createSprite(720, 330, 100, 10);
  dustbinimg.addImage(dustbininimg);
  dustbinimg.scale = 0.4;

}

function draw() {
   rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display(); 
    
    
  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
