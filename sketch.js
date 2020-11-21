  //creating global variables
  var monkey , monkey_running;
  var banana ,bananaImage, obstacle, obstacleImage;
  var bananaGroup, obstacleGroup;
  var score;
  var survivalTime=0;

function preload()
{
  
  //loading images for monkey,banana and obstacle
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  //creating canvas
  createCanvas(550,400);
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //setting score
  score=0;
  

  
}


function draw() 
{
  //creating background
  background(180);
  
  //displaying surival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Surival Time: "+survivalTime,200,50);
  
  //infinite ground
  if (ground.x < 0)
  {
      ground.x = ground.width/2;
  }
  
  //monkey jump when space key is pressed
  if(keyDown("space")&& monkey.y >= 100)
  {
        monkey.velocityY = -12;
  }    
    
  //adding gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //stop monkey from falling down
  monkey.collide(ground);
  
  //calling food function
  food();
  
  //calling obstacles function
  spawnObstacles();
  
  drawSprites();
}

function food()
{
  if(frameCount%80===0)
  {
    banana=createSprite(550,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}

function spawnObstacles()
{
  if (frameCount%300===0)
  {
    obstacle=createSprite(550,315,10,40);
    obstacle.velocityX=-3;
     obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=300;
    //obstacleGroup.add(obstacle);
  }  
}




