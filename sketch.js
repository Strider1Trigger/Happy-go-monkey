var bananaImage,obstacleImage,obstacleGroup;
var background, score;

function preload() {
  createCanvas(400, 400);
  backImage=loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
}

function setup() {
backimg = createSprite(200,200);
  backimg.addImage(jungle.jpg)
  backimg.velocity.x = -9
  
}

function draw() {
  background(220);
  
  
  drawSprites;
}