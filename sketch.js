var bg;
var player,playerImg;
var iss,issImage;
var playerLImg,playerRImg,playerUpImg;;
function preload(){
bg=loadImage("Images/spacebg.jpg");
playerImg=loadImage("Images/spacecraft1.png");
issImage=loadImage("Images/iss.png");
playerLImg=loadImage("Images/spacecraft3.png");
playerRImg=loadImage("Images/spacecraft4.png");
playerUpImg=loadImage("Images/spacecraft2.png");
}
function setup() {
  createCanvas(1500,700);
  player=createSprite(580, 550, 50, 50);
  player.addImage("Image",playerImg);
  player.scale=0.3;
  iss=createSprite(700,300,50,50);
  iss.addImage("Image",issImage);
  iss.scale=1.8;
  
}

function draw() {
  background(bg);  
   
  if(player.y===450 && player.x===580){
    player.velocityX = 0;
    player.velocityY = 0;
    fill("white");
    textSize(50);
    text("Docking Successful!",600,600);
  }
  if(keyDown("UP_ARROW")) {
      player.velocityY = -5;
      player.velocityX = 0;
      player.addImage("Image",playerUpImg);
  }
  if(keyDown("DOWN_ARROW")){
      player.velocityY = 5;
      player.velocityX = 0;
      player.addImage("Image",playerImg);
  }
  if(keyDown("LEFT_ARROW")) {
    player.velocityX = -5;
    player.velocityY = 0;
    player.addImage("Image",playerLImg);
  }
  if(keyDown("RIGHT_ARROW")){
    player.velocityX = 5;
    player.velocityY = 0;
    player.addImage("Image",playerRImg);
  }

  drawSprites();
}