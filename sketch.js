var zombie1,zombie2,zombie3,zombie4;
let engine;
let world;
var ground,bridge;
var leftWall,rightWall;
var jointPoint,jointLink;
var sadZombie;
var breakButton;
var backgroundImage
var stones = []
var collided = false;


const Engine     = Matter.Engine;
const Render     = Matter.Render;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body       = Matter.Body
const Composites = Matter.Composites;
const Composite  = Matter.Composite



function preload (){
zombie1           =         loadImage("./assets/zmbie1.png")
zombie2           =         loadImage("./assets/zombie2.png")
zombie3           =         loadImage("./assets/zombie3.png")
zombie4           =        loadImage("./assets/zombie4.png")
sadZombie         =       loadImage("./assets/sad_Zombie.png")
backgroundImage   =       loadImage("./assets/background.png")
}



function setup(){
createCanvas (800,400)

 engine = Engine.create();
 world  =  engine.world;

 zombie = createSprite(width/2, height-100,50,50);
 zombie.addAnimation("left_to_right",zombie1,zombie2,zombie1);
 zombie.addAnimation("right_to_left", zombie3,zombie4,zombie3,);
 zombie.addimage("sad",sadZombie);
 zombie.scale = 0.1;
 zombie.velocityX = 10;
 breakButton = createButton("");
 breakButton.position(width-200,height/2,-50);
 breakButton.class("breakbutton");
 breakButton.mousePressed(handleButtonPress);
 
}


function draw()
{

    drawSprites();
}

function handleButtonPress(){
    jointLink.detach();
    setTimeout(()=>{bridge.break();},1500);
}