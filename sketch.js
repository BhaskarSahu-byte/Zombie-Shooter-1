var backgroundImg, bg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bg = loadImage("assets/Level 1.jpg")

}

function setup() {  
  createCanvas(1200, 550);

  backgroundImg = createSprite(600, 275);
  backgroundImg.addImage(bg);
  backgroundImg.scale = 3;

  //creating the player sprite
  player = createSprite(75, 420, 50, 50);
  player.addImage(shooterImg);
  player.addImage(shooter_shooting);
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300);

}

function draw() {
  background(0);
  spawnZombies();

  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
  player.addImage(shooter_shooting)
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
  player.addImage(shooterImg)
  }

drawSprites();
}

function spawnZombies() {
  if(frameCount%150 === 0){
    zombie = createSprite(1200, 422.5);
    zombie.addImage(zombieImg);
    zombie.velocityX = -3;
    zombie.scale = 0.12;
  }
}