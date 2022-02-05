const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(1090,370,50,50)
    box2 = new Box(950,370,50,50)
    box3 = new Box(950,308,50,50)
    box4 = new Box(1090,308,50,50)
    box5 = new Box(1020,243,50,50)
    log1 = new Log(1020,340,12,200,PI/2)
    log2 = new Log(1020,276,12,200,PI/2)
    log3 = new Log(980,220,12,120,PI/8.1)
    log4 = new Log(1060,220,12,120,PI/8)
    pig1 = new Pig(1020,370,50,50)
    pig2 = new Pig(1020,308,50,50)



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    platform.display();
    ground.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    pig1.display()
    pig2.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
}

