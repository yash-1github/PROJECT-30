const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
var e, w ;//e and w stand for engine and world respectively;

function setup(){
createCanvas(1200,600);

e = engine.create();
w = e.world;

g1 = new Ground(750,400,400,15);
b1 = new Box(620,370,50,50);
b2 = new Box(670,370,50,50);
b3 = new Box(720,370,50,50);
b4 = new Box(770,370,50,50);
b5 = new Box(820,370,50,50);
b6 = new Box(870,370,50,50);

c1 = new Box(650,320,50,50);
c2 = new Box(700,320,50,50);
c3 = new Box(750,320,50,50);
c4 = new Box(800,320,50,50);
c5 = new Box(850,320,50,50);

d1 = new Box(680,270,50,50);
d2 = new Box(730,270,50,50);
d3 = new Box(780,270,50,50);
d4 = new Box(830,270,50,50);

e1 = new Box(710, 220,50,50);
e2 = new Box(760, 220,50,50);
e3 = new Box(810, 220,50,50);

ball = new Polygon(150,300);

rope = new Rope(ball.body , {x : 150 , y: 200});

}
function draw(){
background(10);
engine.update(e);

g1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();

c1.display();
c2.display();
c3.display();
c4.display();
c5.display();

d1.display();
d2.display();
d3.display();
d4.display();

e1.display();
e2.display();
e3.display();

ball.display();

rope.display();
keyPressed();
}

function mouseDragged(){
  
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
rope.fly();

}

function keyPressed(){
    if(keyCode === 32){

        
        Matter.Body.setPosition(ball.body,{x: 150, y: 300})
        rope.attach(ball.body);
    }
}