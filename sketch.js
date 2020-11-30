var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obs1,obs2,obs3,obs4,obs5,obs6,obsGroup;
var cloudGroup,cloudimage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
  cloudimage = loadImage("cloud.png");
  
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudGroup = new Group()
  obsGroup = new Group()
  
  
  
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnCloud() 
  spawnObstacles()
  
  
  drawSprites();
}
function spawnCloud(){
  if(frameCount % 60 === 0){
    var cloud = createSprite(600,100,11,11);
    cloud.y = Math.round(random(100,120))
    cloud.addImage(cloudimage)
    cloud.scale = 0.6
    cloud.velocityX =-5 
    cloud.lifetime = 110
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
    
  }
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
     var rand = Math.round(random(1,6))
     switch(rand){
         case 1:obstacle.addImage(obs1)
         break
         case 2:obstacle.addImage(obs2)
         break
         case 3:obstacle.addImage(obs3)
         break
         case 4:obstacle.addImage(obs4)
         break
         case 5:obstacle.addImage(obs5)
         break
         case 6:obstacle.addImage(obs6)
         break
         default:break
         
         
         
         
     }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 140;
    obsGroup.add(obstacle)     
  }
}