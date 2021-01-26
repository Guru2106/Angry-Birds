const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;

var ground;
var myEngine; 
var myWorld;

var box1;

function setup() {
  createCanvas(400,400);

  myEngine = engine.create(); 
  myWorld = myEngine.myWorld;

  var options = {
    isStatic: true

  }

  ground = bodies.rectangle(100, 100, 40, 40, options);

  //world.add(myWorld, ground);

  box1 = new Box1();

}

function draw() {
  background('black');  

  engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position,x, ground.position,y, 50, 50);


  box1.display();


}
