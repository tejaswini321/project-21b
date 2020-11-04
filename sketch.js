var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  thickness = random(23,83);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);
 
  if(hasCollided(bullet,wall)){
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

     if(damage>10){
        wall.shapeColor = "red"
     }
     if(damage<10){
        wall.shapeColor = "green"
     }
  }
  


  drawSprites();
}
function hasCollided(bullet,wall){
    bulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;
   
    if(bulletRightEdge>= wallLeftEdge){
       return true;
    }
       return false;
}