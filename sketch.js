const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_img;
var player1;
var player2;
var player7;
var playerimg;
var edges;
var in1,in2,in3,in4

function preload() {
 bg_img = loadImage("./bg.png");
 playerimg = loadImage("./player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //player1 = new Player(1000,300,700,0,10)
  //player2 = new Player(200,300,700,0,10)
  //player3 = new Player(400,300,700,0,10)
  //player4 = new Player(600,300,700,0,10)
  //player5 = new Player(800,300,700,0,10)
  //player6 = new Player(1200,300,700,0,10)
  edges=createEdgeSprites()
  
  
  player7 = createSprite(400, 400, 10, 10);
  //player7.debug=true
  player7.addImage(playerimg);
  player7.scale=0.5
  player7.velocityY=5
  player7.velocityX = -5;
  player7.setCollider("circle",-150,-100,20)
  
  
}

function draw() {
  background("blue");
  image(bg_img,0,0,windowWidth,windowHeight)
  player7.bounceOff(edges);
  
  

  
  drawSprites();
}
