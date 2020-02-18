const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var platform;
var ME, slingshot;
var rnd_f1_img;
var rnd_f2_img;
var score;

var gameState = "onSling";



function setup(){
    var canvas = createCanvas(1200,400);
    bg = loadImage("friends/bg.png");
    engine = Engine.create();
    world = engine.world;

    rnd_f1_img = Math.round(random(1,6));
    rnd_f2_img = Math.round(random(1,6));

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350,rnd_f1_img);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220,rnd_f2_img);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    Me = new Me(200,50);

    score = 0;
    
    slingshot = new SlingShot(Me.body,{x:200, y:50});
}

function draw(){
    background(bg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    log1.display();

    box3.display();
    box4.display();

    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
    Me.display();
    platform.display();

    pig3.display();
    pig1.display();


    pig3.score();
    pig1.score();

    slingshot.display(); 
    Printtext();  

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(Me.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

function Printtext(){
    push();    
    stroke("black");
    strokeWeight(6);
    textSize(25);
    fill("yellow");
    text("Unlimited Power!!",500,100);
    pop();

    push();    
    stroke("black");
    strokeWeight(2);
    textSize(14);
    fill("yellow");
    text("Reload to see fun feature",100,300);
    pop();

    push();
    stroke("black");
    strokeWeight(2);
    fill("white");
    textSize(18);
    text("Score:- " + score, 1000,50);
    pop();
    
}