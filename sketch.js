const Engine=Matter.Engine;
//This is called namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  ground= Bodies.rectangle(200,380,400,15,{isStatic : true})
  World.add(world,ground)
  console.log(ground)
  // with dot we can attach the body with the properties
  var options={
    restitution :1, 
    density : 0.01
  }
  ball= Bodies.circle(200,100,15,options)
  World.add(world,ball)
}
function draw() {
  background("blue"); 
  Engine.update(engine)
 rectMode(CENTER) 
 rect(ground.position.x,ground.position.y,400,15)
 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y,15)
  drawSprites();
}