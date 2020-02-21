const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var box1,box2,ground;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  // var options={
  //   isStatic: true,
  // }
  // var ball_options={
  //   restitution: 1.5,
    
  // }
  // ground=Bodies.rectangle(200,380,400,90,options);
  // World.add(world,ground);
  // ball=Bodies.circle(200,300,30,ball_options);
  // World.add(world,ball);
  //console.log(object);
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground=new Ground(200,height,400,20);
  console.log(box1.height);

}

function draw() {
  background(0); 
  Engine.update(engine); 
  // rectMode(CENTER);
  // rect(ground.position.x,ground.position.y,400,30);
  // rectMode(CENTER);
  // ellipse(ball.position.x,ball.position.y,30);
  box1.display();
  box2.display();
  ground.show();
}