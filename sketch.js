const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    pig1 = new Pig(250, 300)
    ground = new Ground(400,height,800,20)
    log1 = new Log(250, 250, 190, PI/2)
    box3 = new Box(200,200,50,50)
    box4 = new Box(300,200,50,50)
    pig2 = new Pig (250, 200)
    log2 = new Log(250, 150, 190, PI/2)
    box5 = new Box(250, 100, 50, 50)
    log3 = new Log(220, 100, 100, PI/6)
    log4 = new Log(280, 100, 100, -PI/6)
    bird1 = new Bird(600,100)

}   
function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    ground.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}